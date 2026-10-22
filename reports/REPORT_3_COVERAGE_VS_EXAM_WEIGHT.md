# Report 3 - Are all MCPA topics covered with enough questions per exam weight?

## Short answer

**No.** All 9 exam sections have at least some questions, but the bank is not balanced to the official weights, and several individual exam objectives have zero questions:

- **Under-weighted:** Designing APIs using System, Process, and Experience Layers - 2.9% of the bank vs 12% on the exam.
- **Under-weighted:** Meeting API quality goals - 4.4% of the bank vs 10% on the exam.
- **Under-weighted:** Explaining application network basics - 1.8% of the bank vs 7% on the exam.
- **Under-weighted:** Establishing organizational and platform foundations - 5.5% of the bank vs 10% on the exam.
- **Over-weighted:** Deploying API implementations to CloudHub - 17.6% of the bank vs 11% on the exam.
- **Over-weighted:** Monitoring and analyzing application networks - 17.3% of the bank vs 12% on the exam.
- **Objectives with no questions (5):** 1.4 Describe capabilities and high-level components of Anypoint Platform; 2.2 Describe the structure and benefits of MuleSoft Catalyst; 3.4 Mapping strategies between Bounded Context data models (power relationships); 3.5 Idempotent HTTP methods and HTTP-native optimistic concurrency; 4.5 Select DataGraph only for suitable roles.
- **Objectives with ≤1 usable question (11):** 1.1 Identify/differentiate technologies used to implement API-led connectivity; 2.1 Advise on establishing a C4E and its KPIs; 2.5 Identify data residency of different kinds of data (payload, metrics, ...); 3.1 Dependencies between API, specification, implementation and clients; 4.3 Relate System API data model to backend system data model; 4.4 Enterprise Data Model vs Bounded Context Data Models; 5.3 API specification changes required to reflect an API policy; 5.7 Requesting, approving and revoking API access (contracts, SLA tiers); 8.3 When horizontal scaling helps response time/throughput; 9.2 Metrics collected for API invocations; 9.3 Alerts for key API-invocation metrics across all layers.
- **28 questions (10.3%)** test content outside the MCPA outline (mostly MCIA/developer topics) and **123 (45.2%)** are not exam-like; only **149** questions are usable as realistic MCPA practice.

## Bank share vs official exam weight

*Target @272* = how many of the current 272 questions each section would need at the exam weight. *Usable* = questions not marked "Not aligned" in Report 1. *Gap* = usable minus target (negative = need new questions).

| Exam topic | Exam weight | Exam Qs (of 60) | Bank count (re-mapped) | Bank % | Δ pts vs weight | Usable count | Usable % | Target @272 | Gap (usable - target) | Status |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| Explaining application network basics | 7% | 4.2 | 5 | 1.8% | -5.2 | 3 | 2.0% | 19 | -16 | Under |
| Establishing organizational and platform foundations | 10% | 6.0 | 15 | 5.5% | -4.5 | 7 | 4.7% | 27 | -20 | Under |
| Designing and sharing APIs | 10% | 6.0 | 28 | 10.3% | +0.3 | 12 | 8.1% | 27 | -15 | OK |
| Designing APIs using System, Process, and Experience Layers | 12% | 7.2 | 8 | 2.9% | -9.1 | 4 | 2.7% | 33 | -29 | Under |
| Governing web APIs on Anypoint Platform | 17% | 10.2 | 49 | 18.0% | +1.0 | 26 | 17.4% | 46 | -20 | OK |
| Architecting and deploying API implementations | 11% | 6.6 | 32 | 11.8% | +0.8 | 18 | 12.1% | 30 | -12 | OK |
| Deploying API implementations to CloudHub | 11% | 6.6 | 48 | 17.6% | +6.6 | 40 | 26.8% | 30 | +10 | Over |
| Meeting API quality goals | 10% | 6.0 | 12 | 4.4% | -5.6 | 8 | 5.4% | 27 | -19 | Under |
| Monitoring and analyzing application networks | 12% | 7.2 | 47 | 17.3% | +5.3 | 31 | 20.8% | 33 | -2 | Over |
| Out of scope | 0% | 0 | 28 | 10.3% | | 0 | | 0 | | Remove/replace |
| **Total** | 100% | 60 | 272 | 100% | | 149 | 100% | 272 | | |

