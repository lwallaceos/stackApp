function submitData() {
  const userInput = document.getElementById("userInput").value.trim();
  const responseElement = document.getElementById("response");

  if (!userInput) {
    responseElement.textContent = "Please enter a tech stack";
    responseElement.style.color = "red";
    return;
  }

  const technologies = userInput
    .toLowerCase()
    .split(",")
    .map((t) => t.trim());
  const invalidTechs = technologies.filter(
    (t) => t && !validTechnologies.includes(t),
  );

  responseElement.textContent = invalidTechs.length
    ? `Invalid tech stack: ${invalidTechs.join(", ")}`
    : `Valid tech stack: ${userInput}`;
  responseElement.style.color = invalidTechs.length ? "red" : "green";
}
