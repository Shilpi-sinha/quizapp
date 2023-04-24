import "../home/style.css";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/detailsProvider";
import { Link, ScrollRestoration, useNavigate } from "react-router-dom";
import Button from "../../component/button/button";

const End = () => {
  const [score, setScore] = useContext(MyContext);
  const [name, setName] = useState();
  const navigate =useNavigate();
  function getScoreFromLocalStorage(key) {
    const savedscore = localStorage.getItem(key);
    return JSON.parse(savedscore) || [];
  }

  const saveScore = () => {
    const savedScores = getScoreFromLocalStorage("scores");
    if (name && (score == 0 || score)) {
      const scoreObj = { name: name, score: score };
      savedScores.push(scoreObj);
      localStorage.setItem("scores", JSON.stringify(savedScores));
      alert("High Score Saved", name, ":", score);
      setName("")
      setScore(0)
      navigate('/')
    } else if(name && score == 0){
      alert("Cant save score zero. Please Try again");
      navigate('/')
    } else {
      alert("Please Enter Name to save Score");
    }
  };
  return (
    <div class="end-container">
      <div id="end" class="flex-center flex-column">
        <h3>Your Score: {score}</h3>
        <form>
          <label>
            Enter your name:
            <input
              placeholder="Enter Your Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
        </form>

        <button className="btn" onClick={saveScore}>
          Save
        </button>
        <Link to="/game">
          <Button id={"btn"} data={"Play Again"} />
        </Link>
        <Link to="/">
          <Button id={"btn"} data={"Home"} />
        </Link>
        <Link to="/scorePage">
          <Button id={"scoreBtn"} data={"High Scores"} />
        </Link>
      </div>
    </div>
  );
};
export default End;
