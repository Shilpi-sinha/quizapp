import "../../pages/home/style.css";


const Button = (props) => {
  const { data, id, handleClick } = props;

  return <button className={id} onClick={handleClick}>{data}</button>;
};
export default Button;
