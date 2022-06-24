import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
const ShortDetails = ({ short, loading }) => {
  // const data = {
  //   short_link: `${short.short_link}`,
  //   orignal_link: `${short.original_link}`,
  // };
  // useEffect(() => {
  //   localStorage.setItem("my-short-link", JSON.stringify(data));
  // }, [data]);
  const linkShort = `https://${short.short_link}`;

  return (
    <div className="result">
      {short.short_link && (
        <div className="Container shortMain">
          <div>
            <p className="orignal-link ">https://{short.original_link}</p>
            <div className="link-line"></div>
          </div>
          <div className="flex">
            <p className="short-link">{linkShort}</p>

            <CopyToClipboard text={linkShort}>
              <button>Copy</button>
            </CopyToClipboard>
          </div>
        </div>
      )}
      {loading && <p className={short.short_link ? "hide" : "show"}>Loading</p>}
    </div>
  );
};

export default ShortDetails;
