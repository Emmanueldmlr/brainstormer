import React, { useEffect, useState } from "react";

export const Questions = () => {
  const [timeLeft, setTimeLeft] = useState(90000);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      console.log("Timer has finished!");
    }
  }, [timeLeft]);
  return <div>Questions</div>;
};
export default Questions;
