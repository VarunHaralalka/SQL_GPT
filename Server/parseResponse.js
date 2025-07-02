export function extractJsonFromCodeBlock(text) {
  // First try to extract JSON from code blocks
  const codeBlockMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
  if (codeBlockMatch) {
    try {
      return JSON.parse(codeBlockMatch[1]);
    } catch (err) {
      console.error("Failed to parse JSON from code block:", err.message);
    }
  }

  // If no code block, try to parse the entire text as JSON
  try {
    return JSON.parse(text.trim());
  } catch (err) {
    console.error("Failed to parse JSON from text:", err.message);
    throw new Error("Invalid JSON response from AI");
  }
}
