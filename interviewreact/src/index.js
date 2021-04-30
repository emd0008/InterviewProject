import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const nav = (
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="education.html">Education</a></li>
    <li><a href="work.html">Work Experience</a></li>
    <li><a href="skills.html">Skills</a></li>
  </ul>
);

const head = <h1>Emily M. D. Cushman</h1>;

const section1 = <p>Young software development seeking job. Loves to work, lists, and good project management.
Dislikes bugs, corrupt databases, and that one client we all know about but don't talk about... Please hire me.
</p>;

ReactDOM.render(head, document.getElementById('head'));
ReactDOM.render(section1, document.getElementById('section1'));
ReactDOM.render(nav, document.getElementById('nav'));