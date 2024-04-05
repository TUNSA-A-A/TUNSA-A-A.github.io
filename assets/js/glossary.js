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
  let currentLetter = "";
  termDefinitionPairs.forEach((pair) => {
    const firstLetter = pair.term.textContent.charAt(0).toUpperCase();

    // Add a new row with the letter as background if it's different from the current letter
    if (firstLetter !== currentLetter) {
      const row = document.createElement("div");
      row.className = "letter-row";
      row.textContent = firstLetter;
      row.setAttribute("data-letter", firstLetter);
      glossary.appendChild(row);
      currentLetter = firstLetter;
    }

    pair.definition.style.display = "none";
    glossary.appendChild(pair.term);
    glossary.appendChild(pair.definition);

    // visibility of the corresponding definition
    pair.term.addEventListener("click", function () {
      pair.definition.style.display =
        pair.definition.style.display === "none" ? "block" : "none";
    });
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
