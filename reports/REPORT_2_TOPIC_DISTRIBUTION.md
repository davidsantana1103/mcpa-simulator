# Report 2 - Question count per MCPA exam topic

Total questions: **272**. Topics = the 9 sections of the official exam guide (these are also the `domain` values used in `questions.js`).

- **Labeled** = the `domain` field as stored in `questions.js`.
- **Re-mapped** = the section of the official objective the question actually tests (my review). "Out of scope" = questions that test no MCPA objective (developer / MCIA content).

## Per topic

| # | Exam topic | Labeled count | Labeled % | Re-mapped count | Re-mapped % |
|---|---|---:|---:|---:|---:|
| 1 | Explaining application network basics | 9 | 3.3% | 5 | 1.8% |
| 2 | Establishing organizational and platform foundations | 12 | 4.4% | 15 | 5.5% |
| 3 | Designing and sharing APIs | 21 | 7.7% | 28 | 10.3% |
| 4 | Designing APIs using System, Process, and Experience Layers | 5 | 1.8% | 8 | 2.9% |
| 5 | Governing web APIs on Anypoint Platform | 47 | 17.3% | 49 | 18.0% |
| 6 | Architecting and deploying API implementations | 37 | 13.6% | 32 | 11.8% |
| 7 | Deploying API implementations to CloudHub | 59 | 21.7% | 48 | 17.6% |
| 8 | Meeting API quality goals | 29 | 10.7% | 12 | 4.4% |
| 9 | Monitoring and analyzing application networks | 53 | 19.5% | 47 | 17.3% |
| - | Out of scope (not an MCPA objective) | - | - | 28 | 10.3% |
| | **Total** | **272** | 100% | **272** | 100% |

## Per topic, by verdict (re-mapped)

| Exam topic | Aligned | Needs polish | Not aligned | Total |
|---|---:|---:|---:|---:|
| Explaining application network basics | 0 | 3 | 2 | 5 |
| Establishing organizational and platform foundations | 0 | 7 | 8 | 15 |
| Designing and sharing APIs | 0 | 12 | 16 | 28 |
| Designing APIs using System, Process, and Experience Layers | 0 | 4 | 4 | 8 |
| Governing web APIs on Anypoint Platform | 3 | 23 | 23 | 49 |
| Architecting and deploying API implementations | 4 | 14 | 14 | 32 |
| Deploying API implementations to CloudHub | 25 | 15 | 8 | 48 |
| Meeting API quality goals | 1 | 7 | 4 | 12 |
| Monitoring and analyzing application networks | 22 | 9 | 16 | 47 |
| Out of scope | 0 | 0 | 28 | 28 |

## Per exam objective (re-mapped)

Count of questions testing each bullet of the exam outline. **0 = objective not covered at all.**

