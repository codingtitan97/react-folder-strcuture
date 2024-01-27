import React, { useState } from 'react';
import Input from '../styled-components/Input';
import Button from '../styled-components/Button';

function Login() {
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

        if (!error && !passwordError) {
            alert('Login successful!');
        }
    };

    return (
        <div>
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

export default Login;
