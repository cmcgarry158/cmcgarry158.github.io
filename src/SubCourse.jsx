import React from 'react';
import Project from './Project'

function SubCourse({subCourse}) {
  function getId(subCourseTitle) {
    return subCourseTitle.toLowerCase().replace(' ', '-');
  }

  return (
    <section id={getId(subCourse.subCourseTitle)}>
      <h4>{subCourse.subCourseTitle}</h4>
      <div className="projects">
        {subCourse.projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

export default SubCourse;