| Objective | Description | All questions | Excluding "Not aligned" | Question IDs |
|---|---|---:|---:|---|
| 1.1 | Identify/differentiate technologies used to implement API-led connectivity | 1 | 1 | 222 |
| 1.2 | Describe the role and characteristics of web APIs | 1 | 0 | 99 |
| 1.3 | Assign APIs to tiers by ownership, functional focus, rate of change | 3 | 2 | 1, 46, 65 |
| 1.4 | Describe capabilities and high-level components of Anypoint Platform **(GAP)** | 0 | 0 |  |
| 2.1 | Advise on establishing a C4E and its KPIs | 4 | 1 | 2, 74, 86, 92 |
| 2.2 | Describe the structure and benefits of MuleSoft Catalyst **(GAP)** | 0 | 0 |  |
| 2.3 | Choose options for hosting/managing control and runtime planes | 3 | 3 | 33, 202, 221 |
| 2.4 | Compare Identity Management and Client Management options | 4 | 2 | 6, 34, 115, 265 |
| 2.5 | Identify data residency of different kinds of data (payload, metrics, ...) | 4 | 1 | 100, 140, 156, 161 |
| 3.1 | Dependencies between API, specification, implementation and clients | 3 | 1 | 12, 56, 93 |
| 3.2 | Create/publish reusable API-related assets (specs, Exchange, fragments) | 16 | 8 | 3, 4, 11, 17, 44, 70, 78, 80, 94, 103, 104, 105, 111, 119, 142, 149 |
| 3.3 | Semantic versioning: changes requiring major/minor/patch | 9 | 3 | 16, 32, 37, 120, 126, 132, 136, 146, 165 |
| 3.4 | Mapping strategies between Bounded Context data models (power relationships) **(GAP)** | 0 | 0 |  |
| 3.5 | Idempotent HTTP methods and HTTP-native optimistic concurrency **(GAP)** | 0 | 0 |  |
| 4.1 | Identify APIs for a business process and assign them to layers | 5 | 2 | 20, 77, 106, 116, 137 |
| 4.2 | Assign APIs to layers by ownership, functional focus, rate of change | 1 | 0 | 128 |
| 4.3 | Relate System API data model to backend system data model | 1 | 1 | 35 |
| 4.4 | Enterprise Data Model vs Bounded Context Data Models | 1 | 1 | 237 |
| 4.5 | Select DataGraph only for suitable roles **(GAP)** | 0 | 0 |  |
| 5.1 | API instances and environments in API Manager | 4 | 2 | 58, 64, 66, 83 |
| 5.2 | Select API policies/components for NFRs | 10 | 5 | 18, 39, 76, 110, 139, 144, 171, 192, 261, 268 |
| 5.3 | API specification changes required to reflect an API policy | 1 | 1 | 235 |
| 5.4 | Policy enforcement approach (proxies/gateways, Flex, Service Mesh) | 9 | 7 | 36, 57, 71, 101, 127, 266, 267, 269, 272 |
| 5.5 | Secure APIs with policies appropriate to the tier (S/P/E) | 3 | 3 | 26, 51, 87 |
| 5.6 | When/how to pass client ID and secret | 1 | 0 | 84 |
| 5.7 | Requesting, approving and revoking API access (contracts, SLA tiers) | 4 | 1 | 5, 55, 72, 175 |
| 5.8 | Policies enforcing non-functional security constraints | 11 | 2 | 10, 29, 107, 113, 117, 130, 133, 138, 148, 150, 263 |
| 5.9 | Anypoint Platform, external IdPs, business groups and clients in OAuth 2.0 | 4 | 3 | 40, 85, 264, 270 |
| 5.10 | Scenarios needing custom API policies | 2 | 2 | 48, 262 |
| 6.1 | Autodiscovery linking implementations to API Manager instances | 3 | 2 | 9, 97, 199 |
| 6.2 | Requirements that call for an Anypoint VPC | 1 | 0 | 50 |
| 6.3 | Compare options for hosting/managing runtime planes | 16 | 10 | 7, 21, 42, 79, 95, 112, 114, 118, 152, 154, 208, 213, 214, 219, 220, 245 |
| 6.4 | Unit vs integration tests; where MUnit is best employed | 3 | 2 | 19, 73, 187 |
| 6.5 | Automated build/test/deploy (DevOps, CI/CD) | 9 | 4 | 28, 30, 60, 96, 134, 168, 207, 233, 239 |
| 7.1 | When to use Object Store with CloudHub | 4 | 4 | 22, 203, 254, 255 |
| 7.2 | Select CloudHub worker sizes and configuration | 5 | 3 | 8, 54, 61, 174, 209 |
| 7.3 | Reliability/performance of apps on CloudHub shared worker cloud/regions | 6 | 3 | 53, 88, 108, 125, 201, 216 |
| 7.4 | Shared vs Dedicated Load Balancer (and CH2 ingress) | 12 | 12 | 24, 25, 38, 200, 210, 246, 247, 248, 249, 250, 259, 271 |
| 7.5 | CloudHub networking with customer VPCs and on-prem data centers | 11 | 9 | 49, 102, 162, 204, 206, 211, 217, 256, 257, 258, 260 |
| 7.6 | Identify and avoid single points of failure in CloudHub | 10 | 9 | 23, 31, 205, 212, 215, 218, 228, 251, 252, 253 |
| 8.1 | Object Store vs caching scenarios | 3 | 2 | 15, 69, 238 |
| 8.2 | Resilience strategies for API clients | 6 | 5 | 14, 63, 81, 90, 91, 98 |
| 8.3 | When horizontal scaling helps response time/throughput | 3 | 1 | 75, 82, 124 |
| 9.1 | Platform components that generate monitoring/alerting data | 32 | 25 | 13, 27, 41, 45, 59, 89, 153, 157, 160, 163, 166, 167, 176, 178, 179, 180, 182, 184, 185, 186, 188, 189, 190, 193, 195, 196, 198, 240, 241, 242, 243, 244 |
| 9.2 | Metrics collected for API invocations | 3 | 1 | 109, 159, 194 |
| 9.3 | Alerts for key API-invocation metrics across all layers | 6 | 1 | 121, 135, 158, 169, 173, 181 |
| 9.4 | Alerts for Mule applications | 6 | 4 | 47, 67, 177, 183, 191, 197 |

