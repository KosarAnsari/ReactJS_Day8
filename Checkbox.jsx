import { useState } from 'react';

function Checkbox() {
  const [skills, setSkills] = useState([]);
  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills([...skills.filter((item) => item != event.target.value)]);
    }
  };
  return (
    <>
      <h1>Handle CheckBox</h1>
      <h3>Select Your Skills</h3>
      <input onChange={handleSkills} type="checkbox" id="php" value="PHP" />
      <label htmlFor="php">PHP</label>
      <br />
      <input onChange={handleSkills} type="checkbox" id="js" value="JS" />
      <label htmlFor="js">JavaScript</label>
      <br />
      <input
        onChange={handleSkills}
        type="checkbox"
        id="Reactjs"
        value="ReactJS"
      />
      <label htmlFor="Reactjs">React.Js</label>
      <br />
      <input
        onChange={handleSkills}
        type="checkbox"
        id="Nodejs"
        value="NodeJS"
      />
      <label htmlFor="Nodejs">Node.Js</label>
      <p>{skills.toString()}</p>
    </>
  );
}
export default Checkbox;
