import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <>
    <div className="container my-4"  style={{ 
        color: props.mode === "light" ? "black" : "#FFFFF0",
        fontFamily: "sans-serif"
        }}>
      <h2 className="container text-decoration-underline">About TextUtils</h2>
      <p className="container my-2" style={{
        fontSize: "18px"
      }}>
        Welcome to TextUtils, your one-stop solution for quick and efficient
        text manipulation. TextUtils offers a seamless experience for converting
        your text to uppercase or lowercase, making it perfect for a variety of
        needs such as professional documentation, casual writing, or social
        media updates. </p><p className="container" style={{
        fontSize: "18px"
      }}> <b>Key Features:</b><br></br> <b>Uppercase Conversion:</b> Transform any text
        into uppercase with a single click, ensuring your words stand out with
        clarity and emphasis.<br></br>  <b>Lowercase Conversion:</b> Convert your text to
        lowercase effortlessly, ideal for creating a more casual or subdued
        tone.<br></br>  <b>Reading Time Summary:</b> Get an instant summary of how much time it
        will take to read your text, helping you to optimize your content for
        better engagement and readability.</p> <p className="container" style={{
        fontSize: "18px"
      }}> Whether you are a writer, editor,
        student, or just someone who loves to play with words, TextUtils is
        designed to simplify your tasks and enhance your productivity. Explore
        our intuitive interface and see how TextUtils can make your text
        management easier and more effective.</p>
        <Link className="container" to = "/" style={{
            textDecoration: "underline",
            color: props.mode === "light" ? "black" : "#FFFFF0",
            marginLeft: "27em"
        }}>Click Here to Begin</Link>
        </div>
    </>
  );
}

export default About;
