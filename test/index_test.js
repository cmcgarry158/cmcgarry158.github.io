import assert from 'assert';
import {sections} from '../src/sections.js';

describe('URL check: ', () => {
    sections.forEach((course) => {
        course.subCourses.forEach((subCourse) => {
            subCourse.projects.forEach((project) => {
                testUrl(project.projectTitle, 'liveDemoUrl', project.liveDemoUrl);
                
                testUrl(project.projectTitle, 'objectivesUrl', project.objectivesUrl);

                if(project.refUrl) {
                    testUrl(project.projectTitle, 'refUrl', project.refUrl);
                }

                if(project.designSpecUrl) {
                    testUrl(project.projectTitle, 'designSpecUrl', project.designSpecUrl);
                }
            })
        });
    });
});

function testUrl(projectTitle, urlName, url) {
    it(`${projectTitle} ${urlName} should return 200`, async () => {
        const response = await fetch(url);
        assert.equal(response.status, 200);
    });
}