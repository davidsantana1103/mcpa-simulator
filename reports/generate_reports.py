"""Generates the MCPA question-bank review reports. Reads questions.js (read-only)."""
import json, os, sys, collections
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from judgments import J
REPO = os.path.abspath(os.path.join(HERE, '..'))
OUT = HERE
s = open(os.path.join(REPO, 'questions.js'), encoding='utf-8').read()
Q = json.loads(s[s.index('['):s.rindex(']') + 1])

DOMAINS = {
 '1': ('Explaining application network basics', 7),
 '2': ('Establishing organizational and platform foundations', 10),
 '3': ('Designing and sharing APIs', 10),
 '4': ('Designing APIs using System, Process, and Experience Layers', 12),
 '5': ('Governing web APIs on Anypoint Platform', 17),
 '6': ('Architecting and deploying API implementations', 11),
 '7': ('Deploying API implementations to CloudHub', 11),
 '8': ('Meeting API quality goals', 10),
 '9': ('Monitoring and analyzing application networks', 12),
}
NAME2D = {v[0]: k for k, v in DOMAINS.items()}
OBJ = {
 '1.1': 'Identify/differentiate technologies used to implement API-led connectivity',
 '1.2': 'Describe the role and characteristics of web APIs',
 '1.3': 'Assign APIs to tiers by ownership, functional focus, rate of change',
 '1.4': 'Describe capabilities and high-level components of Anypoint Platform',
 '2.1': 'Advise on establishing a C4E and its KPIs',
 '2.2': 'Describe the structure and benefits of MuleSoft Catalyst',
 '2.3': 'Choose options for hosting/managing control and runtime planes',
 '2.4': 'Compare Identity Management and Client Management options',
 '2.5': 'Identify data residency of different kinds of data (payload, metrics, ...)',
 '3.1': 'Dependencies between API, specification, implementation and clients',
 '3.2': 'Create/publish reusable API-related assets (specs, Exchange, fragments)',
 '3.3': 'Semantic versioning: changes requiring major/minor/patch',
 '3.4': 'Mapping strategies between Bounded Context data models (power relationships)',
 '3.5': 'Idempotent HTTP methods and HTTP-native optimistic concurrency',
 '4.1': 'Identify APIs for a business process and assign them to layers',
 '4.2': 'Assign APIs to layers by ownership, functional focus, rate of change',
 '4.3': 'Relate System API data model to backend system data model',
 '4.4': 'Enterprise Data Model vs Bounded Context Data Models',
 '4.5': 'Select DataGraph only for suitable roles',
 '5.1': 'API instances and environments in API Manager',
 '5.2': 'Select API policies/components for NFRs',
 '5.3': 'API specification changes required to reflect an API policy',
 '5.4': 'Policy enforcement approach (proxies/gateways, Flex, Service Mesh)',
 '5.5': 'Secure APIs with policies appropriate to the tier (S/P/E)',
 '5.6': 'When/how to pass client ID and secret',
 '5.7': 'Requesting, approving and revoking API access (contracts, SLA tiers)',
 '5.8': 'Policies enforcing non-functional security constraints',
 '5.9': 'Anypoint Platform, external IdPs, business groups and clients in OAuth 2.0',
 '5.10': 'Scenarios needing custom API policies',
 '6.1': 'Autodiscovery linking implementations to API Manager instances',
 '6.2': 'Requirements that call for an Anypoint VPC',
 '6.3': 'Compare options for hosting/managing runtime planes',
 '6.4': 'Unit vs integration tests; where MUnit is best employed',
 '6.5': 'Automated build/test/deploy (DevOps, CI/CD)',
 '7.1': 'When to use Object Store with CloudHub',
 '7.2': 'Select CloudHub worker sizes and configuration',
 '7.3': 'Reliability/performance of apps on CloudHub shared worker cloud/regions',
 '7.4': 'Shared vs Dedicated Load Balancer (and CH2 ingress)',
 '7.5': 'CloudHub networking with customer VPCs and on-prem data centers',
 '7.6': 'Identify and avoid single points of failure in CloudHub',
 '8.1': 'Object Store vs caching scenarios',
 '8.2': 'Resilience strategies for API clients',
 '8.3': 'When horizontal scaling helps response time/throughput',
 '9.1': 'Platform components that generate monitoring/alerting data',
 '9.2': 'Metrics collected for API invocations',
 '9.3': 'Alerts for key API-invocation metrics across all layers',
 '9.4': 'Alerts for Mule applications',
}
ISSUES = {
 'FAB': ('Major', 'Relies on a non-existent / undocumented product feature or an incorrect fact'),
 'AMB': ('Major', 'Answer key is disputable or not justified by the stem'),
 'OOS': ('Major', 'Out of MCPA scope (developer / MCIA-level implementation detail)'),
 'PAD': ('Major', 'Synthetic stem (budget/deadline/regulation padding) with 6 options - not the real exam format'),
 'REC': ('Minor', 'One-line recall/definition, not a scenario (real exam is scenario-driven)'),
 'GIV': ('Minor', 'Implausible "giveaway" distractors (e.g. "disable all policies", "store secrets in Git")'),
 'DUP': ('Minor', 'Near-duplicate of another question'),
 'MSL': ('Minor', 'Domain label does not match the official exam-guide section of the tested objective'),
 'SEL': ('Minor', '"Select all correct answers" wording; real exam states the exact number ("Choose 2")'),
}
MAJOR = {k for k, v in ISSUES.items() if v[0] == 'Major'}

