# MuleSoft Certified Platform Architect (MCPA) Exam Simulator

A standalone, client-side web application designed to simulate the **Salesforce Certified MuleSoft Platform Architect I (MCPA Level 1)** exam.

## Features

- **600 Practice Questions**: Question bank sized at ~5.4x the real 60-question exam, with verified answers, full explanations, option-by-option rationales, and references to official MuleSoft/Salesforce documentation.
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

## Documentation Sources

**All questions and references are sourced exclusively from official MuleSoft/Salesforce documentation:**

- **Official MuleSoft Documentation Portal** — [docs.mulesoft.com](https://docs.mulesoft.com/)
- **MuleSoft/Salesforce Catalyst Documents** — [blogs.mulesoft.com](https://blogs.mulesoft.com/) (Learn APIs, Developer Guides, Strategy)
- **MuleSoft/Salesforce Blog** — [salesforce.com/blog](https://www.salesforce.com/blog/) (API-led connectivity, Architecture, C4E)

> **Principle**: No third-party sources. Every question is traceable to official MuleSoft/Salesforce-published content. The simulator maintains 298 unique reference URLs across all questions, each pointing to an official documentation page, Catalyst article, or Salesforce blog post.

## Exam Domains

| Domain | Question Count | % of 600-Question Bank |
|---|---:|---:|
| Explaining application network basics | 42 | 7% |
| Establishing organizational and platform foundations | 60 | 10% |
| Designing and sharing APIs | 60 | 10% |
| Designing APIs using System, Process, and Experience Layers | 73 | 12% |
| Governing web APIs on Anypoint Platform | 103 | 17% |
| Architecting and deploying API implementations | 65 | 11% |
| Deploying API implementations to CloudHub | 66 | 11% |
| Meeting API quality goals | 59 | 10% |
| Monitoring and analyzing application networks | 72 | 12% |
| **Total** | **600** | **100%** |

- **Exam Weighting**: Questions are weighted to match the official Salesforce MCPA exam proportions
- **Timed Exam Mode**: Draws 60 questions proportionally from the question bank based on these weights
- **Every Objective**: All 47 official exam objectives are covered by at least 2 questions

## How to Run

Simply open `index.html` in any web browser (Chrome, Safari, Edge, Firefox):

```bash
# macOS
open index.html

# Or start a local server if preferred
python3 -m http.server 8000
```

## Architecture

### Technology Stack
- **Vanilla JavaScript** (ES6+) — no frameworks, no dependencies
- **Browser localStorage** — for offline persistence of progress, answers, flags, and preferences
- **Single-file question data** — `questions.js` contains all 600 questions in a structured array

### File Structure
```
mcpa-simulator/
├── index.html          # Main application entry point
├── app.js              # Core application logic (state, rendering, events)
├── questions.js        # Question bank (600 questions)
├── style.css           # Complete styling
├── images/             # SVG diagrams for exhibit questions
├── tools/
│   └── append.js       # Tool to append new questions from JSON
└── docs/
    └── mcpa-exam-guide.md  # Official exam guide reference
```

### Question Data Structure
Each question follows a consistent schema:
```javascript
{
  "id": "q-001",
  "number": 1,
  "title": "Descriptive title",
  "domain": "Official exam domain name",
  "topics": ["Topic 1", "Topic 2"],
  "prompt": "Full question text...",
  "options": [
    {"letter": "A", "text": "Option text"},
    {"letter": "B", "text": "Option text"}
  ],
  "correctAnswers": ["B"],
  "explanation": "Detailed explanation of the correct answer...",
  "rationales": {
    "A": {"type": "Incorrect", "text": "Why A is wrong..."},
    "B": {"type": "Correct", "text": "Why B is right..."}
  },
  "references": {
    "primary": {"title": "Official doc title", "url": "https://docs.mulesoft.com/..."},
    "secondary": {"title": "Additional reference", "url": "https://blogs.mulesoft.com/..."}
  }
}
```

## Adding Questions

Use the provided `tools/append.js` script:
```bash
node tools/append.js batch.json
```

Batch format (JSON array):
```json
[
  {
    "title": "Question title",
    "domain": "Exact domain name from exam guide",
    "topics": ["Topic 1", "Topic 2"],
    "prompt": "Full question prompt...",
    "image": "images/diagram.svg",
    "options": [
      {"letter": "A", "text": "Option A"},
      {"letter": "B", "text": "Option B"}
    ],
    "correct": ["B"],
    "explanation": "Explanation of correct answer...",
    "rationales": {
      "A": {"type": "Incorrect", "text": "Why A is incorrect"},
      "B": {"type": "Correct", "text": "Why B is correct"}
    },
    "references": {
      "primary": {"title": "Primary reference title", "url": "https://docs.mulesoft.com/..."},
      "secondary": {"title": "Secondary reference title", "url": "https://blogs.mulesoft.com/..."}
    }
  }
]
```

## Quality Assurance

- ✅ **Verified Answers**: Each question reviewed against official documentation
- ✅ **Multiple References**: Primary + secondary official source for every question
- ✅ **Exam Coverage**: All 47 official exam objectives covered
- ✅ **Domain Balance**: Questions reflect official exam weighting
- ✅ **Offline Ready**: No network required after initial load
- ✅ **Accessibility**: Keyboard navigation, ARIA labels, semantic HTML
- ✅ **Progressive Enhancement**: Works without JavaScript for basic viewing

## Exam Details (Official)

| Attribute | Value |
|---|---|
| Questions | 60 scored + up to 5 unscored |
| Time Limit | 120 minutes |
| Passing Score | 70% |
| Delivery | Proctored (testing center or online) |
| Prerequisites | None |
| Registration Fee | US$400 / JPY 60,000 |

Source: [Salesforce Help - MCPA Exam Guide](https://help.salesforce.com/s/articleView?id=005298956&type=1)

## Recommended Resources

- **Training**: [Anypoint Platform Architecture: Application Networks (ARC720)](https://trailhead.salesforce.com/en/academy/classes/arc720-anypoint-platform-architecture-application-networks/)
- **Documentation**: [Salesforce Help](https://help.salesforce.com/) — searchable docs, tip sheets, user guides
- **Community**: [Trailblazer Community](https://trailblazercommunity.com/)

---

*This simulator is an independent study aid and is not affiliated with, endorsed by, or officially connected to Salesforce or MuleSoft.*
