// src/Dashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase-config';
const Dashboard = () => {
    const [allUserUIDs, setAllUserUIDs] = useState([]);
    const [user, setUser] = useState();
    const history = useNavigate();

    useEffect(() => {
        // Fetch the list of all user UIDs from your backend or Firebase Realtime Database
        // ...
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData || !userData.uid) {
            // If user data is not available, redirect to the login page
            history('/');
            return;
        } else {
            setUser(userData);
        }
        // For demonstration purposes, let's assume we have a list of UIDs
        const mockUserUIDs = [
            { userName: "new", id: 'uzwmpRtKgMSSzxwFjooFhk9I2di1' },
            { userName: "demo1", id: 'rnDEIcRujRPHbjWyex0n6RF11qJ3' },
            { userName: "test", id: 'W3ApDtk1vnQEInxsw0wrEWXnvZy2' }
        ];
        setAllUserUIDs(mockUserUIDs);
    }, []);

    const handleChatButtonClick = (otherUserUID) => {
        // Redirect to the chat room for the two users
        history(`/chat/${user.uid}/${otherUserUID}`);
    };
    const handleLogout = async () => {
        try {
            await auth.signOut(); // Sign out the user using Firebase auth
            localStorage.clear();
            history('/'); // Redirect to the login page after logout
        } catch (error) {
            console.error('Logout Error:', error);
        }
    };
    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={() => handleLogout()}>logout</button>
            <ul>
                {allUserUIDs.map((otherUserUID) => (
                    <li key={otherUserUID.id}>
                        {otherUserUID.userName}, {otherUserUID.id}
                        <button onClick={() => handleChatButtonClick(otherUserUID.id)}>Chat</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;


// import React from 'react';

// const Dashboard = () => {
//     return (
//         <div>
//             <h2>Welcome to the Dashboard!</h2>
//             <p>You have successfully logged in.</p>
//         </div>
//     );
// };

// export default Dashboard;