Labeled-domain view (using the `domain` field as stored, without my re-mapping):

| Exam topic | Exam weight | Labeled count | Labeled % | Δ pts |
|---|---:|---:|---:|---:|
| Explaining application network basics | 7% | 9 | 3.3% | -3.7 |
| Establishing organizational and platform foundations | 10% | 12 | 4.4% | -5.6 |
| Designing and sharing APIs | 10% | 21 | 7.7% | -2.3 |
| Designing APIs using System, Process, and Experience Layers | 12% | 5 | 1.8% | -10.2 |
| Governing web APIs on Anypoint Platform | 17% | 47 | 17.3% | +0.3 |
| Architecting and deploying API implementations | 11% | 37 | 13.6% | +2.6 |
| Deploying API implementations to CloudHub | 11% | 59 | 21.7% | +10.7 |
| Meeting API quality goals | 10% | 29 | 10.7% | +0.7 |
| Monitoring and analyzing application networks | 12% | 53 | 19.5% | +7.5 |

## Impact on the Timed Exam mode

`app.js` draws 60 questions at random from the whole bank, so a simulated exam reflects the bank distribution, not the exam weights. With the current bank a typical 60-question draw contains about: Explaining application network basics ≈ 1 (exam ≈ 4), Establishing organizational and platform foundations ≈ 3 (exam ≈ 6), Designing and sharing APIs ≈ 6 (exam ≈ 6), Designing APIs using System, Process, and Experience Layers ≈ 2 (exam ≈ 7), Governing web APIs on Anypoint Platform ≈ 11 (exam ≈ 10), Architecting and deploying API implementations ≈ 7 (exam ≈ 7), Deploying API implementations to CloudHub ≈ 11 (exam ≈ 7), Meeting API quality goals ≈ 3 (exam ≈ 6), Monitoring and analyzing application networks ≈ 10 (exam ≈ 7), plus ≈ 6 out-of-scope questions. Stratified sampling by domain weight would fix this without new questions, but the under-covered domains do not yet have enough usable questions to support it.

## What would make coverage sufficient

New questions needed so that a 272-question bank made only of usable questions matches the exam weights (replacing the "Not aligned" items):

| Exam topic | Usable now | Target | New questions needed |
|---|---:|---:|---:|
| Explaining application network basics | 3 | 19 | 16 |
| Establishing organizational and platform foundations | 7 | 27 | 20 |
| Designing and sharing APIs | 12 | 27 | 15 |
| Designing APIs using System, Process, and Experience Layers | 4 | 33 | 29 |
| Governing web APIs on Anypoint Platform | 26 | 46 | 20 |
| Architecting and deploying API implementations | 18 | 30 | 12 |
| Deploying API implementations to CloudHub | 40 | 30 | 0 |
| Meeting API quality goals | 8 | 27 | 19 |
| Monitoring and analyzing application networks | 31 | 33 | 2 |
| **Total** | 149 | 272 | **133** |

Priorities, in order:
1. **Write questions for the uncovered objectives** listed above (Catalyst, Bounded Context mapping, idempotency/optimistic concurrency (ETag/If-Match), DataGraph, KPIs for a C4E, etc.).
2. **Grow the under-weighted sections**, especially *Designing APIs using System, Process, and Experience Layers* (12% of the exam) and *Explaining application network basics* / *Establishing organizational and platform foundations*.
3. **Replace or rewrite the "Not aligned" questions** (Report 1): remove invented features, drop the 6-option budget/deadline format, and retire MCIA/developer items (q-220-237 block, DataWeave/XA/streaming questions).
4. **Rebalance answer keys and option lengths**, and fix domain labels flagged as `MSL` so the app's domain filter and score breakdown match the exam guide.
5. Optionally, make Timed Exam mode sample per-domain by weight.

## Method and limitations

- Each of the 272 questions was read (prompt, options, key) and assigned to one exam-outline objective plus issue tags; tags and notes are in `judgments.py`, and `generate_reports.py` rebuilds all three reports from `questions.js`.
- Exam weights come from the official Salesforce exam guide (Spring '24 alignment): 7/10/10/12/17/11/11/10/12%. Some third-party sites publish different weights; they were not used.
- "Exam-like" is a judgment against the published format and objectives; actual exam items are confidential. Feature-existence flags (`FAB`) are based on MuleSoft documentation and should be spot-checked before rewriting.