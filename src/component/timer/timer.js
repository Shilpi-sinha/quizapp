import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const Ref = useRef(null);
  const Navigate = useNavigate();

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  //   return () => {
  //     if(timeLeft=="00:00:00"){
  //         console.log("timeLeft")
  //         Navigate("/end")
  //     }

  //   };

  if (timeLeft == "00:00:00") {
    Navigate("/end");
  }
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };
  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimeLeft(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };
  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimeLeft("00:00:30");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date();
    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 30);
    return deadline;
  };

  return <h1>{timeLeft}</h1>;
};
export default Timer;
