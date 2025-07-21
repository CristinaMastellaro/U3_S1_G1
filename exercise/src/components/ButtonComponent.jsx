const ButtonComponent = (props) => {
  const styleButton = {
    display: "block",
    marginTop: "1em",
  };
  return <button style={styleButton}>{props.testo}</button>;
};

export default ButtonComponent;
