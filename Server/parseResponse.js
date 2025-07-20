export function extractJsonFromCodeBlock(text) {
  const codeBlockMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
  if (codeBlockMatch) {
    try {
      return JSON.parse(codeBlockMatch[1]);
    } catch (err) {
      console.error("Failed to parse JSON from code block:", err.message);
    }
  }

  try {
    return JSON.parse(text.trim());
  } catch (err) {
    console.error("Failed to parse JSON from text:", err.message);
    throw new Error("Invalid JSON response from AI");
  }
}
