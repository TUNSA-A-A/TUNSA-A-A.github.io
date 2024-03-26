document.addEventListener("DOMContentLoaded", function () {
  const glossary = document.querySelector(".glossary");
  const toggleButton = document.getElementById("toggleButton");
  const terms = Array.from(glossary.querySelectorAll("dt"));
  const definitions = Array.from(glossary.querySelectorAll("dd"));

  // Combine dt and dd elements into pairs
  const termDefinitionPairs = terms.map((term, index) => {
    return { term, definition: definitions[index] };
  });

  // Sort pairs alphabetically based on dt text content
  termDefinitionPairs.sort((a, b) =>
    a.term.textContent.localeCompare(b.term.textContent)
  );

  // Remove existing dt and dd elements
  terms.forEach((term) => {
    glossary.removeChild(term);
  });
  definitions.forEach((definition) => {
    glossary.removeChild(definition);
  });

  // Append sorted dt and dd elements back to the glossary
  termDefinitionPairs.forEach((pair) => {
    glossary.appendChild(pair.term);
    glossary.appendChild(pair.definition);
  });
  // Control the visibilty of the button
  toggleButton.addEventListener("click", function () {
    if (glossary.style.display === "none") {
      glossary.style.display = "block";
      toggleButton.textContent = "Close Glossary";
    } else {
      glossary.style.display = "none";
      toggleButton.textContent = "Open Glossary";
    }
  });
});