rows = []
for x in Q:
    n = x['number']
    obj, iss, note = J[n]
    iss = iss.split()
    ca = x.get('correctAnswer') or x.get('correctAnswers')
    cas = ca if isinstance(ca, list) else [ca]
    longest = False
    if len(cas) == 1:
        L = sorted(((len(o['text']), o['letter']) for o in x['options']), reverse=True)
        longest = L[0][1] == cas[0] and L[0][0] > L[1][0]
    if set(iss) & MAJOR or {'REC', 'GIV'} <= set(iss):
        verdict = 'Not aligned'
    elif iss:
        verdict = 'Needs polish'
    else:
        verdict = 'Aligned'
    rows.append(dict(n=n, id=x['id'], label=x['domain'], ld=NAME2D[x['domain']], obj=obj,
                     od=obj.split('.')[0] if obj != 'OOS' else 'OOS', iss=iss, note=note,
                     verdict=verdict, longest=longest, nopt=len(x['options']), multi=len(cas) > 1,
                     prompt=x['prompt'].replace('\n', ' ').replace('|', '/')))
TOTAL = len(rows)
pct = lambda a, b: f"{100*a/b:.1f}%" if b else '0.0%'
V = collections.Counter(r['verdict'] for r in rows)

def short(t, n=110):
    return t if len(t) <= n else t[:n - 1].rstrip() + '…'

# ---------------- Report 1 ----------------
L = []
L.append('# Report 1 - Questions not aligned with the real MCPA exam\n')
L.append(f'Scope: all **{TOTAL}** questions in `questions.js` (read-only review). '
         'Reference: official *Salesforce Certified MuleSoft Platform Architect* exam guide '
         '(https://help.salesforce.com/s/articleView?id=005298956&type=1) - 60 multiple-choice questions, 120 min, 70% pass, 9 weighted sections.\n')
L.append('## How "exam-like" was judged\n')
L.append('Real MCPA items are short business/technical **scenarios** with 4 options (A-D), plausible distractors that are all real Anypoint features, '
         'a single best answer (or an explicit "Choose 2"), and they test architect-level decisions from the exam outline - not developer syntax. '
         'Each question was read and tagged with the issues below.\n')
L.append('| Code | Severity | Meaning |\n|---|---|---|')
for k, (sev, m) in ISSUES.items():
    L.append(f'| `{k}` | {sev} | {m} |')
L.append('\n**Verdict rule:** any Major issue, or `REC`+`GIV` together → **Not aligned**; only Minor issues → **Needs polish**; none → **Aligned**.\n')
L.append('## Summary\n')
L.append('| Verdict | Questions | % of total |\n|---|---:|---:|')
for v in ['Aligned', 'Needs polish', 'Not aligned']:
    L.append(f'| {v} | {V[v]} | {pct(V[v], TOTAL)} |')
L.append(f'| **Total** | **{TOTAL}** | 100% |\n')
IC = collections.Counter(i for r in rows for i in r['iss'])
L.append('| Issue | Questions flagged |\n|---|---:|')
for k in ISSUES:
    L.append(f'| `{k}` | {IC[k]} |')
