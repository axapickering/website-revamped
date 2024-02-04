
function NavButton({ location, label }) {

  const style = {
    position: 'absolute',
    height: '10vh',
    left: '45.8vw',
  }

  style[location] = '5vh';

  const labelStyle = {
    position: 'absolute',
    left: '50vw'
  }

  labelStyle[location] = '15vh';

  return (
  <>
  <h4 style={labelStyle}>{label}</h4>
  <img src="up-arrow.png" style={style}></img>

  </>
  );
}

export default NavButton;