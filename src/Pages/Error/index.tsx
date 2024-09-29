import { Button } from "antd";
import "./index.scss";
import ScarecrowImage from "../../assets/Scarecrow.png";
import { useNavigate } from "react-router-dom";

function Display() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/")
  }
  return (
    <div className="display">
      <div className="display__img">
        <img src={ScarecrowImage} alt="404-Scarecrow" />{" "}
      </div>
      <div className="display__content">
        <h2 className="display__content--info">I have bad news for you</h2>
        <p className="display__content--text">
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <Button className="btn" onClick={handleClick}>Back to homepage</Button>
      </div>
    </div>
  );
}

export default Display;
