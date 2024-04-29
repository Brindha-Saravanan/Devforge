// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import FirstPage from './FirstPage';
import NotFound from './NotFound';
import Signup from './signup';
import Profile from './profile';
import Main from './main';
import Confetti from './Confetti';
import Questions from './Questions';
import TopicPage from './TopicsPage';
import WebDev from './WebDev';
import About from './About';
import NavBar from './NavBar';

function App() {
  const [username, setUsername] = useState('');

  return (
    <Router>
      {/* <NavBar username={username} /> Pass username as a prop to NavBar component */}
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/login" element={<Login setUsername={setUsername} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/main" element={<Main />} />
        <Route path="/topics" element={<TopicPage />} />
        <Route path="/web" element={<WebDev />} />
        <Route path="/ques" element={<Questions />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/cn" element={<Networks />} />
        <Route path="/os" element={<OperatingSystem />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
