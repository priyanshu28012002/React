import React, { useState, useCallback, useEffect , useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState('');

  // use ref

  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numAllow) str += '0123456789';
    if (charAllow) str += '!@#$%^&*';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow]);

  const handleLengthChange = (event) => {
    setLength(parseInt(event.target.value));
  };

  const copyPassword =useCallback(() =>{
    console.log("copy"+password);
    window.navigator.clipboard.writeText(password);
  //  passwordRef.current?select();
  },
  [password])
  useEffect(() => {passwordGenerator()}, [length, numAllow, charAllow]);
  return (
    <>
      <h1>Password Generator</h1>
      <div>
        <input
        type='text'
        value={password}
        readOnly={true}
        ref = {passwordRef}        
        />

        <input
          type="range"
          min={1}
          max={20}
          value={length}
          onChange={handleLengthChange}
        />
        <label>Length: {length}</label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={numAllow}
            onChange={() => setNumAllow(!numAllow)}
          />
          Include Numbers
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={charAllow}
            onChange={() => setCharAllow(!charAllow)}
          />
          Include Special Characters
        </label>
      </div>
      <button onClick={passwordGenerator}>Generate Password</button>
      <button onClick={copyPassword}>Copy Password</button>
      <div>
        <label>Generated Password: {password}</label>
      </div>
    </>
  );
}

export default App;