L.append('')
L.append('### Format / statistical findings\n')
singles = [r for r in rows if not r['multi']]
letters = collections.Counter()
for x in Q:
    ca = x.get('correctAnswer')
    if ca: letters[ca] += 1
lg = sum(r['longest'] for r in singles)
L.append(f'- **Answer-position bias:** of {len(singles)} single-answer questions the key is ' +
         ', '.join(f'{k}={v} ({pct(v, len(singles))})' for k, v in sorted(letters.items())) +
         '. In questions 1-105 the answer is **B** far more often than chance, so test-takers can learn the pattern.')
L.append(f'- **Longest-option bias:** the correct option is strictly the longest option in **{lg}/{len(singles)} ({pct(lg, len(singles))})** single-answer questions '
         '(chance ≈ 25%). Real exam items balance option length.')
n6 = sum(r['nopt'] == 6 for r in rows)
L.append(f'- **Option count:** {n6} questions use 6 options (A-F). The real exam uses 4 options for single-answer items.')
sel = sum('SEL' in r['iss'] for r in rows)
L.append(f'- **Multi-select:** {sum(r["multi"] for r in rows)} questions are multi-answer; {sel} of them say "Select all correct answers" instead of the exam wording "Choose N".')
L.append('- **Blocks of similar origin:** q-001-105 are mostly short recall items with giveaway distractors; '
         'q-106-175 are synthetic "budget/deadline/regulation" stems, many relying on invented features '
         '(19 of them already appear in `QUESTIONS_WITHOUT_DOCUMENTATION_LINKS.md`); q-176-272 are the most exam-like, '
         'except q-220-237 which are largely MCIA (Integration Architect) items.\n')

L.append('## Questions NOT aligned with the exam\n')
L.append('| # | Labeled domain | Issues | Why | Prompt (truncated) |\n|---|---|---|---|---|')
for r in rows:
    if r['verdict'] == 'Not aligned':
        L.append(f"| {r['id']} | {r['label']} | {' '.join('`'+i+'`' for i in r['iss'])} | {r['note']} | {short(r['prompt'])} |")
L.append('\n## Questions that need polish (minor issues only)\n')
L.append('| # | Labeled domain | Issues | Note | Prompt (truncated) |\n|---|---|---|---|---|')
for r in rows:
    if r['verdict'] == 'Needs polish':
        L.append(f"| {r['id']} | {r['label']} | {' '.join('`'+i+'`' for i in r['iss'])} | {r['note']} | {short(r['prompt'])} |")
L.append('\n## Questions aligned with the exam\n')
L.append(', '.join(r['id'] for r in rows if r['verdict'] == 'Aligned') + '\n')
open(os.path.join(OUT, 'REPORT_1_NON_ALIGNED_QUESTIONS.md'), 'w').write('\n'.join(L))

# ---------------- Report 2 ----------------
L = []
L.append('# Report 2 - Question count per MCPA exam topic\n')
L.append(f'Total questions: **{TOTAL}**. Topics = the 9 sections of the official exam guide (these are also the `domain` values used in `questions.js`).\n')
L.append('- **Labeled** = the `domain` field as stored in `questions.js`.')
L.append('- **Re-mapped** = the section of the official objective the question actually tests (my review). '
         '"Out of scope" = questions that test no MCPA objective (developer / MCIA content).\n')
lab = collections.Counter(r['ld'] for r in rows)
rem = collections.Counter(r['od'] for r in rows)
L.append('## Per topic\n')
L.append('| # | Exam topic | Labeled count | Labeled % | Re-mapped count | Re-mapped % |\n|---|---|---:|---:|---:|---:|')
for d, (nm, w) in DOMAINS.items():
    L.append(f'| {d} | {nm} | {lab[d]} | {pct(lab[d], TOTAL)} | {rem[d]} | {pct(rem[d], TOTAL)} |')
L.append(f"| - | Out of scope (not an MCPA objective) | - | - | {rem['OOS']} | {pct(rem['OOS'], TOTAL)} |")
L.append(f'| | **Total** | **{TOTAL}** | 100% | **{TOTAL}** | 100% |\n')
L.append('## Per topic, by verdict (re-mapped)\n')
L.append('| Exam topic | Aligned | Needs polish | Not aligned | Total |\n|---|---:|---:|---:|---:|')
for d in list(DOMAINS) + ['OOS']:
    nm = DOMAINS[d][0] if d in DOMAINS else 'Out of scope'
    c = collections.Counter(r['verdict'] for r in rows if r['od'] == d)
    L.append(f"| {nm} | {c['Aligned']} | {c['Needs polish']} | {c['Not aligned']} | {sum(c.values())} |")
