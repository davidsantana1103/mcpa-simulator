# MuleSoft Certified Platform Architect (MCPA) Exam Simulator

A standalone, client-side web application designed to simulate the **Salesforce Certified MuleSoft Platform Architect I (MCPA Level 1)** exam.

## Features

- **322 Practice Questions**: Question bank sized at ~5.4x the real 60-question exam, with verified answers, full explanations, option-by-option rationales, and references to official MuleSoft/Salesforce documentation.
- **Exam-Aligned Domain Weighting**: Questions are tagged to the 9 official exam domains, and Timed Exam mode draws each 60-question test in proportion to the official domain weights (7/10/10/12/17/11/11/10/12%).
- **Two Study Modes**:
  - **Practice Mode**: Instant feedback per question, detailed rationale breakdowns for every option (correct and incorrect), and study references.
  - **Timed Exam Mode (60Q / 120 Min)**: Simulates the real test environment with 60 weighted-random questions and a 120-minute timer. Provides a final score, 70% pass/fail indicator, and domain performance breakdown.
  - **Timed Exam Area Filter**: In Timed Exam mode, a multi-select lets you focus the simulation on one or more of the 9 exam domains (areas). The exam then draws questions only from the areas you select, so you can drill into your weak certification areas. Leave all areas unchecked to use the full question bank. Selections are saved in the browser.
- **Exhibit Questions**: Scenario questions with diagrams ("Refer to the exhibit") mirroring the real exam's exhibit-based items.
- **Zero Backend / 100% Local**: Works offline by saving test progress, answers, flags, and theme directly in the browser's `localStorage`.
- **Keyboard Shortcuts**:
  - `A`-`E` or `1`-`5`: Select or toggle options
  - `Enter`: Check answer
  - `Left` / `Right` or `P` / `N`: Previous / Next question
  - `Shift + F`: Flag / bookmark question for review
- **Search & Filtering**: Filter by domain, answer status (Unanswered, Correct, Incorrect, Flagged), or search by keyword.
- **Verified References**: Every question links to a primary and secondary reference from official MuleSoft documentation, Catalyst articles, or MuleSoft/Salesforce blogs.

## Exam Domains

| Domain | Exam Weight | Questions |
|---|---:|---:|
| Explaining application network basics | 7% | 21 |
| Establishing organizational and platform foundations | 10% | 30 |
| Designing and sharing APIs | 10% | 30 |
| Designing APIs using System, Process, and Experience Layers | 12% | 36 |
| Governing web APIs on Anypoint Platform | 17% | 53 |
| Architecting and deploying API implementations | 11% | 33 |
| Deploying API implementations to CloudHub | 11% | 35 |
| Meeting API quality goals | 10% | 31 |
| Monitoring and analyzing application networks | 12% | 53 |
| **Total** | **100%** | **322** |

Every one of the 47 objectives in the official exam guide is covered by at least two questions.

## How to Run

Simply open `index.html` in any web browser (Chrome, Safari, Edge, Firefox):

```bash
# macOS
open index.html

# Or start a local server if preferred
python3 -m http.server 8000
```
