import "./Amazon.css";

function Amazon(props) {
  return (
    <div className="Amazon">
      <img src={props.src} alt="" />
      <p>{props.name}</p>
      <p>{props.id}</p>
      <p>{props.price}</p>
    </div>
  );
}
export default Amazon;
