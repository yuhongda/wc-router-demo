import React, { useState } from 'react';
import ViteReactWebcomponents from './components/DevWcShell';
import './styles/app.less';
import { Input } from 'antd';

function App() {
  const [titleText, setTitleText] = useState('Vite + React + Web Components!');
  const [content, setContent] = useState(
    <>
      Edit <code>tsx files</code> and save to test HMR updates.
    </>
  );

  return (
    <div className="App">
      <ViteReactWebcomponents titleText={titleText} content={content} />
      {/* <Input
        value={titleText}
        onChange={e => {
          setTitleText(e.target.value);
          setContent(
            <>
              Edit <code>tsx files</code> and save to test HMR updates. {e.target.value}
            </>
          );
        }}
      /> */}
    </div>
  );
}

export default App;
