import React, { useState } from 'react';
import './main.css'; // Import any CSS for styling
import prof from './img/profileshort.jpeg'

import { Link } from 'react-router-dom';


function Main() {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('java');

    const handleChange = (newValue) => {
        setCode(newValue);
    };

    const handleRun = () => {
        switch (selectedLanguage) {
            case 'javascript':
                setOutput(eval(code));
                break;
            default:
                setOutput('Language not supported');
        }
    };

    const handleSubmit = () => {
        console.log(code);
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <>

            <div className="app">

                <div className="left-container">
                    <div className='innerContainer'>
                        <h2>Regular Expression Matching</h2>
                        <p><strong>Hard</strong></p>
                        <p><strong>Topics</strong></p>
                        <p><strong>Companies</strong></p>
                        <p>Given an input string <em>s</em> and a pattern <em>p</em>, implement regular expression matching with support for '.' and '*' where:</p>
                        <ul>
                            <li>'.' Matches any single character.​​</li>
                            <li>'*' Matches zero or more of the preceding element.</li>
                        </ul>
                        <p>The matching should cover the entire input string (not partial).</p>
                        <p><strong>Example 1:</strong></p>
                        <p>Input: s = "aa", p = "a"<br></br>
                            Output: false<br></br>
                            Explanation: "a" does not match the entire string "aa".</p>
                        <p><strong>Example 2:</strong></p><t></t>
                        <p>Input: s = "aa", p = "a*"<br></br>
                            Output: true<br></br>
                            Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".</p>
                        <p><strong>Example 3:</strong></p>
                        <p>Input: s = "ab", p = ".*"<br></br>
                            Output: true<br></br>
                            Explanation: ".*" means "zero or more (*) of any character (.)".</p>
                        <p><strong>Constraints:</strong></p>
                        <ul>
                            <li>1 &lt;= s.length &lt;= 20</li>
                            <li>1 &lt;= p.length &lt;= 20</li>
                            <li>s contains only lowercase English letters.</li>
                            <li>p contains only lowercase English letters, '.', and '*'</li>
                            <li>It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.</li>
                        </ul>
                    </div>
                </div>
                <div className="right-container">

                    <div className="profile">
                        <Link to="/profile">
                            <img src={prof} />
                        </Link>

                    </div>
                    <div>
                        <h2 className='your'>Your Code</h2>
                        <select className="dropdown" value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value)}>
                            <option value="c">c programing</option>
                            <option value="c ++">C ++</option>
                            <option value="java">Java</option>
                            <option value="python">python</option>
                        </select>
                    </div>

                    <div className="editor">
                        <textarea
                            value={code}
                            onChange={(e) => handleChange(e.target.value)}
                            placeholder="Write your code here..."
                        ></textarea>
                        <div className="output">
                            <h3>Output:</h3>
                            <pre>{output}</pre>
                        </div>
                    </div>
                    <div className="button">
                        <button onClick={handleRun} className='buttons run'>Run</button>
                        <button onClick={handleSubmit} className='buttons submit'>Submit</button>
                    </div>
                    <div className='outputArea'>

                    </div>
                </div>
            </div>
            <Link to="/">
                <button>Home</button>
            </Link>
        </>
    );
}

export default Main;
