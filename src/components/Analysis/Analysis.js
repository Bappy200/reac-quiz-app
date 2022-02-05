import React from "react";
import Question from "../Question/Question";

function Analysis() {
  return (
    <>
      <div class="analysis">
        <h1>Question Analysis</h1>
        <h4>You answerd 5 out of 10 questions correctly</h4>
        <Question></Question>
      </div>
    </>
  );
}

export default Analysis;
