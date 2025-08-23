import React from 'react';
import SubCourse from './SubCourse'

function Course({course}) {
  function getId(courseTitle) {
    return courseTitle.toLowerCase().replaceAll(' ', '-');
  }

  return (
    <section id={getId(course.courseTitle)}>
      <h3>{course.courseTitle}</h3>
      {course.subCourses.map((subCourse, i) => (
        <SubCourse key={i} subCourse={subCourse} />
      ))}
    </section>
  );
}

export default Course;