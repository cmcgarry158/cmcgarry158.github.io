import React from 'react';

function Project({project}) {

    const ref = <li><a href={project.refUrl} target="_blank">Reference</a></li>;

    function getDesc() {
        let desc = project.desc;
        desc = desc.split(/(?<!(?:\bvs\.))(?<=[.?!])\s+/g);

        if(project.designSpecUrl) {
            desc = desc.map(sentence => {
                if(sentence.includes("design spec")) {
                    const parts = sentence.split(/design spec/);
                    return (
                        <>
                            {parts[0]}
                            <a href={project.designSpecUrl} target="_blank" >design spec</a>
                            {parts[1]}
                        </>
                    )
                }
                return <p>{sentence}</p>;
            });
        }
        else {
            desc = desc.map(sentence => <p>{sentence}</p>);
        }

        return desc;
    }

    return (
        <div className="project">
            <h5>{project.projectTitle}</h5>
            <ul>
                <li>
                    <a href={project.liveDemoUrl} target="_blank">Live Demo</a>
                </li>
                <li>
                    <a href={project.objectivesUrl} target="_blank">Objectives</a>
                </li>
                {project.refUrl && ref}   
            </ul>
            <div className="project-desc">{getDesc()}</div>
        </div>
  );
}

export default Project;