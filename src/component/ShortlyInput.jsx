import axios from "axios";
import React, { useState } from "react";
import ShortDetails from "./ShortDetails";
const ShortlyInput = () => {
  const [inputValue, setinputValue] = useState("");
  const [short, setShort] = useState({});
  const [classes, setClasses] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailState, setemailState] = useState();
  const custom = `${inputValue}`;
  const url = `https://api.shrtco.de/v2/shorten?url=${custom}`;
  const fetchdata = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
      setShort(data.result);
    } catch (error) {
      console.log(error.response);
    }
  };

  const changevalue = (e) => {
    let regex = /^[\S]+$/;
    let inputValues = e.target.value;
    let emailTest = regex.test(inputValues);
    setemailState(emailTest);
    setinputValue(inputValues);
  };

  const submit = (e) => {
    if (emailState === true) {
      fetchdata();
      setinputValue("");
      setClasses(false);
      setLoading(true);
    } else {
      setClasses(true);
    }
  };

  return (
    <>
      <section className="Container shorten-section">
        <div className="input_error">
          <input
            type="url"
            name="link"
            id="link"
            value={inputValue}
            className={classes ? "error" : "sucesss"}
            onChange={changevalue}
            required
          />
          <p className={classes ? "error_message" : "no_error_message"}>
            please enter a text here
          </p>
        </div>

        <button type="submit" onClick={submit}>
          Shorten it
        </button>
      </section>
      <ShortDetails short={short} loading={loading} />
    </>
  );
};

export default ShortlyInput;
