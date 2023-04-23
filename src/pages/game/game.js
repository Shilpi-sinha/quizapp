import "./style.css";
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
import styled from "@emotion/styled";
import { FormHelperText, colors, withTheme } from "@mui/material";
import { green } from "@mui/material/colors";
import Button from "../../component/button/button";

// const BpIcon = styled("span")(({ theme }) => ({
//   borderRadius: "50%",
//   width: 16,
//   height: 16,
//   boxShadow:
//     theme.palette.mode === "dark"
//       ? "0 0 0 1px rgb(16 22 26 / 40%)"
//       : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
//   backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
//   backgroundImage:
//     theme.palette.mode === "dark"
//       ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
//       : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
//   ".Mui-focusVisible &": {
//     outline: "2px auto rgba(19,124,189,.6)",
//     outlineOffset: 2,
//   },
//   "input:hover ~ &": {
//     backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
//   },
//   "input:disabled ~ &": {
//     boxShadow: "none",
//     background:
//       theme.palette.mode === "dark"
//         ? "rgba(57,75,89,.5)"
//         : "rgba(206,217,224,.5)",
//   },
// }));

// const BpCheckedIcon = styled(BpIcon)({
//   backgroundColor: "#137cbd",
//   backgroundImage:
//     "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
//   "&:before": {
//     display: "block",
//     width: 16,
//     height: 16,
//     backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
//     content: '""',
//   },
//   "input:hover ~ &": {
//     backgroundColor: "#106ba3",
//   },
// });

// Inspired by blueprintjs
// function BpRadio(props) {
//   return (
//     <Radio
//       disableRipple
//       color="default"
//       checkedIcon={<BpCheckedIcon />}
//       icon={<BpIcon />}
//       {...props}
//     />
//   );
// }

const Game = (props) => {
  const [score, setScore] = useContext(MyContext);
  const [randomQuestion, setRandomQuestion] = useState({});
  const [answer, setAnswer] = useState();
  const [next, setNext] = useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");
  const [error, setError] = React.useState(false);
  const [value, setValue] = React.useState("");

  const getRandomObject = (array) => {
    const randomdata = array[Math.floor(Math.random() * array.length)];

    setRandomQuestion(randomdata);
    setAnswer(randomdata.answer);
    console.log(answer);
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
      }, 1000);
      setValue()
    } else if (value !== answer && value) {
      setScore(score);
      setHelperText("Sorry, wrong answer!");
      setError(true);
      setTimeout(() => {
        setNext(!next);
        setHelperText(" ");
      }, 1000);
      setValue()
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
              value={randomQuestion.choice1}
              control={<Radio  sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 28,
                },
                color: "white",
                '&.Mui-checked': {
                  color: "white"
                },
              }} />}
              label={randomQuestion.choice1}
              
            />
            <FormControlLabel
              value={randomQuestion.choice2}
              control={<Radio sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 28,
                },
                color: "white",
                '&.Mui-checked': {
                  color: "white"
                },
              }}/>}
              label={randomQuestion.choice2}
            />
            <FormControlLabel
              value={randomQuestion.choice3}
              control={<Radio sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 28,
                },
                color: "white",
                '&.Mui-checked': {
                  color: "white"
                },
              }}/>}
              label={randomQuestion.choice3}
            />
            <FormControlLabel
              value={randomQuestion.choice4}
              control={<Radio sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 28,
                },
                color: "white",
                '&.Mui-checked': {
                  color: "white"
                },
              }}/>}
              label={randomQuestion.choice4}
            />
          </RadioGroup>
          <FormHelperText>
            <p>{helperText}</p>
          </FormHelperText>        
        </FormControl>
   
        <Button type="submit" id={"btn"} data={"Submit"} />
        <Link to="/end">
          <Button id={"btn"} data={"End Game"}/>
        </Link>
      </form>
    </div>
  );
};
export default Game;
