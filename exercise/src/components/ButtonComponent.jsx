import ImageComponent from "./ImageComponent";

const ButtonComponent = (props) => {
  const styleButton = {
    display: "block",
    marginTop: "1em",
  };

  const href = "https://place" + props.animal + ".com";
  console.log("props.animal", props.animal);

  return (
    <a href={href} target="_blank">
      <button style={styleButton}>{props.testo}</button>
    </a>
  );
};

export default ButtonComponent;
