import "./style.css"
import { useContext } from "react";
import { MyContext } from "../../context/detailsProvider";
import { Link } from "react-router-dom";
import Button from "../../component/button/button";

const End = () => {
  const [score, setScore] = useContext(MyContext);
  return (
    <div class="end-container">
    <div id="end" class="flex-center flex-column">
        <h3>Your Score: {score}</h3>
        <form>
      <label>Enter your name:
        <input
          type="text"        
        />
      </label>
    </form>
      
        <Button id={"btn"} data={"Save"}/>
        <Link to="/game">
          <Button id={"btn"} data={"Play Again"}/>
        </Link>
        <Link to="/">
          <Button id={"btn"} data={"Home"}/>
        </Link>
        <Link to="/scorePage">
          <Button id={"scoreBtn"} data={"High Scores"} />
        </Link>
      </div>
    </div>
    
  );
};
export default End;
