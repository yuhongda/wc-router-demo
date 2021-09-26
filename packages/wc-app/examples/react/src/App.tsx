import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Card, Icon, Input } from 'antd';
import ViteReactWebcomponents from '@scf/vite-react-webcomponents';

function App() {
  const [titleText, setTitleText] = useState('ViteReactWebcomponents example with React v16!');

  return (
    <div className="App">
      <Card
        title={
          <>
            <Icon type="user" style={{ marginRight: 10 }} />
            React v16 + Ant Design v3 Example
            <Input style={{ marginLeft: 30 }} value={titleText} onChange={e => setTitleText(e.target.value)} />
          </>
        }>
        <ViteReactWebcomponents userName="bjzhoutao" titleText={titleText} height="100%" />
      </Card>
    </div>
  );
}

export default App;
