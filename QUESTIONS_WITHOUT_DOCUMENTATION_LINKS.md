# Questions Without a Verified MuleSoft Documentation Link

The `references` field for the questions listed below was intentionally left empty. Each of these
questions has a correct answer that depends on a feature, capability, or limit that could not be
verified on the official MuleSoft documentation (docs.mulesoft.com). Per the task instructions, no
documentation link was invented for these questions. They are listed here for manual review.

Total questions left without a documentation link: **17**

---

## q-110 — Governing web APIs on Anypoint Platform

**Prompt:** A federal agency is consolidating multiple legacy services into a unified API portfolio and must enforce a uniform security policy that aligns with NIST guidelines, yet the internal team lacks deep API‑governance experience. Which option should the team choose?

**Correct answer(s):**

- **C:** Adopt Mule Soft's API Governance framework, using Anypoint Exchange, API Manager, and the out‑of‑the‑box NIST‑aligned policy templates with automated enforcement and governance dashboards.

**Why no documentation link:** Correct answer relies on "out-of-the-box NIST-aligned policy templates" in API Governance. No MuleSoft documentation page describes NIST-aligned policy templates or governance dashboards mapped to NIST controls.

---

## q-113 — Governing web APIs on Anypoint Platform

**Prompt:** A healthcare network is integrating a patient portal with an electronic medical record system and must satisfy audit‑logging requirements and data‑at‑rest encryption, all while staying within a $200,000 project cap and a 3‑month deadline. Which TWO actions should be taken? (Select all correct answers)

**Correct answer(s):**

- **B:** Deploy the integration to Cloud Hub, leveraging its built‑in data‑at‑rest encryption and managed infrastructure.
- **E:** Enable Anypoint Monitoring’s audit‑logging feature and configure encrypted property files using Secure Configuration Properties.

**Why no documentation link:** Correct answers rely on "CloudHub built-in data-at-rest encryption". MuleSoft documentation does not state that CloudHub provides built-in data-at-rest encryption for application data.

---

## q-114 — Architecting and deploying API implementations

**Prompt:** A large financial institution is migrating legacy SOAP services to an API‑led architecture, must maintain a 99.9% SLA, comply with PCI‑DSS, and minimize downtime during the transition, with a strict 4‑month migration window and a fixed budget. Which THREE options meet the requirements? (Select all correct answers)

**Correct answer(s):**

- **A:** Implement System APIs as lightweight SOAP‑to‑REST wrappers deployed in a highly available cluster on Cloud Hub, using blue‑green deployment for zero‑downtime cutover, and apply PCI‑DSS policies (encryption, tokenization) via API Manager.
- **C:** Use a staged migration: first expose existing SOAP services through an API gateway (API‑led layer) while keeping the legacy back‑ends, then incrementally refactor each service into a System API with automated testing and CI/CD, using canary releases to meet SLA and budget.
- **E:** Leverage Anypoint Virtual Private Cloud (VPC) with dedicated load balancers and enable end‑to‑end TLS, and use rolling deployments across multiple nodes to achieve high availability and meet PCI‑DSS encryption requirements.

**Why no documentation link:** Correct answer relies on "PCI-DSS policies (encryption, tokenization) via API Manager". MuleSoft documentation does not describe pre-built PCI-DSS policy templates for API Manager.

---

## q-134 — Architecting and deploying API implementations

**Prompt:** A retail chain is migrating from a legacy ESB to Anypoint Platform under a tight deadline, needs to reuse existing integration logic, and must minimize downtime. Which THREE options meet the requirements? (Select all correct answers)

**Correct answer(s):**

- **A:** Deploy the converted Mule applications on Runtime Fabric in a hybrid model while keeping the legacy ESB running, then switch traffic using a load balancer (blue‑green deployment).
- **B:** Use Mule Soft's Migration Assistant to automatically convert Mule 3 projects to Mule 4.
- **D:** Use API‑led connectivity by wrapping existing services in API specifications and managing versions with API Manager, allowing incremental cut‑over.