L.append('')
L.append('## Per exam objective (re-mapped)\n')
L.append('Count of questions testing each bullet of the exam outline. **0 = objective not covered at all.**\n')
OC = collections.Counter(r['obj'] for r in rows)
OCg = collections.Counter(r['obj'] for r in rows if r['verdict'] != 'Not aligned')
L.append('| Objective | Description | All questions | Excluding "Not aligned" | Question IDs |\n|---|---|---:|---:|---|')
for o, desc in OBJ.items():
    ids = ', '.join(str(r['n']) for r in rows if r['obj'] == o)
    flag = ' **(GAP)**' if OC[o] == 0 else ''
    L.append(f'| {o} | {desc}{flag} | {OC[o]} | {OCg[o]} | {ids} |')
L.append('')
L.append('## Questions whose label differs from the re-mapped topic\n')
L.append('| # | Labeled | Re-mapped |\n|---|---|---|')
for r in rows:
    if r['ld'] != r['od']:
        L.append(f"| {r['id']} | {DOMAINS[r['ld']][0]} | {DOMAINS[r['od']][0] if r['od'] in DOMAINS else 'Out of scope'} ({r['obj']}) |")
open(os.path.join(OUT, 'REPORT_2_TOPIC_DISTRIBUTION.md'), 'w').write('\n'.join(L))

# ---------------- Report 3 ----------------
good = [r for r in rows if r['verdict'] != 'Not aligned']
G = collections.Counter(r['od'] for r in good)
NG = len(good)
inscope = TOTAL - rem['OOS']
L = []
L.append('# Report 3 - Are all MCPA topics covered with enough questions per exam weight?\n')
L.append('## Short answer\n')
L.append('**No.** All 9 exam sections have at least some questions, but the bank is not balanced to the official weights, and several individual exam objectives have zero questions:\n')
over = []; under = []
for d, (nm, w) in DOMAINS.items():
    diff = 100 * rem[d] / TOTAL - w
    (over if diff > 2 else under if diff < -2 else []).append((nm, w, 100 * rem[d] / TOTAL))
for nm, w, p in sorted(under, key=lambda t: t[2] - t[1]):
    L.append(f'- **Under-weighted:** {nm} - {p:.1f}% of the bank vs {w}% on the exam.')
for nm, w, p in sorted(over, key=lambda t: t[1] - t[2]):
    L.append(f'- **Over-weighted:** {nm} - {p:.1f}% of the bank vs {w}% on the exam.')
gaps = [o for o in OBJ if OC[o] == 0]
L.append(f"- **Objectives with no questions ({len(gaps)}):** " + '; '.join(f'{o} {OBJ[o]}' for o in gaps) + '.')
thin = [o for o in OBJ if 0 < OCg[o] <= 1]
L.append(f"- **Objectives with ≤1 usable question ({len(thin)}):** " + '; '.join(f'{o} {OBJ[o]}' for o in thin) + '.')
L.append(f"- **{rem['OOS']} questions ({pct(rem['OOS'], TOTAL)})** test content outside the MCPA outline (mostly MCIA/developer topics) and **{V['Not aligned']} ({pct(V['Not aligned'], TOTAL)})** are not exam-like; "
         f"only **{NG}** questions are usable as realistic MCPA practice.\n")
L.append('## Bank share vs official exam weight\n')
L.append('*Target @272* = how many of the current 272 questions each section would need at the exam weight. '
         '*Usable* = questions not marked "Not aligned" in Report 1. *Gap* = usable minus target (negative = need new questions).\n')
