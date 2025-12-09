# 🪞 Learning Reflection

## 🧠 Context

This reflection documents what I learned after performing a debugging task on a JavaScript `greet()` function that had issues preventing it from being properly tested and called from another file.

---

## 🪜 Steps

### 1. Summarize what you worked on

I debugged a JavaScript `greet()` function that had two main issues:
- Parameter name mismatch: the function parameter was named `name` but the code referenced `names`
- Missing export: the function was never exported, so it could not be tested or called from another file

The function was a simple greeting function that should print "Hello [name]" to the console when called.

### 2. Capture AI interactions

**What I asked the AI:**
- I requested help debugging the `greet()` function
- I provided the buggy code and asked for analysis of why the function wasn't working properly in tests

**How the AI responded:**
- The AI performed a systematic analysis of the code
- It identified two critical issues:
  1. The parameter name mismatch between `name` (parameter) and `names` (usage in code)
  2. The function was not exported, making it inaccessible from test files or other modules

**Most useful/surprising parts:**
- The AI's attention to detail in spotting the parameter name mismatch
- The clear explanation of how module exports work in Node.js
- The systematic approach of checking both syntax errors and module structure

### 3. Identify key learning

**What I understood better after this session:**

> "Realised that parameter naming consistency is crucial in JavaScript functions, and even a small typo like `name` vs `names` can cause runtime errors. Also learned that in Node.js, functions must be explicitly exported using `module.exports` to be accessible from other files, which is a fundamental concept for modular JavaScript development."

**Additional insights:**
- The importance of consistent naming conventions within functions
- How module exports work in Node.js and why they're necessary for code reusability
- The value of systematic debugging by checking both syntax and structural issues

### 4. Note any recurring patterns

**Recurring patterns observed:**
- Parameter name mismatches are a common source of bugs in JavaScript functions
- Missing exports are a frequent issue when working with modular JavaScript code
- Simple typos in variable names can be difficult to spot but have significant impacts

**Potential for automation/checklist:**
- Create a debugging checklist for function exports that includes:
  - Verify parameter names match throughout the function
  - Check that functions are properly exported if they need to be accessed externally
  - Test that exported functions can be imported and called correctly

### 5. Next steps

**One improvement for the next session:**
> "Ask the AI to explain the reasoning behind each fix *before* applying changes, to better understand the underlying concepts and prevent similar mistakes in the future."

**Additional next steps:**
- Practice more module export/import exercises to build familiarity with Node.js patterns
- Create test cases for common function export scenarios
- Study JavaScript module system documentation to understand best practices

---

## ✅ Outcome

A meaningful record of debugging growth that highlights:
- The importance of parameter naming consistency in JavaScript functions
- How module exports enable code reusability and testing in Node.js
- The value of understanding not just *what* is wrong, but *why* it's wrong
- Recognition that debugging involves checking both syntax correctness and structural accessibility
