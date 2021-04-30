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

const sectionuah = <p>I graduated in May 2017 from University of Alabama at Huntsville with a degree in Computer Science.</p>;

const sectioncoval = <p>I attended a web developement boot camp and was certified in November 2017</p>;

const sectionqsys = <p>I completed level 1 training in Q Sys General and Control in Jul and Nov 2020 respectively. I also completed level 2 Q Sys Control in Feb 2021.</p>;

ReactDOM.render(nav, document.getElementById('nav'));
ReactDOM.render(sectionuah, document.getElementById('section-uah'));
ReactDOM.render(sectioncoval, document.getElementById('section-coval'));
ReactDOM.render(sectionqsys, document.getElementById('section-qsys'));