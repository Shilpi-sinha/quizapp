import Button from "../../component/button/button";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="container">
      <div id="home" class="flex-column flex-center">
        <h1>Are you Ready ?</h1>
        <br />
        <br />

        <Link to="/game">
          <Button id={"btn"} data={"Play Game"} />
        </Link>
        <br />
        <Link to="/scorePage">
          <Button id={"scoreBtn"} data={"High Scores"} />
        </Link>
        <div className="p1">@shilpi_sinha</div>
      </div>
    </div>
  );
};
export default Home;