**Why no documentation link:** Correct answer relies on the "MuleSoft Migration Assistant" for automated Mule 3 to Mule 4 conversion. This tool is not documented on docs.mulesoft.com.

---

## q-141 — Governing web APIs on Anypoint Platform

**Prompt:** A manufacturing plant wants to secure MQTT telemetry from its Io T sensors to the Mule runtime, must adhere to IEC 62443, and the network can only support minimal encryption overhead. What is the MOST appropriate action?

**Correct answer(s):**

- **D:** Use MQTT over TLS with pre‑shared key (PSK) cipher suites to minimize handshake overhead.

**Why no documentation link:** Correct answer relies on "MQTT over TLS with pre-shared key (PSK) cipher suites". MuleSoft documentation states the MQTT connector supports TLS, but does not document PSK cipher suite support.

---

## q-142 — Designing and sharing APIs

**Prompt:** A fintech startup is building a hypermedia‑driven loan‑application API to enable clients to navigate state transitions, must keep payload size under 5 KB, has a one‑month launch window, and the developers are proficient in RAML but not in HAL. Which approach BEST meets the requirements?

**Correct answer(s):**

- **A:** Design the API in RAML and use Mule Soft’s Hypermedia (HAL) module to automatically embed state‑transition links in responses, customizing link inclusion to stay under 5 KB.

**Why no documentation link:** Correct answer relies on a "MuleSoft Hypermedia (HAL) module" for automatic HAL link generation. No MuleSoft documentation page describes a Hypermedia/HAL module.

---

## q-150 — Governing web APIs on Anypoint Platform

**Prompt:** A government agency is publishing a confidential document‑exchange API on Anypoint Platform. Compliance (FIPS 140‑2) requires encryption at rest, and the API must be accessible only from approved IP ranges while also supporting short‑lived access tokens for external contractors. Which TWO actions should be taken? (Select all correct answers)

**Correct answer(s):**

- **B:** Enable FIPS‑140‑2 validated encryption at rest by using Anypoint Secrets Manager backed by a hardware security module.
- **E:** Apply an IP whitelist (Client‑IP Restriction) policy in API Manager to limit requests to approved CIDR ranges.

**Why no documentation link:** Correct answer relies on "Anypoint Secrets Manager backed by a hardware security module (HSM)". No MuleSoft documentation page documents Secrets Manager backed by an HSM.

---

## q-156 — Monitoring and analyzing application networks

**Prompt:** A federal government agency is required to store all monitoring data on-premises for security clearance reasons, yet wants to leverage Anypoint Monitoring’s dashboards. Which option should the team choose?

**Correct answer(s):**

- **A:** Deploy Anypoint Monitoring Private Cloud Edition (PCE) on‑premises and connect it to the Saa S dashboards.

**Why no documentation link:** Correct answer relies on "Anypoint Monitoring Private Cloud Edition (PCE)". MuleSoft documentation covers the Anypoint Monitoring agent for hybrid/on-premises hosts, but not a Private Cloud Edition that keeps monitoring data on-premises while using the SaaS dashboards.

---

## q-159 — Monitoring and analyzing application networks

**Prompt:** A large retail enterprise is rolling out API analytics across its e‑commerce platform and must balance detailed usage insights with a strict $100,000 analytics budget, while also needing custom dashboards for business stakeholders. Which TWO actions should be taken? (Select all correct answers)

**Correct answer(s):**

- **B:** Enable analytics only for high‑traffic or revenue‑critical APIs and use the API Manager’s usage sampling feature to limit data volume.
- **E:** Export raw analytics data via the Metrics API to an external BI tool (e. g., Power BI) where custom stakeholder dashboards can be built at no extra Anypoint cost.

