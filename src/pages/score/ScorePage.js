import "../home/style.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../component/button/button";

const ScorePage = () => {
  const [items, setItems] = useState([]);
  // const savedscore = localStorage.getItem(scores);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("scores"));
    if (items) {
      setItems(items);
    }
  }, []);
  return (
    <>
      <div class="container">
        <div id="highScores" class="flex-center flex-column">
          <h1 id="finalScore">Leaderboard</h1>
          <ul id="highScoresList">
          {items?.map(item=>{
            return(
            <li>{item.name}: {item.score}</li>
            )
          })}
          </ul>
          {/* <li>{localStorage.getItem(name)}</li> */}
          <Link to="/">
            <Button id={"btn"} data={"Go Home"} />
          </Link>
        </div>
      </div>
    </>
  );
};
export default ScorePage;
