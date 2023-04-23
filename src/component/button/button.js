import "./style.css";


const Button = (props) => {
  const { data, id } = props;

  return <button className={id}>{data}</button>;
};
export default Button;
