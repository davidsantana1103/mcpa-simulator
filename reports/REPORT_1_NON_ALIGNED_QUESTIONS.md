# Report 1 - Questions not aligned with the real MCPA exam

Scope: all **272** questions in `questions.js` (read-only review). Reference: official *Salesforce Certified MuleSoft Platform Architect* exam guide (https://help.salesforce.com/s/articleView?id=005298956&type=1) - 60 multiple-choice questions, 120 min, 70% pass, 9 weighted sections.

## How "exam-like" was judged

Real MCPA items are short business/technical **scenarios** with 4 options (A-D), plausible distractors that are all real Anypoint features, a single best answer (or an explicit "Choose 2"), and they test architect-level decisions from the exam outline - not developer syntax. Each question was read and tagged with the issues below.

| Code | Severity | Meaning |
|---|---|---|
| `FAB` | Major | Relies on a non-existent / undocumented product feature or an incorrect fact |
| `AMB` | Major | Answer key is disputable or not justified by the stem |
| `OOS` | Major | Out of MCPA scope (developer / MCIA-level implementation detail) |
| `PAD` | Major | Synthetic stem (budget/deadline/regulation padding) with 6 options - not the real exam format |
| `REC` | Minor | One-line recall/definition, not a scenario (real exam is scenario-driven) |
| `GIV` | Minor | Implausible "giveaway" distractors (e.g. "disable all policies", "store secrets in Git") |
| `DUP` | Minor | Near-duplicate of another question |
| `MSL` | Minor | Domain label does not match the official exam-guide section of the tested objective |
| `SEL` | Minor | "Select all correct answers" wording; real exam states the exact number ("Choose 2") |

**Verdict rule:** any Major issue, or `REC`+`GIV` together → **Not aligned**; only Minor issues → **Needs polish**; none → **Aligned**.

## Summary

| Verdict | Questions | % of total |
|---|---:|---:|
| Aligned | 55 | 20.2% |
| Needs polish | 94 | 34.6% |
| Not aligned | 123 | 45.2% |
| **Total** | **272** | 100% |

| Issue | Questions flagged |
|---|---:|
| `FAB` | 22 |
| `AMB` | 28 |
| `OOS` | 28 |
| `PAD` | 70 |
| `REC` | 80 |
| `GIV` | 59 |
| `DUP` | 15 |
| `MSL` | 30 |
| `SEL` | 20 |

### Format / statistical findings

- **Answer-position bias:** of 247 single-answer questions the key is A=62 (25.1%), B=126 (51.0%), C=36 (14.6%), D=19 (7.7%), E=3 (1.2%), F=1 (0.4%). In questions 1-105 the answer is **B** far more often than chance, so test-takers can learn the pattern.
- **Longest-option bias:** the correct option is strictly the longest option in **163/247 (66.0%)** single-answer questions (chance ≈ 25%). Real exam items balance option length.
- **Option count:** 70 questions use 6 options (A-F). The real exam uses 4 options for single-answer items.
- **Multi-select:** 25 questions are multi-answer; 20 of them say "Select all correct answers" instead of the exam wording "Choose N".
- **Blocks of similar origin:** q-001-105 are mostly short recall items with giveaway distractors; q-106-175 are synthetic "budget/deadline/regulation" stems, many relying on invented features (19 of them already appear in `QUESTIONS_WITHOUT_DOCUMENTATION_LINKS.md`); q-176-272 are the most exam-like, except q-220-237 which are largely MCIA (Integration Architect) items.

## Questions NOT aligned with the exam

| # | Labeled domain | Issues | Why | Prompt (truncated) |
|---|---|---|---|---|
| q-001 | Explaining application network basics | `REC` `GIV` | 'Edge API' is an obvious non-answer | Which API layer in MuleSoft's API-led connectivity model directly unlocks data from a system of record like S… |
| q-005 | Governing web APIs on Anypoint Platform | `REC` `GIV` |  | What is the recommended way to expose APIs to internal consumers and external partners with different SLAs an… |
| q-010 | Governing web APIs on Anypoint Platform | `REC` `GIV` | answer text repeats the question wording ('Mutual TLS') | Which Anypoint policy enforces mutual TLS for client-to-API authentication? |
| q-011 | Designing and sharing APIs | `REC` `GIV` |  | Which approach is recommended for sharing common API design elements like security schemes, data types, and t… |
| q-015 | Meeting API quality goals | `REC` `GIV` |  | Where should durable, cluster-shared key/value state be stored for a CloudHub application running on multiple… |
| q-028 | Architecting and deploying API implementations | `REC` `GIV` |  | What is the recommended approach to manage secrets like database passwords used by Mule applications across e… |
| q-034 | Establishing organizational and platform foundations | `REC` `GIV` |  | Which Anypoint Platform component governs which users can deploy applications, manage APIs, or configure envi… |
| q-043 | Meeting API quality goals | `OOS` `GIV` | batch/streaming memory tuning is developer/MCIA scope | A long-running batch process consumes far more memory than concurrent traffic suggests. What is the most like… |
| q-044 | Designing and sharing APIs | `REC` `GIV` |  | Which is the MOST appropriate way to publish a reusable connector for an internal system across many MuleSoft… |
| q-050 | Meeting API quality goals | `REC` `GIV` `MSL` |  | What is the primary goal of an Anypoint VPC? |
| q-052 | Architecting and deploying API implementations | `OOS` `GIV` | DataWeave placement is developer scope | Which is the BEST place to handle field-level transformation of payloads in a Process API? |
| q-056 | Designing and sharing APIs | `REC` `GIV` |  | Which artifact lets developers consume a published RAML API specification automatically in their Mule project? |
| q-057 | Governing web APIs on Anypoint Platform | `REC` `GIV` |  | Which Anypoint Platform option enforces API policies at the gateway tier WITHOUT requiring code changes insid… |
| q-058 | Establishing organizational and platform foundations | `REC` `GIV` |  | What is the correct interpretation of an API's 'environment' in Anypoint Platform? |
| q-060 | Architecting and deploying API implementations | `REC` `GIV` |  | Which combination is recommended for a CI/CD pipeline that builds, tests, and deploys Mule applications consi… |
| q-062 | Architecting and deploying API implementations | `OOS` `GIV` | XA transactions are MCIA scope | Which Mule capability enables transactional reliability for a flow that reads from a JMS queue, writes to a d… |
| q-066 | Architecting and deploying API implementations | `REC` `GIV` |  | Which combination is correct for promoting a Mule app and its API governance from Sandbox to Production? |
| q-067 | Monitoring and analyzing application networks | `REC` `GIV` |  | Which feature in CloudHub measures and exposes the rate at which an app processes events, enabling alerting o… |
| q-068 | Architecting and deploying API implementations | `OOS` `GIV` | Scatter-Gather is developer/MCIA scope | Which is the correct reading of a Process API that calls multiple System APIs in parallel and aggregates the… |
| q-070 | Establishing organizational and platform foundations | `AMB` `GIV` | correct option describes a vague 'governance/asset standards' mechanism, not a concrete platform feature | Which Anypoint Platform mechanism lets a single business group's master organization centrally enforce that a… |
| q-072 | Governing web APIs on Anypoint Platform | `REC` `GIV` |  | Which response best describes how to model SLA tiers for a public API used by both internal apps and paying e… |
| q-074 | Explaining application network basics | `REC` `GIV` `MSL` |  | Which Anypoint Platform persona is typically responsible for defining shared API design standards and ensurin… |
| q-075 | Meeting API quality goals | `REC` `GIV` |  | Which action increases the maximum throughput of a CloudHub app most directly when the bottleneck is per-work… |
| q-076 | Governing web APIs on Anypoint Platform | `REC` `GIV` |  | Which artifact in API Manager allows applying a policy template to many APIs at once based on tags or environ… |
| q-078 | Designing and sharing APIs | `AMB` | 'API Manager / Exchange combined experience' is not a real component name | Which Anypoint Platform feature provides a registry-style listing of APIs with their version, status, and con… |
| q-081 | Meeting API quality goals | `REC` `GIV` | option D is garbled text | Which is a true statement about Anypoint MQ message delivery semantics? |
| q-084 | Governing web APIs on Anypoint Platform | `REC` `GIV` |  | Which is the correct way to authenticate Mule apps to call other Mule apps that are protected by OAuth 2.0 cl… |
| q-085 | Governing web APIs on Anypoint Platform | `REC` `GIV` |  | Which Anypoint capability lets architects create and rotate JWKS-backed signing keys consumed by JWT-validati… |
| q-086 | Explaining application network basics | `REC` `GIV` |  | Which is a key responsibility of the API platform architecture review at the application network level (vs. a… |
| q-088 | Deploying API implementations to CloudHub | `REC` `GIV` |  | Which is a TRUE statement about CloudHub region selection for a customer needing low-latency access from APAC? |
| q-089 | Monitoring and analyzing application networks | `REC` `GIV` |  | Which is the recommended way to expose Mule app and CloudHub-level metrics to a centralized enterprise observ… |
| q-092 | Establishing organizational and platform foundations | `REC` `GIV` |  | Which is the correct understanding of API spec ownership in a federated, multi-business-group deployment? |
| q-093 | Architecting and deploying API implementations | `REC` `GIV` |  | An architect wants the SAME RAML spec to drive both API Manager governance AND the Mule implementation skelet… |
| q-095 | Deploying API implementations to CloudHub | `REC` `GIV` |  | Which statement about Mule Hybrid deployment is TRUE? |
| q-096 | Architecting and deploying API implementations | `REC` `GIV` |  | Which strategy best handles credentials for Mule apps calling external systems, while respecting per-environm… |
| q-097 | Architecting and deploying API implementations | `REC` `GIV` |  | Which option BEST describes the role of API Manager when a Mule API is deployed with auto-discovery enabled? |
| q-099 | Explaining application network basics | `REC` `GIV` |  | Which is the correct interpretation of 'application network' in MuleSoft's vocabulary? |
| q-106 | Designing APIs using System, Process, and Experience Layers | `PAD` `FAB` | no generic 'pre-built Core Banking connector' exists as described | A fast‑growing fintech startup is building a new mobile banking app that must integrate its core banking syst… |
| q-107 | Governing web APIs on Anypoint Platform | `PAD` `GIV` |  | A regional healthcare provider must expose patient appointment APIs to partner clinics while remaining fully… |
| q-108 | Deploying API implementations to CloudHub | `PAD` `AMB` | CloudHub 1.0 autoscaling is edition-limited; answer depends on unstated subscription | An online retailer expects a 3× traffic surge during holiday sales and has only two junior ops engineers to m… |
| q-109 | Monitoring and analyzing application networks | `PAD` `AMB` | API analytics are included with API Manager; 'purchase add-on' key is disputable | A logistics company needs to track API latency and usage across its shipment‑tracking services to meet a two‑… |
| q-110 | Governing web APIs on Anypoint Platform | `PAD` `FAB` | no 'NIST-aligned policy templates' exist (listed in QUESTIONS_WITHOUT_DOCUMENTATION_LINKS.md) | A federal agency is consolidating multiple legacy services into a unified API portfolio and must enforce a un… |
| q-111 | Establishing organizational and platform foundations | `PAD` `GIV` |  | A mid‑size manufacturing firm wants to create reusable Mule Soft assets (templates, connectors, and policies)… |
| q-112 | Deploying API implementations to CloudHub | `PAD` `FAB` | licensing claims (consumption-based CH2, service-mesh fee) are not documented | A Saa S startup plans to deploy Mule runtime on a Kubernetes cluster but its developers have limited containe… |
| q-113 | Governing web APIs on Anypoint Platform | `PAD` `FAB` `SEL` | 'CloudHub built-in data-at-rest encryption' and 'Monitoring audit-logging feature' are not documented | A healthcare network is integrating a patient portal with an electronic medical record system and must satisf… |
| q-114 | Architecting and deploying API implementations | `PAD` `AMB` `SEL` | three 'correct' answers are equally plausible bundles | A large financial institution is migrating legacy SOAP services to an API‑led architecture, must maintain a 9… |
| q-115 | Establishing organizational and platform foundations | `PAD` `SEL` |  | A national retail chain is adopting Anypoint Platform to enable business‑unit self‑service for new integratio… |
| q-116 | Designing APIs using System, Process, and Experience Layers | `PAD` `FAB` | 'Banking Integration Accelerator' + generic connectors as described are not real products | A mid‑size financial services firm is consolidating its legacy core banking system with a new cloud‑based CRM… |
| q-117 | Governing web APIs on Anypoint Platform | `PAD` `AMB` |  | A regional healthcare provider must expose patient data through APIs while remaining fully HIPAA‑compliant, a… |
| q-118 | Deploying API implementations to CloudHub | `PAD` `AMB` | RTF in private DC vs. auto-scaling K8s/CloudHub - key not justified by stem | A national retail chain processes 10,000 orders per minute and requires sub‑second response times for its che… |
| q-119 | Designing and sharing APIs | `PAD` |  | A logistics startup with a three‑person Dev Ops team needs to expose a shipment‑tracking API quickly, but the… |
| q-120 | Governing web APIs on Anypoint Platform | `PAD` `GIV` |  | A federal agency follows a strict change‑control process and must track API versions and enforce usage polici… |
| q-121 | Monitoring and analyzing application networks | `PAD` `GIV` |  | A manufacturing company wants real‑time visibility into integration performance to meet its SLA of 99.9% upti… |
| q-122 | Meeting API quality goals | `PAD` `OOS` | K8s state management is not an MCPA objective | A fintech startup plans to run Mule runtimes on a Kubernetes cluster to leverage auto‑scaling, but its engine… |
| q-123 | Architecting and deploying API implementations | `PAD` `OOS` `SEL` | HL7 parsing / DataWeave is developer scope | A healthcare network is integrating three EMR systems that use different HL7 versions, and it must guarantee… |
| q-124 | Meeting API quality goals | `PAD` `AMB` `SEL` |  | An e‑commerce retailer expects a 300% traffic surge during the holiday season and needs to ensure high availa… |
| q-125 | Deploying API implementations to CloudHub | `PAD` `FAB` `SEL` | 'export OAuth provider config into Access Management' and 'Automatic Re-deployer' do not exist | A logistics company is migrating its on‑premises APIs to Anypoint Platform Cloud Hub and has a 48‑hour migrat… |
| q-126 | Designing and sharing APIs | `PAD` `AMB` |  | A mid-sized finance firm is building a new API to expose customer account balances. The solution must comply… |
| q-127 | Architecting and deploying API implementations | `PAD` `OOS` |  | A regional healthcare provider needs to integrate its electronic health record (EHR) system with a third‑part… |
| q-128 | Designing APIs using System, Process, and Experience Layers | `PAD` |  | A national retail chain wants to expose its product catalog to external partners while enforcing throttling l… |
| q-129 | Architecting and deploying API implementations | `PAD` `OOS` | Scatter-Gather pattern selection is developer scope | A logistics company is orchestrating real‑time shipment tracking across three carrier APIs. The solution must… |
| q-130 | Governing web APIs on Anypoint Platform | `PAD` `AMB` | 'most secure' between mTLS and OAuth is opinion | A federal government agency is securing an internal API that provides classified data. The project has a stri… |
| q-131 | Architecting and deploying API implementations | `PAD` `OOS` |  | A manufacturing firm is ingesting high‑velocity Io T sensor data into its ERP system. The team has limited Mu… |
| q-132 | Designing and sharing APIs | `PAD` `AMB` |  | A financial services company is exposing a loan‑application API that must support versioning without disrupti… |
| q-133 | Governing web APIs on Anypoint Platform | `PAD` `SEL` `GIV` |  | A healthcare startup must secure its patient data APIs to satisfy both GDPR and HIPAA while operating with a… |
| q-134 | Architecting and deploying API implementations | `PAD` `AMB` `SEL` `FAB` | Mule 3->4 Migration Assistant does not apply to a non-Mule legacy ESB | A retail chain is migrating from a legacy ESB to Anypoint Platform under a tight deadline, needs to reuse exi… |
| q-135 | Monitoring and analyzing application networks | `PAD` `SEL` `AMB` |  | A logistics company with a 99.9% SLA requirement and a limited monitoring budget needs to ensure API health a… |
| q-136 | Designing and sharing APIs | `PAD` |  | A mid‑size financial services firm is designing a new account‑management API that must remain backward compat… |
| q-137 | Designing APIs using System, Process, and Experience Layers | `PAD` `AMB` |  | A regional healthcare provider needs to aggregate patient records from three heterogeneous EHR systems in rea… |
| q-138 | Governing web APIs on Anypoint Platform | `PAD` `AMB` |  | An online retail company must protect credit‑card information flowing through its checkout API to satisfy PCI… |
| q-139 | Governing web APIs on Anypoint Platform | `PAD` |  | A logistics startup plans to launch a public shipment‑tracking API within four weeks, needs built‑in request… |
| q-140 | Architecting and deploying API implementations | `PAD` |  | A federal agency is orchestrating an approvals workflow that spans a legacy mainframe, a cloud‑based document… |
| q-141 | Governing web APIs on Anypoint Platform | `PAD` `OOS` `FAB` | MQTT/IEC 62443 cipher choice is outside MuleSoft scope; no doc link | A manufacturing plant wants to secure MQTT telemetry from its Io T sensors to the Mule runtime, must adhere t… |
| q-142 | Designing and sharing APIs | `PAD` `FAB` | no MuleSoft 'Hypermedia (HAL) module' exists; no doc link | A fintech startup is building a hypermedia‑driven loan‑application API to enable clients to navigate state tr… |
| q-143 | Architecting and deploying API implementations | `PAD` `AMB` `SEL` | caching a SOAP response does not deliver eventual consistency | A healthcare analytics team must integrate a lab‑result REST API, a patient‑portal SOAP service, and a billin… |
| q-144 | Governing web APIs on Anypoint Platform | `PAD` `AMB` `SEL` |  | A national retail chain wants to expose its inventory catalog to external partners, must enforce OAuth 2.0, s… |
| q-145 | Governing web APIs on Anypoint Platform | `PAD` `OOS` `SEL` | WS-Security details are out of MCPA scope | A government tax department needs to secure a SOAP web service that exchanges taxpayer data with state agenci… |
| q-146 | Designing and sharing APIs | `PAD` |  | A mid‑size bank is exposing a new customer‑profile service on Anypoint Platform. The team must support both e… |
| q-147 | Architecting and deploying API implementations | `PAD` `OOS` |  | A regional healthcare provider is integrating patient‑record systems across three clinics. Due to HIPAA, data… |
| q-148 | Governing web APIs on Anypoint Platform | `PAD` `FAB` | API Manager does not issue OAuth tokens itself | A global retail chain is rolling out a loyalty API that will be consumed by mobile apps, web portals, and thi… |
| q-149 | Establishing organizational and platform foundations | `PAD` `MSL` |  | A logistics startup needs to expose a shipment‑tracking API that will be versioned quarterly. The product tea… |
| q-150 | Governing web APIs on Anypoint Platform | `PAD` `FAB` `SEL` | Secrets Manager + HSM for FIPS data-at-rest is not documented | A government agency is publishing a confidential document‑exchange API on Anypoint Platform. Compliance (FIPS… |
| q-151 | Architecting and deploying API implementations | `PAD` `OOS` `AMB` `SEL` |  | A manufacturing company is designing an integration solution to synchronize inventory data between its ERP, w… |
| q-152 | Deploying API implementations to CloudHub | `PAD` `AMB` |  | A mid‑size financial services firm must migrate its core payment APIs to the Anypoint Platform within a $150,… |
| q-153 | Monitoring and analyzing application networks | `PAD` `AMB` |  | A regional healthcare provider handling protected patient data needs to implement monitoring that satisfies H… |
| q-154 | Deploying API implementations to CloudHub | `PAD` `AMB` |  | A national retail chain plans to launch a new omnichannel experience and must decide on a deployment strategy… |
| q-155 | Monitoring and analyzing application networks | `PAD` `OOS` | log4j root level tuning is developer scope | A logistics startup with a small Dev Ops crew discovers that error logs are overwhelming the console, and the… |
| q-156 | Monitoring and analyzing application networks | `PAD` `FAB` | 'Anypoint Monitoring PCE connected to SaaS dashboards' is not a real offering | A federal government agency is required to store all monitoring data on-premises for security clearance reaso… |
| q-157 | Monitoring and analyzing application networks | `PAD` |  | A manufacturing plant’s ERP integration shows intermittent latency spikes during peak shifts, and the team mu… |
| q-158 | Monitoring and analyzing application networks | `PAD` `AMB` | there is no single 'built-in SLA alerting' feature | A fintech startup wants to set up real‑time alerts for API SLA breaches while keeping operational overhead lo… |
| q-159 | Monitoring and analyzing application networks | `PAD` `FAB` `SEL` | 'usage sampling feature' does not exist | A large retail enterprise is rolling out API analytics across its e‑commerce platform and must balance detail… |
| q-160 | Monitoring and analyzing application networks | `PAD` `FAB` `SEL` | MULE_TRACING_ENABLED property and 180-day retention setting are invented | A healthcare integration team must configure logging to retain audit-level records, enable distributed tracin… |
| q-161 | Deploying API implementations to CloudHub | `PAD` `SEL` |  | A logistics company is migrating its on‑premise Mule runtimes to Cloud Hub and must ensure zero downtime duri… |
| q-162 | Deploying API implementations to CloudHub | `PAD` `FAB` | 'CloudHub Dedicated (single-tenant VPC)' is not a product | A mid-sized financial services firm is migrating its core loan‑origination APIs to Anypoint Platform. The bud… |
| q-163 | Monitoring and analyzing application networks | `PAD` `FAB` | audit-log retention cannot be set to seven years | A regional healthcare provider operates a patient‑record API that must retain audit logs for seven years to s… |
| q-164 | Monitoring and analyzing application networks | `PAD` `OOS` |  | A large retail chain’s order‑processing flow has started returning intermittent 500 errors after a recent Mul… |
| q-165 | Designing and sharing APIs | `PAD` |  | A logistics startup needs to roll out a new shipment-tracking API across three geographic regions within two… |
| q-166 | Monitoring and analyzing application networks | `PAD` `FAB` | 'encrypted at rest by default' claim not documented | A federal agency is deploying a citizen-service portal on Anypoint Platform and must ensure that all API usag… |
| q-167 | Monitoring and analyzing application networks | `PAD` |  | A manufacturing company's ERP integration is experiencing latency spikes during peak production hours, and th… |
| q-168 | Architecting and deploying API implementations | `PAD` `SEL` |  | A multinational bank is standardizing its CI/CD pipeline for Mule applications across Cloud Hub and on-premis… |
| q-169 | Monitoring and analyzing application networks | `PAD` `FAB` `SEL` | 'anomaly detection policy' and 'data-purge schedule' do not exist | A hospital network runs dozens of APIs for patient data exchange and wants to proactively detect abnormal usa… |
| q-170 | Meeting API quality goals | `PAD` `OOS` `AMB` `SEL` |  | A fashion retailer's mobile app backend is generating frequent validation errors that are not captured in sta… |
| q-171 | Governing web APIs on Anypoint Platform | `PAD` `FAB` | 'pre-built PCI-DSS compliance templates' do not exist | A mid-sized financial services firm is launching a new mobile banking app and needs to expose customer accoun… |
| q-172 | Architecting and deploying API implementations | `PAD` `OOS` | staffing/consulting decision, not a platform objective | A regional healthcare provider must integrate its legacy HL7 messaging system with a new patient portal, but… |
| q-173 | Monitoring and analyzing application networks | `PAD` `AMB` |  | A national retail chain wants real-time visibility into API usage across its e-commerce and in-store applicat… |
| q-174 | Deploying API implementations to CloudHub | `PAD` `FAB` | 'cost-capacity sizing tooling' does not exist | A logistics startup plans to host its Mule runtime in a public cloud but must keep monthly infrastructure cos… |
| q-175 | Governing web APIs on Anypoint Platform | `PAD` `FAB` | 'access-review approval workflow in Access Management' does not exist | A federal government agency is publishing citizen services APIs that must comply with FIPS-140 encryption sta… |
| q-187 | Monitoring and analyzing application networks | `FAB` | BAT is 'Blackbox Automated Testing', not 'Behavioral Analytics Tool' | A DevSecOps pipeline must run standard BDD test suites against newly deployed QA APIs before production deplo… |
| q-197 | Monitoring and analyzing application networks | `AMB` | heartbeat mechanism detail not documented precisely | A CloudHub 1.0 application occasionally becomes unresponsive, and the team configures a Runtime Manager Worke… |
| q-209 | Deploying API implementations to CloudHub | `AMB` | 0.2 vCore (1 GB) is unlikely to hold an 800 MB payload in memory; key disputable | An architect is sizing a CloudHub 1.0 worker for a Mule application that needs to load an 800 MB JSON payload… |
| q-217 | Deploying API implementations to CloudHub | `AMB` | 'Network Tools app (or built-in diagnostic tool)' hedged answer | An organization has deployed a Mule application that connects to an internal corporate network using an IPsec… |
| q-218 | Deploying API implementations to CloudHub | `DUP` `AMB` | overlaps/conflicts with q-251 on how DLB HA works | An organization requires that their CloudHub Dedicated Load Balancer (DLB) is highly available to prevent a s… |
| q-223 | Architecting and deploying API implementations | `OOS` | MCIA-style Anypoint MQ ordering/maxConcurrency design | A Mule solution implements an Experience API and System API as Mule applications that process messages in thi… |
| q-224 | Deploying API implementations to CloudHub | `OOS` | MCIA-style cluster question | An insurance company is designing a hybrid, load-balanced, single-cluster runtime production environment. Due… |
| q-225 | Meeting API quality goals | `OOS` | repeatable streaming strategy is MCIA/MCD scope | A marketing organization is designing a Mule application to process campaign data. The Mule application will… |
| q-226 | Governing web APIs on Anypoint Platform | `OOS` | secure property hiding (mule-artifact.json) is MCIA scope | A new Mule application has been deployed through Runtime Manager to CloudHub 1.0 using a CI/CD pipeline with… |
| q-227 | Architecting and deploying API implementations | `OOS` | Mule domain projects are MCIA/MCD scope | An organization has built a large monolithic application over the years and is currently looking to transitio… |
| q-229 | Deploying API implementations to CloudHub | `OOS` | RTF agent internals are MCIA scope | Refer to the exhibit. A customer is running Mule applications on Runtime Fabric for Self-Managed Kubernetes (… |
| q-230 | Governing web APIs on Anypoint Platform | `OOS` `MSL` | HTTP TLS context is MCIA/MCD scope | A Mule application is designed to call the Google Maps API to perform a distance computation, and is deployed… |
| q-231 | Meeting API quality goals | `OOS` | Parallel For-Each/Async scopes are MCIA/MCD scope | A bank is implementing a REST API in a Mule application to receive an array of accounts from an online bankin… |
| q-232 | Architecting and deploying API implementations | `OOS` | Anypoint MQ ack modes are MCIA scope | A manufacturing company wants to share inventory updates with dealers D1 and D2 asynchronously and concurrent… |
| q-234 | Meeting API quality goals | `OOS` | XA transaction timeout is MCIA scope | How does a timeout attribute in a configured transaction manager help inform design decisions while using a J… |
| q-236 | Architecting and deploying API implementations | `OOS` | Salesforce Metadata API is unrelated to MCPA | Which Salesforce API is invoked to deploy, retrieve, create, update, or delete customization information, suc… |

## Questions that need polish (minor issues only)

| # | Labeled domain | Issues | Note | Prompt (truncated) |
|---|---|---|---|---|
| q-002 | Explaining application network basics | `REC` `MSL` | C4E belongs to Org & Platform Foundations | What is the primary purpose of a Center for Enablement (C4E) in a MuleSoft application network? |
| q-003 | Designing and sharing APIs | `REC` |  | Which Anypoint Platform component is used to design and document API specifications using RAML or OAS? |
| q-004 | Designing and sharing APIs | `REC` |  | Which Anypoint Platform component is the marketplace for discovering, sharing, and reusing APIs, fragments, c… |
| q-006 | Establishing organizational and platform foundations | `REC` |  | In Anypoint Platform, what is the purpose of organizing assets into business groups? |
| q-007 | Deploying API implementations to CloudHub | `REC` |  | Which Anypoint deployment option is a fully managed, multi-tenant cloud runtime hosted by MuleSoft on AWS? |
| q-008 | Meeting API quality goals | `REC` `MSL` | worker sizing is a CloudHub objective | What is the unit of compute capacity used to size Mule applications on CloudHub? |
| q-009 | Architecting and deploying API implementations | `REC` |  | Which feature in API Manager pairs a deployed Mule app with its managed API automatically using the API ID? |
| q-012 | Designing and sharing APIs | `REC` |  | What is the recommended order of major activities in the API lifecycle described by MuleSoft? |
| q-013 | Monitoring and analyzing application networks | `REC` |  | Which Anypoint Platform feature provides a real-time visual graph of the application network showing API depe… |
| q-014 | Meeting API quality goals | `REC` |  | Which Anypoint capability provides reliable, asynchronous, queue-based messaging between Mule applications wi… |
| q-016 | Designing and sharing APIs | `REC` |  | When applying breaking changes to an API, which versioning practice is recommended by MuleSoft? |
| q-017 | Designing and sharing APIs | `REC` |  | A development team wants to mock and validate an API design with consumers before any implementation work beg… |
| q-018 | Governing web APIs on Anypoint Platform | `REC` |  | Which statement about pre-built MuleSoft API policies is TRUE? |
| q-019 | Architecting and deploying API implementations | `REC` |  | Which testing tool is built specifically for unit-testing Mule applications, including mocking processors and… |
| q-020 | Explaining application network basics | `MSL` | layer assignment belongs to the Layers domain | A retail enterprise wants every customer-facing channel team to assemble its own dashboards from System APIs… |
| q-021 | Deploying API implementations to CloudHub | `REC` |  | Which deployment option lets you run Mule runtimes inside your own Kubernetes cluster while still managing th… |
| q-022 | Meeting API quality goals | `REC` |  | What is the purpose of CloudHub's Object Store v2 versus the in-memory Object Store v1? |
| q-023 | Meeting API quality goals | `REC` |  | What does enabling 'Persistent Queues' on a CloudHub app primarily provide? |
| q-024 | Meeting API quality goals | `REC` `MSL` | load balancer topic belongs to CloudHub | Which CloudHub feature distributes traffic across multiple workers to provide horizontal scaling and high ava… |
| q-025 | Deploying API implementations to CloudHub | `REC` |  | Which CloudHub configuration enables a managed, customer-controlled load balancer with custom certificates, c… |
| q-026 | Governing web APIs on Anypoint Platform | `GIV` | option 'No policies' is a giveaway | An architect needs to expose an API to partners with strict client identification requirements but no need fo… |
| q-027 | Monitoring and analyzing application networks | `REC` |  | Which Anypoint capability stores Mule application logs centrally for the last 30 days (default) and supports… |
| q-029 | Governing web APIs on Anypoint Platform | `REC` |  | Which built-in policy can validate a JSON Web Token's signature, issuer, audience, and expiration before the… |
| q-030 | Architecting and deploying API implementations | `REC` |  | What is the Mule Maven Plugin used for in CI/CD pipelines? |
| q-031 | Meeting API quality goals | `MSL` |  | An organization needs failover for a CloudHub app across two AWS regions in case of a region-wide outage. Whi… |
| q-032 | Designing and sharing APIs | `REC` |  | Which artifact does Anypoint Exchange version when a RAML API specification changes in a backwards-compatible… |
| q-033 | Establishing organizational and platform foundations | `REC` |  | Which entitlement model determines how many vCores a business group can deploy to CloudHub? |
| q-035 | Explaining application network basics | `REC` `MSL` | System API data-model question belongs to Layers domain | When designing System APIs, which rule of thumb best preserves their reuse value? |
| q-036 | Deploying API implementations to CloudHub | `REC` `MSL` | Service Mesh = policy-enforcement approach (Governing) | An organization wants to enforce API policies on services that are NOT Mule-based but are deployed in an exis… |
| q-037 | Designing and sharing APIs | `GIV` |  | Which approach best supports introducing a breaking change to an active Process API without disrupting curren… |
| q-038 | Deploying API implementations to CloudHub | `REC` |  | Which is a TRUE statement about CloudHub Shared Load Balancer (SLB)? |
| q-039 | Governing web APIs on Anypoint Platform | `REC` |  | Which security control prevents a denial-of-service from a misbehaving client by capping requests per time wi… |
| q-040 | Governing web APIs on Anypoint Platform | `GIV` |  | An architect wants ALL traffic to a Mule API to be authorized by a corporate identity provider's OAuth 2.0 ac… |
| q-041 | Monitoring and analyzing application networks | `REC` |  | Which Anypoint Monitoring artifact lets architects build customized views combining latency, throughput, and… |
| q-042 | Deploying API implementations to CloudHub | `REC` |  | Which scenario is the strongest case for deploying to Runtime Fabric instead of CloudHub? |
| q-045 | Monitoring and analyzing application networks | `REC` |  | Which capability is provided by Anypoint Visualizer (and NOT by Anypoint Monitoring)? |
| q-046 | Explaining application network basics | `REC` `DUP` | duplicates q-020 concept (business logic in Process layer) | Which is the recommended placement of business logic in API-led connectivity? |
| q-047 | Monitoring and analyzing application networks | `REC` |  | Which feature provides automatic notification when CloudHub workers crash, scale, or breach configured thresh… |
| q-048 | Governing web APIs on Anypoint Platform | `REC` |  | Which Anypoint capability lets organizations build custom API policies in Java/XML when pre-built ones are in… |
| q-049 | Meeting API quality goals | `REC` `MSL` |  | Which CloudHub configuration property controls whether outbound traffic from workers can use a static, allow-… |
| q-051 | Governing web APIs on Anypoint Platform | `GIV` |  | An architect is asked to enforce that ONLY traffic from a specific upstream API gateway can reach a downstrea… |
| q-053 | Architecting and deploying API implementations | `REC` `MSL` |  | Which strategy best supports rolling out CloudHub deployments with minimal downtime when a new app version is… |
| q-054 | Meeting API quality goals | `REC` `MSL` |  | What is the impact of selecting a smaller worker size (e.g., 0.1 vCore) versus a larger size (e.g., 1 vCore)… |
| q-055 | Governing web APIs on Anypoint Platform | `REC` |  | Which control in API Manager records the agreement that gives a specific client app access to a specific API… |
| q-059 | Monitoring and analyzing application networks | `REC` |  | Which Anypoint feature is most useful for visually identifying Process APIs that depend on a specific System… |
| q-061 | Meeting API quality goals | `GIV` |  | An architect must support 200 requests per second peak with average response time under 250 ms on CloudHub. W… |
| q-063 | Meeting API quality goals | `GIV` |  | Which architectural pattern best protects a downstream slow legacy system from being overwhelmed by bursty in… |
| q-064 | Governing web APIs on Anypoint Platform | `REC` |  | An API Manager policy is configured for an API instance in the Production environment. Will it automatically… |
| q-065 | Explaining application network basics | `REC` |  | Which is a key difference between a Process API and an Experience API? |
| q-069 | Meeting API quality goals | `GIV` |  | A Process API frequently re-fetches the same reference data from a System API, causing latency and load. Whic… |
| q-071 | Architecting and deploying API implementations | `REC` |  | Which is the correct understanding of API auto-discovery vs. proxying for a Mule API? |
| q-073 | Architecting and deploying API implementations | `REC` |  | Which is true about MUnit coverage in CI? |
| q-077 | Designing APIs using System, Process, and Experience Layers | `GIV` |  | An architect must minimize round trips for mobile clients fetching account, recent transactions, and offers i… |
| q-079 | Deploying API implementations to CloudHub | `GIV` |  | An organization wants Mule applications running in their AWS account due to networking and compliance constra… |
| q-080 | Designing and sharing APIs | `GIV` |  | Which approach lets an architect provide consistent error responses across all APIs without coding error hand… |
| q-082 | Meeting API quality goals | `GIV` |  | Which choice best supports horizontal scaling of an Experience API that aggregates calls to several Process A… |
| q-083 | Establishing organizational and platform foundations | `REC` `MSL` |  | Which combination is correct about API instances and their environments in API Manager? |
| q-087 | Governing web APIs on Anypoint Platform | `GIV` |  | Which approach is valid for keeping access to a Process API restricted to specific upstream Experience APIs a… |
| q-090 | Meeting API quality goals | `GIV` | correct option is an 'everything good' bundle | Which design choice is MOST important for a synchronous API SLA target of 95th-percentile response time under… |
| q-091 | Meeting API quality goals | `GIV` | correct option is an 'everything good' bundle | Which Mule pattern provides bulkhead-style isolation when a downstream dependency becomes slow or unstable? |
| q-094 | Designing and sharing APIs | `GIV` |  | Which approach BEST allows architects to compose APIs from reusable building blocks while still maintaining a… |
| q-098 | Meeting API quality goals | `REC` |  | An architect must design an asynchronous notification fan-out where multiple Mule apps independently consume… |
| q-100 | Meeting API quality goals | `GIV` `MSL` | data residency belongs to Org & Platform Foundations | Which approach BEST addresses both regulatory data-residency for EU customers AND operational simplicity by k… |
| q-101 | Architecting and deploying API implementations | `REC` |  | A platform team needs Flex Gateway instances to receive policies from API Manager and publish analytics to An… |
| q-102 | Deploying API implementations to CloudHub | `GIV` |  | In CloudHub 2.0, which option lets architects expose a public ingress endpoint into an isolated private netwo… |
| q-103 | Establishing organizational and platform foundations | `GIV` `MSL` |  | A platform team wants every RAML or OAS change checked against enterprise standards before merge. Which MuleS… |
| q-104 | Designing and sharing APIs | `REC` |  | Which Anypoint Exchange lifecycle state should an asset version enter when it is ready for broad reuse and sh… |
| q-105 | Establishing organizational and platform foundations | `REC` `MSL` |  | Which Anypoint capability gives architects a portfolio-wide view of governance coverage, conformance rates, a… |
| q-179 | Monitoring and analyzing application networks | `DUP` | near-duplicate of q-182 | An organization needs to test a public Experience API every five minutes by sending a specific JSON payload f… |
| q-182 | Monitoring and analyzing application networks | `DUP` | near-duplicate of q-179 | An integration team needs continuous tests of public Experience APIs from multiple geographic locations outsi… |
| q-192 | Monitoring and analyzing application networks | `MSL` |  | Without changing Mule application source code, an operations team needs to temporarily log incoming HTTP head… |
| q-194 | Monitoring and analyzing application networks | `REC` |  | An API's Anypoint Monitoring built-in dashboard shows many HTTP 429 (Too Many Requests) errors. What is the m… |
| q-199 | Monitoring and analyzing application networks | `MSL` |  | A team needs its CloudHub API implementation to register with API Manager so that analytics and policy enforc… |
| q-202 | Deploying API implementations to CloudHub | `MSL` |  | An integration architect is designing a hybrid deployment. The Mule runtime engines are installed on customer… |
| q-207 | Deploying API implementations to CloudHub | `MSL` |  | An organization is deploying Mule applications to CloudHub 1.0. They configure the passwords in a secure prop… |
| q-208 | Deploying API implementations to CloudHub | `MSL` |  | A company is moving its Mule applications from Customer-Hosted standalone servers to Runtime Fabric (RTF) ins… |
| q-213 | Deploying API implementations to CloudHub | `MSL` |  | A Mule application is deployed to a Customer-Hosted, multi-node active-active cluster. The application contai… |
| q-214 | Deploying API implementations to CloudHub | `MSL` |  | An architect is designing an infrastructure migration from CloudHub 1.0 to Runtime Fabric (RTF) on VMs / Bare… |
| q-219 | Deploying API implementations to CloudHub | `MSL` |  | A company deploys an API implementation to Runtime Fabric (RTF) with 3 replicas. The application exposes an H… |
| q-221 | Deploying API implementations to CloudHub | `MSL` |  | A company is modernizing its legacy systems to accelerate access to applications and data while supporting th… |
| q-222 | Architecting and deploying API implementations | `MSL` |  | An airline is architecting an API-led connectivity project to integrate its flight data into an online aggreg… |
| q-237 | Architecting and deploying API implementations | `MSL` |  | Why would an Enterprise Architect use a single enterprise-wide canonical data model (CDM) when designing an i… |
| q-251 | Deploying API implementations to CloudHub | `DUP` | overlaps q-218 | An architect must ensure a CloudHub 1.0 Dedicated Load Balancer (DLB) is not a single point of failure. Which… |
| q-259 | Deploying API implementations to CloudHub | `DUP` | overlaps q-271 | An architect must serve a CloudHub 2.0 private space application on the custom domain api.company.com with th… |
| q-261 | Governing web APIs on Anypoint Platform | `DUP` | overlaps q-268 | A security architect must guarantee that every API deployed to a production environment enforces an IP allowl… |
| q-264 | Governing web APIs on Anypoint Platform | `DUP` | overlaps q-270 | An organization uses an external OpenID Connect identity provider as its client-management solution and wants… |
| q-265 | Governing web APIs on Anypoint Platform | `MSL` |  | An organization wants Anypoint Platform API portals to dynamically register client applications with an exter… |
| q-266 | Governing web APIs on Anypoint Platform | `DUP` | overlaps q-272 | An organization runs non-Mule microservices in a Kubernetes cluster with an Istio service mesh and wants to d… |
| q-267 | Governing web APIs on Anypoint Platform | `DUP` | overlaps q-269 | An architect must protect a mix of Mule and non-Mule APIs running in Kubernetes and on-premises, and needs hi… |
| q-268 | Governing web APIs on Anypoint Platform | `DUP` | overlaps q-261 | A security architect wants to enforce a logging and security standard across every API in a specific environm… |
| q-269 | Governing web APIs on Anypoint Platform | `DUP` | overlaps q-267 | Refer to the exhibit. An architect is comparing two ways to govern the same set of APIs: (A) embed governance… |
| q-270 | Governing web APIs on Anypoint Platform | `DUP` | overlaps q-264 | Refer to the exhibit. An organization's API portal registers client applications dynamically with an external… |
| q-271 | Deploying API implementations to CloudHub | `DUP` | overlaps q-259 | Refer to the exhibit. A company deploys an API to a CloudHub 2.0 private space and wants external clients to… |
| q-272 | Governing web APIs on Anypoint Platform | `DUP` | overlaps q-266 | Refer to the exhibit. An architect is deciding where to enforce API policies for a Kubernetes microservices e… |

## Questions aligned with the exam

q-176, q-177, q-178, q-180, q-181, q-183, q-184, q-185, q-186, q-188, q-189, q-190, q-191, q-193, q-195, q-196, q-198, q-200, q-201, q-203, q-204, q-205, q-206, q-210, q-211, q-212, q-215, q-216, q-220, q-228, q-233, q-235, q-238, q-239, q-240, q-241, q-242, q-243, q-244, q-245, q-246, q-247, q-248, q-249, q-250, q-252, q-253, q-254, q-255, q-256, q-257, q-258, q-260, q-262, q-263
