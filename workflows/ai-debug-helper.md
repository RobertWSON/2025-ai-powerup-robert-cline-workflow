
# AI Debug Helper Workflow

**Purpose:**  
To guide AI-assisted debugging in a structured, reflective way, helping identify causes of code errors and generate fixes efficiently.

---

### 🧠 Context
Use this workflow when you encounter an error in a project (for example, while running a Node.js or Python app).  
The goal is to understand *why* something broke — not just fix it.

---

### 🪜 Steps

1. **Describe the Problem**
   - Copy the full error message or stack trace.
   - Include the command you ran and what you expected to happen.

2. **Ask the AI for Explanation**
   - Example:  
     > “Explain this error in simple terms: [paste error here]. What usually causes this?”

3. **Locate the Cause**
   - Ask:  
     > “Which part of my code is most likely responsible for this?”

4. **Generate a Fix**
   - Request a minimal code change and ask the AI to explain *why* it should work.

5. **Validate and Reflect**
   - Test the fix locally.  
   - Document the result in your session log or commit message.

---

### ✅ Outcome
A clear, reproducible debugging process supported by AI reasoning — helping to learn patterns behind fixes rather than just applying patches.