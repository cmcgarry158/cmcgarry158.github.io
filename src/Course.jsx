import React from 'react';
import SubCourse from './SubCourse'

function Course({course}) {
  function getId(courseTitle) {
    return courseTitle.toLowerCase().replaceAll(' ', '-');
  }

  return (
    <section id={getId(course.courseTitle)}>
      <h3>{course.courseTitle}</h3>
      {["back-end", "backend", "back end", "full-stack", "fullstack", "full stack"]
          .some(term => course.courseTitle.toLowerCase().includes(term)) &&
        (<p id="no-live-demo">No Live Demos are available as GitHub Pages does not allow for custom backend code.</p>)
      }
      {course.subCourses.map((subCourse, i) => (
        <SubCourse key={i} subCourse={subCourse} />
      ))}
    </section>
  );
}

export default Course;