
> ***Note:** This is a main level 1 heading for the file.  
> **Purpose:** An entry point step-by-step checklist for running structured coding sessions using Cline or any AI model.
# Agentic Coding Workflow Checklist

This checklist guides you through preparing tasks, choosing the right workflow, running Cline effectively, verifying results and reflecting on what was learnt.


> **Note** This is a level 2 major section heading 
> **Purpose** Defines first phase of a workflow, which is preparing a task before interacting with Cline.  
## 1. Prepare the Task

>**Note:** This is a bullet list with a bullet - and a Gitub checklist box [ ] .
> **Purpose:** These are action steps a human completes before selecting a workflow.
- [ ] Clearly state the problem.
- [ ] Copy and paste or summarise the relevant code.
- [ ] Describe expected behaviour.
- [ ] Mention coding setup
      (macOS Mojave operating system, Node, Python and Vue versions, etc.)


> **Note:** A workflow is a predefined set of structured steps that guide an AI on how to approach a specific type of coding task.
> **Purpose:** Identify which workflow applies to the current coding task. 
## 2. Choose the Right Workflow

> **Purpose:** These checklist options map the problem type to the correct workflow file.
- [ ] Debugging → use `ai-debug-helper.md`
- [ ] Learning → use `learning-reflection.md`
- [ ] Refactoring → use `prompts/code-refactor.md`
- [ ] Explaining unfamiliar code → use `prompts/code-explanation.md`


> **Purpose:** Defines how to interact with Cline during the problem-solving phase.
## 3. Run Cline Effectively

> **Purpose:** These checklist items ensure Cline receives clear and structured inputs for best results.
- [ ] Use structured prompts (describe what you tried and include screenshots if helpful) instead of vague questions.
- [ ] Provide error messages *verbatim* (exactly as shown in the terminal or logs).
- [ ] Ask for step-by-step reasoning when needed.
- [ ] Ask Cline to propose a plan before doing code changes.


> **Purpose:** Ensure that code changes work correctly by validating (checking) behaviour and seeking AI help when results differ from expectations.
## 4. Verify Outputs

> **Purpose:** These checklist items guide the validation (checking) process after making code changes.
- [ ] Test the code change locally.
- [ ] Confirm behaviour matches expected output.
- [ ] Ask AI for alternative approaches if needed.


> **Purpose:** Defines why reflection is important, for learning, capturing new insights, and improving future workflows.
## 5. Reflection

> **Purpose:** These checklist items guide the user through recording their learnings and recurring workflow patterns.
- [ ] Document what was learned.
- [ ] Add discoveries to `learning-reflection.md`.
- [ ] Note common patterns for future tasks.