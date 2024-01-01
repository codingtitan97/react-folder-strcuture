import React, { useState } from 'react';
import Input from './components/styled-components/Input';
import Button from './components/styled-components/Button';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    console.log(error)
    if (!password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }

    // Perform login logic if no errors
    if (!error && !passwordError) {
      // Your login logic here
      alert('Login successful!');
    }
  };

  return (
    <div style={{ width: '300px', margin: 'auto' }}>
      <h1>Login Form</h1>

      <Input
        label="Email"
        type="email"
        isRequired={true}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onError={(error) => setError(error)}
      />

      <Input
        label="Password"
        type="password"
        isRequired={true}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onError={(error) => setError(error)}
      />

      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}

export default App;
