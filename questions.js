window.MCPA_QUESTIONS = [
  {
    "id": "q-001",
    "number": 1,
    "title": "Application Network Basics - Which API layer in MuleSofts APIled connectivity",
    "domain": "Application Network Basics",
    "topics": [
      "Three Layer Architecture",
      "Api Led Connectivity"
    ],
    "prompt": "Which API layer in MuleSoft's API-led connectivity model directly unlocks data from a system of record like SAP or Workday?",
    "options": [
      {
        "letter": "A",
        "text": "Experience API"
      },
      {
        "letter": "B",
        "text": "Process API"
      },
      {
        "letter": "C",
        "text": "System API"
      },
      {
        "letter": "D",
        "text": "Edge API"
      }
    ],
    "correctAnswer": "C",
    "explanation": "System APIs sit at the bottom of the three-layer model and unlock data from underlying systems of record. They isolate downstream consumers from backend changes by exposing stable, reusable interfaces over SAP, Workday, Salesforce, databases, or legacy systems.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Experience APIs sit at the top and tailor data for specific channels (mobile, web, partner)."
      },
      "B": {
        "type": "Incorrect",
        "text": "Process APIs orchestrate and combine data from multiple System APIs for business processes."
      },
      "C": {
        "type": "Correct",
        "text": "System API"
      },
      "D": {
        "type": "Incorrect",
        "text": "'Edge API' is not part of the API-led connectivity model; the three layers are Experience, Process, and System."
      }
    },
    "references": {
      "primary": {
        "title": "API-Led Connectivity — System APIs Unlocking Core Systems of Record",
        "url": "https://docs.mulesoft.com/general/api-led-develop#step-3-1-create-the-implementation-project"
      },
      "architectureGuide": {
        "title": "Martin Fowler — Bounded Context & System Architecture",
        "url": "https://martinfowler.com/bliki/BoundedContext.html"
      },
      "arc720": {
        "lesson": "Lesson 5 — API identification, publication, and reuse",
        "anchor": "ARC720-Course-Content.md#5-api-identification-publication-and-reuse"
      }
    }
  },
  {
    "id": "q-002",
    "number": 2,
    "title": "Application Network Basics - What is the primary purpose of a",
    "domain": "Application Network Basics",
    "topics": [
      "C4E"
    ],
    "prompt": "What is the primary purpose of a Center for Enablement (C4E) in a MuleSoft application network?",
    "options": [
      {
        "letter": "A",
        "text": "Build all integrations centrally for the enterprise"
      },
      {
        "letter": "B",
        "text": "Drive reuse, self-service, and asset consumption across line-of-business teams"
      },
      {
        "letter": "C",
        "text": "Operate the Anypoint Platform infrastructure"
      },
      {
        "letter": "D",
        "text": "Approve every API call made in production"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A C4E is a cross-functional team that drives consumption of reusable assets, enables LoB delivery teams to build their own integrations, and measures success through asset reuse and adoption. The C4E does not centralize all build work; that would recreate the IT bottleneck the application network is designed to remove.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Centralized build is the anti-pattern a C4E exists to break."
      },
      "B": {
        "type": "Correct",
        "text": "Drive reuse, self-service, and asset consumption across line-of-business teams"
      },
      "C": {
        "type": "Incorrect",
        "text": "Operating infrastructure is a platform/operations function, not a C4E function."
      },
      "D": {
        "type": "Incorrect",
        "text": "Per-call approval is not a C4E responsibility; access is governed via API contracts and policies."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce & MuleSoft Guide — Center for Enablement (C4E) Driving Self-Service & Reuse",
        "url": "https://www.salesforce.com/blog/what-is-a-center-for-enablement/"
      },
      "architectureGuide": {
        "title": "MuleSoft Catalyst Framework & Business Group Governance",
        "url": "https://docs.mulesoft.com/access-management/business-groups#business-group-hierarchy"
      },
      "arc720": {
        "lesson": "Lesson 4 — Organizational and platform foundations",
        "anchor": "ARC720-Course-Content.md#4-organizational-and-platform-foundations"
      }
    }
  },
  {
    "id": "q-003",
    "number": 3,
    "title": "Designing Sharing Apis - Which Anypoint Platform component is used to",
    "domain": "Designing Sharing Apis",
    "topics": [
      "Raml Oas Design"
    ],
    "prompt": "Which Anypoint Platform component is used to design and document API specifications using RAML or OAS?",
    "options": [
      {
        "letter": "A",
        "text": "Runtime Manager"
      },
      {
        "letter": "B",
        "text": "API Manager"
      },
      {
        "letter": "C",
        "text": "Design Center"
      },
      {
        "letter": "D",
        "text": "Anypoint MQ"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Design Center is the web-based tool for designing API specifications (RAML or OAS) and prototyping/mocking APIs before implementation. Runtime Manager deploys/manages running apps; API Manager applies governance policies; Anypoint MQ is messaging.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Runtime Manager handles deployment, scaling, and operational management of running Mule apps."
      },
      "B": {
        "type": "Incorrect",
        "text": "API Manager governs APIs after they exist (policies, contracts, SLA tiers)."
      },
      "C": {
        "type": "Correct",
        "text": "Design Center"
      },
      "D": {
        "type": "Incorrect",
        "text": "Anypoint MQ is a managed message broker, not a design tool."
      }
    },
    "references": {
      "primary": {
        "title": "Design Center — Designing and Documenting API Specifications (RAML & OAS)",
        "url": "https://docs.mulesoft.com/design-center/#prerequisites-for-using-design-center"
      },
      "architectureGuide": {
        "title": "APIkit Overview — Specification-Driven Implementation",
        "url": "https://docs.mulesoft.com/apikit/latest/#features"
      },
      "arc720": {
        "lesson": "Lesson 7 — Effective APIs",
        "anchor": "ARC720-Course-Content.md#7-effective-apis"
      }
    }
  },
  {
    "id": "q-004",
    "number": 4,
    "title": "Designing Sharing Apis - Which Anypoint Platform component is the marketplace",
    "domain": "Designing Sharing Apis",
    "topics": [
      "Exchange Asset Management"
    ],
    "prompt": "Which Anypoint Platform component is the marketplace for discovering, sharing, and reusing APIs, fragments, connectors, and other assets?",
    "options": [
      {
        "letter": "A",
        "text": "Exchange"
      },
      {
        "letter": "B",
        "text": "Visualizer"
      },
      {
        "letter": "C",
        "text": "Design Center"
      },
      {
        "letter": "D",
        "text": "API Manager"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Exchange is the asset catalog where API specs, fragments, connectors, examples, and templates are published for discovery and reuse. It is the publication target from Design Center and the discovery surface for other developers.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Exchange"
      },
      "B": {
        "type": "Incorrect",
        "text": "Visualizer renders the live application network graph from API Manager and Runtime Manager data."
      },
      "C": {
        "type": "Incorrect",
        "text": "Design Center is for authoring specs, not cataloging them."
      },
      "D": {
        "type": "Incorrect",
        "text": "API Manager governs runtime behavior of managed APIs."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Exchange — Marketplace for Discovering, Sharing, and Reusing Assets",
        "url": "https://docs.mulesoft.com/exchange/#view-assets-by-business-group"
      },
      "architectureGuide": {
        "title": "Publishing API Specifications & Fragments to Exchange",
        "url": "https://docs.mulesoft.com/access-management/business-groups#business-group-hierarchy"
      },
      "arc720": {
        "lesson": "Lesson 5 — API identification, publication, and reuse",
        "anchor": "ARC720-Course-Content.md#5-api-identification-publication-and-reuse"
      }
    }
  },
  {
    "id": "q-005",
    "number": 5,
    "title": "Api Policies - What is the recommended way to expose",
    "domain": "Api Policies",
    "topics": [
      "Api Contracts Sla Tiers",
      "Rate Limiting Throttling"
    ],
    "prompt": "What is the recommended way to expose APIs to internal consumers and external partners with different SLAs and access requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy duplicate apps for each consumer"
      },
      {
        "letter": "B",
        "text": "Use SLA tiers and API contracts in API Manager"
      },
      {
        "letter": "C",
        "text": "Hardcode allowed clients in flows"
      },
      {
        "letter": "D",
        "text": "Block external partners entirely"
      }
    ],
    "correctAnswer": "B",
    "explanation": "API Manager supports SLA tiers (Bronze, Silver, Gold, etc.) that define rate limits per consumer. API contracts bind a client application to a tier, allowing differentiated access without duplicating implementations. Hardcoding clients is brittle and unmanageable.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Duplicating apps wastes resources and contradicts API-led reuse."
      },
      "B": {
        "type": "Correct",
        "text": "Use SLA tiers and API contracts in API Manager"
      },
      "C": {
        "type": "Incorrect",
        "text": "Hardcoded allow-lists bypass governance and break on consumer changes."
      },
      "D": {
        "type": "Incorrect",
        "text": "Blocking external partners ignores legitimate business needs that contracts and tiers solve."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Defining SLA Tiers and Configuring Tiered Consumer Contracts",
        "url": "https://docs.mulesoft.com/api-manager/2.x/defining-sla-tiers#defining-a-tier"
      },
      "architectureGuide": {
        "title": "Client ID Enforcement & Managing Application Contracts",
        "url": "https://docs.mulesoft.com/api-manager/2.x/client-id-based-policies#how-this-policy-works"
      },
      "arc720": {
        "lesson": "Lesson 6 — NFRs at the API-invocation level",
        "anchor": "ARC720-Course-Content.md#6-nfrs-at-the-api-invocation-level"
      }
    }
  },
  {
    "id": "q-006",
    "number": 6,
    "title": "Org Platform Foundations - In Anypoint Platform what is the purpose",
    "domain": "Org Platform Foundations",
    "topics": [
      "Business Groups Environments"
    ],
    "prompt": "In Anypoint Platform, what is the purpose of organizing assets into business groups?",
    "options": [
      {
        "letter": "A",
        "text": "To partition the platform by Mule runtime version"
      },
      {
        "letter": "B",
        "text": "To provide a hierarchy with isolated user, environment, and asset boundaries"
      },
      {
        "letter": "C",
        "text": "To replace API policies"
      },
      {
        "letter": "D",
        "text": "To increase vCore capacity automatically"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Business groups create a hierarchy that isolates users, environments, entitlements (vCores, static IPs), and assets. They mirror an organization's structure (e.g., by line of business or subsidiary) and let the master org delegate control without exposing other groups' resources.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Runtime versions are an attribute of deployments, not a business-group property."
      },
      "B": {
        "type": "Correct",
        "text": "To provide a hierarchy with isolated user, environment, and asset boundaries"
      },
      "C": {
        "type": "Incorrect",
        "text": "Policies are applied in API Manager; business groups are an organizational construct."
      },
      "D": {
        "type": "Incorrect",
        "text": "vCore entitlements must be allocated explicitly to a business group; they do not auto-scale."
      }
    },
    "references": {
      "primary": {
        "title": "Access Management — Business Group Hierarchies, Environments, and Asset Boundaries",
        "url": "https://docs.mulesoft.com/access-management/business-groups#business-group-hierarchy"
      },
      "architectureGuide": {
        "title": "Managing Environments for Multi-Tier Delivery in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/environments#types-of-environments"
      },
      "arc720": {
        "lesson": "Lesson 4 — Organizational and platform foundations",
        "anchor": "ARC720-Course-Content.md#4-organizational-and-platform-foundations"
      }
    }
  },
  {
    "id": "q-007",
    "number": 7,
    "title": "Deployment Options - Which Anypoint deployment option is a fully",
    "domain": "Deployment Options",
    "topics": [
      "Cloudhub Deployment"
    ],
    "prompt": "Which Anypoint deployment option is a fully managed, multi-tenant cloud runtime hosted by MuleSoft on AWS?",
    "options": [
      {
        "letter": "A",
        "text": "CloudHub"
      },
      {
        "letter": "B",
        "text": "Runtime Fabric (RTF)"
      },
      {
        "letter": "C",
        "text": "Hybrid (customer-hosted Mule runtime)"
      },
      {
        "letter": "D",
        "text": "Anypoint Service Mesh"
      }
    ],
    "correctAnswer": "A",
    "explanation": "CloudHub is MuleSoft's fully managed iPaaS hosted on AWS. MuleSoft operates the Mule runtimes on multi-tenant workers; customers pick worker size and count. RTF is customer-managed Kubernetes; Hybrid uses customer servers; Service Mesh adds policies to non-Mule services on Istio.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "CloudHub"
      },
      "B": {
        "type": "Incorrect",
        "text": "Runtime Fabric runs on customer-managed Kubernetes/OpenShift on customer infrastructure."
      },
      "C": {
        "type": "Incorrect",
        "text": "Hybrid deployment runs Mule runtime on customer servers managed via Runtime Manager."
      },
      "D": {
        "type": "Incorrect",
        "text": "Anypoint Service Mesh extends API governance to services running in Istio service meshes."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture — Multi-Tenant Cloud Architecture & Worker Isolation",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#workers-and-multitenancy"
      },
      "architectureGuide": {
        "title": "CloudHub Workers, Sizing, and Infrastructure Isolation",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#cloudhub-workers"
      },
      "arc720": {
        "lesson": "Lesson 8 — Effective API implementations",
        "anchor": "ARC720-Course-Content.md#8-effective-api-implementations"
      }
    }
  },
  {
    "id": "q-008",
    "number": 8,
    "title": "Non Functional Requirements - What is the unit of compute capacity",
    "domain": "Non Functional Requirements",
    "topics": [
      "Vcores Capacity",
      "Worker Sizing"
    ],
    "prompt": "What is the unit of compute capacity used to size Mule applications on CloudHub?",
    "options": [
      {
        "letter": "A",
        "text": "GB of RAM"
      },
      {
        "letter": "B",
        "text": "Number of cores"
      },
      {
        "letter": "C",
        "text": "vCores"
      },
      {
        "letter": "D",
        "text": "Worker threads"
      }
    ],
    "correctAnswer": "C",
    "explanation": "CloudHub measures capacity in vCores. Each worker is allocated a vCore size (0.1, 0.2, 0.5, 1, 2, 4, 8 etc.) that maps to memory and compute. Customers buy vCore entitlements per environment via business groups.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "RAM is a property derived from vCore size, not the billing/allocation unit."
      },
      "B": {
        "type": "Incorrect",
        "text": "Physical cores are not exposed; vCores are the abstract capacity unit."
      },
      "C": {
        "type": "Correct",
        "text": "vCores"
      },
      "D": {
        "type": "Incorrect",
        "text": "Worker threads are an internal runtime concept and not the sizing unit."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture — Worker Compute Capacity & vCore Sizing",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#cloudhub-workers"
      },
      "architectureGuide": {
        "title": "CloudHub Fabric & Worker Scale-Out Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric#worker-scale-out"
      },
      "arc720": {
        "lesson": "Lesson 10 — Production",
        "anchor": "ARC720-Course-Content.md#10-production"
      }
    }
  },
  {
    "id": "q-009",
    "number": 9,
    "title": "Deploying Managing Apis - Which feature in API Manager pairs a",
    "domain": "Deploying Managing Apis",
    "topics": [
      "Auto Discovery"
    ],
    "prompt": "Which feature in API Manager pairs a deployed Mule app with its managed API automatically using the API ID?",
    "options": [
      {
        "letter": "A",
        "text": "Auto-discovery"
      },
      {
        "letter": "B",
        "text": "Mule Maven Plugin"
      },
      {
        "letter": "C",
        "text": "Anypoint Visualizer"
      },
      {
        "letter": "D",
        "text": "Runtime Manager scheduling"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Auto-discovery (via the api-gateway:autodiscovery element or property) pairs a running Mule app with an API instance in API Manager using the API ID. Once paired, the app downloads policies and enforces them locally.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Auto-discovery"
      },
      "B": {
        "type": "Incorrect",
        "text": "The Mule Maven Plugin packages and deploys apps; it does not pair them with API Manager records."
      },
      "C": {
        "type": "Incorrect",
        "text": "Visualizer reads pairing data to draw graphs; it does not create the pairing."
      },
      "D": {
        "type": "Incorrect",
        "text": "Runtime Manager scheduling triggers flows; it is unrelated to API-Manager pairing."
      }
    },
    "references": {
      "primary": {
        "title": "API Autodiscovery — Prerequisites & Pairing Mule Application with API ID",
        "url": "https://docs.mulesoft.com/api-manager/2.x/api-auto-discovery-new-concept#prerequisites"
      },
      "architectureGuide": {
        "title": "Client ID Enforcement & Policy Execution in Mule 4",
        "url": "https://docs.mulesoft.com/api-manager/2.x/client-id-based-policies#how-this-policy-works"
      },
      "arc720": {
        "lesson": "Lesson 8 — Effective API implementations",
        "anchor": "ARC720-Course-Content.md#8-effective-api-implementations"
      }
    }
  },
  {
    "id": "q-010",
    "number": 10,
    "title": "Api Policies - Which Anypoint policy enforces mutual TLS for",
    "domain": "Api Policies",
    "topics": [
      "Mtls Policy"
    ],
    "prompt": "Which Anypoint policy enforces mutual TLS for client-to-API authentication?",
    "options": [
      {
        "letter": "A",
        "text": "JWT validation"
      },
      {
        "letter": "B",
        "text": "OAuth 2.0 token enforcement"
      },
      {
        "letter": "C",
        "text": "Client ID enforcement"
      },
      {
        "letter": "D",
        "text": "Mutual TLS"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The Mutual TLS (mTLS) policy requires the client to present a valid X.509 certificate trusted by the configured truststore. JWT, OAuth 2.0 token enforcement, and Client ID policies all operate at the application layer rather than at the TLS handshake.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "JWT validation checks a bearer token signature and claims at the application layer."
      },
      "B": {
        "type": "Incorrect",
        "text": "OAuth 2.0 token enforcement validates an access token, typically from an external identity provider."
      },
      "C": {
        "type": "Incorrect",
        "text": "Client ID enforcement checks app-level credentials (client_id/client_secret), not certificates."
      },
      "D": {
        "type": "Correct",
        "text": "Mutual TLS"
      }
    },
    "references": {
      "primary": {
        "title": "IP Allowlist Policy & Mutual TLS (mTLS) Inbound Security",
        "url": "https://docs.mulesoft.com/api-manager/2.x/ip-allowlist#how-this-policy-works"
      },
      "architectureGuide": {
        "title": "CloudHub Dedicated Load Balancer (DLB) SSL/TLS & Mutual Authentication",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-dedicated-load-balancer#create-and-configure-a-dedicated-load-balancer"
      },
      "arc720": {
        "lesson": "Lesson 6 — NFRs at the API-invocation level",
        "anchor": "ARC720-Course-Content.md#6-nfrs-at-the-api-invocation-level"
      }
    }
  },
  {
    "id": "q-011",
    "number": 11,
    "title": "Designing Sharing Apis - Which approach is recommended for sharing common",
    "domain": "Designing Sharing Apis",
    "topics": [
      "Raml Oas Design",
      "Exchange Asset Management"
    ],
    "prompt": "Which approach is recommended for sharing common API design elements like security schemes, data types, and traits across many APIs?",
    "options": [
      {
        "letter": "A",
        "text": "Copy the snippets between RAML files"
      },
      {
        "letter": "B",
        "text": "Publish reusable RAML fragments to Exchange and reference them"
      },
      {
        "letter": "C",
        "text": "Embed them in the Mule application code"
      },
      {
        "letter": "D",
        "text": "Regenerate them per API at deployment"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Reusable RAML fragments (data types, security schemes, traits, libraries) should be published to Exchange and referenced by APIs. This guarantees consistency, allows versioning, and avoids drift between APIs.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Copy/paste guarantees drift and breaks reuse."
      },
      "B": {
        "type": "Correct",
        "text": "Publish reusable RAML fragments to Exchange and reference them"
      },
      "C": {
        "type": "Incorrect",
        "text": "API design lives in the spec, not in implementation code."
      },
      "D": {
        "type": "Incorrect",
        "text": "Regeneration creates inconsistency and undermines governance."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Exchange — Publishing Reusable RAML Fragments, Types, and Libraries",
        "url": "https://docs.mulesoft.com/exchange/#view-assets-by-business-group"
      },
      "architectureGuide": {
        "title": "Design Center — Reusable API Fragments and Libraries",
        "url": "https://docs.mulesoft.com/design-center/#prerequisites-for-using-design-center"
      },
      "arc720": {
        "lesson": "Lesson 5 — API identification, publication, and reuse",
        "anchor": "ARC720-Course-Content.md#5-api-identification-publication-and-reuse"
      }
    }
  },
  {
    "id": "q-012",
    "number": 12,
    "title": "Designing Sharing Apis - What is the recommended order of major",
    "domain": "Designing Sharing Apis",
    "topics": [
      "Api Lifecycle"
    ],
    "prompt": "What is the recommended order of major activities in the API lifecycle described by MuleSoft?",
    "options": [
      {
        "letter": "A",
        "text": "Implement, Design, Manage, Retire"
      },
      {
        "letter": "B",
        "text": "Design, Implement, Deploy, Manage, Retire"
      },
      {
        "letter": "C",
        "text": "Deploy, Design, Implement, Manage, Retire"
      },
      {
        "letter": "D",
        "text": "Manage, Design, Implement, Deploy"
      }
    ],
    "correctAnswer": "B",
    "explanation": "MuleSoft promotes a design-first lifecycle: Design (RAML/OAS in Design Center, mock, validate) â Implement (Anypoint Studio) â Deploy (CloudHub/RTF/Hybrid) â Manage (API Manager governance) â Retire. Design first decouples consumers from implementation timing.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Implementing before designing forces consumers to wait and breaks design-first."
      },
      "B": {
        "type": "Correct",
        "text": "Design, Implement, Deploy, Manage, Retire"
      },
      "C": {
        "type": "Incorrect",
        "text": "Deploying before designing or implementing is impossible."
      },
      "D": {
        "type": "Incorrect",
        "text": "Management governs an API after it exists; it cannot be the first step."
      }
    },
    "references": {
      "primary": {
        "title": "API-Led Lifecycle — Design-First Lifecycle Stages (Design, Implement, Deploy, Manage, Retire)",
        "url": "https://docs.mulesoft.com/general/api-led-develop#what-you-learned"
      },
      "architectureGuide": {
        "title": "Martin Fowler — Evolutionary Architecture and API Lifecycle",
        "url": "https://martinfowler.com/bliki/BoundedContext.html"
      },
      "arc720": {
        "lesson": "Lesson 10 — Production",
        "anchor": "ARC720-Course-Content.md#10-production"
      }
    }
  },
  {
    "id": "q-013",
    "number": 13,
    "title": "Monitoring Analyzing - Which Anypoint Platform feature provides a realtime",
    "domain": "Monitoring Analyzing",
    "topics": [
      "Visualizer"
    ],
    "prompt": "Which Anypoint Platform feature provides a real-time visual graph of the application network showing API dependencies and traffic?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Monitoring"
      },
      {
        "letter": "B",
        "text": "Anypoint Visualizer"
      },
      {
        "letter": "C",
        "text": "Runtime Manager"
      },
      {
        "letter": "D",
        "text": "Exchange"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Anypoint Visualizer renders a live diagram of APIs, applications, and their dependencies based on data from API Manager and Runtime Manager. Anypoint Monitoring covers metrics, dashboards, and alerts; Runtime Manager handles app operations; Exchange is the asset catalog.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Anypoint Monitoring focuses on time-series metrics, dashboards, and alerts, not network graphs."
      },
      "B": {
        "type": "Correct",
        "text": "Anypoint Visualizer"
      },
      "C": {
        "type": "Incorrect",
        "text": "Runtime Manager shows individual app health, not the dependency graph."
      },
      "D": {
        "type": "Incorrect",
        "text": "Exchange catalogs design-time assets, not runtime topology."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Visualizer — Real-Time Application Network Topology & Dependency Graph",
        "url": "https://docs.mulesoft.com/visualizer/#visualizer-control-plane"
      },
      "architectureGuide": {
        "title": "Anypoint Monitoring Dashboards & Telemetry Integration",
        "url": "https://docs.mulesoft.com/monitoring/app-dashboards#overview-charts"
      },
      "arc720": {
        "lesson": "Lesson 11 — Application network behavior",
        "anchor": "ARC720-Course-Content.md#11-application-network-behavior"
      }
    }
  },
  {
    "id": "q-014",
    "number": 14,
    "title": "Non Functional Requirements - Which Anypoint capability provides reliable asynchronous queuebased",
    "domain": "Non Functional Requirements",
    "topics": [
      "Anypoint Mq",
      "Reliability Patterns"
    ],
    "prompt": "Which Anypoint capability provides reliable, asynchronous, queue-based messaging between Mule applications without managing your own broker?",
    "options": [
      {
        "letter": "A",
        "text": "Object Store v2"
      },
      {
        "letter": "B",
        "text": "Anypoint MQ"
      },
      {
        "letter": "C",
        "text": "VM connector across regions"
      },
      {
        "letter": "D",
        "text": "Runtime Fabric service mesh"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Anypoint MQ is a managed cloud messaging service offering queues, FIFO queues, and exchanges (pub/sub) without operating a broker. Object Store v2 is key/value storage; VM is in-memory and per-app; Service Mesh is for governing non-Mule services.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Object Store v2 stores key/value data, not message queues."
      },
      "B": {
        "type": "Correct",
        "text": "Anypoint MQ"
      },
      "C": {
        "type": "Incorrect",
        "text": "VM queues are local to a single Mule app and not durable across regions."
      },
      "D": {
        "type": "Incorrect",
        "text": "Service Mesh applies API policies to services in a mesh, not message queuing."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint MQ Overview — Fully Managed Cloud Asynchronous Messaging",
        "url": "https://docs.mulesoft.com/mq/#anypoint-mq-features"
      },
      "architectureGuide": {
        "title": "Configuring Queues & Exchanges in Anypoint MQ",
        "url": "https://docs.mulesoft.com/mq/mq-queues#create-queue"
      },
      "arc720": {
        "lesson": "Lesson 9 — API-led connectivity with event-driven architecture",
        "anchor": "ARC720-Course-Content.md#9-api-led-connectivity-with-event-driven-architecture"
      }
    }
  },
  {
    "id": "q-015",
    "number": 15,
    "title": "Non Functional Requirements - Where should durable clustershared keyvalue state be",
    "domain": "Non Functional Requirements",
    "topics": [
      "Object Store V2"
    ],
    "prompt": "Where should durable, cluster-shared key/value state be stored for a CloudHub application running on multiple workers?",
    "options": [
      {
        "letter": "A",
        "text": "A static variable in Java code"
      },
      {
        "letter": "B",
        "text": "Object Store v2 (managed)"
      },
      {
        "letter": "C",
        "text": "The Mule flow variable"
      },
      {
        "letter": "D",
        "text": "Local file system on the worker"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Object Store v2 is the managed, persistent, cluster-aware key/value store designed for sharing state across CloudHub workers. Static variables, flow variables, and worker-local files are not shared across workers and are lost on restart or scaling.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Java statics are per-JVM and per-worker; CloudHub workers are isolated."
      },
      "B": {
        "type": "Correct",
        "text": "Object Store v2 (managed)"
      },
      "C": {
        "type": "Incorrect",
        "text": "Flow variables exist only for the duration of a single Mule event."
      },
      "D": {
        "type": "Incorrect",
        "text": "CloudHub workers have an ephemeral local file system that is not shared."
      }
    },
    "references": {
      "primary": {
        "title": "Object Store v2 — Persistent State & Multi-Worker State Sharing",
        "url": "https://docs.mulesoft.com/object-store/#object-store-v2-features"
      },
      "architectureGuide": {
        "title": "Object Store v2 FAQ — Partitioning, Limits, and Eviction TTL",
        "url": "https://docs.mulesoft.com/object-store/osv2-faq"
      },
      "arc720": {
        "lesson": "Lesson 8 — Effective API implementations",
        "anchor": "ARC720-Course-Content.md#8-effective-api-implementations"
      }
    }
  },
  {
    "id": "q-016",
    "number": 16,
    "title": "Designing Sharing Apis - When applying breaking changes to an API",
    "domain": "Designing Sharing Apis",
    "topics": [
      "Api Versioning"
    ],
    "prompt": "When applying breaking changes to an API, which versioning practice is recommended by MuleSoft?",
    "options": [
      {
        "letter": "A",
        "text": "Increment only the patch version"
      },
      {
        "letter": "B",
        "text": "Increment the major version and publish a new asset version"
      },
      {
        "letter": "C",
        "text": "Edit the existing asset in place without re-versioning"
      },
      {
        "letter": "D",
        "text": "Delete the previous version immediately"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Breaking changes (removed fields, changed semantics, incompatible schema) require a new major version under semantic versioning. Publish the new spec as a new version in Exchange and run both versions in parallel until consumers migrate.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Patch versions are reserved for non-breaking bug fixes."
      },
      "B": {
        "type": "Correct",
        "text": "Increment the major version and publish a new asset version"
      },
      "C": {
        "type": "Incorrect",
        "text": "Editing in place silently breaks consumers and bypasses governance."
      },
      "D": {
        "type": "Incorrect",
        "text": "Deleting the prior version forces immediate migration and breaks live consumers."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Exchange — Semantic Versioning, Major Version Breaking Changes, and Publication",
        "url": "https://docs.mulesoft.com/exchange/#view-assets-by-business-group"
      },
      "architectureGuide": {
        "title": "Managing API Versions in API Manager",
        "url": "https://docs.mulesoft.com/api-manager/2.x/defining-sla-tiers#deprecate-a-tier"
      },
      "arc720": {
        "lesson": "Lesson 7 — Effective APIs",
        "anchor": "ARC720-Course-Content.md#7-effective-apis"
      }
    }
  },
  {
    "id": "q-017",
    "number": 17,
    "title": "Designing Sharing Apis - A development team wants to mock and",
    "domain": "Designing Sharing Apis",
    "topics": [
      "Api Lifecycle",
      "Raml Oas Design"
    ],
    "prompt": "A development team wants to mock and validate an API design with consumers before any implementation work begins. Which Anypoint capability supports this directly?",
    "options": [
      {
        "letter": "A",
        "text": "Mocking Service in Design Center"
      },
      {
        "letter": "B",
        "text": "API Manager auto-discovery"
      },
      {
        "letter": "C",
        "text": "Runtime Manager replay"
      },
      {
        "letter": "D",
        "text": "MUnit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Design Center includes a Mocking Service that returns example responses defined in the RAML/OAS spec, letting consumers exercise the contract before implementation. Auto-discovery, Runtime Manager replay, and MUnit operate after the API exists.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Mocking Service in Design Center"
      },
      "B": {
        "type": "Incorrect",
        "text": "Auto-discovery pairs a deployed app with an API record; it does not mock."
      },
      "C": {
        "type": "Incorrect",
        "text": "Runtime Manager focuses on running app operations."
      },
      "D": {
        "type": "Incorrect",
        "text": "MUnit unit-tests the implementation, not a design-stage spec."
      }
    },
    "references": {
      "primary": {
        "title": "Design Center — Prototyping and Mocking API Specifications with the Mocking Service",
        "url": "https://docs.mulesoft.com/design-center/#prerequisites-for-using-design-center"
      },
      "architectureGuide": {
        "title": "APIkit Overview — Generating Flows and Routers from Specifications",
        "url": "https://docs.mulesoft.com/apikit/latest/#features"
      },
      "arc720": {
        "lesson": "Lesson 7 — Effective APIs",
        "anchor": "ARC720-Course-Content.md#7-effective-apis"
      }
    }
  },
  {
    "id": "q-018",
    "number": 18,
    "title": "Api Policies - Which statement about prebuilt MuleSoft API policies",
    "domain": "Api Policies",
    "topics": [
      "Custom Policies"
    ],
    "prompt": "Which statement about pre-built MuleSoft API policies is TRUE?",
    "options": [
      {
        "letter": "A",
        "text": "They require custom Java code to install"
      },
      {
        "letter": "B",
        "text": "They are configured in API Manager and downloaded by the runtime"
      },
      {
        "letter": "C",
        "text": "They only run on Runtime Fabric"
      },
      {
        "letter": "D",
        "text": "They cannot be combined on the same API"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Pre-built policies (rate limiting, OAuth 2.0 enforcement, client ID, JWT, IP filtering, etc.) are configured per API and per environment in API Manager. The Mule runtime downloads them and enforces them locally. Multiple policies can be layered on a single API.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Pre-built policies are no-code; custom development is only for custom policies."
      },
      "B": {
        "type": "Correct",
        "text": "They are configured in API Manager and downloaded by the runtime"
      },
      "C": {
        "type": "Incorrect",
        "text": "They run on any supported deployment target (CloudHub, RTF, Hybrid)."
      },
      "D": {
        "type": "Incorrect",
        "text": "Multiple policies on the same API are common (e.g., mTLS plus rate limit)."
      }
    },
    "references": {
      "primary": {
        "title": "API Gateway — Prebuilt Policies and Inline Enforcement Architecture",
        "url": "https://docs.mulesoft.com/api-manager/2.x/api-auto-discovery-new-concept#proxy-endpoint-vs-basic-endpoint"
      },
      "architectureGuide": {
        "title": "Applying Automated Policies in API Manager Across Environments",
        "url": "https://docs.mulesoft.com/api-manager/2.x/automated-policy-apply#apply-an-automated-policy-in-connected-mode"
      },
      "arc720": {
        "lesson": "Lesson 6 — NFRs at the API-invocation level",
        "anchor": "ARC720-Course-Content.md#6-nfrs-at-the-api-invocation-level"
      }
    }
  },
  {
    "id": "q-019",
    "number": 19,
    "title": "Deploying Managing Apis - Which testing tool is built specifically for",
    "domain": "Deploying Managing Apis",
    "topics": [
      "Munit",
      "Cicd Maven"
    ],
    "prompt": "Which testing tool is built specifically for unit-testing Mule applications, including mocking processors and asserting on events?",
    "options": [
      {
        "letter": "A",
        "text": "JUnit"
      },
      {
        "letter": "B",
        "text": "Selenium"
      },
      {
        "letter": "C",
        "text": "MUnit"
      },
      {
        "letter": "D",
        "text": "Postman"
      }
    ],
    "correctAnswer": "C",
    "explanation": "MUnit is MuleSoft's testing framework for unit and integration testing Mule apps. It mocks message processors, asserts on payloads/attributes/variables, supports coverage reports, and runs in CI alongside the Mule Maven Plugin.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "JUnit can test plain Java code but not Mule flows directly."
      },
      "B": {
        "type": "Incorrect",
        "text": "Selenium is for browser UI testing."
      },
      "C": {
        "type": "Correct",
        "text": "MUnit"
      },
      "D": {
        "type": "Incorrect",
        "text": "Postman tests deployed APIs end-to-end but is not a Mule unit test framework."
      }
    },
    "references": {
      "primary": {
        "title": "MUnit Automated Testing Framework — Unit Testing Mule Applications & Flow Processors",
        "url": "https://docs.mulesoft.com/munit/latest/#test-coverage"
      },
      "architectureGuide": {
        "title": "Mule Maven Plugin Automated Deployment Architecture",
        "url": "https://docs.mulesoft.com/mule-runtime/4.4/mmp-concept#deploy-goal"
      },
      "arc720": {
        "lesson": "Lesson 10 — Production",
        "anchor": "ARC720-Course-Content.md#10-production"
      }
    }
  },
  {
    "id": "q-020",
    "number": 20,
    "title": "Application Network Basics - A retail enterprise wants every customerfacing channel",
    "domain": "Application Network Basics",
    "topics": [
      "Three Layer Architecture",
      "Api Led Connectivity"
    ],
    "prompt": "A retail enterprise wants every customer-facing channel team to assemble its own dashboards from System APIs without re-implementing core business logic. Which API layer should own the reusable cross-system business logic?",
    "options": [
      {
        "letter": "A",
        "text": "Experience APIs"
      },
      {
        "letter": "B",
        "text": "Process APIs"
      },
      {
        "letter": "C",
        "text": "System APIs"
      },
      {
        "letter": "D",
        "text": "API policies"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Process APIs orchestrate and combine data from multiple System APIs to encode business logic that channels can reuse. Experience APIs then shape that logic per channel. Putting business logic in Experience APIs forces re-implementation per channel; putting it in System APIs couples logic to systems of record.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Experience APIs adapt for a channel; placing business logic here forces duplication."
      },
      "B": {
        "type": "Correct",
        "text": "Process APIs"
      },
      "C": {
        "type": "Incorrect",
        "text": "System APIs unlock systems of record without encoding business logic."
      },
      "D": {
        "type": "Incorrect",
        "text": "Policies enforce non-functional concerns (security, throttling), not business logic."
      }
    },
    "references": {
      "primary": {
        "title": "API-Led Connectivity — Process APIs Orchestrating Reusable Cross-System Business Logic",
        "url": "https://docs.mulesoft.com/general/api-led-develop#step-3-2-understand-the-scaffolded-structure"
      },
      "architectureGuide": {
        "title": "Martin Fowler — Bounded Context & Layered Domain Architecture",
        "url": "https://martinfowler.com/bliki/BoundedContext.html"
      },
      "arc720": {
        "lesson": "Lesson 5 — API identification, publication, and reuse",
        "anchor": "ARC720-Course-Content.md#5-api-identification-publication-and-reuse"
      }
    }
  },
  {
    "id": "q-021",
    "number": 21,
    "title": "Deployment Options - Which deployment option lets you run Mule",
    "domain": "Deployment Options",
    "topics": [
      "Runtime Fabric"
    ],
    "prompt": "Which deployment option lets you run Mule runtimes inside your own Kubernetes cluster while still managing them centrally from Anypoint?",
    "options": [
      {
        "letter": "A",
        "text": "CloudHub"
      },
      {
        "letter": "B",
        "text": "Anypoint Runtime Fabric (RTF)"
      },
      {
        "letter": "C",
        "text": "Hybrid Mule Server"
      },
      {
        "letter": "D",
        "text": "Anypoint Service Mesh"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Runtime Fabric runs containerized Mule runtimes on customer-managed Kubernetes (or self-managed RTF on VMs) while remaining managed from Anypoint Runtime Manager. CloudHub is fully managed by MuleSoft; Hybrid runs Mule on customer servers without containers; Service Mesh is for non-Mule services.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "CloudHub is MuleSoft-managed multi-tenant cloud; not a customer Kubernetes deployment."
      },
      "B": {
        "type": "Correct",
        "text": "Anypoint Runtime Fabric (RTF)"
      },
      "C": {
        "type": "Incorrect",
        "text": "Hybrid uses standalone Mule servers, not Kubernetes."
      },
      "D": {
        "type": "Incorrect",
        "text": "Service Mesh extends API governance to existing Istio meshes; it does not host Mule apps."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Runtime Fabric (RTF) — Kubernetes Architecture & Containerized Deployment",
        "url": "https://docs.mulesoft.com/runtime-fabric/latest/#how-application-deployments-work-in-anypoint-runtime-fabric"
      },
      "architectureGuide": {
        "title": "Runtime Fabric Custom Ingress & Edge Policies",
        "url": "https://docs.mulesoft.com/runtime-fabric/latest/custom-ingress-configuration#how-ingress-resources-templates-work-in-runtime-fabric"
      },
      "arc720": {
        "lesson": "Lesson 4 — Organizational and platform foundations",
        "anchor": "ARC720-Course-Content.md#4-organizational-and-platform-foundations"
      }
    }
  },
  {
    "id": "q-022",
    "number": 22,
    "title": "Non Functional Requirements - What is the purpose of CloudHubs Object",
    "domain": "Non Functional Requirements",
    "topics": [
      "Object Store V2"
    ],
    "prompt": "What is the purpose of CloudHub's Object Store v2 versus the in-memory Object Store v1?",
    "options": [
      {
        "letter": "A",
        "text": "v2 is faster but non-persistent"
      },
      {
        "letter": "B",
        "text": "v2 is persistent, cluster-shared across workers, and managed by MuleSoft"
      },
      {
        "letter": "C",
        "text": "v2 only works on Runtime Fabric"
      },
      {
        "letter": "D",
        "text": "v2 is identical to v1 but with renamed APIs"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Object Store v2 is a managed, persistent, cluster-aware service with key/value semantics designed for sharing state across CloudHub workers. v1 is local in-memory storage scoped to one worker.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "v2 is durable; persistence is its main value."
      },
      "B": {
        "type": "Correct",
        "text": "v2 is persistent, cluster-shared across workers, and managed by MuleSoft"
      },
      "C": {
        "type": "Incorrect",
        "text": "v2 is a CloudHub managed service; on RTF, persistent stores are configured separately."
      },
      "D": {
        "type": "Incorrect",
        "text": "v2 has different semantics (TTL behavior, cluster sharing) not just renamed APIs."
      }
    },
    "references": {
      "primary": {
        "title": "Object Store v2 — Persistent Key-Value Store Across Cluster Workers",
        "url": "https://docs.mulesoft.com/object-store/#object-store-v2-features"
      },
      "architectureGuide": {
        "title": "Object Store v2 FAQ — Partitioning and TTL Expiration",
        "url": "https://docs.mulesoft.com/object-store/osv2-faq"
      },
      "arc720": {
        "lesson": "Lesson 8 — Effective API implementations",
        "anchor": "ARC720-Course-Content.md#8-effective-api-implementations"
      }
    }
  },
  {
    "id": "q-023",
    "number": 23,
    "title": "Non Functional Requirements - What does enabling Persistent Queues on a",
    "domain": "Non Functional Requirements",
    "topics": [
      "Reliability Patterns",
      "Cloudhub Deployment"
    ],
    "prompt": "What does enabling 'Persistent Queues' on a CloudHub app primarily provide?",
    "options": [
      {
        "letter": "A",
        "text": "Disk-backed buffering for VM queues that survives worker restarts"
      },
      {
        "letter": "B",
        "text": "Cross-region replication of every Mule message"
      },
      {
        "letter": "C",
        "text": "An external Anypoint MQ broker"
      },
      {
        "letter": "D",
        "text": "Synchronous JMS bridging to on-prem brokers"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Persistent Queues for CloudHub use the worker's persistent storage to back VM queues so messages survive worker restarts and can be processed by another worker. They do not provide cross-region replication or external brokers; for global queueing, use Anypoint MQ.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Disk-backed buffering for VM queues that survives worker restarts"
      },
      "B": {
        "type": "Incorrect",
        "text": "Cross-region replication is not what Persistent Queues offer."
      },
      "C": {
        "type": "Incorrect",
        "text": "Anypoint MQ is a separate managed broker, not equivalent to Persistent Queues."
      },
      "D": {
        "type": "Incorrect",
        "text": "JMS bridging requires the JMS connector and external configuration."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Fabric — Persistent Queues for Inter-Worker Message Buffering",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric#persistent-queues"
      },
      "architectureGuide": {
        "title": "CloudHub Fabric & Worker Scale-Out Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric#worker-scale-out"
      },
      "arc720": {
        "lesson": "Lesson 10 — Production",
        "anchor": "ARC720-Course-Content.md#10-production"
      }
    }
  },
  {
    "id": "q-024",
    "number": 24,
    "title": "Non Functional Requirements - Which CloudHub feature distributes traffic across multiple",
    "domain": "Non Functional Requirements",
    "topics": [
      "Ha Dr Architecture",
      "Cloudhub Deployment"
    ],
    "prompt": "Which CloudHub feature distributes traffic across multiple workers to provide horizontal scaling and high availability within a region?",
    "options": [
      {
        "letter": "A",
        "text": "Static IP addressing"
      },
      {
        "letter": "B",
        "text": "Shared load balancer (SLB) and worker scaling"
      },
      {
        "letter": "C",
        "text": "Dedicated VPN tunnels"
      },
      {
        "letter": "D",
        "text": "Object Store v2 replication"
      }
    ],
    "correctAnswer": "B",
    "explanation": "CloudHub's shared load balancer routes inbound HTTPS to all workers of an app in a region, providing in-region HA and horizontal scaling. Static IPs and VPNs address connectivity, not load distribution; Object Store v2 stores state.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Static IPs allow allow-listing on partner systems; they do not load balance."
      },
      "B": {
        "type": "Correct",
        "text": "Shared load balancer (SLB) and worker scaling"
      },
      "C": {
        "type": "Incorrect",
        "text": "VPNs are network connectivity, not load balancers."
      },
      "D": {
        "type": "Incorrect",
        "text": "Object Store v2 stores state and is not a load distributor."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture — Shared Load Balancers (SLB) & Multi-Worker Horizontal Scaling",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#worker-scale-out-and-data-center-redundancy"
      },
      "architectureGuide": {
        "title": "CloudHub Architecture — Workers and Multitenancy",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#workers-and-multitenancy"
      },
      "arc720": {
        "lesson": "Lesson 10 — Production",
        "anchor": "ARC720-Course-Content.md#10-production"
      }
    }
  },
  {
    "id": "q-025",
    "number": 25,
    "title": "Deployment Options - Which CloudHub configuration enables a managed customercontrolled",
    "domain": "Deployment Options",
    "topics": [
      "Cloudhub Deployment",
      "Ha Dr Architecture"
    ],
    "prompt": "Which CloudHub configuration enables a managed, customer-controlled load balancer with custom certificates, custom URLs, and IP allow-listing?",
    "options": [
      {
        "letter": "A",
        "text": "Shared Load Balancer (SLB)"
      },
      {
        "letter": "B",
        "text": "Dedicated Load Balancer (DLB)"
      },
      {
        "letter": "C",
        "text": "Anypoint Service Mesh"
      },
      {
        "letter": "D",
        "text": "Auto-discovery"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A Dedicated Load Balancer is provisioned per Anypoint VPC and supports custom domains, customer-supplied TLS certificates, IP allow-listing, and custom URL mapping. The SLB shares MuleSoft-managed infrastructure and only supports cloudhub.io URLs and standard certificates.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "SLB is multi-tenant and limited to cloudhub.io URLs and standard TLS settings."
      },
      "B": {
        "type": "Correct",
        "text": "Dedicated Load Balancer (DLB)"
      },
      "C": {
        "type": "Incorrect",
        "text": "Service Mesh governs services in Istio; it is not a CloudHub load balancer option."
      },
      "D": {
        "type": "Incorrect",
        "text": "Auto-discovery pairs apps with API records and is unrelated to load balancing."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Dedicated Load Balancer (DLB) — SSL Certificates, Custom Domains & mTLS",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-dedicated-load-balancer#create-and-configure-a-dedicated-load-balancer"
      },
      "architectureGuide": {
        "title": "Anypoint Virtual Private Cloud (VPC) Architecture & Peering",
        "url": "https://docs.mulesoft.com/cloudhub/vpc-connectivity-methods-concept#vpc-peering"
      },
      "arc720": {
        "lesson": "Lesson 8 — Effective API implementations",
        "anchor": "ARC720-Course-Content.md#8-effective-api-implementations"
      }
    }
  },
  {
    "id": "q-026",
    "number": 26,
    "title": "Api Policies - An architect needs to expose an API",
    "domain": "Api Policies",
    "topics": [
      "Api Contracts Sla Tiers",
      "Rate Limiting Throttling"
    ],
    "prompt": "An architect needs to expose an API to partners with strict client identification requirements but no need for end-user OAuth. Which policy combination is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "Only IP allow-list"
      },
      {
        "letter": "B",
        "text": "Client ID enforcement plus rate-limiting SLA-based"
      },
      {
        "letter": "C",
        "text": "JWT validation only"
      },
      {
        "letter": "D",
        "text": "No policies (rely on the partner)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Client ID enforcement uniquely identifies each partner app and enables per-client SLA tiers and rate limiting. Combining the two is the standard pattern for partner B2B APIs that do not require user-context OAuth flows.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "IP allow-listing alone cannot identify which client made each call or apply per-client limits."
      },
      "B": {
        "type": "Correct",
        "text": "Client ID enforcement plus rate-limiting SLA-based"
      },
      "C": {
        "type": "Incorrect",
        "text": "JWT validation typically expects user-context tokens issued by an IdP, not partner client identification."
      },
      "D": {
        "type": "Incorrect",
        "text": "Relying on partners for governance violates basic API security and SLA practice."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Client ID Enforcement and Rate Limiting on Client Application Contracts",
        "url": "https://docs.mulesoft.com/api-manager/2.x/client-id-based-policies#how-this-policy-works"
      },
      "architectureGuide": {
        "title": "Defining SLA Tiers and Consumer Tiers in API Manager",
        "url": "https://docs.mulesoft.com/api-manager/2.x/defining-sla-tiers#defining-a-tier"
      },
      "arc720": {
        "lesson": "Lesson 6 — NFRs at the API-invocation level",
        "anchor": "ARC720-Course-Content.md#6-nfrs-at-the-api-invocation-level"
      }
    }
  },
  {
    "id": "q-027",
    "number": 27,
    "title": "Monitoring Analyzing - Which Anypoint capability stores Mule application logs",
    "domain": "Monitoring Analyzing",
    "topics": [
      "Anypoint Monitoring",
      "Log Aggregation"
    ],
    "prompt": "Which Anypoint capability stores Mule application logs centrally for the last 30 days (default) and supports searching across applications?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Visualizer"
      },
      {
        "letter": "B",
        "text": "Anypoint Monitoring (Log Search)"
      },
      {
        "letter": "C",
        "text": "API Manager"
      },
      {
        "letter": "D",
        "text": "Exchange"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Anypoint Monitoring's Log Search aggregates and indexes app logs centrally with default retention (around 30 days for the included tier; longer with paid tiers). Visualizer shows topology, API Manager governs APIs, Exchange is the asset catalog.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Visualizer renders application network topology and dependencies."
      },
      "B": {
        "type": "Correct",
        "text": "Anypoint Monitoring (Log Search)"
      },
      "C": {
        "type": "Incorrect",
        "text": "API Manager configures policies and contracts; it is not a log search tool."
      },
      "D": {
        "type": "Incorrect",
        "text": "Exchange catalogs design-time assets, not runtime logs."
      }
    },
    "references": {
      "primary": {
        "title": "Searching Aggregated Logs in Anypoint Monitoring & Log Retention",
        "url": "https://docs.mulesoft.com/monitoring/logs-search-hf#query-logs-from-the-search-bar"
      },
      "architectureGuide": {
        "title": "Using Search Filters in Anypoint Monitoring Logs",
        "url": "https://docs.mulesoft.com/monitoring/logs-search-hf#use-search-filters"
      },
      "arc720": {
        "lesson": "Lesson 11 — Application network behavior",
        "anchor": "ARC720-Course-Content.md#11-application-network-behavior"
      }
    }
  },
  {
    "id": "q-028",
    "number": 28,
    "title": "Api Implementation Design - What is the recommended approach to manage",
    "domain": "Api Implementation Design",
    "topics": [
      "Reliability Patterns"
    ],
    "prompt": "What is the recommended approach to manage secrets like database passwords used by Mule applications across environments?",
    "options": [
      {
        "letter": "A",
        "text": "Hardcode them in mule-app.properties"
      },
      {
        "letter": "B",
        "text": "Use secure properties (encrypted) with environment-specific values resolved at deploy time"
      },
      {
        "letter": "C",
        "text": "Commit them to Git in plain text"
      },
      {
        "letter": "D",
        "text": "Pass them via the URL on each request"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Mule supports secure (encrypted) properties so values are stored encrypted in version control and decrypted at runtime using a key supplied per environment. This separates configuration from code while keeping secrets out of plain text.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Hardcoding leaks secrets and prevents per-environment overrides."
      },
      "B": {
        "type": "Correct",
        "text": "Use secure properties (encrypted) with environment-specific values resolved at deploy time"
      },
      "C": {
        "type": "Incorrect",
        "text": "Plain-text Git secrets are an immediate security failure."
      },
      "D": {
        "type": "Incorrect",
        "text": "URL-based secrets leak in logs and proxies."
      }
    },
    "references": {
      "primary": {
        "title": "Mule Runtime — Secure Encrypted Properties Across Environments",
        "url": "https://docs.mulesoft.com/mule-runtime/4.4/mmp-concept#configure-shared-libraries"
      },
      "architectureGuide": {
        "title": "Access Management Environments and Secure Configuration Management",
        "url": "https://docs.mulesoft.com/access-management/environments#types-of-environments"
      },
      "arc720": {
        "lesson": "Lesson 8 — Effective API implementations",
        "anchor": "ARC720-Course-Content.md#8-effective-api-implementations"
      }
    }
  },
  {
    "id": "q-029",
    "number": 29,
    "title": "Api Policies - Which builtin policy can validate a JSON",
    "domain": "Api Policies",
    "topics": [
      "Jwt Validation"
    ],
    "prompt": "Which built-in policy can validate a JSON Web Token's signature, issuer, audience, and expiration before the request reaches the implementation?",
    "options": [
      {
        "letter": "A",
        "text": "JWT Validation"
      },
      {
        "letter": "B",
        "text": "Client ID enforcement"
      },
      {
        "letter": "C",
        "text": "IP allow-list"
      },
      {
        "letter": "D",
        "text": "Mutual TLS"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The JWT Validation policy checks signature against a JWKS or shared secret, plus issuer, audience, expiration, and required claims. It runs in API Manager-managed policies before traffic reaches the implementation flow.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "JWT Validation"
      },
      "B": {
        "type": "Incorrect",
        "text": "Client ID enforcement validates app credentials, not JWT claims."
      },
      "C": {
        "type": "Incorrect",
        "text": "IP allow-listing filters by source IP and cannot validate tokens."
      },
      "D": {
        "type": "Incorrect",
        "text": "Mutual TLS authenticates at the transport layer with X.509 certs."
      }
    },
    "references": {
      "primary": {
        "title": "JWT Validation Policy Configuration & Token Signature Verification in API Manager",
        "url": "https://docs.mulesoft.com/api-manager/2.x/policy-mule4-jwt-validation#how-this-policy-works"
      },
      "architectureGuide": {
        "title": "IETF RFC 7517 — JSON Web Key (JWKS) Specification",
        "url": "https://datatracker.ietf.org/doc/html/rfc7517"
      },
      "arc720": {
        "lesson": "Lesson 6 — NFRs at the API-invocation level",
        "anchor": "ARC720-Course-Content.md#6-nfrs-at-the-api-invocation-level"
      }
    }
  },
  {
    "id": "q-030",
    "number": 30,
    "title": "Deploying Managing Apis - What is the Mule Maven Plugin used",
    "domain": "Deploying Managing Apis",
    "topics": [
      "Cicd Maven"
    ],
    "prompt": "What is the Mule Maven Plugin used for in CI/CD pipelines?",
    "options": [
      {
        "letter": "A",
        "text": "Drawing API specifications"
      },
      {
        "letter": "B",
        "text": "Packaging and deploying Mule applications to CloudHub, RTF, or Hybrid"
      },
      {
        "letter": "C",
        "text": "Browsing Exchange assets"
      },
      {
        "letter": "D",
        "text": "Running the design-time mocking service"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The Mule Maven Plugin packages Mule projects into deployable archives and deploys them to CloudHub, Runtime Fabric, Hybrid, or standalone runtimes from a CI/CD pipeline (Jenkins, Azure DevOps, GitHub Actions, etc.).",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "API design is done in Design Center, not the Maven plugin."
      },
      "B": {
        "type": "Correct",
        "text": "Packaging and deploying Mule applications to CloudHub, RTF, or Hybrid"
      },
      "C": {
        "type": "Incorrect",
        "text": "Exchange has its own UI and Maven repository for asset publication; the deploy plugin is separate."
      },
      "D": {
        "type": "Incorrect",
        "text": "The mocking service runs inside Design Center."
      }
    },
    "references": {
      "primary": {
        "title": "Mule Maven Plugin (MMP) — Automated Deployment Targets in CI/CD",
        "url": "https://docs.mulesoft.com/mule-runtime/4.4/mmp-concept#deploy-goal"
      },
      "architectureGuide": {
        "title": "MUnit Testing Framework & Test Coverage in Maven",
        "url": "https://docs.mulesoft.com/munit/latest/#test-coverage"
      },
      "arc720": {
        "lesson": "Lesson 10 — Production",
        "anchor": "ARC720-Course-Content.md#10-production"
      }
    }
  },
  {
    "id": "q-031",
    "number": 31,
    "title": "Non Functional Requirements - An organization needs failover for a CloudHub",
    "domain": "Non Functional Requirements",
    "topics": [
      "Ha Dr Architecture"
    ],
    "prompt": "An organization needs failover for a CloudHub app across two AWS regions in case of a region-wide outage. Which approach is correct?",
    "options": [
      {
        "letter": "A",
        "text": "Increase worker count in one region"
      },
      {
        "letter": "B",
        "text": "Deploy the same app to two regions with appropriate DNS or DLB strategy"
      },
      {
        "letter": "C",
        "text": "Enable Persistent Queues only"
      },
      {
        "letter": "D",
        "text": "Switch to the Shared Load Balancer"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Region failover requires deploying the application to a second region and using DNS routing (e.g., latency-based or health-checked failover) or a Dedicated Load Balancer strategy to redirect traffic when the primary region fails. Worker count, persistent queues, and SLB are all in-region tactics.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "More workers in one region cannot survive a region-wide outage."
      },
      "B": {
        "type": "Correct",
        "text": "Deploy the same app to two regions with appropriate DNS or DLB strategy"
      },
      "C": {
        "type": "Incorrect",
        "text": "Persistent Queues survive worker restarts within a region, not region loss."
      },
      "D": {
        "type": "Incorrect",
        "text": "The SLB operates within a single region."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Fabric — Multi-Worker High Availability & Regional Failover Strategies",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric#how-ha-is-implemented"
      },
      "architectureGuide": {
        "title": "CloudHub Architecture — Global Worker Clouds and Regional Resiliency",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#global-worker-clouds"
      },
      "arc720": {
        "lesson": "Lesson 10 — Production",
        "anchor": "ARC720-Course-Content.md#10-production"
      }
    }
  },
  {
    "id": "q-032",
    "number": 32,
    "title": "Designing Sharing Apis - Which artifact does Anypoint Exchange version when",
    "domain": "Designing Sharing Apis",
    "topics": [
      "Api Versioning",
      "Exchange Asset Management"
    ],
    "prompt": "Which artifact does Anypoint Exchange version when a RAML API specification changes in a backwards-compatible way?",
    "options": [
      {
        "letter": "A",
        "text": "A new major version"
      },
      {
        "letter": "B",
        "text": "A new minor or patch version under the same asset"
      },
      {
        "letter": "C",
        "text": "A new asset entirely"
      },
      {
        "letter": "D",
        "text": "Nothing â Exchange overwrites the existing spec"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Backwards-compatible changes (additive fields, new optional parameters) increment the minor or patch version under the same Exchange asset. Major versions are reserved for breaking changes; new assets are reserved for new APIs entirely.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Major version bumps signal breaking changes."
      },
      "B": {
        "type": "Correct",
        "text": "A new minor or patch version under the same asset"
      },
      "C": {
        "type": "Incorrect",
        "text": "A new asset would lose history and confuse consumers."
      },
      "D": {
        "type": "Incorrect",
        "text": "Exchange does not silently overwrite published versions."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Exchange — Semantic Versioning (Minor/Patch Backwards-Compatible Changes)",
        "url": "https://docs.mulesoft.com/exchange/#view-assets-by-business-group"
      },
      "architectureGuide": {
        "title": "Managing API Versions in API Manager",
        "url": "https://docs.mulesoft.com/api-manager/2.x/defining-sla-tiers#deprecate-a-tier"
      },
      "arc720": {
        "lesson": "Lesson 7 — Effective APIs",
        "anchor": "ARC720-Course-Content.md#7-effective-apis"
      }
    }
  },
  {
    "id": "q-033",
    "number": 33,
    "title": "Org Platform Foundations - Which entitlement model determines how many vCores",
    "domain": "Org Platform Foundations",
    "topics": [
      "Business Groups Environments",
      "Vcores Capacity"
    ],
    "prompt": "Which entitlement model determines how many vCores a business group can deploy to CloudHub?",
    "options": [
      {
        "letter": "A",
        "text": "The vCore allocation assigned to the business group by the master organization"
      },
      {
        "letter": "B",
        "text": "The number of users in the business group"
      },
      {
        "letter": "C",
        "text": "The number of APIs published in Exchange"
      },
      {
        "letter": "D",
        "text": "The Mule runtime version"
      }
    ],
    "correctAnswer": "A",
    "explanation": "vCore entitlements are assigned by the master organization to business groups (and within them to environments). Apps deployed cannot exceed the business group's allocation. Users, published APIs, and runtime versions do not change vCore entitlement.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The vCore allocation assigned to the business group by the master organization"
      },
      "B": {
        "type": "Incorrect",
        "text": "Users and entitlements are independent allocations."
      },
      "C": {
        "type": "Incorrect",
        "text": "Published assets in Exchange do not change vCore allocation."
      },
      "D": {
        "type": "Incorrect",
        "text": "Runtime versions are properties of deployed apps, not entitlements."
      }
    },
    "references": {
      "primary": {
        "title": "Access Management — Business Group Entitlements & vCore Allocations",
        "url": "https://docs.mulesoft.com/access-management/business-groups#business-group-hierarchy"
      },
      "architectureGuide": {
        "title": "CloudHub Architecture — Sizing Worker vCores for Delivery Teams",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#cloudhub-workers"
      },
      "arc720": {
        "lesson": "Lesson 4 — Organizational and platform foundations",
        "anchor": "ARC720-Course-Content.md#4-organizational-and-platform-foundations"
      }
    }
  },
  {
    "id": "q-034",
    "number": 34,
    "title": "Org Platform Foundations - Which Anypoint Platform component governs which users",
    "domain": "Org Platform Foundations",
    "topics": [
      "Rbac Permissions"
    ],
    "prompt": "Which Anypoint Platform component governs which users can deploy applications, manage APIs, or configure environments?",
    "options": [
      {
        "letter": "A",
        "text": "Access Management roles and permissions"
      },
      {
        "letter": "B",
        "text": "Anypoint MQ ACLs"
      },
      {
        "letter": "C",
        "text": "RAML traits"
      },
      {
        "letter": "D",
        "text": "Object Store keys"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Access Management defines users, groups, roles (built-in like Organization Administrator, Environment Administrator, plus custom roles), and permissions per business group and environment. MQ ACLs control queue access only; RAML traits are spec-level reuse; Object Store keys are app-level data.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Access Management roles and permissions"
      },
      "B": {
        "type": "Incorrect",
        "text": "MQ ACLs only govern message-broker access, not platform RBAC."
      },
      "C": {
        "type": "Incorrect",
        "text": "Traits describe API behavior in RAML, not user permissions."
      },
      "D": {
        "type": "Incorrect",
        "text": "Object Store keys are application data, not RBAC subjects."
      }
    },
    "references": {
      "primary": {
        "title": "Access Management — Roles, Scopes, and Permissions Configuration",
        "url": "https://docs.mulesoft.com/access-management/roles#default-roles-and-permission-scopes"
      },
      "architectureGuide": {
        "title": "Single Sign-On (SSO) & External Identity Providers in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/external-identity#managing-users-external-identity"
      },
      "arc720": {
        "lesson": "Lesson 4 — Organizational and platform foundations",
        "anchor": "ARC720-Course-Content.md#4-organizational-and-platform-foundations"
      }
    }
  },
  {
    "id": "q-035",
    "number": 35,
    "title": "Application Network Basics - When designing System APIs which rule of",
    "domain": "Application Network Basics",
    "topics": [
      "Three Layer Architecture"
    ],
    "prompt": "When designing System APIs, which rule of thumb best preserves their reuse value?",
    "options": [
      {
        "letter": "A",
        "text": "Embed business logic so consumers do not need to learn the system"
      },
      {
        "letter": "B",
        "text": "Expose the system's data model directly with no abstraction"
      },
      {
        "letter": "C",
        "text": "Provide a stable, abstracted, consumer-agnostic interface that hides backend specifics"
      },
      {
        "letter": "D",
        "text": "Tightly couple them to one Process API"
      }
    ],
    "correctAnswer": "C",
    "explanation": "System APIs should present a stable, abstracted interface so backend changes do not ripple to consumers. They should not contain business logic (that belongs in Process APIs) and should not be coupled to a single consumer.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Business logic in System APIs blocks reuse and creates lock-in."
      },
      "B": {
        "type": "Incorrect",
        "text": "Exposing raw schemas couples consumers to backend changes."
      },
      "C": {
        "type": "Correct",
        "text": "Provide a stable, abstracted, consumer-agnostic interface that hides backend specifics"
      },
      "D": {
        "type": "Incorrect",
        "text": "Coupling to one Process API destroys reuse."
      }
    },
    "references": {
      "primary": {
        "title": "API-Led Connectivity — Designing Stable, Abstracted, Consumer-Agnostic System APIs",
        "url": "https://docs.mulesoft.com/general/api-led-develop#step-3-1-create-the-implementation-project"
      },
      "architectureGuide": {
        "title": "Martin Fowler — Bounded Context & System Abstraction Patterns",
        "url": "https://martinfowler.com/bliki/BoundedContext.html"
      },
      "arc720": {
        "lesson": "Lesson 5 — API identification, publication, and reuse",
        "anchor": "ARC720-Course-Content.md#5-api-identification-publication-and-reuse"
      }
    }
  },
  {
    "id": "q-036",
    "number": 36,
    "title": "Deployment Options - An organization wants to enforce API policies",
    "domain": "Deployment Options",
    "topics": [
      "Anypoint Service Mesh"
    ],
    "prompt": "An organization wants to enforce API policies on services that are NOT Mule-based but are deployed in an existing Istio service mesh. Which Anypoint product fits?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Runtime Fabric"
      },
      {
        "letter": "B",
        "text": "Anypoint Service Mesh"
      },
      {
        "letter": "C",
        "text": "Anypoint MQ"
      },
      {
        "letter": "D",
        "text": "Anypoint Visualizer"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Anypoint Service Mesh extends Anypoint API governance and policies (rate limiting, security, monitoring) to non-Mule microservices running in an Istio mesh. RTF is a Mule runtime; MQ is messaging; Visualizer is topology.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Runtime Fabric runs Mule runtimes, not arbitrary microservices governed by API Manager."
      },
      "B": {
        "type": "Correct",
        "text": "Anypoint Service Mesh"
      },
      "C": {
        "type": "Incorrect",
        "text": "Anypoint MQ is queue-based messaging, not policy enforcement."
      },
      "D": {
        "type": "Incorrect",
        "text": "Visualizer renders network graphs but does not enforce policies."
      }
    },
    "references": {
      "primary": {
        "title": "Runtime Fabric — Custom Ingress & Governing Non-Mule Microservices in Service Mesh",
        "url": "https://docs.mulesoft.com/runtime-fabric/latest/custom-ingress-configuration#how-ingress-resources-templates-work-in-runtime-fabric"
      },
      "architectureGuide": {
        "title": "Runtime Fabric Architecture Overview",
        "url": "https://docs.mulesoft.com/runtime-fabric/latest/#how-application-deployments-work-in-anypoint-runtime-fabric"
      },
      "arc720": {
        "lesson": "Lesson 6 — NFRs at the API-invocation level",
        "anchor": "ARC720-Course-Content.md#6-nfrs-at-the-api-invocation-level"
      }
    }
  },
  {
    "id": "q-037",
    "number": 37,
    "title": "Designing Sharing Apis - Which approach best supports introducing a breaking",
    "domain": "Designing Sharing Apis",
    "topics": [
      "Api Versioning",
      "Api Lifecycle"
    ],
    "prompt": "Which approach best supports introducing a breaking change to an active Process API without disrupting current consumers?",
    "options": [
      {
        "letter": "A",
        "text": "Edit the running API in place"
      },
      {
        "letter": "B",
        "text": "Publish a new major version, run both versions in parallel, and migrate consumers"
      },
      {
        "letter": "C",
        "text": "Force consumers to upgrade within 24 hours"
      },
      {
        "letter": "D",
        "text": "Delete the old version once the new one is published"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Run-both-versions during migration is the standard MuleSoft pattern: publish v2 with the breaking change, keep v1 running, and migrate consumers in their own time before retiring v1. Editing in place breaks consumers immediately.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "In-place edits silently break clients and bypass governance."
      },
      "B": {
        "type": "Correct",
        "text": "Publish a new major version, run both versions in parallel, and migrate consumers"
      },
      "C": {
        "type": "Incorrect",
        "text": "Forcing 24-hour migration is operationally risky and rarely realistic."
      },
      "D": {
        "type": "Incorrect",
        "text": "Deleting prior versions before consumers migrate is a guaranteed outage."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Exchange — Managing Breaking Changes & Parallel API Major Versions",
        "url": "https://docs.mulesoft.com/exchange/#view-assets-by-business-group"
      },
      "architectureGuide": {
        "title": "API Manager — Deprecating and Deleting API Versions",
        "url": "https://docs.mulesoft.com/api-manager/2.x/defining-sla-tiers#deprecate-a-tier"
      },
      "arc720": {
        "lesson": "Lesson 7 — Effective APIs",
        "anchor": "ARC720-Course-Content.md#7-effective-apis"
      }
    }
  },
  {
    "id": "q-038",
    "number": 38,
    "title": "Deployment Options - Which is a TRUE statement about CloudHub",
    "domain": "Deployment Options",
    "topics": [
      "Cloudhub Deployment"
    ],
    "prompt": "Which is a TRUE statement about CloudHub Shared Load Balancer (SLB)?",
    "options": [
      {
        "letter": "A",
        "text": "It supports custom certificates and custom domain names"
      },
      {
        "letter": "B",
        "text": "It only supports cloudhub.io URLs and MuleSoft-managed certificates"
      },
      {
        "letter": "C",
        "text": "It provides region failover automatically"
      },
      {
        "letter": "D",
        "text": "It requires an Anypoint VPC to function"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The Shared Load Balancer is multi-tenant and limited to cloudhub.io URLs and MuleSoft-managed certificates. For custom domains, custom TLS certificates, IP allow-listing, and URL mapping, customers use a Dedicated Load Balancer in an Anypoint VPC.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Custom certs/domains require the DLB."
      },
      "B": {
        "type": "Correct",
        "text": "It only supports cloudhub.io URLs and MuleSoft-managed certificates"
      },
      "C": {
        "type": "Incorrect",
        "text": "Region failover requires multi-region deployment with DNS or DLB strategy."
      },
      "D": {
        "type": "Incorrect",
        "text": "The SLB does not require an Anypoint VPC; the DLB does."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture — Shared Load Balancers (SLB) vs Dedicated Load Balancers",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#workers-and-multitenancy"
      },
      "architectureGuide": {
        "title": "CloudHub Dedicated Load Balancer (DLB) Architecture & Custom Certificates",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-dedicated-load-balancer#create-and-configure-a-dedicated-load-balancer"
      },
      "arc720": {
        "lesson": "Lesson 8 — Effective API implementations",
        "anchor": "ARC720-Course-Content.md#8-effective-api-implementations"
      }
    }
  },
  {
    "id": "q-039",
    "number": 39,
    "title": "Api Policies - Which security control prevents a denialofservice from",
    "domain": "Api Policies",
    "topics": [
      "Rate Limiting Throttling"
    ],
    "prompt": "Which security control prevents a denial-of-service from a misbehaving client by capping requests per time window?",
    "options": [
      {
        "letter": "A",
        "text": "Rate-limiting policy"
      },
      {
        "letter": "B",
        "text": "OAuth 2.0 token enforcement"
      },
      {
        "letter": "C",
        "text": "JSON threat protection"
      },
      {
        "letter": "D",
        "text": "Mutual TLS"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rate-limiting policies cap request volume per client and per time window, defending against accidental or malicious traffic floods. OAuth, JSON threat protection, and mTLS each address different concerns (authentication, payload validation, transport identity).",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Rate-limiting policy"
      },
      "B": {
        "type": "Incorrect",
        "text": "OAuth proves identity; it does not cap throughput."
      },
      "C": {
        "type": "Incorrect",
        "text": "JSON threat protection blocks malicious payload structures, not request volume."
      },
      "D": {
        "type": "Incorrect",
        "text": "mTLS authenticates the client at TLS time but does not cap call rate."
      }
    },
    "references": {
      "primary": {
        "title": "Rate Limiting and Throttling Policy Reference in API Manager",
        "url": "https://docs.mulesoft.com/api-manager/2.x/rate-limiting-and-throttling#how-this-policy-works"
      },
      "architectureGuide": {
        "title": "Defining SLA Tiers and Consumer Tiers in API Manager",
        "url": "https://docs.mulesoft.com/api-manager/2.x/defining-sla-tiers#defining-a-tier"
      },
      "arc720": {
        "lesson": "Lesson 6 — NFRs at the API-invocation level",
        "anchor": "ARC720-Course-Content.md#6-nfrs-at-the-api-invocation-level"
      }
    }
  },
  {
    "id": "q-040",
    "number": 40,
    "title": "Api Policies - An architect wants ALL traffic to a",
    "domain": "Api Policies",
    "topics": [
      "Oauth2 Policy"
    ],
    "prompt": "An architect wants ALL traffic to a Mule API to be authorized by a corporate identity provider's OAuth 2.0 access tokens. Which approach is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "Implement custom token validation in every flow"
      },
      {
        "letter": "B",
        "text": "Apply the OAuth 2.0 access-token enforcement policy in API Manager and integrate with the IdP"
      },
      {
        "letter": "C",
        "text": "Use IP allow-listing instead"
      },
      {
        "letter": "D",
        "text": "Use Mutual TLS instead"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Apply the OAuth 2.0 access-token enforcement policy in API Manager and configure it against the corporate IdP (e.g., Okta, Ping, Azure AD via OpenAM, or external OAuth providers). Per-flow custom validation is brittle, duplicative, and bypasses governance.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Per-flow code duplicates logic and skips API Manager governance."
      },
      "B": {
        "type": "Correct",
        "text": "Apply the OAuth 2.0 access-token enforcement policy in API Manager and integrate with the IdP"
      },
      "C": {
        "type": "Incorrect",
        "text": "IP allow-lists do not validate user-context tokens."
      },
      "D": {
        "type": "Incorrect",
        "text": "Mutual TLS authenticates the transport endpoint, not the calling user."
      }
    },
    "references": {
      "primary": {
        "title": "External Identity Management & OAuth 2.0 Access Token Enforcement with Corporate IdP",
        "url": "https://docs.mulesoft.com/access-management/external-identity#managing-users-external-identity"
      },
      "architectureGuide": {
        "title": "IETF RFC 6749 — The OAuth 2.0 Authorization Framework",
        "url": "https://datatracker.ietf.org/doc/html/rfc6749"
      },
      "arc720": {
        "lesson": "Lesson 6 — NFRs at the API-invocation level",
        "anchor": "ARC720-Course-Content.md#6-nfrs-at-the-api-invocation-level"
      }
    }
  },
  {
    "id": "q-041",
    "number": 41,
    "title": "Monitoring Analyzing - Which Anypoint Monitoring artifact lets architects build",
    "domain": "Monitoring Analyzing",
    "topics": [
      "Anypoint Monitoring"
    ],
    "prompt": "Which Anypoint Monitoring artifact lets architects build customized views combining latency, throughput, and error metrics across multiple APIs?",
    "options": [
      {
        "letter": "A",
        "text": "Custom dashboards"
      },
      {
        "letter": "B",
        "text": "Static images in Exchange"
      },
      {
        "letter": "C",
        "text": "Visualizer overlays"
      },
      {
        "letter": "D",
        "text": "RAML annotations"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Anypoint Monitoring supports custom dashboards composed of metric charts (latency, throughput, errors) and supports per-app and cross-app views. Visualizer focuses on topology, not metric composition.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Custom dashboards"
      },
      "B": {
        "type": "Incorrect",
        "text": "Exchange catalogs assets; it does not host runtime dashboards."
      },
      "C": {
        "type": "Incorrect",
        "text": "Visualizer overlays show topology and dependencies."
      },
      "D": {
        "type": "Incorrect",
        "text": "RAML annotations describe APIs at design time."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring Dashboards — Custom Dashboards for Latency, Throughput, and Errors",
        "url": "https://docs.mulesoft.com/monitoring/app-dashboards#overview-charts"
      },
      "architectureGuide": {
        "title": "Configuring Alerts and Telemetry in Anypoint Monitoring",
        "url": "https://docs.mulesoft.com/monitoring/alerts#threshold"
      },
      "arc720": {
        "lesson": "Lesson 11 — Application network behavior",
        "anchor": "ARC720-Course-Content.md#11-application-network-behavior"
      }
    }
  },
  {
    "id": "q-042",
    "number": 42,
    "title": "Deployment Options - Which scenario is the strongest case for",
    "domain": "Deployment Options",
    "topics": [
      "Runtime Fabric",
      "Hybrid Deployment"
    ],
    "prompt": "Which scenario is the strongest case for deploying to Runtime Fabric instead of CloudHub?",
    "options": [
      {
        "letter": "A",
        "text": "Need MuleSoft to manage all infrastructure"
      },
      {
        "letter": "B",
        "text": "Need to run Mule runtimes on customer-managed infrastructure to meet data-residency or networking requirements"
      },
      {
        "letter": "C",
        "text": "Need only a single low-traffic API"
      },
      {
        "letter": "D",
        "text": "Need to use Anypoint MQ"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Runtime Fabric is the right pick when customers must run Mule on their own infrastructure for data residency, network locality, or strict on-prem connectivity reasons. Customers wanting MuleSoft to operate everything pick CloudHub.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Full management is CloudHub's value proposition."
      },
      "B": {
        "type": "Correct",
        "text": "Need to run Mule runtimes on customer-managed infrastructure to meet data-residency or networking requirements"
      },
      "C": {
        "type": "Incorrect",
        "text": "RTF has more operational overhead and is overkill for a single small API."
      },
      "D": {
        "type": "Incorrect",
        "text": "Anypoint MQ works with any deployment target."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Runtime Fabric (RTF) — Customer-Managed Kubernetes & Data Residency",
        "url": "https://docs.mulesoft.com/runtime-fabric/latest/#how-application-deployments-work-in-anypoint-runtime-fabric"
      },
      "architectureGuide": {
        "title": "Runtime Fabric Custom Ingress & Edge Policies",
        "url": "https://docs.mulesoft.com/runtime-fabric/latest/custom-ingress-configuration#how-ingress-resources-templates-work-in-runtime-fabric"
      },
      "arc720": {
        "lesson": "Lesson 4 — Organizational and platform foundations",
        "anchor": "ARC720-Course-Content.md#4-organizational-and-platform-foundations"
      }
    }
  },
  {
    "id": "q-043",
    "number": 43,
    "title": "Api Implementation Design - A longrunning batch process consumes far more",
    "domain": "Api Implementation Design",
    "topics": [
      "Reliability Patterns",
      "Worker Sizing"
    ],
    "prompt": "A long-running batch process consumes far more memory than concurrent traffic suggests. What is the most likely root cause to investigate?",
    "options": [
      {
        "letter": "A",
        "text": "Insufficient JWT validation"
      },
      {
        "letter": "B",
        "text": "Streaming and batch settings retaining records or full payloads in memory"
      },
      {
        "letter": "C",
        "text": "Too few API contracts in API Manager"
      },
      {
        "letter": "D",
        "text": "Wrong RAML version"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Long-running batch jobs that grow in memory typically have streaming disabled, batch block sizes too large, or transformations that materialize the full payload (e.g., reading the entire stream). Investigating streaming, batch block size, and DataWeave operations is the right path.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "JWT settings affect auth, not batch memory."
      },
      "B": {
        "type": "Correct",
        "text": "Streaming and batch settings retaining records or full payloads in memory"
      },
      "C": {
        "type": "Incorrect",
        "text": "API contracts govern access, not batch memory consumption."
      },
      "D": {
        "type": "Incorrect",
        "text": "RAML versioning has no runtime memory effect."
      }
    },
    "references": {
      "primary": {
        "title": "Monitoring JVM Heap, Garbage Collection & Batch Streaming Memory Troubleshooting",
        "url": "https://docs.mulesoft.com/monitoring/app-dashboards#jvm-charts"
      },
      "architectureGuide": {
        "title": "CloudHub Architecture — Worker Sizing and Heap Memory Allocation",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#cloudhub-workers"
      },
      "arc720": {
        "lesson": "Lesson 10 — Production",
        "anchor": "ARC720-Course-Content.md#10-production"
      }
    }
  },
  {
    "id": "q-044",
    "number": 44,
    "title": "Designing Sharing Apis - Which is the MOST appropriate way to",
    "domain": "Designing Sharing Apis",
    "topics": [
      "Exchange Asset Management"
    ],
    "prompt": "Which is the MOST appropriate way to publish a reusable connector for an internal system across many MuleSoft developers?",
    "options": [
      {
        "letter": "A",
        "text": "Email a JAR file to teams"
      },
      {
        "letter": "B",
        "text": "Publish a Mule connector to Exchange so it is discoverable and versioned"
      },
      {
        "letter": "C",
        "text": "Inline the connector code in every project"
      },
      {
        "letter": "D",
        "text": "Use Object Store v2 to share the binary"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Reusable connectors should be published to Exchange so other teams discover and consume them via Maven coordinates with proper versioning. Email/JAR sharing and inline copies destroy reuse, traceability, and version control.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Email distribution defeats versioning and discoverability."
      },
      "B": {
        "type": "Correct",
        "text": "Publish a Mule connector to Exchange so it is discoverable and versioned"
      },
      "C": {
        "type": "Incorrect",
        "text": "Inlining duplicates code and breaks upgrade paths."
      },
      "D": {
        "type": "Incorrect",
        "text": "Object Store v2 is for runtime key/value data, not connector binaries."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Exchange — Publishing and Sharing Reusable Connectors Across Developers",
        "url": "https://docs.mulesoft.com/exchange/#view-assets-by-business-group"
      },
      "architectureGuide": {
        "title": "Developing Custom Policies and Connectors in Mule 4",
        "url": "https://docs.mulesoft.com/api-manager/2.x/custom-policy-getting-started#setting-up-a-project-with-the-archetype"
      },
      "arc720": {
        "lesson": "Lesson 5 — API identification, publication, and reuse",
        "anchor": "ARC720-Course-Content.md#5-api-identification-publication-and-reuse"
      }
    }
  },
  {
    "id": "q-045",
    "number": 45,
    "title": "Monitoring Analyzing - Which capability is provided by Anypoint Visualizer",
    "domain": "Monitoring Analyzing",
    "topics": [
      "Visualizer",
      "Anypoint Monitoring"
    ],
    "prompt": "Which capability is provided by Anypoint Visualizer (and NOT by Anypoint Monitoring)?",
    "options": [
      {
        "letter": "A",
        "text": "Time-series charts of latency and throughput"
      },
      {
        "letter": "B",
        "text": "Real-time, dependency-aware diagram of the application network"
      },
      {
        "letter": "C",
        "text": "Centralized log search"
      },
      {
        "letter": "D",
        "text": "Alerting on metric thresholds"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Visualizer's distinctive feature is the live, dependency-aware diagram of APIs, applications, and their inter-call relationships. Anypoint Monitoring covers time-series metrics, dashboards, log search, and alerting.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Time-series charts are Monitoring's territory."
      },
      "B": {
        "type": "Correct",
        "text": "Real-time, dependency-aware diagram of the application network"
      },
      "C": {
        "type": "Incorrect",
        "text": "Centralized log search is in Monitoring."
      },
      "D": {
        "type": "Incorrect",
        "text": "Alerting is configured in Monitoring."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Visualizer — Real-Time Dependency-Aware Diagram of the Application Network",
        "url": "https://docs.mulesoft.com/visualizer/#visualizer-control-plane"
      },
      "architectureGuide": {
        "title": "Anypoint Monitoring Dashboards & Telemetry Integration",
        "url": "https://docs.mulesoft.com/monitoring/app-dashboards#overview-charts"
      },
      "arc720": {
        "lesson": "Lesson 11 — Application network behavior",
        "anchor": "ARC720-Course-Content.md#11-application-network-behavior"
      }
    }
  },
  {
    "id": "q-046",
    "number": 46,
    "title": "Application Network Basics - Which is the recommended placement of business",
    "domain": "Application Network Basics",
    "topics": [
      "Three Layer Architecture"
    ],
    "prompt": "Which is the recommended placement of business logic in API-led connectivity?",
    "options": [
      {
        "letter": "A",
        "text": "Experience APIs"
      },
      {
        "letter": "B",
        "text": "Process APIs"
      },
      {
        "letter": "C",
        "text": "System APIs"
      },
      {
        "letter": "D",
        "text": "Anypoint MQ"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Business logic â orchestration, validation across systems, transformation between business concepts â belongs in Process APIs so it can be reused across channels. Experience APIs adapt to channels; System APIs unlock systems of record.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Experience APIs adapt for one channel and should stay thin."
      },
      "B": {
        "type": "Correct",
        "text": "Process APIs"
      },
      "C": {
        "type": "Incorrect",
        "text": "System APIs should remain consumer-agnostic and avoid business logic."
      },
      "D": {
        "type": "Incorrect",
        "text": "Anypoint MQ is messaging infrastructure, not a business-logic layer."
      }
    },
    "references": {
      "primary": {
        "title": "API-Led Connectivity — Business Logic Placement in Process APIs",
        "url": "https://docs.mulesoft.com/general/api-led-develop#step-3-2-understand-the-scaffolded-structure"
      },
      "architectureGuide": {
        "title": "Martin Fowler — Bounded Context & Domain Business Orchestration",
        "url": "https://martinfowler.com/bliki/BoundedContext.html"
      },
      "arc720": {
        "lesson": "Lesson 5 — API identification, publication, and reuse",
        "anchor": "ARC720-Course-Content.md#5-api-identification-publication-and-reuse"
      }
    }
  },
  {
    "id": "q-047",
    "number": 47,
    "title": "Monitoring Analyzing - Which feature provides automatic notification when CloudHub",
    "domain": "Monitoring Analyzing",
    "topics": [
      "Anypoint Monitoring"
    ],
    "prompt": "Which feature provides automatic notification when CloudHub workers crash, scale, or breach configured thresholds?",
    "options": [
      {
        "letter": "A",
        "text": "Visualizer"
      },
      {
        "letter": "B",
        "text": "Anypoint Monitoring alerts"
      },
      {
        "letter": "C",
        "text": "API Manager contracts"
      },
      {
        "letter": "D",
        "text": "Object Store v2 TTL"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Anypoint Monitoring (and Runtime Manager built-in alerts) lets architects define thresholds on CPU, memory, response time, and event counts and notify teams via email or webhook. Visualizer renders topology, contracts manage access, Object Store TTL manages key expiry.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Visualizer is purely a graph view, not an alerting system."
      },
      "B": {
        "type": "Correct",
        "text": "Anypoint Monitoring alerts"
      },
      "C": {
        "type": "Incorrect",
        "text": "API contracts grant access; they do not alert on operational events."
      },
      "D": {
        "type": "Incorrect",
        "text": "Object Store TTL governs cached value expiry."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring — Configuring Operational Alerts for Worker Crashes and Thresholds",
        "url": "https://docs.mulesoft.com/monitoring/alerts#threshold"
      },
      "architectureGuide": {
        "title": "Using Built-in Mule App Dashboards for Telemetry and Metric Trends",
        "url": "https://docs.mulesoft.com/monitoring/app-dashboards#overview-charts"
      },
      "arc720": {
        "lesson": "Lesson 11 — Application network behavior",
        "anchor": "ARC720-Course-Content.md#11-application-network-behavior"
      }
    }
  },
  {
    "id": "q-048",
    "number": 48,
    "title": "Api Policies - Which Anypoint capability lets organizations build custom",
    "domain": "Api Policies",
    "topics": [
      "Custom Policies"
    ],
    "prompt": "Which Anypoint capability lets organizations build custom API policies in Java/XML when pre-built ones are insufficient?",
    "options": [
      {
        "letter": "A",
        "text": "Custom policies via the Policy Development Kit (PDK) or YAML/XML templates"
      },
      {
        "letter": "B",
        "text": "Object Store v2"
      },
      {
        "letter": "C",
        "text": "Exchange templates"
      },
      {
        "letter": "D",
        "text": "MUnit suites"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Custom policies are authored as YAML/XML templates and Mule extensions; modern Mule offers the Policy Development Kit for richer custom policies. They are uploaded to API Manager and applied like pre-built policies.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Custom policies via the Policy Development Kit (PDK) or YAML/XML templates"
      },
      "B": {
        "type": "Incorrect",
        "text": "Object Store v2 is runtime data storage, not a policy framework."
      },
      "C": {
        "type": "Incorrect",
        "text": "Exchange templates accelerate project starts; they are not policies."
      },
      "D": {
        "type": "Incorrect",
        "text": "MUnit is for testing, not enforcement."
      }
    },
    "references": {
      "primary": {
        "title": "Developing and Packaging Custom Policies for Mule 4 in API Manager",
        "url": "https://docs.mulesoft.com/api-manager/2.x/custom-policy-getting-started#setting-up-a-project-with-the-archetype"
      },
      "architectureGuide": {
        "title": "Automated Policy Enforcement Across Managed APIs",
        "url": "https://docs.mulesoft.com/api-manager/2.x/automated-policy-apply#apply-an-automated-policy-in-connected-mode"
      },
      "arc720": {
        "lesson": "Lesson 6 — NFRs at the API-invocation level",
        "anchor": "ARC720-Course-Content.md#6-nfrs-at-the-api-invocation-level"
      }
    }
  },
  {
    "id": "q-049",
    "number": 49,
    "title": "Non Functional Requirements - Which CloudHub configuration property controls whether outbound",
    "domain": "Non Functional Requirements",
    "topics": [
      "Cloudhub Deployment",
      "Reliability Patterns"
    ],
    "prompt": "Which CloudHub configuration property controls whether outbound traffic from workers can use a static, allow-listable IP address?",
    "options": [
      {
        "letter": "A",
        "text": "Persistent Queues"
      },
      {
        "letter": "B",
        "text": "Static IPs (per region)"
      },
      {
        "letter": "C",
        "text": "Object Store v2"
      },
      {
        "letter": "D",
        "text": "Worker autoscaling"
      }
    ],
    "correctAnswer": "B",
    "explanation": "CloudHub Static IPs assign one or more fixed egress IPs per worker so partners or backends can allow-list them. Persistent Queues provide message durability; Object Store stores state; autoscaling adjusts worker count.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Persistent Queues affect VM-queue durability, not IP addressing."
      },
      "B": {
        "type": "Correct",
        "text": "Static IPs (per region)"
      },
      "C": {
        "type": "Incorrect",
        "text": "Object Store v2 is unrelated to networking egress."
      },
      "D": {
        "type": "Incorrect",
        "text": "Worker autoscaling controls capacity, not source IP allow-listing."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture — Static IP Allocation and Outbound Allow-Listing",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#cloudhub-workers"
      },
      "architectureGuide": {
        "title": "CloudHub Dedicated Load Balancer (DLB) Static IPs",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-dedicated-load-balancer#static-ip-addresses"
      },
      "arc720": {
        "lesson": "Lesson 8 — Effective API implementations",
        "anchor": "ARC720-Course-Content.md#8-effective-api-implementations"
      }
    }
  },
  {
    "id": "q-050",
    "number": 50,
    "title": "Non Functional Requirements - What is the primary goal of an",
    "domain": "Non Functional Requirements",
    "topics": [
      "Cloudhub Deployment",
      "Reliability Patterns"
    ],
    "prompt": "What is the primary goal of an Anypoint VPC?",
    "options": [
      {
        "letter": "A",
        "text": "Provide isolated networking for CloudHub workers, often connected to customer networks via VPN or peering"
      },
      {
        "letter": "B",
        "text": "Replace Anypoint MQ"
      },
      {
        "letter": "C",
        "text": "Replace Runtime Fabric"
      },
      {
        "letter": "D",
        "text": "Replace API Manager"
      }
    ],
    "correctAnswer": "A",
    "explanation": "An Anypoint VPC is a private virtual network for CloudHub workers, allowing isolation, custom CIDR ranges, IP allow-listing, and connectivity to customer networks via VPN tunnels or VPC peering. It does not replace MQ, RTF, or API Manager.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Provide isolated networking for CloudHub workers, often connected to customer networks via VPN or peering"
      },
      "B": {
        "type": "Incorrect",
        "text": "Anypoint MQ is messaging; VPCs are networking."
      },
      "C": {
        "type": "Incorrect",
        "text": "RTF is a different runtime hosting option."
      },
      "D": {
        "type": "Incorrect",
        "text": "API Manager governs APIs; it is not networking."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Virtual Private Cloud (VPC) — Private Network Isolation & VPN/Peering Connectivity",
        "url": "https://docs.mulesoft.com/cloudhub/vpc-connectivity-methods-concept#vpc-peering"
      },
      "architectureGuide": {
        "title": "CloudHub Dedicated Load Balancer (DLB) Integration in VPCs",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-dedicated-load-balancer#create-and-configure-a-dedicated-load-balancer"
      },
      "arc720": {
        "lesson": "Lesson 8 — Effective API implementations",
        "anchor": "ARC720-Course-Content.md#8-effective-api-implementations"
      }
    }
  },
  {
    "id": "q-051",
    "number": 51,
    "title": "Api Policies - An architect is asked to enforce that",
    "domain": "Api Policies",
    "topics": [
      "Mtls Policy"
    ],
    "prompt": "An architect is asked to enforce that ONLY traffic from a specific upstream API gateway can reach a downstream Process API. Which approach is best?",
    "options": [
      {
        "letter": "A",
        "text": "Allow public traffic and audit logs after the fact"
      },
      {
        "letter": "B",
        "text": "Combine an IP allow-list policy with mutual TLS so only the gateway's certificate and IPs can connect"
      },
      {
        "letter": "C",
        "text": "Disable all policies on the Process API"
      },
      {
        "letter": "D",
        "text": "Change the API to a Mule application without governance"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Combining IP allow-listing with mutual TLS enforces both network-level and certificate-level identity for the upstream caller. This is the standard layered control for zero-trust integration between API tiers.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Audit-after-the-fact does not prevent unwanted access."
      },
      "B": {
        "type": "Correct",
        "text": "Combine an IP allow-list policy with mutual TLS so only the gateway's certificate and IPs can connect"
      },
      "C": {
        "type": "Incorrect",
        "text": "Disabling policies removes the only enforcement layer."
      },
      "D": {
        "type": "Incorrect",
        "text": "Removing governance is the opposite of architectural best practice."
      }
    },
    "references": {
      "primary": {
        "title": "IP Allowlist Policy & Mutual TLS (mTLS) Defense-in-Depth for Internal APIs",
        "url": "https://docs.mulesoft.com/api-manager/2.x/ip-allowlist#how-this-policy-works"
      },
      "architectureGuide": {
        "title": "CloudHub Dedicated Load Balancer (DLB) SSL/TLS & Mutual Authentication",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-dedicated-load-balancer#create-and-configure-a-dedicated-load-balancer"
      },
      "arc720": {
        "lesson": "Lesson 6 — NFRs at the API-invocation level",
        "anchor": "ARC720-Course-Content.md#6-nfrs-at-the-api-invocation-level"
      }
    }
  },
  {
    "id": "q-052",
    "number": 52,
    "title": "Api Implementation Design - Which is the BEST place to handle",
    "domain": "Api Implementation Design",
    "topics": [
      "Three Layer Architecture"
    ],
    "prompt": "Which is the BEST place to handle field-level transformation of payloads in a Process API?",
    "options": [
      {
        "letter": "A",
        "text": "Inside the System API to save a step"
      },
      {
        "letter": "B",
        "text": "In Apex on Salesforce"
      },
      {
        "letter": "C",
        "text": "Using the Transform Message processor with DataWeave inside the Process API flow"
      },
      {
        "letter": "D",
        "text": "By manually editing each message body in the consumer"
      }
    ],
    "correctAnswer": "C",
    "explanation": "DataWeave (used in the Transform Message processor) is the canonical Mule transformation tool. Putting transformation in the System API leaks consumer concerns; doing it in consumers duplicates logic; Apex is unrelated to a MuleSoft Process API.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "System APIs should remain consumer-agnostic."
      },
      "B": {
        "type": "Incorrect",
        "text": "Apex runs in Salesforce, not in MuleSoft Process APIs."
      },
      "C": {
        "type": "Correct",
        "text": "Using the Transform Message processor with DataWeave inside the Process API flow"
      },
      "D": {
        "type": "Incorrect",
        "text": "Per-consumer transformation duplicates logic and undermines reuse."
      }
    },
    "references": {
      "primary": {
        "title": "Mule Runtime — DataWeave Transformations & Transform Message Component",
        "url": "https://docs.mulesoft.com/general/api-led-develop#step-3-3-implement-the-hello-world-logic"
      },
      "architectureGuide": {
        "title": "DataWeave Language Reference & Transformation Capabilities",
        "url": "https://docs.mulesoft.com/general/api-led-develop#developer-deep-dive"
      },
      "arc720": {
        "lesson": "Lesson 8 — Effective API implementations",
        "anchor": "ARC720-Course-Content.md#8-effective-api-implementations"
      }
    }
  },
  {
    "id": "q-053",
    "number": 53,
    "title": "Deploying Managing Apis - Which strategy best supports rolling out CloudHub",
    "domain": "Deploying Managing Apis",
    "topics": [
      "Cloudhub Deployment",
      "Cicd Maven"
    ],
    "prompt": "Which strategy best supports rolling out CloudHub deployments with minimal downtime when a new app version is released?",
    "options": [
      {
        "letter": "A",
        "text": "Stop the old app, then deploy the new version"
      },
      {
        "letter": "B",
        "text": "Use CloudHub deployment with zero-downtime (rolling) restart enabled"
      },
      {
        "letter": "C",
        "text": "Re-create the application in a new business group"
      },
      {
        "letter": "D",
        "text": "Always recreate the worker pool from scratch"
      }
    ],
    "correctAnswer": "B",
    "explanation": "CloudHub supports zero-downtime deployment by rolling new workers in alongside old ones, then cutting traffic over once the new workers are healthy. Stopping first or recreating from scratch causes outages and unnecessary work.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Stop-then-deploy creates a deliberate outage window."
      },
      "B": {
        "type": "Correct",
        "text": "Use CloudHub deployment with zero-downtime (rolling) restart enabled"
      },
      "C": {
        "type": "Incorrect",
        "text": "Recreating across business groups changes governance and entitlements."
      },
      "D": {
        "type": "Incorrect",
        "text": "Recreating workers from scratch is unnecessary and disruptive."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture — Zero-Downtime Rolling Deployment Updates",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#zero-downtime-updates"
      },
      "architectureGuide": {
        "title": "CloudHub Fabric — Multi-Worker High Availability",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric#worker-scale-out"
      },
      "arc720": {
        "lesson": "Lesson 10 — Production",
        "anchor": "ARC720-Course-Content.md#10-production"
      }
    }
  },
  {
    "id": "q-054",
    "number": 54,
    "title": "Non Functional Requirements - What is the impact of selecting a",
    "domain": "Non Functional Requirements",
    "topics": [
      "Worker Sizing",
      "Vcores Capacity"
    ],
    "prompt": "What is the impact of selecting a smaller worker size (e.g., 0.1 vCore) versus a larger size (e.g., 1 vCore) for a CloudHub app?",
    "options": [
      {
        "letter": "A",
        "text": "No measurable impact"
      },
      {
        "letter": "B",
        "text": "Smaller workers reduce per-worker memory and concurrency limits but cost less per worker"
      },
      {
        "letter": "C",
        "text": "Smaller workers automatically scale to large size on demand"
      },
      {
        "letter": "D",
        "text": "Worker size affects only CloudHub.io URL routing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Smaller workers have less memory and lower concurrency capacity but cost less per worker, so they are well suited to low-traffic apps. Workers do not automatically resize at runtime; horizontal scaling adds more workers of the same size.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Capacity and pricing both differ across sizes."
      },
      "B": {
        "type": "Correct",
        "text": "Smaller workers reduce per-worker memory and concurrency limits but cost less per worker"
      },
      "C": {
        "type": "Incorrect",
        "text": "CloudHub does not vertically resize a running worker."
      },
      "D": {
        "type": "Incorrect",
        "text": "URL routing is independent of worker size."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture — Worker Sizing (vCore Memory & Concurrency Trade-offs)",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#cloudhub-workers"
      },
      "architectureGuide": {
        "title": "CloudHub Fabric & Worker Scale-Out Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric#worker-scale-out"
      },
      "arc720": {
        "lesson": "Lesson 10 — Production",
        "anchor": "ARC720-Course-Content.md#10-production"
      }
    }
  },
  {
    "id": "q-055",
    "number": 55,
    "title": "Api Policies - Which control in API Manager records the",
    "domain": "Api Policies",
    "topics": [
      "Api Contracts Sla Tiers"
    ],
    "prompt": "Which control in API Manager records the agreement that gives a specific client app access to a specific API instance under a specific SLA tier?",
    "options": [
      {
        "letter": "A",
        "text": "API contract"
      },
      {
        "letter": "B",
        "text": "API alias"
      },
      {
        "letter": "C",
        "text": "API specification"
      },
      {
        "letter": "D",
        "text": "Mule policy"
      }
    ],
    "correctAnswer": "A",
    "explanation": "An API contract is the bound agreement between a client application and an API instance, including the SLA tier. Approval may be automatic or manual depending on the API configuration.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "API contract"
      },
      "B": {
        "type": "Incorrect",
        "text": "API alias is not the access-binding artifact."
      },
      "C": {
        "type": "Incorrect",
        "text": "The specification defines the API contract surface, not consumer agreements."
      },
      "D": {
        "type": "Incorrect",
        "text": "Policies enforce non-functional rules; they do not represent client agreements."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Managing API Contracts and Binding Client Applications to SLA Tiers",
        "url": "https://docs.mulesoft.com/api-manager/2.x/defining-sla-tiers#managing-applications"
      },
      "architectureGuide": {
        "title": "Defining SLA Tiers in API Manager",
        "url": "https://docs.mulesoft.com/api-manager/2.x/defining-sla-tiers#defining-a-tier"
      },
      "arc720": {
        "lesson": "Lesson 6 — NFRs at the API-invocation level",
        "anchor": "ARC720-Course-Content.md#6-nfrs-at-the-api-invocation-level"
      }
    }
  },
  {
    "id": "q-056",
    "number": 56,
    "title": "Designing Sharing Apis - Which artifact lets developers consume a published",
    "domain": "Designing Sharing Apis",
    "topics": [
      "Exchange Asset Management",
      "Cicd Maven"
    ],
    "prompt": "Which artifact lets developers consume a published RAML API specification automatically in their Mule project?",
    "options": [
      {
        "letter": "A",
        "text": "A copy/pasted RAML file"
      },
      {
        "letter": "B",
        "text": "Exchange asset Maven dependency referenced in the project's POM"
      },
      {
        "letter": "C",
        "text": "Anypoint MQ subscription"
      },
      {
        "letter": "D",
        "text": "Object Store key reference"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Published RAML assets are available as Maven dependencies via Exchange, so projects reference them in pom.xml and pull updates centrally. Copy/paste creates drift; MQ and Object Store are unrelated to spec consumption.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Copy/paste loses the central source of truth."
      },
      "B": {
        "type": "Correct",
        "text": "Exchange asset Maven dependency referenced in the project's POM"
      },
      "C": {
        "type": "Incorrect",
        "text": "Anypoint MQ is messaging."
      },
      "D": {
        "type": "Incorrect",
        "text": "Object Store is runtime key/value storage."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Exchange — Consuming Published API Specifications via Maven POM Dependency",
        "url": "https://docs.mulesoft.com/exchange/#view-assets-by-business-group"
      },
      "architectureGuide": {
        "title": "APIkit Overview — Spec-Driven Mule Implementation",
        "url": "https://docs.mulesoft.com/apikit/latest/#features"
      },
      "arc720": {
        "lesson": "Lesson 7 — Effective APIs",
        "anchor": "ARC720-Course-Content.md#7-effective-apis"
      }
    }
  },
  {
    "id": "q-057",
    "number": 57,
    "title": "Api Policies - Which Anypoint Platform option enforces API policies",
    "domain": "Api Policies",
    "topics": [
      "Custom Policies",
      "Rate Limiting Throttling"
    ],
    "prompt": "Which Anypoint Platform option enforces API policies at the gateway tier WITHOUT requiring code changes inside the Mule application?",
    "options": [
      {
        "letter": "A",
        "text": "Pre-built policies configured in API Manager and downloaded by the runtime gateway"
      },
      {
        "letter": "B",
        "text": "Custom Java code in every flow"
      },
      {
        "letter": "C",
        "text": "Manual review of every request in Postman"
      },
      {
        "letter": "D",
        "text": "RAML validation at design time"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pre-built API Manager policies are downloaded by the Mule API gateway runtime and enforced before traffic hits the implementation flow, with zero implementation code change. Custom flow code is brittle and duplicative; manual review is not enforcement; RAML validation is design-time only.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Pre-built policies configured in API Manager and downloaded by the runtime gateway"
      },
      "B": {
        "type": "Incorrect",
        "text": "Per-flow code duplicates policy logic."
      },
      "C": {
        "type": "Incorrect",
        "text": "Manual review does not enforce anything at runtime."
      },
      "D": {
        "type": "Incorrect",
        "text": "RAML validation runs at design time."
      }
    },
    "references": {
      "primary": {
        "title": "API Gateway — Pre-Built Policy Enforcement at Gateway Tier Without Application Code Changes",
        "url": "https://docs.mulesoft.com/api-manager/2.x/api-auto-discovery-new-concept#proxy-endpoint-vs-basic-endpoint"
      },
      "architectureGuide": {
        "title": "Applying Automated Policies in API Manager Across Environments",
        "url": "https://docs.mulesoft.com/api-manager/2.x/automated-policy-apply#apply-an-automated-policy-in-connected-mode"
      },
      "arc720": {
        "lesson": "Lesson 6 — NFRs at the API-invocation level",
        "anchor": "ARC720-Course-Content.md#6-nfrs-at-the-api-invocation-level"
      }
    }
  },
  {
    "id": "q-058",
    "number": 58,
    "title": "Org Platform Foundations - What is the correct interpretation of an",
    "domain": "Org Platform Foundations",
    "topics": [
      "Business Groups Environments"
    ],
    "prompt": "What is the correct interpretation of an API's 'environment' in Anypoint Platform?",
    "options": [
      {
        "letter": "A",
        "text": "A separate billing org"
      },
      {
        "letter": "B",
        "text": "A deployment target boundary (e.g., Sandbox, Production) inside a business group, with isolated apps and API instances"
      },
      {
        "letter": "C",
        "text": "A RAML annotation only"
      },
      {
        "letter": "D",
        "text": "A type of policy"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Environments (Sandbox, Production, plus optional custom environments) are deployment boundaries inside a business group. Apps, API instances, contracts, and entitlements are scoped per environment, enabling promotion across SDLC stages.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Billing happens at the master org / business group level, not per environment."
      },
      "B": {
        "type": "Correct",
        "text": "A deployment target boundary (e.g., Sandbox, Production) inside a business group, with isolated apps and API instances"
      },
      "C": {
        "type": "Incorrect",
        "text": "Environments are runtime boundaries, not RAML annotations."
      },
      "D": {
        "type": "Incorrect",
        "text": "Policies are applied within environments; environments are not policies."
      }
    },
    "references": {
      "primary": {
        "title": "Access Management — Environment Types (Sandbox, Production) and Deployment Boundaries",
        "url": "https://docs.mulesoft.com/access-management/environments#types-of-environments"
      },
      "architectureGuide": {
        "title": "Managing Environments for Multi-Tier Delivery in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/environments#types-of-environments"
      },
      "arc720": {
        "lesson": "Lesson 4 — Organizational and platform foundations",
        "anchor": "ARC720-Course-Content.md#4-organizational-and-platform-foundations"
      }
    }
  },
  {
    "id": "q-059",
    "number": 59,
    "title": "Monitoring Analyzing - Which Anypoint feature is most useful for",
    "domain": "Monitoring Analyzing",
    "topics": [
      "Visualizer"
    ],
    "prompt": "Which Anypoint feature is most useful for visually identifying Process APIs that depend on a specific System API before changing the System API?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Visualizer"
      },
      {
        "letter": "B",
        "text": "Anypoint MQ"
      },
      {
        "letter": "C",
        "text": "Object Store v2"
      },
      {
        "letter": "D",
        "text": "MUnit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Visualizer renders runtime API call dependencies derived from auto-discovery and traffic data, making it ideal for impact analysis before changing a System API. MQ, Object Store, and MUnit do not show inter-API dependency graphs.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Anypoint Visualizer"
      },
      "B": {
        "type": "Incorrect",
        "text": "MQ is messaging infrastructure, not visibility."
      },
      "C": {
        "type": "Incorrect",
        "text": "Object Store is runtime data, not topology."
      },
      "D": {
        "type": "Incorrect",
        "text": "MUnit tests behavior; it does not visualize dependencies."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Visualizer — Visual Impact Analysis of API Dependencies Before Changes",
        "url": "https://docs.mulesoft.com/visualizer/#visualizer-control-plane"
      },
      "architectureGuide": {
        "title": "Anypoint Monitoring Dashboards & Dependency Telemetry",
        "url": "https://docs.mulesoft.com/monitoring/app-dashboards#overview-charts"
      },
      "arc720": {
        "lesson": "Lesson 11 — Application network behavior",
        "anchor": "ARC720-Course-Content.md#11-application-network-behavior"
      }
    }
  },
  {
    "id": "q-060",
    "number": 60,
    "title": "Deploying Managing Apis - Which combination is recommended for a CICD",
    "domain": "Deploying Managing Apis",
    "topics": [
      "Cicd Maven",
      "Munit"
    ],
    "prompt": "Which combination is recommended for a CI/CD pipeline that builds, tests, and deploys Mule applications consistently across environments?",
    "options": [
      {
        "letter": "A",
        "text": "Mule Maven Plugin for build/deploy + MUnit for tests + Jenkins/Azure DevOps/GitHub Actions for orchestration"
      },
      {
        "letter": "B",
        "text": "Manual deploys via Anypoint Studio"
      },
      {
        "letter": "C",
        "text": "Postman as the only test tool"
      },
      {
        "letter": "D",
        "text": "Drag-and-drop deploys in Runtime Manager"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The recommended pipeline uses the Mule Maven Plugin (build, package, deploy), MUnit (unit/coverage testing), and a CI tool like Jenkins, Azure DevOps, or GitHub Actions to orchestrate per-environment promotion. Manual deploys are not repeatable.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Mule Maven Plugin for build/deploy + MUnit for tests + Jenkins/Azure DevOps/GitHub Actions for orchestration"
      },
      "B": {
        "type": "Incorrect",
        "text": "Manual deploys are not repeatable across SDLC environments."
      },
      "C": {
        "type": "Incorrect",
        "text": "Postman is a complement, not a replacement for Mule unit tests."
      },
      "D": {
        "type": "Incorrect",
        "text": "Drag-and-drop does not produce auditable, automated promotion."
      }
    },
    "references": {
      "primary": {
        "title": "Mule Maven Plugin (MMP) — Automated Build, Test (MUnit), and Deployment Pipeline",
        "url": "https://docs.mulesoft.com/mule-runtime/4.4/mmp-concept#deploy-goal"
      },
      "architectureGuide": {
        "title": "MUnit Testing Framework & Automated Quality Gates",
        "url": "https://docs.mulesoft.com/munit/latest/#test-coverage"
      },
      "arc720": {
        "lesson": "Lesson 10 — Production",
        "anchor": "ARC720-Course-Content.md#10-production"
      }
    }
  },
  {
    "id": "q-061",
    "number": 61,
    "title": "Non Functional Requirements - An architect must support 200 requests per",
    "domain": "Non Functional Requirements",
    "topics": [
      "Vcores Capacity",
      "Worker Sizing"
    ],
    "prompt": "An architect must support 200 requests per second peak with average response time under 250 ms on CloudHub. What is the FIRST step in capacity planning?",
    "options": [
      {
        "letter": "A",
        "text": "Buy the largest worker size available"
      },
      {
        "letter": "B",
        "text": "Estimate per-worker concurrency, response time, and use load tests to size workers and worker count"
      },
      {
        "letter": "C",
        "text": "Use only the Shared Load Balancer"
      },
      {
        "letter": "D",
        "text": "Use only Persistent Queues"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Capacity planning starts from realistic per-worker concurrency and response-time measurements, typically via load testing, then derives worker count and size to meet the throughput and SLA targets. Buying max size blindly is wasteful and unproven.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Bigger workers without measurement may still under- or over-provision."
      },
      "B": {
        "type": "Correct",
        "text": "Estimate per-worker concurrency, response time, and use load tests to size workers and worker count"
      },
      "C": {
        "type": "Incorrect",
        "text": "SLB choice is a separate networking decision."
      },
      "D": {
        "type": "Incorrect",
        "text": "Persistent Queues address durability, not throughput sizing."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Worker Architecture — Sizing Concurrency and Capacity via Load Testing",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#cloudhub-workers"
      },
      "architectureGuide": {
        "title": "CloudHub Fabric & Worker Scale-Out Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric#worker-scale-out"
      },
      "arc720": {
        "lesson": "Lesson 10 — Production",
        "anchor": "ARC720-Course-Content.md#10-production"
      }
    }
  },
  {
    "id": "q-062",
    "number": 62,
    "title": "Api Implementation Design - Which Mule capability enables transactional reliability for",
    "domain": "Api Implementation Design",
    "topics": [
      "Reliability Patterns"
    ],
    "prompt": "Which Mule capability enables transactional reliability for a flow that reads from a JMS queue, writes to a database, and acknowledges the JMS message?",
    "options": [
      {
        "letter": "A",
        "text": "A non-transactional flow with retries only"
      },
      {
        "letter": "B",
        "text": "A transactional scope coordinating JMS and JDBC transactions"
      },
      {
        "letter": "C",
        "text": "Only logging"
      },
      {
        "letter": "D",
        "text": "An API contract"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Mule supports transactional scopes that coordinate JMS and JDBC participants so the database write and JMS acknowledgement either both succeed or both fail (XA when distributed). Retry-only patterns risk duplicates without atomicity.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Retries alone can cause duplicate writes or lost acks."
      },
      "B": {
        "type": "Correct",
        "text": "A transactional scope coordinating JMS and JDBC transactions"
      },
      "C": {
        "type": "Incorrect",
        "text": "Logging records but does not coordinate atomicity."
      },
      "D": {
        "type": "Incorrect",
        "text": "API contracts are governance, not transactional control."
      }
    },
    "references": {
      "primary": {
        "title": "Transaction Management — Coordinating JMS and JDBC Transactions (XA) in Mule 4",
        "url": "https://docs.mulesoft.com/mule-runtime/4.4/transaction-management#configuring-a-transaction-in-a-try-scope"
      },
      "architectureGuide": {
        "title": "XA Transactions and Bitronix Transaction Manager in Mule 4",
        "url": "https://docs.mulesoft.com/mule-runtime/4.4/xa-transactions#configuring-a-try-scope-to-use-xa-transactions"
      },
      "arc720": {
        "lesson": "Lesson 8 — Effective API implementations",
        "anchor": "ARC720-Course-Content.md#8-effective-api-implementations"
      }
    }
  },
  {
    "id": "q-063",
    "number": 63,
    "title": "Non Functional Requirements - Which architectural pattern best protects a downstream",
    "domain": "Non Functional Requirements",
    "topics": [
      "Anypoint Mq",
      "Reliability Patterns"
    ],
    "prompt": "Which architectural pattern best protects a downstream slow legacy system from being overwhelmed by bursty inbound API traffic?",
    "options": [
      {
        "letter": "A",
        "text": "Direct synchronous pass-through"
      },
      {
        "letter": "B",
        "text": "Anypoint MQ as a buffer between the API and a worker that drains at the legacy system's safe rate"
      },
      {
        "letter": "C",
        "text": "Disable all policies"
      },
      {
        "letter": "D",
        "text": "Increase the legacy system's vCore allocation"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Asynchronous queueing with Anypoint MQ decouples burst inbound traffic from a slow downstream system: the API enqueues work and a worker drains the queue at a safe rate. Pure synchronous pass-through propagates the burst.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Pass-through directly exposes the legacy system to bursts."
      },
      "B": {
        "type": "Correct",
        "text": "Anypoint MQ as a buffer between the API and a worker that drains at the legacy system's safe rate"
      },
      "C": {
        "type": "Incorrect",
        "text": "Disabling policies makes things worse."
      },
      "D": {
        "type": "Incorrect",
        "text": "vCores apply to Mule apps, not to the legacy system."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint MQ Overview — Asynchronous Message Buffering for Slow Downstream Systems",
        "url": "https://docs.mulesoft.com/mq/#anypoint-mq-features"
      },
      "architectureGuide": {
        "title": "Microsoft Cloud Architecture Patterns — Queue-Based Load Leveling",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling"
      },
      "arc720": {
        "lesson": "Lesson 9 — API-led connectivity with event-driven architecture",
        "anchor": "ARC720-Course-Content.md#9-api-led-connectivity-with-event-driven-architecture"
      }
    }
  },
  {
    "id": "q-064",
    "number": 64,
    "title": "Api Policies - An API Manager policy is configured for",
    "domain": "Api Policies",
    "topics": [
      "Business Groups Environments"
    ],
    "prompt": "An API Manager policy is configured for an API instance in the Production environment. Will it automatically apply to the Sandbox API instance?",
    "options": [
      {
        "letter": "A",
        "text": "Yes, policies cascade across environments"
      },
      {
        "letter": "B",
        "text": "No, policies are configured per API instance and per environment"
      },
      {
        "letter": "C",
        "text": "Only if API contracts exist in both"
      },
      {
        "letter": "D",
        "text": "Only when using Runtime Fabric"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Policies are configured at the API-instance level inside an environment. Sandbox and Production are separate API instances and require separate policy configuration, although standardized policies can be promoted via APIs or scripts.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Policies do not cascade across environments automatically."
      },
      "B": {
        "type": "Correct",
        "text": "No, policies are configured per API instance and per environment"
      },
      "C": {
        "type": "Incorrect",
        "text": "Contracts govern access, not policy propagation."
      },
      "D": {
        "type": "Incorrect",
        "text": "Per-environment scoping is independent of the runtime target."
      }
    },
    "references": {
      "primary": {
        "title": "Access Management — Environment Scoping and Per-Environment Policy Isolation",
        "url": "https://docs.mulesoft.com/access-management/environments#types-of-environments"
      },
      "architectureGuide": {
        "title": "Applying Automated Policies in API Manager Across Environments",
        "url": "https://docs.mulesoft.com/api-manager/2.x/automated-policy-apply#apply-an-automated-policy-in-connected-mode"
      },
      "arc720": {
        "lesson": "Lesson 4 — Organizational and platform foundations",
        "anchor": "ARC720-Course-Content.md#4-organizational-and-platform-foundations"
      }
    }
  },
  {
    "id": "q-065",
    "number": 65,
    "title": "Application Network Basics - Which is a key difference between a",
    "domain": "Application Network Basics",
    "topics": [
      "Three Layer Architecture",
      "Api Led Connectivity"
    ],
    "prompt": "Which is a key difference between a Process API and an Experience API?",
    "options": [
      {
        "letter": "A",
        "text": "Process APIs are public, Experience APIs are private"
      },
      {
        "letter": "B",
        "text": "Experience APIs are channel-specific faÃ§ades while Process APIs encode reusable cross-system logic"
      },
      {
        "letter": "C",
        "text": "Experience APIs run only on Runtime Fabric"
      },
      {
        "letter": "D",
        "text": "Process APIs cannot use Anypoint MQ"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Experience APIs adapt data and behavior to a specific consumer or channel (mobile, web, partner). Process APIs encode reusable orchestration and business logic across multiple System APIs so all Experience APIs can build on them.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Visibility is governed by policies, not by layer."
      },
      "B": {
        "type": "Correct",
        "text": "Experience APIs are channel-specific faÃ§ades while Process APIs encode reusable cross-system logic"
      },
      "C": {
        "type": "Incorrect",
        "text": "Both layer types can run on any deployment target."
      },
      "D": {
        "type": "Incorrect",
        "text": "Process APIs commonly use Anypoint MQ for asynchronous orchestration."
      }
    },
    "references": {
      "primary": {
        "title": "API-Led Connectivity — Distinction Between Process APIs and Channel Experience APIs",
        "url": "https://docs.mulesoft.com/general/api-led-develop#step-3-2-understand-the-scaffolded-structure"
      },
      "architectureGuide": {
        "title": "Martin Fowler — Bounded Context & API Layering Patterns",
        "url": "https://martinfowler.com/bliki/BoundedContext.html"
      },
      "arc720": {
        "lesson": "Lesson 5 — API identification, publication, and reuse",
        "anchor": "ARC720-Course-Content.md#5-api-identification-publication-and-reuse"
      }
    }
  },
  {
    "id": "q-066",
    "number": 66,
    "title": "Deploying Managing Apis - Which combination is correct for promoting a",
    "domain": "Deploying Managing Apis",
    "topics": [
      "Cicd Maven",
      "Business Groups Environments"
    ],
    "prompt": "Which combination is correct for promoting a Mule app and its API governance from Sandbox to Production?",
    "options": [
      {
        "letter": "A",
        "text": "Re-implement the app in Production"
      },
      {
        "letter": "B",
        "text": "Re-deploy the same artifact to Production environment via Maven plugin AND promote/configure the API instance and policies in API Manager"
      },
      {
        "letter": "C",
        "text": "Edit the running Sandbox app's environment label"
      },
      {
        "letter": "D",
        "text": "Move the worker between environments"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Promotion deploys the SAME artifact to the Production environment (Maven plugin) and configures or promotes the API instance, contracts, and policies in API Manager for that environment. Re-implementation, label edits, or worker moves are anti-patterns.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Re-implementation forfeits the value of artifact-based promotion."
      },
      "B": {
        "type": "Correct",
        "text": "Re-deploy the same artifact to Production environment via Maven plugin AND promote/configure the API instance and policies in API Manager"
      },
      "C": {
        "type": "Incorrect",
        "text": "Environments are deployment boundaries; you cannot 'relabel' an app between them."
      },
      "D": {
        "type": "Incorrect",
        "text": "Workers are bound to their environment and cannot be moved."
      }
    },
    "references": {
      "primary": {
        "title": "Access Management — Multi-Environment Promotion (Sandbox to Production) via Maven & API Manager",
        "url": "https://docs.mulesoft.com/access-management/environments#types-of-environments"
      },
      "architectureGuide": {
        "title": "Mule Maven Plugin Concepts for Deployment Automation",
        "url": "https://docs.mulesoft.com/mule-runtime/4.4/mmp-concept#deploy-goal"
      },
      "arc720": {
        "lesson": "Lesson 4 — Organizational and platform foundations",
        "anchor": "ARC720-Course-Content.md#4-organizational-and-platform-foundations"
      }
    }
  },
  {
    "id": "q-067",
    "number": 67,
    "title": "Monitoring Analyzing - Which feature in CloudHub measures and exposes",
    "domain": "Monitoring Analyzing",
    "topics": [
      "Anypoint Monitoring"
    ],
    "prompt": "Which feature in CloudHub measures and exposes the rate at which an app processes events, enabling alerting on backlog or under-throughput?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Monitoring metrics and alerts"
      },
      {
        "letter": "B",
        "text": "Anypoint MQ ACL"
      },
      {
        "letter": "C",
        "text": "RAML annotations"
      },
      {
        "letter": "D",
        "text": "Object Store TTL"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Anypoint Monitoring exposes per-app metrics including throughput, response times, and event counts, and supports alerts when thresholds are violated. ACLs, RAML annotations, and TTLs are unrelated to throughput observation.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Anypoint Monitoring metrics and alerts"
      },
      "B": {
        "type": "Incorrect",
        "text": "MQ ACLs control queue access."
      },
      "C": {
        "type": "Incorrect",
        "text": "RAML annotations are design metadata."
      },
      "D": {
        "type": "Incorrect",
        "text": "Object Store TTL governs key expiry."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring — Measuring Event Processing Rates, Backlog, and Throughput Alerts",
        "url": "https://docs.mulesoft.com/monitoring/app-dashboards#overview-charts"
      },
      "architectureGuide": {
        "title": "Configuring Operational Alerts and Notifications in Anypoint Monitoring",
        "url": "https://docs.mulesoft.com/monitoring/alerts#threshold"
      },
      "arc720": {
        "lesson": "Lesson 11 — Application network behavior",
        "anchor": "ARC720-Course-Content.md#11-application-network-behavior"
      }
    }
  },
  {
    "id": "q-068",
    "number": 68,
    "title": "Api Implementation Design - Which is the correct reading of a",
    "domain": "Api Implementation Design",
    "topics": [
      "Three Layer Architecture",
      "Reliability Patterns"
    ],
    "prompt": "Which is the correct reading of a Process API that calls multiple System APIs in parallel and aggregates the results?",
    "options": [
      {
        "letter": "A",
        "text": "Sequential by default and slow"
      },
      {
        "letter": "B",
        "text": "Naturally suited to scatter-gather or parallel-foreach with combined response handling"
      },
      {
        "letter": "C",
        "text": "Forbidden under API-led connectivity"
      },
      {
        "letter": "D",
        "text": "Reserved for Experience APIs"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Calling multiple System APIs in parallel and aggregating the responses is a classic Process-API pattern, often built with scatter-gather or parallel foreach. It improves response time and isolates each call's failure handling.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Mule supports parallel routers; sequential is a choice, not a default constraint."
      },
      "B": {
        "type": "Correct",
        "text": "Naturally suited to scatter-gather or parallel-foreach with combined response handling"
      },
      "C": {
        "type": "Incorrect",
        "text": "API-led explicitly supports orchestration in Process APIs."
      },
      "D": {
        "type": "Incorrect",
        "text": "Cross-system orchestration belongs in Process APIs, not Experience APIs."
      }
    },
    "references": {
      "primary": {
        "title": "Scatter-Gather Router Component — Parallel Execution & Response Aggregation in Process APIs",
        "url": "https://docs.mulesoft.com/mule-runtime/4.4/scatter-gather-concept#result"
      },
      "architectureGuide": {
        "title": "Parallel For Each Scope & Concurrent Execution in Mule 4",
        "url": "https://docs.mulesoft.com/mule-runtime/4.4/parallel-foreach-scope#example"
      },
      "arc720": {
        "lesson": "Lesson 8 — Effective API implementations",
        "anchor": "ARC720-Course-Content.md#8-effective-api-implementations"
      }
    }
  },
  {
    "id": "q-069",
    "number": 69,
    "title": "Api Implementation Design - A Process API frequently refetches the same",
    "domain": "Api Implementation Design",
    "topics": [
      "Caching Patterns",
      "Object Store V2"
    ],
    "prompt": "A Process API frequently re-fetches the same reference data from a System API, causing latency and load. Which pattern most reduces this load?",
    "options": [
      {
        "letter": "A",
        "text": "Increase worker size"
      },
      {
        "letter": "B",
        "text": "Cache the reference data with appropriate TTL using Object Store v2 or Cache scope"
      },
      {
        "letter": "C",
        "text": "Disable retries"
      },
      {
        "letter": "D",
        "text": "Switch to Hybrid deployment"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Caching reference data with a sensible TTL reduces redundant downstream calls and latency. Mule's Cache scope plus Object Store v2 (for cluster-shared, persistent caching on CloudHub) is the canonical pattern.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Bigger workers do not eliminate redundant downstream calls."
      },
      "B": {
        "type": "Correct",
        "text": "Cache the reference data with appropriate TTL using Object Store v2 or Cache scope"
      },
      "C": {
        "type": "Incorrect",
        "text": "Disabling retries reduces resilience and does not address load."
      },
      "D": {
        "type": "Incorrect",
        "text": "Deployment topology change does not address fetch redundancy."
      }
    },
    "references": {
      "primary": {
        "title": "Object Store v2 — Caching Reference Data to Protect Downstream Systems",
        "url": "https://docs.mulesoft.com/object-store/#object-store-v2-features"
      },
      "architectureGuide": {
        "title": "Object Store v2 FAQ — Partitioning, Limits, and Eviction TTL",
        "url": "https://docs.mulesoft.com/object-store/osv2-faq"
      },
      "arc720": {
        "lesson": "Lesson 8 — Effective API implementations",
        "anchor": "ARC720-Course-Content.md#8-effective-api-implementations"
      }
    }
  },
  {
    "id": "q-070",
    "number": 70,
    "title": "Org Platform Foundations - Which Anypoint Platform mechanism lets a single",
    "domain": "Org Platform Foundations",
    "topics": [
      "Exchange Asset Management",
      "Rbac Permissions"
    ],
    "prompt": "Which Anypoint Platform mechanism lets a single business group's master organization centrally enforce that all newly published assets in subsidiary business groups have a specific tag or category?",
    "options": [
      {
        "letter": "A",
        "text": "Per-asset RAML annotations"
      },
      {
        "letter": "B",
        "text": "Anypoint Platform governance/Exchange asset standards (with custom asset taxonomy and review)"
      },
      {
        "letter": "C",
        "text": "Object Store keys"
      },
      {
        "letter": "D",
        "text": "Custom JWT claims"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Centralized asset standards rely on Exchange's taxonomy/categorization, plus the master organization's review and governance practices (and tools like Anypoint API Governance) to enforce required tags or quality standards on assets. Per-asset annotations alone, Object Store keys, or JWT claims do not enforce taxonomy.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "RAML annotations describe an API; they do not enforce taxonomy."
      },
      "B": {
        "type": "Correct",
        "text": "Anypoint Platform governance/Exchange asset standards (with custom asset taxonomy and review)"
      },
      "C": {
        "type": "Incorrect",
        "text": "Object Store is runtime data."
      },
      "D": {
        "type": "Incorrect",
        "text": "JWT claims describe access tokens, not asset metadata."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Exchange — Centrally Governing and Enforcing Asset Standards & Taxonomy",
        "url": "https://docs.mulesoft.com/exchange/#view-assets-by-business-group"
      },
      "architectureGuide": {
        "title": "Access Management — Business Group Hierarchies and Resource Governance",
        "url": "https://docs.mulesoft.com/access-management/business-groups#business-group-hierarchy"
      },
      "arc720": {
        "lesson": "Lesson 4 — Organizational and platform foundations",
        "anchor": "ARC720-Course-Content.md#4-organizational-and-platform-foundations"
      }
    }
  },
  {
    "id": "q-071",
    "number": 71,
    "title": "Deploying Managing Apis - Which is the correct understanding of API",
    "domain": "Deploying Managing Apis",
    "topics": [
      "Auto Discovery"
    ],
    "prompt": "Which is the correct understanding of API auto-discovery vs. proxying for a Mule API?",
    "options": [
      {
        "letter": "A",
        "text": "They are identical"
      },
      {
        "letter": "B",
        "text": "Auto-discovery binds a Mule app to API Manager so policies execute inline; proxying creates a separate gateway proxy app in front of the implementation"
      },
      {
        "letter": "C",
        "text": "Both deploy as proxies"
      },
      {
        "letter": "D",
        "text": "Both require Mutual TLS"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Auto-discovery binds the actual implementation app to its API Manager record so policies execute inline within the same runtime. Proxying deploys a separate gateway app that forwards traffic to the implementation. Auto-discovery is preferred when you control the implementation; proxies suit unmodifiable backends.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "They are different deployment patterns."
      },
      "B": {
        "type": "Correct",
        "text": "Auto-discovery binds a Mule app to API Manager so policies execute inline; proxying creates a separate gateway proxy app in front of the implementation"
      },
      "C": {
        "type": "Incorrect",
        "text": "Auto-discovery does not deploy a separate proxy."
      },
      "D": {
        "type": "Incorrect",
        "text": "Mutual TLS is a separate policy choice."
      }
    },
    "references": {
      "primary": {
        "title": "API Autodiscovery vs Gateway Proxying — Inline Policy Enforcement vs Separate Proxy App",
        "url": "https://docs.mulesoft.com/api-manager/2.x/api-auto-discovery-new-concept#proxy-endpoint-vs-basic-endpoint"
      },
      "architectureGuide": {
        "title": "Configuring Autodiscovery in Mule 4 Applications",
        "url": "https://docs.mulesoft.com/api-manager/2.x/client-id-based-policies#how-this-policy-works"
      },
      "arc720": {
        "lesson": "Lesson 8 — Effective API implementations",
        "anchor": "ARC720-Course-Content.md#8-effective-api-implementations"
      }
    }
  },
  {
    "id": "q-072",
    "number": 72,
    "title": "Api Policies - Which response best describes how to model",
    "domain": "Api Policies",
    "topics": [
      "Api Contracts Sla Tiers",
      "Rate Limiting Throttling"
    ],
    "prompt": "Which response best describes how to model SLA tiers for a public API used by both internal apps and paying external partners?",
    "options": [
      {
        "letter": "A",
        "text": "Same SLA tier for everyone"
      },
      {
        "letter": "B",
        "text": "Multiple SLA tiers (e.g., Internal-Unlimited, Partner-Premium, Partner-Free) with different rate limits and approval policies"
      },
      {
        "letter": "C",
        "text": "Block external partners"
      },
      {
        "letter": "D",
        "text": "Use only IP allow-listing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Different consumers warrant different SLA tiers â internal apps may require higher or unlimited throughput, paying partners get premium tiers, free-tier partners get strict rate limits. Tiers are configured in API Manager and bound through API contracts.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "One-size-fits-all tiers underprice or overprovision."
      },
      "B": {
        "type": "Correct",
        "text": "Multiple SLA tiers (e.g., Internal-Unlimited, Partner-Premium, Partner-Free) with different rate limits and approval policies"
      },
      "C": {
        "type": "Incorrect",
        "text": "Blocking partners forfeits revenue and reach."
      },
      "D": {
        "type": "Incorrect",
        "text": "IP allow-listing alone cannot differentiate per-partner rate limits."
      }
    },
    "references": {
      "primary": {
        "title": "Defining SLA Tiers and Managing Differentiated Consumer Access in API Manager",
        "url": "https://docs.mulesoft.com/api-manager/2.x/defining-sla-tiers#defining-a-tier"
      },
      "architectureGuide": {
        "title": "Rate Limiting and Throttling Policies in API Manager",
        "url": "https://docs.mulesoft.com/api-manager/2.x/rate-limiting-and-throttling#how-this-policy-works"
      },
      "arc720": {
        "lesson": "Lesson 6 — NFRs at the API-invocation level",
        "anchor": "ARC720-Course-Content.md#6-nfrs-at-the-api-invocation-level"
      }
    }
  },
  {
    "id": "q-073",
    "number": 73,
    "title": "Deploying Managing Apis - Which is true about MUnit coverage in",
    "domain": "Deploying Managing Apis",
    "topics": [
      "Munit",
      "Cicd Maven"
    ],
    "prompt": "Which is true about MUnit coverage in CI?",
    "options": [
      {
        "letter": "A",
        "text": "Coverage is meaningless for integration code"
      },
      {
        "letter": "B",
        "text": "MUnit reports coverage on flows and DataWeave and can fail builds below configured thresholds"
      },
      {
        "letter": "C",
        "text": "MUnit only tests Java code"
      },
      {
        "letter": "D",
        "text": "MUnit only runs in Anypoint Studio"
      }
    ],
    "correctAnswer": "B",
    "explanation": "MUnit produces coverage reports on flows and DataWeave and can be configured to fail Maven builds when thresholds are not met. This makes coverage gates a normal part of MuleSoft CI pipelines.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Coverage gates remain useful for catching missed paths."
      },
      "B": {
        "type": "Correct",
        "text": "MUnit reports coverage on flows and DataWeave and can fail builds below configured thresholds"
      },
      "C": {
        "type": "Incorrect",
        "text": "MUnit tests Mule flows, not just Java code."
      },
      "D": {
        "type": "Incorrect",
        "text": "MUnit runs in Studio, Maven, and CI environments."
      }
    },
    "references": {
      "primary": {
        "title": "MUnit Automated Testing Framework — Test Coverage Reports & CI Build Quality Gates",
        "url": "https://docs.mulesoft.com/munit/latest/#test-coverage"
      },
      "architectureGuide": {
        "title": "Mule Maven Plugin Automated Build & Test Lifecycle",
        "url": "https://docs.mulesoft.com/mule-runtime/4.4/mmp-concept#deploy-goal"
      },
      "arc720": {
        "lesson": "Lesson 10 — Production",
        "anchor": "ARC720-Course-Content.md#10-production"
      }
    }
  },
  {
    "id": "q-074",
    "number": 74,
    "title": "Application Network Basics - Which Anypoint Platform persona is typically responsible",
    "domain": "Application Network Basics",
    "topics": [
      "C4E"
    ],
    "prompt": "Which Anypoint Platform persona is typically responsible for defining shared API design standards and ensuring reuse across business groups?",
    "options": [
      {
        "letter": "A",
        "text": "Center for Enablement (C4E) team"
      },
      {
        "letter": "B",
        "text": "Individual API consumers"
      },
      {
        "letter": "C",
        "text": "Anypoint MQ administrator"
      },
      {
        "letter": "D",
        "text": "Runtime Manager operator"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The Center for Enablement defines and stewards platform standards, drives reuse, and curates Exchange assets. API consumers and ops personas play different roles in the operating model.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Center for Enablement (C4E) team"
      },
      "B": {
        "type": "Incorrect",
        "text": "Consumers use APIs; they do not define standards."
      },
      "C": {
        "type": "Incorrect",
        "text": "MQ admins manage messaging, not API governance."
      },
      "D": {
        "type": "Incorrect",
        "text": "Runtime Manager operators run apps; they do not own design standards."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce & MuleSoft Guide — Center for Enablement (C4E) Defining Shared API Design Standards",
        "url": "https://www.salesforce.com/blog/what-is-a-center-for-enablement/"
      },
      "architectureGuide": {
        "title": "MuleSoft Catalyst Framework & Business Group Governance",
        "url": "https://docs.mulesoft.com/access-management/business-groups#business-group-hierarchy"
      },
      "arc720": {
        "lesson": "Lesson 4 — Organizational and platform foundations",
        "anchor": "ARC720-Course-Content.md#4-organizational-and-platform-foundations"
      }
    }
  },
  {
    "id": "q-075",
    "number": 75,
    "title": "Non Functional Requirements - Which action increases the maximum throughput of",
    "domain": "Non Functional Requirements",
    "topics": [
      "Vcores Capacity",
      "Worker Sizing"
    ],
    "prompt": "Which action increases the maximum throughput of a CloudHub app most directly when the bottleneck is per-worker concurrency?",
    "options": [
      {
        "letter": "A",
        "text": "Increase the number of workers (horizontal scale) and/or increase worker size (vertical scale)"
      },
      {
        "letter": "B",
        "text": "Disable Persistent Queues"
      },
      {
        "letter": "C",
        "text": "Switch from RAML to OAS"
      },
      {
        "letter": "D",
        "text": "Add another business group"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When per-worker concurrency caps throughput, scaling horizontally (more workers) or vertically (larger workers) increases capacity. Spec format, queue persistence, and additional business groups do not address compute capacity.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Increase the number of workers (horizontal scale) and/or increase worker size (vertical scale)"
      },
      "B": {
        "type": "Incorrect",
        "text": "Persistent Queues do not bottleneck throughput in this scenario."
      },
      "C": {
        "type": "Incorrect",
        "text": "RAML vs OAS does not affect runtime throughput."
      },
      "D": {
        "type": "Incorrect",
        "text": "Business groups partition entitlements; they do not add capacity."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture — Worker Concurrency, Horizontal (Worker Count) & Vertical (Worker Size) Scaling",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#cloudhub-workers"
      },
      "architectureGuide": {
        "title": "CloudHub Fabric & Worker Scale-Out Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric#worker-scale-out"
      },
      "arc720": {
        "lesson": "Lesson 10 — Production",
        "anchor": "ARC720-Course-Content.md#10-production"
      }
    }
  },
  {
    "id": "q-076",
    "number": 76,
    "title": "Api Policies - Which artifact in API Manager allows applying",
    "domain": "Api Policies",
    "topics": [
      "Custom Policies",
      "Rate Limiting Throttling"
    ],
    "prompt": "Which artifact in API Manager allows applying a policy template to many APIs at once based on tags or environments?",
    "options": [
      {
        "letter": "A",
        "text": "Automated policies (also known as policy templates applied across APIs)"
      },
      {
        "letter": "B",
        "text": "Per-API custom Java code"
      },
      {
        "letter": "C",
        "text": "Anypoint MQ exchanges"
      },
      {
        "letter": "D",
        "text": "Object Store v2 keys"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Automated/standard policies (sometimes called governance-applied policies) let architects apply a policy template to a set of APIs based on criteria like tags, environment, or scope. This avoids per-API configuration drift and supports central enforcement.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Automated policies (also known as policy templates applied across APIs)"
      },
      "B": {
        "type": "Incorrect",
        "text": "Per-API code defeats automation and central enforcement."
      },
      "C": {
        "type": "Incorrect",
        "text": "MQ exchanges are messaging routes."
      },
      "D": {
        "type": "Incorrect",
        "text": "Object Store keys are runtime data."
      }
    },
    "references": {
      "primary": {
        "title": "Applying Automated Policies Across Environments in API Manager",
        "url": "https://docs.mulesoft.com/api-manager/2.x/automated-policy-apply#apply-an-automated-policy-in-connected-mode"
      },
      "architectureGuide": {
        "title": "Custom Policy Development in Mule 4",
        "url": "https://docs.mulesoft.com/api-manager/2.x/custom-policy-getting-started#setting-up-a-project-with-the-archetype"
      },
      "arc720": {
        "lesson": "Lesson 6 — NFRs at the API-invocation level",
        "anchor": "ARC720-Course-Content.md#6-nfrs-at-the-api-invocation-level"
      }
    }
  },
  {
    "id": "q-077",
    "number": 77,
    "title": "Api Implementation Design - An architect must minimize round trips for",
    "domain": "Api Implementation Design",
    "topics": [
      "Three Layer Architecture",
      "Caching Patterns"
    ],
    "prompt": "An architect must minimize round trips for mobile clients fetching account, recent transactions, and offers in one call. Which API design and layer is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "Multiple direct System API calls from the mobile app"
      },
      {
        "letter": "B",
        "text": "An Experience API that aggregates and shapes the response by calling a Process API or System APIs"
      },
      {
        "letter": "C",
        "text": "Add the data to a global Object Store"
      },
      {
        "letter": "D",
        "text": "Use only Anypoint MQ"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Channel-specific aggregation belongs in an Experience API: it shapes the response for mobile and minimizes round trips by calling the Process API or System APIs server-side. Direct multi-System-API calls from the client increase chatter and couple the client to backends.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Client-driven multi-call patterns increase mobile latency and coupling."
      },
      "B": {
        "type": "Correct",
        "text": "An Experience API that aggregates and shapes the response by calling a Process API or System APIs"
      },
      "C": {
        "type": "Incorrect",
        "text": "Object Store is data, not an API surface."
      },
      "D": {
        "type": "Incorrect",
        "text": "MQ is asynchronous; it does not serve a synchronous mobile fetch."
      }
    },
    "references": {
      "primary": {
        "title": "API-Led Connectivity — Experience APIs Aggregating & Shaping Responses for Mobile Clients",
        "url": "https://docs.mulesoft.com/general/api-led-develop#step-3-2-understand-the-scaffolded-structure"
      },
      "architectureGuide": {
        "title": "Martin Fowler — Bounded Context & Mobile Experience Aggregation",
        "url": "https://martinfowler.com/bliki/BoundedContext.html"
      },
      "arc720": {
        "lesson": "Lesson 5 — API identification, publication, and reuse",
        "anchor": "ARC720-Course-Content.md#5-api-identification-publication-and-reuse"
      }
    }
  },
  {
    "id": "q-078",
    "number": 78,
    "title": "Designing Sharing Apis - Which Anypoint Platform feature provides a registrystyle",
    "domain": "Designing Sharing Apis",
    "topics": [
      "Exchange Asset Management",
      "Api Contracts Sla Tiers"
    ],
    "prompt": "Which Anypoint Platform feature provides a registry-style listing of APIs with their version, status, and contracts for consumer discovery?",
    "options": [
      {
        "letter": "A",
        "text": "API Manager / Exchange combined experience (Anypoint Platform UI)"
      },
      {
        "letter": "B",
        "text": "Object Store v2"
      },
      {
        "letter": "C",
        "text": "Anypoint MQ broker UI"
      },
      {
        "letter": "D",
        "text": "Studio Project Explorer"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Discovery and contract requests are surfaced through Anypoint Platform's combined Exchange (asset listing) and API Manager (instance status, contracts) experience. Consumers browse Exchange and request access; API Manager records the contract.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "API Manager / Exchange combined experience (Anypoint Platform UI)"
      },
      "B": {
        "type": "Incorrect",
        "text": "Object Store is runtime data."
      },
      "C": {
        "type": "Incorrect",
        "text": "MQ broker UI shows queues and exchanges, not APIs."
      },
      "D": {
        "type": "Incorrect",
        "text": "Studio Project Explorer is a developer IDE view."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Exchange — Discovering APIs, Status, Versions, and Requesting Access Contracts",
        "url": "https://docs.mulesoft.com/exchange/#view-assets-by-business-group"
      },
      "architectureGuide": {
        "title": "Defining SLA Tiers and Managing API Consumer Contracts in API Manager",
        "url": "https://docs.mulesoft.com/api-manager/2.x/defining-sla-tiers#defining-a-tier"
      },
      "arc720": {
        "lesson": "Lesson 6 — NFRs at the API-invocation level",
        "anchor": "ARC720-Course-Content.md#6-nfrs-at-the-api-invocation-level"
      }
    }
  },
  {
    "id": "q-079",
    "number": 79,
    "title": "Deployment Options - An organization wants Mule applications running in",
    "domain": "Deployment Options",
    "topics": [
      "Runtime Fabric"
    ],
    "prompt": "An organization wants Mule applications running in their AWS account due to networking and compliance constraints, while keeping Anypoint Platform's central management. Which deployment is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "CloudHub on MuleSoft's AWS"
      },
      {
        "letter": "B",
        "text": "Anypoint Runtime Fabric on the customer's Kubernetes / EKS in the customer AWS account"
      },
      {
        "letter": "C",
        "text": "Anypoint MQ"
      },
      {
        "letter": "D",
        "text": "Anypoint Service Mesh"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Runtime Fabric on the customer's Kubernetes (e.g., EKS) keeps Mule runtimes inside the customer's AWS account while still managed centrally from Anypoint. CloudHub runs in MuleSoft's AWS, MQ is messaging, and Service Mesh is for non-Mule services.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "CloudHub workers run inside MuleSoft's AWS, not the customer's AWS."
      },
      "B": {
        "type": "Correct",
        "text": "Anypoint Runtime Fabric on the customer's Kubernetes / EKS in the customer AWS account"
      },
      "C": {
        "type": "Incorrect",
        "text": "Anypoint MQ is messaging, not a runtime host."
      },
      "D": {
        "type": "Incorrect",
        "text": "Service Mesh extends governance to existing meshes; it is not a Mule host."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Runtime Fabric (RTF) on Customer AWS / EKS — Compliance & Central Management",
        "url": "https://docs.mulesoft.com/runtime-fabric/latest/#how-application-deployments-work-in-anypoint-runtime-fabric"
      },
      "architectureGuide": {
        "title": "Runtime Fabric Custom Ingress & Edge Policies",
        "url": "https://docs.mulesoft.com/runtime-fabric/latest/custom-ingress-configuration#how-ingress-resources-templates-work-in-runtime-fabric"
      },
      "arc720": {
        "lesson": "Lesson 4 — Organizational and platform foundations",
        "anchor": "ARC720-Course-Content.md#4-organizational-and-platform-foundations"
      }
    }
  },
  {
    "id": "q-080",
    "number": 80,
    "title": "Api Implementation Design - Which approach lets an architect provide consistent",
    "domain": "Api Implementation Design",
    "topics": [
      "Raml Oas Design",
      "Reliability Patterns"
    ],
    "prompt": "Which approach lets an architect provide consistent error responses across all APIs without coding error handling per API?",
    "options": [
      {
        "letter": "A",
        "text": "Define a standard error response in a reusable RAML library and a shared error-handler module/template referenced by every API"
      },
      {
        "letter": "B",
        "text": "Hardcode the error response in each flow"
      },
      {
        "letter": "C",
        "text": "Push errors to Object Store v2"
      },
      {
        "letter": "D",
        "text": "Reject all errors at the Shared Load Balancer"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Reusable error response definitions in a RAML library plus a shared error-handler template (consumed by every API project) produce consistent error contracts and behavior across the application network. Per-API hardcoding is the anti-pattern this approach replaces.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Define a standard error response in a reusable RAML library and a shared error-handler module/template referenced by every API"
      },
      "B": {
        "type": "Incorrect",
        "text": "Per-flow hardcoding guarantees drift between APIs."
      },
      "C": {
        "type": "Incorrect",
        "text": "Object Store is data, not error contract definition."
      },
      "D": {
        "type": "Incorrect",
        "text": "The SLB does not shape error contracts."
      }
    },
    "references": {
      "primary": {
        "title": "Design Center — Standard Reusable Error Responses in RAML Libraries & Error Handler Modules",
        "url": "https://docs.mulesoft.com/design-center/#prerequisites-for-using-design-center"
      },
      "architectureGuide": {
        "title": "Mule 4 Error Handling Scopes and Custom Error Mapping",
        "url": "https://docs.mulesoft.com/mule-runtime/4.4/transaction-management#error-handling"
      },
      "arc720": {
        "lesson": "Lesson 7 — Effective APIs",
        "anchor": "ARC720-Course-Content.md#7-effective-apis"
      }
    }
  },
  {
    "id": "q-081",
    "number": 81,
    "title": "Non Functional Requirements - Which is a true statement about Anypoint",
    "domain": "Non Functional Requirements",
    "topics": [
      "Anypoint Mq",
      "Reliability Patterns"
    ],
    "prompt": "Which is a true statement about Anypoint MQ message delivery semantics?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint MQ guarantees exactly-once delivery without effort"
      },
      {
        "letter": "B",
        "text": "Anypoint MQ supports at-least-once delivery; consumers must be designed to be idempotent"
      },
      {
        "letter": "C",
        "text": "Anypoint MQ does not persist messages"
      },
      {
        "letter": "D",
        "text": "Anypoint MQ messages are unordered FIFO is unsupported"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Anypoint MQ delivers at-least-once by default, so consumers must handle potential duplicate deliveries (idempotent processing or deduplication keys). FIFO queues are supported when ordering matters. Messages are persisted by the managed broker.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Exactly-once is not guaranteed without consumer-side idempotency."
      },
      "B": {
        "type": "Correct",
        "text": "Anypoint MQ supports at-least-once delivery; consumers must be designed to be idempotent"
      },
      "C": {
        "type": "Incorrect",
        "text": "MQ persists messages in the managed broker."
      },
      "D": {
        "type": "Incorrect",
        "text": "FIFO queues exist for ordered delivery scenarios."
      }
    },
    "references": {
      "primary": {
        "title": "Configuring and Using Anypoint MQ Standard and FIFO Queues (At-Least-Once Delivery)",
        "url": "https://docs.mulesoft.com/mq/mq-queues#create-queue"
      },
      "architectureGuide": {
        "title": "Enterprise Integration Patterns — Point-to-Point Message Channel",
        "url": "https://www.enterpriseintegrationpatterns.com/patterns/messaging/PointToPointChannel.html"
      },
      "arc720": {
        "lesson": "Lesson 9 — API-led connectivity with event-driven architecture",
        "anchor": "ARC720-Course-Content.md#9-api-led-connectivity-with-event-driven-architecture"
      }
    }
  },
  {
    "id": "q-082",
    "number": 82,
    "title": "Non Functional Requirements - Which choice best supports horizontal scaling of",
    "domain": "Non Functional Requirements",
    "topics": [
      "Ha Dr Architecture",
      "Reliability Patterns"
    ],
    "prompt": "Which choice best supports horizontal scaling of an Experience API that aggregates calls to several Process APIs but holds NO server-side session state?",
    "options": [
      {
        "letter": "A",
        "text": "Add session state to each worker"
      },
      {
        "letter": "B",
        "text": "Run multiple stateless workers behind the load balancer; stateless design enables linear scaling"
      },
      {
        "letter": "C",
        "text": "Pin clients to a single worker"
      },
      {
        "letter": "D",
        "text": "Force a single large worker only"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Stateless workers behind a load balancer scale linearly: each worker handles any request without shared in-memory session state. Pinning clients (sticky sessions) and adding state both undermine horizontal scaling.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Adding session state breaks the stateless design enabling linear scaling."
      },
      "B": {
        "type": "Correct",
        "text": "Run multiple stateless workers behind the load balancer; stateless design enables linear scaling"
      },
      "C": {
        "type": "Incorrect",
        "text": "Sticky sessions reduce flexibility and create hot workers."
      },
      "D": {
        "type": "Incorrect",
        "text": "Forcing a single worker eliminates horizontal scaling."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture — Stateless Worker Scale-Out and Linear Load Distribution",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#worker-scale-out-and-data-center-redundancy"
      },
      "architectureGuide": {
        "title": "CloudHub Fabric & Multi-Worker High Availability",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric#worker-scale-out"
      },
      "arc720": {
        "lesson": "Lesson 10 — Production",
        "anchor": "ARC720-Course-Content.md#10-production"
      }
    }
  },
  {
    "id": "q-083",
    "number": 83,
    "title": "Org Platform Foundations - Which combination is correct about API instances",
    "domain": "Org Platform Foundations",
    "topics": [
      "Business Groups Environments",
      "Api Lifecycle"
    ],
    "prompt": "Which combination is correct about API instances and their environments in API Manager?",
    "options": [
      {
        "letter": "A",
        "text": "One API spec maps to one instance globally"
      },
      {
        "letter": "B",
        "text": "An API spec can have separate API instances per environment (e.g., Sandbox and Production), each with its own implementation URL and policies"
      },
      {
        "letter": "C",
        "text": "Instances are not associated with environments"
      },
      {
        "letter": "D",
        "text": "Instances are managed in Exchange, not API Manager"
      }
    ],
    "correctAnswer": "B",
    "explanation": "An API spec in Exchange can have one API instance per environment (Sandbox, Production, custom) in API Manager, each with its own implementation URI, contracts, and policies. This supports SDLC isolation.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Multi-environment instances are the standard pattern."
      },
      "B": {
        "type": "Correct",
        "text": "An API spec can have separate API instances per environment (e.g., Sandbox and Production), each with its own implementation URL and policies"
      },
      "C": {
        "type": "Incorrect",
        "text": "Instances are scoped to an environment."
      },
      "D": {
        "type": "Incorrect",
        "text": "Instances are managed in API Manager; specs live in Exchange."
      }
    },
    "references": {
      "primary": {
        "title": "Access Management — Scoping API Instances & Implementation URLs Per Environment",
        "url": "https://docs.mulesoft.com/access-management/environments#types-of-environments"
      },
      "architectureGuide": {
        "title": "Defining SLA Tiers and Managing API Consumer Contracts in API Manager",
        "url": "https://docs.mulesoft.com/api-manager/2.x/defining-sla-tiers#defining-a-tier"
      },
      "arc720": {
        "lesson": "Lesson 4 — Organizational and platform foundations",
        "anchor": "ARC720-Course-Content.md#4-organizational-and-platform-foundations"
      }
    }
  },
  {
    "id": "q-084",
    "number": 84,
    "title": "Api Policies - Which is the correct way to authenticate",
    "domain": "Api Policies",
    "topics": [
      "Oauth2 Policy",
      "Api Contracts Sla Tiers"
    ],
    "prompt": "Which is the correct way to authenticate Mule apps to call other Mule apps that are protected by OAuth 2.0 client credentials in API Manager?",
    "options": [
      {
        "letter": "A",
        "text": "Use the calling app's basic-auth credentials"
      },
      {
        "letter": "B",
        "text": "Configure the calling app with its API contract's client ID and client secret to obtain access tokens"
      },
      {
        "letter": "C",
        "text": "Disable the OAuth policy on the called app"
      },
      {
        "letter": "D",
        "text": "Embed the user's password in the calling flow"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Mule apps acting as API consumers register a contract with the called API in API Manager and obtain an OAuth access token using the client_id/client_secret from that contract. The token is then sent on each call.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Basic auth is unrelated to OAuth client credentials flows."
      },
      "B": {
        "type": "Correct",
        "text": "Configure the calling app with its API contract's client ID and client secret to obtain access tokens"
      },
      "C": {
        "type": "Incorrect",
        "text": "Disabling policies removes the only enforcement."
      },
      "D": {
        "type": "Incorrect",
        "text": "Embedding user passwords is both wrong protocol and a security failure."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Authenticating Inter-Application Calls via OAuth 2.0 Client Credentials",
        "url": "https://docs.mulesoft.com/api-manager/2.x/client-id-based-policies#how-this-policy-works"
      },
      "architectureGuide": {
        "title": "External Identity Management & Client Provider Integration",
        "url": "https://docs.mulesoft.com/access-management/external-identity#managing-users-external-identity"
      },
      "arc720": {
        "lesson": "Lesson 6 — NFRs at the API-invocation level",
        "anchor": "ARC720-Course-Content.md#6-nfrs-at-the-api-invocation-level"
      }
    }
  },
  {
    "id": "q-085",
    "number": 85,
    "title": "Api Policies - Which Anypoint capability lets architects create and",
    "domain": "Api Policies",
    "topics": [
      "Jwt Validation"
    ],
    "prompt": "Which Anypoint capability lets architects create and rotate JWKS-backed signing keys consumed by JWT-validating policies?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Visualizer"
      },
      {
        "letter": "B",
        "text": "An external IdP exposing a JWKS endpoint that the JWT Validation policy fetches"
      },
      {
        "letter": "C",
        "text": "Object Store v2 alone"
      },
      {
        "letter": "D",
        "text": "API Manager's RAML editor"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Signing key rotation is normally handled by the external Identity Provider, which exposes a JWKS endpoint. The JWT Validation policy fetches and caches keys from that endpoint, picking up rotations transparently. Visualizer and Object Store do not perform JWKS validation.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Visualizer is a topology view."
      },
      "B": {
        "type": "Correct",
        "text": "An external IdP exposing a JWKS endpoint that the JWT Validation policy fetches"
      },
      "C": {
        "type": "Incorrect",
        "text": "Object Store does not provide JWKS validation logic."
      },
      "D": {
        "type": "Incorrect",
        "text": "API Manager edits policy config; signing keys live in the IdP's JWKS."
      }
    },
    "references": {
      "primary": {
        "title": "JWT Validation Policy — Validating Signatures & Key Rotation via External IdP JWKS",
        "url": "https://docs.mulesoft.com/api-manager/2.x/policy-mule4-jwt-validation#how-this-policy-works"
      },
      "architectureGuide": {
        "title": "IETF RFC 7517 — JSON Web Key (JWKS) Specification",
        "url": "https://datatracker.ietf.org/doc/html/rfc7517"
      },
      "arc720": {
        "lesson": "Lesson 6 — NFRs at the API-invocation level",
        "anchor": "ARC720-Course-Content.md#6-nfrs-at-the-api-invocation-level"
      }
    }
  },
  {
    "id": "q-086",
    "number": 86,
    "title": "Application Network Basics - Which is a key responsibility of the",
    "domain": "Application Network Basics",
    "topics": [
      "C4E",
      "Three Layer Architecture"
    ],
    "prompt": "Which is a key responsibility of the API platform architecture review at the application network level (vs. a single API)?",
    "options": [
      {
        "letter": "A",
        "text": "Reviewing connector field-level transformations"
      },
      {
        "letter": "B",
        "text": "Ensuring layered design, asset reuse, governance standards, and platform-wide non-functional requirements are met"
      },
      {
        "letter": "C",
        "text": "Selecting an HTTP listener port"
      },
      {
        "letter": "D",
        "text": "Choosing which CloudHub region a single app uses"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Platform-level reviews focus on layered design, reuse, governance, and platform-wide NFRs (capacity, HA/DR, monitoring, security). Field-level transforms, listener ports, and per-app region picks are operational details typically handled at the project level.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Field-level transforms are project-scope decisions."
      },
      "B": {
        "type": "Correct",
        "text": "Ensuring layered design, asset reuse, governance standards, and platform-wide non-functional requirements are met"
      },
      "C": {
        "type": "Incorrect",
        "text": "Listener port choice is project-scope."
      },
      "D": {
        "type": "Incorrect",
        "text": "Per-app region choice is operational."
      }
    },
    "references": {
      "primary": {
        "title": "API-Led Connectivity — Architecture Reviews for Layered Design, Reuse, and Platform NFRs",
        "url": "https://docs.mulesoft.com/general/api-led-develop#step-3-2-understand-the-scaffolded-structure"
      },
      "architectureGuide": {
        "title": "Martin Fowler — Evolutionary Architecture and Platform Governance",
        "url": "https://martinfowler.com/bliki/BoundedContext.html"
      },
      "arc720": {
        "lesson": "Lesson 5 — API identification, publication, and reuse",
        "anchor": "ARC720-Course-Content.md#5-api-identification-publication-and-reuse"
      }
    }
  },
  {
    "id": "q-087",
    "number": 87,
    "title": "Api Policies - Which approach is valid for keeping access",
    "domain": "Api Policies",
    "topics": [
      "Mtls Policy",
      "Api Contracts Sla Tiers"
    ],
    "prompt": "Which approach is valid for keeping access to a Process API restricted to specific upstream Experience APIs and nothing else?",
    "options": [
      {
        "letter": "A",
        "text": "Make the Process API public"
      },
      {
        "letter": "B",
        "text": "Combine API contracts (only the listed Experience APIs request and approve), plus mTLS or OAuth 2.0 client credentials, plus IP allow-listing where applicable"
      },
      {
        "letter": "C",
        "text": "Disable API Manager"
      },
      {
        "letter": "D",
        "text": "Rely on naming conventions"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Layered access control â contracts to declare allowed clients, mTLS or OAuth 2.0 to authenticate them, and (where deployments allow) IP allow-listing â provides defense-in-depth between API tiers. Public endpoints, disabled governance, or naming conventions are not enforcement.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Public exposure is the opposite of restricted access."
      },
      "B": {
        "type": "Correct",
        "text": "Combine API contracts (only the listed Experience APIs request and approve), plus mTLS or OAuth 2.0 client credentials, plus IP allow-listing where applicable"
      },
      "C": {
        "type": "Incorrect",
        "text": "Disabling API Manager removes enforcement."
      },
      "D": {
        "type": "Incorrect",
        "text": "Naming conventions are not security controls."
      }
    },
    "references": {
      "primary": {
        "title": "IP Allowlist Policy, Mutual TLS (mTLS) & API Contracts for Inter-Tier Defense-in-Depth",
        "url": "https://docs.mulesoft.com/api-manager/2.x/ip-allowlist#how-this-policy-works"
      },
      "architectureGuide": {
        "title": "Client ID Enforcement and Application Contract Requests",
        "url": "https://docs.mulesoft.com/api-manager/2.x/client-id-based-policies#how-this-policy-works"
      },
      "arc720": {
        "lesson": "Lesson 6 — NFRs at the API-invocation level",
        "anchor": "ARC720-Course-Content.md#6-nfrs-at-the-api-invocation-level"
      }
    }
  },
  {
    "id": "q-088",
    "number": 88,
    "title": "Deployment Options - Which is a TRUE statement about CloudHub",
    "domain": "Deployment Options",
    "topics": [
      "Cloudhub Deployment",
      "Ha Dr Architecture"
    ],
    "prompt": "Which is a TRUE statement about CloudHub region selection for a customer needing low-latency access from APAC?",
    "options": [
      {
        "letter": "A",
        "text": "Region does not affect latency"
      },
      {
        "letter": "B",
        "text": "Deploy to an APAC CloudHub region (e.g., Asia Pacific Sydney/Singapore) so workers are physically near consumers"
      },
      {
        "letter": "C",
        "text": "Always deploy to US-East regardless of consumer location"
      },
      {
        "letter": "D",
        "text": "Use Hybrid only"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Choosing a CloudHub region geographically near consumers reduces network round-trip times. APAC consumers are best served by APAC regions like Sydney or Singapore. Region matters for latency.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Region directly affects latency over WAN."
      },
      "B": {
        "type": "Correct",
        "text": "Deploy to an APAC CloudHub region (e.g., Asia Pacific Sydney/Singapore) so workers are physically near consumers"
      },
      "C": {
        "type": "Incorrect",
        "text": "US-East is suboptimal for APAC consumers."
      },
      "D": {
        "type": "Incorrect",
        "text": "Hybrid is unrelated to region selection."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture — Global Worker Clouds & Geographic Latency Optimization (APAC)",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#global-worker-clouds"
      },
      "architectureGuide": {
        "title": "CloudHub High Availability & Disaster Recovery Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#high-availability"
      },
      "arc720": {
        "lesson": "Lesson 10 — Production",
        "anchor": "ARC720-Course-Content.md#10-production"
      }
    }
  },
  {
    "id": "q-089",
    "number": 89,
    "title": "Monitoring Analyzing - Which is the recommended way to expose",
    "domain": "Monitoring Analyzing",
    "topics": [
      "Log Aggregation",
      "Anypoint Monitoring"
    ],
    "prompt": "Which is the recommended way to expose Mule app and CloudHub-level metrics to a centralized enterprise observability stack (e.g., Splunk, Datadog)?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Monitoring forwarders/integrations or log appenders that ship logs/metrics to the enterprise stack"
      },
      {
        "letter": "B",
        "text": "Manual screenshots"
      },
      {
        "letter": "C",
        "text": "Reading Mule logs only on the worker file system"
      },
      {
        "letter": "D",
        "text": "Disabling logging entirely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Centralized observability is achieved by configuring log appenders (e.g., HTTP, Splunk, Datadog) and using Anypoint Monitoring's integrations to ship logs and metrics. This satisfies enterprise SIEM/observability needs without manual collection.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Anypoint Monitoring forwarders/integrations or log appenders that ship logs/metrics to the enterprise stack"
      },
      "B": {
        "type": "Incorrect",
        "text": "Screenshots are not observability."
      },
      "C": {
        "type": "Incorrect",
        "text": "On-worker log access is impractical and ephemeral."
      },
      "D": {
        "type": "Incorrect",
        "text": "Disabling logging eliminates observability entirely."
      }
    },
    "references": {
      "primary": {
        "title": "Searching and Querying Aggregated Logs in Anypoint Monitoring & SIEM (Splunk/Datadog) Forwarding",
        "url": "https://docs.mulesoft.com/monitoring/logs-search-hf#query-logs-from-the-search-bar"
      },
      "architectureGuide": {
        "title": "Using Built-in Mule App Dashboards for Telemetry and Metric Trends",
        "url": "https://docs.mulesoft.com/monitoring/app-dashboards#overview-charts"
      },
      "arc720": {
        "lesson": "Lesson 11 — Application network behavior",
        "anchor": "ARC720-Course-Content.md#11-application-network-behavior"
      }
    }
  },
  {
    "id": "q-090",
    "number": 90,
    "title": "Non Functional Requirements - Which design choice is MOST important for",
    "domain": "Non Functional Requirements",
    "topics": [
      "Caching Patterns",
      "Reliability Patterns",
      "Worker Sizing"
    ],
    "prompt": "Which design choice is MOST important for a synchronous API SLA target of 95th-percentile response time under 500 ms?",
    "options": [
      {
        "letter": "A",
        "text": "Use only Hybrid deployment"
      },
      {
        "letter": "B",
        "text": "Minimize chained synchronous calls, cache reference data, parallelize independent calls, and tune connector timeouts and worker capacity"
      },
      {
        "letter": "C",
        "text": "Disable Anypoint Monitoring"
      },
      {
        "letter": "D",
        "text": "Use only RAML"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Tail-latency SLAs require minimizing synchronous chains, parallelizing independent calls, caching repeated reference data, and tuning connector timeouts and worker capacity to absorb burstiness. Deployment topology and spec format alone are not sufficient.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Hybrid does not inherently meet tail-latency SLAs."
      },
      "B": {
        "type": "Correct",
        "text": "Minimize chained synchronous calls, cache reference data, parallelize independent calls, and tune connector timeouts and worker capacity"
      },
      "C": {
        "type": "Incorrect",
        "text": "Disabling Monitoring removes the means to verify SLA compliance."
      },
      "D": {
        "type": "Incorrect",
        "text": "RAML vs OAS does not affect runtime latency."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring — Performance Charts, Chained Latency Optimization, and 500ms SLAs",
        "url": "https://docs.mulesoft.com/monitoring/app-dashboards#performance-charts"
      },
      "architectureGuide": {
        "title": "Configuring Operational Alerts and Thresholds in Anypoint Monitoring",
        "url": "https://docs.mulesoft.com/monitoring/alerts#threshold"
      },
      "arc720": {
        "lesson": "Lesson 11 — Application network behavior",
        "anchor": "ARC720-Course-Content.md#11-application-network-behavior"
      }
    }
  },
  {
    "id": "q-091",
    "number": 91,
    "title": "Non Functional Requirements - Which Mule pattern provides bulkheadstyle isolation when",
    "domain": "Non Functional Requirements",
    "topics": [
      "Reliability Patterns",
      "Anypoint Mq"
    ],
    "prompt": "Which Mule pattern provides bulkhead-style isolation when a downstream dependency becomes slow or unstable?",
    "options": [
      {
        "letter": "A",
        "text": "Increase worker size only"
      },
      {
        "letter": "B",
        "text": "Use timeouts, retries with backoff, circuit breaker, and bulkhead-style separate flows or queues per dependency"
      },
      {
        "letter": "C",
        "text": "Disable error handling"
      },
      {
        "letter": "D",
        "text": "Force one global thread pool"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Resilience patterns â timeouts, capped retries with backoff, circuit-breaker behavior, and isolating slow dependencies in their own flows or queues â keep one bad downstream from exhausting all worker threads. Worker size alone does not provide isolation.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Bigger workers without isolation still get exhausted by a slow dependency."
      },
      "B": {
        "type": "Correct",
        "text": "Use timeouts, retries with backoff, circuit breaker, and bulkhead-style separate flows or queues per dependency"
      },
      "C": {
        "type": "Incorrect",
        "text": "Disabling error handling makes failures cascade."
      },
      "D": {
        "type": "Incorrect",
        "text": "A single global pool is the opposite of bulkhead isolation."
      }
    },
    "references": {
      "primary": {
        "title": "Microsoft Cloud Architecture Patterns — Circuit Breaker, Retries, and Bulkhead Resilience",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker"
      },
      "architectureGuide": {
        "title": "Anypoint MQ Overview — Asynchronous Message Buffering for Unstable Backends",
        "url": "https://docs.mulesoft.com/mq/#anypoint-mq-features"
      },
      "arc720": {
        "lesson": "Lesson 8 — Effective API implementations",
        "anchor": "ARC720-Course-Content.md#8-effective-api-implementations"
      }
    }
  },
  {
    "id": "q-092",
    "number": 92,
    "title": "Org Platform Foundations - Which is the correct understanding of API",
    "domain": "Org Platform Foundations",
    "topics": [
      "C4E",
      "Exchange Asset Management"
    ],
    "prompt": "Which is the correct understanding of API spec ownership in a federated, multi-business-group deployment?",
    "options": [
      {
        "letter": "A",
        "text": "Specs are owned by Anypoint Platform vendors"
      },
      {
        "letter": "B",
        "text": "Specs are typically owned by the producing line-of-business team in their business group, with central C4E governance ensuring standards"
      },
      {
        "letter": "C",
        "text": "Specs are owned by API consumers"
      },
      {
        "letter": "D",
        "text": "Specs cannot cross business groups"
      }
    ],
    "correctAnswer": "B",
    "explanation": "In federated operating models, the producing LoB team owns its specs while a central C4E enforces standards (taxonomy, naming, security, response shapes). Specs can be shared across business groups via Exchange so consumers in other groups can request access.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Vendors do not own customer-built specs."
      },
      "B": {
        "type": "Correct",
        "text": "Specs are typically owned by the producing line-of-business team in their business group, with central C4E governance ensuring standards"
      },
      "C": {
        "type": "Incorrect",
        "text": "Consumers consume specs; they do not own them."
      },
      "D": {
        "type": "Incorrect",
        "text": "Specs are commonly shared across business groups via Exchange."
      }
    },
    "references": {
      "primary": {
        "title": "Access Management — Business Group Spec Ownership & Federated Governance",
        "url": "https://docs.mulesoft.com/access-management/business-groups#business-group-hierarchy"
      },
      "architectureGuide": {
        "title": "Salesforce & MuleSoft Guide — Center for Enablement (C4E) Operating Model",
        "url": "https://www.salesforce.com/blog/what-is-a-center-for-enablement/"
      },
      "arc720": {
        "lesson": "Lesson 4 — Organizational and platform foundations",
        "anchor": "ARC720-Course-Content.md#4-organizational-and-platform-foundations"
      }
    }
  },
  {
    "id": "q-093",
    "number": 93,
    "title": "Api Implementation Design - An architect wants the SAME RAML spec",
    "domain": "Api Implementation Design",
    "topics": [
      "Raml Oas Design",
      "Api Lifecycle"
    ],
    "prompt": "An architect wants the SAME RAML spec to drive both API Manager governance AND the Mule implementation skeleton. Which Mule capability supports this directly?",
    "options": [
      {
        "letter": "A",
        "text": "APIkit, which scaffolds flows from a RAML/OAS specification"
      },
      {
        "letter": "B",
        "text": "MUnit"
      },
      {
        "letter": "C",
        "text": "Anypoint Visualizer"
      },
      {
        "letter": "D",
        "text": "Object Store v2"
      }
    ],
    "correctAnswer": "A",
    "explanation": "APIkit reads a RAML or OAS spec and scaffolds the Mule flows, validation, and routing for the API implementation, ensuring spec-driven implementation. The same spec is published to Exchange and used in API Manager for governance.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "APIkit, which scaffolds flows from a RAML/OAS specification"
      },
      "B": {
        "type": "Incorrect",
        "text": "MUnit tests behavior; it does not scaffold implementations."
      },
      "C": {
        "type": "Incorrect",
        "text": "Visualizer renders topology."
      },
      "D": {
        "type": "Incorrect",
        "text": "Object Store stores key/value data."
      }
    },
    "references": {
      "primary": {
        "title": "APIkit Overview — Generating Flows and Routers from RAML/OAS Specifications",
        "url": "https://docs.mulesoft.com/apikit/latest/#features"
      },
      "architectureGuide": {
        "title": "Designing API Specifications in Design Center",
        "url": "https://docs.mulesoft.com/design-center/#prerequisites-for-using-design-center"
      },
      "arc720": {
        "lesson": "Lesson 7 — Effective APIs",
        "anchor": "ARC720-Course-Content.md#7-effective-apis"
      }
    }
  },
  {
    "id": "q-094",
    "number": 94,
    "title": "Designing Sharing Apis - Which approach BEST allows architects to compose",
    "domain": "Designing Sharing Apis",
    "topics": [
      "Raml Oas Design",
      "Exchange Asset Management"
    ],
    "prompt": "Which approach BEST allows architects to compose APIs from reusable building blocks while still maintaining a single source of truth for shared types and traits?",
    "options": [
      {
        "letter": "A",
        "text": "Inline duplicate definitions in each spec"
      },
      {
        "letter": "B",
        "text": "Maintain RAML libraries and fragments published to Exchange and reference them from every API spec"
      },
      {
        "letter": "C",
        "text": "Maintain one mega-spec file containing all APIs"
      },
      {
        "letter": "D",
        "text": "Use only OAS without libraries"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Reusable RAML libraries and fragments in Exchange are the single source of truth for types and traits. Specs reference them, ensuring consistency and automatic propagation of updates while preserving small focused spec files.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Inlining duplicates definitions and breaks single-source-of-truth."
      },
      "B": {
        "type": "Correct",
        "text": "Maintain RAML libraries and fragments published to Exchange and reference them from every API spec"
      },
      "C": {
        "type": "Incorrect",
        "text": "Mega-specs are unmanageable and prevent independent versioning."
      },
      "D": {
        "type": "Incorrect",
        "text": "OAS supports references too; the question is about reuse strategy."
      }
    },
    "references": {
      "primary": {
        "title": "Design Center — Reusable RAML Libraries, Fragments, and Single Source of Truth in Exchange",
        "url": "https://docs.mulesoft.com/design-center/#prerequisites-for-using-design-center"
      },
      "architectureGuide": {
        "title": "Anypoint Exchange — Publishing Reusable API Fragments and Libraries",
        "url": "https://docs.mulesoft.com/exchange/#view-assets-by-business-group"
      },
      "arc720": {
        "lesson": "Lesson 7 — Effective APIs",
        "anchor": "ARC720-Course-Content.md#7-effective-apis"
      }
    }
  },
  {
    "id": "q-095",
    "number": 95,
    "title": "Deployment Options - Which statement about Mule Hybrid deployment is",
    "domain": "Deployment Options",
    "topics": [
      "Hybrid Deployment"
    ],
    "prompt": "Which statement about Mule Hybrid deployment is TRUE?",
    "options": [
      {
        "letter": "A",
        "text": "Hybrid is fully managed by MuleSoft"
      },
      {
        "letter": "B",
        "text": "Hybrid runs Mule runtimes on customer-managed servers (on-prem or IaaS) but is centrally managed via Anypoint Runtime Manager"
      },
      {
        "letter": "C",
        "text": "Hybrid does not support API Manager policies"
      },
      {
        "letter": "D",
        "text": "Hybrid can only run one application per server"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Hybrid runs Mule on customer-managed servers (on-prem or in customer cloud) while connected to Anypoint Runtime Manager for centralized control, policy distribution, monitoring, and deployment. It supports API Manager policies and multiple apps per server.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "MuleSoft does not manage the underlying servers in Hybrid."
      },
      "B": {
        "type": "Correct",
        "text": "Hybrid runs Mule runtimes on customer-managed servers (on-prem or IaaS) but is centrally managed via Anypoint Runtime Manager"
      },
      "C": {
        "type": "Incorrect",
        "text": "API Manager policies work with Hybrid via auto-discovery."
      },
      "D": {
        "type": "Incorrect",
        "text": "A Mule server can host multiple deployed apps."
      }
    },
    "references": {
      "primary": {
        "title": "Managing Standalone Mule Runtimes in Hybrid Cloud via Runtime Manager",
        "url": "https://docs.mulesoft.com/runtime-manager/servers-create#add-a-server"
      },
      "architectureGuide": {
        "title": "Managing Server Groups, Clusters, and Schedules in Hybrid Runtimes",
        "url": "https://docs.mulesoft.com/runtime-manager/hybrid-schedule-mgmt#view-and-manage-application-schedulers-in-runtime-manager"
      },
      "arc720": {
        "lesson": "Lesson 4 — Organizational and platform foundations",
        "anchor": "ARC720-Course-Content.md#4-organizational-and-platform-foundations"
      }
    }
  },
  {
    "id": "q-096",
    "number": 96,
    "title": "Api Implementation Design - Which strategy best handles credentials for Mule",
    "domain": "Api Implementation Design",
    "topics": [
      "Reliability Patterns"
    ],
    "prompt": "Which strategy best handles credentials for Mule apps calling external systems, while respecting per-environment differences?",
    "options": [
      {
        "letter": "A",
        "text": "Hardcode credentials in Mule XML"
      },
      {
        "letter": "B",
        "text": "Use property placeholders + secure (encrypted) properties + per-environment property files or platform secret stores"
      },
      {
        "letter": "C",
        "text": "Pass credentials in URL query strings"
      },
      {
        "letter": "D",
        "text": "Embed credentials in Git"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Property placeholders combined with secure (encrypted) properties and per-environment property files (or external secret stores) enable per-environment credentials without exposing secrets in source. Hardcoding, URL passing, or plain-text Git all fail basic security.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Hardcoding leaks secrets and prevents environment overrides."
      },
      "B": {
        "type": "Correct",
        "text": "Use property placeholders + secure (encrypted) properties + per-environment property files or platform secret stores"
      },
      "C": {
        "type": "Incorrect",
        "text": "URL credentials leak in logs and proxies."
      },
      "D": {
        "type": "Incorrect",
        "text": "Plain-text Git secrets are a security incident."
      }
    },
    "references": {
      "primary": {
        "title": "Mule Runtime — Secure Encrypted Properties, Placeholders & Environment Isolation",
        "url": "https://docs.mulesoft.com/mule-runtime/4.4/mmp-concept#configure-shared-libraries"
      },
      "architectureGuide": {
        "title": "Access Management Environments and Secure Configuration Management",
        "url": "https://docs.mulesoft.com/access-management/environments#types-of-environments"
      },
      "arc720": {
        "lesson": "Lesson 8 — Effective API implementations",
        "anchor": "ARC720-Course-Content.md#8-effective-api-implementations"
      }
    }
  },
  {
    "id": "q-097",
    "number": 97,
    "title": "Deploying Managing Apis - Which option BEST describes the role of",
    "domain": "Deploying Managing Apis",
    "topics": [
      "Auto Discovery",
      "Api Contracts Sla Tiers"
    ],
    "prompt": "Which option BEST describes the role of API Manager when a Mule API is deployed with auto-discovery enabled?",
    "options": [
      {
        "letter": "A",
        "text": "API Manager replaces the implementation"
      },
      {
        "letter": "B",
        "text": "API Manager is the system of record for the API instance, contracts, and policies; the runtime downloads and enforces those policies locally"
      },
      {
        "letter": "C",
        "text": "API Manager only stores RAML files"
      },
      {
        "letter": "D",
        "text": "API Manager is only used for billing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "API Manager is the source of truth for API instance metadata, contracts, and policies. With auto-discovery, the Mule runtime fetches the policy set for that API from API Manager and enforces it inline. Implementation lives in the Mule app, not in API Manager.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "API Manager governs; it does not implement business logic."
      },
      "B": {
        "type": "Correct",
        "text": "API Manager is the system of record for the API instance, contracts, and policies; the runtime downloads and enforces those policies locally"
      },
      "C": {
        "type": "Incorrect",
        "text": "Specs are stored in Exchange; API Manager governs instances."
      },
      "D": {
        "type": "Incorrect",
        "text": "API Manager is governance and enforcement, not billing."
      }
    },
    "references": {
      "primary": {
        "title": "API Autodiscovery Architecture — Pairing Mule Runtimes with API Manager",
        "url": "https://docs.mulesoft.com/api-manager/2.x/api-auto-discovery-new-concept#prerequisites"
      },
      "architectureGuide": {
        "title": "Client ID Enforcement & Gateway Policy Execution",
        "url": "https://docs.mulesoft.com/api-manager/2.x/client-id-based-policies#how-this-policy-works"
      },
      "arc720": {
        "lesson": "Lesson 8 — Effective API implementations",
        "anchor": "ARC720-Course-Content.md#8-effective-api-implementations"
      }
    }
  },
  {
    "id": "q-098",
    "number": 98,
    "title": "Non Functional Requirements - An architect must design an asynchronous notification",
    "domain": "Non Functional Requirements",
    "topics": [
      "Anypoint Mq"
    ],
    "prompt": "An architect must design an asynchronous notification fan-out where multiple Mule apps independently consume the same event. Which Anypoint MQ construct fits best?",
    "options": [
      {
        "letter": "A",
        "text": "A single FIFO queue"
      },
      {
        "letter": "B",
        "text": "A message exchange (publish/subscribe) with multiple subscribed queues, each consumed by a different app"
      },
      {
        "letter": "C",
        "text": "Object Store v2 keys"
      },
      {
        "letter": "D",
        "text": "VM connector across regions"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Anypoint MQ exchanges implement publish/subscribe: a publisher sends one message to the exchange, which routes a copy to each subscribed queue. Each consumer reads from its own queue, enabling independent fan-out. Single queues do not natively fan-out across apps.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A single queue would compete consumers, not fan out copies."
      },
      "B": {
        "type": "Correct",
        "text": "A message exchange (publish/subscribe) with multiple subscribed queues, each consumed by a different app"
      },
      "C": {
        "type": "Incorrect",
        "text": "Object Store is data, not pub/sub messaging."
      },
      "D": {
        "type": "Incorrect",
        "text": "VM is in-app, not cross-app or cross-region."
      }
    },
    "references": {
      "primary": {
        "title": "Sending Messages to Multiple Queues Using Anypoint MQ Message Exchanges (Pub/Sub)",
        "url": "https://docs.mulesoft.com/mq/mq-exchanges#create-a-message-exchange"
      },
      "architectureGuide": {
        "title": "Enterprise Integration Patterns — Publish-Subscribe Channel Pattern",
        "url": "https://www.enterpriseintegrationpatterns.com/patterns/messaging/PublishSubscribeChannel.html"
      },
      "arc720": {
        "lesson": "Lesson 9 — API-led connectivity with event-driven architecture",
        "anchor": "ARC720-Course-Content.md#9-api-led-connectivity-with-event-driven-architecture"
      }
    }
  },
  {
    "id": "q-099",
    "number": 99,
    "title": "Application Network Basics - Which is the correct interpretation of application",
    "domain": "Application Network Basics",
    "topics": [
      "Api Led Connectivity",
      "Three Layer Architecture",
      "C4E"
    ],
    "prompt": "Which is the correct interpretation of 'application network' in MuleSoft's vocabulary?",
    "options": [
      {
        "letter": "A",
        "text": "A flat catalog of every Mule app deployed"
      },
      {
        "letter": "B",
        "text": "A composable network of independently published, discoverable, governed APIs and integration assets that line-of-business teams can self-serve"
      },
      {
        "letter": "C",
        "text": "The Anypoint VPC topology"
      },
      {
        "letter": "D",
        "text": "An API gateway product"
      }
    ],
    "correctAnswer": "B",
    "explanation": "An application network is the network of APIs and assets â discoverable in Exchange, governed in API Manager, and consumable by any team via contracts â that enables LoB self-service and reuse. It is not a flat list, a VPC, or a single product.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A flat catalog misses the governance, reuse, and self-service aspects."
      },
      "B": {
        "type": "Correct",
        "text": "A composable network of independently published, discoverable, governed APIs and integration assets that line-of-business teams can self-serve"
      },
      "C": {
        "type": "Incorrect",
        "text": "Anypoint VPC is a networking primitive."
      },
      "D": {
        "type": "Incorrect",
        "text": "API gateway is one product within Anypoint, not the network concept itself."
      }
    },
    "references": {
      "primary": {
        "title": "API-Led Connectivity — Composable Application Networks and Line-of-Business Self-Service",
        "url": "https://docs.mulesoft.com/general/api-led-develop#step-3-2-understand-the-scaffolded-structure"
      },
      "architectureGuide": {
        "title": "Martin Fowler — Bounded Context & Composable Integration Networks",
        "url": "https://martinfowler.com/bliki/BoundedContext.html"
      },
      "arc720": {
        "lesson": "Lesson 5 — API identification, publication, and reuse",
        "anchor": "ARC720-Course-Content.md#5-api-identification-publication-and-reuse"
      }
    }
  },
  {
    "id": "q-100",
    "number": 100,
    "title": "Non Functional Requirements - Which approach BEST addresses both regulatory dataresidency",
    "domain": "Non Functional Requirements",
    "topics": [
      "Cloudhub Deployment",
      "Runtime Fabric",
      "Ha Dr Architecture"
    ],
    "prompt": "Which approach BEST addresses both regulatory data-residency for EU customers AND operational simplicity by keeping centralized Anypoint Platform management?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy all apps to a single US CloudHub region"
      },
      {
        "letter": "B",
        "text": "Deploy EU traffic to an EU CloudHub region (or RTF in EU customer infrastructure) while still managing centrally in Anypoint Platform"
      },
      {
        "letter": "C",
        "text": "Skip Anypoint Platform entirely for EU traffic"
      },
      {
        "letter": "D",
        "text": "Only run Hybrid in the US"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Keeping EU customer data inside an EU CloudHub region (or RTF on EU customer infrastructure) addresses data residency, while Anypoint Platform's central control plane provides unified governance, monitoring, and lifecycle management across regions and runtimes.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Single US region likely violates EU data-residency requirements."
      },
      "B": {
        "type": "Correct",
        "text": "Deploy EU traffic to an EU CloudHub region (or RTF in EU customer infrastructure) while still managing centrally in Anypoint Platform"
      },
      "C": {
        "type": "Incorrect",
        "text": "Skipping Anypoint Platform forfeits governance, monitoring, and reuse."
      },
      "D": {
        "type": "Incorrect",
        "text": "US-only Hybrid does not satisfy EU residency or low EU latency."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture — Global Worker Clouds & Geographic Data Residency (EU)",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#global-worker-clouds"
      },
      "architectureGuide": {
        "title": "Anypoint Runtime Fabric (RTF) on Customer Kubernetes Architecture",
        "url": "https://docs.mulesoft.com/runtime-fabric/latest/"
      },
      "arc720": {
        "lesson": "Lesson 10 — Production",
        "anchor": "ARC720-Course-Content.md#10-production"
      }
    }
  },
{
  "id": "q-101",
  "number": 101,
  "title": "Deploying Managing Apis - A platform team needs centralized policy control",
  "domain": "Deploying Managing Apis",
  "topics": [
    "Flex Gateway",
    "Connected Mode"
  ],
  "prompt": "A platform team needs Flex Gateway instances to receive policies from API Manager and publish analytics to Anypoint Platform. Which operating mode should they use?",
  "options": [
    {
      "letter": "A",
      "text": "Local mode with YAML-only configuration"
    },
    {
      "letter": "B",
      "text": "Connected mode registered to Anypoint Platform"
    },
    {
      "letter": "C",
      "text": "Runtime Fabric sidecar mode"
    },
    {
      "letter": "D",
      "text": "VPN passthrough mode"
    }
  ],
  "correctAnswer": "B",
  "explanation": "Connected mode lets Flex Gateway receive centrally managed API definitions and policies from API Manager and publish analytics to Anypoint Platform. Local mode is configured from local YAML files and is better suited to isolated or air-gapped use cases where centralized governance is not required.",
  "rationales": {
    "A": {
      "type": "Incorrect",
      "text": "Local mode is managed through local YAML files and does not provide central API Manager governance or Anypoint analytics."
    },
    "B": {
      "type": "Correct",
      "text": "Connected mode registered to Anypoint Platform"
    },
    "C": {
      "type": "Incorrect",
      "text": "Runtime Fabric is a deployment target for Mule runtimes, not a Flex Gateway operating mode."
    },
    "D": {
      "type": "Incorrect",
      "text": "VPN connectivity can complement gateway deployment, but it is not the gateway operating mode that enables API Manager control."
    }
  },
  "references": {
    "primary": {
      "title": "Flex Gateway Connected Mode",
      "url": "https://docs.mulesoft.com/gateway/latest/#connected_mode"
    },
    "architectureGuide": {
      "title": "API Manager Overview \u2014 Centralized Policy Control and Analytics",
      "url": "https://docs.mulesoft.com/api-manager/"
    },
    "arc720": {
      "lesson": "Lesson 10 \u2014 Production",
      "anchor": "ARC720-Course-Content.md#10-production"
    }
  }
},
{
  "id": "q-102",
  "number": 102,
  "title": "Deployment Options - Which option exposes ingress inside a Private",
  "domain": "Deployment Options",
  "topics": [
    "Private Spaces",
    "Flex Gateway"
  ],
  "prompt": "In CloudHub 2.0, which option lets architects expose a public ingress endpoint into an isolated private network while still using a MuleSoft-managed gateway?",
  "options": [
    {
      "letter": "A",
      "text": "Deploy a Managed Flex Gateway in the Private Space and enable a public endpoint"
    },
    {
      "letter": "B",
      "text": "Use Anypoint MQ queues as the ingress layer"
    },
    {
      "letter": "C",
      "text": "Run Flex Gateway only in local mode on developer laptops"
    },
    {
      "letter": "D",
      "text": "Replace the Private Space with Visualizer"
    }
  ],
  "correctAnswer": "A",
  "explanation": "A Managed Flex Gateway deployed in a CloudHub 2.0 Private Space can front services with a public ingress endpoint while preserving the isolation and traffic controls of the private network. MQ is asynchronous messaging, local developer gateways are not production ingress, and Visualizer is an observability tool rather than a networking control plane.",
  "rationales": {
    "A": {
      "type": "Correct",
      "text": "Deploy a Managed Flex Gateway in the Private Space and enable a public endpoint"
    },
    "B": {
      "type": "Incorrect",
      "text": "Anypoint MQ is for messaging, not for exposing inbound HTTP ingress into a private space."
    },
    "C": {
      "type": "Incorrect",
      "text": "Local developer deployment does not provide managed production ingress or private-space controls."
    },
    "D": {
      "type": "Incorrect",
      "text": "Visualizer maps dependencies; it does not host or expose network endpoints."
    }
  },
  "references": {
    "primary": {
      "title": "Deploy a Managed Flex Gateway to CloudHub 2.0 Private Spaces",
      "url": "https://docs.mulesoft.com/gateway/latest/flex-gateway-managed-set-up"
    },
    "architectureGuide": {
      "title": "CloudHub 2.0 Private Space Endpoints and Path Configuration",
      "url": "https://docs.mulesoft.com/cloudhub-2/ch2-config-endpoints-paths"
    },
    "arc720": {
      "lesson": "Lesson 10 \u2014 Production",
      "anchor": "ARC720-Course-Content.md#10-production"
    }
  }
},
{
  "id": "q-103",
  "number": 103,
  "title": "Org Platform Foundations - Which capability should gate API spec",
  "domain": "Org Platform Foundations",
  "topics": [
    "Api Governance",
    "Cicd Maven"
  ],
  "prompt": "A platform team wants every RAML or OAS change checked against enterprise standards before merge. Which MuleSoft capability should be integrated into the CI/CD pipeline?",
  "options": [
    {
      "letter": "A",
      "text": "Run Anypoint API Governance ruleset validation through the CLI or APIs as a pipeline gate"
    },
    {
      "letter": "B",
      "text": "Wait for Runtime Manager alerts after deployment"
    },
    {
      "letter": "C",
      "text": "Rely only on Exchange comments from reviewers"
    },
    {
      "letter": "D",
      "text": "Apply an SLA tier after the API is in production"
    }
  ],
  "correctAnswer": "A",
  "explanation": "Anypoint API Governance can validate API specifications against organizational rulesets during CI/CD so non-compliant changes are blocked before publication or deployment. Runtime alerts, reviewer comments, and post-deployment SLA tiers are useful in other parts of the lifecycle but do not provide an automated pre-merge standards gate.",
  "rationales": {
    "A": {
      "type": "Correct",
      "text": "Run Anypoint API Governance ruleset validation through the CLI or APIs as a pipeline gate"
    },
    "B": {
      "type": "Incorrect",
      "text": "Runtime Manager surfaces operational events after deployment, not design-time standards conformance before merge."
    },
    "C": {
      "type": "Incorrect",
      "text": "Manual comments do not provide consistent, automated enforcement across every repository."
    },
    "D": {
      "type": "Incorrect",
      "text": "SLA tiers govern consumer access, not design-time API specification quality."
    }
  },
  "references": {
    "primary": {
      "title": "CLI for API Governance \u2014 Automating Conformance Checks in CI/CD",
      "url": "https://docs.mulesoft.com/anypoint-cli/latest/api-governance"
    },
    "architectureGuide": {
      "title": "Anypoint API Governance Overview",
      "url": "https://docs.mulesoft.com/api-governance/"
    },
    "arc720": {
      "lesson": "Lesson 4 \u2014 Organizational and platform foundations",
      "anchor": "ARC720-Course-Content.md#4-organizational-and-platform-foundations"
    }
  }
},
{
  "id": "q-104",
  "number": 104,
  "title": "Designing Sharing Apis - Which Exchange lifecycle state signals an",
  "domain": "Designing Sharing Apis",
  "topics": [
    "Exchange Asset Management",
    "Lifecycle States"
  ],
  "prompt": "Which Anypoint Exchange lifecycle state should an asset version enter when it is ready for broad reuse and should no longer be overwritten?",
  "options": [
    {
      "letter": "A",
      "text": "Development"
    },
    {
      "letter": "B",
      "text": "Stable"
    },
    {
      "letter": "C",
      "text": "Deprecated"
    },
    {
      "letter": "D",
      "text": "Draft"
    }
  ],
  "correctAnswer": "B",
  "explanation": "Stable is the lifecycle state used for an Exchange asset version that is ready for consumption by other teams and should not be republished or overwritten. Development is still mutable, deprecated signals retirement, and draft is not the lifecycle state used by Exchange for released assets.",
  "rationales": {
    "A": {
      "type": "Incorrect",
      "text": "Development is intended for in-progress work and can still be republished."
    },
    "B": {
      "type": "Correct",
      "text": "Stable"
    },
    "C": {
      "type": "Incorrect",
      "text": "Deprecated indicates the asset should be phased out, not newly promoted for broad reuse."
    },
    "D": {
      "type": "Incorrect",
      "text": "Draft is not the Exchange lifecycle state used to mark a reusable released version."
    }
  },
  "references": {
    "primary": {
      "title": "Anypoint Exchange Asset Lifecycle States",
      "url": "https://docs.mulesoft.com/exchange/latest/lifecycle"
    },
    "architectureGuide": {
      "title": "Publishing Assets Using the Exchange API",
      "url": "https://docs.mulesoft.com/exchange/publishing-assets-using-the-exchange-api"
    },
    "arc720": {
      "lesson": "Lesson 5 \u2014 API identification, publication, and reuse",
      "anchor": "ARC720-Course-Content.md#5-api-identification-publication-and-reuse"
    }
  }
},
{
  "id": "q-105",
  "number": 105,
  "title": "Org Platform Foundations - Which API Governance capability provides portfoliowide",
  "domain": "Org Platform Foundations",
  "topics": [
    "Api Governance",
    "Compliance Reporting"
  ],
  "prompt": "Which Anypoint capability gives architects a portfolio-wide view of governance coverage, conformance rates, and downloadable compliance reports across services?",
  "options": [
    {
      "letter": "A",
      "text": "API Governance Dashboard"
    },
    {
      "letter": "B",
      "text": "Anypoint Visualizer"
    },
    {
      "letter": "C",
      "text": "Runtime Manager alerts"
    },
    {
      "letter": "D",
      "text": "Exchange comments"
    }
  ],
  "correctAnswer": "A",
  "explanation": "The API Governance Dashboard centralizes visibility into how much of the portfolio is covered by governance and how well services conform to the active rulesets. Visualizer shows dependency topology, Runtime Manager focuses on operations, and Exchange comments are collaboration artifacts rather than compliance reporting.",
  "rationales": {
    "A": {
      "type": "Correct",
      "text": "API Governance Dashboard"
    },
    "B": {
      "type": "Incorrect",
      "text": "Visualizer shows application and API relationships, not governance conformance metrics."
    },
    "C": {
      "type": "Incorrect",
      "text": "Runtime Manager alerts are operational notifications, not portfolio governance reports."
    },
    "D": {
      "type": "Incorrect",
      "text": "Exchange comments are manual discussions and cannot provide portfolio-wide compliance analytics."
    }
  },
  "references": {
    "primary": {
      "title": "Anypoint API Governance Overview and Dashboard Metrics",
      "url": "https://docs.mulesoft.com/api-governance/"
    },
    "architectureGuide": {
      "title": "Getting Started with Anypoint API Governance",
      "url": "https://docs.mulesoft.com/api-governance/get-started"
    },
    "arc720": {
      "lesson": "Lesson 4 \u2014 Organizational and platform foundations",
      "anchor": "ARC720-Course-Content.md#4-organizational-and-platform-foundations"
    }
  }
}
];
