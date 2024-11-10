document.getElementById('resume-form').addEventListener('input', function () {
    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Generate the resume content dynamically
    const resumeContent = `
        <div class="resume-section">
            <div class="left-section">
                <h2>${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>

                <h3>Education</h3>
                <p>${education}</p>

                <h3>Experience</h3>
                <p>${experience}</p>

                <h3>Skills</h3>
                <p>${skills}</p>
            </div>
            <div class="right-section">
                <!-- You can add extra content here like profile picture, social links, etc. -->
            </div>
        </div>
    `;

    // Display the generated resume dynamically
    const resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.innerHTML = resumeContent;

    // Make the resume visible
    resumeDisplay.style.display = "block";
});
