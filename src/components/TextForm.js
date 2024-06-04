import React from "react";
import { useState } from "react";

function TextForm(props) {
  const [summary, setSummary] = useState(false);
  const [preview, setPreview] = useState(false);
  const [text, setText] = useState("Enter Text Here");
  // Function to display the text entered by the user
  const changeText = (e) => {
    setText(e.target.value);
  };
  // Function to convert the text to Uppercase
  const uppercase = () => {
    setText(text.toUpperCase());
  };
  // Function to convert the text to Lowercase
  const lowercase = () => {
    setText(text.toLowerCase());
  };
  // Function to clear text
  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "#FFFFF0",
            marginTop: "30px",
            fontFamily: "Arial"
         }}
      >
        <h2>{props.heading}</h2>
        <div className={`mb-3`}>
          <textarea
            className="form-control"
            value={text}
            onChange={changeText}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "#F0F8FF" : "#FFFFF0",
              marginTop: "20px",
              fontFamily: "Arial"
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={uppercase} style={{fontFamily: "Arial"}}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={lowercase} style={{fontFamily: "Arial"}}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setSummary(!summary);
          }}
          style={{fontFamily: "Arial"}}
        >
          {summary ? "Hide " : "Show "}Summary
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={() => {
            setPreview(!preview);
          }}
          style={{fontFamily: "Arial"}}
        >
          {preview ? "Hide " : "Show "}Preview
        </button>
        <button className="btn btn-primary" onClick={clearText} style={{fontFamily: "Arial"}}>
          Clear Text
        </button>
      </div>
      <div className="container my-2" style={{fontFamily: "Arial"}}>
        {summary && (
          <>
            <h2 style={{ color: props.mode === "light" ? "black" : "#FFFFF0",
                fontFamily: "Arial"
             }}>
              Your Text Summary
            </h2>
            <p style={{ color: props.mode === "light" ? "black" : "#FFFFF0",
                fontFamily: "Arial"
             }}>
              {
                text
                  .replace(/\n/g, " ")
                  .split(" ")
                  .filter((value) => value !== "").length
              }{" "}
              Words and {text.length} Characters
            </p>
            <p
              className="mb-2"
              style={{ color: props.mode === "light" ? "black" : "#FFFFF0",
              fontFamily: "Arial"
               }}
            >
              Time taken if read with a slow speed{" "}
              {0.008 *
                text
                  .replace(/\n/g, " ")
                  .split(" ")
                  .filter((value) => value !== "").length}{" "}
              minutes or{" "}
              {0.008 *
                text
                  .replace(/\n/g, " ")
                  .split(" ")
                  .filter((value) => value !== "").length}{" "}
              seconds{" "}
            </p>
            <p style={{ color: props.mode === "light" ? "black" : "#FFFFF0",
                fontFamily: "Arial"
             }}>
              Time taken if read with an average speed{" "}
              {0.005 *
                text
                  .replace(/\n/g, " ")
                  .split(" ")
                  .filter((value) => value !== "").length}{" "}
              minutes or{" "}
              {0.005 *
                text
                  .replace(/\n/g, " ")
                  .split(" ")
                  .filter((value) => value !== "").length}{" "}
              seconds{" "}
            </p>
          </>
        )}
      </div>
      {preview && (
        <>
          <h2
            className="mx-2"
            style={{ color: props.mode === "light" ? "black" : "#FFFFF0",
            fontFamily: "Arial"
             }}
          >
            Preview
          </h2>
          <p
            className="mx-2"
            style={{ color: props.mode === "light" ? "black" : "#FFFFF0",
            fontFamily: "Arial"
             }}
          >
            {text.length > 0 ? text : "No Text to Preview"}
          </p>
        </>
      )}
    </>
  );
}

export default TextForm;