**Why no documentation link:** Correct answer relies on an "API Manager usage sampling feature". No MuleSoft documentation page describes a usage sampling feature for Mule API Analytics.

---

## q-160 — Monitoring and analyzing application networks

**Prompt:** A healthcare integration team must configure logging to retain audit-level records, enable distributed tracing for end-to-end visibility, and set alert thresholds for any deviation from compliance metrics, all under a tight regulatory timeline. Which THREE options meet the requirements? (Select all correct answers)

**Correct answer(s):**

- **B:** Enable audit‑level logging via Log4j2 and configure a 180‑day retention policy in Anypoint Monitoring.
- **C:** Turn on distributed tracing by setting the MULE_TRACING_ENABLED property and exporting spans to an Open Telemetry collector.
- **D:** Create a custom Anypoint Monitoring alert policy that fires when any compliance metric deviates beyond a defined threshold.

**Why no documentation link:** Correct answer relies on setting the "MULE_TRACING_ENABLED" property. MuleSoft documentation describes OpenTelemetry tracing configuration using different properties (for example mule.openTelemetry.tracer.exporter.enabled); MULE_TRACING_ENABLED is not documented.

---

## q-163 — Monitoring and analyzing application networks

**Prompt:** A regional healthcare provider operates a patient‑record API that must retain audit logs for seven years to satisfy HIPAA. The operations team has limited experience with Anypoint Monitoring and wants the simplest way to generate immutable audit trails without custom code. What is the MOST appropriate action?

**Correct answer(s):**

- **D:** Enable the built‑in Anypoint Platform Audit Log and set its retention to seven years.

**Why no documentation link:** Correct answer requires setting audit log retention to seven years. MuleSoft documentation states the audit log retention period is configurable between 30 and 2190 days (six years maximum), so a seven-year retention cannot be configured as described.

---

## q-166 — Monitoring and analyzing application networks

**Prompt:** A federal agency is deploying a citizen-service portal on Anypoint Platform and must ensure that all API usage metrics are encrypted at rest and only visible to cleared personnel. The security team prefers native platform capabilities over third-party tools. Which option should the team choose?

**Correct answer(s):**

- **E:** Use Anypoint Monitoring (API Analytics) which is encrypted at rest by default and restrict access with role-based permissions.

**Why no documentation link:** Correct answer relies on API usage metrics in Anypoint Monitoring being "encrypted at rest by default". MuleSoft documentation does not state that Anypoint Monitoring analytics data is encrypted at rest by default.

---

## q-169 — Monitoring and analyzing application networks

**Prompt:** A hospital network runs dozens of APIs for patient data exchange and wants to proactively detect abnormal usage patterns while meeting GDPR data-retention rules. They plan to use Anypoint Monitoring, custom alerts, and external SIEM integration. Which THREE options meet the requirements?

**Correct answer(s):**

- **B:** Configure Anypoint Monitoring's built-in anomaly detection policy, set the monitoring data retention to 30 days, and forward alerts to the external SIEM via webhook.
- **D:** Create custom alerts in API Manager for rate-limit breaches, route the alert events to a Kafka topic that the SIEM consumes, and enable Anypoint Monitoring's data-purge schedule to delete logs older than 30 days.
- **F:** Schedule a nightly export of Anypoint Monitoring logs to an encrypted GDPR-compliant S3 bucket with a lifecycle rule that deletes objects after 30 days, and configure a webhook to push any anomaly alerts to the SIEM.

**Why no documentation link:** Correct answer relies on a "built-in anomaly detection policy" in Anypoint Monitoring. No MuleSoft documentation page describes a built-in anomaly detection policy for API monitoring.

---

## q-170 — Meeting API quality goals

**Prompt:** A fashion retailer's mobile app backend is generating frequent validation errors that are not captured in standard logs, and the Dev Ops team needs to reduce noise in the logging system while still capturing critical error details for SLA reporting. Which TWO actions should be taken?

**Correct answer(s):**

