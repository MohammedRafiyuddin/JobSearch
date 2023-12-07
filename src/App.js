import './App.css';
import { Card } from 'antd';
import React, { useState } from 'react';
import { Button, Input ,Flex} from 'antd';

import Component from './Component';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [inputRows, setInputRows] = useState(1);




  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const hasAtSymbol = newEmail.includes('@');
    setEmailError(!hasAtSymbol);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here
    console.log('Login clicked');

    // Reset email and password states
    setEmail('');
    setPassword('');
  };
const onChange = (e) => {
  console.log('Change:', e.target.value);
};




const addRow = () => {
  setInputRows((prevRows) => prevRows + 1);
};

  return (
    <>
      <div style={{ width: '300px', margin: 'auto', marginTop: '100px', border: '1px solid black', padding: '16px', borderRadius: '8px' }}>
        <Input
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          style={{ marginBottom: '16px', borderColor: emailError ? 'red' : '' }}
        />
        {emailError && <p style={{ color: 'red' }}>Email must contain the '@' symbol</p>}
        <Input.Password
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          style={{ marginBottom: '16px' }}
        />
        <Button type="primary" onClick={handleLogin} style={{ width: '100%' }}>
          Login
        </Button>
      </div>
      <br /><br />
      <Component /><br /><br />




      <div className="Page3" style={{border:'1px solid black', height:'80vh',width:'40vw',marginLeft:'30vw', borderRadius: '8px' }}>
     


      <Card
      title="Job Specification"
      bordered={false}
      style={{
        width: 300,
      }}
    >
      {/* Main input */}
      <Flex vertical gap={32}>
        <Input style={{ width: '30vw', marginLeft: '3vw' }} showCount maxLength={50} onChange={onChange} />

      </Flex><br />

      {/* Render input rows based on state */}
      {[...Array(inputRows)].map((_, index) => (
        <div key={index} className="Display" style={{ display: 'flex', marginLeft: '3vw', width: '40vw' }}>
          <Input style={{ width: '15vw', marginRight: '2px' }} placeholder='Location' />
          <Input style={{ width: '15vw', marginLeft: '6px' }} placeholder='SWD' />
        </div>
      ))} <br />

      {/* '+' button */}
      <button
        style={{ width: '30vw', marginLeft: '3vw', height: '28px', borderRadius: '5px', marginTop: '10px' }}
        onClick={addRow}>+</button>
    </Card>

      </div>
    </>
  );
}

export default App;
