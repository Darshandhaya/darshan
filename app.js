// Array of skills to display
const skills = ["JavaScript", "HTML", "CSS", "Python", "Java", "Node.js", "React"];

function showSkills() {
    const skillsList = document.getElementById("skills-list");
    skillsList.innerHTML = "";

    // Display each skill with animation
    skills.forEach((skill, index) => {
        setTimeout(() => {
            const skillItem = document.createElement("p");
            skillItem.textContent = skill;
            skillItem.style.fontSize = "1.2rem";
            skillsList.appendChild(skillItem);
        }, index * 300); // Delay to create animation effect
    });
}
