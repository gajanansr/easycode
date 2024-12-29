function injectSimplifyButton() {
  // Find the problem description container
  const descriptionContainer = document.querySelector(
    '[data-track-load="description_content"]'
  );

  if (!descriptionContainer) return;

  // Create and inject the Simplify button
  const simplifyButton = document.createElement("button");
  simplifyButton.innerHTML = "Simplify";
  simplifyButton.className = "simplify-button";
  simplifyButton.style.cssText = `
    background-color: #FFA116;
    color: #252525;
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    margin: 8px 0;
    cursor: pointer;
  `;

  // Insert the button before the description
  descriptionContainer.parentNode.insertBefore(
    simplifyButton,
    descriptionContainer
  );

  // Create the explanation div once
  const explanationDiv = document.createElement("div");
  explanationDiv.className = "simplified-explanation";
  explanationDiv.style.cssText = `
    background-color: #FFA116;
    color: #252525;
    padding: 16px;
    border-radius: 8px;
    margin: 16px 0;
    font-size: 14px;
    line-height: 1.6;
    display: none;
  `;

  // Insert the explanation div after the button
  simplifyButton.parentNode.insertBefore(
    explanationDiv,
    simplifyButton.nextSibling
  );

  // Add click handler
  simplifyButton.addEventListener("click", async () => {
    try {
      simplifyButton.disabled = true;
      simplifyButton.innerHTML = "Simplifying...";

      // Get problem description text
      const problemText = descriptionContainer.textContent;

      // Call your API endpoint
      const response = await fetch(
        "https://easycode-gajanansr.vercel.app/api/simplify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ problemText }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const formattedResponse = data.simplified
        .split("\n")
        .map((line) => {
          if (line.match(/^(Simplified Problem|Relatable Example|Approach)$/)) {
            return `<h3 style="color: #252525; font-size: 16px; font-weight: 600; margin: 16px 0 4px 0;">${line}</h3>`;
          }
          return `<p style="margin: 8px 0;">${line}</p>`;
        })
        .join("");

      // Create the coffee support section
      const coffeeSupport = `
        <div style="display: flex; justify-content: flex-end; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid rgba(37, 37, 37, 0.2);">
          <a href="https://buymeacoffee.com/gajanansr" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none; background-color: #ffffff; color: #252525; padding: 8px 12px; border-radius: 4px; font-size: 14px; transition: opacity 0.2s;">
            <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" style="height: 18px;">
            <span>Support my work</span>
          </a>
        </div>
      `;

      explanationDiv.innerHTML = coffeeSupport + formattedResponse;
      explanationDiv.style.display = "block";
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to simplify the problem. Please try again.");
    } finally {
      simplifyButton.disabled = false;
      simplifyButton.innerHTML = "Simplify";
    }
  });
}

// Run when the page loads
injectSimplifyButton();

// Also run when the URL changes (for SPA navigation)
let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    injectSimplifyButton();
  }
}).observe(document, { subtree: true, childList: true });
