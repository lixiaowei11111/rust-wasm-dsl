import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import wasm, { parserJson } from 'dsl-parser';

function App() {
  const [count, setCount] = useState(0);

  const dslInit = async () => {
    try {
      const res = await wasm();
      console.log('[debug] res', res);
      const result = parserJson('[1,2,3]');
      console.log(result); // 输出解析结果 [value(0, 7, [array(0, 7, [value(1, 2, [number(1, 2)]), value(3, 4, [number(3, 4)]), value(5, 6, [number(5, 6)])])])]
    } catch (error) {
      console.log('[debug] init occurred error', error);
    }
  };

  useEffect(() => {
    dslInit();
  });

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rspack + React + TypeScript</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Rspack and React logos to learn more
      </p>
    </div>
  );
}

export default App;
