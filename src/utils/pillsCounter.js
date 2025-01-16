const skillsContainer = document.getElementById("skills-container");

export function renderSkills(skills) {
  skillsContainer.innerHTML = ""; // Clear previous content

  const fragment = document.createDocumentFragment();
  let remainingCount = 0;

  skills.forEach((skill, index) => {
    const pill = document.createElement("span");
    pill.className =
      "whitespace-nowrap rounded-full bg-gradient-to-br from-gray-50 to-gray-200 px-3 py-1 font-mono text-sm text-gray-800";
    pill.innerText = skill;
    fragment.appendChild(pill);

    skillsContainer.appendChild(fragment);

    // Check if the current pill causes overflow
    if (skillsContainer.scrollHeight > skillsContainer.clientHeight) {
      remainingCount = skills.length - index;
      skillsContainer.removeChild(pill); // Remove the overflowing pill
    }
  });

  // Add the "+X" pill if there are remaining skills
  if (remainingCount > 0) {
    const remainingPill = document.createElement("span");
    remainingPill.className = "remaining-count";
    remainingPill.innerText = `+${remainingCount}`;
    skillsContainer.appendChild(remainingPill);
  }
}