- **A:** Set the global logger level to INFO and add a custom log filter that only writes messages containing the marker "VALIDATION_ERROR" to a separate file.
- **B:** Create a global error handling flow that catches validation errors, logs them at ERROR level with a concise message, and routes the error details to an SLA-monitoring endpoint via an HTTP request.

**Why no documentation link:** Correct answer relies on a custom Log4j2 log filter that writes only messages containing a specific marker (for example "VALIDATION_ERROR"). MuleSoft documentation does not describe marker-based custom log filters.

---

## q-171 — Governing web APIs on Anypoint Platform

**Prompt:** A mid-sized financial services firm is launching a new mobile banking app and needs to expose customer account APIs to third-party fintech partners within a tight three-month deadline, while staying under a $150,000 budget and meeting PCI-DSS requirements. Which option should the team choose?

**Correct answer(s):**

- **E:** Implement a hybrid solution: expose the APIs through Anypoint Platform's API Manager on Cloud Hub, route sensitive traffic through a dedicated PCI-DSS-certified VPC, and use Mule Soft's pre-built PCI-DSS compliance templates to accelerate development.

**Why no documentation link:** Correct answer relies on a "dedicated PCI-DSS-certified VPC" and "pre-built PCI-DSS compliance templates". MuleSoft documentation does not describe PCI-DSS-certified VPCs or pre-built PCI-DSS compliance templates.

---

## q-175 — Governing web APIs on Anypoint Platform

**Prompt:** A federal government agency is publishing citizen services APIs that must comply with FIPS-140 encryption standards and undergo rigorous access-control reviews before release. Which option should the team choose?

**Correct answer(s):**

- **D:** Publish the APIs through Anypoint API Manager, configure TLS with FIPS-140-validated cipher suites, and enforce an access-review approval workflow in Anypoint Access Management.

**Why no documentation link:** Correct answer relies on an "access-review approval workflow" in Anypoint Access Management. MuleSoft documentation describes roles and permissions, but not a formal access-review approval workflow.

---

## q-219 — Deployment Options - Runtime Fabric replica load balancing

**Prompt:** A company deploys an API implementation to Runtime Fabric (RTF) with 3 replicas. The application exposes an HTTP endpoint. How does the RTF architecture distribute incoming HTTP requests among these 3 replicas?

**Correct answer(s):**

- **B:** The internal RTF Ingress controller uses round-robin or least-connections routing to distribute traffic across the pods.

**Why no documentation link:** The MuleSoft Runtime Fabric documentation describes the ingress controller, ingress resource templates, and the fact that multiple replicas are spread across nodes and availability zones, but it does **not** state the specific routing algorithm used to distribute requests across replicas. The claim in the correct answer — "round-robin or least-connections routing" — is a property of the underlying Kubernetes ingress controller / service (kube-proxy), not something the MuleSoft documentation asserts. Rather than cite a page whose content does not actually confirm the answer's specific wording, the `references` field was left empty for manual review.

**Candidate pages reviewed (routing algorithm not stated):**

- `https://docs.mulesoft.com/runtime-fabric/latest/custom-ingress-configuration` — describes how ingress resource templates work and how an IT admin configures the ingress controller, but not the distribution algorithm.
- `https://docs.mulesoft.com/runtime-fabric/latest/rtf-ha-dr` — states that RTF "uses topology spread constraints to distribute Mule application replicas evenly" across nodes/zones, but says nothing about per-request routing across those replicas.
- `https://docs.mulesoft.com/runtime-fabric/latest/configure-ingress` and `configure-ingress-endpoints` — cover exposing endpoints, not load-balancing behavior.

**Note for the reviewer:** If the question wording is relaxed (for example, to "the RTF ingress controller load-balances requests across the replicas" without naming a specific algorithm), the RTF HA/DR page above would support it. As written, the specific algorithm cannot be confirmed in the official MuleSoft documentation.
