document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();
    generateResume();
});

let projectCount = 1;
let experienceCount = 1;

function generateResume() {
    let output = document.getElementById('resumeOutput');
    output.innerHTML = '';

    // Personal Information
    let name = document.getElementById('name').value;
    let mobile = document.getElementById('mobile').value;
    let email = document.getElementById('email').value;
    let linkedin = document.getElementById('linkedin').value;
    let github = document.getElementById('github').value;

    output.innerHTML += `
        <div class="header">
            <h1>${name}</h1>
            <p>${mobile} | ${email} | <a href="${linkedin}" target="_blank">LinkedIn</a> | <a href="${github}" target="_blank">GitHub</a></p>
        </div>
    `;

    // Education
    let collegeName = document.getElementById('college-name').value;
    let course = document.getElementById('course').value;
    let cgpa = document.getElementById('cgpa').value;
    let collegePeriod = document.getElementById('college-period').value;
    let schoolName = document.getElementById('school-name').value;
    let schoolCourse = document.getElementById('school-course').value;
    let percentage = document.getElementById('percentage').value;
    let schoolPeriod = document.getElementById('school-period').value;

    output.innerHTML += `
        <div class="section">
            <h2>Education</h2>
            <p>${collegeName}, ${course}, GPA: ${cgpa}, ${collegePeriod}</p>
            <p>${schoolName}, ${schoolCourse}, Percentage: ${percentage}%, ${schoolPeriod}</p>
        </div>
    `;

    // Projects
    let projectsHTML = `<div class="section"><h2>Projects</h2>`;
    for (let i = 1; i <= projectCount; i++) {
        let projectName = document.getElementById(`project-name${i}`).value;
        let projectSkills = document.getElementById(`project-skills${i}`).value;
        let projectLink = document.getElementById(`project-link${i}`).value;
        let projectPoints = document.getElementById(`project-points${i}`).value.split('\n').map(point => `<li>${point}</li>`).join('');

        projectsHTML += `
            <div class="project">
                <p><strong>${projectName}</strong> | ${projectSkills} | <a href="${projectLink}" target="_blank">Live</a></p>
                <ul>${projectPoints}</ul>
            </div>
        `;
    }
    projectsHTML += `</div>`;
    output.innerHTML += projectsHTML;

    // Experience
    let experiencesHTML = `<div class="section"><h2>Experience</h2>`;
    for (let i = 1; i <= experienceCount; i++) {
        let companyName = document.getElementById(`company-name${i}`).value;
        let workType = document.getElementById(`work-type${i}`).value;
        let workPeriod = document.getElementById(`work-period${i}`).value;
        let workPoints = document.getElementById(`work-points${i}`).value.split('\n').map(point => `<li>${point}</li>`).join('');

        experiencesHTML += `
            <div class="experience">
                <p><strong>${companyName}</strong> | ${workType} | ${workPeriod}</p>
                <ul>${workPoints}</ul>
            </div>
        `;
    }
    experiencesHTML += `</div>`;
    output.innerHTML += experiencesHTML;

    // Skills
    let skills = document.getElementById('skills').value;

    output.innerHTML += `
        <div class="section">
            <h2>Skills</h2>
            <p>${skills}</p>
        </div>
    `;

    document.getElementById('resumeOutput').style.display = 'block';
    // Show print button
    document.getElementById('print-resume').style.display = 'block';
}

function addProject() {
    projectCount++;
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project');
    projectContainer.innerHTML = `
        <label for="project-name${projectCount}">Project Name</label>
        <input type="text" id="project-name${projectCount}" required>
        <label for="project-skills${projectCount}">Skills Used</label>
        <input type="text" id="project-skills${projectCount}" required>
        <label for="project-link${projectCount}">Project Link</label>
        <input type="text" id="project-link${projectCount}" required>
        <label for="project-points${projectCount}">Project Details</label>
        <textarea id="project-points${projectCount}" required></textarea>
    `;
    document.getElementById('projects').appendChild(projectContainer);
}

function addExperience() {
    experienceCount++;
    const experienceContainer = document.createElement('div');
    experienceContainer.classList.add('experience');
    experienceContainer.innerHTML = `
        <label for="company-name${experienceCount}">Company Name</label>
        <input type="text" id="company-name${experienceCount}" required>
        <label for="work-type${experienceCount}">Work Type</label>
        <input type="text" id="work-type${experienceCount}" required>
        <label for="work-period${experienceCount}">Work Period</label>
        <input type="text" id="work-period${experienceCount}" required>
        <label for="work-points${experienceCount}">Work Details</label>
        <textarea id="work-points${experienceCount}" required></textarea>
    `;
    document.getElementById('experiences').appendChild(experienceContainer);
}

function printResume(resumeOutput) {
    var printContent = document.getElementById(resumeOutput).innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
}
