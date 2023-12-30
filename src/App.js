// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './app/Auth';
import Chat from './app/Chat';
import Dashboard from './app/Dashboard';

function App() {
  return (
    <Router>
      <div>
        {/* <h1>Firebase Auth Demo</h1> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Auth />} />
          <Route path="/chat/:uid1/:uid2" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// // src/App.js
// import React from 'react';
// import Auth from './app/Auth';
// // import Chat from './app/Chat';

// function App() {
//   return (
//     <div>
//       <h1>Firebase Chat App</h1>
//       <Auth />
//       {/*     <Chat /> */}
//     </div>
//   );
// }

// export default App;
