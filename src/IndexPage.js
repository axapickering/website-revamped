import NavButton from './NavButton';

function IndexPage() {
  return (
    <>

      <div id="headshot-container">
        <img src='axa_rithm_pic.jpg' id="headshot-pic" alt='' className='rounded'></img>
      </div>

      <div id="name-text-container">
        <h2>Axa Pickering</h2>
        <h4>Software Engineer</h4>
        <p className="welcome-text">
        Welcome to my site!
         I am a former Certified Personal Trainer that has decided to make the pivot to software engineering.
         I'm currently interested in back-end and full-stack roles!
         Check out my ABOUT ME page to learn more about me.
          </p>
      </div>

    <NavButton/>
    </>);
}

export default IndexPage;