L.append('| Exam topic | Exam weight | Exam Qs (of 60) | Bank count (re-mapped) | Bank % | Δ pts vs weight | Usable count | Usable % | Target @272 | Gap (usable - target) | Status |')
L.append('|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|')
for d, (nm, w) in DOMAINS.items():
    p = 100 * rem[d] / TOTAL
    up = 100 * G[d] / NG if NG else 0
    tgt = round(w / 100 * TOTAL)
    gap = G[d] - tgt
    status = 'Over' if up > w + 2 else ('Under' if up < w - 2 else 'OK')
    L.append(f'| {nm} | {w}% | {w*60/100:.1f} | {rem[d]} | {p:.1f}% | {p-w:+.1f} | {G[d]} | {up:.1f}% | {tgt} | {gap:+d} | {status} |')
L.append(f"| Out of scope | 0% | 0 | {rem['OOS']} | {pct(rem['OOS'], TOTAL)} | | {G['OOS']} | | 0 | | Remove/replace |")
L.append(f'| **Total** | 100% | 60 | {TOTAL} | 100% | | {NG} | 100% | {TOTAL} | | |\n')
L.append('Labeled-domain view (using the `domain` field as stored, without my re-mapping):\n')
L.append('| Exam topic | Exam weight | Labeled count | Labeled % | Δ pts |\n|---|---:|---:|---:|---:|')
for d, (nm, w) in DOMAINS.items():
    p = 100 * lab[d] / TOTAL
    L.append(f'| {nm} | {w}% | {lab[d]} | {p:.1f}% | {p-w:+.1f} |')
L.append('')
L.append('## Impact on the Timed Exam mode\n')
L.append('`app.js` draws 60 questions at random from the whole bank, so a simulated exam reflects the bank distribution, not the exam weights. '
         'With the current bank a typical 60-question draw contains about: ' +
         ', '.join(f"{DOMAINS[d][0]} ≈ {60*rem[d]/TOTAL:.0f} (exam ≈ {DOMAINS[d][1]*60/100:.0f})" for d in DOMAINS) +
         f", plus ≈ {60*rem['OOS']/TOTAL:.0f} out-of-scope questions. Stratified sampling by domain weight would fix this without new questions, but the under-covered domains do not yet have enough usable questions to support it.\n")
L.append('## What would make coverage sufficient\n')
L.append('New questions needed so that a 272-question bank made only of usable questions matches the exam weights (replacing the "Not aligned" items):\n')
L.append('| Exam topic | Usable now | Target | New questions needed |\n|---|---:|---:|---:|')
need_total = 0
for d, (nm, w) in DOMAINS.items():
    tgt = round(w / 100 * TOTAL); need = max(0, tgt - G[d]); need_total += need
    L.append(f'| {nm} | {G[d]} | {tgt} | {need} |')
L.append(f'| **Total** | {NG} | {TOTAL} | **{need_total}** |\n')
L.append('Priorities, in order:')
L.append('1. **Write questions for the uncovered objectives** listed above (Catalyst, Bounded Context mapping, idempotency/optimistic concurrency (ETag/If-Match), DataGraph, KPIs for a C4E, etc.).')
L.append('2. **Grow the under-weighted sections**, especially *Designing APIs using System, Process, and Experience Layers* (12% of the exam) and *Explaining application network basics* / *Establishing organizational and platform foundations*.')
L.append('3. **Replace or rewrite the "Not aligned" questions** (Report 1): remove invented features, drop the 6-option budget/deadline format, and retire MCIA/developer items (q-220-237 block, DataWeave/XA/streaming questions).')
L.append('4. **Rebalance answer keys and option lengths**, and fix domain labels flagged as `MSL` so the app\'s domain filter and score breakdown match the exam guide.')
L.append('5. Optionally, make Timed Exam mode sample per-domain by weight.')
L.append('\n## Method and limitations\n')
L.append('- Each of the 272 questions was read (prompt, options, key) and assigned to one exam-outline objective plus issue tags; tags and notes are in `judgments.py`, and `generate_reports.py` rebuilds all three reports from `questions.js`.')
L.append('- Exam weights come from the official Salesforce exam guide (Spring \'24 alignment): 7/10/10/12/17/11/11/10/12%. Some third-party sites publish different weights; they were not used.')
L.append('- "Exam-like" is a judgment against the published format and objectives; actual exam items are confidential. Feature-existence flags (`FAB`) are based on MuleSoft documentation and should be spot-checked before rewriting.')
open(os.path.join(OUT, 'REPORT_3_COVERAGE_VS_EXAM_WEIGHT.md'), 'w').write('\n'.join(L))
print(V, dict(rem), NG)
