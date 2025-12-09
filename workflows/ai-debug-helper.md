 
> **Purpose:** Main heading represents how to run the AI-assisted debugging workflow to understand why errors happen and fix them efficiently.
# AI Debug Helper Workflow

> **Note:** This level 3 heading sets context (reason) for when to use the debugging workflow. 
> **Purpose:** This context uses a brain 🧠 emoji symbol to represent thinking through a situation and understanding why an error occured. 
### 🧠 Context 

Use this workflow when you (a user) find an error in a project (for example, while running a Node.js or Python app).  
The goal is to understand *why* something broke — not just fix it.

---

> **Purpose:** This heading defines the sequence of actions a user should follow during AI-assisted debugging. The steps 🪜 emoji symbol represents moving through the process one stage at a time.
### 🪜 Steps

> **Note:** Sub-headings inside this section are ordered list step items, each containing a list of user actions.
1. **Describe the Problem**
   > **Purpose:** These actions give AI a complete picture of what happened so it can analyse the situation accurately.
   - Copy the full error message or stack trace (sequence of functions program was running when it failed).
   - Include the command you ran and what you expected to happen.

2. **Ask AI for an Explanation**
   > **Purpose:** This action helps the AI interpret the error clearly and explain it in human terms.
   > **Note:** Action label with a block quote message that a user should ask AI.
   - Example:   
     > “Explain this error in simple terms: [paste error here]. What usually causes this?”

3. **Locate the Cause**
   > **Purpose:** This action helps the user narrow down which part of the code caused the error.
   > **Note:** Action label with a block quote message that a user should ask AI to identify likely cause. 
   - Ask:  
      > “Which part of my code is most likely responsible for this?”

4. **Generate a Fix**
   > **Purpose:** This action asks the AI to produce an efficient fix for a problem and explain the reasoning behind it.   
   - Request a minimal code change and ask the AI to explain *why* it should work.

5. **Validate and Reflect**
   > **Purpose:** This action checks whether the fix works correctly and captures what was learnt for future debugging sessions
   - Test the fix locally.  
   - Document the result in your session log (your own notes on debugging process) or commit message.

---

> **Note:** This heading shows the final result of the debugging workflow and the checkmark ✅ emoji symbol represents completion.
### ✅ Outcome
> **Purpose:** The points below outline the benefits a user gains after completing the debugging steps. These outcomes provide clarity gained from the process, represented by a checkmark ✅ emoji symbol.
- A clear, reproducible debugging process supported by AI reasoning 
- Helps a user learn patterns behind fixes rather than just applying patches (quick fixes without understanding).