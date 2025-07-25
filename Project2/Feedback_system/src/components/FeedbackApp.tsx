import { useState } from "react";
import FeedbackStat from "./FeedbackStat";
import FeedbackButton from "./FeedbackButton";

const FeedbackApp = () => {
  const feedback_types = ["Likes", "Dislikes", "Neutral"];
  const [feedbacks, setFeedback] = useState([0, 0, 0]);
  const handleClick = (index: number) => {
    const updated = [...feedbacks];
    updated[index]++;
    setFeedback(updated);
  };
  return (
    <>
      {feedbacks.map((feedback, index) => (
        <>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <FeedbackButton
              button_name={feedback_types[index]}
              onClick={() => handleClick(index)}
            ></FeedbackButton>
            <FeedbackStat
              feedback_name={feedback_types[index]}
              feedback={feedback}
            ></FeedbackStat>
          </div>
        </>
      ))}
      <h3>Total Reviews : {feedbacks[0] + feedbacks[1] + feedbacks[2]}</h3>
    </>
  );
};

export default FeedbackApp;
