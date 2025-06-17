const skillsList = document.getElementById("skills-list");
const projectsList = document.getElementById("projects-list");

fetch("https://your-backend.onrender.com/api/skills")
  .then(res => res.json())
  .then(data => {
    data.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillsList.appendChild(li);
    });
  });

fetch("https://your-backend.onrender.com/api/projects")
  .then(res => res.json())
  .then(data => {
    data.forEach(project => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
      projectsList.appendChild(li);
    });
  });
