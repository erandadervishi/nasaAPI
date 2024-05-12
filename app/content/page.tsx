"use client";
import React, { useState, useEffect } from "react";

const About = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("effect 1");
  });

  useEffect(() => {
    console.log("effect 1 ONLY THE FIRST TIME");
  }, []);

  useEffect(() => {
    console.log("effect 1 DEPEDE count");
  }, [count]);

  return (
    <button
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      CLick me {count}
    </button>
  );
};
export default About;
