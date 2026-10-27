# MCPA Exam Simulator Repository Documentation

## Overview
This repository contains a **standalone web application** that simulates the **Salesforce Certified MuleSoft Platform Architect I (MCPA Level 1)** exam. The application provides 322 practice questions designed to be ~5.4x the real 60-question exam, with comprehensive explanations and references to official MuleSoft/Salesforce documentation.

## Key Features

### Core Functionality
- **322 Practice Questions**: Complete question bank with verified answers, option-by-option rationales, and official documentation references
- **Exam-Aligned Domain Weighting**: Questions tagged to 9 official exam domains (7%/10%/10%/12%/17%/11%/11%/10%/12% weights)
- **Two Study Modes**:
  - **Practice Mode**: Instant feedback per question with detailed rationales and study links
  - **Timed Exam Mode (60Q / 120 Min)**: Full exam simulation with 120-minute timer, scoring, and domain breakdown
- **Exhibit Questions**: Scenario questions with diagrams matching real exam format
- **Zero Backend / 100% Local**: Operates completely offline using browser localStorage
- **Keyboard Shortcuts**: Full keyboard navigation support for efficient studying
- **Search & Filtering**: Advanced filtering by domain, status, and keyword search
- **Verified References**: Every question links to primary/secondary sources from official MuleSoft documentation

### Exam Domains (Weighted)
| Domain | Weight | Questions | % of Bank |
|--------|--------|-----------|-----------|
| Explaining application network basics | 7% | 42 | 7% |
| Establishing organizational and platform foundations | 10% | 60 | 10% |
| Designing and sharing APIs | 10% | 60 | 10% |
| Designing APIs using System, Process, and Experience Layers | 12% | 73 | 12% |
| Governing web APIs on Anypoint Platform | 17% | 103 | 17% |
| Architecting and deploying API implementations | 11% | 65 | 11% |
| Deploying API implementations to CloudHub | 11% | 66 | 11% |
| Meeting API quality goals | 10% | 59 | 10% |
| Monitoring and analyzing application networks | 12% | 72 | 12% |
| **Total** | **100%** | **600** | **100%** |

## Technical Architecture

### Implementation
- **Framework**: Vanilla JavaScript (no dependencies)
- **Storage**: Browser localStorage for persistence
- **Data Format**: Questions stored in `questions.js` as a global JavaScript array
- **Questions.js Structure**: Each question includes:
  - `id`, `number`, `title`, `domain`, `topics`
  - `prompt`, `options`, `correctAnswers`
  - `explanation`, `rationales`, `references`
  - Both primary and secondary reference URLs

### Data Sources
- **Questions**: Sourced from official MCPA exam guidelines and verified MuleSoft documentation
- **References**: Every question links to official MuleSoft documentation (docs.mulesoft.com), Catalyst articles, and Salesforce blogs
- **Total Unique References**: 298 URLs covering official documentation, blogs, and community resources

## Principles

### 1. Official Documentation Sourcing
All questions and references are sourced from:
- **Official MuleSoft Documentation Portal** (docs.mulesoft.com)
- **MuleSoft/Salesforce Catalyst Documents** (blogs.mulesoft.com)
- **MuleSoft/Salesforce Blog** (salesforce.com/blog)

### 2. Exam Relevance
- Every one of the 47 objectives in the official exam guide is covered by at least 2 questions
- Questions align with official domain weights for realistic exam simulation
- Content reflects current MuleSoft platform knowledge requirements

### 3. User Experience
- **Zero Backend Architecture**: Complete offline functionality
- **Progressive Disclosure**: Detailed explanations only after attempting questions
- **Study-Friendly**: Option-by-option rationales for learning incorrect choices too
- **Efficient Navigation**: Keyboard shortcuts and filtering for rapid study

### 4. Technical Excellence
- **Single-File Design**: Questions contained in `questions.js` for easy management
- **Modular Structure**: `app.js` contains all application logic
- **Template-Driven UI**: Minimal HTML structure with dynamic content population
- **Accessibility**: ARIA labels and semantic HTML
- **Theme Support**: Dark/light mode toggle

### 5. Quality Assurance
- **Verified Answers**: Each question reviewed for accuracy
- **Multiple References**: Primary and secondary sources for each question
- **Comprehensive Explanations**: Detailed rationale for both correct and incorrect options
- **Regular Updates**: Continuous addition of new questions and references

## Implementation Notes

### Question Format
```javascript
{
  "id": "q-001",
  "number": 1,
  "title": "Application Network Basics - Interface, implementation, and client",
  "domain": "Explaining application network basics",
  "topics": ["API Interface", "API Implementation"],
  "prompt": "An architect is explaining API-led connectivity terminology...",
  "options": [
    {"letter": "A", "text": "The Mule app is the API interface..."},
    {"letter": "B", "text": "The RAML is the API interface..."}
  ],
  "correctAnswers": ["B"],
  "explanation": "Correct answer: B. MuleSoft distinguishes...",
  "rationales": {
    "A": {"type": "Incorrect", "text": "These roles are reversed..."},
    "B": {"type": "Correct", "text": "The specification defines..."}
  },
  "references": {
    "primary": {"title": "Anypoint Platform Glossary", "url": "https://docs.mulesoft.com/general/glossary"},
    "secondary": {"title": "MuleSoft — What is an API?", "url": "https://www.mulesoft.com/resources/api/what-is-an-api"}
  }
}
```

### Files in Repository
- **`index.html`**: Main application template with navigation and UI structure
- **`app.js`**: Core application logic and state management
- **`questions.js`**: Complete question bank (600 questions total)
- **`style.css`**: Styling for the application
- **`images/`**: SVG diagrams for exhibit questions
- **`tools/append.js`**: Tool to append new questions from JSON batches
- **`docs/mcpa-exam-guide.md`**: Official exam guide reference
- **`README.md`**: Project documentation

## Usage

### Quick Start
```bash
# Open directly in browser
open index.html

# Or start local server
python3 -m http.server 8000
```

### Study Modes
1. **Practice Mode**: Default mode for studying with instant feedback
2. **Timed Exam**: Select "Timed Exam" from the mode buttons for full exam simulation

### Features
- **Filtering**: Use sidebar filters to focus study on specific domains
- **Search**: Keyword search across all question content
- **Flag Questions**: Mark difficult questions for review
- **Progress Tracking**: Monitor score, accuracy, and completion

## Development Notes

### Adding New Questions
Use the provided `tools/append.js` script with a JSON batch file:
```bash
node tools/append.js my-questions.json
```

### Repository Structure Benefits
- **Self-Contained**: No external dependencies for basic operation
- **Portable**: Can be deployed as a simple HTML file
- **Extensible**: Easy to add questions using the append script
- **Documented**: Clear documentation and references

## Quality Metrics
- **Question Coverage**: 600 total questions across 9 domains
- **Reference Sources**: 298 unique URLs to official MuleSoft resources
- **Domain Balance**: Questions reflect official exam weighting
- **Offline Capability**: Zero server requirements for operation
- **Accessibility**: Full keyboard navigation and screen reader support