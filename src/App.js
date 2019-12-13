import React from 'react';
import { Layout,Button } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

function App() {
  return (
    <div>
    <Layout>
    
      <Header style={{ background: 'Black', padding: 0 }}>
          <Button style={{ background: '#fffff', padding: 2, margin: 15 }} size="large" icon="home" />
      </Header>
      
      <Content style={{ background: '#fffff', padding: 0 }}>
      </Content>
    
    </Layout>
  </div>
  );
}

export default App;
