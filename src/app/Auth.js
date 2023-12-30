// src/Login.js
import React, { useState } from 'react';
import { auth } from './Firebase-config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    const history = useNavigate();

    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error('Signup Error:', error);
        }
    };
    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // Navigate to the Dashboard on successful login
            const user = userCredential.user;

            // Store user data in localStorage
            localStorage.setItem('userData', JSON.stringify({ uid: user.uid, email: user.email }));

            history('/dashboard');
        } catch (error) {
            console.error('Login Error:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default Login;


// // src/Login.js
// import React, { useState } from 'react';
// import { auth } from './Firebase-config';
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async () => {
//         try {
//             await signInWithEmailAndPassword(auth, email, password);
//         } catch (error) {
//             console.error('Login Error:', error);
//         }
//     };

//     const handleSignup = async () => {
//         try {
//             await createUserWithEmailAndPassword(auth, email, password);
//         } catch (error) {
//             console.error('Signup Error:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <label>Email:</label>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             <label>Password:</label>
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             <button onClick={handleLogin}>Login</button>
//             <button onClick={handleSignup}>Signup</button>
//         </div>
//     );
// };

// export default Login;

// // // src/Login.js
// // import React, { useState } from 'react';
// // import { auth } from './Firebase-config';
// // import { signInWithEmailAndPassword } from 'firebase/auth';

// // const Auth = () => {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');

// //     const handleLogin = async () => {
// //         try {
// //             console.log(auth, email, password);
// //             await signInWithEmailAndPassword(auth, email, password);
// //         } catch (error) {
// //             console.error('Login Error:', error);
// //         }
// //     };

// //     return (
// //         <div>
// //             <h2>Login</h2>
// //             <label>Email:</label>
// //             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
// //             <label>Password:</label>
// //             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
// //             <button onClick={handleLogin}>Login</button>
// //         </div>
// //     );
// // };

// // export default Auth;
