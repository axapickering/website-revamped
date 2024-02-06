
function NavButton({ location, label }) {

  const style = {
    position: 'absolute',
    height: '15vh',
    width: "15vw"

  }

  if (location === "top" || location === "bottom") {
    style.left = "45.8vw";
  } else {
    style.top = "45.8vh";
  }

  style[location] = "5vh"

  return (
  <>
  <div style={style}>
  <h4>{label}</h4>
  <img src="up-arrow.png" ></img>
  </div>
  </>
  );
}

export default NavButton;