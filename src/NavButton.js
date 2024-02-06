
function NavButton({ location, label }) {

  const style = {
    position: 'absolute',
    height: '10vh',
  }

  const labelStyle = {
    position: 'absolute',
    left: '50vw'
  }
  
  style[location] = '12vh';

  if (location === "top" || location === "bottom") {
    style.left = "45.8vw";
  } else [
    style.top = "45.8vw"
  ]


  labelStyle[location] = '15vh';

  return (
  <>
  <h4 style={labelStyle}>{label}</h4>
  <img src="up-arrow.png" style={style}></img>

  </>
  );
}

export default NavButton;