import Checkbox from './Checkbox.jsx';
import User from './User.jsx';
import Wrapper from './Wrapper.jsx';
import { useState } from 'react';
function App() {
  const [val, setVal] = useState('');
  const [name, setName] = useState('');
  const [Email, SetEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('Female');
  const [city, setCity] = useState('Delhi');
  return (
    <>
      <h1>Other concepts of props</h1>
      <User name="John" />
      <User />
      <Wrapper color="blue">
        <p>Hello Everyone! my name is Wrapper Component.</p>
        <p style={{ color: 'red' }}>Learn more about me.</p>
      </Wrapper>
      <Wrapper>I am a New Component.</Wrapper>

      <h1>Get Input field Value</h1>
      <input
        type="text"
        value={val}
        onChange={(event) => setVal(event.target.value)}
        placeholder="Enter User name"
      />
      <p>{val}</p>
      <button onClick={() => setVal('')}>Clear Button</button>

      <hr />
      <h1>Controlled Components</h1>
      <form action="" method="get">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <br />
        <br />
        <input
          type="email"
          value={Email}
          onChange={(e) => SetEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <br />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <button>Submit</button>
        <button
          onClick={() => {
            setName('');
            SetEmail('');
            setPassword('');
          }}
        >
          Clear
        </button>
        <p>{name}</p>
        <p>{Email}</p>
        <p>{password}</p>
      </form>
      <hr />
      <Checkbox />
      <hr />
      <h1>Handle Radio and Dropdown</h1>
      <h4>Select Gender</h4>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="Male"
        value={'Male'}
        checked={gender === 'Male'}
      />
      <label htmlFor="Male">Male</label>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="Female"
        value={'Female'}
        checked={gender === 'Female'}
      />
      <label htmlFor="Female">Female</label>
      <p>Selected Gender:{gender} </p>
      <hr />
      <h4>Select City</h4>
      <select
        defaultValue={'Delhi'}
        onChange={(event) => setCity(event.target.value)}
      >
        <option value="noida">Noida</option>
        <option value="Gurgaon">Gurgaon</option>
        <option value="Delhi">New Delhi</option>
      </select>
      <p>Selected City :{city}</p>
    </>
  );
}
export default App;
