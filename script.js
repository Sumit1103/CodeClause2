const resumeForm = document.getElementById('resumeForm');
const resumeOutput = document.getElementById('resumeOutput');

resumeForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const website = document.getElementById('website').value;
  const education = document.getElementById('education').value;
  const experience = document.getElementById('experience').value;
  const skills = document.getElementById('skills').value;
  const projects = document.getElementById('projects').value;
  const awards = document.getElementById('awards').value;
  const interests = document.getElementById('interests').value;

  const resumeHTML = `
    <h2>${fullName}</h2>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Address: ${address}</p>
    <p>Website: ${website}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Work Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>

    <h3>Projects</h3>
    <p>${projects}</p>

    <h3>Awards</h3>
    <p>${awards}</p>

    <h3>Interests</h3>
    <p>${interests}</p>
  `;

  resumeOutput.innerHTML = resumeHTML;
});
