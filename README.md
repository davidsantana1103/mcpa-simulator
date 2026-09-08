# MuleSoft Certified Platform Architect (MCPA) Exam Simulator

A standalone, client-side web application designed to simulate the **Salesforce Certified MuleSoft Platform Architect I (MCPA Level 1)** exam.

## Features

- **100 Authentic Questions**: Complete question dataset with verified answers, full explanations, option-by-option rationales, and deep-dive documentation links.
- **Two Study Modes**:
  - **Practice Mode**: Instant feedback per question, detailed rationale breakdowns, and deep-dive study references with direct anchor links.
  - **Timed Exam Mode (60Q / 120 Min)**: Simulates the real test environment with 60 randomized questions and a 120-minute timer. Provides a final score, 70% pass/fail indicator, and domain performance breakdown.
- **Zero Backend / 100% Local**: Works offline by saving test progress, answers, flags, and theme directly in the browser's `localStorage`.
- **Keyboard Shortcuts**:
  - `A` / `B` / `C` / `D` or `1`–`4`: Select options
  - `Enter`: Check answer
  - `←` / `→` or `P` / `N`: Previous / Next question
  - `F`: Flag / bookmark question for review
- **Search & Filtering**: Filter by domain, answer status (Unanswered, Correct, Incorrect, Flagged), or search by keyword.
- **Deep-Dive Study Links**: Every question links directly to official MuleSoft documentation sections (with `#` anchors), RFC standards, and [ARC720 Course Content](../ARC720-Course-Content.md) lessons.

## How to Run

Simply open `index.html` in any web browser (Chrome, Safari, Edge, Firefox):

```bash
# macOS
open index.html

# Or start a local server if preferred
python3 -m http.server 8000
```
