import "../home/style.css";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/detailsProvider";
import questions from "../../data/data";
import { Link } from "react-router-dom";
import Timer from "../../component/timer/timer";
import { FormHelperText, colors, withTheme } from "@mui/material";
import { green } from "@mui/material/colors";
import Button from "../../component/button/button";

const Game = (props) => {
  const [score, setScore] = useContext(MyContext);
  const [randomQuestion, setRandomQuestion] = useState({});
  const [answer, setAnswer] = useState();
  const [next, setNext] = useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");
  const [error, setError] = React.useState(false);
  const [value, setValue] = React.useState("");

  // let rdarr = [];
  const getRandomObject = (array) => {
    const randomdata = array[Math.floor(Math.random() * array.length)];

    // if (rdarr.includes(randomdata)) {
    //   getRandomObject();
    // } else {
      setRandomQuestion(randomdata);
      setAnswer(randomdata.answer);
      console.log(answer);
    
    // rdarr.push(randomdata);

  };

  useEffect(() => {
    getRandomObject(questions);
  }, [next]);

  const handleChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
    // if (e.target.value === answer) {
    //   setScore(score + 100);
    // } else setScore(score - 100);
  };

  const handleEvent = (event) => {
    event.preventDefault();

    if (value === answer && value) {
      setScore(score + 100);
      setHelperText("You got it!");
      setError(false);
      setTimeout(() => {
        setNext(!next);
        setHelperText(" ");
      }, 500);
      setValue();
    } else if (value !== answer && value) {
      setScore(score);
      setHelperText("wrong answer!");
      setError(true);
      setTimeout(() => {
        setNext(!next);
        setHelperText(" ");
      }, 500);
      setValue();
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };
  return (
    <div className="block">
      <h5>{"Score:" + score}</h5>
      <Timer />
      <form onSubmit={handleEvent}>
        <FormControl required>
          <FormLabel id="demo-controlled-radio-buttons-group">
            {randomQuestion.question}
          </FormLabel>
          <RadioGroup
            id="demo-controlled-radio-ans-group"
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            onChange={handleChange}
          >
            <FormControlLabel
              style={{ fontSize: "1.1rem" }}
              value={randomQuestion.choice1}
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 28,
                    },
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                  }}
                />
              }
              label={randomQuestion.choice1}
            />
            <FormControlLabel
              value={randomQuestion.choice2}
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 28,
                    },
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                  }}
                />
              }
              label={randomQuestion.choice2}
            />
            <FormControlLabel
              value={randomQuestion.choice3}
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 28,
                    },
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                  }}
                />
              }
              label={randomQuestion.choice3}
            />
            <FormControlLabel
              value={randomQuestion.choice4}
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 28,
                    },
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                  }}
                />
              }
              label={randomQuestion.choice4}
            />
          </RadioGroup>
          <FormHelperText>
            <p>{helperText}</p>
          </FormHelperText>
        </FormControl>

        <Button type="submit" id={"btn"} data={"Submit"} />
        <Link to="/end">
          <Button id={"btn"} data={"End Game"} />
        </Link>
      </form>
    </div>
  );
};
export default Game;
