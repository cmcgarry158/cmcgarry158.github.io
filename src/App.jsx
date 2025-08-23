import React from 'react';
import {sections} from './sections';
import Course from './Course';

function App() {
  return (
    <div>
      <h2>Projects</h2>
      {sections.map((course, i) => (
        <Course course={course} />
      ))}
    </div>
  )
}

export default App;