## Questions whose label differs from the re-mapped topic

| # | Labeled | Re-mapped |
|---|---|---|
| q-002 | Explaining application network basics | Establishing organizational and platform foundations (2.1) |
| q-007 | Deploying API implementations to CloudHub | Architecting and deploying API implementations (6.3) |
| q-008 | Meeting API quality goals | Deploying API implementations to CloudHub (7.2) |
| q-020 | Explaining application network basics | Designing APIs using System, Process, and Experience Layers (4.1) |
| q-021 | Deploying API implementations to CloudHub | Architecting and deploying API implementations (6.3) |
| q-022 | Meeting API quality goals | Deploying API implementations to CloudHub (7.1) |
| q-023 | Meeting API quality goals | Deploying API implementations to CloudHub (7.6) |
| q-024 | Meeting API quality goals | Deploying API implementations to CloudHub (7.4) |
| q-031 | Meeting API quality goals | Deploying API implementations to CloudHub (7.6) |
| q-035 | Explaining application network basics | Designing APIs using System, Process, and Experience Layers (4.3) |
| q-036 | Deploying API implementations to CloudHub | Governing web APIs on Anypoint Platform (5.4) |
| q-042 | Deploying API implementations to CloudHub | Architecting and deploying API implementations (6.3) |
| q-043 | Meeting API quality goals | Out of scope (OOS) |
| q-049 | Meeting API quality goals | Deploying API implementations to CloudHub (7.5) |
| q-050 | Meeting API quality goals | Architecting and deploying API implementations (6.2) |
| q-052 | Architecting and deploying API implementations | Out of scope (OOS) |
| q-053 | Architecting and deploying API implementations | Deploying API implementations to CloudHub (7.3) |
| q-054 | Meeting API quality goals | Deploying API implementations to CloudHub (7.2) |
| q-058 | Establishing organizational and platform foundations | Governing web APIs on Anypoint Platform (5.1) |
| q-061 | Meeting API quality goals | Deploying API implementations to CloudHub (7.2) |
| q-062 | Architecting and deploying API implementations | Out of scope (OOS) |
| q-066 | Architecting and deploying API implementations | Governing web APIs on Anypoint Platform (5.1) |
| q-068 | Architecting and deploying API implementations | Out of scope (OOS) |
| q-070 | Establishing organizational and platform foundations | Designing and sharing APIs (3.2) |
| q-071 | Architecting and deploying API implementations | Governing web APIs on Anypoint Platform (5.4) |
| q-074 | Explaining application network basics | Establishing organizational and platform foundations (2.1) |
| q-079 | Deploying API implementations to CloudHub | Architecting and deploying API implementations (6.3) |
| q-083 | Establishing organizational and platform foundations | Governing web APIs on Anypoint Platform (5.1) |
| q-086 | Explaining application network basics | Establishing organizational and platform foundations (2.1) |
| q-093 | Architecting and deploying API implementations | Designing and sharing APIs (3.1) |
| q-095 | Deploying API implementations to CloudHub | Architecting and deploying API implementations (6.3) |
| q-100 | Meeting API quality goals | Establishing organizational and platform foundations (2.5) |
| q-101 | Architecting and deploying API implementations | Governing web APIs on Anypoint Platform (5.4) |
| q-103 | Establishing organizational and platform foundations | Designing and sharing APIs (3.2) |
| q-105 | Establishing organizational and platform foundations | Designing and sharing APIs (3.2) |
| q-111 | Establishing organizational and platform foundations | Designing and sharing APIs (3.2) |
| q-112 | Deploying API implementations to CloudHub | Architecting and deploying API implementations (6.3) |
| q-118 | Deploying API implementations to CloudHub | Architecting and deploying API implementations (6.3) |
| q-120 | Governing web APIs on Anypoint Platform | Designing and sharing APIs (3.3) |
| q-122 | Meeting API quality goals | Out of scope (OOS) |
| q-123 | Architecting and deploying API implementations | Out of scope (OOS) |
| q-127 | Architecting and deploying API implementations | Governing web APIs on Anypoint Platform (5.4) |
| q-129 | Architecting and deploying API implementations | Out of scope (OOS) |
| q-131 | Architecting and deploying API implementations | Out of scope (OOS) |
| q-140 | Architecting and deploying API implementations | Establishing organizational and platform foundations (2.5) |
| q-141 | Governing web APIs on Anypoint Platform | Out of scope (OOS) |
| q-143 | Architecting and deploying API implementations | Out of scope (OOS) |
| q-145 | Governing web APIs on Anypoint Platform | Out of scope (OOS) |
| q-147 | Architecting and deploying API implementations | Out of scope (OOS) |
| q-149 | Establishing organizational and platform foundations | Designing and sharing APIs (3.2) |
| q-151 | Architecting and deploying API implementations | Out of scope (OOS) |
| q-152 | Deploying API implementations to CloudHub | Architecting and deploying API implementations (6.3) |
| q-154 | Deploying API implementations to CloudHub | Architecting and deploying API implementations (6.3) |
| q-155 | Monitoring and analyzing application networks | Out of scope (OOS) |
| q-156 | Monitoring and analyzing application networks | Establishing organizational and platform foundations (2.5) |
| q-161 | Deploying API implementations to CloudHub | Establishing organizational and platform foundations (2.5) |
| q-164 | Monitoring and analyzing application networks | Out of scope (OOS) |
| q-170 | Meeting API quality goals | Out of scope (OOS) |
| q-172 | Architecting and deploying API implementations | Out of scope (OOS) |
| q-187 | Monitoring and analyzing application networks | Architecting and deploying API implementations (6.4) |
| q-192 | Monitoring and analyzing application networks | Governing web APIs on Anypoint Platform (5.2) |
| q-199 | Monitoring and analyzing application networks | Architecting and deploying API implementations (6.1) |
| q-202 | Deploying API implementations to CloudHub | Establishing organizational and platform foundations (2.3) |
| q-207 | Deploying API implementations to CloudHub | Architecting and deploying API implementations (6.5) |
| q-208 | Deploying API implementations to CloudHub | Architecting and deploying API implementations (6.3) |
| q-213 | Deploying API implementations to CloudHub | Architecting and deploying API implementations (6.3) |
| q-214 | Deploying API implementations to CloudHub | Architecting and deploying API implementations (6.3) |
| q-219 | Deploying API implementations to CloudHub | Architecting and deploying API implementations (6.3) |
| q-221 | Deploying API implementations to CloudHub | Establishing organizational and platform foundations (2.3) |
| q-222 | Architecting and deploying API implementations | Explaining application network basics (1.1) |
| q-223 | Architecting and deploying API implementations | Out of scope (OOS) |
| q-224 | Deploying API implementations to CloudHub | Out of scope (OOS) |
| q-225 | Meeting API quality goals | Out of scope (OOS) |
| q-226 | Governing web APIs on Anypoint Platform | Out of scope (OOS) |
| q-227 | Architecting and deploying API implementations | Out of scope (OOS) |
| q-228 | Meeting API quality goals | Deploying API implementations to CloudHub (7.6) |
| q-229 | Deploying API implementations to CloudHub | Out of scope (OOS) |
| q-230 | Governing web APIs on Anypoint Platform | Out of scope (OOS) |
| q-231 | Meeting API quality goals | Out of scope (OOS) |
| q-232 | Architecting and deploying API implementations | Out of scope (OOS) |
| q-234 | Meeting API quality goals | Out of scope (OOS) |
| q-236 | Architecting and deploying API implementations | Out of scope (OOS) |
| q-237 | Architecting and deploying API implementations | Designing APIs using System, Process, and Experience Layers (4.4) |
| q-245 | Deploying API implementations to CloudHub | Architecting and deploying API implementations (6.3) |
| q-265 | Governing web APIs on Anypoint Platform | Establishing organizational and platform foundations (2.4) |