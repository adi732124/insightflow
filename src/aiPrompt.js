export const generateThoughtProcessPrompt = (currentDesc, revampedDesc) => {
    return `
    Generate structured design thought process for a screen:
    - Current UI: ${currentDesc}
    - Revamped UI: ${revampedDesc}

    Return JSON:
    {
      "problem_context": "...",
      "user_insight": "...",
      "product_decision": "...",
      "expected_impact": ["...", "..."]
    }
  `;
};