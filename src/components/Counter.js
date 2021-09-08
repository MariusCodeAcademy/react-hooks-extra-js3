import { useState } from 'react';

function slowFunction(num) {
  console.log('slowFunction RAN');
  for (let i = 0; i < 100000000; i++) {
    const result = num * 2;
  }
  return num * 2;
}

export default function Counter() {
  const [number, setNumber] = useState(0);
  const [themeOn, setThemeOn] = useState(false);

  const numberCalculated = slowFunction(number);

  function themeHandler() {
    setThemeOn((prevState) => !prevState);
  }

  return (
    <div
      style={{
        backgroundColor: themeOn ? 'black' : 'white',
        color: themeOn ? 'white' : 'black',
      }}
    >
      <h1>Counter</h1>
      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        type='number'
        placeholder='enter number'
      />
      <button onClick={themeHandler}>Toggle theme</button>
      <h2>{numberCalculated}</h2>
    </div>
  );
}
