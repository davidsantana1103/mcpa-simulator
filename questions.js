window.MCPA_QUESTIONS = [
  {
    "id": "q-001",
    "number": 1,
    "title": "Application Network Basics - Interface, implementation, and client",
    "domain": "Explaining application network basics",
    "topics": [
      "API Interface",
      "API Implementation"
    ],
    "prompt": "An architect is explaining API-led connectivity terminology to a new delivery team. The team has a RAML definition of a Customer API, a Mule application that fulfills requests to it, and a mobile app that calls it. Which statement correctly identifies these elements?",
    "options": [
      {
        "letter": "A",
        "text": "The RAML is the API interface, the Mule app is the API implementation, and the mobile app is the API client"
      },
      {
        "letter": "B",
        "text": "The RAML is the API implementation, the Mule app is the API proxy, and the mobile app is the API interface"
      },
      {
        "letter": "C",
        "text": "All three together form the API proxy, which API Manager deploys as a single unit"
      },
      {
        "letter": "D",
        "text": "The Mule app is the API interface, the RAML is the API client, and the mobile app is the API implementation"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. MuleSoft distinguishes the API interface (the contract, typically a RAML or OAS specification), the API implementation (the application, such as a Mule application, that fulfills the contract), and the API client (the application that invokes the API). Keeping these separate lets the implementation change without affecting clients as long as the interface is preserved.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "A RAML definition contains no executable logic, and a consuming app is not the interface it calls."
      },
      "C": {
        "type": "Incorrect",
        "text": "An API proxy is a separate gateway application that enforces policies; it is not the combination of these elements."
      },
      "D": {
        "type": "Incorrect",
        "text": "These roles are reversed; the Mule app executes the logic and the mobile app consumes it."
      },
      "A": {
        "type": "Correct",
        "text": "The specification defines the contract, the deployed application implements it, and the consumer invokes it."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Platform Glossary",
        "url": "https://docs.mulesoft.com/general/glossary"
      },
      "secondary": {
        "title": "MuleSoft — What is an API?",
        "url": "https://www.mulesoft.com/resources/api/what-is-an-api"
      }
    }
  },
  {
    "id": "q-002",
    "number": 2,
    "title": "Application Network Basics - Governing a non-Mule implementation",
    "domain": "Explaining application network basics",
    "topics": [
      "API Gateway",
      "API Proxy"
    ],
    "prompt": "A company wants to add a Node.js API, built by a separate team, to its application network. The API must have client ID enforcement and rate limiting managed centrally in API Manager, and the Node.js code cannot be changed. Which approach is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "Rewrite the Node.js API as a Mule application before it can be managed by Anypoint Platform"
      },
      {
        "letter": "B",
        "text": "Protect the Node.js API with an API gateway, such as a proxy or Flex Gateway, managed in API Manager"
      },
      {
        "letter": "C",
        "text": "Publish the Node.js API's specification in Exchange, which automatically enforces the policies"
      },
      {
        "letter": "D",
        "text": "Implement client ID checks and rate limiting in each consumer of the Node.js API"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. API Manager applies policies through an API gateway. For APIs that are not implemented as Mule applications, or that cannot be changed, a gateway such as a Mule API proxy or Anypoint Flex Gateway is placed in front of the implementation. The gateway enforces policies like client ID enforcement and rate limiting while the backend API remains untouched.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "A gateway in front of the implementation enforces API Manager policies without requiring changes to the implementation code."
      },
      "A": {
        "type": "Incorrect",
        "text": "Rewriting is unnecessary; gateways can manage APIs regardless of how they are implemented."
      },
      "C": {
        "type": "Incorrect",
        "text": "Exchange is a catalog for discovery and reuse; it does not enforce runtime policies."
      },
      "D": {
        "type": "Incorrect",
        "text": "Enforcement on the client side cannot be trusted and duplicates logic across consumers."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — API Proxies",
        "url": "https://docs.mulesoft.com/api-manager/latest/proxy-latest-concept"
      },
      "secondary": {
        "title": "Anypoint Flex Gateway Documentation",
        "url": "https://docs.mulesoft.com/gateway/latest/"
      }
    }
  },
  {
    "id": "q-003",
    "number": 3,
    "title": "Application Network Basics - Application network versus ESB",
    "domain": "Explaining application network basics",
    "topics": [
      "Application Network",
      "ESB"
    ],
    "prompt": "A CIO asks how an API-led application network differs from the centralized ESB the company has run for ten years. Which answer best describes the difference?",
    "options": [
      {
        "letter": "A",
        "text": "An application network moves all integration logic into a single large Mule application so it is easier to govern"
      },
      {
        "letter": "B",
        "text": "An application network replaces HTTP-based APIs with message queues so systems are fully decoupled"
      },
      {
        "letter": "C",
        "text": "API implementations are deployed independently and reused through self-service, rather than built centrally in one shared hub"
      },
      {
        "letter": "D",
        "text": "An application network removes the need for any integration runtime because APIs call each other through Exchange"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. A centralized ESB typically concentrates integration work in one team and one shared infrastructure. An application network instead connects applications, data, and devices through reusable APIs that teams can discover and self-serve, and each API implementation can be built, deployed, and changed independently. This decentralization is what helps close the IT delivery gap.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A single monolithic application recreates the central bottleneck of the ESB."
      },
      "B": {
        "type": "Incorrect",
        "text": "API-led connectivity is primarily based on web APIs; messaging can complement it but does not replace APIs."
      },
      "C": {
        "type": "Correct",
        "text": "An application network grows from independently deployed, discoverable, reusable APIs instead of a central team owning all integrations."
      },
      "D": {
        "type": "Incorrect",
        "text": "Exchange catalogs assets; API implementations still run on a runtime such as Mule runtime engine."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft — Application networks are the next generation of integration middleware",
        "url": "https://www.mulesoft.com/api/application-network-integration-middleware"
      },
      "secondary": {
        "title": "MuleSoft — What is an application network?",
        "url": "https://www.mulesoft.com/api/what-is-an-application-network"
      }
    }
  },
  {
    "id": "q-004",
    "number": 4,
    "title": "Application Network Basics - Describing the API contract",
    "domain": "Explaining application network basics",
    "topics": [
      "API Specification",
      "RAML"
    ],
    "prompt": "Before any implementation work begins, several teams want to agree on the operations, resources, and data types of a new Product API and let consumers try it out. Which technology choice best supports this?",
    "options": [
      {
        "letter": "A",
        "text": "Build the Mule application first and generate the contract from its flows once the implementation is complete"
      },
      {
        "letter": "B",
        "text": "Write the contract as a WSDL, because REST APIs cannot carry a formal, machine-readable contract"
      },
      {
        "letter": "C",
        "text": "Document the API in a shared wiki page and have consumers rely on the first deployment to learn its behavior"
      },
      {
        "letter": "D",
        "text": "Define the API in RAML or OAS in Design Center, mock it, and publish the specification to Exchange"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. RAML and OAS are formal API contract languages; defining the API in Design Center lets the team agree on operations, resources, and data types, mock it for consumers to try, and publish it to Exchange. Building first and generating the contract later (A) inverts the contract-first approach, REST APIs do have formal contracts (B), and a wiki page is not a machine-readable contract (C).",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Design Center supports contract-first design, mocking, and publishing to Exchange."
      },
      "A": {
        "type": "Incorrect",
        "text": "Generating the contract from a finished implementation inverts contract-first design."
      },
      "B": {
        "type": "Incorrect",
        "text": "REST APIs do carry formal, machine-readable contracts such as RAML and OAS."
      },
      "C": {
        "type": "Incorrect",
        "text": "A wiki page is not a machine-readable contract and gives consumers nothing to try."
      }
    },
    "references": {
      "primary": {
        "title": "Design Center — Mocking Service",
        "url": "https://docs.mulesoft.com/design-center/design-mocking-service"
      },
      "secondary": {
        "title": "Anypoint Exchange Overview",
        "url": "https://docs.mulesoft.com/exchange/"
      }
    }
  },
  {
    "id": "q-005",
    "number": 5,
    "title": "Application Network Basics - Technologies that implement API-led connectivity",
    "domain": "Explaining application network basics",
    "topics": [
      "Anypoint Platform",
      "API-led Connectivity"
    ],
    "prompt": "An architect is listing the technologies the company will use to implement API-led connectivity on Anypoint Platform. Which two items are correct? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Mule applications deployed to the Mule runtime engine as API implementations"
      },
      {
        "letter": "B",
        "text": "Anypoint Exchange as the runtime that routes requests between the APIs"
      },
      {
        "letter": "C",
        "text": "Design Center as the production host for the Experience APIs"
      },
      {
        "letter": "D",
        "text": "Anypoint Visualizer as the engine that executes the API transformations"
      },
      {
        "letter": "E",
        "text": "API gateways whose policies are configured centrally in API Manager"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Correct answers: A and E. API-led connectivity is implemented on Anypoint Platform by building API implementations as Mule applications on the Mule runtime engine and by managing the APIs with API Manager, which applies policies through API gateways. Exchange, Design Center, and Visualizer support discovery, design, and observability rather than serving API traffic.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Mule runtime engine hosts the applications that implement the APIs."
      },
      "E": {
        "type": "Correct",
        "text": "API Manager applies policies through the API gateways."
      },
      "B": {
        "type": "Incorrect",
        "text": "Exchange is a catalog; it does not route API traffic."
      },
      "C": {
        "type": "Incorrect",
        "text": "Design Center is for designing and building, not a production host."
      },
      "D": {
        "type": "Incorrect",
        "text": "Visualizer displays the network graph; DataWeave performs transformations."
      }
    },
    "references": {
      "primary": {
        "title": "API Gateway Capabilities (Mule 4)",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-gateway-capabilities-mule4"
      },
      "secondary": {
        "title": "Anypoint Platform Glossary",
        "url": "https://docs.mulesoft.com/general/glossary"
      }
    }
  },
  {
    "id": "q-006",
    "number": 6,
    "title": "Application Network Basics - Gateway for containerized microservices",
    "domain": "Explaining application network basics",
    "topics": [
      "Flex Gateway",
      "API Gateway"
    ],
    "prompt": "A company runs dozens of microservices in Kubernetes, written in Java and Go. It wants to bring them into the application network with consistent security policies and analytics managed from Anypoint Platform, without rewriting them. Which technology is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "A Mule application that reimplements the microservices' logic and applies the policies"
      },
      {
        "letter": "B",
        "text": "Anypoint Flex Gateway deployed in the Kubernetes environment and managed through API Manager"
      },
      {
        "letter": "C",
        "text": "Anypoint MQ queues placed in front of each microservice to apply the security policies"
      },
      {
        "letter": "D",
        "text": "Anypoint Exchange asset pages for each microservice, with the policy settings recorded in their descriptions"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Flex Gateway runs in Kubernetes, applies API Manager policies to non-Mule APIs, and provides analytics without rewriting the services. Reimplementing the microservices as a Mule application (A) is exactly the rewrite the company wants to avoid, MQ queues (C) are messaging rather than policy enforcement, and Exchange pages (D) document assets rather than enforce policies.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Flex Gateway applies API Manager policies and analytics to non-Mule services in Kubernetes."
      },
      "A": {
        "type": "Incorrect",
        "text": "Reimplementing the microservices is the rewrite the company wants to avoid."
      },
      "C": {
        "type": "Incorrect",
        "text": "MQ queues are messaging; they do not enforce API policies."
      },
      "D": {
        "type": "Incorrect",
        "text": "Exchange descriptions document assets; they do not enforce policies."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Flex Gateway Documentation",
        "url": "https://docs.mulesoft.com/gateway/latest/"
      },
      "secondary": {
        "title": "API Manager Overview",
        "url": "https://docs.mulesoft.com/api-manager/latest/latest-overview-concept"
      }
    }
  },
  {
    "id": "q-007",
    "number": 7,
    "title": "Application Network Basics - Characteristics of a RESTful web API",
    "domain": "Explaining application network basics",
    "topics": [
      "Web APIs",
      "REST"
    ],
    "prompt": "A team is reviewing a proposed API design to decide whether it follows RESTful web API principles. Which characteristic should they expect?",
    "options": [
      {
        "letter": "A",
        "text": "A single endpoint that receives the operation name and its parameters in the request body"
      },
      {
        "letter": "B",
        "text": "Server-side sessions that keep the client's state between calls so requests can be smaller"
      },
      {
        "letter": "C",
        "text": "Resources identified by URIs and manipulated with standard HTTP methods in stateless requests"
      },
      {
        "letter": "D",
        "text": "Payloads in a fixed XML format described by a WSDL document, with SOAP headers for routing"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. RESTful web APIs expose resources identified by URIs, manipulate them with standard HTTP methods, and keep requests stateless. A single endpoint carrying the operation name in the body (A) is RPC style, server-side sessions (B) contradict statelessness, and WSDL and SOAP (D) describe a SOAP web service rather than a RESTful one.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "URIs, standard HTTP methods, and statelessness are RESTful characteristics."
      },
      "A": {
        "type": "Incorrect",
        "text": "An operation name in the body is RPC style, not RESTful."
      },
      "B": {
        "type": "Incorrect",
        "text": "Server-side sessions contradict the statelessness of REST."
      },
      "D": {
        "type": "Incorrect",
        "text": "WSDL and SOAP describe a SOAP web service, not a RESTful API."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft — What is a RESTful API?",
        "url": "https://www.mulesoft.com/resources/api/restful-api"
      },
      "secondary": {
        "title": "MuleSoft — What is REST API design?",
        "url": "https://www.mulesoft.com/resources/api/what-is-rest-api-design"
      }
    }
  },
  {
    "id": "q-008",
    "number": 8,
    "title": "Application Network Basics - The API as a contract",
    "domain": "Explaining application network basics",
    "topics": [
      "Web APIs",
      "API Contract"
    ],
    "prompt": "A team must replace the database behind its Inventory API with a new technology. Fifteen applications consume the API. What property of a well-designed web API allows this change without affecting the consumers?",
    "options": [
      {
        "letter": "A",
        "text": "Web APIs automatically convert any database schema into the existing response format"
      },
      {
        "letter": "B",
        "text": "All consumers are redeployed together with the API whenever the implementation changes"
      },
      {
        "letter": "C",
        "text": "Consumers connect to the database directly, so the API layer is not involved in the change"
      },
      {
        "letter": "D",
        "text": "The API interface is a contract that hides the implementation, so it can change if the contract is kept"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. A web API defines a contract between consumers and the provider. Consumers rely on the interface, including resources, methods, and data types, and not on how it is implemented. As long as the implementation continues to honor the contract, backends can be replaced or refactored without changing the consumers.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "No API technology converts schemas automatically; the implementation must keep honoring the contract."
      },
      "B": {
        "type": "Incorrect",
        "text": "Coordinated redeployment of every consumer is what an API contract is meant to avoid."
      },
      "D": {
        "type": "Correct",
        "text": "Consumers depend only on the published interface, so implementation details can change behind it."
      },
      "C": {
        "type": "Incorrect",
        "text": "Direct database access would break the consumers, which is why access goes through the API."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft — What is an API?",
        "url": "https://www.mulesoft.com/resources/api/what-is-an-api"
      },
      "secondary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      }
    }
  },
  {
    "id": "q-009",
    "number": 9,
    "title": "Application Network Basics - Statelessness and scaling",
    "domain": "Explaining application network basics",
    "topics": [
      "Web APIs",
      "Scalability"
    ],
    "prompt": "An Experience API experiences unpredictable traffic spikes. The architect wants to add API implementation instances behind a load balancer so that any instance can serve any request. Which characteristic of the web API design makes this easiest?",
    "options": [
      {
        "letter": "A",
        "text": "Requests are stateless, so no client session data has to be stored on a specific instance"
      },
      {
        "letter": "B",
        "text": "The API uses a long-lived TCP connection that stays open between the client and one instance"
      },
      {
        "letter": "C",
        "text": "The API stores each client's state in the memory of whichever instance first served it"
      },
      {
        "letter": "D",
        "text": "Each client is pinned to one instance with server-side sessions for the duration of its use"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Statelessness is a core characteristic of RESTful web APIs: each request carries all the information needed to process it. Because no client state is kept on a particular server, any instance can handle any request, so capacity can be increased simply by adding instances behind a load balancer.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "Long-lived connections tie clients to specific instances, complicating scaling."
      },
      "C": {
        "type": "Incorrect",
        "text": "In-memory per-client state is lost or unavailable when another instance handles the next request."
      },
      "A": {
        "type": "Correct",
        "text": "Stateless requests can be routed to any instance, which allows simple horizontal scaling."
      },
      "D": {
        "type": "Incorrect",
        "text": "Session pinning makes load balancing and scaling harder and fails over poorly."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft — What is a RESTful API?",
        "url": "https://www.mulesoft.com/resources/api/restful-api"
      },
      "secondary": {
        "title": "MuleSoft — What is REST API design?",
        "url": "https://www.mulesoft.com/resources/api/what-is-rest-api-design"
      }
    }
  },
  {
    "id": "q-010",
    "number": 10,
    "title": "Application Network Basics - Standard HTTP semantics",
    "domain": "Explaining application network basics",
    "topics": [
      "Web APIs",
      "HTTP"
    ],
    "prompt": "A consumer sends a request to an Order API with a JSON body that is missing required fields. The API team wants consumers to handle this situation consistently using standard web API semantics. How should the API respond?",
    "options": [
      {
        "letter": "A",
        "text": "Return a 500 Internal Server Error because the order could not be processed"
      },
      {
        "letter": "B",
        "text": "Return a 400 Bad Request status with an error body describing the missing fields"
      },
      {
        "letter": "C",
        "text": "Return a 200 OK with an error flag in the response body so clients parse one shape"
      },
      {
        "letter": "D",
        "text": "Return a 422 Unprocessable Entity without a body, since the request was syntactically valid"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. A malformed request is a client error, so the API returns 400 Bad Request with an error body that names the missing fields, letting every consumer handle it consistently. A 500 (A) wrongly blames the server, a 200 with an error flag (C) hides the failure from standard HTTP handling, and a bodyless 422 (D) omits the detail consumers need.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "400 Bad Request with an error body is the standard signal for a malformed request."
      },
      "A": {
        "type": "Incorrect",
        "text": "A 500 blames the server for a client error."
      },
      "C": {
        "type": "Incorrect",
        "text": "Returning 200 with an error flag hides the failure from standard HTTP handling."
      },
      "D": {
        "type": "Incorrect",
        "text": "A bodyless response omits the detail the consumer needs to correct the request."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft — What is REST API design?",
        "url": "https://www.mulesoft.com/resources/api/what-is-rest-api-design"
      },
      "secondary": {
        "title": "MuleSoft — What is a RESTful API?",
        "url": "https://www.mulesoft.com/resources/api/restful-api"
      }
    }
  },
  {
    "id": "q-011",
    "number": 11,
    "title": "Application Network Basics - Role of web APIs in an application network",
    "domain": "Explaining application network basics",
    "topics": [
      "Web APIs",
      "Application Network"
    ],
    "prompt": "An architect is briefing a steering committee on why the company is moving from many point-to-point integrations to an application network. Which statement best describes the role that web APIs play in an application network?",
    "options": [
      {
        "letter": "A",
        "text": "They centralize integration logic in one shared runtime, so that systems of record no longer need to expose their own data"
      },
      {
        "letter": "B",
        "text": "They let applications call each other's databases directly, using a contract to keep the access governed"
      },
      {
        "letter": "C",
        "text": "They expose the capabilities of applications, data, and devices as discoverable, reusable, and governed building blocks"
      },
      {
        "letter": "D",
        "text": "They are private implementation contracts that each team may change at will, because consumers depend on the implementation"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. An application network connects applications, data, and devices through APIs that expose assets on the network so other parts of the business can discover, reuse, and compose them in a governed way. Option A describes a centralized ESB or hub rather than a network built from reusable APIs, option B bypasses the API abstraction and couples consumers to backend schemas, and option D contradicts the idea of an interface that consumers depend on.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "APIs are the abstraction through which assets are exposed on the network for others to discover and reuse."
      },
      "A": {
        "type": "Incorrect",
        "text": "This describes a centralized ESB/hub, not an application network built from independently owned APIs."
      },
      "B": {
        "type": "Incorrect",
        "text": "APIs exist to hide backend data stores; direct database access reintroduces tight coupling."
      },
      "D": {
        "type": "Incorrect",
        "text": "Consumers bind to the interface, so it must be stable rather than changed at will."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft — What is an application network?",
        "url": "https://www.mulesoft.com/api/what-is-an-application-network"
      },
      "secondary": {
        "title": "MuleSoft — Application networks are the next generation of integration middleware",
        "url": "https://www.mulesoft.com/api/application-network-integration-middleware"
      }
    }
  },
  {
    "id": "q-012",
    "number": 12,
    "title": "Application Network Basics - Opportunities API owned by the CRM team",
    "domain": "Explaining application network basics",
    "topics": [
      "Layers",
      "System API"
    ],
    "prompt": "The CRM platform team builds an Opportunities API that provides read and write access to opportunity records in Salesforce for any team that needs them. It contains no business rules beyond those enforced by Salesforce, and its contract has not changed in two years. To which tier does this API belong?",
    "options": [
      {
        "letter": "A",
        "text": "Experience tier"
      },
      {
        "letter": "B",
        "text": "Gateway tier"
      },
      {
        "letter": "C",
        "text": "Process tier"
      },
      {
        "letter": "D",
        "text": "System tier"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. API tiers are assigned by ownership, functional focus, and rate of change. An API owned by the team responsible for a system, focused on unlocking that single system of record, and with a stable contract is a System API.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Experience APIs are shaped for a specific channel and usually change frequently."
      },
      "B": {
        "type": "Incorrect",
        "text": "API-led connectivity defines System, Process, and Experience tiers; a gateway is a runtime component, not a tier."
      },
      "C": {
        "type": "Incorrect",
        "text": "Process APIs orchestrate data across systems or apply business rules, which this API does not do."
      },
      "D": {
        "type": "Correct",
        "text": "It is owned by the system's team, exposes one system of record, and changes rarely."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      },
      "secondary": {
        "title": "MuleSoft Whitepaper — API-led connectivity",
        "url": "https://www.mulesoft.com/lp/whitepaper/api/api-led-connectivity"
      }
    }
  },
  {
    "id": "q-013",
    "number": 13,
    "title": "Application Network Basics - Smart-watch companion API",
    "domain": "Explaining application network basics",
    "topics": [
      "Layers",
      "Experience API"
    ],
    "prompt": "A fitness company builds a Watch Summary API that returns a very small payload tailored to its smart-watch app. The watch app team owns it and changes it with almost every app release. The API reuses an existing Activity Process API. To which tier does the Watch Summary API belong?",
    "options": [
      {
        "letter": "A",
        "text": "Experience tier, because a channel team owns it, it is tailored to one device, and it ships with the app"
      },
      {
        "letter": "B",
        "text": "System tier, because it unlocks activity data from a system of record so other teams can reuse it"
      },
      {
        "letter": "C",
        "text": "Process tier, because it reuses the Activity Process API and adds channel-specific logic on top of it"
      },
      {
        "letter": "D",
        "text": "Experience tier, but only once it is published to Exchange and reused by a second channel"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Experience APIs are owned by the channel or app team, adapt data to a specific consumer, and change at the pace of that experience. Reusing a Process API does not move an API into the Process tier (C), the API does not unlock a system of record (B), and reuse by another channel is not what makes an API an Experience API (D).",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "It reuses a Process API rather than unlocking a system of record."
      },
      "A": {
        "type": "Correct",
        "text": "Channel ownership, device-specific tailoring, and app-paced change define an Experience API."
      },
      "C": {
        "type": "Incorrect",
        "text": "Reusing a Process API does not make it a Process API; it adds no reusable cross-system logic."
      },
      "D": {
        "type": "Incorrect",
        "text": "Publishing or reuse by another channel is not the criterion; ownership and purpose are."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      },
      "secondary": {
        "title": "MuleSoft Whitepaper — API-led connectivity",
        "url": "https://www.mulesoft.com/lp/whitepaper/api/api-led-connectivity"
      }
    }
  },
  {
    "id": "q-014",
    "number": 14,
    "title": "Application Network Basics - Returns handling across systems",
    "domain": "Explaining application network basics",
    "topics": [
      "Layers",
      "Process API"
    ],
    "prompt": "An e-commerce company's Returns API checks the order in the order management system, issues a refund through the payment platform, and books a return label with the carrier. The customer service business unit owns the returns policy that it implements, and it is used by the website, the call center, and stores. To which tier does it belong?",
    "options": [
      {
        "letter": "A",
        "text": "Experience tier"
      },
      {
        "letter": "B",
        "text": "Process tier"
      },
      {
        "letter": "C",
        "text": "Integration tier"
      },
      {
        "letter": "D",
        "text": "System tier"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Process APIs implement business processes by orchestrating and combining data from multiple System APIs. They are typically owned by the business unit that owns the process and are reused by several channels. They change when the business process changes rather than when a UI changes.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "It is not tailored to one channel; three different channels reuse it."
      },
      "C": {
        "type": "Incorrect",
        "text": "API-led connectivity does not define an integration tier; the tiers are System, Process, and Experience."
      },
      "B": {
        "type": "Correct",
        "text": "It orchestrates several systems to implement a business process owned by a business unit and used by many channels."
      },
      "D": {
        "type": "Incorrect",
        "text": "It spans three systems and applies a business policy rather than unlocking one system."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      },
      "secondary": {
        "title": "MuleSoft Whitepaper — API-led connectivity",
        "url": "https://www.mulesoft.com/lp/whitepaper/api/api-led-connectivity"
      }
    }
  },
  {
    "id": "q-015",
    "number": 15,
    "title": "Application Network Basics - Characteristics of the System tier",
    "domain": "Explaining application network basics",
    "topics": [
      "Layers",
      "System API"
    ],
    "prompt": "A retail company is kicking off its API-led connectivity program. The integration lead is briefing a new architect on which APIs each team will own and how fast each tier’s contracts are expected to change. When describing the System API that will unlock the SAP order management system, which two characteristics should the architect call out?",
    "options": [
      {
        "letter": "A",
        "text": "They implement cross-system business processes such as order fulfillment"
      },
      {
        "letter": "B",
        "text": "They are tailored to the data format required by a single mobile or web channel"
      },
      {
        "letter": "C",
        "text": "They are often owned by central IT or the team that runs the underlying system"
      },
      {
        "letter": "D",
        "text": "They must be exposed publicly to external partners so the data can be reused"
      },
      {
        "letter": "E",
        "text": "Their contracts change relatively slowly compared with APIs in the other tiers"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Correct answers: C and E. System APIs unlock a system of record, so they are typically owned by the team that runs that system and their contracts change slowly. Implementing cross-system business processes (A) is the Process tier, tailoring to one channel (B) is the Experience tier, and System APIs are usually kept internal rather than exposed publicly (D).",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "System APIs are typically owned by the team that runs the underlying system."
      },
      "E": {
        "type": "Correct",
        "text": "Their contracts change slowly because they reflect a stable system of record."
      },
      "A": {
        "type": "Incorrect",
        "text": "Cross-system business processes belong to the Process tier."
      },
      "B": {
        "type": "Incorrect",
        "text": "Tailoring to a single channel belongs to the Experience tier."
      },
      "D": {
        "type": "Incorrect",
        "text": "System APIs are usually internal rather than exposed to external partners."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      },
      "secondary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      }
    }
  },
  {
    "id": "q-016",
    "number": 16,
    "title": "Application Network Basics - IT operating model and tiers",
    "domain": "Explaining application network basics",
    "topics": [
      "Layers",
      "IT Operating Model"
    ],
    "prompt": "A company adopts a new IT operating model in which central IT produces reusable assets, and the lines of business and app developers consume those assets to deliver projects themselves. How does this model typically map to the API tiers?",
    "options": [
      {
        "letter": "A",
        "text": "Central IT builds Experience APIs; LoB teams build System APIs for the systems they use"
      },
      {
        "letter": "B",
        "text": "App developers build System APIs; central IT builds all Process APIs to keep control of business logic"
      },
      {
        "letter": "C",
        "text": "Central IT builds all three tiers, and LoB teams only submit requirements"
      },
      {
        "letter": "D",
        "text": "Central IT produces System APIs; LoB teams and app developers build Process and Experience APIs on them"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. MuleSoft's operating model for closing the IT delivery gap shifts central IT from delivering every project to producing reusable assets. Central IT typically unlocks core systems through System APIs, while lines of business and app developers self-serve those assets to build Process and Experience APIs and deliver projects faster.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "LoB teams building their own System APIs to shared systems leads to duplication, and central IT lacks channel knowledge."
      },
      "B": {
        "type": "Incorrect",
        "text": "App developers lack backend expertise, and centralizing all Process APIs recreates the IT bottleneck."
      },
      "C": {
        "type": "Incorrect",
        "text": "This is the traditional delivery model that the new operating model is meant to replace."
      },
      "D": {
        "type": "Correct",
        "text": "Central IT unlocks core systems once, and teams closer to the business compose and consume them."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Whitepaper — API-led connectivity",
        "url": "https://www.mulesoft.com/lp/whitepaper/api/api-led-connectivity"
      },
      "secondary": {
        "title": "MuleSoft — What is an application network?",
        "url": "https://www.mulesoft.com/api/what-is-an-application-network"
      }
    }
  },
  {
    "id": "q-017",
    "number": 17,
    "title": "Application Network Basics - Discovering existing assets",
    "domain": "Explaining application network basics",
    "topics": [
      "Anypoint Exchange",
      "Reuse"
    ],
    "prompt": "Developers in a large company often build new integrations without knowing that suitable APIs already exist. Which Anypoint Platform component should be used to address this?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Exchange, where reusable APIs and other assets can be discovered and self-served"
      },
      {
        "letter": "B",
        "text": "Runtime Manager, which lists every application that is deployed in the organization"
      },
      {
        "letter": "C",
        "text": "Anypoint Monitoring, which shows the APIs that are receiving traffic in production"
      },
      {
        "letter": "D",
        "text": "Access Management, which records which teams are allowed to use which environments"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Exchange is the catalog where teams discover reusable APIs and other assets and self-serve them. Runtime Manager (B) lists deployed applications but not the reusable assets, Monitoring (C) shows runtime traffic rather than available APIs, and Access Management (D) controls permissions rather than discovery.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Exchange is the catalog where reusable assets are discovered and self-served."
      },
      "B": {
        "type": "Incorrect",
        "text": "Runtime Manager lists deployments, not the catalog of reusable assets."
      },
      "C": {
        "type": "Incorrect",
        "text": "Monitoring shows traffic; it does not help developers find APIs to reuse."
      },
      "D": {
        "type": "Incorrect",
        "text": "Access Management controls permissions, not discovery."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Exchange Overview",
        "url": "https://docs.mulesoft.com/exchange/"
      },
      "secondary": {
        "title": "Anypoint Platform Glossary",
        "url": "https://docs.mulesoft.com/general/glossary"
      }
    }
  },
  {
    "id": "q-018",
    "number": 18,
    "title": "Application Network Basics - Applying policies and contracts",
    "domain": "Explaining application network basics",
    "topics": [
      "API Manager",
      "Anypoint Platform"
    ],
    "prompt": "A platform team must apply rate limiting to an API, approve which client applications may call it, and view its usage analytics. Which Anypoint Platform component provides these capabilities?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Exchange, which catalogs the API and lists the teams that own it"
      },
      {
        "letter": "B",
        "text": "API Manager, which applies policies, manages client contracts, and reports usage"
      },
      {
        "letter": "C",
        "text": "Anypoint Visualizer, which shows the API's dependencies and traffic in real time"
      },
      {
        "letter": "D",
        "text": "Design Center, which authors the API specification and its security schemes"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. API Manager applies policies such as rate limiting, manages client application contracts and their approval, and reports API usage analytics. Exchange (A) catalogs assets, Visualizer (C) shows the dependency graph, and Design Center (D) authors the specification.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "API Manager applies policies, manages contracts, and reports usage."
      },
      "A": {
        "type": "Incorrect",
        "text": "Exchange catalogs assets; it does not apply policies or approve clients."
      },
      "C": {
        "type": "Incorrect",
        "text": "Visualizer shows the dependency graph, not policy or contract management."
      },
      "D": {
        "type": "Incorrect",
        "text": "Design Center authors the specification; it does not enforce policies."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager Overview",
        "url": "https://docs.mulesoft.com/api-manager/latest/latest-overview-concept"
      },
      "secondary": {
        "title": "API Gateway Capabilities (Mule 4)",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-gateway-capabilities-mule4"
      }
    }
  },
  {
    "id": "q-019",
    "number": 19,
    "title": "Application Network Basics - Control plane versus runtime plane",
    "domain": "Explaining application network basics",
    "topics": [
      "Anypoint Platform",
      "Control Plane"
    ],
    "prompt": "An architect explains Anypoint Platform's architecture to the security team. Which component belongs to the runtime plane rather than the control plane?",
    "options": [
      {
        "letter": "A",
        "text": "API Manager, where policies and client contracts are configured"
      },
      {
        "letter": "B",
        "text": "Anypoint Exchange, where API specifications and other assets are published"
      },
      {
        "letter": "C",
        "text": "The Mule runtime engine hosting the deployed API implementations"
      },
      {
        "letter": "D",
        "text": "Access Management, where users, teams, and permissions are administered"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. The Mule runtime engine runs the deployed API implementations and processes API traffic, which makes it part of the runtime plane. API Manager, Exchange, and Access Management (A, B, D) are control-plane services used to configure, catalog, and administer the platform.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "The Mule runtime engine processes API traffic and belongs to the runtime plane."
      },
      "A": {
        "type": "Incorrect",
        "text": "API Manager is a control-plane service for configuration."
      },
      "B": {
        "type": "Incorrect",
        "text": "Exchange is a control-plane service for catalogs and assets."
      },
      "D": {
        "type": "Incorrect",
        "text": "Access Management is a control-plane service for administration."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Platform Glossary",
        "url": "https://docs.mulesoft.com/general/glossary"
      },
      "secondary": {
        "title": "Anypoint Platform Documentation Home",
        "url": "https://docs.mulesoft.com/general/"
      }
    }
  },
  {
    "id": "q-020",
    "number": 20,
    "title": "Application Network Basics - Seeing the application network",
    "domain": "Explaining application network basics",
    "topics": [
      "Anypoint Visualizer",
      "Application Network"
    ],
    "prompt": "An architect needs a real-time diagram that shows which Mule applications and APIs call each other, grouped by API-led layer, to assess the impact of retiring an old System API. Which Anypoint Platform component provides this?",
    "options": [
      {
        "letter": "A",
        "text": "Runtime Manager, which lists every application and its workers per environment"
      },
      {
        "letter": "B",
        "text": "Anypoint Monitoring, whose custom dashboards chart API latency and errors"
      },
      {
        "letter": "C",
        "text": "Anypoint Exchange, whose asset pages list the versions each API depends on"
      },
      {
        "letter": "D",
        "text": "Anypoint Visualizer, which draws the dependency graph grouped by layer"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Visualizer draws the application network from observed traffic and groups the nodes by API-led layer, so the impact of retiring a System API is visible. Runtime Manager (A) lists deployments, Monitoring (B) charts metrics rather than dependencies, and Exchange (C) catalogs assets without runtime call relationships.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Visualizer draws the dependency graph grouped by API-led layer."
      },
      "A": {
        "type": "Incorrect",
        "text": "Runtime Manager lists deployments and workers, not call relationships."
      },
      "B": {
        "type": "Incorrect",
        "text": "Monitoring charts metrics rather than dependencies."
      },
      "C": {
        "type": "Incorrect",
        "text": "Exchange catalogs assets without runtime call relationships."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Visualizer Overview",
        "url": "https://docs.mulesoft.com/visualizer/"
      },
      "secondary": {
        "title": "Anypoint Platform Glossary",
        "url": "https://docs.mulesoft.com/general/glossary"
      }
    }
  },
  {
    "id": "q-021",
    "number": 21,
    "title": "Application Network Basics - Matching needs to components",
    "domain": "Explaining application network basics",
    "topics": [
      "Anypoint Platform",
      "Platform Components"
    ],
    "prompt": "A team needs to (1) deploy and scale a Mule application, (2) create dashboards and alerts on its performance, and (3) manage which users can access which business groups. Which components meet these needs, in order?",
    "options": [
      {
        "letter": "A",
        "text": "Runtime Manager, Anypoint Monitoring, Access Management"
      },
      {
        "letter": "B",
        "text": "Exchange, Runtime Manager, API Manager"
      },
      {
        "letter": "C",
        "text": "Design Center, API Manager, Runtime Manager"
      },
      {
        "letter": "D",
        "text": "API Manager, Anypoint Visualizer, Exchange"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Runtime Manager deploys, scales, and manages applications; Anypoint Monitoring provides dashboards, metrics, and alerts; and Access Management handles users, roles, teams, and business groups. Knowing the responsibility of each high-level component is essential when designing operations on Anypoint Platform.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "Exchange does not deploy applications, and API Manager does not manage user access to business groups."
      },
      "C": {
        "type": "Incorrect",
        "text": "Design Center is for design, and neither API Manager nor Runtime Manager manages users and business groups."
      },
      "A": {
        "type": "Correct",
        "text": "These components handle deployment, observability, and identity and access respectively."
      },
      "D": {
        "type": "Incorrect",
        "text": "API Manager manages APIs and policies, Visualizer draws the network, and Exchange catalogs assets."
      }
    },
    "references": {
      "primary": {
        "title": "Runtime Manager Overview",
        "url": "https://docs.mulesoft.com/runtime-manager/"
      },
      "secondary": {
        "title": "Anypoint Monitoring Overview",
        "url": "https://docs.mulesoft.com/monitoring/"
      }
    }
  },
  {
    "id": "q-022",
    "number": 22,
    "title": "Organizational Foundations - Purpose of a new C4E",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "C4E",
      "IT Operating Model"
    ],
    "prompt": "A company's central integration team has a nine-month backlog of requests from the lines of business, and the CIO wants to clear it without hiring dozens of central developers. Leadership agrees to set up a Center for Enablement (C4E). Which mandate best reflects how a C4E should operate?",
    "options": [
      {
        "letter": "A",
        "text": "Own and deliver the highest-priority integrations so that a small team of central experts builds every API consistently"
      },
      {
        "letter": "B",
        "text": "Enable the lines of business to deliver their own projects by providing reusable assets, standards, and guidance"
      },
      {
        "letter": "C",
        "text": "Define the integration standards and review every API design before delivery teams may begin implementation"
      },
      {
        "letter": "D",
        "text": "Select and operate the company's integration tooling, leaving delivery practices to each team"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. A C4E is an enablement function: it helps distributed teams deliver their own integrations by supplying reusable assets, standards, and guidance. Owning delivery (A) recreates the central bottleneck, gating every design (C) slows teams without building capability, and tooling-only support (D) leaves delivery practices unaddressed.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Taking over delivery recreates the central bottleneck the C4E is meant to remove."
      },
      "C": {
        "type": "Incorrect",
        "text": "Blanket design reviews do not build capability and stall delivery teams."
      },
      "D": {
        "type": "Incorrect",
        "text": "A C4E also enables delivery practices and reusable assets, not just tooling."
      },
      "B": {
        "type": "Correct",
        "text": "A C4E enables LoB teams to self-serve with assets, standards, and guidance."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is a Center for Enablement (C4E)?",
        "url": "https://www.salesforce.com/blog/what-is-a-center-for-enablement/"
      },
      "secondary": {
        "title": "MuleSoft Whitepaper — API-led connectivity",
        "url": "https://www.mulesoft.com/lp/whitepaper/api/api-led-connectivity"
      }
    }
  },
  {
    "id": "q-023",
    "number": 23,
    "title": "Organizational Foundations - Primary KPI for a C4E",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "C4E",
      "KPIs"
    ],
    "prompt": "Six months after establishing a C4E, the CIO wants one metric that best shows whether the C4E is achieving its goal of building a reusable application network. Which KPI is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "The number of hours C4E members spend in project steering meetings"
      },
      {
        "letter": "B",
        "text": "The total lines of code written by the C4E team members each month"
      },
      {
        "letter": "C",
        "text": "The number of consumers reusing each API published in Exchange"
      },
      {
        "letter": "D",
        "text": "The number of servers provisioned for the integration platform"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. C4E success is measured by outcomes such as reuse and adoption, not by the C4E's own output. Metrics like the number of consumers per API, Exchange asset consumption, and how many teams are delivering with platform assets show whether the application network is growing through self-service and reuse.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Time spent in meetings is an activity measure, not an outcome measure."
      },
      "C": {
        "type": "Correct",
        "text": "Reuse of published assets directly measures whether the application network is delivering value."
      },
      "B": {
        "type": "Incorrect",
        "text": "Output volume of the C4E itself says nothing about enablement or reuse by others."
      },
      "D": {
        "type": "Incorrect",
        "text": "Infrastructure size does not indicate whether assets are being reused."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Reusable KPIs for reusable APIs",
        "url": "https://blogs.mulesoft.com/api-integration/strategy/build-reusable-apis-track-kpis/"
      },
      "secondary": {
        "title": "MuleSoft Blog — Integration Analytics: From Definition to KPI Dashboard",
        "url": "https://blogs.mulesoft.com/api-integration/strategy/integration-analytics-dashboard/"
      }
    }
  },
  {
    "id": "q-024",
    "number": 24,
    "title": "Organizational Foundations - Choose two C4E KPIs",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "C4E",
      "KPIs"
    ],
    "prompt": "A C4E lead is building a dashboard to report the C4E's progress to executives. Which two KPIs are most appropriate? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "The number of Mule runtime versions installed across environments"
      },
      {
        "letter": "B",
        "text": "The percentage of projects delivered exclusively by the C4E team"
      },
      {
        "letter": "C",
        "text": "The number of support tickets closed personally by C4E members"
      },
      {
        "letter": "D",
        "text": "The number of lines of business actively delivering projects on Anypoint Platform"
      },
      {
        "letter": "E",
        "text": "The reuse rate of APIs and assets published in Anypoint Exchange"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Correct answers: D and E. Typical C4E KPIs measure adoption and reuse: how many lines of business use the platform, how many assets are published and consumed in Exchange, how many consumers each API has, and how project delivery speed improves. Metrics that measure work done by the C4E itself do not reflect its enabling role.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Broad LoB adoption shows the C4E is enabling teams beyond central IT."
      },
      "A": {
        "type": "Incorrect",
        "text": "Version counts are an operational detail, not a measure of C4E success."
      },
      "B": {
        "type": "Incorrect",
        "text": "A rising share of C4E-delivered projects indicates centralization, not enablement."
      },
      "C": {
        "type": "Incorrect",
        "text": "A C4E should enable self-service rather than measure how much work it does itself."
      },
      "E": {
        "type": "Correct",
        "text": "Reuse is the core value of an application network and a key C4E outcome."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Integration Analytics: From Definition to KPI Dashboard",
        "url": "https://blogs.mulesoft.com/api-integration/strategy/integration-analytics-dashboard/"
      },
      "secondary": {
        "title": "Salesforce Blog — What Is a Center for Enablement (C4E)?",
        "url": "https://www.salesforce.com/blog/what-is-a-center-for-enablement/"
      }
    }
  },
  {
    "id": "q-025",
    "number": 25,
    "title": "Organizational Foundations - Starting a C4E",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "C4E",
      "Adoption"
    ],
    "prompt": "A company is starting its MuleSoft journey and wants to establish a C4E without delaying its first strategic project. What is the recommended approach?",
    "options": [
      {
        "letter": "A",
        "text": "Start small alongside the first strategic projects, harvest reusable assets, and grow the C4E over time"
      },
      {
        "letter": "B",
        "text": "Spend a year defining standards for every possible integration use case before any project begins"
      },
      {
        "letter": "C",
        "text": "Hire an external delivery team to build every API, leaving the C4E to approve the deliverables"
      },
      {
        "letter": "D",
        "text": "Wait until at least fifty APIs exist, then form a C4E to clean up and standardize them"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. The recommended way to start a C4E is to seed it alongside the first strategic projects, capture reusable assets as you go, and let the team grow. Front-loading a year of standards (B) delays delivery, outsourcing all delivery (C) prevents the C4E from building capability, and waiting for a large API estate (D) leaves early projects inconsistent.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Starting small with the first projects lets the C4E learn and produce reusable assets immediately."
      },
      "B": {
        "type": "Incorrect",
        "text": "A year of upfront standards delays value and rarely anticipates real needs."
      },
      "C": {
        "type": "Incorrect",
        "text": "Outsourcing delivery keeps the C4E from building internal capability."
      },
      "D": {
        "type": "Incorrect",
        "text": "Deferring the C4E leaves early APIs inconsistent and harder to standardize later."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is a Center for Enablement (C4E)?",
        "url": "https://www.salesforce.com/blog/what-is-a-center-for-enablement/"
      },
      "secondary": {
        "title": "Trailhead — Explore MuleSoft Catalyst Delivery Methodology",
        "url": "https://trailhead.salesforce.com/content/learn/modules/mulesoft-catalyst-playbooks/learn-about-the-mulesoft-catalyst-delivery-methodology"
      }
    }
  },
  {
    "id": "q-026",
    "number": 26,
    "title": "Organizational Foundations - Automating KPI collection",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "C4E",
      "KPIs"
    ],
    "prompt": "A C4E wants to report monthly on the number of published assets, the number of managed APIs, the number of client applications, and the number of deployed applications per business group, without manual counting. What is the most suitable approach?",
    "options": [
      {
        "letter": "A",
        "text": "Count the API specifications stored in the source code repositories across all teams"
      },
      {
        "letter": "B",
        "text": "Pull the counts from the Exchange, API Manager, and Runtime Manager APIs and feed the C4E dashboard"
      },
      {
        "letter": "C",
        "text": "Ask every project team to fill in a monthly spreadsheet with its asset and deployment counts"
      },
      {
        "letter": "D",
        "text": "Parse the Mule application logs from every runtime to infer the counts"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Anypoint Platform exposes the required data through the Exchange, API Manager, and Runtime Manager APIs, so a dashboard can collect the metrics automatically. Counting only specifications in repositories (A) misses managed APIs, clients, and deployments; spreadsheets (C) require manual effort and drift; and log parsing (D) cannot reliably infer asset or contract counts.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "The platform APIs provide authoritative counts that can be collected without manual work."
      },
      "A": {
        "type": "Incorrect",
        "text": "Repository specifications are not the same as published assets, managed APIs, or clients."
      },
      "C": {
        "type": "Incorrect",
        "text": "Manual spreadsheets reintroduce the counting effort the C4E wants to remove."
      },
      "D": {
        "type": "Incorrect",
        "text": "Runtime logs do not contain authoritative asset or contract counts."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Integration Analytics: From Definition to KPI Dashboard",
        "url": "https://blogs.mulesoft.com/api-integration/strategy/integration-analytics-dashboard/"
      },
      "secondary": {
        "title": "MuleSoft Blog — Reusable KPIs for reusable APIs",
        "url": "https://blogs.mulesoft.com/api-integration/strategy/build-reusable-apis-track-kpis/"
      }
    }
  },
  {
    "id": "q-027",
    "number": 27,
    "title": "Organizational Foundations - C4E versus traditional CoE",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "C4E",
      "Center of Excellence"
    ],
    "prompt": "An executive asks how a C4E differs from the Integration Competency Center (ICC) the company ran in the past. Which statement best describes the difference?",
    "options": [
      {
        "letter": "A",
        "text": "An ICC is staffed by business users, while a C4E is staffed only by infrastructure engineers"
      },
      {
        "letter": "B",
        "text": "An ICC uses governance, while a C4E has no governance responsibilities at all"
      },
      {
        "letter": "C",
        "text": "An ICC delivers centrally; a C4E enables distributed teams to deliver and reuse"
      },
      {
        "letter": "D",
        "text": "An ICC focuses on APIs, while a C4E focuses only on batch and file integrations"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Traditional ICCs or centers of excellence concentrate integration delivery in one central team, which often becomes a bottleneck. A C4E is a cross-functional team that enables lines of business to deliver themselves, by producing reusable assets, best practices, and lightweight governance and by measuring success through adoption and reuse.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A C4E is cross-functional and includes business and IT roles."
      },
      "B": {
        "type": "Incorrect",
        "text": "A C4E still defines standards and lightweight governance to keep the network consistent."
      },
      "D": {
        "type": "Incorrect",
        "text": "The difference is the operating model, not the integration style."
      },
      "C": {
        "type": "Correct",
        "text": "The C4E's role is enablement and reuse rather than central delivery."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is a Center for Enablement (C4E)?",
        "url": "https://www.salesforce.com/blog/what-is-a-center-for-enablement/"
      },
      "secondary": {
        "title": "MuleSoft Whitepaper — API-led connectivity",
        "url": "https://www.mulesoft.com/lp/whitepaper/api/api-led-connectivity"
      }
    }
  },
  {
    "id": "q-028",
    "number": 28,
    "title": "Organizational Foundations - Catalyst pillars",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "MuleSoft Catalyst",
      "Methodology"
    ],
    "prompt": "A program manager asks how MuleSoft Catalyst structures its methodology. Which answer is correct?",
    "options": [
      {
        "letter": "A",
        "text": "Around four sequential phases: requirements, design, build, and production support"
      },
      {
        "letter": "B",
        "text": "Around two tracks: platform installation and developer certification"
      },
      {
        "letter": "C",
        "text": "Around the three API-led layers: System, Process, and Experience"
      },
      {
        "letter": "D",
        "text": "Around three pillars: business outcomes, technology delivery, and organizational enablement"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Catalyst is structured around three pillars: business outcomes, technology delivery, and organizational enablement. A four-phase delivery lifecycle (A) is a generic project method, installation and certification (B) are activities rather than the methodology's structure, and the API-led layers (C) are an architecture pattern.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Catalyst is organized around the business outcomes, technology delivery, and organizational enablement pillars."
      },
      "A": {
        "type": "Incorrect",
        "text": "A four-phase lifecycle is a generic delivery method, not Catalyst's structure."
      },
      "B": {
        "type": "Incorrect",
        "text": "Installation and certification are activities, not the methodology's structure."
      },
      "C": {
        "type": "Incorrect",
        "text": "The API-led layers are an architecture pattern, not Catalyst's structure."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Catalyst — Consulting and Methodology",
        "url": "https://www.mulesoft.com/support-and-services/consulting"
      },
      "secondary": {
        "title": "Trailhead — Explore MuleSoft Catalyst Delivery Methodology",
        "url": "https://trailhead.salesforce.com/content/learn/modules/mulesoft-catalyst-playbooks/learn-about-the-mulesoft-catalyst-delivery-methodology"
      }
    }
  },
  {
    "id": "q-029",
    "number": 29,
    "title": "Organizational Foundations - Finding Catalyst best practices",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "MuleSoft Catalyst",
      "Knowledge Hub"
    ],
    "prompt": "A newly formed C4E wants to use MuleSoft's proven playbooks, best practices, and templates rather than inventing its own operating procedures. Where should it look?",
    "options": [
      {
        "letter": "A",
        "text": "The MuleSoft Catalyst Knowledge Hub, which provides the playbooks and templates"
      },
      {
        "letter": "B",
        "text": "API Manager's built-in policy templates, which encode integration best practices"
      },
      {
        "letter": "C",
        "text": "Anypoint Monitoring's dashboard templates, which encode observability best practices"
      },
      {
        "letter": "D",
        "text": "Runtime Manager's application settings, which encode deployment best practices"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. MuleSoft Catalyst provides the playbooks, best practices, and templates through the Catalyst Knowledge Hub. Policy templates (B), dashboard templates (C), and application settings (D) are platform features rather than MuleSoft's methodology and operating guidance.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The Catalyst Knowledge Hub provides the playbooks, best practices, and templates."
      },
      "B": {
        "type": "Incorrect",
        "text": "API Manager policy templates are platform features, not Catalyst guidance."
      },
      "C": {
        "type": "Incorrect",
        "text": "Dashboard templates are platform features, not Catalyst guidance."
      },
      "D": {
        "type": "Incorrect",
        "text": "Application settings are platform features, not Catalyst guidance."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Catalyst — Consulting and Methodology",
        "url": "https://www.mulesoft.com/support-and-services/consulting"
      },
      "secondary": {
        "title": "MuleSoft Catalyst",
        "url": "https://www.mulesoft.com/catalyst"
      }
    }
  },
  {
    "id": "q-030",
    "number": 30,
    "title": "Organizational Foundations - Business outcomes pillar",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "MuleSoft Catalyst",
      "Business Outcomes"
    ],
    "prompt": "At the start of a MuleSoft program, executives cannot agree on what success looks like, and IT is building APIs without a link to business goals. Which Catalyst activity addresses this first?",
    "options": [
      {
        "letter": "A",
        "text": "Publish every existing integration to Exchange so teams can begin reusing assets"
      },
      {
        "letter": "B",
        "text": "Define the business outcomes and their KPIs, and align the stakeholders around them"
      },
      {
        "letter": "C",
        "text": "Enroll all developers in certification training so delivery can start sooner"
      },
      {
        "letter": "D",
        "text": "Install Mule runtimes in every environment so teams can begin building immediately"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. The business outcomes pillar starts by defining what success means, with KPIs, and aligning stakeholders so the technical work is tied to business goals. Publishing assets (A), training (C), and installing runtimes (D) are delivery and enablement activities that come after the outcomes are agreed.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Defining business outcomes and KPIs aligns stakeholders and links the work to business goals."
      },
      "A": {
        "type": "Incorrect",
        "text": "Publishing assets is a delivery activity that follows the outcomes work."
      },
      "C": {
        "type": "Incorrect",
        "text": "Training is an enablement activity that follows the outcomes work."
      },
      "D": {
        "type": "Incorrect",
        "text": "Installing runtimes is a delivery activity that follows the outcomes work."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Catalyst — Consulting and Methodology",
        "url": "https://www.mulesoft.com/support-and-services/consulting"
      },
      "secondary": {
        "title": "Trailhead — Explore MuleSoft Catalyst Delivery Methodology",
        "url": "https://trailhead.salesforce.com/content/learn/modules/mulesoft-catalyst-playbooks/learn-about-the-mulesoft-catalyst-delivery-methodology"
      }
    }
  },
  {
    "id": "q-031",
    "number": 31,
    "title": "Organizational Foundations - Benefit of Catalyst",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "MuleSoft Catalyst",
      "Benefits"
    ],
    "prompt": "A company has purchased Anypoint Platform and asks what the main benefit of adopting the MuleSoft Catalyst approach would be. Which answer is most accurate?",
    "options": [
      {
        "letter": "A",
        "text": "An automated code generator that builds complete APIs from business requirements"
      },
      {
        "letter": "B",
        "text": "A separate runtime engine that executes Mule applications faster than Mule runtime"
      },
      {
        "letter": "C",
        "text": "An outcome-driven methodology with reusable assets and services that speeds time to value"
      },
      {
        "letter": "D",
        "text": "A licensing model that removes the need to size vCores and flows"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Catalyst is an outcome-driven approach that combines a methodology, reusable assets, and services to speed time to value. It is not a code generator (A), a different runtime engine (B), or a licensing model (D).",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Catalyst is an outcome-driven methodology with assets and services that speeds time to value."
      },
      "A": {
        "type": "Incorrect",
        "text": "Catalyst is not a code generator."
      },
      "B": {
        "type": "Incorrect",
        "text": "Catalyst does not replace the Mule runtime engine."
      },
      "D": {
        "type": "Incorrect",
        "text": "Catalyst does not change how vCores and flows are licensed."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Catalyst — Consulting and Methodology",
        "url": "https://www.mulesoft.com/support-and-services/consulting"
      },
      "secondary": {
        "title": "MuleSoft Catalyst",
        "url": "https://www.mulesoft.com/catalyst"
      }
    }
  },
  {
    "id": "q-032",
    "number": 32,
    "title": "Organizational Foundations - Organizational enablement pillar",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "MuleSoft Catalyst",
      "Organizational Enablement"
    ],
    "prompt": "Which activity belongs to the organizational enablement pillar of MuleSoft Catalyst?",
    "options": [
      {
        "letter": "A",
        "text": "Configuring CloudHub 2.0 private spaces for the production environment"
      },
      {
        "letter": "B",
        "text": "Implementing the first System API in front of the ERP"
      },
      {
        "letter": "C",
        "text": "Defining the revenue targets for a new digital channel"
      },
      {
        "letter": "D",
        "text": "Establishing a C4E and providing training and internal support"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Organizational enablement covers the people and operating model: establishing a C4E and providing training and internal support. Configuring private spaces (A) and implementing a System API (B) are technology delivery, and defining revenue targets (C) belongs to business outcomes.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Establishing a C4E with training and support is organizational enablement."
      },
      "A": {
        "type": "Incorrect",
        "text": "Configuring private spaces is technology delivery."
      },
      "B": {
        "type": "Incorrect",
        "text": "Implementing a System API is technology delivery."
      },
      "C": {
        "type": "Incorrect",
        "text": "Defining revenue targets is business outcomes."
      }
    },
    "references": {
      "primary": {
        "title": "Trailhead — Explore MuleSoft Catalyst Delivery Methodology",
        "url": "https://trailhead.salesforce.com/content/learn/modules/mulesoft-catalyst-playbooks/learn-about-the-mulesoft-catalyst-delivery-methodology"
      },
      "secondary": {
        "title": "MuleSoft Catalyst — Consulting and Methodology",
        "url": "https://www.mulesoft.com/support-and-services/consulting"
      }
    }
  },
  {
    "id": "q-033",
    "number": 33,
    "title": "Organizational Foundations - Catalyst playbook approach",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "MuleSoft Catalyst",
      "Playbooks"
    ],
    "prompt": "Catalyst playbooks follow a consistent approach for each path, such as the C4E or Anypoint Platform playbooks. Which sequence describes that approach?",
    "options": [
      {
        "letter": "A",
        "text": "Plan, establish the foundation, scale, and measure"
      },
      {
        "letter": "B",
        "text": "Design, implement, test, and deploy"
      },
      {
        "letter": "C",
        "text": "Discover, contract, consume, and retire"
      },
      {
        "letter": "D",
        "text": "Assess, migrate, decommission, and archive"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Catalyst playbooks follow a plan, establish foundation, scale, and measure approach for each path. Design through deploy (B) is a project lifecycle, discover through retire (C) describes an asset lifecycle, and assess through archive (D) describes a migration.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Plan, establish foundation, scale, and measure is the Catalyst playbook sequence."
      },
      "B": {
        "type": "Incorrect",
        "text": "Design through deploy is a project lifecycle, not the playbook sequence."
      },
      "C": {
        "type": "Incorrect",
        "text": "Discover through retire describes an asset lifecycle."
      },
      "D": {
        "type": "Incorrect",
        "text": "Assess through archive describes a migration, not the playbook sequence."
      }
    },
    "references": {
      "primary": {
        "title": "Trailhead — Explore MuleSoft Catalyst Delivery Methodology",
        "url": "https://trailhead.salesforce.com/content/learn/modules/mulesoft-catalyst-playbooks/learn-about-the-mulesoft-catalyst-delivery-methodology"
      },
      "secondary": {
        "title": "MuleSoft Catalyst — Consulting and Methodology",
        "url": "https://www.mulesoft.com/support-and-services/consulting"
      }
    }
  },
  {
    "id": "q-034",
    "number": 34,
    "title": "Organizational Foundations - Payloads must stay on premises",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "Hosting Options",
      "Hybrid"
    ],
    "prompt": "A bank wants MuleSoft to manage the Anypoint Platform control plane, but regulations require that all customer transaction data be processed only in the bank's own data center. Which hosting option best meets these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "MuleSoft-hosted control plane and CloudHub 2.0 runtime plane in the nearest region"
      },
      {
        "letter": "B",
        "text": "MuleSoft-hosted control plane with hybrid or Runtime Fabric runtimes"
      },
      {
        "letter": "C",
        "text": "Anypoint Platform Private Cloud Edition installed in a public cloud account"
      },
      {
        "letter": "D",
        "text": "MuleSoft Government Cloud with CloudHub workers"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Anypoint Platform lets the control plane and runtime plane be hosted independently. Organizations that want MuleSoft to manage the control plane but must process data in their own infrastructure can host the runtime plane themselves, using hybrid standalone Mule runtimes or Runtime Fabric, while managing them from the MuleSoft-hosted control plane.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "CloudHub 2.0 processes data on MuleSoft-managed infrastructure, not in the bank's data center."
      },
      "B": {
        "type": "Correct",
        "text": "The runtime plane can run in the bank's infrastructure while still being managed from the MuleSoft control plane."
      },
      "C": {
        "type": "Incorrect",
        "text": "PCE is for self-hosting the control plane as well, which the bank does not require."
      },
      "D": {
        "type": "Incorrect",
        "text": "Government Cloud is a FedRAMP control plane for US agencies and does not keep processing in the bank's data center."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Platform Hosting Overview",
        "url": "https://docs.mulesoft.com/hosting-home/"
      },
      "secondary": {
        "title": "Deploying to Your Own Servers (Hybrid)",
        "url": "https://docs.mulesoft.com/runtime-manager/deploying-to-your-own-servers"
      }
    }
  },
  {
    "id": "q-035",
    "number": 35,
    "title": "Organizational Foundations - Full data sovereignty",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "Hosting Options",
      "Private Cloud Edition"
    ],
    "prompt": "A defense contractor requires that no data, including API specifications, application metadata, and user identities, ever leaves its own infrastructure. Which option meets this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "CloudHub 2.0 private space with a VPN to the data center"
      },
      {
        "letter": "B",
        "text": "EU control plane with Runtime Fabric in the contractor's data center"
      },
      {
        "letter": "C",
        "text": "Private Cloud Edition with customer-hosted runtimes"
      },
      {
        "letter": "D",
        "text": "US control plane with hybrid standalone Mule runtimes"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Anypoint Platform Private Cloud Edition is a self-hosted control plane deployed in the customer's own data center or cloud account, giving full control over where assets and metadata are stored. Combined with customer-hosted runtimes, it provides full data sovereignty, although some Anypoint Platform components are not supported in PCE.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A private space is still MuleSoft-managed infrastructure in a MuleSoft-managed control plane."
      },
      "B": {
        "type": "Incorrect",
        "text": "The EU control plane is MuleSoft-managed, so metadata and identities are stored outside the contractor's infrastructure."
      },
      "D": {
        "type": "Incorrect",
        "text": "Hybrid keeps runtime processing local, but the control plane data is hosted by MuleSoft."
      },
      "C": {
        "type": "Correct",
        "text": "PCE self-hosts the control plane, so assets and metadata stay in the customer's infrastructure."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Platform Private Cloud Edition",
        "url": "https://docs.mulesoft.com/private-cloud/"
      },
      "secondary": {
        "title": "Anypoint Platform Hosting Overview",
        "url": "https://docs.mulesoft.com/hosting-home/"
      }
    }
  },
  {
    "id": "q-036",
    "number": 36,
    "title": "Organizational Foundations - European metadata residency",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "Hosting Options",
      "EU Control Plane"
    ],
    "prompt": "A German retailer wants a fully MuleSoft-managed platform, but its data protection officer requires that platform metadata, such as API specifications and application configurations, be stored in the European Union. What should the architect recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Use MuleSoft Government Cloud because it has stricter compliance controls"
      },
      {
        "letter": "B",
        "text": "Use the US control plane and encrypt all API specifications in Exchange"
      },
      {
        "letter": "C",
        "text": "Use the US control plane and deploy CloudHub applications to the Frankfurt region"
      },
      {
        "letter": "D",
        "text": "Use the MuleSoft-managed EU control plane with runtimes in EU regions"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. MuleSoft offers regional control planes, such as the EU Cloud, in which the organization's design-time data and metadata are stored in that region. The runtime region is a separate choice: deploying applications to an EU region from the US control plane does not move control plane data to the EU.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "The EU control plane stores organization metadata in the EU and supports EU runtime regions."
      },
      "A": {
        "type": "Incorrect",
        "text": "Government Cloud is a FedRAMP environment for US government agencies and is hosted in the US."
      },
      "B": {
        "type": "Incorrect",
        "text": "Encryption does not change where control plane data is stored."
      },
      "C": {
        "type": "Incorrect",
        "text": "The runtime region is independent of control plane data residency, so metadata would still be in the US."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Platform Hosting Overview",
        "url": "https://docs.mulesoft.com/hosting-home/"
      },
      "secondary": {
        "title": "EU Control Plane",
        "url": "https://docs.mulesoft.com/eu-control-plane/"
      }
    }
  },
  {
    "id": "q-037",
    "number": 37,
    "title": "Organizational Foundations - US federal agency",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "Hosting Options",
      "Government Cloud"
    ],
    "prompt": "A US federal agency wants to use a MuleSoft-managed cloud environment for Anypoint Platform and must use a FedRAMP-authorized service. Which option should be selected?",
    "options": [
      {
        "letter": "A",
        "text": "MuleSoft Government Cloud, which provides a FedRAMP-authorized managed environment"
      },
      {
        "letter": "B",
        "text": "Anypoint Platform Private Cloud Edition hosted in the agency's own data center"
      },
      {
        "letter": "C",
        "text": "The US commercial control plane with CloudHub 2.0 in a US region"
      },
      {
        "letter": "D",
        "text": "The EU control plane with Runtime Fabric running in a US region"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. MuleSoft Government Cloud is the FedRAMP-authorized managed environment, which meets both the managed-cloud and authorization requirements. PCE (B) is customer-managed rather than MuleSoft-managed, and the commercial control plane (C) and EU control plane (D) are not FedRAMP-authorized.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Government Cloud is the FedRAMP-authorized managed environment."
      },
      "B": {
        "type": "Incorrect",
        "text": "PCE is customer-managed, not a MuleSoft-managed cloud environment."
      },
      "C": {
        "type": "Incorrect",
        "text": "The US commercial control plane is not FedRAMP-authorized."
      },
      "D": {
        "type": "Incorrect",
        "text": "The EU control plane is not FedRAMP-authorized."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Government Cloud",
        "url": "https://docs.mulesoft.com/gov-cloud/"
      },
      "secondary": {
        "title": "Anypoint Platform Hosting Overview",
        "url": "https://docs.mulesoft.com/hosting-home/"
      }
    }
  },
  {
    "id": "q-038",
    "number": 38,
    "title": "Organizational Foundations - Containers in the customer's cloud",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "Hosting Options",
      "Runtime Fabric"
    ],
    "prompt": "A company runs its workloads on its own Kubernetes clusters in AWS and wants to deploy Mule applications and API gateways there with high availability and centralized management from Anypoint Platform, without managing individual Mule runtime servers. Which runtime option fits best?",
    "options": [
      {
        "letter": "A",
        "text": "CloudHub 2.0 in a shared space, which runs the applications in MuleSoft's cloud"
      },
      {
        "letter": "B",
        "text": "Anypoint Runtime Fabric, which runs containerized Mule applications on customer-managed Kubernetes"
      },
      {
        "letter": "C",
        "text": "Hybrid standalone Mule runtimes installed on EC2 instances in the company's own account"
      },
      {
        "letter": "D",
        "text": "Runtime Fabric agents installed without a control-plane connection to Anypoint Platform"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Runtime Fabric runs containerized Mule applications on the company's own Kubernetes clusters with centralized management from Anypoint Platform. CloudHub 2.0 (A) runs in MuleSoft's cloud rather than the company's clusters, standalone runtimes on EC2 (C) require managing individual runtime servers, and agents without a control-plane connection (D) provide no centralized management.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Runtime Fabric runs containers on customer-managed Kubernetes with centralized management."
      },
      "A": {
        "type": "Incorrect",
        "text": "CloudHub 2.0 runs in MuleSoft's cloud, not the company's Kubernetes clusters."
      },
      "C": {
        "type": "Incorrect",
        "text": "Standalone runtimes on EC2 require managing individual runtime servers."
      },
      "D": {
        "type": "Incorrect",
        "text": "Without a control-plane connection there is no centralized management."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Runtime Fabric Overview",
        "url": "https://docs.mulesoft.com/runtime-fabric/latest/"
      },
      "secondary": {
        "title": "Anypoint Platform Hosting Overview",
        "url": "https://docs.mulesoft.com/hosting-home/"
      }
    }
  },
  {
    "id": "q-039",
    "number": 39,
    "title": "Organizational Foundations - Minimal operations",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "Hosting Options",
      "CloudHub 2.0"
    ],
    "prompt": "A startup with a two-person integration team has no data residency or on-premises constraints and wants to minimize infrastructure operations while getting high availability and scaling. Which hosting combination should the architect recommend?",
    "options": [
      {
        "letter": "A",
        "text": "The MuleSoft-hosted control plane with Runtime Fabric on self-managed Kubernetes clusters"
      },
      {
        "letter": "B",
        "text": "The MuleSoft-hosted control plane with hybrid runtimes on the company's own virtual machines"
      },
      {
        "letter": "C",
        "text": "The MuleSoft-hosted control plane with CloudHub 2.0, so MuleSoft manages the platform and the runtime"
      },
      {
        "letter": "D",
        "text": "Anypoint Platform PCE in the company's data center with customer-hosted runtimes"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. With no residency or on-premises constraints, the fully managed option is the MuleSoft-hosted control plane with CloudHub 2.0, which minimizes operations while providing high availability and scaling. Runtime Fabric (A) and hybrid runtimes (B) require the team to run infrastructure, and PCE (D) is the most operationally demanding option.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "The fully managed control plane with CloudHub 2.0 minimizes operations while providing HA and scaling."
      },
      "A": {
        "type": "Incorrect",
        "text": "Runtime Fabric requires the team to operate the Kubernetes clusters."
      },
      "B": {
        "type": "Incorrect",
        "text": "Hybrid runtimes require the team to operate the virtual machines."
      },
      "D": {
        "type": "Incorrect",
        "text": "PCE is the most operationally demanding option."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub 2.0 Overview",
        "url": "https://docs.mulesoft.com/cloudhub-2/"
      },
      "secondary": {
        "title": "Anypoint Platform Hosting Overview",
        "url": "https://docs.mulesoft.com/hosting-home/"
      }
    }
  },
  {
    "id": "q-040",
    "number": 40,
    "title": "Organizational Foundations - Corporate SSO for platform users",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "Identity Management",
      "SSO"
    ],
    "prompt": "A company wants its developers and administrators to sign in to Anypoint Platform with their corporate Okta credentials and have team memberships driven by Okta groups. What should be configured?",
    "options": [
      {
        "letter": "A",
        "text": "Client management with Okta as an OAuth 2.0 client provider for the platform's API clients"
      },
      {
        "letter": "B",
        "text": "A connected app in Access Management created for each developer and administrator"
      },
      {
        "letter": "C",
        "text": "An OAuth 2.0 token enforcement policy applied to every API in the organization"
      },
      {
        "letter": "D",
        "text": "Identity management with Okta as an external identity provider, mapping Okta groups to platform teams"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Platform sign-in and group-based team membership are handled by identity management with Okta as an external identity provider. Client management (A) is for API client applications rather than platform users, a connected app per user (B) is for programmatic access rather than SSO, and a token enforcement policy (C) protects APIs rather than platform sign-in.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Identity management with an external IdP handles platform sign-in and group-to-team mapping."
      },
      "A": {
        "type": "Incorrect",
        "text": "Client management is for API clients, not for platform user sign-in."
      },
      "B": {
        "type": "Incorrect",
        "text": "Connected apps provide programmatic access, not interactive SSO."
      },
      "C": {
        "type": "Incorrect",
        "text": "A token enforcement policy protects APIs, not platform sign-in."
      }
    },
    "references": {
      "primary": {
        "title": "Configuring Identity Management in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/external-identity"
      },
      "secondary": {
        "title": "Configuring SAML SSO for Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/conf-saml-sso"
      }
    }
  },
  {
    "id": "q-041",
    "number": 41,
    "title": "Organizational Foundations - OAuth tokens for API consumers",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "Client Management",
      "OAuth 2.0"
    ],
    "prompt": "An organization wants consumers of its APIs to obtain OAuth 2.0 access tokens from its existing PingFederate server, and wants those tokens validated by API policies. What should be configured in Anypoint Platform?",
    "options": [
      {
        "letter": "A",
        "text": "Client management with PingFederate as a client provider and an OAuth policy"
      },
      {
        "letter": "B",
        "text": "A connected app that issues tokens to each API consumer"
      },
      {
        "letter": "C",
        "text": "Identity management with PingFederate as a SAML identity provider"
      },
      {
        "letter": "D",
        "text": "Client ID enforcement only, because it validates OAuth tokens automatically"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Client management lets an organization configure external OAuth 2.0 client providers, such as PingFederate, OpenAM, or OpenID Connect Dynamic Client Registration-compliant providers. Client applications are then registered with that provider, and OAuth 2.0 policies on the APIs validate the tokens it issues.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "Connected apps provide access to Anypoint Platform APIs, not to the organization's own APIs."
      },
      "C": {
        "type": "Incorrect",
        "text": "Identity management controls user sign-in to the platform, not authorization of API clients."
      },
      "A": {
        "type": "Correct",
        "text": "Client management registers API client applications with the external OAuth provider used by API policies."
      },
      "D": {
        "type": "Incorrect",
        "text": "Client ID enforcement checks client credentials, not OAuth tokens from an external provider."
      }
    },
    "references": {
      "primary": {
        "title": "Client Management in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/managing-api-clients"
      },
      "secondary": {
        "title": "Configuring PingFederate Client Management",
        "url": "https://docs.mulesoft.com/access-management/conf-client-mgmt-pf-task"
      }
    }
  },
  {
    "id": "q-042",
    "number": 42,
    "title": "Organizational Foundations - Identity versus client management",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "Identity Management",
      "Client Management"
    ],
    "prompt": "A new security administrator is configuring Anypoint Platform and is confused by the console. During onboarding, the platform architect must explain the difference between managing who can sign in to the platform and managing which applications may call governed APIs. Which statement correctly distinguishes identity management from client management in Anypoint Platform?",
    "options": [
      {
        "letter": "A",
        "text": "Identity management applies only to CloudHub, while client management applies only to hybrid runtimes"
      },
      {
        "letter": "B",
        "text": "Identity management is for platform users; client management is for API clients"
      },
      {
        "letter": "C",
        "text": "Identity management secures APIs at runtime; client management controls who can sign in to Exchange"
      },
      {
        "letter": "D",
        "text": "Both serve the same purpose, but identity management is used only in production environments"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Anypoint Platform separates two concerns. Identity management configures an external identity provider for users who sign in to the platform. Client management configures external OAuth 2.0 providers that issue credentials and tokens to the client applications that consume the organization's APIs.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Neither feature depends on the runtime deployment model."
      },
      "C": {
        "type": "Incorrect",
        "text": "These responsibilities are reversed and misstated."
      },
      "D": {
        "type": "Incorrect",
        "text": "They have different purposes and are not tied to specific environments in this way."
      },
      "B": {
        "type": "Correct",
        "text": "Identity management is for users of the platform, while client management is for API client applications."
      }
    },
    "references": {
      "primary": {
        "title": "Configuring Identity Management in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/external-identity"
      },
      "secondary": {
        "title": "Client Management in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/managing-api-clients"
      }
    }
  },
  {
    "id": "q-043",
    "number": 43,
    "title": "Organizational Foundations - Dynamic client registration",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "Client Management",
      "OpenID Connect"
    ],
    "prompt": "A company uses an OpenID Connect provider that supports Dynamic Client Registration. It wants client applications created when consumers request access in Exchange to be registered automatically in that provider. What should be configured?",
    "options": [
      {
        "letter": "A",
        "text": "Configure SAML identity management, so that each consumer is created as a platform user in the provider"
      },
      {
        "letter": "B",
        "text": "Build a custom policy that writes the client IDs directly into the provider's database on each request"
      },
      {
        "letter": "C",
        "text": "Configure an OpenID Connect client provider in Client Management so Dynamic Client Registration creates the clients"
      },
      {
        "letter": "D",
        "text": "Ask the provider's administrators to pre-create one shared client that all consumers reuse"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Anypoint Platform supports client providers that comply with OpenID Connect Dynamic Client Registration; when such a provider is configured in Client Management and associated with environments, client applications created through Exchange are registered with the provider automatically. SAML identity management (A) is for user sign-in, a custom database-writing policy (B) is unsupported and unnecessary, and a shared client (D) defeats per-consumer governance.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "OpenID Connect client management uses Dynamic Client Registration to create clients in the provider."
      },
      "A": {
        "type": "Incorrect",
        "text": "SAML identity management is for user sign-in, not for registering API client applications."
      },
      "B": {
        "type": "Incorrect",
        "text": "Custom database writes are unsupported and unnecessary when DCR is available."
      },
      "D": {
        "type": "Incorrect",
        "text": "A single shared client removes per-consumer identity and breaks governance."
      }
    },
    "references": {
      "primary": {
        "title": "Configuring OpenID Connect Client Management",
        "url": "https://docs.mulesoft.com/access-management/configure-client-management-openid-task"
      },
      "secondary": {
        "title": "Client Management in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/managing-api-clients"
      }
    }
  },
  {
    "id": "q-044",
    "number": 44,
    "title": "Organizational Foundations - Choose two: what each option controls",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "Identity Management",
      "Client Management"
    ],
    "prompt": "An architect is documenting access control on Anypoint Platform. Which two statements are correct? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Identity management issues OAuth tokens that API policies use to authorize client applications"
      },
      {
        "letter": "B",
        "text": "Client management is required before any user can sign in to Anypoint Platform"
      },
      {
        "letter": "C",
        "text": "Only one identity provider and one client provider can exist across the entire platform"
      },
      {
        "letter": "D",
        "text": "Identity management can map external identity provider groups to Anypoint Platform teams"
      },
      {
        "letter": "E",
        "text": "Multiple client providers can be configured and associated with different environments"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Correct answers: D and E. Identity management connects Anypoint Platform to an external identity provider for user authentication and can map provider groups to teams. Client management can include multiple external client providers associated with different environments, which issue credentials and tokens to API client applications.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Tokens for API clients come from client providers configured in client management."
      },
      "D": {
        "type": "Correct",
        "text": "Group mappings from the identity provider control users' platform permissions."
      },
      "B": {
        "type": "Incorrect",
        "text": "User sign-in is handled by identity management or Anypoint's own accounts."
      },
      "C": {
        "type": "Incorrect",
        "text": "Client management supports multiple client providers; the restriction is false."
      },
      "E": {
        "type": "Correct",
        "text": "Client providers can be assigned per environment to meet different authorization needs."
      }
    },
    "references": {
      "primary": {
        "title": "Configuring Identity Management in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/external-identity"
      },
      "secondary": {
        "title": "Client Management in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/managing-api-clients"
      }
    }
  },
  {
    "id": "q-045",
    "number": 45,
    "title": "Organizational Foundations - Default client credentials",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "Client Management",
      "Client ID Enforcement"
    ],
    "prompt": "A team has not configured any external client provider. A consumer requests access to an API from its Exchange page. How does the consumer obtain credentials for the API's client ID enforcement policy?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Platform generates a client ID and secret for the client application, which the consumer uses"
      },
      {
        "letter": "B",
        "text": "The consumer signs in with SAML SSO, and the session cookie issued at sign-in is used as the credential"
      },
      {
        "letter": "C",
        "text": "The API owner issues one shared password that every consumer of the API uses"
      },
      {
        "letter": "D",
        "text": "The consumer cannot obtain credentials until an external OAuth 2.0 client provider is configured"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. When no external client provider is configured, Anypoint Platform acts as the default client provider and generates a client ID and secret for each client application created in Exchange, which the client ID enforcement policy validates. A SAML session cookie (B) is not an API credential, a shared password (C) is not how the policy works, and an external provider (D) is optional.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The default client provider issues a client ID and secret per client application."
      },
      "B": {
        "type": "Incorrect",
        "text": "SAML sessions are for platform sign-in; API credentials are the client ID and secret."
      },
      "C": {
        "type": "Incorrect",
        "text": "Credentials are issued per client application, not shared across consumers."
      },
      "D": {
        "type": "Incorrect",
        "text": "An external provider is optional; the platform default provider issues credentials."
      }
    },
    "references": {
      "primary": {
        "title": "Client Management in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/managing-api-clients"
      },
      "secondary": {
        "title": "API Manager — Client ID Enforcement Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-client-id-enforcement"
      }
    }
  },
  {
    "id": "q-046",
    "number": 46,
    "title": "Organizational Foundations - Hybrid data flow",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "Data Residency",
      "Hybrid"
    ],
    "prompt": "A company uses the MuleSoft-hosted control plane and hybrid Mule runtimes in its own data center. Which data leaves the data center during normal operation?",
    "options": [
      {
        "letter": "A",
        "text": "All message payloads processed by the Mule applications, in addition to the metadata"
      },
      {
        "letter": "B",
        "text": "Management metadata such as application status and metrics, but not the message payloads"
      },
      {
        "letter": "C",
        "text": "The database credentials that the applications use to connect to backend systems"
      },
      {
        "letter": "D",
        "text": "Nothing at all, because hybrid runtimes keep the control plane connection disabled by default"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Hybrid runtimes run in the customer's data center and process the payloads locally; only management metadata such as application status and metrics is sent to the MuleSoft-hosted control plane. Payloads (A) and backend credentials (C) stay in the data center, and hybrid runtimes do maintain a control-plane connection (D).",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Only management metadata is sent to the control plane; payloads stay in the data center."
      },
      "A": {
        "type": "Incorrect",
        "text": "Message payloads are processed locally and are not sent to the control plane."
      },
      "C": {
        "type": "Incorrect",
        "text": "Backend credentials remain in the customer's environment."
      },
      "D": {
        "type": "Incorrect",
        "text": "Hybrid runtimes do maintain a connection to the control plane."
      }
    },
    "references": {
      "primary": {
        "title": "Runtime Manager Agent",
        "url": "https://docs.mulesoft.com/runtime-manager/runtime-manager-agent"
      },
      "secondary": {
        "title": "Anypoint Platform Hosting Overview",
        "url": "https://docs.mulesoft.com/hosting-home/"
      }
    }
  },
  {
    "id": "q-047",
    "number": 47,
    "title": "Organizational Foundations - Runtime region versus control plane",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "Data Residency",
      "CloudHub"
    ],
    "prompt": "A Canadian company uses the US control plane and deploys its CloudHub 2.0 applications to the Canada runtime region. The compliance team assumes that all of its Anypoint Platform data is now stored in Canada. What should the architect clarify?",
    "options": [
      {
        "letter": "A",
        "text": "Deploying to Canada automatically moves the organization to the Canada control plane"
      },
      {
        "letter": "B",
        "text": "Correct; the runtime region determines where all Anypoint Platform data is stored"
      },
      {
        "letter": "C",
        "text": "Apps run in Canada, but control plane metadata stays in the US"
      },
      {
        "letter": "D",
        "text": "CloudHub 2.0 always stores payloads in the US, regardless of the runtime region"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Anypoint Platform treats the control plane location, the runtime option, and the runtime region as independent choices. The runtime region determines where CloudHub or CloudHub 2.0 applications execute, while the organization's design-time data and metadata stay in the control plane where the organization lives.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "An organization lives in exactly one control plane, which is not changed by the runtime region."
      },
      "B": {
        "type": "Incorrect",
        "text": "The runtime region determines where applications execute, not where control plane data lives."
      },
      "C": {
        "type": "Correct",
        "text": "Runtime region and control plane data residency are independent choices."
      },
      "D": {
        "type": "Incorrect",
        "text": "Applications execute in the selected runtime region."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Platform Hosting Overview",
        "url": "https://docs.mulesoft.com/hosting-home/"
      },
      "secondary": {
        "title": "Anypoint Platform Control Planes",
        "url": "https://docs.mulesoft.com/control-planes/"
      }
    }
  },
  {
    "id": "q-048",
    "number": 48,
    "title": "Organizational Foundations - Logs must stay in the company's SIEM",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "Data Residency",
      "Logging"
    ],
    "prompt": "A company deploys Mule applications to CloudHub. Its security policy requires that application logs be retained only in its own SIEM, not in MuleSoft-managed log storage. What should the architect recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Apply a Message Logging policy in API Manager so that request and response logs are written to the SIEM"
      },
      {
        "letter": "B",
        "text": "Set the application log level to ERROR so that CloudHub stores fewer log entries"
      },
      {
        "letter": "C",
        "text": "Use the EU control plane so that CloudHub stores the logs inside the company's SIEM"
      },
      {
        "letter": "D",
        "text": "Configure a custom Log4j2 appender to forward logs to the SIEM and disable CloudHub log storage for the application"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Logs are produced by the application's Log4j2 configuration, so a custom appender can ship them to the SIEM, and disabling CloudHub log storage keeps them out of MuleSoft-managed storage. A Message Logging policy (A) logs API traffic at the gateway rather than the application's own logs, lowering the level (B) still stores entries in CloudHub, and the control-plane region (C) has nothing to do with where logs are stored.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "A custom appender forwards application logs to the SIEM, and disabling CloudHub logs keeps them out of platform storage."
      },
      "A": {
        "type": "Incorrect",
        "text": "Message Logging logs gateway traffic; it does not redirect the application's own logs."
      },
      "B": {
        "type": "Incorrect",
        "text": "Changing the level reduces volume but still stores the remaining entries in CloudHub."
      },
      "C": {
        "type": "Incorrect",
        "text": "The control-plane region does not send logs to the company's SIEM."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub — Integrate with Your Logging System",
        "url": "https://docs.mulesoft.com/cloudhub/custom-log-appender"
      },
      "secondary": {
        "title": "CloudHub 2.0 — Integrating with Your Logging System",
        "url": "https://docs.mulesoft.com/cloudhub-2/ch2-integrate-log-system"
      }
    }
  },
  {
    "id": "q-049",
    "number": 49,
    "title": "Organizational Foundations - Where Anypoint MQ stores messages",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "Data Residency",
      "Anypoint MQ"
    ],
    "prompt": "An architect plans to use Anypoint MQ for an EU-only process whose messages contain personal data. What determines where those messages are stored?",
    "options": [
      {
        "letter": "A",
        "text": "The region selected for the Anypoint MQ queues and exchanges"
      },
      {
        "letter": "B",
        "text": "Anypoint MQ always stores messages in the US, regardless of configuration"
      },
      {
        "letter": "C",
        "text": "The region of the API client that triggered the business process"
      },
      {
        "letter": "D",
        "text": "The location of the Mule application that publishes the messages"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Anypoint MQ is a multi-region messaging service. Queues and exchanges are created in a chosen region, and messages are stored in that region. For data residency requirements, the architect should create destinations in a compliant region and align it with the control plane and runtime choices.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Anypoint MQ destinations are created in a specific region, which determines where messages are stored."
      },
      "B": {
        "type": "Incorrect",
        "text": "Anypoint MQ is available in multiple regions, including EU regions."
      },
      "C": {
        "type": "Incorrect",
        "text": "The client's location does not determine where MQ stores messages."
      },
      "D": {
        "type": "Incorrect",
        "text": "Publishers can connect to queues in another region; the queue's region decides where messages reside."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint MQ Overview",
        "url": "https://docs.mulesoft.com/mq/"
      },
      "secondary": {
        "title": "Anypoint MQ — Understanding Anypoint MQ",
        "url": "https://docs.mulesoft.com/mq/mq-understanding"
      }
    }
  },
  {
    "id": "q-050",
    "number": 50,
    "title": "Organizational Foundations - Self-hosted platform data",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "Data Residency",
      "Private Cloud Edition"
    ],
    "prompt": "In a deployment that uses Anypoint Platform Private Cloud Edition with customer-hosted runtimes, where are API specifications, application metadata, and message payloads stored?",
    "options": [
      {
        "letter": "A",
        "text": "Specifications in MuleSoft's US cloud and payloads on premises"
      },
      {
        "letter": "B",
        "text": "All in the customer's own infrastructure"
      },
      {
        "letter": "C",
        "text": "Metadata in the EU control plane and payloads on premises"
      },
      {
        "letter": "D",
        "text": "Payloads in MuleSoft-managed storage and metadata on premises"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Anypoint Platform PCE is a self-hosted control plane, so assets such as API specifications and metadata are stored in the customer's data center or cloud account. With customer-hosted runtimes, payloads are also processed locally, providing full data sovereignty.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "With PCE, the control plane and its assets are not stored in the US cloud."
      },
      "C": {
        "type": "Incorrect",
        "text": "PCE does not use any MuleSoft-managed control plane."
      },
      "B": {
        "type": "Correct",
        "text": "PCE hosts the control plane locally, and the runtimes are also customer-hosted."
      },
      "D": {
        "type": "Incorrect",
        "text": "Customer-hosted runtimes process payloads in the customer's environment."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Platform Private Cloud Edition",
        "url": "https://docs.mulesoft.com/private-cloud/"
      },
      "secondary": {
        "title": "Anypoint Platform Hosting Overview",
        "url": "https://docs.mulesoft.com/hosting-home/"
      }
    }
  },
  {
    "id": "q-051",
    "number": 51,
    "title": "Organizational Foundations - Choose two: data in the control plane",
    "domain": "Establishing organizational and platform foundations",
    "topics": [
      "Data Residency",
      "Control Plane"
    ],
    "prompt": "An organization uses the MuleSoft-hosted control plane and Runtime Fabric in its own data center. Which two kinds of data are stored in the MuleSoft-hosted control plane? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "The message payloads processed by the Mule applications"
      },
      {
        "letter": "B",
        "text": "The contents of the customer's backend databases"
      },
      {
        "letter": "C",
        "text": "API specifications and other assets published to Exchange"
      },
      {
        "letter": "D",
        "text": "The Kubernetes nodes that run the Runtime Fabric workloads"
      },
      {
        "letter": "E",
        "text": "API Manager configuration, such as policies and client application contracts"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Correct answers: C and E. The control plane stores design-time and governance data such as published assets and API Manager configuration. Message payloads (A), backend database contents (B), and the Kubernetes nodes (D) remain in the customer's environment.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Published assets are stored in the MuleSoft-hosted control plane."
      },
      "E": {
        "type": "Correct",
        "text": "API Manager policies and contracts are stored in the control plane."
      },
      "A": {
        "type": "Incorrect",
        "text": "Message payloads are processed in the customer's environment."
      },
      "B": {
        "type": "Incorrect",
        "text": "Backend database contents remain in the customer's environment."
      },
      "D": {
        "type": "Incorrect",
        "text": "The Kubernetes nodes run in the customer's environment."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Platform Hosting Overview",
        "url": "https://docs.mulesoft.com/hosting-home/"
      },
      "secondary": {
        "title": "Anypoint Runtime Fabric Overview",
        "url": "https://docs.mulesoft.com/runtime-fabric/latest/"
      }
    }
  },
  {
    "id": "q-052",
    "number": 52,
    "title": "Designing and Sharing APIs - What clients depend on",
    "domain": "Designing and sharing APIs",
    "topics": [
      "API Specification",
      "Dependencies"
    ],
    "prompt": "A team rewrites a Customer API implementation from a legacy Mule 3 application to a Mule 4 application. The RAML specification is unchanged. Which consumers must be changed?",
    "options": [
      {
        "letter": "A",
        "text": "All clients, because each client is compiled against the implementation"
      },
      {
        "letter": "B",
        "text": "Only clients written in Java, because Mule 4 uses a different Java version"
      },
      {
        "letter": "C",
        "text": "Only clients that use the API from Exchange rather than from the gateway"
      },
      {
        "letter": "D",
        "text": "None; clients depend on the specification, not the implementation"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. API clients depend on the API interface, as defined in its specification, rather than on its implementation. If the implementation is replaced while the specification and behavior stay the same, clients need no changes.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Clients call the published interface; they are not bound to how it is implemented."
      },
      "B": {
        "type": "Incorrect",
        "text": "Clients communicate over HTTP and are independent of the implementation's language."
      },
      "C": {
        "type": "Incorrect",
        "text": "Discovery channel does not create a dependency on the implementation."
      },
      "D": {
        "type": "Correct",
        "text": "The contract is unchanged, so clients are unaffected by the new implementation."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Managing Versions and Instances",
        "url": "https://docs.mulesoft.com/api-manager/latest/manage-versions-instances-concept"
      },
      "secondary": {
        "title": "APIkit Overview",
        "url": "https://docs.mulesoft.com/apikit/latest/"
      }
    }
  },
  {
    "id": "q-053",
    "number": 53,
    "title": "Designing and Sharing APIs - Implementation generated from the specification",
    "domain": "Designing and sharing APIs",
    "topics": [
      "API Specification",
      "APIkit"
    ],
    "prompt": "A developer scaffolds a Mule application from a RAML specification using APIkit. Later, a new resource is added to the specification. What does this imply about the dependency between the specification and the implementation?",
    "options": [
      {
        "letter": "A",
        "text": "The implementation depends on the spec and must add the new resource"
      },
      {
        "letter": "B",
        "text": "Clients must be updated before the implementation can add the resource"
      },
      {
        "letter": "C",
        "text": "The specification depends on the implementation and is regenerated from the Mule flows"
      },
      {
        "letter": "D",
        "text": "There is no dependency, so the new resource is automatically implemented at runtime"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. With a design-first approach, the API specification is the contract and the implementation depends on it. APIkit generates a router and flows from the specification and validates requests against it, so specification changes require corresponding implementation changes.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "APIkit routes and flows are generated from the specification, so it drives the implementation."
      },
      "B": {
        "type": "Incorrect",
        "text": "Adding a resource is backward compatible, and the implementation is updated first."
      },
      "C": {
        "type": "Incorrect",
        "text": "With APIkit the specification is the source of the implementation, not the reverse."
      },
      "D": {
        "type": "Incorrect",
        "text": "New resources need implementation logic; nothing is implemented automatically."
      }
    },
    "references": {
      "primary": {
        "title": "APIkit Overview",
        "url": "https://docs.mulesoft.com/apikit/latest/"
      },
      "secondary": {
        "title": "Design Center — Publishing API Specifications",
        "url": "https://docs.mulesoft.com/design-center/design-publish"
      }
    }
  },
  {
    "id": "q-054",
    "number": 54,
    "title": "Designing and Sharing APIs - Linking a running app to its API instance",
    "domain": "Designing and sharing APIs",
    "topics": [
      "API Autodiscovery",
      "API Manager"
    ],
    "prompt": "A Mule application implementing an API is deployed, but the policies configured for the API instance in API Manager are not being enforced. What links the deployed implementation to the API instance?",
    "options": [
      {
        "letter": "A",
        "text": "Deploying the application with the same name as the Exchange asset"
      },
      {
        "letter": "B",
        "text": "API Autodiscovery configured with the API instance ID"
      },
      {
        "letter": "C",
        "text": "Adding the API instance URL to the client application's configuration"
      },
      {
        "letter": "D",
        "text": "Publishing the API specification to Exchange with the same name"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. API Manager manages an API instance, typically created from an Exchange asset. A Mule application implementing that API uses API Autodiscovery, configured with the API instance ID, so the runtime connects to API Manager, downloads the policies, and enforces them.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Names alone do not establish the link; autodiscovery is required."
      },
      "B": {
        "type": "Correct",
        "text": "Autodiscovery pairs the application with its API instance so policies can be applied."
      },
      "C": {
        "type": "Incorrect",
        "text": "Clients do not create the link between implementation and API instance."
      },
      "D": {
        "type": "Incorrect",
        "text": "Exchange publication does not link a running application to API Manager."
      }
    },
    "references": {
      "primary": {
        "title": "API Autodiscovery",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-auto-discovery-new-concept"
      },
      "secondary": {
        "title": "API Manager — Managing Versions and Instances",
        "url": "https://docs.mulesoft.com/api-manager/latest/manage-versions-instances-concept"
      }
    }
  },
  {
    "id": "q-055",
    "number": 55,
    "title": "Designing and Sharing APIs - Parallel development with a mock",
    "domain": "Designing and sharing APIs",
    "topics": [
      "API Specification",
      "Mocking Service"
    ],
    "prompt": "A mobile team must start building an app before the Order API is implemented. The API specification has been agreed. How can the mobile team proceed without depending on the implementation?",
    "options": [
      {
        "letter": "A",
        "text": "Wait until the implementation is deployed to a sandbox environment"
      },
      {
        "letter": "B",
        "text": "Connect the app directly to the backend database for now"
      },
      {
        "letter": "C",
        "text": "Build against the mock generated from the specification"
      },
      {
        "letter": "D",
        "text": "Copy the implementation team's source code into the mobile project"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Because clients depend only on the API specification, the mocking service in Design Center and Exchange can simulate the API from its specification and examples. This lets client development proceed in parallel with the implementation.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Waiting delays the mobile team although the contract is already agreed."
      },
      "B": {
        "type": "Incorrect",
        "text": "Direct backend access creates a dependency the app will have to unwind later."
      },
      "C": {
        "type": "Correct",
        "text": "The mock simulates the API from its specification so clients can start before the implementation exists."
      },
      "D": {
        "type": "Incorrect",
        "text": "Clients should not depend on implementation code."
      }
    },
    "references": {
      "primary": {
        "title": "Design Center — Mocking Service",
        "url": "https://docs.mulesoft.com/design-center/design-mocking-service"
      },
      "secondary": {
        "title": "Design Center — Publishing API Specifications",
        "url": "https://docs.mulesoft.com/design-center/design-publish"
      }
    }
  },
  {
    "id": "q-056",
    "number": 56,
    "title": "Designing and Sharing APIs - Impact of a breaking specification change",
    "domain": "Designing and sharing APIs",
    "topics": [
      "API Specification",
      "Dependencies"
    ],
    "prompt": "An API team must remove a field from the response of an API that has twelve client applications. Which statement correctly describes the dependencies affected?",
    "options": [
      {
        "letter": "A",
        "text": "Only the specification changes, because response fields are documentation rather than contract"
      },
      {
        "letter": "B",
        "text": "Only the implementation changes, because the specification is generated from the response"
      },
      {
        "letter": "C",
        "text": "No client is affected, because well-behaved clients ignore fields they do not recognize"
      },
      {
        "letter": "D",
        "text": "Spec and implementation change, and clients that read the removed field may break"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. The specification defines the contract that both the implementation and clients depend on. Removing a response field changes the specification and the implementation and can break clients that read that field, which is why it is a breaking change requiring a new major version. The other options understate the impact: the response shape is part of the contract (A, B), and clients that rely on the field are affected (C).",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Clients depend on the contract, so a removed field can break those that use it."
      },
      "A": {
        "type": "Incorrect",
        "text": "Response structure is part of the contract, not merely documentation."
      },
      "B": {
        "type": "Incorrect",
        "text": "The specification is authored, not generated from the implementation's response."
      },
      "C": {
        "type": "Incorrect",
        "text": "Clients that read the removed field will break; ignoring unknown fields does not help them."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Managing Versions and Instances",
        "url": "https://docs.mulesoft.com/api-manager/latest/manage-versions-instances-concept"
      },
      "secondary": {
        "title": "Exchange — Asset Versions",
        "url": "https://docs.mulesoft.com/exchange/asset-versions"
      }
    }
  },
  {
    "id": "q-057",
    "number": 57,
    "title": "Designing and Sharing APIs - Choose two: dependencies",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Dependencies",
      "API Lifecycle"
    ],
    "prompt": "A developer just joined a team that maintains a Customer API published in Exchange, a Mule implementation deployed to CloudHub, and three consuming applications. The team lead asks the architect to explain which parts of this setup depend on which. Which two statements correctly describe the dependencies between an API, its specification, its implementation, and its clients?",
    "options": [
      {
        "letter": "A",
        "text": "API clients depend on the API specification rather than the implementation"
      },
      {
        "letter": "B",
        "text": "The API specification is generated from the clients' code"
      },
      {
        "letter": "C",
        "text": "The implementation must be published to Exchange before a specification can exist"
      },
      {
        "letter": "D",
        "text": "Each client must be redeployed whenever the implementation is redeployed"
      },
      {
        "letter": "E",
        "text": "An API instance in API Manager is associated with a version of an Exchange asset"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Correct answers: A and E. In API-led development, the specification is the contract. Clients depend on it, the implementation fulfills it, and API Manager manages API instances associated with Exchange asset versions of that specification.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "The specification is designed independently and clients are written against it."
      },
      "A": {
        "type": "Correct",
        "text": "Clients rely only on the published contract."
      },
      "C": {
        "type": "Incorrect",
        "text": "Specifications are typically designed and published before implementation."
      },
      "D": {
        "type": "Incorrect",
        "text": "Redeploying the implementation does not require client changes if the contract holds."
      },
      "E": {
        "type": "Correct",
        "text": "API instances are created from and tied to Exchange asset versions."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Managing Versions and Instances",
        "url": "https://docs.mulesoft.com/api-manager/latest/manage-versions-instances-concept"
      },
      "secondary": {
        "title": "Anypoint Exchange Overview",
        "url": "https://docs.mulesoft.com/exchange/"
      }
    }
  },
  {
    "id": "q-058",
    "number": 58,
    "title": "Designing and Sharing APIs - Reusing common data types",
    "domain": "Designing and sharing APIs",
    "topics": [
      "API Fragments",
      "Exchange"
    ],
    "prompt": "Several API teams define the same Address and Money data types in their specifications, with slight differences. What should the architect recommend to promote consistency and reuse?",
    "options": [
      {
        "letter": "A",
        "text": "Define the types once in a shared Java library that all the implementations depend on"
      },
      {
        "letter": "B",
        "text": "Publish the shared Address and Money types as an API fragment in Exchange and reference it from each specification"
      },
      {
        "letter": "C",
        "text": "Put the agreed definitions in each API's Exchange description as plain text and copy them into the specs"
      },
      {
        "letter": "D",
        "text": "Keep a copy of the best version in each specification and reconcile differences at each release"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. API fragments such as RAML data types, traits, and security schemes can be created in Design Center and published to Exchange as reusable assets, so specifications reference consistent, versioned definitions. A Java library (A) is not reusable from a specification, plain-text descriptions (C) cannot be referenced by specs, and per-spec copies (D) drift and are not centrally versioned.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Fragments let teams reuse the same versioned definitions across specifications."
      },
      "A": {
        "type": "Incorrect",
        "text": "Implementation libraries do not make types reusable in API specifications."
      },
      "C": {
        "type": "Incorrect",
        "text": "Text descriptions cannot be referenced by specifications, so copies still drift."
      },
      "D": {
        "type": "Incorrect",
        "text": "Copies drift over time and are not centrally versioned."
      }
    },
    "references": {
      "primary": {
        "title": "Design Center — Creating and Publishing API Fragments",
        "url": "https://docs.mulesoft.com/design-center/design-create-publish-api-fragment"
      },
      "secondary": {
        "title": "Anypoint Exchange Overview",
        "url": "https://docs.mulesoft.com/exchange/"
      }
    }
  },
  {
    "id": "q-059",
    "number": 59,
    "title": "Designing and Sharing APIs - Publishing a new API specification",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Exchange",
      "Design Center"
    ],
    "prompt": "An API specification has been designed and reviewed in Design Center. The team wants other developers to discover it, read its documentation, and try it. What is the next step?",
    "options": [
      {
        "letter": "A",
        "text": "Apply a policy to the specification in Runtime Manager so that consumers can access it"
      },
      {
        "letter": "B",
        "text": "Deploy the specification to CloudHub as an application so that it becomes callable"
      },
      {
        "letter": "C",
        "text": "Publish the specification to Exchange so developers can discover it, read the documentation, and try it"
      },
      {
        "letter": "D",
        "text": "Store the RAML file in a shared source-control repository and grant each team read access to it"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Publishing the specification to Exchange makes it discoverable, documents it, and provides a try-it console and a mock for consumers. A specification is not a deployed application (B), policies are applied to API instances rather than specifications (A), and a shared repository (D) provides no discovery, documentation, or try-it experience.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Exchange provides discovery, documentation, and a try-it console for the published specification."
      },
      "A": {
        "type": "Incorrect",
        "text": "Policies are applied to API instances in API Manager, not to specifications in Runtime Manager."
      },
      "B": {
        "type": "Incorrect",
        "text": "A specification is a contract; deploying it as an application is not how it becomes discoverable."
      },
      "D": {
        "type": "Incorrect",
        "text": "A shared repository gives no discovery, documentation, or try-it experience, and changes are not visible to consumers."
      }
    },
    "references": {
      "primary": {
        "title": "Design Center — Publishing API Specifications",
        "url": "https://docs.mulesoft.com/design-center/design-publish"
      },
      "secondary": {
        "title": "Exchange — Publishing Assets",
        "url": "https://docs.mulesoft.com/exchange/about-sharing-assets"
      }
    }
  },
  {
    "id": "q-060",
    "number": 60,
    "title": "Designing and Sharing APIs - Sharing APIs with external partners",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Exchange",
      "Public Portal"
    ],
    "prompt": "A company wants external partner developers, who do not have Anypoint Platform accounts in the company's organization, to browse the documentation of selected partner APIs. What should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Invite all partner developers as Organization Administrators"
      },
      {
        "letter": "B",
        "text": "Publish the APIs to Design Center projects shared with partners"
      },
      {
        "letter": "C",
        "text": "Export the specifications from Exchange and host them on a file share"
      },
      {
        "letter": "D",
        "text": "An Exchange public portal with the selected assets shared to it"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Exchange public portals let an organization share selected assets with external developers. Assets are explicitly shared to the portal, where partners can browse documentation and, with an account, request access to APIs.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "This grants far too much access to the company's platform."
      },
      "B": {
        "type": "Incorrect",
        "text": "Design Center is a design tool, not a portal for external consumers."
      },
      "D": {
        "type": "Correct",
        "text": "A public portal exposes chosen assets to external developers."
      },
      "C": {
        "type": "Incorrect",
        "text": "A file share loses discovery, documentation, and access-request features."
      }
    },
    "references": {
      "primary": {
        "title": "Exchange Public Portals",
        "url": "https://docs.mulesoft.com/exchange/about-portals"
      },
      "secondary": {
        "title": "Exchange — Publishing Assets",
        "url": "https://docs.mulesoft.com/exchange/about-sharing-assets"
      }
    }
  },
  {
    "id": "q-061",
    "number": 61,
    "title": "Designing and Sharing APIs - Making an asset easy to reuse",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Exchange",
      "Documentation"
    ],
    "prompt": "An API is published in Exchange, but other teams rarely reuse it because they cannot tell what it does or how to use it. What should the API owner do?",
    "options": [
      {
        "letter": "A",
        "text": "Add descriptions, examples, and usage guidance to the asset page in Exchange"
      },
      {
        "letter": "B",
        "text": "Increase the major version number of the API so that teams notice the newer asset"
      },
      {
        "letter": "C",
        "text": "Restrict the asset so that only the owning team can view it, avoiding confusion for others"
      },
      {
        "letter": "D",
        "text": "Deploy an additional copy of the implementation in each environment so teams can find it"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Reuse depends on an asset being understandable: clear descriptions, examples, and usage guidance on the Exchange page tell other teams what the API does and how to adopt it. Bumping the version (B) adds no information, restricting visibility (C) hides the asset, and extra deployments (D) do not make it easier to understand.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Descriptions, examples, and guidance are what let other teams understand and adopt the asset."
      },
      "B": {
        "type": "Incorrect",
        "text": "A higher version number does not explain what the API does."
      },
      "C": {
        "type": "Incorrect",
        "text": "Restricting visibility reduces reuse rather than improving it."
      },
      "D": {
        "type": "Incorrect",
        "text": "Additional deployments do not make the asset easier to understand."
      }
    },
    "references": {
      "primary": {
        "title": "Exchange — Describing an Asset",
        "url": "https://docs.mulesoft.com/exchange/to-describe-an-asset"
      },
      "secondary": {
        "title": "Anypoint Exchange Overview",
        "url": "https://docs.mulesoft.com/exchange/"
      }
    }
  },
  {
    "id": "q-062",
    "number": 62,
    "title": "Designing and Sharing APIs - Creating an API instance from an asset",
    "domain": "Designing and sharing APIs",
    "topics": [
      "API Manager",
      "Exchange"
    ],
    "prompt": "An API specification has been published to Exchange. The operations team needs to apply policies and manage client access for the API in production. What should they do in API Manager?",
    "options": [
      {
        "letter": "A",
        "text": "Publish the API again under a new Exchange asset ID"
      },
      {
        "letter": "B",
        "text": "Create an API instance from the asset version"
      },
      {
        "letter": "C",
        "text": "Create a new Design Center project for production"
      },
      {
        "letter": "D",
        "text": "Upload the RAML file directly into Runtime Manager"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. In API Manager, an API instance is created from an Exchange asset version. The instance is then linked to its implementation or proxy and used to apply policies, define SLA tiers, and approve client contracts.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "API Manager manages instances that reference an Exchange asset version."
      },
      "A": {
        "type": "Incorrect",
        "text": "A new asset is unnecessary; the existing version is used to create the instance."
      },
      "C": {
        "type": "Incorrect",
        "text": "Design Center projects are for design, not runtime management."
      },
      "D": {
        "type": "Incorrect",
        "text": "Runtime Manager deploys applications and does not manage API policies."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Managing Versions and Instances",
        "url": "https://docs.mulesoft.com/api-manager/latest/manage-versions-instances-concept"
      },
      "secondary": {
        "title": "API Autodiscovery",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-auto-discovery-new-concept"
      }
    }
  },
  {
    "id": "q-063",
    "number": 63,
    "title": "Designing and Sharing APIs - Choose two: reusable asset types",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Exchange",
      "Reusable Assets"
    ],
    "prompt": "An enterprise architect is defining what the C4E should publish so that delivery teams across the organization can discover and reuse assets instead of rebuilding them. The team plans to publish several types of API-related assets to Anypoint Exchange. Which two types of assets can be published to Exchange for reuse by other teams?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Monitoring dashboards exported from the production environment"
      },
      {
        "letter": "B",
        "text": "Access tokens issued to client applications so other teams can call the API"
      },
      {
        "letter": "C",
        "text": "RAML or OAS API specifications and their supporting documentation"
      },
      {
        "letter": "D",
        "text": "Running Mule application instances together with their in-memory state"
      },
      {
        "letter": "E",
        "text": "API fragments such as data types, traits, or security schemes"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Correct answers: C and E. Exchange catalogs reusable design-time assets, including API specifications (RAML or OAS) and API fragments such as data types, traits, and security schemes. Monitoring dashboards (A), access tokens (B), and running application instances with their state (D) are runtime artifacts, not reusable design assets.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "API specifications are core reusable assets published to Exchange."
      },
      "A": {
        "type": "Incorrect",
        "text": "Monitoring dashboards are runtime views, not design assets for reuse."
      },
      "B": {
        "type": "Incorrect",
        "text": "Access tokens are runtime credentials, not publishable assets."
      },
      "D": {
        "type": "Incorrect",
        "text": "Running instances and their in-memory state are not publishable design assets."
      },
      "E": {
        "type": "Correct",
        "text": "Fragments such as data types, traits, and security schemes are reusable design assets."
      }
    },
    "references": {
      "primary": {
        "title": "Exchange — Publishing Assets",
        "url": "https://docs.mulesoft.com/exchange/about-sharing-assets"
      },
      "secondary": {
        "title": "Anypoint Exchange Overview",
        "url": "https://docs.mulesoft.com/exchange/"
      }
    }
  },
  {
    "id": "q-064",
    "number": 64,
    "title": "Designing and Sharing APIs - Adding an optional field",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Semantic Versioning",
      "Minor Version"
    ],
    "prompt": "An API at version 2.3.1 adds a new optional field to its response. Existing clients will continue to work. What should the new version be?",
    "options": [
      {
        "letter": "A",
        "text": "2.3.2, because any change to a response increments the patch version"
      },
      {
        "letter": "B",
        "text": "3.0.0, because the response shape changed and clients must be updated"
      },
      {
        "letter": "C",
        "text": "2.4.1, because both the minor and patch versions should be incremented"
      },
      {
        "letter": "D",
        "text": "2.4.0, because a backward-compatible addition increments the minor version"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Adding a new optional field is a backward-compatible change, so the minor version is incremented to 2.4.0. The patch version (A) is for backward-compatible fixes that do not change the interface, a major version (B) is for breaking changes, and both minor and patch (C) over-increments.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "A backward-compatible addition increments the minor version."
      },
      "A": {
        "type": "Incorrect",
        "text": "A patch version is for fixes that do not change the interface."
      },
      "B": {
        "type": "Incorrect",
        "text": "A major version is reserved for breaking changes."
      },
      "C": {
        "type": "Incorrect",
        "text": "Incrementing both minor and patch over-increments for one change."
      }
    },
    "references": {
      "primary": {
        "title": "Exchange — Asset Versions",
        "url": "https://docs.mulesoft.com/exchange/asset-versions"
      },
      "secondary": {
        "title": "Exchange — Manage Versions",
        "url": "https://docs.mulesoft.com/exchange/manage-versions"
      }
    }
  },
  {
    "id": "q-065",
    "number": 65,
    "title": "Designing and Sharing APIs - Making a parameter required",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Semantic Versioning",
      "Major Version"
    ],
    "prompt": "An API at version 1.5.0 changes an optional query parameter to required. What type of change is this?",
    "options": [
      {
        "letter": "A",
        "text": "A major change; existing requests without it will fail"
      },
      {
        "letter": "B",
        "text": "A minor change, because no resource was removed"
      },
      {
        "letter": "C",
        "text": "No version change, because query parameters are not part of the contract"
      },
      {
        "letter": "D",
        "text": "A patch change, because only one parameter is affected"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Any change that can break existing clients is backward incompatible and requires a new major version. Making an optional parameter required means that existing requests that omit it will be rejected.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "Breaking changes need not remove resources; making input stricter also breaks clients."
      },
      "C": {
        "type": "Incorrect",
        "text": "Query parameters are part of the API contract."
      },
      "D": {
        "type": "Incorrect",
        "text": "The size of the change does not matter; its compatibility does."
      },
      "A": {
        "type": "Correct",
        "text": "Requiring something previously optional breaks existing clients."
      }
    },
    "references": {
      "primary": {
        "title": "Exchange — Asset Versions",
        "url": "https://docs.mulesoft.com/exchange/asset-versions"
      },
      "secondary": {
        "title": "API Manager — Managing Versions and Instances",
        "url": "https://docs.mulesoft.com/api-manager/latest/manage-versions-instances-concept"
      }
    }
  },
  {
    "id": "q-066",
    "number": 66,
    "title": "Designing and Sharing APIs - Correcting documentation",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Semantic Versioning",
      "Patch Version"
    ],
    "prompt": "An API at version 3.2.0 has a typo in a resource description in its specification. The fix does not change any request or response. What should the new version be?",
    "options": [
      {
        "letter": "A",
        "text": "3.3.0, because any change to the specification increments the minor version"
      },
      {
        "letter": "B",
        "text": "3.2.1, because a documentation-only fix is a backward-compatible patch change"
      },
      {
        "letter": "C",
        "text": "4.0.0, because the published specification is part of the API contract"
      },
      {
        "letter": "D",
        "text": "3.2.0, because documentation changes do not require a new version"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. A documentation-only fix that changes no request or response is backward-compatible, so the patch version is incremented to 3.2.1. A minor version (A) is for backward-compatible interface additions, a major version (C) is for breaking changes, and leaving the version unchanged (D) loses the record of the published change.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "A documentation-only fix is a backward-compatible patch change."
      },
      "A": {
        "type": "Incorrect",
        "text": "A minor version is for backward-compatible interface additions, not typos."
      },
      "C": {
        "type": "Incorrect",
        "text": "A major version is reserved for breaking changes."
      },
      "D": {
        "type": "Incorrect",
        "text": "Publishing a changed specification still warrants a new version."
      }
    },
    "references": {
      "primary": {
        "title": "Exchange — Asset Versions",
        "url": "https://docs.mulesoft.com/exchange/asset-versions"
      },
      "secondary": {
        "title": "Exchange — Manage Versions",
        "url": "https://docs.mulesoft.com/exchange/manage-versions"
      }
    }
  },
  {
    "id": "q-067",
    "number": 67,
    "title": "Designing and Sharing APIs - Major version in the API instance",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Semantic Versioning",
      "API Manager"
    ],
    "prompt": "An API is published in Exchange as version 1.4.2, and clients call https://api.example.com/orders/v1. The team publishes version 1.5.0. What is the impact on the URL clients use?",
    "options": [
      {
        "letter": "A",
        "text": "Clients must switch to /v2 because the asset version changed"
      },
      {
        "letter": "B",
        "text": "The v1 URL stops working until clients re-register"
      },
      {
        "letter": "C",
        "text": "No change; v1 in the URL reflects the major version only"
      },
      {
        "letter": "D",
        "text": "Clients must switch to /v1.5 to use the new version"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. A common practice is to expose only the major version in the API's URL or instance version, because minor and patch changes are backward compatible. Clients only need to move to a new URL when a new major version introduces breaking changes.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Only major changes require a new major URL."
      },
      "C": {
        "type": "Correct",
        "text": "Minor and patch changes are backward compatible and keep the major-version URL."
      },
      "B": {
        "type": "Incorrect",
        "text": "Compatible updates do not affect existing client contracts."
      },
      "D": {
        "type": "Incorrect",
        "text": "Exposing minor versions in URLs would force clients to change for compatible updates."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Managing Versions and Instances",
        "url": "https://docs.mulesoft.com/api-manager/latest/manage-versions-instances-concept"
      },
      "secondary": {
        "title": "Exchange — Asset Versions",
        "url": "https://docs.mulesoft.com/exchange/asset-versions"
      }
    }
  },
  {
    "id": "q-068",
    "number": 68,
    "title": "Designing and Sharing APIs - Renaming a resource",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Semantic Versioning",
      "Breaking Changes"
    ],
    "prompt": "A team wants to rename the /customers resource to /clients in version 2.6.0 of its API. Many clients use /customers. Which approach follows semantic versioning?",
    "options": [
      {
        "letter": "A",
        "text": "Release 2.6.1 because the resource's behavior is unchanged"
      },
      {
        "letter": "B",
        "text": "Rename it in 2.6.0 without changing the version"
      },
      {
        "letter": "C",
        "text": "Release 2.7.0 and notify clients of the change"
      },
      {
        "letter": "D",
        "text": "Release 3.0.0 and keep 2.x running during migration"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Renaming or removing resources breaks existing client requests and requires a new major version. Running the previous major version in parallel and deprecating it later gives clients time to migrate.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Changing the path breaks client requests regardless of behavior."
      },
      "B": {
        "type": "Incorrect",
        "text": "Changing a published contract without a new version breaks clients silently."
      },
      "D": {
        "type": "Correct",
        "text": "Renaming a resource breaks clients, so it requires a new major version and a migration period."
      },
      "C": {
        "type": "Incorrect",
        "text": "A minor release must not break existing clients."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Managing Versions and Instances",
        "url": "https://docs.mulesoft.com/api-manager/latest/manage-versions-instances-concept"
      },
      "secondary": {
        "title": "Exchange — Manage Versions",
        "url": "https://docs.mulesoft.com/exchange/manage-versions"
      }
    }
  },
  {
    "id": "q-069",
    "number": 69,
    "title": "Designing and Sharing APIs - Choose two: changes requiring a minor version",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Semantic Versioning",
      "Minor Version"
    ],
    "prompt": "An Orders API at version 2.1.0 is published in Exchange and consumed by several internal teams. The API team is about to release a change and must decide how to bump the version so existing clients are not broken. Which two changes should increment only the minor version?",
    "options": [
      {
        "letter": "A",
        "text": "Adding a new optional query parameter"
      },
      {
        "letter": "B",
        "text": "Removing a deprecated response field"
      },
      {
        "letter": "C",
        "text": "Changing a field's data type from string to number"
      },
      {
        "letter": "D",
        "text": "Correcting a spelling mistake in the resource description"
      },
      {
        "letter": "E",
        "text": "Adding a new resource for an additional capability"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Correct answers: A and E. Adding an optional query parameter and adding a new resource are both backward-compatible additions, so they increment the minor version. Removing a field (B) and changing a field's type (C) are breaking changes that require a major version, and a spelling correction (D) is a patch change.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Adding an optional parameter is a backward-compatible addition (minor)."
      },
      "E": {
        "type": "Correct",
        "text": "Adding a resource is a backward-compatible addition (minor)."
      },
      "B": {
        "type": "Incorrect",
        "text": "Removing a field is a breaking change (major)."
      },
      "C": {
        "type": "Incorrect",
        "text": "Changing a field's type is a breaking change (major)."
      },
      "D": {
        "type": "Incorrect",
        "text": "A spelling correction is a patch change, not a minor one."
      }
    },
    "references": {
      "primary": {
        "title": "Exchange — Asset Versions",
        "url": "https://docs.mulesoft.com/exchange/asset-versions"
      },
      "secondary": {
        "title": "Exchange — Manage Versions",
        "url": "https://docs.mulesoft.com/exchange/manage-versions"
      }
    }
  },
  {
    "id": "q-070",
    "number": 70,
    "title": "Designing and Sharing APIs - Dominant upstream SaaS provider",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Bounded Context",
      "Anticorruption Layer"
    ],
    "prompt": "A company's Sales context consumes data from a SaaS vendor's API. The vendor will not change its model for any single customer. The Sales team wants to keep its own clean data model and avoid vendor concepts leaking into it. Which mapping strategy is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "Customer/Supplier, asking the vendor to adapt its model"
      },
      {
        "letter": "B",
        "text": "Anticorruption Layer in the Sales context"
      },
      {
        "letter": "C",
        "text": "Shared Kernel, jointly owning a model with the vendor"
      },
      {
        "letter": "D",
        "text": "Conformist, adopting the vendor's model in the Sales context"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. When the upstream context is dominant and will not adapt, the downstream context chooses between conforming to the upstream model or building an anticorruption layer that translates it. An anticorruption layer protects the downstream model at the cost of translation effort.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The vendor will not accommodate a single customer, so this relationship is not available."
      },
      "C": {
        "type": "Incorrect",
        "text": "A shared kernel requires close collaboration and joint ownership."
      },
      "D": {
        "type": "Incorrect",
        "text": "Conforming would let vendor concepts leak in, which the team wants to avoid."
      },
      "B": {
        "type": "Correct",
        "text": "The downstream context translates the upstream model to protect its own model."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce — Domain-Driven Design for Solution Architecture (bounded contexts, ACL)",
        "url": "https://www.salesforce.com/blog/composing-complex-systems-domain-driven-design"
      },
      "secondary": {
        "title": "MuleSoft Blog — Modeling domain data: canonical vs. bounded context models",
        "url": "https://blogs.mulesoft.com/api-integration/strategy/overcome-the-challenges-of-evolving-legacy-architectures"
      }
    }
  },
  {
    "id": "q-071",
    "number": 71,
    "title": "Designing and Sharing APIs - Accepting the upstream model",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Bounded Context",
      "Conformist"
    ],
    "prompt": "A small Reporting context consumes order data from a large ERP-owned Order context that will not change for it. The Reporting team has no strong model of its own and wants the least integration effort. Which strategy fits best?",
    "options": [
      {
        "letter": "A",
        "text": "Partnership: coordinate releases jointly with the ERP team"
      },
      {
        "letter": "B",
        "text": "Customer/Supplier: require the Order context to change for reporting"
      },
      {
        "letter": "C",
        "text": "Conformist: adopt the upstream Order model"
      },
      {
        "letter": "D",
        "text": "Anticorruption Layer: translate every order into a new model"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. In a conformist relationship, the downstream context adopts the upstream context's model as-is. It suits cases where the upstream does not accommodate the downstream and the downstream has no strong model to protect, minimizing translation effort.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Partnership requires mutual commitment, which the upstream team does not offer."
      },
      "B": {
        "type": "Incorrect",
        "text": "The upstream context will not adapt, so this is not available."
      },
      "C": {
        "type": "Correct",
        "text": "With no leverage and no model to protect, adopting the upstream model minimizes effort."
      },
      "D": {
        "type": "Incorrect",
        "text": "Translation adds effort the team does not need to protect a model it does not have."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce — Domain-Driven Design for Solution Architecture (bounded contexts, ACL)",
        "url": "https://www.salesforce.com/blog/composing-complex-systems-domain-driven-design"
      },
      "secondary": {
        "title": "MuleSoft Blog — Modeling domain data: canonical vs. bounded context models",
        "url": "https://blogs.mulesoft.com/api-integration/strategy/overcome-the-challenges-of-evolving-legacy-architectures"
      }
    }
  },
  {
    "id": "q-072",
    "number": 72,
    "title": "Designing and Sharing APIs - Upstream accommodates the downstream",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Bounded Context",
      "Customer/Supplier"
    ],
    "prompt": "Within one company, the Fulfillment context consumes the Order context's API. The Order team has agreed to plan its API changes around Fulfillment's needs and to include Fulfillment's requirements in its roadmap. Which relationship does this describe?",
    "options": [
      {
        "letter": "A",
        "text": "Conformist, where the downstream context adopts the upstream model without influence"
      },
      {
        "letter": "B",
        "text": "Anticorruption Layer, where the downstream translates to protect its own model"
      },
      {
        "letter": "C",
        "text": "Separate Ways, where the two contexts integrate through no shared contract"
      },
      {
        "letter": "D",
        "text": "Customer/Supplier, where the upstream context accommodates the downstream's needs"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. When the upstream team plans around the downstream's needs, the relationship is Customer/Supplier. Conformist (A) is the opposite, where the downstream has no influence; an anticorruption layer (B) is a translation strategy used when the upstream will not adapt; and Separate Ways (C) means no integration at all.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "The upstream planning around the downstream's needs is the Customer/Supplier relationship."
      },
      "A": {
        "type": "Incorrect",
        "text": "Conformist means the downstream adopts the model with no influence."
      },
      "B": {
        "type": "Incorrect",
        "text": "An anticorruption layer is used when the upstream will not adapt."
      },
      "C": {
        "type": "Incorrect",
        "text": "Separate Ways means the contexts do not integrate."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce — Domain-Driven Design for Solution Architecture (bounded contexts, ACL)",
        "url": "https://www.salesforce.com/blog/composing-complex-systems-domain-driven-design"
      },
      "secondary": {
        "title": "MuleSoft Blog — Modeling domain data: canonical vs. bounded context models",
        "url": "https://blogs.mulesoft.com/api-integration/strategy/overcome-the-challenges-of-evolving-legacy-architectures"
      }
    }
  },
  {
    "id": "q-073",
    "number": 73,
    "title": "Designing and Sharing APIs - Legacy upstream with a poor model",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Bounded Context",
      "Anticorruption Layer"
    ],
    "prompt": "A new Claims context must consume data from a decades-old mainframe policy system whose model is confusing and inconsistent. The mainframe team cannot change it. The Claims team has invested in a clean domain model. What should the architect recommend?",
    "options": [
      {
        "letter": "A",
        "text": "An anticorruption layer in the Claims context"
      },
      {
        "letter": "B",
        "text": "Ask the mainframe team to redesign its data model"
      },
      {
        "letter": "C",
        "text": "Conform to the mainframe model to avoid translation"
      },
      {
        "letter": "D",
        "text": "Share one model between Claims and the mainframe"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. When the upstream model is poor and cannot be changed, and the downstream has a valuable model to protect, an anticorruption layer is the preferred strategy. In API-led architectures this translation often sits in a System API or in the downstream API's implementation.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "The mainframe team cannot change the system."
      },
      "A": {
        "type": "Correct",
        "text": "Translation isolates the Claims model from the legacy system's confusing model."
      },
      "C": {
        "type": "Incorrect",
        "text": "Conforming would import the confusing legacy model into the clean Claims context."
      },
      "D": {
        "type": "Incorrect",
        "text": "Joint ownership is impossible when one side cannot change."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce — Domain-Driven Design for Solution Architecture (bounded contexts, ACL)",
        "url": "https://www.salesforce.com/blog/composing-complex-systems-domain-driven-design"
      },
      "secondary": {
        "title": "MuleSoft Blog — Modeling domain data: canonical vs. bounded context models",
        "url": "https://blogs.mulesoft.com/api-integration/strategy/overcome-the-challenges-of-evolving-legacy-architectures"
      }
    }
  },
  {
    "id": "q-074",
    "number": 74,
    "title": "Designing and Sharing APIs - Choosing a strategy by power",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Bounded Context",
      "Context Mapping"
    ],
    "prompt": "What primarily determines the most appropriate strategy for mapping between the API data models of two bounded contexts?",
    "options": [
      {
        "letter": "A",
        "text": "The number of API Manager policies applied to each of the two APIs"
      },
      {
        "letter": "B",
        "text": "The power relationship between the two contexts, such as which one can influence the other"
      },
      {
        "letter": "C",
        "text": "Whether the two APIs are deployed to CloudHub or to Runtime Fabric"
      },
      {
        "letter": "D",
        "text": "The programming language used to implement each of the two APIs"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. The mapping strategy follows the power relationship between the contexts: whether the upstream will adapt for the downstream, whether the downstream must conform, or whether a translation layer is needed. Policies (A), the runtime option (C), and the implementation language (D) do not determine the mapping strategy.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "The power relationship determines which mapping strategy fits."
      },
      "A": {
        "type": "Incorrect",
        "text": "Policies govern traffic; they do not determine the mapping strategy."
      },
      "C": {
        "type": "Incorrect",
        "text": "The runtime option does not determine the mapping strategy."
      },
      "D": {
        "type": "Incorrect",
        "text": "The implementation language does not determine the mapping strategy."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce — Domain-Driven Design for Solution Architecture (bounded contexts, ACL)",
        "url": "https://www.salesforce.com/blog/composing-complex-systems-domain-driven-design"
      },
      "secondary": {
        "title": "MuleSoft Blog — Modeling domain data: canonical vs. bounded context models",
        "url": "https://blogs.mulesoft.com/api-integration/strategy/overcome-the-challenges-of-evolving-legacy-architectures"
      }
    }
  },
  {
    "id": "q-075",
    "number": 75,
    "title": "Designing and Sharing APIs - Choose two: when the upstream will not adapt",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Bounded Context",
      "Context Mapping"
    ],
    "prompt": "An upstream context will not change its API data model for a downstream context. Which two mapping strategies are available to the downstream context? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Partnership, where both contexts plan changes together"
      },
      {
        "letter": "B",
        "text": "Customer/Supplier, where the upstream accommodates the downstream's needs"
      },
      {
        "letter": "C",
        "text": "Conformist, where the downstream adopts the upstream model as its own"
      },
      {
        "letter": "D",
        "text": "Shared Kernel, where both contexts share and co-own the same model"
      },
      {
        "letter": "E",
        "text": "Anticorruption Layer, where the downstream translates to protect its own model"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Correct answers: C and E. When the upstream will not adapt, the downstream either conforms to the upstream model or protects its own model behind an anticorruption layer. Partnership (A), Customer/Supplier (B), and Shared Kernel (D) all require some agreement or influence between the two contexts.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Conformist means the downstream adopts the upstream model."
      },
      "E": {
        "type": "Correct",
        "text": "An anticorruption layer translates to protect the downstream model."
      },
      "A": {
        "type": "Incorrect",
        "text": "Partnership requires both contexts to plan changes together."
      },
      "B": {
        "type": "Incorrect",
        "text": "Customer/Supplier requires the upstream to accommodate the downstream."
      },
      "D": {
        "type": "Incorrect",
        "text": "Shared Kernel requires both contexts to co-own the same model."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce — Domain-Driven Design for Solution Architecture (bounded contexts, ACL)",
        "url": "https://www.salesforce.com/blog/composing-complex-systems-domain-driven-design"
      },
      "secondary": {
        "title": "MuleSoft Blog — Modeling domain data: canonical vs. bounded context models",
        "url": "https://blogs.mulesoft.com/api-integration/strategy/overcome-the-challenges-of-evolving-legacy-architectures"
      }
    }
  },
  {
    "id": "q-076",
    "number": 76,
    "title": "Designing and Sharing APIs - Which method is not idempotent",
    "domain": "Designing and sharing APIs",
    "topics": [
      "HTTP Methods",
      "Idempotency"
    ],
    "prompt": "A client may resend a request after a network timeout. For which HTTP method is resending the request most likely to cause an unintended side effect, such as a duplicate record?",
    "options": [
      {
        "letter": "A",
        "text": "PUT, because repeating it overwrites the resource with the same representation"
      },
      {
        "letter": "B",
        "text": "DELETE, because repeating it removes the resource more than once"
      },
      {
        "letter": "C",
        "text": "GET, because repeating it returns the resource more than once"
      },
      {
        "letter": "D",
        "text": "POST, because repeating it creates a new resource each time"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. POST is not idempotent: each repeat is treated as a new request and can create a duplicate resource. PUT (A) replaces the resource with the same representation on every repeat, DELETE (B) leaves the resource absent after the first call, and GET (C) has no side effects.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "POST is not idempotent, so a repeat can create a duplicate."
      },
      "A": {
        "type": "Incorrect",
        "text": "PUT is idempotent; repeating it yields the same representation."
      },
      "B": {
        "type": "Incorrect",
        "text": "DELETE is idempotent; repeating it leaves the resource absent."
      },
      "C": {
        "type": "Incorrect",
        "text": "GET has no side effects and is safe to repeat."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft — What is a RESTful API?",
        "url": "https://www.mulesoft.com/resources/api/restful-api"
      },
      "secondary": {
        "title": "MuleSoft Blog — Making a Fault-tolerant Application Network",
        "url": "https://blogs.mulesoft.com/dev-guides/application-network-fault-tolerance/"
      }
    }
  },
  {
    "id": "q-077",
    "number": 77,
    "title": "Designing and Sharing APIs - Lost update prevention",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Optimistic Concurrency",
      "ETag"
    ],
    "prompt": "Two agents edit the same customer record through a REST API. Each reads the record, makes a change, and sends a PUT. The second PUT silently overwrites the first agent's change. Which HTTP-native mechanism prevents this?",
    "options": [
      {
        "letter": "A",
        "text": "Return an ETag on GET and require If-Match on PUT"
      },
      {
        "letter": "B",
        "text": "Require clients to use POST instead of PUT for updates"
      },
      {
        "letter": "C",
        "text": "Add Cache-Control: no-cache to the GET response"
      },
      {
        "letter": "D",
        "text": "Lock the record on the server for each client session"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. HTTP supports optimistic concurrency through entity tags. The server returns an ETag representing the resource version; the client sends it back in an If-Match header on updates. If the resource has changed in the meantime, the server rejects the update instead of overwriting it.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "Changing the method does not detect concurrent modifications."
      },
      "A": {
        "type": "Correct",
        "text": "The server rejects a PUT whose ETag no longer matches the current version."
      },
      "C": {
        "type": "Incorrect",
        "text": "Disabling caching does not stop one update from overwriting another."
      },
      "D": {
        "type": "Incorrect",
        "text": "Pessimistic locks conflict with stateless REST and HTTP-native concurrency."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft — What is REST API design?",
        "url": "https://www.mulesoft.com/resources/api/what-is-rest-api-design"
      },
      "secondary": {
        "title": "MuleSoft — What is a RESTful API?",
        "url": "https://www.mulesoft.com/resources/api/restful-api"
      }
    }
  },
  {
    "id": "q-078",
    "number": 78,
    "title": "Designing and Sharing APIs - Response to a stale update",
    "domain": "Designing and sharing APIs",
    "topics": [
      "Optimistic Concurrency",
      "HTTP Status Codes"
    ],
    "prompt": "A client sends PUT /orders/123 with an If-Match header whose ETag no longer matches the current version of the order. Which response should the API return?",
    "options": [
      {
        "letter": "A",
        "text": "409 Conflict, because another client has already modified the order"
      },
      {
        "letter": "B",
        "text": "412 Precondition Failed, because the precondition the client sent was not met"
      },
      {
        "letter": "C",
        "text": "304 Not Modified, because the client's copy is out of date"
      },
      {
        "letter": "D",
        "text": "428 Precondition Required, because the client must send a newer ETag"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. If-Match fails when the ETag does not match the current version, so the API returns 412 Precondition Failed. A 409 (A) signals a resource-state conflict without expressing the failed precondition, a 304 (C) is a response to a conditional GET, and a 428 (D) asks the client to include a precondition it has not sent.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "412 Precondition Failed is returned when an If-Match precondition fails."
      },
      "A": {
        "type": "Incorrect",
        "text": "409 signals a state conflict; it does not express a failed precondition."
      },
      "C": {
        "type": "Incorrect",
        "text": "304 is a response to a conditional GET, not a failed If-Match."
      },
      "D": {
        "type": "Incorrect",
        "text": "428 asks for a precondition the client has not supplied."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft — What is REST API design?",
        "url": "https://www.mulesoft.com/resources/api/what-is-rest-api-design"
      },
      "secondary": {
        "title": "MuleSoft — What is a RESTful API?",
        "url": "https://www.mulesoft.com/resources/api/restful-api"
      }
    }
  },
  {
    "id": "q-079",
    "number": 79,
    "title": "Designing and Sharing APIs - Conditional GET",
    "domain": "Designing and sharing APIs",
    "topics": [
      "ETag",
      "Caching"
    ],
    "prompt": "A mobile client repeatedly downloads a large product catalog that rarely changes. The API returns an ETag with each response. How can the client avoid downloading the catalog again when it has not changed?",
    "options": [
      {
        "letter": "A",
        "text": "Send If-Match with the stored ETag so the API returns the catalog only if it changed"
      },
      {
        "letter": "B",
        "text": "Add a random query parameter to each request so intermediate caches always miss"
      },
      {
        "letter": "C",
        "text": "Send If-None-Match with the stored ETag and treat a 304 response as an unchanged catalog"
      },
      {
        "letter": "D",
        "text": "Switch to POST so the client can send the ETag in the request body"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. If-None-Match with the stored ETag makes the API return 304 Not Modified when the representation is unchanged, so the client reuses its copy. If-Match (A) is for conditional writes, a random query parameter (B) defeats caching rather than using it, and POST (D) is not how conditional GET works.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "If-None-Match plus a 304 response lets the client reuse its cached copy."
      },
      "A": {
        "type": "Incorrect",
        "text": "If-Match is used for conditional writes, not for conditional reads."
      },
      "B": {
        "type": "Incorrect",
        "text": "A random query parameter defeats caching instead of using it."
      },
      "D": {
        "type": "Incorrect",
        "text": "Conditional retrieval uses GET with a header, not POST."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft — What is REST API design?",
        "url": "https://www.mulesoft.com/resources/api/what-is-rest-api-design"
      },
      "secondary": {
        "title": "HTTP Caching Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-http-caching"
      }
    }
  },
  {
    "id": "q-080",
    "number": 80,
    "title": "Designing and Sharing APIs - Idempotent full update",
    "domain": "Designing and sharing APIs",
    "topics": [
      "HTTP Methods",
      "Idempotency"
    ],
    "prompt": "An API team must choose a method for an operation that sets a customer's complete preferences document. Clients may retry the call after timeouts, and retries must not cause different results. Which method is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "POST to a preferences collection, because each call appends a new version"
      },
      {
        "letter": "B",
        "text": "PATCH with incremental changes, because it merges only the supplied fields"
      },
      {
        "letter": "C",
        "text": "GET with the preferences in query parameters, because it is safe and repeatable"
      },
      {
        "letter": "D",
        "text": "PUT to the customer's preferences resource, because repeating it yields the same state"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. PUT replaces the resource with the supplied representation, so repeating the same call leaves the resource in the same state, which suits a retried full update. POST (A) is not idempotent, PATCH (B) is a partial update rather than a full replacement, and GET (C) must not change state at all.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "PUT is idempotent, so a retried full update yields the same state."
      },
      "A": {
        "type": "Incorrect",
        "text": "POST is not idempotent and can create multiple versions."
      },
      "B": {
        "type": "Incorrect",
        "text": "PATCH is a partial update, not a full replacement."
      },
      "C": {
        "type": "Incorrect",
        "text": "GET must not change state."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft — What is a RESTful API?",
        "url": "https://www.mulesoft.com/resources/api/restful-api"
      },
      "secondary": {
        "title": "MuleSoft — What is REST API design?",
        "url": "https://www.mulesoft.com/resources/api/what-is-rest-api-design"
      }
    }
  },
  {
    "id": "q-081",
    "number": 81,
    "title": "Designing and Sharing APIs - Choose two idempotent methods",
    "domain": "Designing and sharing APIs",
    "topics": [
      "HTTP Methods",
      "Idempotency"
    ],
    "prompt": "A mobile team is adding an offline retry mechanism to its Fulfillment API client. The architect warns that when connectivity drops mid-request the app may transparently retry the same call, so repeated identical requests must not cause duplicate side effects. Which two HTTP methods are idempotent according to HTTP semantics?",
    "options": [
      {
        "letter": "A",
        "text": "DELETE"
      },
      {
        "letter": "B",
        "text": "POST"
      },
      {
        "letter": "C",
        "text": "PATCH"
      },
      {
        "letter": "D",
        "text": "CONNECT"
      },
      {
        "letter": "E",
        "text": "PUT"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Correct answers: A and E. DELETE and PUT are idempotent: repeating the same request leaves the resource in the same state. POST (B) is not idempotent, PATCH (C) is not guaranteed to be idempotent, and CONNECT (D) is a tunnel-establishment method.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "DELETE is idempotent: repeating it leaves the resource absent."
      },
      "E": {
        "type": "Correct",
        "text": "PUT is idempotent: repeating it yields the same representation."
      },
      "B": {
        "type": "Incorrect",
        "text": "POST is not idempotent."
      },
      "C": {
        "type": "Incorrect",
        "text": "PATCH is not guaranteed to be idempotent."
      },
      "D": {
        "type": "Incorrect",
        "text": "CONNECT establishes a tunnel; it is not an idempotent resource method."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft — What is a RESTful API?",
        "url": "https://www.mulesoft.com/resources/api/restful-api"
      },
      "secondary": {
        "title": "MuleSoft Blog — Making a Fault-tolerant Application Network",
        "url": "https://blogs.mulesoft.com/dev-guides/application-network-fault-tolerance/"
      }
    }
  },
  {
    "id": "q-082",
    "number": 82,
    "title": "API Layers - Order status for a mobile app",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "API-led Connectivity",
      "Experience API"
    ],
    "prompt": "A retailer is building a mobile app that shows customers the status of their orders. Order data lives in SAP, shipment tracking in a carrier's SaaS platform, and customer profiles in Salesforce. The mobile team needs a compact payload optimized for small screens, and the web team will build a similar feature next quarter. Which set of APIs best follows API-led connectivity?",
    "options": [
      {
        "letter": "A",
        "text": "An Order Status Process API that connects to all three backends directly, exposed to the mobile app without an Experience API"
      },
      {
        "letter": "B",
        "text": "System APIs per backend, a reusable Order Status Process API, and a thin Mobile Experience API"
      },
      {
        "letter": "C",
        "text": "System APIs for SAP orders, carrier tracking, and Salesforce customers that the mobile app invokes and combines on the device"
      },
      {
        "letter": "D",
        "text": "One Mobile Order Status API that calls SAP, the carrier platform, and Salesforce directly and returns the mobile payload"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. API-led connectivity separates concerns into three layers. System APIs unlock data from each system of record, Process APIs orchestrate and combine that data into reusable business capabilities such as order status, and Experience APIs adapt the result for a specific channel. Because the web team will need the same capability, the orchestration must live in a Process API that both channels reuse, while each channel gets its own lightweight Experience API.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Without System APIs the backend access is not reusable, and the Process API would have to absorb channel-specific formatting that changes with the mobile UI."
      },
      "B": {
        "type": "Correct",
        "text": "Each backend gets a System API, the cross-system orchestration is a reusable Process API that the web team can also consume, and the channel-specific shaping lives in a thin Experience API."
      },
      "C": {
        "type": "Incorrect",
        "text": "Pushing orchestration into the client duplicates business logic in every channel and increases round trips over mobile networks."
      },
      "D": {
        "type": "Incorrect",
        "text": "This is a point-to-point design: the orchestration and backend access would have to be rebuilt for the web channel, so nothing is reusable."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      },
      "secondary": {
        "title": "MuleSoft Whitepaper — API-led connectivity",
        "url": "https://www.mulesoft.com/lp/whitepaper/api/api-led-connectivity"
      }
    }
  },
  {
    "id": "q-083",
    "number": 83,
    "title": "API Layers - Onboarding a new employee",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "API-led Connectivity",
      "Process API"
    ],
    "prompt": "An HR department wants to automate employee onboarding. When a hire is confirmed in Workday, an account must be created in Active Directory, a laptop ordered in ServiceNow, and payroll set up in ADP. The same onboarding sequence will later be triggered from a manager self-service portal. Where should the onboarding orchestration logic be implemented?",
    "options": [
      {
        "letter": "A",
        "text": "In each System API, which calls the next System API in the chain once its own step completes"
      },
      {
        "letter": "B",
        "text": "In a Manager Portal Experience API that calls each System API in sequence when the portal submits a request"
      },
      {
        "letter": "C",
        "text": "In an Employee Onboarding Process API that calls a System API for each backend"
      },
      {
        "letter": "D",
        "text": "In a Workday System API that also calls Active Directory, ServiceNow, and ADP after reading the hire record"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Process APIs encapsulate business processes that interact with and shape data from multiple systems, independent of the channel that triggers them. Onboarding spans four systems and is needed by more than one consumer, so the orchestration belongs in a Process API that calls one System API per backend. Experience APIs and System APIs should not carry this cross-system logic.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Chaining System APIs together creates hidden coupling between backends and makes the end-to-end process impossible to change or reuse in one place."
      },
      "B": {
        "type": "Incorrect",
        "text": "The orchestration would be tied to one channel, so the Workday-triggered automation would have to duplicate it."
      },
      "D": {
        "type": "Incorrect",
        "text": "System APIs should expose a single system's data and capabilities; embedding cross-system orchestration couples Workday access to unrelated systems."
      },
      "C": {
        "type": "Correct",
        "text": "Onboarding is a business process spanning several systems; implementing it once in a Process API lets both the Workday-triggered flow and the self-service portal reuse it."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      },
      "secondary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      }
    }
  },
  {
    "id": "q-084",
    "number": 84,
    "title": "API Layers - Partner price lookup",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "API-led Connectivity",
      "Experience API"
    ],
    "prompt": "A manufacturer already has a Pricing Process API used by its internal sales portal. It now wants to let distributors query prices through a B2B channel that requires a different payload structure, partner-specific field names, and stricter rate limits. What is the most appropriate way to add the distributor capability?",
    "options": [
      {
        "letter": "A",
        "text": "Build a new Distributor Pricing Process API that copies the pricing logic and calls the same System APIs"
      },
      {
        "letter": "B",
        "text": "Modify the Pricing Process API so it returns the partner field names whenever the caller is a distributor"
      },
      {
        "letter": "C",
        "text": "Expose the pricing System APIs directly to distributors and let them calculate prices themselves"
      },
      {
        "letter": "D",
        "text": "Add a Distributor Pricing Experience API that reuses the Pricing Process API"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. When an existing business capability must be offered to a new channel with different data formats or policies, API-led connectivity adds an Experience API in front of the existing Process API. The Process API stays channel-agnostic and reusable, while the Experience API handles the partner-specific shape and lets API Manager apply partner-specific policies such as rate limiting.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "An Experience API adapts an existing capability to a new consumer's format and policies without changing or duplicating the Process API."
      },
      "A": {
        "type": "Incorrect",
        "text": "Duplicating the business logic creates two implementations of pricing that will drift apart over time."
      },
      "B": {
        "type": "Incorrect",
        "text": "Adding consumer-specific formatting to the Process API couples it to individual channels and risks breaking the internal sales portal."
      },
      "C": {
        "type": "Incorrect",
        "text": "Pricing rules are business logic that should not be pushed to external consumers, and exposing System APIs externally leaks backend details."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      },
      "secondary": {
        "title": "MuleSoft Whitepaper — API-led connectivity",
        "url": "https://www.mulesoft.com/lp/whitepaper/api/api-led-connectivity"
      }
    }
  },
  {
    "id": "q-085",
    "number": 85,
    "title": "API Layers - Identify the System APIs",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "API-led Connectivity",
      "System API"
    ],
    "prompt": "An insurer is designing a claims-submission capability. A claim is validated against policy data in a mainframe, documents are stored in Box, and payment requests go to Oracle E-Business Suite. Mobile and broker portals will both submit claims. Which APIs should be classified as System APIs in this design?",
    "options": [
      {
        "letter": "A",
        "text": "Policy API, Document API, and Payment API"
      },
      {
        "letter": "B",
        "text": "Submit Claim API, Policy API over the mainframe, and Broker Portal Claims API"
      },
      {
        "letter": "C",
        "text": "Mobile Claims API, Broker Portal Claims API, and Submit Claim API"
      },
      {
        "letter": "D",
        "text": "Submit Claim API, Document API over Box, and Payment API over Oracle E-Business Suite"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. System APIs provide a means of accessing underlying systems of record and expose their data in a consistent way, insulating consumers from backend complexity. Here the mainframe, Box, and Oracle each warrant at least one System API. Claim submission, which coordinates all three, is a Process API, and the mobile and broker interfaces are Experience APIs.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Each of these APIs exposes the data or functions of exactly one system of record, which is the defining responsibility of a System API."
      },
      "B": {
        "type": "Incorrect",
        "text": "Submit Claim orchestrates several systems (a Process API) and the Broker Portal API serves one channel (an Experience API)."
      },
      "C": {
        "type": "Incorrect",
        "text": "These APIs serve channels or orchestrate a process; none of them unlocks a single backend system."
      },
      "D": {
        "type": "Incorrect",
        "text": "Submit Claim spans the mainframe, Box, and Oracle and therefore belongs in the Process layer."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      },
      "secondary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      }
    }
  },
  {
    "id": "q-086",
    "number": 86,
    "title": "API Layers - Customer 360 in two channels",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "API-led Connectivity",
      "Reuse"
    ],
    "prompt": "A bank currently has separate point-to-point integrations that build a customer 360 view for its call-center application and its online banking site. Both integrations call the same core banking, card, and CRM systems with nearly identical logic. The bank wants to reduce duplication and speed up delivery of future channels. Which change gives the greatest reuse?",
    "options": [
      {
        "letter": "A",
        "text": "Replace both integrations with a nightly batch job that copies all three systems into a shared customer database"
      },
      {
        "letter": "B",
        "text": "Create System APIs per backend, a Customer 360 Process API, and thin Experience APIs"
      },
      {
        "letter": "C",
        "text": "Merge both integrations into one Customer 360 Experience API that detects the channel and returns either format"
      },
      {
        "letter": "D",
        "text": "Keep both integrations and publish their source code in Exchange so future channel teams can copy it"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. The application network value of API-led connectivity comes from reusing System and Process APIs across consumers. Extracting backend access into System APIs and the aggregation into a Customer 360 Process API eliminates the duplicated logic, while thin Experience APIs keep each channel's specific needs isolated and quick to build.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A batch copy introduces data latency and a new system of record instead of creating reusable, real-time APIs."
      },
      "B": {
        "type": "Correct",
        "text": "Moving the shared backend access and aggregation logic into System and Process APIs lets every current and future channel reuse it."
      },
      "C": {
        "type": "Incorrect",
        "text": "Mixing several channels' formats into one Experience API couples them so a change for one channel risks breaking the other."
      },
      "D": {
        "type": "Incorrect",
        "text": "Copying code does not create reusable runtime assets; every copy still needs to be maintained separately."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Whitepaper — API-led connectivity",
        "url": "https://www.mulesoft.com/lp/whitepaper/api/api-led-connectivity"
      },
      "secondary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      }
    }
  },
  {
    "id": "q-087",
    "number": 87,
    "title": "API Layers - Assigning a new API to a layer",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "API-led Connectivity",
      "Process API"
    ],
    "prompt": "An architect is reviewing a proposed Inventory Availability API. It reads stock levels from two warehouse management systems, applies business rules to reserve safety stock, and returns a single available-to-promise quantity. It will be consumed by the e-commerce site, the store app, and a marketplace integration. In which layer should this API be placed?",
    "options": [
      {
        "letter": "A",
        "text": "Experience layer, because it is consumed directly by customer-facing applications"
      },
      {
        "letter": "B",
        "text": "No layer, because availability calculations should be implemented inside each consuming application"
      },
      {
        "letter": "C",
        "text": "Process layer, because it combines several systems and applies shared business rules"
      },
      {
        "letter": "D",
        "text": "System layer, because it reads inventory data directly from the warehouse management systems"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Layer assignment depends on the API's responsibility, not on who calls it. An API that orchestrates several systems and applies business rules that are independent of any particular channel belongs in the Process layer, where it can be reused by the e-commerce site, store app, and marketplace integration through their own Experience APIs if needed.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Being consumed by channels does not make an API an Experience API; it serves three different channels with the same channel-agnostic result."
      },
      "B": {
        "type": "Incorrect",
        "text": "Duplicating the calculation in every channel produces inconsistent results and prevents reuse."
      },
      "D": {
        "type": "Incorrect",
        "text": "System APIs front a single system and avoid business rules; this API spans two systems and computes a business value."
      },
      "C": {
        "type": "Correct",
        "text": "Aggregating multiple systems and applying channel-independent business rules is the defining responsibility of a Process API."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      },
      "secondary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      }
    }
  },
  {
    "id": "q-088",
    "number": 88,
    "title": "API Layers - Choose two layers for a quote process",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "API-led Connectivity",
      "Layers"
    ],
    "prompt": "A logistics company wants a Get Freight Quote capability. It must call a rating engine and a capacity-planning system, apply customer-specific discounts stored in Salesforce, and be offered to a customer web portal and to EDI partners in different formats. Which two statements describe a correct API-led design? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "A single Experience API should serve both the web portal and the EDI partners to avoid duplicate APIs"
      },
      {
        "letter": "B",
        "text": "The rating engine System API should call the capacity System API so the Process layer is unnecessary"
      },
      {
        "letter": "C",
        "text": "The discount rules should be implemented in the web portal Experience API because only portal customers receive discounts"
      },
      {
        "letter": "D",
        "text": "The rating engine, capacity-planning system, and Salesforce should each be fronted by System APIs"
      },
      {
        "letter": "E",
        "text": "A Freight Quote Process API should combine the rates, capacity, and discounts into one channel-independent quote"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Correct answers: D and E. In API-led connectivity, each backend is unlocked by System APIs, cross-system business logic such as calculating a freight quote with discounts is implemented once in a Process API, and each channel receives its own Experience API in the format it requires. Discounts that depend on the customer rather than the channel belong in the Process layer.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The two channels need different formats; separate Experience APIs keep each channel's changes isolated."
      },
      "B": {
        "type": "Incorrect",
        "text": "System APIs should not orchestrate other systems; that hides business logic in the wrong layer and removes reuse."
      },
      "D": {
        "type": "Correct",
        "text": "Each backend gets a System API so that its data and functions are reusable and its complexity is hidden."
      },
      "C": {
        "type": "Incorrect",
        "text": "The scenario states discounts are customer-specific, not channel-specific, so they must apply to EDI partners as well."
      },
      "E": {
        "type": "Correct",
        "text": "The quote calculation spans multiple systems and is needed by both channels, so it belongs in a reusable Process API."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      },
      "secondary": {
        "title": "MuleSoft Whitepaper — API-led connectivity",
        "url": "https://www.mulesoft.com/lp/whitepaper/api/api-led-connectivity"
      }
    }
  },
  {
    "id": "q-089",
    "number": 89,
    "title": "API Layers - Event-driven step in a process",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "API-led Connectivity",
      "Process API"
    ],
    "prompt": "A telecom company is redesigning its order-to-activation process. After an order is accepted, provisioning in the network inventory system can take several minutes, and the customer app must be notified when activation completes. The company still wants the activation logic to be reusable by the retail-store app. What is the most appropriate design?",
    "options": [
      {
        "letter": "A",
        "text": "A reusable Activation Process API triggers provisioning and publishes a completion event to the channels"
      },
      {
        "letter": "B",
        "text": "The network inventory System API sends push notifications directly to the customer app when provisioning finishes"
      },
      {
        "letter": "C",
        "text": "The customer app calls the network inventory System API and polls it every few seconds until provisioning completes"
      },
      {
        "letter": "D",
        "text": "The customer Experience API holds the HTTP connection open until the network inventory system finishes provisioning"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. API-led connectivity does not require every interaction to be synchronous. Long-running business processes still belong in the Process layer, which can trigger work through System APIs and publish events when the work completes. Experience APIs or channel components then relay those events in the form each app needs, keeping the activation logic reusable across channels.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "Channel notification is not the responsibility of a System API; it would couple the backend layer to a specific consumer."
      },
      "C": {
        "type": "Incorrect",
        "text": "The client would contain process logic and hit the backend repeatedly, and the retail-store app would need the same logic."
      },
      "A": {
        "type": "Correct",
        "text": "The long-running process stays in a reusable Process API, and asynchronous notification decouples the channels from provisioning time."
      },
      "D": {
        "type": "Incorrect",
        "text": "Holding synchronous connections for minutes risks timeouts and ties the process to a single channel."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      },
      "secondary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      }
    }
  },
  {
    "id": "q-090",
    "number": 90,
    "title": "API Layers - Who should own the System APIs?",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Ownership",
      "System API"
    ],
    "prompt": "A global manufacturer is organizing API ownership. Its SAP system is run by a central ERP team, the customer service process is owned by the service line of business, and a new field-technician mobile app is built by a digital agency. Which ownership model best matches API-led connectivity?",
    "options": [
      {
        "letter": "A",
        "text": "The ERP team owns all three layers because all data ultimately comes from SAP"
      },
      {
        "letter": "B",
        "text": "Each layer is owned by the team closest to it: ERP team, service line, and agency"
      },
      {
        "letter": "C",
        "text": "The digital agency owns all three layers because the mobile app is the first consumer"
      },
      {
        "letter": "D",
        "text": "The C4E owns every API in every layer to guarantee consistent standards"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Layers in API-led connectivity align with ownership. System APIs are typically owned by the central IT or system teams that understand the systems of record, Process APIs by the lines of business or domain teams that own the processes, and Experience APIs by the application and channel developers who consume them. This decentralizes delivery while keeping each API with the people best placed to evolve it.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The ERP team lacks knowledge of the service process and the mobile experience and would become a bottleneck."
      },
      "B": {
        "type": "Correct",
        "text": "APIs are best owned by the teams that understand them: backend experts for System APIs, process owners for Process APIs, and app developers for Experience APIs."
      },
      "C": {
        "type": "Incorrect",
        "text": "The first consumer should not own reusable System and Process APIs that other consumers will depend on."
      },
      "D": {
        "type": "Incorrect",
        "text": "The C4E enables and governs; centralizing all API delivery in the C4E recreates the IT delivery bottleneck."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      },
      "secondary": {
        "title": "MuleSoft Whitepaper — API-led connectivity",
        "url": "https://www.mulesoft.com/lp/whitepaper/api/api-led-connectivity"
      }
    }
  },
  {
    "id": "q-091",
    "number": 91,
    "title": "API Layers - Rate of change by layer",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Rate of Change",
      "Layers"
    ],
    "prompt": "An architect explains API-led connectivity to business stakeholders and wants to describe how often APIs in each layer are expected to change. Which statement is most accurate?",
    "options": [
      {
        "letter": "A",
        "text": "Process APIs change most frequently because each new channel requires a new version of every Process API"
      },
      {
        "letter": "B",
        "text": "System APIs change most frequently because backend systems receive patches and upgrades every quarter"
      },
      {
        "letter": "C",
        "text": "Experience APIs change most often, Process APIs moderately, and System APIs least"
      },
      {
        "letter": "D",
        "text": "All three layers change at the same rate because they are deployed through the same CI/CD pipeline"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. One of the defining characteristics of the three layers is their rate of change. Experience APIs track fast-moving channel and UI requirements, Process APIs evolve with business processes, and System APIs change slowly because they front long-lived systems of record. Separating APIs this way lets fast-changing parts evolve without destabilizing the reusable foundation.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "The layers are arranged by rate of change: channels evolve quickly, processes evolve moderately, and systems of record are the most stable."
      },
      "A": {
        "type": "Incorrect",
        "text": "New channels should be handled by new Experience APIs that reuse existing Process APIs unchanged."
      },
      "B": {
        "type": "Incorrect",
        "text": "Backend patches rarely alter a System API contract; System APIs are designed to be the most stable layer."
      },
      "D": {
        "type": "Incorrect",
        "text": "Deployment tooling does not determine how often an API's contract changes; consumer and business needs do."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      },
      "secondary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      }
    }
  },
  {
    "id": "q-092",
    "number": 92,
    "title": "API Layers - Functional focus of a System API",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Functional Focus",
      "System API"
    ],
    "prompt": "A team proposes a Customer System API in front of Salesforce that, in addition to reading and updating accounts, calculates loyalty tiers using purchase history from an order database and formats addresses specifically for the mobile app. What should the architect recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Move the loyalty calculation into Salesforce with Apex so the System API stays thin"
      },
      {
        "letter": "B",
        "text": "Split it into two System APIs: one for Salesforce accounts and one for loyalty tiers and mobile formatting"
      },
      {
        "letter": "C",
        "text": "Keep the design because putting everything in one API reduces the number of deployments to manage"
      },
      {
        "letter": "D",
        "text": "Keep only Salesforce account access in the System API and move the other logic to other layers"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Each layer has a distinct functional focus. System APIs expose and abstract a single system of record, Process APIs implement business logic and orchestration across systems, and Experience APIs adapt data for a particular channel. Mixing these responsibilities in one System API couples it to other systems and to a single consumer, reducing reuse.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The calculation needs order data from another system; pushing it into Salesforce creates a hidden cross-system dependency."
      },
      "B": {
        "type": "Incorrect",
        "text": "A loyalty-and-formatting API still mixes cross-system business logic with channel concerns and is not a System API."
      },
      "C": {
        "type": "Incorrect",
        "text": "Fewer deployments do not compensate for a System API that is coupled to other systems and to one channel, which destroys reuse."
      },
      "D": {
        "type": "Correct",
        "text": "A System API's functional focus is unlocking one system; business rules across systems and channel formatting belong to other layers."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      },
      "secondary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      }
    }
  },
  {
    "id": "q-093",
    "number": 93,
    "title": "API Layers - Frequent UI changes",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Rate of Change",
      "Experience API"
    ],
    "prompt": "A retail marketing team redesigns its mobile app screens every few weeks, and each redesign changes which product fields are shown and how they are grouped. Today the team requests changes to the Product Process API for every redesign, which forces regression testing for five other consumers. What should the architect recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Add a Mobile Product Experience API, owned by the mobile team, in front of the Process API"
      },
      {
        "letter": "B",
        "text": "Add a new major version of the Product Process API for each redesign and keep all versions running"
      },
      {
        "letter": "C",
        "text": "Freeze the Product Process API and require the mobile team to adapt its screens to the existing response"
      },
      {
        "letter": "D",
        "text": "Let the mobile app call the product System APIs directly to bypass the Process API"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Experience APIs exist to absorb the high rate of change of channel requirements. When a channel's needs change frequently, giving that channel its own Experience API, owned by the channel team, lets it iterate independently while the Process API stays stable for its other consumers.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Isolating fast-changing channel requirements in an Experience API owned by the channel team protects the shared Process API and its other consumers."
      },
      "B": {
        "type": "Incorrect",
        "text": "Major versions of a shared Process API for cosmetic channel changes create unnecessary operational and governance overhead."
      },
      "C": {
        "type": "Incorrect",
        "text": "This ignores legitimate channel needs instead of placing them in the appropriate layer."
      },
      "D": {
        "type": "Incorrect",
        "text": "Bypassing the Process API duplicates business logic in the app and couples the channel to the backends."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      },
      "secondary": {
        "title": "MuleSoft Whitepaper — API-led connectivity",
        "url": "https://www.mulesoft.com/lp/whitepaper/api/api-led-connectivity"
      }
    }
  },
  {
    "id": "q-094",
    "number": 94,
    "title": "API Layers - Assign APIs by ownership and change",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Ownership",
      "Layers"
    ],
    "prompt": "A university has these APIs: (1) Student Records API over the Banner SIS, maintained by central IT, rarely changing; (2) Course Enrollment API that checks prerequisites across Banner and the learning management system, owned by the registrar; (3) Student Mobile API used by the student app team and updated every sprint. How should they be assigned?",
    "options": [
      {
        "letter": "A",
        "text": "(1) Experience, (2) Process, (3) System"
      },
      {
        "letter": "B",
        "text": "(1) System, (2) Process, (3) Experience"
      },
      {
        "letter": "C",
        "text": "(1) Process, (2) System, (3) Experience"
      },
      {
        "letter": "D",
        "text": "(1) System, (2) Experience, (3) Process"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. API layers can be identified from three characteristics: who owns the API, what it focuses on, and how often it changes. Central IT owning a stable API over one system indicates a System API; a business owner applying cross-system rules indicates a Process API; and an app team iterating every sprint indicates an Experience API.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A slow-changing API over the SIS owned by central IT is not an Experience API, and a sprint-by-sprint app API is not a System API."
      },
      "C": {
        "type": "Incorrect",
        "text": "Student Records fronts a single system of record and Course Enrollment spans two systems, so these are reversed."
      },
      "B": {
        "type": "Correct",
        "text": "Each API matches its layer's ownership, functional focus, and rate of change: stable backend access, cross-system business rules, and a fast-changing channel API."
      },
      "D": {
        "type": "Incorrect",
        "text": "Course enrollment applies business rules across systems and is not channel-specific, while the mobile API is clearly channel-specific."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      },
      "secondary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      }
    }
  },
  {
    "id": "q-095",
    "number": 95,
    "title": "API Layers - LoB ownership of Process APIs",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Ownership",
      "Process API"
    ],
    "prompt": "In a decentralized organization, each line of business (LoB) has its own IT team. Central IT is concerned that if the LoB teams build Process APIs, they will each re-implement access to the shared ERP and CRM systems. Which approach addresses this concern while still allowing LoB autonomy?",
    "options": [
      {
        "letter": "A",
        "text": "Only central IT may build Process APIs; LoB teams can build Experience APIs only"
      },
      {
        "letter": "B",
        "text": "LoB teams connect their Process APIs directly to the ERP and CRM databases for best performance"
      },
      {
        "letter": "C",
        "text": "Central IT publishes ERP and CRM System APIs in Exchange for LoB Process APIs to reuse"
      },
      {
        "letter": "D",
        "text": "Each LoB builds its own System APIs to the ERP and CRM so it is not dependent on central IT"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. API-led connectivity supports decentralized delivery by aligning layers with owners. Central IT exposes core systems once through System APIs published in Exchange, and LoB IT teams self-serve those assets to build Process and Experience APIs for their needs. This balances reuse and governance with the speed and autonomy of the lines of business.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Restricting LoB teams from owning their processes recreates a central bottleneck and contradicts the self-service model."
      },
      "C": {
        "type": "Correct",
        "text": "Shared System APIs owned by central IT prevent duplicated backend access, while LoB teams keep ownership of their own processes."
      },
      "B": {
        "type": "Incorrect",
        "text": "Direct database access bypasses the System layer, duplicates logic, and couples LoB processes to backend internals."
      },
      "D": {
        "type": "Incorrect",
        "text": "Multiple teams building their own System APIs to the same backend is exactly the duplication central IT wants to avoid."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Whitepaper — API-led connectivity",
        "url": "https://www.mulesoft.com/lp/whitepaper/api/api-led-connectivity"
      },
      "secondary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      }
    }
  },
  {
    "id": "q-096",
    "number": 96,
    "title": "API Layers - Stable contract over a changing backend",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Rate of Change",
      "System API"
    ],
    "prompt": "A company will migrate its billing system from an on-premises Oracle application to a SaaS billing platform over the next year. Eight Process APIs depend on billing data. What should the architect do to minimize the impact of the migration on those Process APIs?",
    "options": [
      {
        "letter": "A",
        "text": "Publish both billing systems' native data models in Exchange so Process API teams can map to either one"
      },
      {
        "letter": "B",
        "text": "Have each Process API call the Oracle and SaaS billing systems directly and switch over individually"
      },
      {
        "letter": "C",
        "text": "Create new Process APIs for the SaaS platform and ask consumers to move to them after the migration"
      },
      {
        "letter": "D",
        "text": "Expose billing through backend-independent System APIs and re-implement them during migration"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. System APIs insulate the rest of the application network from changes in systems of record. When their contracts are designed independently of a specific backend, the backend can be replaced by changing only the System API implementation, protecting the slower-changing contracts that Process APIs depend on.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Exposing native backend models couples consumers to each backend, so the migration still affects every Process API."
      },
      "B": {
        "type": "Incorrect",
        "text": "Each Process API would need code changes and coordinated testing, multiplying migration effort and risk."
      },
      "C": {
        "type": "Incorrect",
        "text": "Duplicating Process APIs pushes the migration burden onto every consumer."
      },
      "D": {
        "type": "Correct",
        "text": "A stable System API contract absorbs backend changes, so the dependent Process APIs do not need to change when the system of record is replaced."
      }
    },
    "references": {
      "primary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      },
      "secondary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      }
    }
  },
  {
    "id": "q-097",
    "number": 97,
    "title": "API Layers - No EDM and limited capacity",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "System API",
      "API Data Model"
    ],
    "prompt": "An organization has no Enterprise Data Model and a small integration team that cannot afford to design clean Bounded Context Data Models for every backend. It is building System APIs for a legacy order management system whose data model is reasonable but uses cryptic column names and a proprietary XML format. What is the most appropriate approach for the System APIs' data model?",
    "options": [
      {
        "letter": "A",
        "text": "Mirror the backend's model and semantics, but in JSON with readable names and only needed fields"
      },
      {
        "letter": "B",
        "text": "Expose the backend's proprietary XML and column names unchanged so the API requires no transformation at all"
      },
      {
        "letter": "C",
        "text": "Let each consuming Process API define its own data model for the System API"
      },
      {
        "letter": "D",
        "text": "Pause the project until the team defines a complete Enterprise Data Model for the organization"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. MuleSoft's guidance for System API data models depends on the organization. If an Enterprise Data Model exists, System APIs use its types. Otherwise each System API can use the Bounded Context Data Model of its context. If neither is practical, the System API can use data types that closely mirror the backend system's model, while still abstracting technical details such as proprietary formats and naming so consumers are not tied to the backend's idiosyncrasies.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "Leaking proprietary formats and cryptic names to every consumer couples them to the backend and makes the API hard to use."
      },
      "A": {
        "type": "Correct",
        "text": "When neither an EDM nor clean Bounded Context models are practical, mirroring the backend while removing technical idiosyncrasies keeps translation effort low and still hides proprietary formats."
      },
      "C": {
        "type": "Incorrect",
        "text": "A System API needs a single contract; consumer-defined models would produce many inconsistent versions of the same API."
      },
      "D": {
        "type": "Incorrect",
        "text": "Waiting for an organization-wide EDM delays delivery and is unrealistic for a small team."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      },
      "secondary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      }
    }
  },
  {
    "id": "q-098",
    "number": 98,
    "title": "API Layers - EDM already in place",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "System API",
      "Enterprise Data Model"
    ],
    "prompt": "A utility company has a mature, centrally governed Enterprise Data Model that is used across all its integrations. It is now building System APIs in front of its asset-management and work-order systems. What should the architect recommend for the System APIs' data model?",
    "options": [
      {
        "letter": "A",
        "text": "Create a separate Bounded Context Data Model for each System API, deliberately different from the EDM"
      },
      {
        "letter": "B",
        "text": "Use the EDM's data types in the System API contracts and translate to each backend's native model in the implementations"
      },
      {
        "letter": "C",
        "text": "Expose each backend's native data model so that the System APIs remain thin pass-through layers"
      },
      {
        "letter": "D",
        "text": "Use the EDM only in the Experience APIs, because System APIs should not perform any translation"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. When an organization already governs an Enterprise Data Model, its System APIs should use the EDM's data types and let the implementation translate between those types and the backend's native model, so all consumers share consistent, backend-independent definitions. Duplicating definitions alongside a working EDM (A) fragments the model, exposing the native model (C) forces every consumer to translate, and restricting the EDM to the Experience tier (D) misplaces the translation.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "System APIs adopt the EDM's types and translate to the backend, keeping consumers backend-independent."
      },
      "A": {
        "type": "Incorrect",
        "text": "Duplicating definitions alongside a working EDM fragments the data model without benefit."
      },
      "C": {
        "type": "Incorrect",
        "text": "Exposing the native model makes every consumer responsible for translation."
      },
      "D": {
        "type": "Incorrect",
        "text": "Translation between the backend model and a shared model belongs in the System API."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      },
      "secondary": {
        "title": "MuleSoft Whitepaper — API-led connectivity",
        "url": "https://www.mulesoft.com/lp/whitepaper/api/api-led-connectivity"
      }
    }
  },
  {
    "id": "q-099",
    "number": 99,
    "title": "API Layers - Bounded context for a System API",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "System API",
      "Bounded Context Data Model"
    ],
    "prompt": "A company with no Enterprise Data Model wants its System APIs to be backend-independent so that systems can be replaced in the future. It has identified business domains such as Customer, Order, and Product. How should the data model of each System API be defined?",
    "options": [
      {
        "letter": "A",
        "text": "Mirror the native model of each backend exactly so that the translation effort is zero"
      },
      {
        "letter": "B",
        "text": "Use generic key-value maps in every System API so that any field can be added without changing the contract"
      },
      {
        "letter": "C",
        "text": "Assign each System API to a bounded context and use that context's data model"
      },
      {
        "letter": "D",
        "text": "Define one data model per consuming application so every consumer receives exactly what it needs"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Without an Enterprise Data Model, each System API can be assigned to a bounded context and use that context's data model. Those types are defined by their business characteristics rather than by the backend's native model, which keeps the API stable if the backend changes, although the translation effort in the implementation can be significant.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Mirroring the backend makes consumers dependent on it, which defeats the goal of replacing systems later."
      },
      "B": {
        "type": "Incorrect",
        "text": "Untyped payloads remove the contract's value and push data interpretation onto every consumer."
      },
      "D": {
        "type": "Incorrect",
        "text": "Consumer-specific models belong in the Experience layer, not in System APIs."
      },
      "C": {
        "type": "Correct",
        "text": "Defining types in business terms per bounded context keeps System APIs independent of a specific backend, at the cost of more translation effort."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      },
      "secondary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      }
    }
  },
  {
    "id": "q-100",
    "number": 100,
    "title": "API Layers - Hiding backend complexity",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "System API",
      "Abstraction"
    ],
    "prompt": "A System API fronts a SAP ECC system. The first draft exposes fields such as KUNNR, VKORG, and BUKRS and requires callers to understand SAP document types. Several Process API teams with no SAP knowledge will consume it. What should the architect recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Let each Process API team transform the SAP fields into its own names as needed"
      },
      {
        "letter": "B",
        "text": "Keep the SAP field names and publish a mapping spreadsheet in Exchange for the consuming teams"
      },
      {
        "letter": "C",
        "text": "Replace the System API with direct RFC calls from each Process API so they get full SAP functionality"
      },
      {
        "letter": "D",
        "text": "Expose business-meaningful names and map them to SAP structures in the implementation"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. A key purpose of System APIs is to hide the complexity of systems of record from their consumers. Exposing understandable, business-oriented data types and handling the mapping to backend-specific structures inside the System API implementation makes the API reusable by teams without backend expertise and reduces the ripple effect of backend changes.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Abstracting SAP-specific complexity lets non-SAP teams consume the API and limits the impact of SAP changes."
      },
      "A": {
        "type": "Incorrect",
        "text": "The same mapping would be duplicated across many Process APIs, creating inconsistency and maintenance cost."
      },
      "B": {
        "type": "Incorrect",
        "text": "Every consumer would still have to understand and code against SAP-specific semantics."
      },
      "C": {
        "type": "Incorrect",
        "text": "Direct backend access removes the abstraction layer and couples all Process APIs to SAP."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      },
      "secondary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      }
    }
  },
  {
    "id": "q-101",
    "number": 101,
    "title": "API Layers - How many System APIs per backend?",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "System API",
      "Granularity"
    ],
    "prompt": "A large ERP system manages customers, products, orders, invoices, and inventory. A team proposes a single ERP System API with more than 200 operations covering everything in the ERP. What should the architect recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Define several System APIs at business-meaningful granularity, such as Customers and Orders"
      },
      {
        "letter": "B",
        "text": "Keep a single ERP System API so that consumers only need one contract and one set of credentials"
      },
      {
        "letter": "C",
        "text": "Avoid System APIs for the ERP and let Process APIs use the ERP connector directly"
      },
      {
        "letter": "D",
        "text": "Create one System API per ERP database table so that each API stays very small"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. System APIs, like all APIs, should be defined at a granularity that makes business sense and follows the single responsibility principle. A non-trivial backend system is therefore usually fronted by several System APIs, each focused on a coherent set of business entities, rather than by a single monolithic API or by table-level APIs.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "A huge API is hard to understand, version, and govern, and every change risks affecting all consumers."
      },
      "C": {
        "type": "Incorrect",
        "text": "Skipping the System layer duplicates backend access logic in every Process API."
      },
      "A": {
        "type": "Correct",
        "text": "System APIs should follow the single responsibility principle, so a non-trivial backend is typically fronted by more than one System API."
      },
      "D": {
        "type": "Incorrect",
        "text": "Table-level APIs expose the backend's internal structure rather than business capabilities."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      },
      "secondary": {
        "title": "MuleSoft Whitepaper — API-led connectivity",
        "url": "https://www.mulesoft.com/lp/whitepaper/api/api-led-connectivity"
      }
    }
  },
  {
    "id": "q-102",
    "number": 102,
    "title": "API Layers - Backend replacement planned",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "System API",
      "API Data Model"
    ],
    "prompt": "An airline knows it will replace its reservation system within two years. It must build System APIs now, and it has no Enterprise Data Model. The architect wants to minimize future changes for consumers, even if that means more upfront work. Which data-model approach best meets this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Wait to build System APIs until the new reservation system has been selected"
      },
      {
        "letter": "B",
        "text": "Base the System APIs on a business-defined bounded context data model"
      },
      {
        "letter": "C",
        "text": "Expose the reservation system's native SOAP interface through a proxy without changes"
      },
      {
        "letter": "D",
        "text": "Mirror the current reservation system's data model because it is the fastest to implement"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Mirroring a backend's data model in a System API minimizes translation effort but ties consumers to that backend. When a backend replacement is expected and no EDM exists, defining the System API's data model in terms of a bounded context's business concepts requires more translation now, but allows the backend to be swapped later without changing the contract consumers depend on.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "A business-defined model is independent of the current backend, so replacing the system changes only the System API implementation."
      },
      "A": {
        "type": "Incorrect",
        "text": "Delaying System APIs blocks current projects and does not reduce future change."
      },
      "C": {
        "type": "Incorrect",
        "text": "A pass-through proxy leaks the backend's interface, which will disappear when the system is replaced."
      },
      "D": {
        "type": "Incorrect",
        "text": "Mirroring the current backend means its replacement would change the contract and affect all consumers."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      },
      "secondary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      }
    }
  },
  {
    "id": "q-103",
    "number": 103,
    "title": "API Layers - Translation responsibility",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "System API",
      "Data Transformation"
    ],
    "prompt": "In an API-led design, a Customer System API exposes data types from the organization's Bounded Context Data Model, while the backend CRM uses its own native model. Where should the translation between the two models be implemented?",
    "options": [
      {
        "letter": "A",
        "text": "In the CRM system itself, by changing its native data model to match the API"
      },
      {
        "letter": "B",
        "text": "In every Process API that consumes the Customer System API"
      },
      {
        "letter": "C",
        "text": "In the Customer System API's implementation"
      },
      {
        "letter": "D",
        "text": "In an API policy applied to the Customer System API in API Manager"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. The System API defines a contract in terms of the chosen API data model, and its implementation translates between those data types and the native data model of the backend system. This keeps the translation in one place and shields every consumer from the backend's model.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Changing the system of record to fit an API is costly and usually impossible for packaged or SaaS systems."
      },
      "C": {
        "type": "Correct",
        "text": "The System API implementation owns the mapping between its API data model and the backend system's native model."
      },
      "B": {
        "type": "Incorrect",
        "text": "Consumers would each repeat the same mapping, which is exactly what the System API is meant to avoid."
      },
      "D": {
        "type": "Incorrect",
        "text": "API policies address cross-cutting concerns such as security and QoS, not domain data mapping."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      },
      "secondary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      }
    }
  },
  {
    "id": "q-104",
    "number": 104,
    "title": "API Layers - Large federated enterprise",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Enterprise Data Model",
      "Bounded Context Data Model"
    ],
    "prompt": "A conglomerate has eight largely independent business units, each with its own systems and definitions of 'customer'. Previous attempts to agree on a company-wide data dictionary stalled for years. The company now wants to build APIs quickly across business units. Which data-model strategy should the architect recommend?",
    "options": [
      {
        "letter": "A",
        "text": "An Enterprise Data Model that every API must use, defined before any API is built"
      },
      {
        "letter": "B",
        "text": "A single canonical model owned by the largest business unit that other units must adopt"
      },
      {
        "letter": "C",
        "text": "No data model at all; each API implementation should pass backend payloads through unchanged"
      },
      {
        "letter": "D",
        "text": "Bounded Context Data Models aligned with each domain, with mappings between contexts"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. An Enterprise Data Model gives one canonical definition of each data type but requires mature, centralized governance and organization-wide agreement. In large or federated organizations where that agreement is impractical, Bounded Context Data Models are generally more successful: each context defines its own model, and APIs translate between contexts where they interact.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "An EDM requires strong central agreement that this organization has repeatedly failed to reach, so it would block delivery."
      },
      "B": {
        "type": "Incorrect",
        "text": "Imposing one unit's model on independent units recreates the EDM problem without broad agreement."
      },
      "C": {
        "type": "Incorrect",
        "text": "Passing backend payloads through couples consumers to every backend and makes APIs hard to reuse."
      },
      "D": {
        "type": "Correct",
        "text": "Bounded contexts let each domain move independently and avoid the coordination cost that stalled the company-wide model."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      },
      "secondary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      }
    }
  },
  {
    "id": "q-105",
    "number": 105,
    "title": "API Layers - Small centralized organization",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Enterprise Data Model",
      "Data Model"
    ],
    "prompt": "A mid-sized insurer has a single central IT department, a well-maintained Enterprise Data Model that is already used in its data warehouse and ESB, and strong data governance. It is starting its API program. Which approach is most appropriate for API data models?",
    "options": [
      {
        "letter": "A",
        "text": "Reuse the existing Enterprise Data Model for the API data models"
      },
      {
        "letter": "B",
        "text": "Replace the Enterprise Data Model with Bounded Context Data Models because APIs must always use bounded contexts"
      },
      {
        "letter": "C",
        "text": "Use the native model of each backend system in all APIs"
      },
      {
        "letter": "D",
        "text": "Let each API team define its own data model to maximize autonomy"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Choosing between an Enterprise Data Model and Bounded Context Data Models depends on the organization. If an organization already has a functioning EDM with strong central governance, using it for API data models is a sound choice. Bounded Context Data Models are preferable where such agreement does not exist or would be too costly to achieve.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "Bounded contexts are not mandatory; discarding a working, governed EDM adds effort without benefit."
      },
      "A": {
        "type": "Correct",
        "text": "With an EDM already established and governed by a central team, adopting it for APIs gives consistency at little extra cost."
      },
      "C": {
        "type": "Incorrect",
        "text": "Native models leak backend details and ignore the EDM the organization has invested in."
      },
      "D": {
        "type": "Incorrect",
        "text": "Independent per-team models would fragment definitions that the organization already agreed on."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      },
      "secondary": {
        "title": "MuleSoft Whitepaper — API-led connectivity",
        "url": "https://www.mulesoft.com/lp/whitepaper/api/api-led-connectivity"
      }
    }
  },
  {
    "id": "q-106",
    "number": 106,
    "title": "API Layers - Meaning of the same term",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Bounded Context Data Model",
      "Domain-Driven Design"
    ],
    "prompt": "A hospital's billing department defines a 'patient' with insurance and payment details, while its clinical department defines a 'patient' with diagnoses and care plans. The architect adopts Bounded Context Data Models. How should the two definitions be handled?",
    "options": [
      {
        "letter": "A",
        "text": "Rename one of the types so that no two contexts in the organization use the same name"
      },
      {
        "letter": "B",
        "text": "Separate Patient types per context, translated where the contexts interact"
      },
      {
        "letter": "C",
        "text": "Let the clinical definition win because clinical data is more sensitive"
      },
      {
        "letter": "D",
        "text": "Merge both definitions into one Patient type containing every billing and clinical field"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. In a Bounded Context Data Model approach, each bounded context is identified by its shared vocabulary and has its own set of data type definitions. Types in different contexts may have the same name, such as Patient, but they are separate definitions. Where contexts interact, APIs map between their models.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "In Bounded Context Data Models, each context has its own definitions, which may share names but are formally unrelated."
      },
      "A": {
        "type": "Incorrect",
        "text": "Shared names across contexts are expected; renaming does not address the different meanings."
      },
      "C": {
        "type": "Incorrect",
        "text": "Choosing one context's model for both ignores the billing context's legitimate needs."
      },
      "D": {
        "type": "Incorrect",
        "text": "A merged type is the Enterprise Data Model approach and forces both departments to coordinate on every change."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      },
      "secondary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      }
    }
  },
  {
    "id": "q-107",
    "number": 107,
    "title": "API Layers - Cost of an EDM",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Enterprise Data Model",
      "Governance"
    ],
    "prompt": "A CIO asks why the architect is hesitant to mandate a single Enterprise Data Model for all new APIs in the organization. Which reason best reflects MuleSoft's guidance?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Platform cannot publish shared data types in Exchange, so an EDM cannot be reused"
      },
      {
        "letter": "B",
        "text": "An EDM forces every API to use XML, which RAML does not support"
      },
      {
        "letter": "C",
        "text": "An EDM needs organization-wide agreement and governance, so mandating one up front can become a bottleneck"
      },
      {
        "letter": "D",
        "text": "Mule applications cannot transform data between an EDM and the native models of backend systems"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. MuleSoft guidance is that a single enterprise-wide data model requires broad agreement and ongoing governance, and that effort can stall delivery, which is why bounded-context models are often preferred. Shared types can be published as fragments (A), RAML and Mule applications are not limited to XML or unable to transform (B, D).",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "An EDM demands organization-wide agreement and governance, which can become a delivery bottleneck."
      },
      "A": {
        "type": "Incorrect",
        "text": "Shared data types can be published to Exchange as API fragments."
      },
      "B": {
        "type": "Incorrect",
        "text": "RAML and Mule applications are not limited to XML payloads."
      },
      "D": {
        "type": "Incorrect",
        "text": "Mule applications routinely transform between an EDM and backend-native models."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      },
      "secondary": {
        "title": "MuleSoft Whitepaper — API-led connectivity",
        "url": "https://www.mulesoft.com/lp/whitepaper/api/api-led-connectivity"
      }
    }
  },
  {
    "id": "q-108",
    "number": 108,
    "title": "API Layers - When BCDM translation is required",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Bounded Context Data Model",
      "Data Transformation"
    ],
    "prompt": "An organization uses Bounded Context Data Models. Its Order Process API, which belongs to the Sales context, must call a Shipment System API that belongs to the Logistics context. What is a consequence of this design?",
    "options": [
      {
        "letter": "A",
        "text": "No mapping is needed because all bounded contexts automatically share the same data types"
      },
      {
        "letter": "B",
        "text": "Both APIs must be merged into one bounded context before they can interact"
      },
      {
        "letter": "C",
        "text": "The Shipment System API must adopt the Sales context's data model"
      },
      {
        "letter": "D",
        "text": "Sales-to-Logistics data mapping is needed where the Process API calls the System API"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. With Bounded Context Data Models, each context maintains its own formally unrelated data types. When an API in one context calls an API in another, data must be mapped between the two models. This mapping is the cost paid for allowing each context to evolve independently.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Bounded contexts are defined precisely so that they do not share data type definitions."
      },
      "B": {
        "type": "Incorrect",
        "text": "Contexts can interact through explicit mappings; merging them is not required."
      },
      "D": {
        "type": "Correct",
        "text": "Bounded contexts have independent models, so interactions across a context boundary require translation."
      },
      "C": {
        "type": "Incorrect",
        "text": "Requiring the System API to adopt the consumer's model removes the independence of the Logistics context."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      },
      "secondary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      }
    }
  },
  {
    "id": "q-109",
    "number": 109,
    "title": "API Layers - Reasons for a canonical model",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Enterprise Data Model",
      "Canonical Data Model"
    ],
    "prompt": "Why would an enterprise architect choose a single enterprise-wide canonical data model when designing integrations on Anypoint Platform?",
    "options": [
      {
        "letter": "A",
        "text": "It gives one shared definition per data type, reducing the number of point-to-point format mappings"
      },
      {
        "letter": "B",
        "text": "It allows each line of business to define its own version of each shared entity"
      },
      {
        "letter": "C",
        "text": "It removes the need for any data transformation in Mule applications"
      },
      {
        "letter": "D",
        "text": "It shields APIs from every non-backward-compatible change to the canonical model"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. A single canonical model gives one agreed definition per data type, so integrations map to and from the canonical form instead of pairwise between every system, reducing point-to-point mappings. Allowing each line of business its own version (B) is the opposite of a canonical model, and it neither eliminates transformation (C) nor prevents breaking changes to the model (D).",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "A single canonical definition reduces the pairwise mappings between systems."
      },
      "B": {
        "type": "Incorrect",
        "text": "A canonical model centralizes definitions; per-line-of-business versions defeat that purpose."
      },
      "C": {
        "type": "Incorrect",
        "text": "Integrations still transform between the canonical model and each system's format."
      },
      "D": {
        "type": "Incorrect",
        "text": "The canonical model itself still changes and can require migration work."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      },
      "secondary": {
        "title": "MuleSoft Whitepaper — API-led connectivity",
        "url": "https://www.mulesoft.com/lp/whitepaper/api/api-led-connectivity"
      }
    }
  },
  {
    "id": "q-110",
    "number": 110,
    "title": "API Layers - Starting point for a new API program",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Bounded Context Data Model",
      "Data Model"
    ],
    "prompt": "A retail company is launching its first API-led program. There is no existing Enterprise Data Model, teams are organized by business domain (Stores, E-commerce, Supply Chain), and leadership wants fast delivery by domain teams. Which data-model approach is the best starting point?",
    "options": [
      {
        "letter": "A",
        "text": "Spend the first year defining an Enterprise Data Model before any APIs are built"
      },
      {
        "letter": "B",
        "text": "Define Bounded Context Data Models aligned with the business domains and map between them where they interact"
      },
      {
        "letter": "C",
        "text": "Let each API define its own data model and never share data types between APIs"
      },
      {
        "letter": "D",
        "text": "Adopt the e-commerce platform's native model as the company-wide standard"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. With no existing EDM and teams organized by business domain, domain-aligned bounded-context models let each team deliver independently, sharing types within its context and mapping where contexts interact. A year-long EDM effort (A) conflicts with fast delivery, per-API models with no sharing (C) give up reuse within a domain, and elevating one system's model (D) couples every domain to that system.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Domain-aligned bounded contexts let each team deliver independently without waiting for an enterprise-wide agreement."
      },
      "A": {
        "type": "Incorrect",
        "text": "A year-long EDM effort conflicts with the requirement for fast delivery by domain teams."
      },
      "C": {
        "type": "Incorrect",
        "text": "A separate model per API gives up reuse of shared types within a domain."
      },
      "D": {
        "type": "Incorrect",
        "text": "Promoting one system's model to an enterprise standard couples all domains to that system."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Using APIs to build a great architecture",
        "url": "https://blogs.mulesoft.com/learn-apis/api-led-connectivity/apis-great-architecture/"
      },
      "secondary": {
        "title": "Salesforce Blog — What Is API-Led Connectivity?",
        "url": "https://www.salesforce.com/blog/api-led-connectivity/"
      }
    }
  },
  {
    "id": "q-111",
    "number": 111,
    "title": "API Layers - Flexible queries for new apps",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Anypoint DataGraph",
      "GraphQL"
    ],
    "prompt": "An organization has well-designed Order, Shipment, and Product REST APIs published in Exchange. Several new app teams each need different combinations of fields from these APIs, and the integration team cannot keep building a new Experience API for every request. Which approach best meets this need?",
    "options": [
      {
        "letter": "A",
        "text": "Expose the backend databases directly to the app teams through a JDBC proxy"
      },
      {
        "letter": "B",
        "text": "Publish the RAML specifications in a public portal and let apps call each REST API separately"
      },
      {
        "letter": "C",
        "text": "Add the APIs to Anypoint DataGraph so teams query only the fields they need"
      },
      {
        "letter": "D",
        "text": "Create a new Process API for each combination of fields requested by an app team"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Anypoint DataGraph connects the schemas of existing APIs into a unified schema served as a single GraphQL endpoint. Consumers can discover what data is available and request exactly the subset they need in a single query, so the organization does not have to build a new API for every new combination of data.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Direct database access bypasses the APIs, their policies, and their business logic."
      },
      "B": {
        "type": "Incorrect",
        "text": "Apps would need multiple round trips and their own join logic for every combination of data."
      },
      "D": {
        "type": "Incorrect",
        "text": "This is the approach the team wants to avoid, as it creates a growing number of near-duplicate APIs."
      },
      "C": {
        "type": "Correct",
        "text": "DataGraph combines existing API schemas into one GraphQL endpoint so consumers can retrieve related data without new APIs being built."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint DataGraph Overview",
        "url": "https://docs.mulesoft.com/datagraph/"
      },
      "secondary": {
        "title": "Anypoint DataGraph — Querying the Unified Schema",
        "url": "https://docs.mulesoft.com/datagraph/query-unified-schema"
      }
    }
  },
  {
    "id": "q-112",
    "number": 112,
    "title": "API Layers - DataGraph is not a replacement for System APIs",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Anypoint DataGraph",
      "System API"
    ],
    "prompt": "A team proposes using Anypoint DataGraph instead of building System APIs, by connecting DataGraph directly to the company's SAP and Oracle databases. What should the architect point out?",
    "options": [
      {
        "letter": "A",
        "text": "DataGraph should be deployed inside each System API to expose its data as GraphQL"
      },
      {
        "letter": "B",
        "text": "DataGraph is a message broker and should replace Anypoint MQ rather than System APIs"
      },
      {
        "letter": "C",
        "text": "DataGraph can connect to SAP and Oracle directly, so the System APIs are redundant"
      },
      {
        "letter": "D",
        "text": "DataGraph builds on existing REST APIs, so the System APIs are still needed"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Anypoint DataGraph supports REST APIs described with RAML or OAS specifications and combines them into a unified schema. It sits on top of the application network, typically consuming System and Process APIs; it does not connect to backend systems directly and does not remove the need for APIs that unlock those systems.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "DataGraph is a separate managed service that runs a single GraphQL endpoint for the unified schema."
      },
      "B": {
        "type": "Incorrect",
        "text": "DataGraph is a GraphQL query layer, not a message broker."
      },
      "D": {
        "type": "Correct",
        "text": "DataGraph consumes REST APIs with RAML or OAS specifications; it does not replace the APIs that unlock backend systems."
      },
      "C": {
        "type": "Incorrect",
        "text": "DataGraph sources are REST APIs, not databases or ERP systems."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint DataGraph Overview",
        "url": "https://docs.mulesoft.com/datagraph/"
      },
      "secondary": {
        "title": "Anypoint DataGraph — Adding an API to the Unified Schema",
        "url": "https://docs.mulesoft.com/datagraph/add-api-to-unified-schema"
      }
    }
  },
  {
    "id": "q-113",
    "number": 113,
    "title": "API Layers - Unsuitable role for DataGraph",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Anypoint DataGraph",
      "Suitability"
    ],
    "prompt": "Which requirement is least suitable for Anypoint DataGraph?",
    "options": [
      {
        "letter": "A",
        "text": "Transferring nightly bulk extracts of millions of records from an ERP to a data warehouse"
      },
      {
        "letter": "B",
        "text": "Letting a mobile app retrieve a customer's orders, shipments, and products in one request"
      },
      {
        "letter": "C",
        "text": "Allowing consumers to discover all data available across several APIs from one schema"
      },
      {
        "letter": "D",
        "text": "Reducing the need to build new APIs for each new combination of existing data"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. DataGraph is designed for consumers that need to query and combine data from existing APIs through a single GraphQL endpoint, with query limits such as a timeout per query. Large-volume batch data transfer is outside this role and is better handled by batch integration patterns in Mule applications.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "Retrieving related data from several existing APIs in one query is a core DataGraph use case."
      },
      "A": {
        "type": "Correct",
        "text": "Bulk batch data movement is not a GraphQL query use case and fits batch integration patterns instead."
      },
      "C": {
        "type": "Incorrect",
        "text": "The unified schema is designed to let consumers see all available data in one place."
      },
      "D": {
        "type": "Incorrect",
        "text": "Serving new combinations of data from existing APIs without new code is a stated DataGraph benefit."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint DataGraph Overview",
        "url": "https://docs.mulesoft.com/datagraph/"
      },
      "secondary": {
        "title": "Anypoint DataGraph — Querying the Unified Schema",
        "url": "https://docs.mulesoft.com/datagraph/query-unified-schema"
      }
    }
  },
  {
    "id": "q-114",
    "number": 114,
    "title": "API Layers - Securing DataGraph",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Anypoint DataGraph",
      "API Manager"
    ],
    "prompt": "An organization exposes a DataGraph unified schema to several client applications. The security team requires that only registered clients can query it and that heavy users can be throttled. How is this achieved?",
    "options": [
      {
        "letter": "A",
        "text": "Configure security only on each underlying REST API, because DataGraph cannot have its own policies"
      },
      {
        "letter": "B",
        "text": "Manage DataGraph in API Manager with policies, client application contracts, and SLA tiers"
      },
      {
        "letter": "C",
        "text": "Embed client credentials in the GraphQL queries and validate them in each System API"
      },
      {
        "letter": "D",
        "text": "Restrict access with a firewall rule in the customer data center in front of the graph endpoint"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. A DataGraph is exposed as a managed API instance, so API Manager applies policies, client contracts, and SLA tiers to it just like any other API. DataGraph can have its own policies (A), embedding credentials in queries (C) is insecure and unmanaged, and a network rule (D) neither registers clients nor throttles heavy users.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "DataGraph is managed in API Manager, so policies, contracts, and SLA tiers apply to it."
      },
      "A": {
        "type": "Incorrect",
        "text": "A DataGraph is a managed API instance and can have its own policies."
      },
      "C": {
        "type": "Incorrect",
        "text": "Embedding credentials in queries is insecure and bypasses central governance."
      },
      "D": {
        "type": "Incorrect",
        "text": "A firewall rule does not register clients or throttle usage per consumer."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint DataGraph Overview",
        "url": "https://docs.mulesoft.com/datagraph/"
      },
      "secondary": {
        "title": "Anypoint DataGraph — Security",
        "url": "https://docs.mulesoft.com/datagraph/security"
      }
    }
  },
  {
    "id": "q-115",
    "number": 115,
    "title": "API Layers - Linking types",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Anypoint DataGraph",
      "Unified Schema"
    ],
    "prompt": "In Anypoint DataGraph, an Order type from the Order API contains a productId, and the Product API exposes a Product type. Consumers want to retrieve product details as part of an order in a single query. Which DataGraph capability supports this?",
    "options": [
      {
        "letter": "A",
        "text": "Merging the Order and Product types into one type"
      },
      {
        "letter": "B",
        "text": "Creating an Anypoint MQ exchange that joins order and product messages"
      },
      {
        "letter": "C",
        "text": "Merge the two Customer types into one type"
      },
      {
        "letter": "D",
        "text": "Publishing a new combined Order-Product REST API in Exchange"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. DataGraph provides functionality to link object types, creating connections between types from different APIs, and to merge similar types into a single type. Linking an Order to a Product by productId lets consumers request order and product data together in one GraphQL query.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Merging combines similar types that represent the same entity; orders and products are different entities."
      },
      "B": {
        "type": "Incorrect",
        "text": "Anypoint MQ is for asynchronous messaging and does not support query-time joins."
      },
      "C": {
        "type": "Correct",
        "text": "Linking creates connections between object types from different APIs so a single query can follow the relationship."
      },
      "D": {
        "type": "Incorrect",
        "text": "Building a new API is what DataGraph is meant to avoid for this kind of requirement."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint DataGraph — Linking Types",
        "url": "https://docs.mulesoft.com/datagraph/linking"
      },
      "secondary": {
        "title": "Anypoint DataGraph Overview",
        "url": "https://docs.mulesoft.com/datagraph/"
      }
    }
  },
  {
    "id": "q-116",
    "number": 116,
    "title": "API Layers - Merging duplicate types",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Anypoint DataGraph",
      "Unified Schema"
    ],
    "prompt": "Two APIs added to Anypoint DataGraph both define a Customer type: one from the CRM API with contact details and one from the Billing API with account balances. Consumers want a single Customer type that exposes both sets of fields. Which DataGraph capability should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Link the two Customer types so consumers query them separately"
      },
      {
        "letter": "B",
        "text": "Remove one of the APIs from the unified schema"
      },
      {
        "letter": "C",
        "text": "Rewrite both APIs so they return identical Customer payloads"
      },
      {
        "letter": "D",
        "text": "Linking the Order type to the Product type"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. DataGraph lets you merge object types to combine similar types into a single type, extending its fields and datasets. Merging the CRM and Billing Customer types yields one Customer type in the unified schema that exposes both contact and balance information.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Merging combines similar types into one, extending their fields for a richer query result."
      },
      "A": {
        "type": "Incorrect",
        "text": "Linking connects different types; it would not present a single Customer type with both sets of fields."
      },
      "B": {
        "type": "Incorrect",
        "text": "Removing an API would lose the fields that consumers need."
      },
      "C": {
        "type": "Incorrect",
        "text": "DataGraph is intended to combine existing APIs without rewriting them."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint DataGraph — Merging Types",
        "url": "https://docs.mulesoft.com/datagraph/merge-types"
      },
      "secondary": {
        "title": "Anypoint DataGraph Overview",
        "url": "https://docs.mulesoft.com/datagraph/"
      }
    }
  },
  {
    "id": "q-117",
    "number": 117,
    "title": "API Layers - Where DataGraph fits in the application network",
    "domain": "Designing APIs using System, Process, and Experience Layers",
    "topics": [
      "Anypoint DataGraph",
      "API-led Connectivity"
    ],
    "prompt": "An architect is positioning Anypoint DataGraph in an existing API-led application network with mature System and Process APIs. Which two statements describe a suitable role for DataGraph? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "It can serve consumers that need flexible, consumer-driven queries over data that existing APIs already expose"
      },
      {
        "letter": "B",
        "text": "It can replace the System APIs by connecting directly to the databases and ERPs behind them"
      },
      {
        "letter": "C",
        "text": "It can provide guaranteed, exactly-once message delivery between Process APIs"
      },
      {
        "letter": "D",
        "text": "It removes the need to manage API access, because GraphQL endpoints cannot be secured by policies"
      },
      {
        "letter": "E",
        "text": "It reduces the number of new APIs that must be built when consumers need new combinations of existing data"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Correct answers: A and E. DataGraph builds a unified GraphQL schema over data that existing APIs already expose, so consumers can issue flexible queries and teams need fewer new APIs for each new combination of data. It does not replace System APIs by reaching into backends directly (B), it does not provide guaranteed messaging (C), and a DataGraph is a managed API instance that is secured with policies (D).",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "DataGraph serves consumer-driven queries over data that existing APIs already expose."
      },
      "B": {
        "type": "Incorrect",
        "text": "DataGraph builds on existing APIs; it does not connect to backends directly or replace System APIs."
      },
      "C": {
        "type": "Incorrect",
        "text": "DataGraph is a query layer, not a guaranteed messaging service."
      },
      "D": {
        "type": "Incorrect",
        "text": "A DataGraph is a managed API instance and can be secured with policies."
      },
      "E": {
        "type": "Correct",
        "text": "It reduces the number of new APIs needed for new combinations of existing data."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint DataGraph Overview",
        "url": "https://docs.mulesoft.com/datagraph/"
      },
      "secondary": {
        "title": "Anypoint DataGraph — Querying the Unified Schema",
        "url": "https://docs.mulesoft.com/datagraph/query-unified-schema"
      }
    }
  },
  {
    "id": "q-118",
    "number": 118,
    "title": "API Governance - Separate instances per environment",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "API Instances",
      "Environments"
    ],
    "prompt": "A team promotes its Order API from development to QA to production. Each stage has different backend URLs, policies, and client applications. How should the API be managed in API Manager?",
    "options": [
      {
        "letter": "A",
        "text": "Skip API Manager in non-production and use it only in production"
      },
      {
        "letter": "B",
        "text": "Create a separate API instance in each environment"
      },
      {
        "letter": "C",
        "text": "Create one API instance per client application in production only"
      },
      {
        "letter": "D",
        "text": "Create one API instance and change its configuration at each promotion"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Environments in Anypoint Platform isolate applications and API configurations. Creating an API instance per environment lets each stage have its own implementation URL, policies, SLA tiers, and client contracts, so changes can be tested before they reach production.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Policies and contracts should be validated before reaching production."
      },
      "B": {
        "type": "Correct",
        "text": "Each environment's instance holds its own configuration, policies, and contracts."
      },
      "C": {
        "type": "Incorrect",
        "text": "Instances are not per client; contracts link clients to an instance."
      },
      "D": {
        "type": "Incorrect",
        "text": "One shared instance would mix stages and break the earlier environments when it changes."
      }
    },
    "references": {
      "primary": {
        "title": "Access Management — Environments",
        "url": "https://docs.mulesoft.com/access-management/environments"
      },
      "secondary": {
        "title": "API Manager — Creating an API Instance",
        "url": "https://docs.mulesoft.com/api-manager/latest/create-instance-task"
      }
    }
  },
  {
    "id": "q-119",
    "number": 119,
    "title": "API Governance - Two consumer groups, one API version",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "API Instances",
      "Policies"
    ],
    "prompt": "An Inventory API v1 is used by internal apps, which need only client ID enforcement, and by external partners, who need OAuth 2.0, stricter rate limits, and a different endpoint. What is the best way to manage this in API Manager?",
    "options": [
      {
        "letter": "A",
        "text": "Apply both policy sets to the single instance and let each client choose which policies to enforce"
      },
      {
        "letter": "B",
        "text": "Publish a second major version of the API and give it to the partners while internal apps keep v1"
      },
      {
        "letter": "C",
        "text": "Create two API instances of v1, one for internal apps and one for partners, each with its own policies and endpoint"
      },
      {
        "letter": "D",
        "text": "Expose the underlying System API directly to the partners so it can carry stricter policies"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. A single specification can back multiple API instances, so the team creates one v1 instance for internal apps and another v1 instance for partners, each with its own policies and endpoint. Applying both policy sets to one instance (A) cannot differentiate consumers reliably, a new major version (B) is unnecessary because the contract is unchanged, and exposing the System API (D) breaks layering.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Separate instances of the same version let each consumer group have its own policies and endpoint."
      },
      "A": {
        "type": "Incorrect",
        "text": "Policies on a single instance apply to all callers; clients cannot select which are enforced."
      },
      "B": {
        "type": "Incorrect",
        "text": "The contract is unchanged, so a new major version is unnecessary."
      },
      "D": {
        "type": "Incorrect",
        "text": "Exposing the System API to partners breaks the intended layering."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Managing Versions and Instances",
        "url": "https://docs.mulesoft.com/api-manager/latest/manage-versions-instances-concept"
      },
      "secondary": {
        "title": "API Manager — API Instances",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-instance-landing-page"
      }
    }
  },
  {
    "id": "q-120",
    "number": 120,
    "title": "API Governance - Sensitive data and environment access",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Environments",
      "Access Management"
    ],
    "prompt": "A Payroll System API exposes highly sensitive salary data. The security team wants to ensure that only a small operations group can change its production policies, while developers keep full control in sandbox. What should the architect recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Put the production instance in a Design environment"
      },
      {
        "letter": "B",
        "text": "Deploy the production API without an API instance so no one can change policies"
      },
      {
        "letter": "C",
        "text": "Give all developers production access but ask them not to change policies"
      },
      {
        "letter": "D",
        "text": "Grant production API Manager rights to the ops group only"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Access Management lets permissions be granted per environment and business group. Restricting production API Manager permissions to an operations team while developers manage sandbox enforces separation of duties for sensitive APIs and systems.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Design environments are for design-time work, not production governance."
      },
      "B": {
        "type": "Incorrect",
        "text": "Unmanaged APIs lose governance entirely."
      },
      "C": {
        "type": "Incorrect",
        "text": "Relying on goodwill does not enforce separation of duties."
      },
      "D": {
        "type": "Correct",
        "text": "Environment-level permissions let access differ between sandbox and production."
      }
    },
    "references": {
      "primary": {
        "title": "Access Management — Environments",
        "url": "https://docs.mulesoft.com/access-management/environments"
      },
      "secondary": {
        "title": "Access Management — Business Groups",
        "url": "https://docs.mulesoft.com/access-management/business-groups"
      }
    }
  },
  {
    "id": "q-121",
    "number": 121,
    "title": "API Governance - Business groups for separate divisions",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Business Groups",
      "Governance"
    ],
    "prompt": "Two divisions of a company must manage their own APIs, environments, and users independently, while the parent organization retains overall visibility. How should Anypoint Platform be organized?",
    "options": [
      {
        "letter": "A",
        "text": "A business group per division under the root org"
      },
      {
        "letter": "B",
        "text": "Create separate Anypoint Platform organizations with no relationship"
      },
      {
        "letter": "C",
        "text": "Tag each API with the division name in Exchange"
      },
      {
        "letter": "D",
        "text": "Use one environment per division in the root organization only"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Business groups are child organizations within the root organization. They let divisions manage their own environments, APIs, and users with delegated administrators, while the root organization keeps overall governance.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Business groups delegate administration of their own environments and assets."
      },
      "B": {
        "type": "Incorrect",
        "text": "Unrelated organizations remove the parent's visibility and sharing."
      },
      "C": {
        "type": "Incorrect",
        "text": "Tags help discovery but do not separate administration."
      },
      "D": {
        "type": "Incorrect",
        "text": "Environments do not delegate user administration as business groups do."
      }
    },
    "references": {
      "primary": {
        "title": "Access Management — Business Groups",
        "url": "https://docs.mulesoft.com/access-management/business-groups"
      },
      "secondary": {
        "title": "Access Management — Environments",
        "url": "https://docs.mulesoft.com/access-management/environments"
      }
    }
  },
  {
    "id": "q-122",
    "number": 122,
    "title": "API Governance - Choose two: API instances",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "API Instances",
      "API Manager"
    ],
    "prompt": "A team manages the same Orders API specification through Development, Staging, and Production. A new hire asks why the API appears multiple times in API Manager and how policies and client contracts are handled for each stage. Which two statements about API instances in API Manager are correct?",
    "options": [
      {
        "letter": "A",
        "text": "An API version can have only one instance across the organization"
      },
      {
        "letter": "B",
        "text": "An API instance belongs to a specific environment"
      },
      {
        "letter": "C",
        "text": "Policies are applied to the Exchange asset, so all instances share them"
      },
      {
        "letter": "D",
        "text": "Instances are created in Runtime Manager when an app is deployed"
      },
      {
        "letter": "E",
        "text": "Client contracts are made with a specific API instance"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Correct answers: B and E. An API instance is created in API Manager in a given environment, typically from an Exchange asset version. Policies, SLA tiers, and client contracts are configured per instance, which lets different environments or consumer groups be governed separately.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "An API version can have multiple instances."
      },
      "C": {
        "type": "Incorrect",
        "text": "Policies are applied per instance."
      },
      "D": {
        "type": "Incorrect",
        "text": "Instances are created in API Manager, typically from Exchange assets."
      },
      "B": {
        "type": "Correct",
        "text": "Instances are created and managed within an environment."
      },
      "E": {
        "type": "Correct",
        "text": "Access is granted per instance, so each environment's instance has its own contracts."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — API Instances",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-instance-landing-page"
      },
      "secondary": {
        "title": "API Manager — Contracts",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-contracts-landing-page"
      }
    }
  },
  {
    "id": "q-123",
    "number": 123,
    "title": "API Governance - Different quotas for different consumers",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Rate Limiting SLA",
      "SLA Tiers"
    ],
    "prompt": "A public API must allow free-tier consumers 1,000 requests per day and premium consumers 100,000 requests per day. Which policy should be applied?",
    "options": [
      {
        "letter": "A",
        "text": "Spike Control with a delay between requests"
      },
      {
        "letter": "B",
        "text": "Rate Limiting with a single limit of 100,000 per day"
      },
      {
        "letter": "C",
        "text": "Rate Limiting: SLA-Based with Free and Premium tiers"
      },
      {
        "letter": "D",
        "text": "HTTP Caching with a one-day time-to-live"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. The Rate Limiting: SLA-Based policy enforces limits defined in SLA tiers. Each client application's contract is associated with a tier, so different consumers get different quotas. Client credentials identify the application.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Spike Control smooths bursts but does not give per-tier quotas."
      },
      "C": {
        "type": "Correct",
        "text": "SLA tiers set different quotas per client application contract."
      },
      "B": {
        "type": "Incorrect",
        "text": "A single limit cannot distinguish free from premium consumers."
      },
      "D": {
        "type": "Incorrect",
        "text": "Caching does not enforce request quotas."
      }
    },
    "references": {
      "primary": {
        "title": "Rate Limiting: SLA-Based Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-rate-limiting-sla"
      },
      "secondary": {
        "title": "API Manager — Defining SLA Tiers",
        "url": "https://docs.mulesoft.com/api-manager/latest/defining-sla-tiers"
      }
    }
  },
  {
    "id": "q-124",
    "number": 124,
    "title": "API Governance - Protecting a backend with fixed capacity",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Rate Limiting",
      "Backend Protection"
    ],
    "prompt": "A System API fronts a legacy system that can handle at most 50 requests per second in total, regardless of which client sends them. Which policy best enforces this?",
    "options": [
      {
        "letter": "A",
        "text": "Rate Limiting: SLA-Based with a 50 requests per second tier"
      },
      {
        "letter": "B",
        "text": "Client ID Enforcement"
      },
      {
        "letter": "C",
        "text": "JSON Threat Protection"
      },
      {
        "letter": "D",
        "text": "Rate Limiting with a limit of 50 requests per second"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. The Rate Limiting policy enforces a limit on all requests to an API instance, which protects backends with a fixed capacity. SLA-based rate limiting applies limits per client application, so it does not cap the aggregate load.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "SLA limits apply per client contract, so many clients could exceed the total."
      },
      "B": {
        "type": "Incorrect",
        "text": "This identifies clients but does not cap throughput."
      },
      "D": {
        "type": "Correct",
        "text": "A non-SLA rate limit caps total traffic to the API instance."
      },
      "C": {
        "type": "Incorrect",
        "text": "This limits payload structure, not request rate."
      }
    },
    "references": {
      "primary": {
        "title": "Rate Limiting Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-rate-limiting"
      },
      "secondary": {
        "title": "Spike Control Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-spike-control"
      }
    }
  },
  {
    "id": "q-125",
    "number": 125,
    "title": "API Governance - Browser-based consumers",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "CORS",
      "Policies"
    ],
    "prompt": "A single-page web application served from https://shop.example.com must call an Experience API hosted at https://api.example.com. Browsers block the calls. Which policy should be applied?",
    "options": [
      {
        "letter": "A",
        "text": "Cross-Origin Resource Sharing (CORS) configured to allow the shop.example.com origin"
      },
      {
        "letter": "B",
        "text": "IP Allowlist configured with the public addresses of the shop.example.com servers"
      },
      {
        "letter": "C",
        "text": "Rate Limiting configured with a quota high enough for the browser's request volume"
      },
      {
        "letter": "D",
        "text": "HTTP Caching configured so the browser can reuse responses without new requests"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Browsers enforce the same-origin policy, so a page served from one origin cannot call an API on a different origin unless the API sends the appropriate CORS headers. An IP allowlist (B) does not satisfy the browser's origin check, and neither rate limiting (C) nor caching (D) addresses it.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "CORS allows the browser to make the cross-origin call by permitting the page's origin."
      },
      "B": {
        "type": "Incorrect",
        "text": "IP allowlisting does not satisfy the browser's same-origin policy check."
      },
      "C": {
        "type": "Incorrect",
        "text": "Rate limiting governs request volume, not cross-origin permission."
      },
      "D": {
        "type": "Incorrect",
        "text": "Caching does not grant a page permission to call another origin."
      }
    },
    "references": {
      "primary": {
        "title": "Cross-Origin Resource Sharing (CORS) Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-cors"
      },
      "secondary": {
        "title": "Included Policies Directory",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-directory"
      }
    }
  },
  {
    "id": "q-126",
    "number": 126,
    "title": "API Governance - Audit of request metadata",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Message Logging",
      "Policies"
    ],
    "prompt": "Auditors require that the client ID and resource path of every call to a Process API be logged, without changing the API implementation. Which policy should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Header Injection, configured to copy the client ID and path into the response"
      },
      {
        "letter": "B",
        "text": "Message Logging, configured to record the client ID and request path"
      },
      {
        "letter": "C",
        "text": "HTTP Basic Authentication, which records the caller's identity for each request"
      },
      {
        "letter": "D",
        "text": "Client ID Enforcement, which writes the client ID and path to the audit trail"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. The Message Logging policy records request metadata such as the client ID and resource path at the gateway without changing the implementation. Header Injection (A) adds headers rather than recording them, HTTP Basic Authentication (C) authenticates callers, and Client ID Enforcement (D) validates credentials rather than logging them.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Message Logging records request metadata like the client ID and path at the gateway."
      },
      "A": {
        "type": "Incorrect",
        "text": "Header Injection adds headers; it does not record request metadata."
      },
      "C": {
        "type": "Incorrect",
        "text": "Basic Authentication authenticates a caller; it does not log the client ID and path."
      },
      "D": {
        "type": "Incorrect",
        "text": "Client ID Enforcement validates credentials; it does not write an audit trail."
      }
    },
    "references": {
      "primary": {
        "title": "Message Logging Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-message-logging"
      },
      "secondary": {
        "title": "Included Policies Directory",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-directory"
      }
    }
  },
  {
    "id": "q-127",
    "number": 127,
    "title": "API Governance - Reducing load from repeated reads",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "HTTP Caching",
      "Performance"
    ],
    "prompt": "An API returns a product catalog that changes daily and is read thousands of times per minute with identical requests. The team wants to cut response times and backend load without touching the implementation. Which policy fits?",
    "options": [
      {
        "letter": "A",
        "text": "Rate Limiting, so the backend receives no more than a fixed number of calls per minute"
      },
      {
        "letter": "B",
        "text": "Client ID Enforcement, so each caller's identical requests are collapsed into one"
      },
      {
        "letter": "C",
        "text": "HTTP Caching, so identical requests are served from the cache instead of the backend"
      },
      {
        "letter": "D",
        "text": "JSON Threat Protection, so oversized responses are rejected before they reach the backend"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. HTTP Caching stores the response for a configurable time, so repeated identical requests are served from the gateway cache, cutting response time and backend load. Rate Limiting (A) rejects excess traffic rather than serving it, Client ID Enforcement (B) does not collapse requests, and JSON Threat Protection (D) inspects payloads rather than caching responses.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Caching serves repeated identical reads from the gateway, reducing latency and backend load."
      },
      "A": {
        "type": "Incorrect",
        "text": "Rate limiting rejects excess requests; it does not serve them from a cache."
      },
      "B": {
        "type": "Incorrect",
        "text": "Client ID Enforcement validates identity and does not deduplicate reads."
      },
      "D": {
        "type": "Incorrect",
        "text": "JSON Threat Protection inspects payloads; it does not cache responses."
      }
    },
    "references": {
      "primary": {
        "title": "HTTP Caching Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-http-caching"
      },
      "secondary": {
        "title": "Included Policies Directory",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-directory"
      }
    }
  },
  {
    "id": "q-128",
    "number": 128,
    "title": "API Governance - Choose two: NFR to policy",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Policies",
      "NFRs"
    ],
    "prompt": "An API team is translating a set of non-functional security and traffic requirements into API Manager policies. The requirements include validating OAuth tokens on each call, limiting how deeply nested JSON payloads may be, protecting the backend from sudden traffic spikes, and stripping an internal header before responses leave the gateway. Which two pairings of a non-functional requirement with an API Manager policy are correct?",
    "options": [
      {
        "letter": "A",
        "text": "Validate OAuth tokens: Message Logging"
      },
      {
        "letter": "B",
        "text": "Limit JSON nesting depth: CORS"
      },
      {
        "letter": "C",
        "text": "Enforce different per-consumer quotas: IP Allowlist"
      },
      {
        "letter": "D",
        "text": "Smooth short traffic bursts: Spike Control"
      },
      {
        "letter": "E",
        "text": "Remove an internal header before the response leaves: Header Removal"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Correct answers: D and E. Spike Control smooths short bursts by throttling to a configured rate, and Header Removal strips a header before the response leaves the gateway. Validating OAuth tokens is done by a token enforcement policy, not Message Logging (A); limiting JSON nesting depth is done by JSON Threat Protection, not CORS (B); and per-consumer quotas are enforced by SLA-based rate limiting, not an IP allowlist (C).",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Spike Control smooths short bursts by throttling to a configured rate."
      },
      "E": {
        "type": "Correct",
        "text": "Header Removal strips the specified header before the response leaves the gateway."
      },
      "A": {
        "type": "Incorrect",
        "text": "OAuth token validation is performed by a token enforcement policy, not Message Logging."
      },
      "B": {
        "type": "Incorrect",
        "text": "JSON nesting depth is limited by JSON Threat Protection, not CORS."
      },
      "C": {
        "type": "Incorrect",
        "text": "Per-consumer quotas come from SLA-based rate limiting, not an IP allowlist."
      }
    },
    "references": {
      "primary": {
        "title": "Included Policies Directory",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-directory"
      },
      "secondary": {
        "title": "API Manager — Included Policies",
        "url": "https://docs.mulesoft.com/api-manager/latest/policies-ootb-landing-page"
      }
    }
  },
  {
    "id": "q-129",
    "number": 129,
    "title": "API Governance - Client ID enforcement in the spec",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "API Specification",
      "Client ID Enforcement"
    ],
    "prompt": "Client ID Enforcement will be applied to an API using client_id and client_secret headers. What should change in the API specification?",
    "options": [
      {
        "letter": "A",
        "text": "Declare client_id and client_secret as headers on the API, for example through a reusable trait"
      },
      {
        "letter": "B",
        "text": "Add a /login resource that issues a client ID to each caller on first use"
      },
      {
        "letter": "C",
        "text": "Nothing needs to change, because the policy is invisible to API consumers"
      },
      {
        "letter": "D",
        "text": "Remove all query parameters from the API so the credentials cannot conflict with them"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. If the policy will read client_id and client_secret as headers, the contract should declare those headers so consumers know to send them; a trait keeps the declaration consistent across methods. A login resource (B) is not how client ID enforcement works, the requirement does change the contract (C), and removing query parameters (D) is unrelated.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Declaring the headers documents the credential the consumer must send, and a trait keeps it consistent."
      },
      "B": {
        "type": "Incorrect",
        "text": "Client ID enforcement does not require a token-issuing resource."
      },
      "C": {
        "type": "Incorrect",
        "text": "When credentials are read from headers, the contract must declare those headers."
      },
      "D": {
        "type": "Incorrect",
        "text": "Removing query parameters is unrelated to how the credentials are sent."
      }
    },
    "references": {
      "primary": {
        "title": "Client ID Enforcement Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-client-id-enforcement"
      },
      "secondary": {
        "title": "Design Center — Creating and Publishing API Fragments",
        "url": "https://docs.mulesoft.com/design-center/design-create-publish-api-fragment"
      }
    }
  },
  {
    "id": "q-130",
    "number": 130,
    "title": "API Governance - OAuth 2.0 in the spec",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "API Specification",
      "OAuth 2.0"
    ],
    "prompt": "An Experience API will be protected with an OAuth 2.0 token enforcement policy. Which specification change best reflects this?",
    "options": [
      {
        "letter": "A",
        "text": "Add client_secret as a required query parameter on every method"
      },
      {
        "letter": "B",
        "text": "Add an OAuth 2.0 security scheme to the resources that will be secured"
      },
      {
        "letter": "C",
        "text": "Change every GET to POST so that tokens can be carried in the request body"
      },
      {
        "letter": "D",
        "text": "Add a 429 response to every method so clients can detect rate limiting"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. An OAuth 2.0 token enforcement policy means callers present a bearer token, so the contract should declare an OAuth 2.0 security scheme on the secured resources. Putting the secret in a query parameter (A) is insecure and not how tokens are sent, tokens travel in the Authorization header rather than the body (C), and a 429 response (D) documents rate limiting, not token enforcement.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "A token enforcement policy corresponds to an OAuth 2.0 security scheme on secured resources."
      },
      "A": {
        "type": "Incorrect",
        "text": "The secret is not sent as a query parameter; the client presents a bearer token."
      },
      "C": {
        "type": "Incorrect",
        "text": "Tokens are carried in the Authorization header, so changing GET to POST is unnecessary."
      },
      "D": {
        "type": "Incorrect",
        "text": "A 429 response documents rate limiting, not token enforcement."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Configuring an API for OAuth 2.0",
        "url": "https://docs.mulesoft.com/api-manager/latest/about-configure-api-for-oauth"
      },
      "secondary": {
        "title": "OpenID Connect OAuth 2.0 Token Enforcement Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-openid-token-enforcement"
      }
    }
  },
  {
    "id": "q-131",
    "number": 131,
    "title": "API Governance - Rate limiting in the spec",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "API Specification",
      "Rate Limiting"
    ],
    "prompt": "A Rate Limiting policy will be applied to an API and will expose rate-limit headers. How should the specification be updated?",
    "options": [
      {
        "letter": "A",
        "text": "Add a required client_secret header to every method"
      },
      {
        "letter": "B",
        "text": "Add an OAuth 2.0 security scheme to every method"
      },
      {
        "letter": "C",
        "text": "Document the 429 response and the rate-limit response headers such as the remaining quota"
      },
      {
        "letter": "D",
        "text": "Remove all response codes except 200 so consumers ignore rejections"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. A Rate Limiting policy that exposes rate-limit headers changes the contract, so the specification should document the 429 response and the rate-limit headers consumers can read. A client_secret header (A) and an OAuth 2.0 scheme (B) describe different concerns, and removing response codes (D) hides information consumers need.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Rate-limit headers and the 429 response are part of the contract and should be documented."
      },
      "A": {
        "type": "Incorrect",
        "text": "A required secret header relates to credential enforcement, not rate limiting."
      },
      "B": {
        "type": "Incorrect",
        "text": "An OAuth 2.0 scheme describes token enforcement, not rate limiting."
      },
      "D": {
        "type": "Incorrect",
        "text": "Removing response codes hides the rejection information consumers need."
      }
    },
    "references": {
      "primary": {
        "title": "Rate Limiting Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-rate-limiting"
      },
      "secondary": {
        "title": "Rate Limiting: SLA-Based Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-rate-limiting-sla"
      }
    }
  },
  {
    "id": "q-132",
    "number": 132,
    "title": "API Governance - Basic authentication in the spec",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "API Specification",
      "Basic Authentication"
    ],
    "prompt": "A System API will be secured with the HTTP Basic Authentication policy. Which specification change is appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "Declare client_id and client_secret as query parameters on every method"
      },
      {
        "letter": "B",
        "text": "Add a /token resource that returns a short-lived OAuth 2.0 access token"
      },
      {
        "letter": "C",
        "text": "Add a username field to every request body so the policy can read it"
      },
      {
        "letter": "D",
        "text": "Apply a Basic Authentication security scheme to the resources the policy will protect"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. The HTTP Basic Authentication policy expects credentials in the Authorization header, so the contract should declare a Basic Authentication security scheme. Client credentials as query parameters (A) describe client ID enforcement, a token resource (B) describes OAuth 2.0, and a username in the body (C) is not how the policy reads credentials.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Basic Authentication reads the Authorization header, which the security scheme declares."
      },
      "A": {
        "type": "Incorrect",
        "text": "Query-parameter credentials describe client ID enforcement, not Basic Authentication."
      },
      "B": {
        "type": "Incorrect",
        "text": "A token-issuing resource belongs to an OAuth 2.0 flow, not Basic Authentication."
      },
      "C": {
        "type": "Incorrect",
        "text": "The policy reads the Authorization header, not a body field."
      }
    },
    "references": {
      "primary": {
        "title": "HTTP Basic Authentication Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-basic-auth-simple"
      },
      "secondary": {
        "title": "Design Center — Creating and Publishing API Fragments",
        "url": "https://docs.mulesoft.com/design-center/design-create-publish-api-fragment"
      }
    }
  },
  {
    "id": "q-133",
    "number": 133,
    "title": "API Governance - Policy without spec impact",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "API Specification",
      "Policies"
    ],
    "prompt": "For which policy is a change to the API specification least likely to be needed?",
    "options": [
      {
        "letter": "A",
        "text": "Message Logging, which inspects and records traffic without changing the contract"
      },
      {
        "letter": "B",
        "text": "Client ID Enforcement, which requires the contract to declare the credential headers"
      },
      {
        "letter": "C",
        "text": "OpenID Connect OAuth 2.0 Token Enforcement, which requires a security scheme"
      },
      {
        "letter": "D",
        "text": "Rate Limiting: SLA-Based, which requires documenting quota headers and the 429 response"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Message Logging records traffic at the gateway without requiring the consumer to send anything new, so the contract normally needs no change. Client ID Enforcement (B), OAuth 2.0 Token Enforcement (C), and SLA-based rate limiting (D) all introduce credentials, schemes, or responses that the contract should declare.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Message Logging records traffic at the gateway without requiring new contract elements."
      },
      "B": {
        "type": "Incorrect",
        "text": "Client ID Enforcement requires the contract to declare the credential headers."
      },
      "C": {
        "type": "Incorrect",
        "text": "Token enforcement requires a security scheme in the contract."
      },
      "D": {
        "type": "Incorrect",
        "text": "SLA-based rate limiting requires documenting quota headers and the 429 response."
      }
    },
    "references": {
      "primary": {
        "title": "Message Logging Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-message-logging"
      },
      "secondary": {
        "title": "Included Policies Directory",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-directory"
      }
    }
  },
  {
    "id": "q-134",
    "number": 134,
    "title": "API Governance - Embedded gateway for a Mule app",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "API Gateway",
      "Autodiscovery"
    ],
    "prompt": "A new API is implemented as a Mule 4 application, and the team wants to apply API Manager policies with no extra network hop or extra deployment. Which approach is best?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy a separate API proxy application in front of the Mule application"
      },
      {
        "letter": "B",
        "text": "Configure API Autodiscovery in the Mule application so the gateway applies API Manager policies"
      },
      {
        "letter": "C",
        "text": "Implement the policies as DataWeave logic inside each flow of the application"
      },
      {
        "letter": "D",
        "text": "Install Anypoint Service Mesh in a Kubernetes cluster and route the application through it"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. API Autodiscovery embeds the Mule gateway in the application, so API Manager policies are enforced in-process with no extra hop or extra deployment. A separate proxy (A) adds both, hand-written DataWeave (C) is not policy enforcement, and a service mesh (D) is for non-Mule microservices, not an embedded Mule application.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Autodiscovery embeds the gateway in the Mule application, so policies apply with no extra hop or deployment."
      },
      "A": {
        "type": "Incorrect",
        "text": "A separate proxy adds a network hop and a second deployment."
      },
      "C": {
        "type": "Incorrect",
        "text": "DataWeave logic is not API Manager policy enforcement."
      },
      "D": {
        "type": "Incorrect",
        "text": "A service mesh targets non-Mule microservices, not an embedded Mule application."
      }
    },
    "references": {
      "primary": {
        "title": "API Autodiscovery",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-auto-discovery-new-concept"
      },
      "secondary": {
        "title": "API Gateway Capabilities (Mule 4)",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-gateway-capabilities-mule4"
      }
    }
  },
  {
    "id": "q-135",
    "number": 135,
    "title": "API Governance - Implementation cannot be redeployed",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "API Proxy",
      "API Gateway"
    ],
    "prompt": "An existing SOAP-to-REST implementation, built by a vendor on a non-Mule platform, must have policies applied from API Manager. The vendor cannot change or redeploy it. Which approach is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "Configure API Autodiscovery inside the vendor's application without redeploying it"
      },
      {
        "letter": "B",
        "text": "Apply the policies directly to the Exchange asset so they are enforced wherever it is used"
      },
      {
        "letter": "C",
        "text": "Deploy an API proxy or Flex Gateway in front of the existing implementation and manage it in API Manager"
      },
      {
        "letter": "D",
        "text": "Ask each client to validate the other clients' credentials before making its own calls"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. A non-Mule implementation that cannot be changed is governed by placing an API proxy or Flex Gateway in front of it and managing that gateway in API Manager. Autodiscovery (A) requires modifying the application, policies are not applied to Exchange assets (B), and asking clients to validate each other (D) is not central enforcement.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "An API proxy or Flex Gateway enforces policies without changing the vendor's implementation."
      },
      "A": {
        "type": "Incorrect",
        "text": "Autodiscovery requires adding configuration to the application and redeploying it."
      },
      "B": {
        "type": "Incorrect",
        "text": "Policies are applied to API instances in API Manager, not to Exchange assets."
      },
      "D": {
        "type": "Incorrect",
        "text": "Peer validation by clients is not central policy enforcement."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — API Proxies",
        "url": "https://docs.mulesoft.com/api-manager/latest/proxy-latest-concept"
      },
      "secondary": {
        "title": "Anypoint Flex Gateway Documentation",
        "url": "https://docs.mulesoft.com/gateway/latest/"
      }
    }
  },
  {
    "id": "q-136",
    "number": 136,
    "title": "API Governance - Lightweight gateway in Kubernetes",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Flex Gateway",
      "API Gateway"
    ],
    "prompt": "A team runs Node.js microservices in its own Kubernetes cluster and wants policies managed in API Manager with a lightweight footprint and no Mule runtime per service. Which option fits best?",
    "options": [
      {
        "letter": "A",
        "text": "A Mule API proxy for each microservice on CloudHub"
      },
      {
        "letter": "B",
        "text": "API Autodiscovery inside each Node.js service"
      },
      {
        "letter": "C",
        "text": "Exchange public portal for each service"
      },
      {
        "letter": "D",
        "text": "Anypoint Flex Gateway"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Anypoint Flex Gateway is a lightweight, high-performance gateway that can run in Docker and Kubernetes and is managed through API Manager. It suits non-Mule services that need centralized policies without a Mule runtime per service.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Flex Gateway is a lightweight gateway that runs in containers and is managed by API Manager."
      },
      "A": {
        "type": "Incorrect",
        "text": "Separate Mule proxies add weight and route traffic out of the cluster."
      },
      "B": {
        "type": "Incorrect",
        "text": "Autodiscovery is a Mule runtime feature."
      },
      "C": {
        "type": "Incorrect",
        "text": "Portals document APIs but do not enforce policies."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Flex Gateway Documentation",
        "url": "https://docs.mulesoft.com/gateway/latest/"
      },
      "secondary": {
        "title": "API Gateway Capabilities (Mule 4)",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-gateway-capabilities-mule4"
      }
    }
  },
  {
    "id": "q-137",
    "number": 137,
    "title": "API Governance - Trade-off of API proxies",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "API Proxy",
      "Trade-offs"
    ],
    "prompt": "What is the main trade-off of enforcing policies with a separate API proxy instead of the embedded gateway in a Mule implementation?",
    "options": [
      {
        "letter": "A",
        "text": "An extra network hop and an extra application to deploy, monitor, and manage"
      },
      {
        "letter": "B",
        "text": "Policies applied through a proxy cannot be changed at runtime without redeploying the proxy"
      },
      {
        "letter": "C",
        "text": "A proxy cannot enforce client ID or rate limiting policies, only transformation policies"
      },
      {
        "letter": "D",
        "text": "The backend must be rewritten as a Mule application before a proxy can protect it"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. A separate proxy enforces policies in its own process, which adds a network hop and another application to deploy and operate compared with the gateway embedded in a Mule implementation. Proxy policies are changed centrally at runtime (B), a proxy can enforce client ID and rate limiting (C), and it can protect a non-Mule backend without rewriting it (D).",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "A separate proxy adds a network hop and a second application to deploy and operate."
      },
      "B": {
        "type": "Incorrect",
        "text": "Proxy policies are managed centrally and can be changed without redeploying the proxy."
      },
      "C": {
        "type": "Incorrect",
        "text": "A proxy can enforce client ID enforcement and rate limiting, among other policies."
      },
      "D": {
        "type": "Incorrect",
        "text": "A proxy protects a non-Mule backend without rewriting it."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — API Proxies",
        "url": "https://docs.mulesoft.com/api-manager/latest/proxy-latest-concept"
      },
      "secondary": {
        "title": "API Autodiscovery",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-auto-discovery-new-concept"
      }
    }
  },
  {
    "id": "q-138",
    "number": 138,
    "title": "API Governance - Service mesh for east-west traffic",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Anypoint Service Mesh",
      "Microservices"
    ],
    "prompt": "A company has many non-Mule microservices in Kubernetes that call each other inside the cluster. It wants them discoverable in Exchange and governed with API Manager policies without changing service code. Which approach was designed for this scenario?",
    "options": [
      {
        "letter": "A",
        "text": "A single Experience API that wraps all microservices"
      },
      {
        "letter": "B",
        "text": "Anypoint Service Mesh"
      },
      {
        "letter": "C",
        "text": "API Autodiscovery added to each microservice"
      },
      {
        "letter": "D",
        "text": "An API proxy on CloudHub for every microservice"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Anypoint Service Mesh extended Anypoint Platform's API management to non-Mule microservices running in Kubernetes, including traffic between services, without changing service code. It appears in the exam guide; for new designs, MuleSoft's current lightweight option for non-Mule services is Flex Gateway.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "It extended API management to microservices in Kubernetes, including service-to-service traffic."
      },
      "A": {
        "type": "Incorrect",
        "text": "Wrapping does not govern the service-to-service calls."
      },
      "C": {
        "type": "Incorrect",
        "text": "Autodiscovery requires Mule applications."
      },
      "D": {
        "type": "Incorrect",
        "text": "Routing internal traffic out to CloudHub adds latency and cost."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Developers — Getting Started with Anypoint Service Mesh",
        "url": "https://developer.mulesoft.com/tutorials-and-howtos/anypoint-service-mesh/getting-started-with-anypoint-service-mesh-provisioning/"
      },
      "secondary": {
        "title": "Anypoint Flex Gateway Documentation",
        "url": "https://docs.mulesoft.com/gateway/latest/"
      }
    }
  },
  {
    "id": "q-139",
    "number": 139,
    "title": "API Governance - Securing System APIs",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Security",
      "System API"
    ],
    "prompt": "A company wants to make sure that its System APIs can only be called by its own Process APIs, which run on known network addresses. Which policy combination is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "CORS plus HTTP Caching, so only browser-based callers are accepted"
      },
      {
        "letter": "B",
        "text": "OAuth 2.0 token enforcement with an end-user consent screen for each Process API caller"
      },
      {
        "letter": "C",
        "text": "Client ID Enforcement plus IP Allowlist, so only known callers from known addresses are accepted"
      },
      {
        "letter": "D",
        "text": "No policies, because System APIs are internal and reachable only inside the network"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Restricting a System API to known Process APIs is done by combining Client ID Enforcement, which authenticates each calling application, with an IP Allowlist, which restricts the source addresses. CORS and caching (A) are unrelated to caller identity, an end-user consent flow (B) is for user-facing Experience APIs, and leaving internal APIs unprotected (D) ignores the requirement.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Client ID Enforcement identifies the caller and the IP Allowlist restricts the source addresses."
      },
      "A": {
        "type": "Incorrect",
        "text": "CORS and caching do not restrict which applications may call the API."
      },
      "B": {
        "type": "Incorrect",
        "text": "End-user consent belongs to user-facing Experience APIs, not internal Process-to-System calls."
      },
      "D": {
        "type": "Incorrect",
        "text": "Internal reachability is not a substitute for authenticating the calling application."
      }
    },
    "references": {
      "primary": {
        "title": "IP Allowlist Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-ip-allowlist"
      },
      "secondary": {
        "title": "Client ID Enforcement Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-client-id-enforcement"
      }
    }
  },
  {
    "id": "q-140",
    "number": 140,
    "title": "API Governance - Securing Experience APIs for end users",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Security",
      "Experience API"
    ],
    "prompt": "A mobile Experience API lets end users view their own orders. Access must be tied to the authenticated user through the company's identity provider. Which policy is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "Client ID Enforcement only, because it identifies the mobile application making the calls"
      },
      {
        "letter": "B",
        "text": "HTTP Basic Authentication with a single shared account used by every signed-in user"
      },
      {
        "letter": "C",
        "text": "An IP Allowlist of the mobile carrier networks the users connect through"
      },
      {
        "letter": "D",
        "text": "An OAuth 2.0 token enforcement policy that validates tokens issued by the company's identity provider"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Tying access to the authenticated user requires validating the user's token, so an OAuth 2.0 token enforcement policy that trusts the company's identity provider is appropriate. Client ID Enforcement (A) identifies the application, not the user; a shared Basic account (B) loses per-user identity; and an IP allowlist (C) cannot identify a user.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Token enforcement validates the user's token from the identity provider, tying access to the user."
      },
      "A": {
        "type": "Incorrect",
        "text": "Client ID Enforcement identifies the calling application, not the end user."
      },
      "B": {
        "type": "Incorrect",
        "text": "A shared account removes per-user identity and accountability."
      },
      "C": {
        "type": "Incorrect",
        "text": "An IP allowlist cannot identify an individual user."
      }
    },
    "references": {
      "primary": {
        "title": "OpenID Connect OAuth 2.0 Token Enforcement Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-openid-token-enforcement"
      },
      "secondary": {
        "title": "API Manager — Configuring an API for OAuth 2.0",
        "url": "https://docs.mulesoft.com/api-manager/latest/about-configure-api-for-oauth"
      }
    }
  },
  {
    "id": "q-141",
    "number": 141,
    "title": "API Governance - Process API security",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Security",
      "Process API"
    ],
    "prompt": "Process APIs are called only by internal Experience APIs and other Process APIs within the company's network. Which policy is the typical baseline for them?",
    "options": [
      {
        "letter": "A",
        "text": "Client ID Enforcement, so only known internal applications with contracts can call them"
      },
      {
        "letter": "B",
        "text": "CORS, so that browser-based internal callers are permitted"
      },
      {
        "letter": "C",
        "text": "Header Injection, so each call carries the calling application's identity downstream"
      },
      {
        "letter": "D",
        "text": "HTTP Caching, so repeated internal reads do not reach the backend"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Process APIs are normally protected with Client ID Enforcement so that only registered internal applications with a contract can call them. CORS (B) is for browser origins, Header Injection (C) modifies headers rather than authenticating the caller, and caching (D) is a performance policy, not a security baseline.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Client ID Enforcement restricts Process APIs to registered internal applications."
      },
      "B": {
        "type": "Incorrect",
        "text": "CORS addresses browser origins, not which internal applications may call the API."
      },
      "C": {
        "type": "Incorrect",
        "text": "Header Injection adds a header; it does not authenticate the caller."
      },
      "D": {
        "type": "Incorrect",
        "text": "Caching improves performance and is not a security baseline."
      }
    },
    "references": {
      "primary": {
        "title": "Client ID Enforcement Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-client-id-enforcement"
      },
      "secondary": {
        "title": "API Manager — Contracts",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-contracts-landing-page"
      }
    }
  },
  {
    "id": "q-142",
    "number": 142,
    "title": "API Governance - Partner-facing Experience API",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Security",
      "Experience API"
    ],
    "prompt": "An Experience API is exposed to external partners over the internet. Partners send large JSON payloads. Which two policies are most important to add for security? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Message Logging of the full request and response payloads for partner traceability"
      },
      {
        "letter": "B",
        "text": "An OAuth 2.0 or JWT token enforcement policy to authenticate and authorize each partner call"
      },
      {
        "letter": "C",
        "text": "CORS configured to allow all origins so any partner browser client can connect"
      },
      {
        "letter": "D",
        "text": "A Rate Limiting policy with a high quota so partners are never throttled"
      },
      {
        "letter": "E",
        "text": "JSON Threat Protection to constrain payload size, nesting depth, and field lengths"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Correct answers: B and E. For partner-facing APIs that accept large JSON payloads, token enforcement authenticates and authorizes each call, and JSON Threat Protection defends against oversized or deeply nested payloads. Logging full payloads (A) risks exposing sensitive data, allowing all origins (C) widens the attack surface, and a high quota (D) removes a protective limit.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Token enforcement authenticates and authorizes each partner call."
      },
      "E": {
        "type": "Correct",
        "text": "JSON Threat Protection constrains payload size, nesting, and field lengths."
      },
      "A": {
        "type": "Incorrect",
        "text": "Logging full payloads can expose sensitive partner data."
      },
      "C": {
        "type": "Incorrect",
        "text": "Allowing all origins widens the attack surface unnecessarily."
      },
      "D": {
        "type": "Incorrect",
        "text": "A high quota removes a protective limit rather than adding security."
      }
    },
    "references": {
      "primary": {
        "title": "JSON Threat Protection Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-json-threat-protection"
      },
      "secondary": {
        "title": "JWT Validation Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-jwt-validation"
      }
    }
  },
  {
    "id": "q-143",
    "number": 143,
    "title": "API Governance - Defense in depth across tiers",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Security",
      "API-led Connectivity"
    ],
    "prompt": "An architect applies OAuth 2.0 to all Experience APIs. A developer argues that Process and System APIs therefore need no policies. What should the architect reply?",
    "options": [
      {
        "letter": "A",
        "text": "Correct, because securing the Experience layer protects every API beneath it"
      },
      {
        "letter": "B",
        "text": "The lower tiers need only CORS, since they are called by other applications rather than browsers"
      },
      {
        "letter": "C",
        "text": "The lower tiers still need their own controls, because clients can reach them directly"
      },
      {
        "letter": "D",
        "text": "The lower tiers should reuse the same end-user OAuth consent flow as the Experience APIs"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Defense in depth means each tier enforces its own controls: a client can often reach Process or System APIs directly, and internal callers still must be identified and limited, so the lower tiers need their own policies. Securing only the Experience layer (A) leaves the lower tiers open, CORS alone (B) does not authenticate callers, and an end-user consent flow (D) does not fit machine-to-machine calls.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Each tier must enforce its own controls because lower tiers can be reached directly."
      },
      "A": {
        "type": "Incorrect",
        "text": "Securing only the top layer leaves the lower tiers exposed."
      },
      "B": {
        "type": "Incorrect",
        "text": "CORS does not authenticate or authorize application-to-application calls."
      },
      "D": {
        "type": "Incorrect",
        "text": "End-user consent flows do not fit machine-to-machine lower-tier calls."
      }
    },
    "references": {
      "primary": {
        "title": "Client ID Enforcement Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-client-id-enforcement"
      },
      "secondary": {
        "title": "IP Allowlist Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-ip-allowlist"
      }
    }
  },
  {
    "id": "q-144",
    "number": 144,
    "title": "API Governance - How to send client credentials",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Client ID Enforcement",
      "Client Credentials"
    ],
    "prompt": "An API has Client ID Enforcement applied with its default configuration. How should a client application send its credentials?",
    "options": [
      {
        "letter": "A",
        "text": "In a cookie that Anypoint Platform sets after the client signs in to the platform"
      },
      {
        "letter": "B",
        "text": "Inside the JSON request body as a credentials object on every call"
      },
      {
        "letter": "C",
        "text": "In the request path as /client/{client_id}/secret/{client_secret}"
      },
      {
        "letter": "D",
        "text": "In the client_id and client_secret headers, or as equivalent query parameters"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. With its default configuration, Client ID Enforcement reads the credentials from the client_id and client_secret headers, or from equivalent query parameters. A platform sign-in cookie (A), a JSON credentials object (B), and credentials in the path (C) are not how the policy reads them.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "The default configuration reads the credentials from the client_id and client_secret headers or query parameters."
      },
      "A": {
        "type": "Incorrect",
        "text": "A platform sign-in cookie is not an API credential."
      },
      "B": {
        "type": "Incorrect",
        "text": "The policy does not read credentials from a body object."
      },
      "C": {
        "type": "Incorrect",
        "text": "Credentials in the path are not how the policy reads them."
      }
    },
    "references": {
      "primary": {
        "title": "Client ID Enforcement Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-client-id-enforcement"
      },
      "secondary": {
        "title": "API Manager — Managing Client Applications",
        "url": "https://docs.mulesoft.com/api-manager/latest/manage-client-apps-latest-task"
      }
    }
  },
  {
    "id": "q-145",
    "number": 145,
    "title": "API Governance - Credentials in a Basic Authorization header",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Client ID Enforcement",
      "Basic Authentication"
    ],
    "prompt": "A client platform can only send credentials in a standard Authorization header. The API uses Client ID Enforcement. What can the API owner do?",
    "options": [
      {
        "letter": "A",
        "text": "Configure Client ID Enforcement to read the credentials from the Basic Authorization header"
      },
      {
        "letter": "B",
        "text": "Remove Client ID Enforcement for that one client and rely on its network address instead"
      },
      {
        "letter": "C",
        "text": "Ask the client to place the secret in the URL path instead of the header"
      },
      {
        "letter": "D",
        "text": "Replace Client ID Enforcement with the CORS policy for that client"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Client ID Enforcement can be configured to read the credentials from the Basic Authorization header, which fits a client that can send only that header. Removing the policy (B) drops enforcement, putting the secret in the path (C) is insecure, and CORS (D) does not authenticate clients.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The policy can be configured to read the client ID and secret from the Basic Authorization header."
      },
      "B": {
        "type": "Incorrect",
        "text": "Removing the policy drops enforcement for that client."
      },
      "C": {
        "type": "Incorrect",
        "text": "Secrets in the URL path are insecure and not required here."
      },
      "D": {
        "type": "Incorrect",
        "text": "CORS governs browser origins, not client authentication."
      }
    },
    "references": {
      "primary": {
        "title": "Client ID Enforcement Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-client-id-enforcement"
      },
      "secondary": {
        "title": "HTTP Basic Authentication Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-basic-auth-simple"
      }
    }
  },
  {
    "id": "q-146",
    "number": 146,
    "title": "API Governance - When client ID and secret are required",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Client Credentials",
      "SLA Tiers"
    ],
    "prompt": "Which policy requires the API client to identify itself with its client application credentials on each request?",
    "options": [
      {
        "letter": "A",
        "text": "Rate Limiting, which applies one fixed quota to every caller regardless of contract"
      },
      {
        "letter": "B",
        "text": "Rate Limiting: SLA-Based, which applies the quota defined by the client's contract"
      },
      {
        "letter": "C",
        "text": "IP Allowlist, which requires each client to present its client application credentials"
      },
      {
        "letter": "D",
        "text": "JSON Threat Protection, which identifies the client application from its credentials"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. SLA-based rate limiting applies the quota associated with the client application's contract, so the client must identify itself with its credentials on each request. Plain Rate Limiting (A) applies one fixed quota and does not require per-client identification, an IP allowlist (C) identifies a source address rather than an application, and JSON Threat Protection (D) inspects payloads.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "SLA-based rate limiting depends on the client's contract, so the client must identify itself."
      },
      "A": {
        "type": "Incorrect",
        "text": "Plain Rate Limiting applies one fixed quota and does not require per-client identity."
      },
      "C": {
        "type": "Incorrect",
        "text": "An IP allowlist identifies a source address, not a client application."
      },
      "D": {
        "type": "Incorrect",
        "text": "JSON Threat Protection inspects payload structure, not client identity."
      }
    },
    "references": {
      "primary": {
        "title": "Rate Limiting: SLA-Based Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-rate-limiting-sla"
      },
      "secondary": {
        "title": "Client ID Enforcement Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-client-id-enforcement"
      }
    }
  },
  {
    "id": "q-147",
    "number": 147,
    "title": "API Governance - Secrets in public clients",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Client Credentials",
      "Security"
    ],
    "prompt": "A team plans to embed its client secret in a JavaScript single-page application so the browser can call an API protected by Client ID Enforcement. What concern should the architect raise?",
    "options": [
      {
        "letter": "A",
        "text": "Client secrets are rotated every hour, so the browser would have to fetch a new one constantly"
      },
      {
        "letter": "B",
        "text": "Browsers cannot send custom HTTP headers, so the credentials would never arrive"
      },
      {
        "letter": "C",
        "text": "Anyone who views the application's source can read the secret, so it cannot be kept confidential"
      },
      {
        "letter": "D",
        "text": "Client ID Enforcement is supported only for mobile applications, not for web applications"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Client secrets must be kept confidential, but code shipped to a browser is public, so anyone can extract the secret. Secrets do not rotate hourly (A), browsers can send custom headers subject to CORS (B), and the policy is not limited to mobile applications (D).",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Browser code is public, so an embedded secret cannot be kept confidential."
      },
      "A": {
        "type": "Incorrect",
        "text": "Client secrets do not rotate on a fixed hourly basis."
      },
      "B": {
        "type": "Incorrect",
        "text": "Browsers can send custom headers, subject to CORS."
      },
      "D": {
        "type": "Incorrect",
        "text": "Client ID Enforcement works with any HTTP client, not only mobile apps."
      }
    },
    "references": {
      "primary": {
        "title": "Client ID Enforcement Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-client-id-enforcement"
      },
      "secondary": {
        "title": "API Manager — OAuth 2.0 Grant Types",
        "url": "https://docs.mulesoft.com/api-manager/latest/oauth-grant-types-about"
      }
    }
  },
  {
    "id": "q-148",
    "number": 148,
    "title": "API Governance - Client credentials with OAuth 2.0",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Client Credentials",
      "OAuth 2.0"
    ],
    "prompt": "An API is protected by an OAuth 2.0 token enforcement policy with an external client provider. How does a client application use its client ID and secret?",
    "options": [
      {
        "letter": "A",
        "text": "The client sends the secret to the API on every request alongside the access token"
      },
      {
        "letter": "B",
        "text": "The client uses its client ID and secret to sign in to Anypoint Platform and browse the API"
      },
      {
        "letter": "C",
        "text": "The client needs no client ID, because the provider issues anonymous tokens to any caller"
      },
      {
        "letter": "D",
        "text": "The client exchanges its client ID and secret for an access token at the provider, then sends only the token to the API"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. With OAuth 2.0, the client authenticates to the authorization server with its credentials and receives an access token, then sends only the token to the API, where the policy validates it. Sending the secret to the API (A) is unnecessary, platform sign-in (B) uses identity management, and tokens are issued to registered clients rather than anonymously (C).",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "The client obtains a token from the provider and sends only the token to the API."
      },
      "A": {
        "type": "Incorrect",
        "text": "Sending the secret to the API is unnecessary with OAuth 2.0."
      },
      "B": {
        "type": "Incorrect",
        "text": "Platform sign-in uses identity management, not client credentials."
      },
      "C": {
        "type": "Incorrect",
        "text": "Tokens are issued to registered client applications, not anonymously."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Configuring an API for OAuth 2.0",
        "url": "https://docs.mulesoft.com/api-manager/latest/about-configure-api-for-oauth"
      },
      "secondary": {
        "title": "API Manager — OAuth 2.0 Grant Types",
        "url": "https://docs.mulesoft.com/api-manager/latest/oauth-grant-types-about"
      }
    }
  },
  {
    "id": "q-149",
    "number": 149,
    "title": "API Governance - Requesting access",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Contracts",
      "Exchange"
    ],
    "prompt": "A developer wants to call a Process API protected by Client ID Enforcement. How does the developer get access?",
    "options": [
      {
        "letter": "A",
        "text": "Request access to the API in Exchange, which creates a client application and a contract"
      },
      {
        "letter": "B",
        "text": "Copy the client credentials from another team's client application that already has access"
      },
      {
        "letter": "C",
        "text": "Ask Runtime Manager to issue a client ID and secret for the developer"
      },
      {
        "letter": "D",
        "text": "Deploy a new API proxy so that the developer's calls bypass the policy"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. A developer requests access to the API from its Exchange page, which creates a client application and a contract request that the API owner can approve. Reusing another team's credentials (B) breaks governance and attribution, Runtime Manager (C) does not issue credentials, and a proxy (D) does not bypass the policy.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Requesting access in Exchange creates the client application and the contract request."
      },
      "B": {
        "type": "Incorrect",
        "text": "Reusing another team's credentials breaks governance and attribution."
      },
      "C": {
        "type": "Incorrect",
        "text": "Runtime Manager deploys and manages applications; it does not issue client credentials."
      },
      "D": {
        "type": "Incorrect",
        "text": "A proxy enforces policies rather than bypassing them."
      }
    },
    "references": {
      "primary": {
        "title": "Exchange — Requesting Access to an API",
        "url": "https://docs.mulesoft.com/exchange/to-request-access"
      },
      "secondary": {
        "title": "API Manager — Contracts",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-contracts-landing-page"
      }
    }
  },
  {
    "id": "q-150",
    "number": 150,
    "title": "API Governance - Automatic versus manual approval",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "SLA Tiers",
      "Contracts"
    ],
    "prompt": "An API has a Bronze SLA tier that any internal team may use and a Gold tier that requires review by the API owner. How should the tiers be configured?",
    "options": [
      {
        "letter": "A",
        "text": "Both tiers with manual approval, so every request is reviewed by the API owner"
      },
      {
        "letter": "B",
        "text": "Bronze with automatic approval and Gold with manual approval, set on each SLA tier"
      },
      {
        "letter": "C",
        "text": "Both tiers with automatic approval, monitored afterwards through API analytics"
      },
      {
        "letter": "D",
        "text": "Approval is configured per client application rather than per SLA tier"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Each SLA tier carries its own approval setting, so Bronze can be auto-approved for self-service while Gold requires manual review. Making both manual (A) delays low-risk internal access, making both automatic (C) grants premium access without review, and approval is a property of the tier rather than the client (D).",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Each SLA tier has its own approval setting, allowing Bronze self-service and Gold review."
      },
      "A": {
        "type": "Incorrect",
        "text": "Manual approval on both tiers delays low-risk internal access."
      },
      "C": {
        "type": "Incorrect",
        "text": "Automatic approval on both grants premium access without the required review."
      },
      "D": {
        "type": "Incorrect",
        "text": "Approval behavior is defined on the SLA tier, not per client application."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Defining SLA Tiers",
        "url": "https://docs.mulesoft.com/api-manager/latest/defining-sla-tiers"
      },
      "secondary": {
        "title": "API Manager — SLA Tiers",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-sla-tiers"
      }
    }
  },
  {
    "id": "q-151",
    "number": 151,
    "title": "API Governance - Approving a pending request",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Contracts",
      "API Manager"
    ],
    "prompt": "A partner requested access to an API on a manually approved SLA tier. Where does the API owner approve the request?",
    "options": [
      {
        "letter": "A",
        "text": "In Runtime Manager, by restarting the application"
      },
      {
        "letter": "B",
        "text": "In Access Management, by making the partner an administrator"
      },
      {
        "letter": "C",
        "text": "In API Manager, in the API instance's contracts"
      },
      {
        "letter": "D",
        "text": "In Design Center, by editing the API specification"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Contract requests that require manual approval appear in API Manager for the API instance. The API owner reviews and approves or rejects them; approved contracts allow the client application's requests to pass the policy.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Restarting an app does not approve access."
      },
      "C": {
        "type": "Correct",
        "text": "Pending contracts are approved by the API owner in API Manager."
      },
      "B": {
        "type": "Incorrect",
        "text": "Granting admin rights is unrelated and excessive."
      },
      "D": {
        "type": "Incorrect",
        "text": "Design Center does not manage client contracts."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Contracts",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-contracts-landing-page"
      },
      "secondary": {
        "title": "API Manager — Viewing API Contracts",
        "url": "https://docs.mulesoft.com/api-manager/latest/view-api-contracts"
      }
    }
  },
  {
    "id": "q-152",
    "number": 152,
    "title": "API Governance - Revoking access",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Contracts",
      "Revocation"
    ],
    "prompt": "A partner's client application is misusing an API. The API owner wants to stop that application's calls immediately while keeping access for other clients. What should be done?",
    "options": [
      {
        "letter": "A",
        "text": "Delete the API instance, which stops all calls to the API until it is recreated"
      },
      {
        "letter": "B",
        "text": "Remove the Client ID Enforcement policy so the offending client can no longer authenticate"
      },
      {
        "letter": "C",
        "text": "Publish a new major version of the API and move the other clients to it"
      },
      {
        "letter": "D",
        "text": "Revoke that client application's contract in API Manager so its credentials stop working"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Revoking the specific client's contract in API Manager immediately stops that client while leaving other contracts intact. Deleting the API instance (A) stops every client, removing the policy (B) removes enforcement for everyone, and a new major version (C) disrupts all consumers unnecessarily.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Revoking one contract stops that client's calls without affecting other clients."
      },
      "A": {
        "type": "Incorrect",
        "text": "Deleting the API instance stops all clients, not just the offender."
      },
      "B": {
        "type": "Incorrect",
        "text": "Removing the policy disables enforcement for every client."
      },
      "C": {
        "type": "Incorrect",
        "text": "A new major version disrupts all consumers unnecessarily."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Contracts",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-contracts-landing-page"
      },
      "secondary": {
        "title": "API Manager — Viewing API Contracts",
        "url": "https://docs.mulesoft.com/api-manager/latest/view-api-contracts"
      }
    }
  },
  {
    "id": "q-153",
    "number": 153,
    "title": "API Governance - Access per instance",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Contracts",
      "Environments"
    ],
    "prompt": "A client application has an approved contract with the sandbox instance of an API. The team now calls the production instance and receives 401 errors. What is the most likely cause?",
    "options": [
      {
        "letter": "A",
        "text": "It has no approved contract with the production instance"
      },
      {
        "letter": "B",
        "text": "Contracts expire automatically when called from production"
      },
      {
        "letter": "C",
        "text": "Client applications can only be used in sandbox"
      },
      {
        "letter": "D",
        "text": "Production instances do not support client ID enforcement"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Contracts link a client application to a specific API instance. Access to a sandbox instance does not grant access to the production instance; the client must request and obtain a contract for production as well.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Contracts are per instance, so production access must be requested separately."
      },
      "B": {
        "type": "Incorrect",
        "text": "Contracts do not expire based on the calling environment."
      },
      "C": {
        "type": "Incorrect",
        "text": "Client applications can have contracts with production instances."
      },
      "D": {
        "type": "Incorrect",
        "text": "Production instances support the same policies."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Contracts",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-contracts-landing-page"
      },
      "secondary": {
        "title": "Exchange — Requesting Access to an API",
        "url": "https://docs.mulesoft.com/exchange/to-request-access"
      }
    }
  },
  {
    "id": "q-154",
    "number": 154,
    "title": "API Governance - Malicious JSON payloads",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Threat Protection",
      "JSON"
    ],
    "prompt": "An attacker sends deeply nested JSON documents with huge arrays to an API, exhausting memory in the implementation. Which policy addresses this?",
    "options": [
      {
        "letter": "A",
        "text": "CORS configured to reject requests from unknown origins"
      },
      {
        "letter": "B",
        "text": "JSON Threat Protection, which limits nesting depth, payload size, and field lengths"
      },
      {
        "letter": "C",
        "text": "HTTP Caching configured with a short time-to-live for the responses"
      },
      {
        "letter": "D",
        "text": "Client ID Enforcement configured with a stricter secret policy"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. JSON Threat Protection inspects JSON payloads and rejects documents whose nesting depth, size, or field lengths exceed configured limits, protecting the implementation from memory exhaustion. CORS (A), caching (C), and client ID enforcement (D) do not examine payload structure.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "JSON Threat Protection constrains nesting depth, payload size, and field lengths."
      },
      "A": {
        "type": "Incorrect",
        "text": "CORS governs browser origins, not payload structure."
      },
      "C": {
        "type": "Incorrect",
        "text": "Caching affects response reuse, not payload validation."
      },
      "D": {
        "type": "Incorrect",
        "text": "Client ID Enforcement validates credentials, not payload structure."
      }
    },
    "references": {
      "primary": {
        "title": "JSON Threat Protection Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-json-threat-protection"
      },
      "secondary": {
        "title": "Included Policies Directory",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-directory"
      }
    }
  },
  {
    "id": "q-155",
    "number": 155,
    "title": "API Governance - XML bombs",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Threat Protection",
      "XML"
    ],
    "prompt": "A SOAP-style API that accepts XML is vulnerable to payloads with excessive element depth and attributes. Which policy should be applied?",
    "options": [
      {
        "letter": "A",
        "text": "JSON Threat Protection, which limits nesting depth and array size"
      },
      {
        "letter": "B",
        "text": "Spike Control, which smooths bursts of incoming requests"
      },
      {
        "letter": "C",
        "text": "XML Threat Protection, which limits element depth, attribute count, and payload size"
      },
      {
        "letter": "D",
        "text": "Header Removal, which strips unnecessary headers before the request reaches the backend"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. XML Threat Protection inspects XML payloads and rejects documents whose element depth, attribute count, or size exceed configured limits. JSON Threat Protection (A) targets JSON, Spike Control (B) manages request rate rather than payload structure, and Header Removal (D) modifies headers.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "XML Threat Protection constrains element depth, attribute count, and payload size."
      },
      "A": {
        "type": "Incorrect",
        "text": "JSON Threat Protection targets JSON payloads, not XML."
      },
      "B": {
        "type": "Incorrect",
        "text": "Spike Control manages request rate, not payload structure."
      },
      "D": {
        "type": "Incorrect",
        "text": "Header Removal modifies headers rather than inspecting payloads."
      }
    },
    "references": {
      "primary": {
        "title": "XML Threat Protection Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-xml-threat-protection"
      },
      "secondary": {
        "title": "Included Policies Directory",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-directory"
      }
    }
  },
  {
    "id": "q-156",
    "number": 156,
    "title": "API Governance - Restricting callers by network",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "IP Allowlist",
      "Security"
    ],
    "prompt": "An API must be callable only from a partner's two fixed egress IP addresses. Which policy enforces this?",
    "options": [
      {
        "letter": "A",
        "text": "IP Blocklist, configured with the addresses that must not call the API"
      },
      {
        "letter": "B",
        "text": "CORS, configured to allow only the partner's browser origin"
      },
      {
        "letter": "C",
        "text": "Rate Limiting, configured with a quota that only the partner can sustain"
      },
      {
        "letter": "D",
        "text": "IP Allowlist, configured with the partner's two egress addresses"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. An IP allowlist accepts only the listed source addresses, so listing the partner's two egress addresses restricts the API to that partner. A blocklist (A) would have to enumerate every address except the partner's, CORS (B) governs browser origins rather than network sources, and rate limiting (C) does not restrict who may call.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "An IP allowlist accepts only the listed source addresses."
      },
      "A": {
        "type": "Incorrect",
        "text": "A blocklist would need to list every other address, which is impractical."
      },
      "B": {
        "type": "Incorrect",
        "text": "CORS governs browser origins, not network source addresses."
      },
      "C": {
        "type": "Incorrect",
        "text": "Rate limiting controls volume, not which sources may call."
      }
    },
    "references": {
      "primary": {
        "title": "IP Allowlist Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-ip-allowlist"
      },
      "secondary": {
        "title": "Included Policies Directory",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-directory"
      }
    }
  },
  {
    "id": "q-157",
    "number": 157,
    "title": "API Governance - Validating signed tokens locally",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "JWT Validation",
      "Security"
    ],
    "prompt": "Clients send JSON Web Tokens issued by a trusted identity provider. The API team wants to validate the token's signature and claims at the gateway without calling the provider on each request. Which policy should be used?",
    "options": [
      {
        "letter": "A",
        "text": "JWT Validation, which verifies the token's signature and claims at the gateway using the provider's keys"
      },
      {
        "letter": "B",
        "text": "Client ID Enforcement, which verifies the token's signature from the request headers"
      },
      {
        "letter": "C",
        "text": "HTTP Basic Authentication, which validates the token against the provider on each request"
      },
      {
        "letter": "D",
        "text": "Header Injection, which forwards the token to the provider for validation on each request"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. JWT Validation verifies the token's signature and claims at the gateway using the identity provider's keys, so no call to the provider is needed per request. Client ID Enforcement (B) validates client credentials, Basic Authentication (C) validates a username and password, and Header Injection (D) does not validate tokens.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "JWT Validation verifies the signature and claims locally using the provider's keys."
      },
      "B": {
        "type": "Incorrect",
        "text": "Client ID Enforcement validates client credentials, not JWT signatures."
      },
      "C": {
        "type": "Incorrect",
        "text": "Basic Authentication validates a username and password, not a JWT."
      },
      "D": {
        "type": "Incorrect",
        "text": "Header Injection does not validate tokens."
      }
    },
    "references": {
      "primary": {
        "title": "JWT Validation Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-jwt-validation"
      },
      "secondary": {
        "title": "Included Policies Directory",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-directory"
      }
    }
  },
  {
    "id": "q-158",
    "number": 158,
    "title": "API Governance - Choose two: security policies",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Policies",
      "Security"
    ],
    "prompt": "A compliance review of a governed API is under way. The reviewer requires that only approved source addresses may call the API, that XML payloads from partners be checked for excessive structure, and that every request and response be recorded for audit. The architect must map each requirement to an API Manager policy. Which two policies enforce security constraints on API invocations?",
    "options": [
      {
        "letter": "A",
        "text": "Message Logging, which records request and response metadata for audit"
      },
      {
        "letter": "B",
        "text": "IP Allowlist, which restricts which source addresses may call the API"
      },
      {
        "letter": "C",
        "text": "Spike Control, which smooths short bursts of incoming requests"
      },
      {
        "letter": "D",
        "text": "HTTP Caching, which serves repeated responses from the gateway cache"
      },
      {
        "letter": "E",
        "text": "XML Threat Protection, which restricts the structure and size of XML payloads"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Correct answers: B and E. IP Allowlist restricts callers by network address and XML Threat Protection constrains XML payload structure, both enforcing security constraints. Message Logging (A) is observability, Spike Control (C) is traffic shaping, and HTTP Caching (D) is a performance policy.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "IP Allowlist enforces a security constraint by restricting source addresses."
      },
      "E": {
        "type": "Correct",
        "text": "XML Threat Protection enforces a security constraint on payload structure."
      },
      "A": {
        "type": "Incorrect",
        "text": "Message Logging is an observability policy, not a security constraint."
      },
      "C": {
        "type": "Incorrect",
        "text": "Spike Control shapes traffic rather than enforcing a security constraint."
      },
      "D": {
        "type": "Incorrect",
        "text": "HTTP Caching is a performance policy, not a security constraint."
      }
    },
    "references": {
      "primary": {
        "title": "Included Policies Directory",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-directory"
      },
      "secondary": {
        "title": "API Manager — Included Policies",
        "url": "https://docs.mulesoft.com/api-manager/latest/policies-ootb-landing-page"
      }
    }
  },
  {
    "id": "q-159",
    "number": 159,
    "title": "API Governance - Where client providers are configured",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "OAuth 2.0",
      "Client Providers"
    ],
    "prompt": "An organization with several business groups wants to use an external OAuth 2.0 provider for its APIs. Where are external client providers configured and how are they used?",
    "options": [
      {
        "letter": "A",
        "text": "In Runtime Manager, where each deployed application is bound to a provider"
      },
      {
        "letter": "B",
        "text": "In Exchange, on each API's asset page, so consumers see which provider to use"
      },
      {
        "letter": "C",
        "text": "In the root organization, where the provider is configured and then linked to the environments that use it"
      },
      {
        "letter": "D",
        "text": "In each Mule application's configuration file, alongside the other application properties"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. External client providers are configured in the root organization and then linked to the environments that use them. Runtime Manager (A) deploys applications rather than configuring providers, Exchange (B) catalogs assets, and a Mule configuration file (D) is not where client providers are defined.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Client providers are configured at the root organization and linked to environments."
      },
      "A": {
        "type": "Incorrect",
        "text": "Runtime Manager deploys applications; it does not configure client providers."
      },
      "B": {
        "type": "Incorrect",
        "text": "Exchange catalogs assets and does not configure client providers."
      },
      "D": {
        "type": "Incorrect",
        "text": "Client providers are not defined in a Mule application's configuration file."
      }
    },
    "references": {
      "primary": {
        "title": "Client Management in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/managing-api-clients"
      },
      "secondary": {
        "title": "Configuring OpenID Connect Client Management",
        "url": "https://docs.mulesoft.com/access-management/configure-client-management-openid-task"
      }
    }
  },
  {
    "id": "q-160",
    "number": 160,
    "title": "API Governance - Roles in an OAuth 2.0 flow",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "OAuth 2.0",
      "Identity Provider"
    ],
    "prompt": "In an OAuth 2.0 setup with an external IdP as the client provider, which statement correctly describes the roles?",
    "options": [
      {
        "letter": "A",
        "text": "API Manager issues tokens; the IdP validates them"
      },
      {
        "letter": "B",
        "text": "The API client issues tokens to itself"
      },
      {
        "letter": "C",
        "text": "Exchange issues tokens when access is requested"
      },
      {
        "letter": "D",
        "text": "The IdP issues tokens; the policy validates them"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. With an external client provider, the identity provider acts as the OAuth 2.0 authorization server that issues access tokens. API clients obtain tokens from it and send them to APIs, where a token enforcement policy validates them.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Tokens are issued by the external provider."
      },
      "B": {
        "type": "Incorrect",
        "text": "Clients obtain tokens from the authorization server."
      },
      "C": {
        "type": "Incorrect",
        "text": "Exchange registers client apps but does not issue access tokens."
      },
      "D": {
        "type": "Correct",
        "text": "The provider is the authorization server, and the gateway enforces tokens."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Configuring an API for OAuth 2.0",
        "url": "https://docs.mulesoft.com/api-manager/latest/about-configure-api-for-oauth"
      },
      "secondary": {
        "title": "OpenID Connect OAuth 2.0 Token Enforcement Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-openid-token-enforcement"
      }
    }
  },
  {
    "id": "q-161",
    "number": 161,
    "title": "API Governance - Registering clients in the IdP",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "OAuth 2.0",
      "Dynamic Client Registration"
    ],
    "prompt": "When a consumer creates a client application in Exchange for an API in an environment that uses an OpenID Connect client provider, what happens?",
    "options": [
      {
        "letter": "A",
        "text": "It is registered with the identity provider through Dynamic Client Registration"
      },
      {
        "letter": "B",
        "text": "It is registered with the identity provider only if the consumer registers it manually first"
      },
      {
        "letter": "C",
        "text": "It receives a platform user account in the identity provider instead of a client identity"
      },
      {
        "letter": "D",
        "text": "It exists only in Anypoint Platform and cannot obtain tokens from the identity provider"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. With an OpenID Connect client provider that supports Dynamic Client Registration, creating a client application in Anypoint Platform registers the client in the identity provider, so it can obtain tokens. Manual registration (B) is what DCR removes, the consumer does not become a platform user (C), and the client can obtain tokens (D).",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Anypoint Platform registers the client with the provider through Dynamic Client Registration."
      },
      "B": {
        "type": "Incorrect",
        "text": "DCR removes the need for manual registration."
      },
      "C": {
        "type": "Incorrect",
        "text": "Client applications are not created as platform users."
      },
      "D": {
        "type": "Incorrect",
        "text": "The registration lets the client obtain tokens from the provider."
      }
    },
    "references": {
      "primary": {
        "title": "Configuring OpenID Connect Client Management",
        "url": "https://docs.mulesoft.com/access-management/configure-client-management-openid-task"
      },
      "secondary": {
        "title": "Client Management in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/managing-api-clients"
      }
    }
  },
  {
    "id": "q-162",
    "number": 162,
    "title": "API Governance - Different providers per environment",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "OAuth 2.0",
      "Business Groups"
    ],
    "prompt": "A company's retail business group must use PingFederate for its production APIs, while its sandbox uses the Anypoint default provider. Is this possible?",
    "options": [
      {
        "letter": "A",
        "text": "No, because a single client provider applies to the whole organization"
      },
      {
        "letter": "B",
        "text": "Yes, by assigning different client providers to different environments"
      },
      {
        "letter": "C",
        "text": "Only if the retail division is separated into its own Anypoint organization"
      },
      {
        "letter": "D",
        "text": "Only if PingFederate is also used for platform user sign-in"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Client providers are configured at the organization level and linked to environments, so retail's production environment can use PingFederate while its sandbox uses the Anypoint default provider. A single provider is not forced on the whole organization (A), a separate organization is unnecessary (C), and the provider is independent of platform sign-in (D).",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Providers are linked to environments, so different environments can use different providers."
      },
      "A": {
        "type": "Incorrect",
        "text": "Multiple providers can be configured and linked to different environments."
      },
      "C": {
        "type": "Incorrect",
        "text": "A separate organization is not required to vary providers by environment."
      },
      "D": {
        "type": "Incorrect",
        "text": "Client providers are independent of the identity provider used for platform sign-in."
      }
    },
    "references": {
      "primary": {
        "title": "Client Management in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/managing-api-clients"
      },
      "secondary": {
        "title": "PingFederate Access Token Enforcement Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-pingfederate-oauth-token-enforcement"
      }
    }
  },
  {
    "id": "q-163",
    "number": 163,
    "title": "API Governance - Choose two: OAuth 2.0 relationships",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "OAuth 2.0",
      "Client Management"
    ],
    "prompt": "A company secures its Experience APIs with OAuth 2.0, using PingFederate as the external identity provider for user authentication and a client provider registered in the environment for API clients. A new developer is confused about where client applications are registered and who issues the tokens. Which two statements about OAuth 2.0 on Anypoint Platform are correct?",
    "options": [
      {
        "letter": "A",
        "text": "Access tokens are stored in Exchange so that each request can be validated against them"
      },
      {
        "letter": "B",
        "text": "Business groups cannot use external client providers; only the root organization can"
      },
      {
        "letter": "C",
        "text": "Client applications are registered with the client provider linked to the environment"
      },
      {
        "letter": "D",
        "text": "Identity management providers issue the tokens that API clients present"
      },
      {
        "letter": "E",
        "text": "A token enforcement policy validates the tokens that the provider issues"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Correct answers: C and E. Client applications are registered with the client provider linked to the environment, and a token enforcement policy validates the tokens that the provider issues. Tokens are not stored in Exchange (A), business groups can use external client providers (B), and identity management is for platform users rather than API clients (D).",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Client applications are registered with the environment's linked client provider."
      },
      "E": {
        "type": "Correct",
        "text": "A token enforcement policy validates the tokens issued by the provider."
      },
      "A": {
        "type": "Incorrect",
        "text": "Access tokens are not stored in Exchange."
      },
      "B": {
        "type": "Incorrect",
        "text": "Business groups can use external client providers linked to their environments."
      },
      "D": {
        "type": "Incorrect",
        "text": "Identity management providers are for platform users, not API clients."
      }
    },
    "references": {
      "primary": {
        "title": "Client Management in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/managing-api-clients"
      },
      "secondary": {
        "title": "API Manager — Configuring an API for OAuth 2.0",
        "url": "https://docs.mulesoft.com/api-manager/latest/about-configure-api-for-oauth"
      }
    }
  },
  {
    "id": "q-164",
    "number": 164,
    "title": "API Governance - Need a custom policy",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Custom Policies",
      "Policies"
    ],
    "prompt": "Every request must carry an HMAC signature header computed with a partner-specific shared key, verified before reaching the implementation. No included policy supports this. What should the architect recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Use the Header Injection policy to add the expected signature before forwarding the request"
      },
      {
        "letter": "B",
        "text": "Use Client ID Enforcement, treating the HMAC value as the client secret"
      },
      {
        "letter": "C",
        "text": "Use JSON Threat Protection to validate the signature header on each request"
      },
      {
        "letter": "D",
        "text": "Develop a custom policy that verifies the HMAC signature and apply it in API Manager"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. When no included policy supports a proprietary signature scheme, a custom policy can implement the verification and be applied through API Manager. Header Injection (A) adds a header rather than verifying a signature, Client ID Enforcement (B) validates a client secret rather than an HMAC, and JSON Threat Protection (C) inspects payload structure.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "A custom policy can implement the HMAC verification and be applied through API Manager."
      },
      "A": {
        "type": "Incorrect",
        "text": "Header Injection adds a header; it does not verify a signature."
      },
      "B": {
        "type": "Incorrect",
        "text": "Client ID Enforcement validates a client secret, not an HMAC signature."
      },
      "C": {
        "type": "Incorrect",
        "text": "JSON Threat Protection inspects payload structure, not signatures."
      }
    },
    "references": {
      "primary": {
        "title": "Getting Started with Custom Policies",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-custom-getting-started"
      },
      "secondary": {
        "title": "Flex Gateway Policy Development Kit (PDK)",
        "url": "https://docs.mulesoft.com/pdk/latest/"
      }
    }
  },
  {
    "id": "q-165",
    "number": 165,
    "title": "API Governance - When a custom policy is unnecessary",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Custom Policies",
      "Included Policies"
    ],
    "prompt": "For which requirement should the architect avoid building a custom policy?",
    "options": [
      {
        "letter": "A",
        "text": "Limiting each client to a fixed number of requests per minute according to its SLA tier"
      },
      {
        "letter": "B",
        "text": "Calling an external fraud-scoring service before forwarding each request"
      },
      {
        "letter": "C",
        "text": "Verifying a proprietary signature scheme that the platform does not support"
      },
      {
        "letter": "D",
        "text": "Enforcing a company-specific header format with complex validation rules"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Per-client quotas by SLA tier are provided by the SLA-based Rate Limiting policy, so a custom policy would duplicate built-in behavior. Calling an external service (B), verifying a proprietary signature (C), and enforcing a custom header format (D) are all cases where no included policy fits and a custom policy is justified.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "SLA-based Rate Limiting already provides per-client quotas, so a custom policy is unnecessary."
      },
      "B": {
        "type": "Incorrect",
        "text": "Calling an external fraud service requires logic no included policy provides."
      },
      "C": {
        "type": "Incorrect",
        "text": "A proprietary signature scheme is a case for a custom policy."
      },
      "D": {
        "type": "Incorrect",
        "text": "Company-specific header validation is a case for a custom policy."
      }
    },
    "references": {
      "primary": {
        "title": "Rate Limiting: SLA-Based Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-rate-limiting-sla"
      },
      "secondary": {
        "title": "Getting Started with Custom Policies",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-custom-getting-started"
      }
    }
  },
  {
    "id": "q-166",
    "number": 166,
    "title": "API Governance - Custom policies for Flex Gateway",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Custom Policies",
      "Flex Gateway"
    ],
    "prompt": "A team needs a custom policy for APIs protected by Anypoint Flex Gateway. Which tool does MuleSoft provide for building it?",
    "options": [
      {
        "letter": "A",
        "text": "The Anypoint Visualizer custom layer editor"
      },
      {
        "letter": "B",
        "text": "The Flex Gateway Policy Development Kit (PDK)"
      },
      {
        "letter": "C",
        "text": "DataWeave scripts uploaded to Runtime Manager"
      },
      {
        "letter": "D",
        "text": "API fragments created in Design Center"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Custom policies for Flex Gateway are built with the Flex Gateway Policy Development Kit (PDK). Visualizer layers (A) are display groupings, DataWeave scripts (C) are not policies, and API fragments (D) are design-time contract pieces.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "The PDK is the toolkit MuleSoft provides for building Flex Gateway custom policies."
      },
      "A": {
        "type": "Incorrect",
        "text": "Visualizer custom layers are display groupings, not policy development."
      },
      "C": {
        "type": "Incorrect",
        "text": "DataWeave scripts are transformation logic, not deployable policies."
      },
      "D": {
        "type": "Incorrect",
        "text": "API fragments are design-time contract pieces, not policies."
      }
    },
    "references": {
      "primary": {
        "title": "Flex Gateway Policy Development Kit (PDK)",
        "url": "https://docs.mulesoft.com/pdk/latest/"
      },
      "secondary": {
        "title": "Getting Started with Custom Policies",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-custom-getting-started"
      }
    }
  },
  {
    "id": "q-167",
    "number": 167,
    "title": "API Governance - Publishing a custom policy",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Custom Policies",
      "Exchange"
    ],
    "prompt": "A team has built a Mule 4 custom policy. How is it made available for other API owners to apply?",
    "options": [
      {
        "letter": "A",
        "text": "Copy the policy XML into each Mule application"
      },
      {
        "letter": "B",
        "text": "Add it to the API specification as a trait"
      },
      {
        "letter": "C",
        "text": "Publish it to Exchange so it appears in API Manager"
      },
      {
        "letter": "D",
        "text": "Deploy it as a standalone application in Runtime Manager"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Custom policies are packaged and published to Exchange. API Manager then lists them alongside included policies, so API owners can apply and configure them consistently on API instances.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "This bypasses central management and versioning."
      },
      "B": {
        "type": "Incorrect",
        "text": "Traits describe APIs; they do not execute policies."
      },
      "D": {
        "type": "Incorrect",
        "text": "Policies are not deployed as applications."
      },
      "C": {
        "type": "Correct",
        "text": "Custom policies are Exchange assets that API Manager can apply."
      }
    },
    "references": {
      "primary": {
        "title": "Getting Started with Custom Policies",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-custom-getting-started"
      },
      "secondary": {
        "title": "Custom Policy Reference (Mule 4)",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-custom-mule-4-reference"
      }
    }
  },
  {
    "id": "q-168",
    "number": 168,
    "title": "API Governance - Choose two: scenarios for custom policies",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Custom Policies",
      "Scenarios"
    ],
    "prompt": "A delivery team is reviewing the security requirements for a governed API before requesting policies from the C4E. The requirements include IP allowlisting, protection against sudden traffic bursts, JWT signature validation against a JWKS endpoint, masking a proprietary account number format in responses, and authorizing each request against an internal entitlement service. Which two of these scenarios most likely require building a custom policy?",
    "options": [
      {
        "letter": "A",
        "text": "Allowing only requests from a fixed set of IP addresses"
      },
      {
        "letter": "B",
        "text": "Smoothing bursts of traffic to protect a backend"
      },
      {
        "letter": "C",
        "text": "Validating JWT signatures against a JWKS endpoint"
      },
      {
        "letter": "D",
        "text": "Masking a proprietary account number format in responses before they leave the gateway"
      },
      {
        "letter": "E",
        "text": "Calling an internal entitlement service to authorize each request"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Correct answers: D and E. Masking a proprietary account format and calling an internal entitlement service both require logic that no included policy provides, so they call for a custom policy. IP allowlisting (A), burst smoothing (B), and JWT validation (C) are all covered by included policies.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Masking a proprietary format requires custom logic that no included policy provides."
      },
      "E": {
        "type": "Correct",
        "text": "Calling an internal entitlement service requires a custom policy."
      },
      "A": {
        "type": "Incorrect",
        "text": "IP allowlisting is provided by the included IP Allowlist policy."
      },
      "B": {
        "type": "Incorrect",
        "text": "Burst smoothing is provided by the included Spike Control policy."
      },
      "C": {
        "type": "Incorrect",
        "text": "JWT validation is provided by the included JWT Validation policy."
      }
    },
    "references": {
      "primary": {
        "title": "Getting Started with Custom Policies",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-custom-getting-started"
      },
      "secondary": {
        "title": "Included Policies Directory",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-directory"
      }
    }
  },
  {
    "id": "q-169",
    "number": 169,
    "title": "Architecting and Deploying - Pairing an app with its API instance",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "API Autodiscovery",
      "API Manager"
    ],
    "prompt": "A Mule 4 application implements an API that has an API instance in API Manager. What must be configured in the application so that API Manager policies are enforced on it?",
    "options": [
      {
        "letter": "A",
        "text": "An API Autodiscovery element that references the API instance's API ID and the flow that serves the API"
      },
      {
        "letter": "B",
        "text": "The policy definitions copied into the application's configuration so the runtime can read them"
      },
      {
        "letter": "C",
        "text": "The API instance's API ID stored as an application property, without an Autodiscovery element"
      },
      {
        "letter": "D",
        "text": "A client ID enforcement flow written in DataWeave that validates the caller before each request"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. API Autodiscovery, configured with the API instance's API ID and the flow that serves the API, pairs the deployed application with its API instance so API Manager policies are enforced. Copying policy definitions (B) is not how policies are applied, the API ID alone without Autodiscovery (C) does not pair the application, and a hand-written DataWeave flow (D) is not policy enforcement.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Autodiscovery with the API ID and flowRef pairs the application with its API instance."
      },
      "B": {
        "type": "Incorrect",
        "text": "Policies are managed in API Manager; they are not copied into the application."
      },
      "C": {
        "type": "Incorrect",
        "text": "The API ID alone does not pair the application; an Autodiscovery element is required."
      },
      "D": {
        "type": "Incorrect",
        "text": "A hand-written DataWeave flow is not API Manager policy enforcement."
      }
    },
    "references": {
      "primary": {
        "title": "Configuring API Autodiscovery in a Mule 4 Application",
        "url": "https://docs.mulesoft.com/api-manager/latest/configure-autodiscovery-4-task"
      },
      "secondary": {
        "title": "API Autodiscovery",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-auto-discovery-new-concept"
      }
    }
  },
  {
    "id": "q-170",
    "number": 170,
    "title": "Architecting and Deploying - Credentials the runtime needs",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "API Autodiscovery",
      "Organization Credentials"
    ],
    "prompt": "A Mule application with a correctly configured autodiscovery element is deployed to a hybrid server, but it never pairs with its API instance. What is the most likely missing configuration?",
    "options": [
      {
        "letter": "A",
        "text": "An Exchange public portal for the API"
      },
      {
        "letter": "B",
        "text": "Organization credentials in the Mule runtime"
      },
      {
        "letter": "C",
        "text": "A dedicated load balancer in front of the server"
      },
      {
        "letter": "D",
        "text": "An MUnit test suite for the autodiscovery flow"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. To use autodiscovery, Mule runtime engine must start with Anypoint Platform organization credentials (the environment's client ID and secret) configured. Without them, the runtime cannot connect to API Manager to pair with the API instance and download policies.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Portals are for documentation and do not affect pairing."
      },
      "C": {
        "type": "Incorrect",
        "text": "Load balancing does not affect pairing with API Manager."
      },
      "D": {
        "type": "Incorrect",
        "text": "Tests do not establish the runtime's connection to API Manager."
      },
      "B": {
        "type": "Correct",
        "text": "The runtime needs environment credentials to connect to API Manager."
      }
    },
    "references": {
      "primary": {
        "title": "Configuring API Autodiscovery in a Mule 4 Application",
        "url": "https://docs.mulesoft.com/api-manager/latest/configure-autodiscovery-4-task"
      },
      "secondary": {
        "title": "Mule Gateway — Autodiscovery (Mule 4)",
        "url": "https://docs.mulesoft.com/mule-gateway/mule-gateway-config-autodiscovery-mule4"
      }
    }
  },
  {
    "id": "q-171",
    "number": 171,
    "title": "Architecting and Deploying - Different API IDs per environment",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "API Autodiscovery",
      "Environments"
    ],
    "prompt": "The same Mule application artifact is promoted from QA to production. Each environment has its own API instance with a different API ID. How should the autodiscovery API ID be handled?",
    "options": [
      {
        "letter": "A",
        "text": "Rebuild the application with a different hard-coded ID for each environment"
      },
      {
        "letter": "B",
        "text": "Use the same API instance for both environments"
      },
      {
        "letter": "C",
        "text": "Reference it as a property and set it per environment at deployment"
      },
      {
        "letter": "D",
        "text": "Hard-code the production API ID, since QA does not need policies"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Each environment has its own API instance and API ID. Configuring the autodiscovery apiId as a property placeholder, set per environment at deployment, lets the same artifact pair with the correct instance in each environment.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Rebuilding per environment breaks the build-once, promote-everywhere practice."
      },
      "C": {
        "type": "Correct",
        "text": "Externalizing the ID lets one artifact pair with each environment's instance."
      },
      "B": {
        "type": "Incorrect",
        "text": "API instances belong to a single environment."
      },
      "D": {
        "type": "Incorrect",
        "text": "QA would not be governed, and policies would not be tested."
      }
    },
    "references": {
      "primary": {
        "title": "Configuring API Autodiscovery in a Mule 4 Application",
        "url": "https://docs.mulesoft.com/api-manager/latest/configure-autodiscovery-4-task"
      },
      "secondary": {
        "title": "Mule Runtime — Configuring Properties",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/configuring-properties"
      }
    }
  },
  {
    "id": "q-172",
    "number": 172,
    "title": "Architecting and Deploying - Requests blocked after deployment",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "API Autodiscovery",
      "Gatekeeper"
    ],
    "prompt": "Right after an application with autodiscovery starts, requests to its API are rejected until the runtime finishes downloading policies from API Manager. Which Mule gateway behavior explains this?",
    "options": [
      {
        "letter": "A",
        "text": "Spike Control queues the requests until the policies are downloaded"
      },
      {
        "letter": "B",
        "text": "API Manager deletes the API instance until the application is restarted"
      },
      {
        "letter": "C",
        "text": "The HTTP listener is disabled until the MUnit tests have passed"
      },
      {
        "letter": "D",
        "text": "Gatekeeper blocks the API until its policies have been applied"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. The Mule gateway's gatekeeper blocks API requests until all of the API's policies have been applied, so an API is never exposed unprotected while policies are still downloading. Spike Control (A) is a policy that runs after policies load, API Manager does not delete instances (B), and MUnit tests (C) run at build time.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Gatekeeper prevents requests from passing before policies are in place."
      },
      "A": {
        "type": "Incorrect",
        "text": "Spike Control is a policy and does not run before policies load."
      },
      "B": {
        "type": "Incorrect",
        "text": "API Manager does not delete instances during pairing."
      },
      "C": {
        "type": "Incorrect",
        "text": "MUnit tests run at build time, not at application startup."
      }
    },
    "references": {
      "primary": {
        "title": "Mule Gateway — Gatekeeper",
        "url": "https://docs.mulesoft.com/mule-gateway/mule-gateway-gatekeeper"
      },
      "secondary": {
        "title": "Mule Gateway — Autodiscovery (Mule 4)",
        "url": "https://docs.mulesoft.com/mule-gateway/mule-gateway-config-autodiscovery-mule4"
      }
    }
  },
  {
    "id": "q-173",
    "number": 173,
    "title": "Architecting and Deploying - Flow to reference",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "API Autodiscovery",
      "flowRef"
    ],
    "prompt": "An APIkit-based Mule application has a main flow with an HTTP Listener and APIkit Router, plus many resource flows. Which flow should the autodiscovery flowRef reference?",
    "options": [
      {
        "letter": "A",
        "text": "The main flow that contains the HTTP Listener"
      },
      {
        "letter": "B",
        "text": "Any flow; the reference is ignored at runtime"
      },
      {
        "letter": "C",
        "text": "The error-handling flow, so policies apply to errors"
      },
      {
        "letter": "D",
        "text": "Every resource flow, using a separate autodiscovery element each"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. The autodiscovery flowRef must point to a flow that uses an HTTP Listener. In an APIkit application, this is the main flow that receives requests and routes them, so policies are applied to all API traffic.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "The referenced flow determines where policies are enforced."
      },
      "C": {
        "type": "Incorrect",
        "text": "Policies apply to incoming requests, not to error handlers."
      },
      "D": {
        "type": "Incorrect",
        "text": "One autodiscovery element pairs the app with its API instance."
      },
      "A": {
        "type": "Correct",
        "text": "Policies are enforced on the flow that receives HTTP requests."
      }
    },
    "references": {
      "primary": {
        "title": "Configuring API Autodiscovery in a Mule 4 Application",
        "url": "https://docs.mulesoft.com/api-manager/latest/configure-autodiscovery-4-task"
      },
      "secondary": {
        "title": "API Autodiscovery",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-auto-discovery-new-concept"
      }
    }
  },
  {
    "id": "q-174",
    "number": 174,
    "title": "Architecting and Deploying - Proxy generated by API Manager",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "API Autodiscovery",
      "API Proxy"
    ],
    "prompt": "An API Manager–generated API proxy is deployed in front of a non-Mule backend. How is the proxy linked to its API instance?",
    "options": [
      {
        "letter": "A",
        "text": "The proxy is linked through its Exchange asset page"
      },
      {
        "letter": "B",
        "text": "The generated proxy already has autodiscovery"
      },
      {
        "letter": "C",
        "text": "The backend must add an autodiscovery element"
      },
      {
        "letter": "D",
        "text": "Clients pass the API ID in each request"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. When API Manager generates an API proxy for an instance, the proxy application is created with the autodiscovery element already configured, so it pairs with the instance and enforces policies before forwarding requests to the backend.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Exchange does not pair runtime applications."
      },
      "B": {
        "type": "Correct",
        "text": "API Manager configures the proxy with the instance's API ID."
      },
      "C": {
        "type": "Incorrect",
        "text": "The backend is not a Mule app and does not pair with API Manager."
      },
      "D": {
        "type": "Incorrect",
        "text": "Clients do not perform the pairing."
      }
    },
    "references": {
      "primary": {
        "title": "Configuring API Autodiscovery in a Mule 4 Application",
        "url": "https://docs.mulesoft.com/api-manager/latest/configure-autodiscovery-4-task"
      },
      "secondary": {
        "title": "API Manager — API Proxies",
        "url": "https://docs.mulesoft.com/api-manager/latest/proxy-latest-concept"
      }
    }
  },
  {
    "id": "q-175",
    "number": 175,
    "title": "Architecting and Deploying - Choose two: autodiscovery facts",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "API Autodiscovery",
      "API Manager"
    ],
    "prompt": "A Mule application that implements the Customer API will be deployed to both Staging and Production. The team wants the application to register itself with the correct API instance in API Manager at startup without manual pairing steps. During a design review, the architect is asked to confirm how API Autodiscovery behaves. Which two statements about API Autodiscovery are correct?",
    "options": [
      {
        "letter": "A",
        "text": "It can pair a single application with API instances in several environments at once"
      },
      {
        "letter": "B",
        "text": "It requires no Anypoint Platform credentials, because pairing uses the API ID alone"
      },
      {
        "letter": "C",
        "text": "It pairs a deployed Mule application with one API instance"
      },
      {
        "letter": "D",
        "text": "It publishes the application's API specification to Exchange when the application starts"
      },
      {
        "letter": "E",
        "text": "The flow referenced by the Autodiscovery element must use an HTTP Listener"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Correct answers: C and E. Autodiscovery pairs a deployed Mule application with one API instance, and the flow it references must use an HTTP Listener so the gateway can intercept requests. An application pairs with one instance in one environment (A), it needs platform credentials to reach API Manager (B), and it does not publish specifications to Exchange (D).",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Autodiscovery pairs the deployed application with one API instance."
      },
      "A": {
        "type": "Incorrect",
        "text": "An application pairs with one instance in one environment, not several at once."
      },
      "B": {
        "type": "Incorrect",
        "text": "Autodiscovery needs platform credentials to reach API Manager."
      },
      "D": {
        "type": "Incorrect",
        "text": "Publishing specifications to Exchange is separate from Autodiscovery."
      },
      "E": {
        "type": "Correct",
        "text": "The referenced flow must use an HTTP Listener so the gateway can intercept requests."
      }
    },
    "references": {
      "primary": {
        "title": "Configuring API Autodiscovery in a Mule 4 Application",
        "url": "https://docs.mulesoft.com/api-manager/latest/configure-autodiscovery-4-task"
      },
      "secondary": {
        "title": "Mule Gateway — Autodiscovery (Mule 4)",
        "url": "https://docs.mulesoft.com/mule-gateway/mule-gateway-config-autodiscovery-mule4"
      }
    }
  },
  {
    "id": "q-176",
    "number": 176,
    "title": "Architecting and Deploying - Reaching on-premises systems",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "Anypoint VPC",
      "Connectivity"
    ],
    "prompt": "Mule applications on CloudHub must call an on-premises SAP system that is reachable only from inside the corporate network. Which capability is required?",
    "options": [
      {
        "letter": "A",
        "text": "A larger worker size for the applications"
      },
      {
        "letter": "B",
        "text": "The HTTP Caching policy on the SAP System API"
      },
      {
        "letter": "C",
        "text": "An Exchange public portal for the SAP System API"
      },
      {
        "letter": "D",
        "text": "An Anypoint VPC with a VPN or transit gateway"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. An Anypoint VPC creates a private, isolated network segment for CloudHub workers. Connecting it to the corporate network through a VPN tunnel, transit gateway, VPC peering, or Direct Connect lets workers access resources behind the corporate firewall.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Worker size does not provide network connectivity."
      },
      "B": {
        "type": "Incorrect",
        "text": "Caching does not create private connectivity."
      },
      "D": {
        "type": "Correct",
        "text": "The VPC extends the corporate network so workers can reach internal systems."
      },
      "C": {
        "type": "Incorrect",
        "text": "Portals document APIs and do not affect networking."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Virtual Private Cloud",
        "url": "https://docs.mulesoft.com/cloudhub/virtual-private-cloud"
      },
      "secondary": {
        "title": "Anypoint VPC Connectivity Methods",
        "url": "https://docs.mulesoft.com/cloudhub/vpc-connectivity-methods-concept"
      }
    }
  },
  {
    "id": "q-177",
    "number": 177,
    "title": "Architecting and Deploying - Custom certificates and domains",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "Anypoint VPC",
      "Dedicated Load Balancer"
    ],
    "prompt": "A company wants its CloudHub APIs exposed at api.company.com with its own TLS certificate and URL mapping rules. What does this require?",
    "options": [
      {
        "letter": "A",
        "text": "A dedicated load balancer inside an Anypoint VPC, with the certificate and URL mapping rules configured on it"
      },
      {
        "letter": "B",
        "text": "The CloudHub shared load balancer with a DNS alias and the certificate uploaded to the application"
      },
      {
        "letter": "C",
        "text": "A Rate Limiting policy configured with the custom domain name"
      },
      {
        "letter": "D",
        "text": "A VPC firewall rule that maps the custom domain to the application's workers"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Custom domains, customer-supplied certificates, and URL mapping rules require a dedicated load balancer, which is associated with an Anypoint VPC. The shared load balancer uses MuleSoft-managed certificates and a cloudhub.io domain (B), a rate limiting policy does not map domains (C), and a firewall rule does not perform URL mapping (D).",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "A dedicated load balancer supports custom domains, customer certificates, and URL mapping rules."
      },
      "B": {
        "type": "Incorrect",
        "text": "The shared load balancer uses MuleSoft-managed certificates and domains."
      },
      "C": {
        "type": "Incorrect",
        "text": "Rate limiting governs traffic, not domain mapping."
      },
      "D": {
        "type": "Incorrect",
        "text": "A firewall rule filters traffic; it does not map a domain to workers."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Dedicated Load Balancer",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-dedicated-load-balancer"
      },
      "secondary": {
        "title": "Anypoint Virtual Private Cloud",
        "url": "https://docs.mulesoft.com/cloudhub/virtual-private-cloud"
      }
    }
  },
  {
    "id": "q-178",
    "number": 178,
    "title": "Architecting and Deploying - Restricting inbound traffic",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "Anypoint VPC",
      "Firewall Rules"
    ],
    "prompt": "A security policy states that internal CloudHub APIs must accept connections only from the corporate network's IP range and never from the public internet. What should the architect use?",
    "options": [
      {
        "letter": "A",
        "text": "Client ID Enforcement configured with the corporate network's identifiers"
      },
      {
        "letter": "B",
        "text": "VPC firewall rules that permit only the corporate CIDR block"
      },
      {
        "letter": "C",
        "text": "An Exchange private portal shared only with the corporate network"
      },
      {
        "letter": "D",
        "text": "CORS restricted to the corporate domain so only corporate browsers can connect"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Network-level restriction is enforced with VPC firewall rules that permit only the corporate CIDR block, so no request from the public internet reaches the workers. Client ID Enforcement (A) authenticates applications rather than source networks, an Exchange private portal (C) controls asset visibility, and CORS (D) governs browser origins.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "VPC firewall rules restrict inbound traffic to the corporate CIDR block."
      },
      "A": {
        "type": "Incorrect",
        "text": "Client ID Enforcement authenticates applications, not source networks."
      },
      "C": {
        "type": "Incorrect",
        "text": "An Exchange private portal controls asset visibility, not network access."
      },
      "D": {
        "type": "Incorrect",
        "text": "CORS governs browser origins, not which networks may connect."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint VPC Firewall Rules",
        "url": "https://docs.mulesoft.com/cloudhub/vpc-firewall-rules-concept"
      },
      "secondary": {
        "title": "Anypoint Virtual Private Cloud",
        "url": "https://docs.mulesoft.com/cloudhub/virtual-private-cloud"
      }
    }
  },
  {
    "id": "q-179",
    "number": 179,
    "title": "Architecting and Deploying - When a VPC is not needed",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "Anypoint VPC",
      "Requirements"
    ],
    "prompt": "For which requirement is an Anypoint VPC least likely to be necessary?",
    "options": [
      {
        "letter": "A",
        "text": "Using a dedicated load balancer with the company's own certificates"
      },
      {
        "letter": "B",
        "text": "Connecting to a database in the company's own AWS VPC over private IPs"
      },
      {
        "letter": "C",
        "text": "Calling a public SaaS API over the internet from a CloudHub application"
      },
      {
        "letter": "D",
        "text": "Allowing only corporate IP ranges to reach the CloudHub workers"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. An Anypoint VPC provides private networking, custom load balancing, and firewall control; calling a public SaaS API over the internet needs none of these. A dedicated load balancer with custom certificates (A), private connectivity to an AWS VPC (B), and restricting inbound traffic to corporate ranges (D) all depend on a VPC.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "A public SaaS API is reached over the internet, so no private networking is required."
      },
      "A": {
        "type": "Incorrect",
        "text": "A dedicated load balancer requires an Anypoint VPC."
      },
      "B": {
        "type": "Incorrect",
        "text": "Private connectivity to an AWS VPC requires an Anypoint VPC."
      },
      "D": {
        "type": "Incorrect",
        "text": "Restricting inbound traffic to corporate ranges is done with VPC firewall rules."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Virtual Private Cloud",
        "url": "https://docs.mulesoft.com/cloudhub/virtual-private-cloud"
      },
      "secondary": {
        "title": "Anypoint VPC Connectivity Methods",
        "url": "https://docs.mulesoft.com/cloudhub/vpc-connectivity-methods-concept"
      }
    }
  },
  {
    "id": "q-180",
    "number": 180,
    "title": "Architecting and Deploying - Planning the VPC address range",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "Anypoint VPC",
      "Provisioning"
    ],
    "prompt": "When provisioning an Anypoint VPC that will connect to the corporate network through a VPN, what must the architect ensure about its CIDR block?",
    "options": [
      {
        "letter": "A",
        "text": "It must match the corporate network's CIDR block exactly so routes line up"
      },
      {
        "letter": "B",
        "text": "It must be a public IP range that MuleSoft owns and routes to the customer"
      },
      {
        "letter": "C",
        "text": "It can be changed freely after applications have been deployed to the VPC"
      },
      {
        "letter": "D",
        "text": "It must not overlap with the corporate network ranges it will connect to"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Because the VPC is connected to the corporate network over a VPN, its CIDR block must not overlap the corporate ranges, or routing becomes ambiguous. It does not have to match them (A), it is a private range rather than a MuleSoft-owned public range (B), and it cannot be changed freely once applications are deployed (C).",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Overlapping CIDR blocks would make routing ambiguous across the VPN."
      },
      "A": {
        "type": "Incorrect",
        "text": "Matching the corporate CIDR exactly would itself create an overlap."
      },
      "B": {
        "type": "Incorrect",
        "text": "An Anypoint VPC uses a private address range, not a MuleSoft-owned public range."
      },
      "C": {
        "type": "Incorrect",
        "text": "The VPC address range cannot be changed freely after deployment."
      }
    },
    "references": {
      "primary": {
        "title": "Provisioning an Anypoint VPC",
        "url": "https://docs.mulesoft.com/cloudhub/vpc-provisioning-concept"
      },
      "secondary": {
        "title": "Anypoint VPC Connectivity Methods",
        "url": "https://docs.mulesoft.com/cloudhub/vpc-connectivity-methods-concept"
      }
    }
  },
  {
    "id": "q-181",
    "number": 181,
    "title": "Architecting and Deploying - Separate networks for prod and non-prod",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "Anypoint VPC",
      "Environments"
    ],
    "prompt": "A company wants production applications isolated in one network and QA and staging applications in another. How can Anypoint VPCs support this?",
    "options": [
      {
        "letter": "A",
        "text": "One VPC for production, another for non-production"
      },
      {
        "letter": "B",
        "text": "Create a separate Anypoint organization for each environment"
      },
      {
        "letter": "C",
        "text": "Use one VPC and separate environments by worker size"
      },
      {
        "letter": "D",
        "text": "Deploy QA to the shared load balancer and production to Exchange"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. The base Anypoint VPC subscription includes two VPCs, and each VPC can be associated with multiple environments. A common pattern is one VPC for production and one for non-production environments.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "Separate organizations are unnecessary for network isolation."
      },
      "C": {
        "type": "Incorrect",
        "text": "Worker size does not isolate networks."
      },
      "D": {
        "type": "Incorrect",
        "text": "Exchange does not host applications."
      },
      "A": {
        "type": "Correct",
        "text": "Each VPC can be associated with multiple environments."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Virtual Private Cloud",
        "url": "https://docs.mulesoft.com/cloudhub/virtual-private-cloud"
      },
      "secondary": {
        "title": "Provisioning an Anypoint VPC",
        "url": "https://docs.mulesoft.com/cloudhub/vpc-provisioning-concept"
      }
    }
  },
  {
    "id": "q-182",
    "number": 182,
    "title": "Architecting and Deploying - CloudHub 2.0 equivalent",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "Private Spaces",
      "CloudHub 2.0"
    ],
    "prompt": "A team moving from CloudHub to CloudHub 2.0 needs private connectivity to its data center and network isolation, as it had with its Anypoint VPC. What should it use?",
    "options": [
      {
        "letter": "A",
        "text": "A Flex Gateway in the shared space"
      },
      {
        "letter": "B",
        "text": "A CloudHub 2.0 private space"
      },
      {
        "letter": "C",
        "text": "An Anypoint VPC attached directly to CloudHub 2.0 replicas"
      },
      {
        "letter": "D",
        "text": "A CloudHub 2.0 shared space with firewall rules"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. In CloudHub 2.0, private spaces are virtual, private, and isolated logical spaces for running applications. They support private connectivity, such as VPN or transit gateway, and network controls similar to Anypoint VPCs in CloudHub.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Private spaces provide isolated networking and private connectivity."
      },
      "A": {
        "type": "Incorrect",
        "text": "A gateway does not create private network connectivity."
      },
      "C": {
        "type": "Incorrect",
        "text": "CloudHub 2.0 uses private spaces for this purpose."
      },
      "D": {
        "type": "Incorrect",
        "text": "Shared spaces do not provide private connectivity to the data center."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub 2.0 Private Spaces",
        "url": "https://docs.mulesoft.com/cloudhub-2/ch2-private-space-about"
      },
      "secondary": {
        "title": "CloudHub 2.0 Overview",
        "url": "https://docs.mulesoft.com/cloudhub-2/"
      }
    }
  },
  {
    "id": "q-183",
    "number": 183,
    "title": "Architecting and Deploying - Who patches the runtime",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "Runtime Plane",
      "Responsibilities"
    ],
    "prompt": "A company is comparing hybrid standalone Mule runtimes with CloudHub 2.0. Who is responsible for installing and patching Mule runtime engine in each option?",
    "options": [
      {
        "letter": "A",
        "text": "The customer for both options"
      },
      {
        "letter": "B",
        "text": "MuleSoft for both options"
      },
      {
        "letter": "C",
        "text": "The customer for hybrid; MuleSoft for CloudHub 2.0"
      },
      {
        "letter": "D",
        "text": "MuleSoft for hybrid; the customer for CloudHub 2.0"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. With hybrid standalone runtimes, the customer installs, upgrades, and operates Mule runtime engine on its own servers, managed from the control plane. CloudHub 2.0 is a fully managed iPaaS in which MuleSoft runs the infrastructure and runtimes.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "CloudHub 2.0 runtimes are managed by MuleSoft."
      },
      "B": {
        "type": "Incorrect",
        "text": "MuleSoft does not operate customer servers."
      },
      "C": {
        "type": "Correct",
        "text": "Hybrid runtimes are customer-operated; CloudHub 2.0 is fully managed."
      },
      "D": {
        "type": "Incorrect",
        "text": "These responsibilities are reversed."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Platform Hosting Overview",
        "url": "https://docs.mulesoft.com/hosting-home/"
      },
      "secondary": {
        "title": "Deploying to Your Own Servers (Hybrid)",
        "url": "https://docs.mulesoft.com/runtime-manager/deploying-to-your-own-servers"
      }
    }
  },
  {
    "id": "q-184",
    "number": 184,
    "title": "Architecting and Deploying - High availability on own servers",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "Runtime Plane",
      "Clusters"
    ],
    "prompt": "A company runs hybrid Mule runtimes on four on-premises servers. It needs applications that share state and coordinate so that, if one server fails, processing continues. What should it configure?",
    "options": [
      {
        "letter": "A",
        "text": "Four separate environments"
      },
      {
        "letter": "B",
        "text": "A server group"
      },
      {
        "letter": "C",
        "text": "Four CloudHub workers"
      },
      {
        "letter": "D",
        "text": "A Mule cluster in Runtime Manager"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. In hybrid deployments, Runtime Manager can group servers. A server group deploys the same applications to several servers without coordination, while a cluster shares state and coordinates processing, providing high availability and failover.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Environments separate configurations; they do not provide failover."
      },
      "D": {
        "type": "Correct",
        "text": "Clusters share state and coordinate processing across servers."
      },
      "B": {
        "type": "Incorrect",
        "text": "Server groups deploy the same apps but do not share state or coordinate."
      },
      "C": {
        "type": "Incorrect",
        "text": "CloudHub workers are not the company's on-premises servers."
      }
    },
    "references": {
      "primary": {
        "title": "Runtime Manager — Clusters",
        "url": "https://docs.mulesoft.com/runtime-manager/cluster-about"
      },
      "secondary": {
        "title": "Runtime Manager — Server Groups",
        "url": "https://docs.mulesoft.com/runtime-manager/server-group-about"
      }
    }
  },
  {
    "id": "q-185",
    "number": 185,
    "title": "Architecting and Deploying - Kubernetes expertise",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "Runtime Plane",
      "Runtime Fabric"
    ],
    "prompt": "A company is considering Runtime Fabric on its own self-managed Kubernetes clusters. What should it plan for?",
    "options": [
      {
        "letter": "A",
        "text": "Its own team must operate and secure the Kubernetes clusters"
      },
      {
        "letter": "B",
        "text": "No Kubernetes skills are needed because RTF hides Kubernetes"
      },
      {
        "letter": "C",
        "text": "Applications cannot be managed from Runtime Manager"
      },
      {
        "letter": "D",
        "text": "MuleSoft will patch the company's Kubernetes nodes"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Runtime Fabric runs Mule applications and gateways on customer infrastructure. On self-managed Kubernetes, the customer is responsible for the Kubernetes clusters, while MuleSoft provides orchestration of Mule runtimes and centralized management.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "Customers must operate the underlying Kubernetes."
      },
      "A": {
        "type": "Correct",
        "text": "On self-managed Kubernetes, the customer owns the infrastructure."
      },
      "C": {
        "type": "Incorrect",
        "text": "RTF applications are managed from Anypoint Platform."
      },
      "D": {
        "type": "Incorrect",
        "text": "MuleSoft provides runtime orchestration, not node management."
      }
    },
    "references": {
      "primary": {
        "title": "Runtime Fabric on Self-Managed Kubernetes",
        "url": "https://docs.mulesoft.com/runtime-fabric/latest/install-self-managed"
      },
      "secondary": {
        "title": "Anypoint Runtime Fabric Overview",
        "url": "https://docs.mulesoft.com/runtime-fabric/latest/"
      }
    }
  },
  {
    "id": "q-186",
    "number": 186,
    "title": "Architecting and Deploying - Comparing options for isolation",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "Runtime Plane",
      "Runtime Fabric"
    ],
    "prompt": "An organization wants to run Mule applications in containers on its own infrastructure, with resource isolation between applications and centralized management. Which option fits better than hybrid standalone runtimes?",
    "options": [
      {
        "letter": "A",
        "text": "Hybrid server groups, which group standalone Mule runtimes for coordinated deployment"
      },
      {
        "letter": "B",
        "text": "Anypoint Runtime Fabric, which runs containerized Mule applications on customer-managed Kubernetes"
      },
      {
        "letter": "C",
        "text": "Anypoint Platform PCE alone, which isolates the control plane but not the runtimes"
      },
      {
        "letter": "D",
        "text": "CloudHub shared load balancer, which distributes requests across the applications"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Runtime Fabric runs Mule applications as containers on customer-managed Kubernetes with resource isolation between applications and centralized management from Anypoint Platform. Hybrid server groups (A) use standalone runtimes without container isolation, PCE alone (C) isolates the control plane rather than the runtimes, and a shared load balancer (D) is a CloudHub networking feature.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Runtime Fabric provides container-based isolation on customer Kubernetes with centralized management."
      },
      "A": {
        "type": "Incorrect",
        "text": "Server groups coordinate standalone runtimes without container isolation."
      },
      "C": {
        "type": "Incorrect",
        "text": "PCE isolates the control plane; it does not provide container runtime isolation."
      },
      "D": {
        "type": "Incorrect",
        "text": "A shared load balancer is a CloudHub networking feature, not a runtime option."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Runtime Fabric Overview",
        "url": "https://docs.mulesoft.com/runtime-fabric/latest/"
      },
      "secondary": {
        "title": "Anypoint Platform Hosting Overview",
        "url": "https://docs.mulesoft.com/hosting-home/"
      }
    }
  },
  {
    "id": "q-187",
    "number": 187,
    "title": "Architecting and Deploying - Choose two: MuleSoft-managed runtime options",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "Runtime Plane",
      "Hosting"
    ],
    "prompt": "A company evaluating deployment options must run Mule applications in production with zero infrastructure responsibility, including provisioning, patching, and scaling of the runtime hosts. The CIO insists everything below the control plane be handled by MuleSoft. Which two runtime plane options are fully managed by MuleSoft, including the infrastructure?",
    "options": [
      {
        "letter": "A",
        "text": "Runtime Fabric"
      },
      {
        "letter": "B",
        "text": "Hybrid standalone runtimes"
      },
      {
        "letter": "C",
        "text": "CloudHub"
      },
      {
        "letter": "D",
        "text": "On-premises runtimes configured without a control-plane connection"
      },
      {
        "letter": "E",
        "text": "CloudHub 2.0"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Correct answers: C and E. CloudHub and CloudHub 2.0 are fully managed by MuleSoft, including the underlying infrastructure. Runtime Fabric (A) runs on customer-managed Kubernetes, hybrid standalone runtimes (B) run on customer-managed hosts, and disconnected on-premises runtimes (D) are customer-managed by definition.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "CloudHub is fully managed by MuleSoft, including the infrastructure."
      },
      "E": {
        "type": "Correct",
        "text": "CloudHub 2.0 is fully managed by MuleSoft, including the infrastructure."
      },
      "A": {
        "type": "Incorrect",
        "text": "Runtime Fabric runs on customer-managed Kubernetes."
      },
      "B": {
        "type": "Incorrect",
        "text": "Hybrid standalone runtimes run on customer-managed hosts."
      },
      "D": {
        "type": "Incorrect",
        "text": "Disconnected on-premises runtimes are customer-managed."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Platform Hosting Overview",
        "url": "https://docs.mulesoft.com/hosting-home/"
      },
      "secondary": {
        "title": "CloudHub 2.0 Overview",
        "url": "https://docs.mulesoft.com/cloudhub-2/"
      }
    }
  },
  {
    "id": "q-188",
    "number": 188,
    "title": "Architecting and Deploying - Low-latency access to on-prem data",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "Runtime Plane",
      "Hybrid"
    ],
    "prompt": "A System API makes many fine-grained calls to an on-premises mainframe, and latency through a VPN from the cloud is too high. Which runtime plane choice best reduces latency?",
    "options": [
      {
        "letter": "A",
        "text": "Move the Experience API to a larger CloudHub 2.0 replica"
      },
      {
        "letter": "B",
        "text": "Apply the HTTP Caching policy to every Process API in the chain"
      },
      {
        "letter": "C",
        "text": "Increase the CloudHub worker size so each call completes faster"
      },
      {
        "letter": "D",
        "text": "Run the System API on a customer-hosted runtime located near the mainframe"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Placing the runtime that makes the fine-grained calls near the mainframe removes the network latency of sending each call across the VPN. A larger Experience replica (A) or a larger CloudHub worker (C) does not shorten the distance to the mainframe, and caching (B) does not help fine-grained calls to a changing system of record.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "A customer-hosted runtime near the mainframe removes the per-call network latency."
      },
      "A": {
        "type": "Incorrect",
        "text": "A larger Experience replica does not shorten the distance to the mainframe."
      },
      "B": {
        "type": "Incorrect",
        "text": "Caching does not help fine-grained calls to a changing system of record."
      },
      "C": {
        "type": "Incorrect",
        "text": "A larger worker does not reduce the network distance."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Platform Hosting Overview",
        "url": "https://docs.mulesoft.com/hosting-home/"
      },
      "secondary": {
        "title": "Deploying to Your Own Servers (Hybrid)",
        "url": "https://docs.mulesoft.com/runtime-manager/deploying-to-your-own-servers"
      }
    }
  },
  {
    "id": "q-189",
    "number": 189,
    "title": "Architecting and Deploying - Where MUnit fits best",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "MUnit",
      "Unit Testing"
    ],
    "prompt": "A team wants fast automated tests that verify a Mule flow's routing, transformations, and error handling on every build, without calling real backends. What should it use?",
    "options": [
      {
        "letter": "A",
        "text": "MUnit tests with the connectors mocked so the flow runs in isolation"
      },
      {
        "letter": "B",
        "text": "Postman tests run manually against the production deployment"
      },
      {
        "letter": "C",
        "text": "Load tests run against a sandbox environment"
      },
      {
        "letter": "D",
        "text": "Anypoint Monitoring alerts configured on the sandbox environment"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. MUnit is the testing framework for Mule applications and is best for unit tests that exercise flows, transformations, and error handling in isolation, with mocks replacing calls to external systems. Manual production tests (B) are slow and risky, load tests (C) measure performance rather than logic, and monitoring alerts (D) detect runtime problems rather than build-time regressions.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "MUnit runs flows in isolation with mocks replacing external calls."
      },
      "B": {
        "type": "Incorrect",
        "text": "Manual production tests are slow and risky."
      },
      "C": {
        "type": "Incorrect",
        "text": "Load tests measure performance, not logic correctness."
      },
      "D": {
        "type": "Incorrect",
        "text": "Monitoring alerts detect runtime problems, not build-time regressions."
      }
    },
    "references": {
      "primary": {
        "title": "MUnit Overview",
        "url": "https://docs.mulesoft.com/munit/latest/"
      },
      "secondary": {
        "title": "MUnit — Mock When Event Processor",
        "url": "https://docs.mulesoft.com/munit/latest/mock-event-processor"
      }
    }
  },
  {
    "id": "q-190",
    "number": 190,
    "title": "Architecting and Deploying - Unit versus integration test",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "Testing",
      "Integration Tests"
    ],
    "prompt": "A lead developer is defining the testing strategy for a Mule implementation of the Orders API. The team wants fast feedback on every commit and confidence that the flows work against the real SAP and database systems before deploying to Staging. Which statement correctly distinguishes unit tests from integration tests for an API implementation?",
    "options": [
      {
        "letter": "A",
        "text": "Unit tests run in production; integration tests run on developer laptops"
      },
      {
        "letter": "B",
        "text": "Unit tests use mocks; integration tests use real systems"
      },
      {
        "letter": "C",
        "text": "They are the same, but integration tests use MUnit"
      },
      {
        "letter": "D",
        "text": "Unit tests need a deployed app; integration tests do not"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Unit tests verify an application's own logic in isolation, replacing external dependencies with mocks. Integration tests exercise the application with its real dependencies, such as backends and networks, typically in a deployed environment.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Neither type is defined by running in production."
      },
      "B": {
        "type": "Correct",
        "text": "The difference is whether external systems are replaced or called."
      },
      "C": {
        "type": "Incorrect",
        "text": "The scope of the test differs."
      },
      "D": {
        "type": "Incorrect",
        "text": "Unit tests can run in the build without deployment."
      }
    },
    "references": {
      "primary": {
        "title": "MUnit — Test Concepts",
        "url": "https://docs.mulesoft.com/munit/latest/munit-test-concept"
      },
      "secondary": {
        "title": "MUnit Overview",
        "url": "https://docs.mulesoft.com/munit/latest/"
      }
    }
  },
  {
    "id": "q-191",
    "number": 191,
    "title": "Architecting and Deploying - Mocking a backend call",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "MUnit",
      "Mocking"
    ],
    "prompt": "A flow calls a Salesforce connector and transforms the result. In an MUnit test, how should the Salesforce call be handled so that the test is a unit test?",
    "options": [
      {
        "letter": "A",
        "text": "Skip testing flows that use connectors"
      },
      {
        "letter": "B",
        "text": "Call the production Salesforce org with a test user"
      },
      {
        "letter": "C",
        "text": "Use Mock When to return a canned response"
      },
      {
        "letter": "D",
        "text": "Remove the connector from the flow during testing"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. MUnit's Mock When processor intercepts a processor, such as a connector operation, and returns a defined response. This isolates the flow from external systems so tests are fast and repeatable.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "The mock replaces the connector call with a controlled result."
      },
      "A": {
        "type": "Incorrect",
        "text": "Connector flows can be unit-tested with mocks."
      },
      "B": {
        "type": "Incorrect",
        "text": "That makes it an integration test with real dependencies."
      },
      "D": {
        "type": "Incorrect",
        "text": "Changing the flow under test defeats the test's purpose."
      }
    },
    "references": {
      "primary": {
        "title": "MUnit — Mock When Event Processor",
        "url": "https://docs.mulesoft.com/munit/latest/mock-event-processor"
      },
      "secondary": {
        "title": "MUnit — Test Concepts",
        "url": "https://docs.mulesoft.com/munit/latest/munit-test-concept"
      }
    }
  },
  {
    "id": "q-192",
    "number": 192,
    "title": "Architecting and Deploying - Enforcing coverage in CI",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "MUnit",
      "Coverage"
    ],
    "prompt": "The C4E wants every build to fail if MUnit coverage of an application falls below 80%. How can this be enforced?",
    "options": [
      {
        "letter": "A",
        "text": "Ask reviewers to reject any pull request whose coverage is below 80%"
      },
      {
        "letter": "B",
        "text": "Apply an API Manager policy that blocks deployments of applications with low coverage"
      },
      {
        "letter": "C",
        "text": "Enable Anypoint Monitoring on the build server and alert when coverage is low"
      },
      {
        "letter": "D",
        "text": "Set a coverage threshold in the MUnit Maven plugin so the build fails when coverage is lower"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. The MUnit Maven plugin can enforce a coverage threshold and fail the build when coverage falls below it. Manual review (A) is not automated enforcement, API Manager policies (B) do not inspect test coverage, and Monitoring (C) observes runtime metrics rather than build coverage.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "The MUnit Maven plugin fails the build when coverage is below the configured threshold."
      },
      "A": {
        "type": "Incorrect",
        "text": "Manual review is not automated enforcement."
      },
      "B": {
        "type": "Incorrect",
        "text": "API Manager policies do not inspect test coverage."
      },
      "C": {
        "type": "Incorrect",
        "text": "Monitoring observes runtime metrics, not build coverage."
      }
    },
    "references": {
      "primary": {
        "title": "MUnit Maven Plugin",
        "url": "https://docs.mulesoft.com/munit/latest/munit-maven-plugin"
      },
      "secondary": {
        "title": "MUnit Overview",
        "url": "https://docs.mulesoft.com/munit/latest/"
      }
    }
  },
  {
    "id": "q-193",
    "number": 193,
    "title": "Architecting and Deploying - What MUnit is not for",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "MUnit",
      "Testing Strategy"
    ],
    "prompt": "For which testing need is MUnit least suitable?",
    "options": [
      {
        "letter": "A",
        "text": "Load testing with thousands of concurrent users to measure throughput"
      },
      {
        "letter": "B",
        "text": "Verifying that a DataWeave transformation produces the expected output"
      },
      {
        "letter": "C",
        "text": "Checking that a flow routes a message to the correct branch"
      },
      {
        "letter": "D",
        "text": "Testing error handling when a connector call fails"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. MUnit is a unit-testing framework for Mule applications; it exercises flows, transformations, and error handling in isolation, but it is not a load-testing tool. Verifying transformations (B), checking routing (C), and testing error handling (D) are all typical MUnit uses.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Load testing with many concurrent users is outside MUnit's purpose."
      },
      "B": {
        "type": "Incorrect",
        "text": "Verifying transformations is a typical MUnit use."
      },
      "C": {
        "type": "Incorrect",
        "text": "Checking routing is a typical MUnit use."
      },
      "D": {
        "type": "Incorrect",
        "text": "Testing error handling is a typical MUnit use."
      }
    },
    "references": {
      "primary": {
        "title": "MUnit Overview",
        "url": "https://docs.mulesoft.com/munit/latest/"
      },
      "secondary": {
        "title": "MUnit — Test Concepts",
        "url": "https://docs.mulesoft.com/munit/latest/munit-test-concept"
      }
    }
  },
  {
    "id": "q-194",
    "number": 194,
    "title": "Architecting and Deploying - Choose two: MUnit capabilities",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "MUnit",
      "Testing"
    ],
    "prompt": "A team is introducing MUnit into the CI pipeline for a Mule application. The pipeline must run the tests on every commit, and several external dependencies are unstable in the build environment, so tests must run quickly and in isolation. Which two MUnit capabilities support unit testing of Mule applications?",
    "options": [
      {
        "letter": "A",
        "text": "Deploying the application to CloudHub as part of the test run"
      },
      {
        "letter": "B",
        "text": "Mocking processors so they return predefined responses"
      },
      {
        "letter": "C",
        "text": "Generating the API specification from the flow definitions"
      },
      {
        "letter": "D",
        "text": "Applying rate limiting policies to the flows under test"
      },
      {
        "letter": "E",
        "text": "Verifying that a processor was called a specific number of times"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Correct answers: B and E. MUnit can mock processors to return predefined responses and can assert how many times a processor was called, which are core unit-testing capabilities. It does not deploy applications to CloudHub (A), generate API specifications (C), or apply rate limiting policies (D).",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Mocking processors to return predefined responses is a core MUnit capability."
      },
      "E": {
        "type": "Correct",
        "text": "Asserting how many times a processor was called is a core MUnit capability."
      },
      "A": {
        "type": "Incorrect",
        "text": "Deploying to CloudHub is not an MUnit capability."
      },
      "C": {
        "type": "Incorrect",
        "text": "Generating API specifications from flows is not an MUnit capability."
      },
      "D": {
        "type": "Incorrect",
        "text": "Applying rate limiting policies is not an MUnit capability."
      }
    },
    "references": {
      "primary": {
        "title": "MUnit — Test Concepts",
        "url": "https://docs.mulesoft.com/munit/latest/munit-test-concept"
      },
      "secondary": {
        "title": "MUnit — Mock When Event Processor",
        "url": "https://docs.mulesoft.com/munit/latest/mock-event-processor"
      }
    }
  },
  {
    "id": "q-195",
    "number": 195,
    "title": "Architecting and Deploying - Testing against real systems",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "Integration Tests",
      "Testing Strategy"
    ],
    "prompt": "After unit tests pass, the team must confirm that the deployed System API works with the real ERP test instance, including credentials and network access. What type of test is this?",
    "options": [
      {
        "letter": "A",
        "text": "A unit test in which every connector is mocked so the flow runs in isolation"
      },
      {
        "letter": "B",
        "text": "A static analysis scan of the Mule configuration files in the repository"
      },
      {
        "letter": "C",
        "text": "An integration test against the real ERP test instance, including credentials and network access"
      },
      {
        "letter": "D",
        "text": "A code review of the Mule configuration by another developer on the team"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Confirming that the deployed API works against the real ERP test instance, including credentials and network access, is an integration test. A unit test with mocks (A) deliberately avoids the real system, static analysis (B) inspects code without running it, and a code review (D) is a manual inspection.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Exercising the deployed API against the real ERP test instance is an integration test."
      },
      "A": {
        "type": "Incorrect",
        "text": "A mocked unit test does not touch the real system."
      },
      "B": {
        "type": "Incorrect",
        "text": "Static analysis inspects code without executing it against the system."
      },
      "D": {
        "type": "Incorrect",
        "text": "A code review is a manual inspection, not a test against the system."
      }
    },
    "references": {
      "primary": {
        "title": "MUnit — Test Concepts",
        "url": "https://docs.mulesoft.com/munit/latest/munit-test-concept"
      },
      "secondary": {
        "title": "MUnit Overview",
        "url": "https://docs.mulesoft.com/munit/latest/"
      }
    }
  },
  {
    "id": "q-196",
    "number": 196,
    "title": "Architecting and Deploying - Automating deployment",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "DevOps",
      "Mule Maven Plugin"
    ],
    "prompt": "A team wants its CI server to build a Mule application and deploy it to CloudHub 2.0 on every merge to the main branch. Which tool is designed for this?",
    "options": [
      {
        "letter": "A",
        "text": "API Designer, which builds and deploys applications from their specifications"
      },
      {
        "letter": "B",
        "text": "Anypoint Visualizer, which deploys applications from the dependency graph"
      },
      {
        "letter": "C",
        "text": "An Exchange public portal, which deploys assets as they are published"
      },
      {
        "letter": "D",
        "text": "The Mule Maven Plugin, configured in the CI pipeline"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. The Mule Maven Plugin builds the application and deploys it to CloudHub, so it is the tool configured in a CI pipeline. API Designer (A) designs specifications, Visualizer (B) shows topology, and an Exchange portal (C) publishes assets rather than deploying applications.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "The Mule Maven Plugin builds and deploys Mule applications from a CI pipeline."
      },
      "A": {
        "type": "Incorrect",
        "text": "API Designer designs specifications; it does not deploy applications."
      },
      "B": {
        "type": "Incorrect",
        "text": "Visualizer shows topology; it does not deploy applications."
      },
      "C": {
        "type": "Incorrect",
        "text": "An Exchange portal publishes assets; it does not deploy applications."
      }
    },
    "references": {
      "primary": {
        "title": "Mule Maven Plugin",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/mmp-concept"
      },
      "secondary": {
        "title": "Deploy Applications to CloudHub 2.0 Using Mule Maven Plugin",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/deploy-to-cloudhub-2"
      }
    }
  },
  {
    "id": "q-197",
    "number": 197,
    "title": "Architecting and Deploying - Authenticating the pipeline",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "DevOps",
      "Connected Apps"
    ],
    "prompt": "A CI pipeline uses an administrator's personal username and password to deploy to Anypoint Platform. What should the architect recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Use a connected app with only the scopes the pipeline requires"
      },
      {
        "letter": "B",
        "text": "Create a client application in Exchange for the pipeline to use"
      },
      {
        "letter": "C",
        "text": "Disable authentication for deployments that run inside the corporate network"
      },
      {
        "letter": "D",
        "text": "Share the administrator's password with every pipeline and rotate it quarterly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Connected apps let applications such as CI/CD pipelines authenticate to Anypoint Platform with OAuth 2.0 and only the scopes they need, avoiding personal credentials. Client applications (B) are for calling APIs rather than platform operations, disabling authentication (C) is unacceptable, and sharing personal credentials (D) is insecure and hard to rotate.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Connected apps give pipelines scoped credentials that are not tied to a person."
      },
      "B": {
        "type": "Incorrect",
        "text": "Client applications are for calling APIs, not for platform operations."
      },
      "C": {
        "type": "Incorrect",
        "text": "Unauthenticated deployment is unacceptable."
      },
      "D": {
        "type": "Incorrect",
        "text": "Shared personal credentials are insecure and hard to rotate."
      }
    },
    "references": {
      "primary": {
        "title": "Connected Apps Overview",
        "url": "https://docs.mulesoft.com/access-management/connected-apps-overview"
      },
      "secondary": {
        "title": "Mule Maven Plugin",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/mmp-concept"
      }
    }
  },
  {
    "id": "q-198",
    "number": 198,
    "title": "Architecting and Deploying - Build once, deploy everywhere",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "DevOps",
      "Configuration"
    ],
    "prompt": "A team rebuilds its Mule application separately for each environment to change backend URLs. Which practice should replace this?",
    "options": [
      {
        "letter": "A",
        "text": "Keep a separate source branch for each environment and build from that branch"
      },
      {
        "letter": "B",
        "text": "Build one artifact and supply environment properties at deployment time"
      },
      {
        "letter": "C",
        "text": "Deploy a properties file alongside each artifact containing the environment URLs, and load it at runtime by scanning the classpath for a file whose name matches the environment name"
      },
      {
        "letter": "D",
        "text": "Runtime property placeholders resolved at deployment time from environment-specific values in the artifact\u2019s release notes"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Mule applications use property placeholders for environment-specific values, so one artifact can be built and the same tested artifact promoted with properties supplied at deployment. Divergent branches (A) make releases inconsistent, Ad-hoc file loading (C) recreates hard-coded fragility, and release notes (D) are not runtime configuration.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Externalized configuration lets the same tested artifact be promoted."
      },
      "A": {
        "type": "Incorrect",
        "text": "Divergent branches make releases inconsistent."
      },
      "C": {
        "type": "Incorrect",
        "text": "Ad-hoc file loading adds the same fragility as hard-coded values, without the tested deployment-time override."
      },
      "D": {
        "type": "Incorrect",
        "text": "Release notes are documentation, not a mechanism the runtime reads; there is no such resolution path."
      }
    },
    "references": {
      "primary": {
        "title": "Mule Runtime — Configuring Properties",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/configuring-properties"
      },
      "secondary": {
        "title": "Mule Runtime — Secure Configuration Properties",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/secure-configuration-properties"
      }
    }
  },
  {
    "id": "q-199",
    "number": 199,
    "title": "Architecting and Deploying - Running MUnit in the pipeline",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "DevOps",
      "MUnit"
    ],
    "prompt": "Where should MUnit tests run in a CI/CD pipeline for a Mule application?",
    "options": [
      {
        "letter": "A",
        "text": "In API Manager, as a policy applied to the API instance"
      },
      {
        "letter": "B",
        "text": "Only after the application has been deployed to production"
      },
      {
        "letter": "C",
        "text": "In the Maven build, before the application is deployed"
      },
      {
        "letter": "D",
        "text": "Only on the developers' laptops, because CI cannot run MUnit"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. The MUnit Maven plugin runs tests during the Maven build, so running them in CI before deployment stops a failing build from being deployed. API Manager (A) does not run tests, testing after production deployment (B) defeats the purpose, and MUnit (D) runs in CI as part of the build.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Running MUnit in the Maven build stops broken builds from being deployed."
      },
      "A": {
        "type": "Incorrect",
        "text": "API Manager does not run tests."
      },
      "B": {
        "type": "Incorrect",
        "text": "Tests must catch defects before production."
      },
      "D": {
        "type": "Incorrect",
        "text": "MUnit runs in CI as part of the Maven build."
      }
    },
    "references": {
      "primary": {
        "title": "MUnit Maven Plugin",
        "url": "https://docs.mulesoft.com/munit/latest/munit-maven-plugin"
      },
      "secondary": {
        "title": "Mule Maven Plugin",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/mmp-concept"
      }
    }
  },
  {
    "id": "q-200",
    "number": 200,
    "title": "Architecting and Deploying - Automating platform configuration",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "DevOps",
      "Platform APIs"
    ],
    "prompt": "As part of deployment, a pipeline must also create API instances and apply policies in each environment. How can this be automated?",
    "options": [
      {
        "letter": "A",
        "text": "Add policies to the Mule application's pom.xml"
      },
      {
        "letter": "B",
        "text": "Publish the policies as API fragments in Exchange"
      },
      {
        "letter": "C",
        "text": "Record a browser macro that clicks through API Manager"
      },
      {
        "letter": "D",
        "text": "Use the Anypoint Platform APIs or Anypoint CLI"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Anypoint Platform exposes its capabilities through platform APIs, and Anypoint CLI provides command-line access. Pipelines can use them to create API instances, apply policies, and manage other configuration consistently.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Policies are managed in API Manager, not the build file."
      },
      "D": {
        "type": "Correct",
        "text": "Platform APIs and the CLI expose API Manager operations for automation."
      },
      "B": {
        "type": "Incorrect",
        "text": "Fragments describe APIs; they do not apply policies."
      },
      "C": {
        "type": "Incorrect",
        "text": "UI automation is brittle and unsupported."
      }
    },
    "references": {
      "primary": {
        "title": "Exchange — Anypoint Platform APIs",
        "url": "https://docs.mulesoft.com/exchange/about-platform-apis"
      },
      "secondary": {
        "title": "Anypoint CLI",
        "url": "https://docs.mulesoft.com/anypoint-cli/latest/"
      }
    }
  },
  {
    "id": "q-201",
    "number": 201,
    "title": "Architecting and Deploying - Choose two: DevOps artifacts",
    "domain": "Architecting and deploying API implementations",
    "topics": [
      "DevOps",
      "Exchange"
    ],
    "prompt": "A DevOps engineer is automating the path from source code to a running, governed API: publishing reusable assets, building the application, and deploying it without any manual steps. Which two practices support automated building and sharing of API-related artifacts?",
    "options": [
      {
        "letter": "A",
        "text": "Publishing API specifications and fragments to Exchange with Maven"
      },
      {
        "letter": "B",
        "text": "Skipping MUnit tests to make deployments faster"
      },
      {
        "letter": "C",
        "text": "Pushing built JAR files to a shared artifact repository that the operations team pulls from and deploys by hand"
      },
      {
        "letter": "D",
        "text": "Editing production configuration directly in Runtime Manager"
      },
      {
        "letter": "E",
        "text": "Deploying applications with the Mule Maven Plugin from the CI pipeline"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Correct answers: A and E. Publishing specifications and fragments to Exchange with Maven, and deploying applications with the Mule Maven Plugin from CI, are both automated, repeatable ways to build and share artifacts. Skipping tests (B) reduces quality, emailing JAR files (C) is a manual hand-off, and editing production configuration by hand (D) is not automation.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Publishing specifications and fragments to Exchange with Maven automates sharing design artifacts."
      },
      "E": {
        "type": "Correct",
        "text": "The Mule Maven Plugin deploys applications automatically from CI."
      },
      "B": {
        "type": "Incorrect",
        "text": "Skipping tests trades quality for speed and is not a DevOps practice."
      },
      "C": {
        "type": "Incorrect",
        "text": "Emailing JAR files is a manual hand-off, not automation."
      },
      "D": {
        "type": "Incorrect",
        "text": "Editing production configuration by hand is not an automated practice."
      }
    },
    "references": {
      "primary": {
        "title": "Publishing Assets to Exchange Using Maven",
        "url": "https://docs.mulesoft.com/exchange/to-publish-assets-maven"
      },
      "secondary": {
        "title": "Mule Maven Plugin",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/mmp-concept"
      }
    }
  },
  {
    "id": "q-202",
    "number": 202,
    "title": "CloudHub Deployment - Batch state across redeployments",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Object Store",
      "Batch"
    ],
    "prompt": "A CloudHub application runs a long batch job. If the application is redeployed during the job, the remaining records are not processed. Which CloudHub feature is recommended for persisting state so processing can resume?",
    "options": [
      {
        "letter": "A",
        "text": "Persistent queues, so records are replayed automatically after the redeployment"
      },
      {
        "letter": "B",
        "text": "Object Store v2, so the application can persist and resume its batch state"
      },
      {
        "letter": "C",
        "text": "The worker's local disk, so the state survives while the worker is replaced"
      },
      {
        "letter": "D",
        "text": "A larger worker size, so the batch finishes before a redeployment can occur"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Object Store v2 provides shared persistent state so the application can record its progress and resume after a redeployment. Persistent queues (A) deliver messages rather than store batch progress, the worker's local disk (C) is not preserved when the worker is replaced, and a larger worker (D) does not persist state.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Object Store v2 persists the batch state so processing can resume."
      },
      "A": {
        "type": "Incorrect",
        "text": "Persistent queues deliver messages; they do not store batch progress."
      },
      "C": {
        "type": "Incorrect",
        "text": "The worker's local disk is not preserved across a redeployment."
      },
      "D": {
        "type": "Incorrect",
        "text": "Worker size does not persist state."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub High Availability Features",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric"
      },
      "secondary": {
        "title": "Object Store v2 Guide",
        "url": "https://docs.mulesoft.com/object-store/osv2-guide"
      }
    }
  },
  {
    "id": "q-203",
    "number": 203,
    "title": "CloudHub Deployment - Shared watermark for several workers",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Object Store",
      "Workers"
    ],
    "prompt": "A CloudHub application deployed to two workers polls a database incrementally. Both workers must use the same last-processed timestamp. Where should it be stored?",
    "options": [
      {
        "letter": "A",
        "text": "In an in-memory object store on each worker, which the runtime keeps in sync"
      },
      {
        "letter": "B",
        "text": "In the application's properties file, which all workers read at startup"
      },
      {
        "letter": "C",
        "text": "In Object Store v2, so both workers read the same persistent value"
      },
      {
        "letter": "D",
        "text": "In a persistent VM queue that each worker drains before polling"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. A shared persistent store such as Object Store v2 lets both workers read and update the same watermark. An in-memory store (A) is per worker, the properties file (B) is read-only configuration, and a queue (D) is a messaging construct rather than shared state.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Object Store v2 holds the shared watermark that both workers read."
      },
      "A": {
        "type": "Incorrect",
        "text": "An in-memory store is per worker and is not shared."
      },
      "B": {
        "type": "Incorrect",
        "text": "The properties file is read-only configuration, not mutable shared state."
      },
      "D": {
        "type": "Incorrect",
        "text": "A queue is a messaging construct, not shared state."
      }
    },
    "references": {
      "primary": {
        "title": "Object Store v2 Guide",
        "url": "https://docs.mulesoft.com/object-store/osv2-guide"
      },
      "secondary": {
        "title": "Mule Runtime — Object Stores",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/mule-object-stores"
      }
    }
  },
  {
    "id": "q-204",
    "number": 204,
    "title": "CloudHub Deployment - Object Store versus persistent queues",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Object Store",
      "Persistent Queues"
    ],
    "prompt": "An architect needs to (1) hand off work items between workers of a CloudHub application with no message loss and (2) cache an OAuth token for reuse until it expires. Which features match these needs?",
    "options": [
      {
        "letter": "A",
        "text": "(1) Object Store v2; (2) persistent queues"
      },
      {
        "letter": "B",
        "text": "(1) The worker's local disk; (2) a flow variable"
      },
      {
        "letter": "C",
        "text": "(1) Persistent queues; (2) a flow variable"
      },
      {
        "letter": "D",
        "text": "(1) Persistent queues; (2) Object Store v2"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Persistent queues provide reliable hand-off of work items between workers, and Object Store v2 holds the cached token until it expires. Reversing the two (A) matches neither need, the local disk and a flow variable (B) are not reliable hand-off or shared cache, and a flow variable (C) is scoped to one event.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Persistent queues hand off work reliably, and Object Store v2 caches the token."
      },
      "A": {
        "type": "Incorrect",
        "text": "The features are reversed and match neither need."
      },
      "B": {
        "type": "Incorrect",
        "text": "The local disk is not a reliable hand-off and a flow variable is per event."
      },
      "C": {
        "type": "Incorrect",
        "text": "A flow variable is scoped to one event and cannot cache across requests."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub High Availability Features",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric"
      },
      "secondary": {
        "title": "Object Store v2 Guide",
        "url": "https://docs.mulesoft.com/object-store/osv2-guide"
      }
    }
  },
  {
    "id": "q-205",
    "number": 205,
    "title": "CloudHub Deployment - Retention limit",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Object Store",
      "Object Store v2"
    ],
    "prompt": "A team wants to keep audit records for seven years in Object Store v2 on CloudHub because it is already available to the application. What should the architect advise?",
    "options": [
      {
        "letter": "A",
        "text": "Use a database, because Object Store v2 entries have a limited time-to-live"
      },
      {
        "letter": "B",
        "text": "Proceed, but switch to the in-memory object store so the records survive restarts"
      },
      {
        "letter": "C",
        "text": "Proceed, because Object Store v2 retains entries indefinitely unless they are deleted"
      },
      {
        "letter": "D",
        "text": "Store the records in persistent queues, which can retain them for years"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Object Store v2 is designed for transient application state such as caching, watermarks, and deduplication, and its entries have a maximum time-to-live, so it is not a long-term archive. An in-memory store is less durable (B), entries do expire (C), and persistent queues retain messages for only a few days (D).",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Object Store v2 entries expire after their TTL, so a database is the right archive."
      },
      "B": {
        "type": "Incorrect",
        "text": "An in-memory store is less durable than the persistent store."
      },
      "C": {
        "type": "Incorrect",
        "text": "Object Store v2 entries expire after their time-to-live."
      },
      "D": {
        "type": "Incorrect",
        "text": "Persistent queue messages are retained for only a few days."
      }
    },
    "references": {
      "primary": {
        "title": "Object Store v2 FAQ",
        "url": "https://docs.mulesoft.com/object-store/osv2-faq"
      },
      "secondary": {
        "title": "Object Store v2 Guide",
        "url": "https://docs.mulesoft.com/object-store/osv2-guide"
      }
    }
  },
  {
    "id": "q-206",
    "number": 206,
    "title": "CloudHub Deployment - Avoiding duplicate processing",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Object Store",
      "Idempotency"
    ],
    "prompt": "A CloudHub application with persistent queues enabled occasionally processes the same order twice, because persistent queues do not guarantee one-time-only delivery. How can duplicates be avoided?",
    "options": [
      {
        "letter": "A",
        "text": "Reduce the worker size so processing is slower and duplicate deliveries are unlikely"
      },
      {
        "letter": "B",
        "text": "Track processed order IDs in Object Store v2 and ignore IDs that were already processed"
      },
      {
        "letter": "C",
        "text": "Increase the number of workers so each message is handled by exactly one worker"
      },
      {
        "letter": "D",
        "text": "Disable automatic restarts so the application is not restarted mid-delivery"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Persistent queues may deliver a message more than once, so the application records processed IDs in a shared store such as Object Store v2 and ignores repeats. Slower processing (A) does not prevent duplicates, more workers (C) do not prevent duplicate delivery, and restarts (D) are not the cause described.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "A shared store lets every worker detect and ignore duplicates."
      },
      "A": {
        "type": "Incorrect",
        "text": "Slower processing does not prevent duplicate delivery."
      },
      "C": {
        "type": "Incorrect",
        "text": "More workers do not prevent duplicate delivery."
      },
      "D": {
        "type": "Incorrect",
        "text": "Restarts are not the cause of the duplicate deliveries described."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub High Availability Features",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric"
      },
      "secondary": {
        "title": "Mule Runtime — Object Stores",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/mule-object-stores"
      }
    }
  },
  {
    "id": "q-207",
    "number": 207,
    "title": "CloudHub Deployment - Choose two: Object Store on CloudHub",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Object Store",
      "Use Cases"
    ],
    "prompt": "A CloudHub application must resume processing where it left off after a redeploy, and its multiple workers need to share the same cached reference data. The architect is evaluating Object Store v2 for these needs. Which two are appropriate uses of Object Store v2 for a CloudHub application?",
    "options": [
      {
        "letter": "A",
        "text": "Hosting large files for permanent archival"
      },
      {
        "letter": "B",
        "text": "Replacing the CRM as the system of record for customer accounts"
      },
      {
        "letter": "C",
        "text": "Persisting state needed to resume processing after a redeployment"
      },
      {
        "letter": "D",
        "text": "Load balancing HTTP requests between the application's workers"
      },
      {
        "letter": "E",
        "text": "Caching reference data that all workers of the application share"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Correct answers: C and E. Object Store v2 provides shared, persistent key-value state, so it is well suited to watermarks and state that must survive a redeploy and to caching reference data shared by all workers. It is not for permanent archival (A), it does not replace a system of record (B), and it does not load-balance HTTP traffic (D).",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Persistent shared state lets processing resume after a redeploy."
      },
      "E": {
        "type": "Correct",
        "text": "A shared store lets every worker read the same cached reference data."
      },
      "A": {
        "type": "Incorrect",
        "text": "Object Store v2 has a limited TTL and is not for permanent archival."
      },
      "B": {
        "type": "Incorrect",
        "text": "Object Store is application state, not a system of record."
      },
      "D": {
        "type": "Incorrect",
        "text": "Load balancing is provided by the load balancer, not Object Store."
      }
    },
    "references": {
      "primary": {
        "title": "Object Store v2 Guide",
        "url": "https://docs.mulesoft.com/object-store/osv2-guide"
      },
      "secondary": {
        "title": "Object Store v2 FAQ",
        "url": "https://docs.mulesoft.com/object-store/osv2-faq"
      }
    }
  },
  {
    "id": "q-208",
    "number": 208,
    "title": "CloudHub Deployment - Consistent performance",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Worker Sizes",
      "Performance"
    ],
    "prompt": "A latency-sensitive API runs on a 0.2 vCore CloudHub worker. Response times vary widely under sustained load, although they are fast at startup and during short bursts. What should the architect recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Add a second 0.2 vCore worker so the two share the load"
      },
      {
        "letter": "B",
        "text": "Deploy the application to a different CloudHub region"
      },
      {
        "letter": "C",
        "text": "Enable persistent queues so requests are buffered during load spikes"
      },
      {
        "letter": "D",
        "text": "Deploy the application on 1 vCore or larger workers"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Fractional workers share CPU with other tenants, so performance degrades under sustained load; a full 1 vCore worker provides dedicated CPU. Adding another fractional worker (A) does not give dedicated CPU, changing region (B) does not change the worker's CPU share, and persistent queues (C) buffer messages rather than provide CPU.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "A full vCore worker provides the dedicated CPU that sustained load requires."
      },
      "A": {
        "type": "Incorrect",
        "text": "Another fractional worker does not provide dedicated CPU."
      },
      "B": {
        "type": "Incorrect",
        "text": "The region does not change the worker's CPU share."
      },
      "C": {
        "type": "Incorrect",
        "text": "Persistent queues buffer messages; they do not provide CPU."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      },
      "secondary": {
        "title": "Deploying to CloudHub",
        "url": "https://docs.mulesoft.com/cloudhub/deploying-to-cloudhub"
      }
    }
  },
  {
    "id": "q-209",
    "number": 209,
    "title": "CloudHub Deployment - Memory-heavy transformations",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Worker Sizes",
      "Vertical Scaling"
    ],
    "prompt": "A CloudHub application transforms large payloads in memory and fails with out-of-memory errors on a 1 vCore worker. Traffic is low. What should be changed?",
    "options": [
      {
        "letter": "A",
        "text": "Increase the worker size so the application has a larger heap"
      },
      {
        "letter": "B",
        "text": "Add more 1 vCore workers so the payloads are spread across them"
      },
      {
        "letter": "C",
        "text": "Enable persistent queues so large payloads are buffered on disk"
      },
      {
        "letter": "D",
        "text": "Apply a Spike Control policy so large payloads are throttled"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. The failure is out-of-memory while transforming a large payload, so the application needs a larger heap, which a larger worker provides. Adding workers (B) does not increase the memory available to one transformation, persistent queues (C) buffer messages rather than add heap, and Spike Control (D) throttles traffic rather than add memory.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "A larger worker provides the heap needed to transform a large payload."
      },
      "B": {
        "type": "Incorrect",
        "text": "More workers do not increase per-transformation memory."
      },
      "C": {
        "type": "Incorrect",
        "text": "Persistent queues buffer messages; they do not add heap."
      },
      "D": {
        "type": "Incorrect",
        "text": "Spike Control throttles traffic; it does not add memory."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      },
      "secondary": {
        "title": "CloudHub High Availability Features",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric"
      }
    }
  },
  {
    "id": "q-210",
    "number": 210,
    "title": "CloudHub Deployment - Sizing for availability",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Worker Configuration",
      "High Availability"
    ],
    "prompt": "An API on CloudHub must stay available if one worker or data center fails. Which configuration meets this requirement at minimum?",
    "options": [
      {
        "letter": "A",
        "text": "One worker of the largest size"
      },
      {
        "letter": "B",
        "text": "At least two workers"
      },
      {
        "letter": "C",
        "text": "One worker with automatic restarts"
      },
      {
        "letter": "D",
        "text": "One worker with persistent queues"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. CloudHub distributes multiple workers for the same application across two or more data centers. Deploying at least two workers allows the load balancer to keep serving requests if one worker or data center fails.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A single worker is still a single point of failure."
      },
      "C": {
        "type": "Incorrect",
        "text": "Restarts recover the worker but cause downtime."
      },
      "D": {
        "type": "Incorrect",
        "text": "Queues protect messages but do not keep the API available."
      },
      "B": {
        "type": "Correct",
        "text": "Multiple workers are spread across data centers."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub High Availability Features",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric"
      },
      "secondary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      }
    }
  },
  {
    "id": "q-211",
    "number": 211,
    "title": "CloudHub Deployment - Automatic restarts",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Worker Configuration",
      "Monitoring"
    ],
    "prompt": "A CloudHub application occasionally becomes unresponsive due to a memory leak. Until the code is fixed, the team wants the platform to recover it automatically. Which setting helps?",
    "options": [
      {
        "letter": "A",
        "text": "Reduce the worker size so the leak has less memory to consume"
      },
      {
        "letter": "B",
        "text": "Disable Anypoint Monitoring so its overhead does not worsen the leak"
      },
      {
        "letter": "C",
        "text": "Enable automatic restarts so CloudHub recovers the application automatically"
      },
      {
        "letter": "D",
        "text": "Enable persistent queues so in-flight messages survive the outage"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. CloudHub monitors workers and, when automatic restarts are enabled, restarts an application that stops responding. A smaller worker (A) would fail sooner, monitoring (B) does not cause the leak, and persistent queues (D) do not restart the application.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "CloudHub restarts the application when it detects that it has stopped responding."
      },
      "A": {
        "type": "Incorrect",
        "text": "A smaller worker would fail sooner, not recover the application."
      },
      "B": {
        "type": "Incorrect",
        "text": "Monitoring does not cause the leak or recover the application."
      },
      "D": {
        "type": "Incorrect",
        "text": "Queues do not restart an unresponsive application."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub — Application Monitoring and Automatic Restarts",
        "url": "https://docs.mulesoft.com/cloudhub/worker-monitoring"
      },
      "secondary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      }
    }
  },
  {
    "id": "q-212",
    "number": 212,
    "title": "CloudHub Deployment - Scaling out with queues",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Worker Configuration",
      "Persistent Queues"
    ],
    "prompt": "A CloudHub application receives large files and splits them into records for processing. After adding workers, only one worker does the work. What should be enabled so that records are processed across workers?",
    "options": [
      {
        "letter": "A",
        "text": "Automatic restarts, so the busy worker is restarted and the load moves"
      },
      {
        "letter": "B",
        "text": "A larger worker size, so a single worker can handle all the records"
      },
      {
        "letter": "C",
        "text": "A second region, so records are split between the two regions"
      },
      {
        "letter": "D",
        "text": "Persistent queues, so each worker picks up records to process"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Persistent queues distribute the records across the application's workers so they can be processed in parallel. Automatic restarts (A) do not distribute work, a larger worker (B) keeps the work on one worker, and a second region (C) does not split records between workers.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Persistent queues distribute records across the workers for parallel processing."
      },
      "A": {
        "type": "Incorrect",
        "text": "Automatic restarts do not distribute work across workers."
      },
      "B": {
        "type": "Incorrect",
        "text": "A larger worker keeps the work on a single worker."
      },
      "C": {
        "type": "Incorrect",
        "text": "A second region does not split records between workers."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub High Availability Features",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric"
      },
      "secondary": {
        "title": "CloudHub — Managing Queues",
        "url": "https://docs.mulesoft.com/cloudhub/managing-queues"
      }
    }
  },
  {
    "id": "q-213",
    "number": 213,
    "title": "CloudHub Deployment - Choose two: worker facts",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Worker Sizes",
      "CloudHub"
    ],
    "prompt": "An operations manager is right-sizing a new CloudHub application and asks the architect to explain what buying workers actually means for CPU, memory, and heap, and whether fractional workers guarantee a consistent share of capacity under load. Which two statements about CloudHub workers are correct?",
    "options": [
      {
        "letter": "A",
        "text": "Each worker runs in its own container with its own memory and heap"
      },
      {
        "letter": "B",
        "text": "All workers in a region share a single JVM"
      },
      {
        "letter": "C",
        "text": "Fractional workers guarantee a consistent share of CPU under load"
      },
      {
        "letter": "D",
        "text": "Only stopped applications count toward vCore usage"
      },
      {
        "letter": "E",
        "text": "Worker size determines the memory and heap available to the application"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Correct answers: A and E. Each CloudHub worker runs in its own container, and the worker size determines the memory and heap available to the application. Workers do not share a single JVM (B), fractional workers share CPU with other tenants so their share is not guaranteed (C), and running applications count toward vCore usage (D).",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Each worker is a separate container with its own memory and heap."
      },
      "E": {
        "type": "Correct",
        "text": "Worker size sets the memory and heap available to the application."
      },
      "B": {
        "type": "Incorrect",
        "text": "Workers are isolated containers; they do not share one JVM."
      },
      "C": {
        "type": "Incorrect",
        "text": "Fractional workers share CPU with other tenants, so their share is not guaranteed."
      },
      "D": {
        "type": "Incorrect",
        "text": "Running applications, not only stopped ones, count toward vCore usage."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      },
      "secondary": {
        "title": "Deploying to CloudHub",
        "url": "https://docs.mulesoft.com/cloudhub/deploying-to-cloudhub"
      }
    }
  },
  {
    "id": "q-214",
    "number": 214,
    "title": "CloudHub Deployment - Worker hardware failure",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Reliability",
      "Intelligent Healing"
    ],
    "prompt": "The underlying hardware of a single-worker CloudHub application fails. What happens?",
    "options": [
      {
        "letter": "A",
        "text": "The application stays down until an administrator redeploys it manually"
      },
      {
        "letter": "B",
        "text": "CloudHub migrates the application to a new worker, with some downtime"
      },
      {
        "letter": "C",
        "text": "CloudHub moves the application to another region automatically"
      },
      {
        "letter": "D",
        "text": "Traffic continues on a hidden standby worker with no interruption"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. When hardware fails, CloudHub migrates the application to a new worker, which involves some downtime. Manual redeployment is not required (A), the application is not moved to another region (C), and a single-worker application has no hidden standby (D).",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "CloudHub migrates the application to a new worker with some downtime."
      },
      "A": {
        "type": "Incorrect",
        "text": "Manual redeployment is not required; CloudHub performs the migration."
      },
      "C": {
        "type": "Incorrect",
        "text": "Cross-region failover is not automatic."
      },
      "D": {
        "type": "Incorrect",
        "text": "A single-worker application has no hidden standby worker."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      },
      "secondary": {
        "title": "CloudHub High Availability Features",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric"
      }
    }
  },
  {
    "id": "q-215",
    "number": 215,
    "title": "CloudHub Deployment - Region outage",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Reliability",
      "Disaster Recovery"
    ],
    "prompt": "An API is deployed to two workers in a single CloudHub region. What happens if the entire region becomes unavailable?",
    "options": [
      {
        "letter": "A",
        "text": "CloudHub fails the workers over to another region automatically"
      },
      {
        "letter": "B",
        "text": "The load balancer queues the requests until the region recovers"
      },
      {
        "letter": "C",
        "text": "The application is unavailable until it is deployed to a second region"
      },
      {
        "letter": "D",
        "text": "The second worker keeps serving the API from a different region"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. The two workers are in one region, and CloudHub does not fail over across regions automatically, so the application is unavailable until it is deployed to a second region. There is no automatic cross-region failover (A), the load balancer does not queue requests during a region outage (B), and the second worker is in the same failed region (D).",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "With both workers in one region, the application is unavailable until deployed to a second region."
      },
      "A": {
        "type": "Incorrect",
        "text": "CloudHub does not fail over across regions automatically."
      },
      "B": {
        "type": "Incorrect",
        "text": "The load balancer does not queue requests during a region outage."
      },
      "D": {
        "type": "Incorrect",
        "text": "The second worker is in the same failed region."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub High Availability and Disaster Recovery",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-hadr"
      },
      "secondary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      }
    }
  },
  {
    "id": "q-216",
    "number": 216,
    "title": "CloudHub Deployment - Multi-region active-active",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Reliability",
      "Multi-Region"
    ],
    "prompt": "A global company deploys the same API to CloudHub in US East and EU. It wants clients routed to a healthy region automatically. What else is needed?",
    "options": [
      {
        "letter": "A",
        "text": "Nothing further; myapp.cloudhub.io resolves to both regions and fails over automatically"
      },
      {
        "letter": "B",
        "text": "Persistent queues shared between the two regions so messages follow the clients"
      },
      {
        "letter": "C",
        "text": "A single dedicated load balancer that spans both regions and balances between them"
      },
      {
        "letter": "D",
        "text": "A customer-managed global DNS with health checks that routes clients to the healthy region"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. CloudHub does not fail over across regions automatically, so the customer must provide global traffic management, typically a customer-managed DNS with health checks, to send clients to a healthy region. The CloudHub hostname resolves to one region (A), persistent queues are not shared across regions (B), and a dedicated load balancer operates within a single region and VPC (C).",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Cross-region routing requires customer-managed global DNS with health checks."
      },
      "A": {
        "type": "Incorrect",
        "text": "The CloudHub hostname does not fail over across regions automatically."
      },
      "B": {
        "type": "Incorrect",
        "text": "Persistent queues are not shared across regions."
      },
      "C": {
        "type": "Incorrect",
        "text": "A dedicated load balancer operates within one region and VPC."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub High Availability and Disaster Recovery",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-hadr"
      },
      "secondary": {
        "title": "High Availability and Disaster Recovery Across Deployment Models",
        "url": "https://docs.mulesoft.com/hosting-home/hadr-guide"
      }
    }
  },
  {
    "id": "q-217",
    "number": 217,
    "title": "CloudHub Deployment - Zero-downtime updates",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Reliability",
      "Deployment"
    ],
    "prompt": "A team redeploys a new version of an API to CloudHub during business hours. What behavior should it expect?",
    "options": [
      {
        "letter": "A",
        "text": "CloudHub keeps the old version serving until the new version's workers are healthy, so updates are effectively zero-downtime"
      },
      {
        "letter": "B",
        "text": "The update is queued until the next maintenance window before any worker is replaced"
      },
      {
        "letter": "C",
        "text": "Both the old and new versions process every request in parallel during the update"
      },
      {
        "letter": "D",
        "text": "All requests fail for several minutes while the workers are replaced"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. On CloudHub, a redeployment brings up the new version and switches traffic over once it is ready, so a rolling update avoids a hard outage. The deployment is not deferred to a maintenance window (B), both versions do not serve the same requests at once (C), and the application does not fail for several minutes (D).",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "CloudHub performs a rolling update so traffic moves to the new version once it is ready."
      },
      "B": {
        "type": "Incorrect",
        "text": "Deployments start immediately rather than waiting for a maintenance window."
      },
      "C": {
        "type": "Incorrect",
        "text": "Only one version serves a given request; the versions are not load-balanced together."
      },
      "D": {
        "type": "Incorrect",
        "text": "A rolling update avoids a multi-minute total outage."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      },
      "secondary": {
        "title": "Deploying to CloudHub",
        "url": "https://docs.mulesoft.com/cloudhub/deploying-to-cloudhub"
      }
    }
  },
  {
    "id": "q-218",
    "number": 218,
    "title": "CloudHub Deployment - Latency and region choice",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Performance",
      "Regions"
    ],
    "prompt": "Most consumers of a CloudHub API and its backend systems are in Frankfurt, but the API is deployed to the US East region. Users report high latency. What is the best improvement?",
    "options": [
      {
        "letter": "A",
        "text": "Enable persistent queues so requests are buffered closer to the users"
      },
      {
        "letter": "B",
        "text": "Deploy the API to the EU (Frankfurt) region, near the consumers and the backends"
      },
      {
        "letter": "C",
        "text": "Increase the worker size in US East so each request is processed faster"
      },
      {
        "letter": "D",
        "text": "Add more workers in US East so the load is spread across them"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. The latency comes from the distance between the API, its consumers, and its backends, so deploying the API to the EU region places it near both. Persistent queues (A) do not reduce network distance, and a larger worker (C) or more workers (D) do not shorten the round trip.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Deploying to the EU region places the API near both consumers and backends."
      },
      "A": {
        "type": "Incorrect",
        "text": "Persistent queues buffer messages; they do not reduce network distance."
      },
      "C": {
        "type": "Incorrect",
        "text": "A larger worker does not reduce the round-trip distance."
      },
      "D": {
        "type": "Incorrect",
        "text": "More workers do not reduce the round-trip distance."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      },
      "secondary": {
        "title": "Deploying to CloudHub",
        "url": "https://docs.mulesoft.com/cloudhub/deploying-to-cloudhub"
      }
    }
  },
  {
    "id": "q-219",
    "number": 219,
    "title": "CloudHub Deployment - Choose two: CloudHub reliability",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Reliability",
      "CloudHub"
    ],
    "prompt": "An architect is preparing a high-availability design for a critical CloudHub application and must explain which redundancy guarantees the platform provides and what the application itself must do to avoid downtime. Which two statements describe the reliability of applications in the CloudHub shared worker cloud?",
    "options": [
      {
        "letter": "A",
        "text": "Persistent queues guarantee one-time-only delivery"
      },
      {
        "letter": "B",
        "text": "A single-worker application is automatically cloned to a hot standby worker in another data center"
      },
      {
        "letter": "C",
        "text": "Multiple workers of an application are spread across data centers"
      },
      {
        "letter": "D",
        "text": "Applications fail over across regions automatically"
      },
      {
        "letter": "E",
        "text": "Platform services have built-in redundancy across data centers"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Correct answers: C and E. CloudHub platform services are redundant across at least two data centers, and multiple workers of an application are distributed across data centers. Persistent queues may deliver duplicates (A), a single-worker application is down while its worker is replaced (B), and cross-region failover requires customer design (D).",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Multiple workers are distributed across data centers, protecting against a single data center failure."
      },
      "E": {
        "type": "Correct",
        "text": "CloudHub platform services are redundant across at least two data centers."
      },
      "A": {
        "type": "Incorrect",
        "text": "Persistent queues may deliver duplicates."
      },
      "B": {
        "type": "Incorrect",
        "text": "Hot standby workers are not provided automatically; a single-worker application is down while its worker is replaced."
      },
      "D": {
        "type": "Incorrect",
        "text": "Cross-region failover requires customer design."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      },
      "secondary": {
        "title": "CloudHub High Availability Features",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric"
      }
    }
  },
  {
    "id": "q-220",
    "number": 220,
    "title": "CloudHub Deployment - Custom domain and certificate",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Load Balancers",
      "Dedicated Load Balancer"
    ],
    "prompt": "Partners must call CloudHub APIs at https://api.partner-company.com using the company's own TLS certificate. Which load balancer is required?",
    "options": [
      {
        "letter": "A",
        "text": "The shared load balancer, with the certificate uploaded to the application"
      },
      {
        "letter": "B",
        "text": "A persistent queue with TLS enabled in front of the application"
      },
      {
        "letter": "C",
        "text": "The Runtime Manager agent, configured with the partner domain name"
      },
      {
        "letter": "D",
        "text": "A dedicated load balancer associated with an Anypoint VPC"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Custom domains and customer-supplied TLS certificates require a dedicated load balancer, which is associated with an Anypoint VPC. The shared load balancer uses MuleSoft-managed certificates and a cloudhub.io domain (A), persistent queues are messaging (B), and the Runtime Manager agent reports application state (C).",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "A dedicated load balancer supports custom domains and customer certificates."
      },
      "A": {
        "type": "Incorrect",
        "text": "The shared load balancer uses MuleSoft-managed certificates and domains."
      },
      "B": {
        "type": "Incorrect",
        "text": "Persistent queues are a messaging feature, not a load balancer."
      },
      "C": {
        "type": "Incorrect",
        "text": "The Runtime Manager agent reports application state; it does not serve traffic."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Dedicated Load Balancer",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-dedicated-load-balancer"
      },
      "secondary": {
        "title": "Dedicated Load Balancer — Uploading Certificates",
        "url": "https://docs.mulesoft.com/cloudhub/lb-cert-upload"
      }
    }
  },
  {
    "id": "q-221",
    "number": 221,
    "title": "CloudHub Deployment - Mapping one domain to several apps",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Load Balancers",
      "Mapping Rules"
    ],
    "prompt": "A company wants /orders, /customers, and /products on one domain to route to three different CloudHub applications. What provides this?",
    "options": [
      {
        "letter": "A",
        "text": "URL mapping rules on a dedicated load balancer"
      },
      {
        "letter": "B",
        "text": "Three API instances that share the same name in API Manager"
      },
      {
        "letter": "C",
        "text": "The shared load balancer's default path-based routing"
      },
      {
        "letter": "D",
        "text": "One application deployed per worker size on the same domain"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. A dedicated load balancer supports URL mapping rules that route different paths on one domain to different applications. API instances (B) govern APIs rather than HTTP routing, the shared load balancer does not offer custom path mapping (C), and worker size (D) has nothing to do with routing.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "URL mapping rules on a dedicated load balancer route paths to different applications."
      },
      "B": {
        "type": "Incorrect",
        "text": "API instances govern API policies and contracts, not HTTP path routing."
      },
      "C": {
        "type": "Incorrect",
        "text": "The shared load balancer does not provide custom path-based mapping."
      },
      "D": {
        "type": "Incorrect",
        "text": "Worker size is unrelated to URL routing."
      }
    },
    "references": {
      "primary": {
        "title": "Dedicated Load Balancer Mapping Rules",
        "url": "https://docs.mulesoft.com/cloudhub/lb-mapping-rules"
      },
      "secondary": {
        "title": "Dedicated Load Balancer Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/lb-architecture"
      }
    }
  },
  {
    "id": "q-222",
    "number": 222,
    "title": "CloudHub Deployment - Restricting client IPs at the edge",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Load Balancers",
      "Allowlists"
    ],
    "prompt": "Only partner IP ranges should reach an API at the load balancer, before any request reaches the workers. Which option supports this?",
    "options": [
      {
        "letter": "A",
        "text": "Persistent queues with encryption enabled for the application"
      },
      {
        "letter": "B",
        "text": "An IP allowlist configured on a dedicated load balancer in front of the application"
      },
      {
        "letter": "C",
        "text": "Automatic restarts enabled so the application recovers from bad requests"
      },
      {
        "letter": "D",
        "text": "The shared load balancer with a DNS alias for the partner ranges"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. A dedicated load balancer supports an IP allowlist that filters requests at the edge, before they reach the workers. Persistent queues (A) buffer messages rather than filter traffic, automatic restarts (C) recover the application rather than restrict sources, and the shared load balancer (D) does not support an IP allowlist.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "A dedicated load balancer can allowlist partner IP ranges at the edge."
      },
      "A": {
        "type": "Incorrect",
        "text": "Persistent queues buffer messages; they do not filter source addresses."
      },
      "C": {
        "type": "Incorrect",
        "text": "Automatic restarts recover the application; they do not restrict callers."
      },
      "D": {
        "type": "Incorrect",
        "text": "The shared load balancer does not support an IP allowlist."
      }
    },
    "references": {
      "primary": {
        "title": "Dedicated Load Balancer Allowlists",
        "url": "https://docs.mulesoft.com/cloudhub/lb-allowlists"
      },
      "secondary": {
        "title": "CloudHub Dedicated Load Balancer",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-dedicated-load-balancer"
      }
    }
  },
  {
    "id": "q-223",
    "number": 223,
    "title": "CloudHub Deployment - Shared load balancer ports",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Load Balancers",
      "Shared Load Balancer"
    ],
    "prompt": "An application on CloudHub must be reachable through the shared load balancer over HTTPS. On which port should its HTTPS listener be configured?",
    "options": [
      {
        "letter": "A",
        "text": "8081"
      },
      {
        "letter": "B",
        "text": "443"
      },
      {
        "letter": "C",
        "text": "8082"
      },
      {
        "letter": "D",
        "text": "8092"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. To be reachable through the shared load balancer over HTTPS, an application's HTTPS listener is configured on port 8082. Port 8081 is the HTTP listener mapped to the shared load balancer's HTTP endpoint (A), 443 is the public HTTPS port on the load balancer rather than the listener (B), and 8092 is not the HTTPS listener port for the shared load balancer (D).",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "8082 is the application HTTPS listener port mapped by the shared load balancer."
      },
      "A": {
        "type": "Incorrect",
        "text": "8081 is the HTTP listener mapped by the shared load balancer."
      },
      "B": {
        "type": "Incorrect",
        "text": "443 is the public HTTPS port on the load balancer, not the application listener."
      },
      "D": {
        "type": "Incorrect",
        "text": "8092 is not the HTTPS listener port used with the shared load balancer."
      }
    },
    "references": {
      "primary": {
        "title": "Dedicated Load Balancer Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/lb-architecture"
      },
      "secondary": {
        "title": "CloudHub Dedicated Load Balancer",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-dedicated-load-balancer"
      }
    }
  },
  {
    "id": "q-224",
    "number": 224,
    "title": "CloudHub Deployment - Choose two: DLB versus SLB",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Load Balancers",
      "Comparison"
    ],
    "prompt": "A company runs a CloudHub application inside an Anypoint VPC and must expose it at a custom domain with its own SSL certificate, while other applications continue using the shared load balancer. Which two capabilities does a dedicated load balancer provide that the shared load balancer does not?",
    "options": [
      {
        "letter": "A",
        "text": "Load balancing without an Anypoint VPC"
      },
      {
        "letter": "B",
        "text": "Distribution of requests across the application's workers"
      },
      {
        "letter": "C",
        "text": "Access to applications over HTTPS"
      },
      {
        "letter": "D",
        "text": "Custom SSL certificates and a custom domain name"
      },
      {
        "letter": "E",
        "text": "URL mapping rules that route paths on one domain to multiple applications"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Correct answers: D and E. A dedicated load balancer adds customer-supplied certificates with a custom domain and URL mapping rules that route paths to multiple applications. It still requires an Anypoint VPC, so it does not provide load balancing without one (A); both load balancers distribute requests across workers (B) and serve applications over HTTPS (C).",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Custom certificates and domains are dedicated-load-balancer features."
      },
      "E": {
        "type": "Correct",
        "text": "URL mapping rules across applications are a dedicated-load-balancer feature."
      },
      "A": {
        "type": "Incorrect",
        "text": "A dedicated load balancer still requires an Anypoint VPC."
      },
      "B": {
        "type": "Incorrect",
        "text": "Both load balancers distribute requests across an application's workers."
      },
      "C": {
        "type": "Incorrect",
        "text": "Both load balancers serve applications over HTTPS."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Dedicated Load Balancer",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-dedicated-load-balancer"
      },
      "secondary": {
        "title": "Dedicated Load Balancer Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/lb-architecture"
      }
    }
  },
  {
    "id": "q-225",
    "number": 225,
    "title": "CloudHub Deployment - Connecting to the company's AWS VPC",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Networking",
      "VPC Peering"
    ],
    "prompt": "CloudHub applications must access databases in the company's own AWS VPC in the same region using private IPs. Which connectivity option fits?",
    "options": [
      {
        "letter": "A",
        "text": "Peer the Anypoint VPC with the company's AWS VPC so traffic uses private IPs"
      },
      {
        "letter": "B",
        "text": "Reach the database over the public internet using its public endpoint"
      },
      {
        "letter": "C",
        "text": "Connect through the shared load balancer's HTTPS endpoint"
      },
      {
        "letter": "D",
        "text": "Establish an IPsec VPN to the on-premises data center"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. For private IP access to a database in the company's own AWS VPC in the same region, the Anypoint VPC is peered with that AWS VPC. Public internet access (B) does not use private IPs, the shared load balancer (C) serves inbound traffic rather than database connectivity, and an IPsec VPN (D) is for on-premises networks.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "VPC peering provides private-IP connectivity to the company's AWS VPC."
      },
      "B": {
        "type": "Incorrect",
        "text": "Public endpoints do not provide private-IP access."
      },
      "C": {
        "type": "Incorrect",
        "text": "The shared load balancer handles inbound API traffic, not database connectivity."
      },
      "D": {
        "type": "Incorrect",
        "text": "An IPsec VPN targets on-premises networks, not another AWS VPC."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint VPC Connectivity Methods",
        "url": "https://docs.mulesoft.com/cloudhub/vpc-connectivity-methods-concept"
      },
      "secondary": {
        "title": "Anypoint Virtual Private Cloud",
        "url": "https://docs.mulesoft.com/cloudhub/virtual-private-cloud"
      }
    }
  },
  {
    "id": "q-226",
    "number": 226,
    "title": "CloudHub Deployment - On-premises data center",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Networking",
      "VPN"
    ],
    "prompt": "CloudHub applications must reach systems in the company's on-premises data center, which has no AWS presence. What is the typical connectivity option?",
    "options": [
      {
        "letter": "A",
        "text": "VPC peering between the Anypoint VPC and the on-premises data center"
      },
      {
        "letter": "B",
        "text": "An IPsec VPN from the Anypoint VPC to the on-premises network"
      },
      {
        "letter": "C",
        "text": "A dedicated load balancer deployed inside the data center"
      },
      {
        "letter": "D",
        "text": "An Exchange public portal that exposes the on-premises systems"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Reaching an on-premises data center that has no AWS presence is done with an IPsec VPN from the Anypoint VPC to the customer network. VPC peering (A) works only between VPCs, a dedicated load balancer (C) fronts inbound traffic within a VPC, and an Exchange portal (D) publishes assets rather than connecting networks.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "An IPsec VPN connects the Anypoint VPC to the on-premises network."
      },
      "A": {
        "type": "Incorrect",
        "text": "VPC peering connects VPCs, not a data center without an AWS presence."
      },
      "C": {
        "type": "Incorrect",
        "text": "A dedicated load balancer fronts inbound traffic; it does not connect to on-premises systems."
      },
      "D": {
        "type": "Incorrect",
        "text": "An Exchange portal publishes assets; it does not provide network connectivity."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint VPN",
        "url": "https://docs.mulesoft.com/cloudhub/vpn-about"
      },
      "secondary": {
        "title": "Anypoint VPC Connectivity Methods",
        "url": "https://docs.mulesoft.com/cloudhub/vpc-connectivity-methods-concept"
      }
    }
  },
  {
    "id": "q-227",
    "number": 227,
    "title": "CloudHub Deployment - Many VPCs and sites",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Networking",
      "Transit Gateway"
    ],
    "prompt": "A company has many AWS VPCs and several data centers already connected through an AWS Transit Gateway. It wants CloudHub to reach all of them. Which approach scales best?",
    "options": [
      {
        "letter": "A",
        "text": "Create a separate VPC peering connection for every AWS VPC"
      },
      {
        "letter": "B",
        "text": "Establish a VPN tunnel to every AWS VPC individually"
      },
      {
        "letter": "C",
        "text": "Attach the Anypoint VPC to the AWS Transit Gateway that already connects them"
      },
      {
        "letter": "D",
        "text": "Route all traffic over the public internet with encryption in the application"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Because the AWS VPCs and data centers are already joined through a Transit Gateway, attaching the Anypoint VPC to that gateway provides access to all of them with one connection. A peering connection per VPC (A) or a VPN per VPC (B) does not scale, and routing over the public internet (D) is not private connectivity.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Attaching to the existing Transit Gateway gives access to all connected networks with one attachment."
      },
      "A": {
        "type": "Incorrect",
        "text": "A peering connection per VPC grows with the estate and does not scale."
      },
      "B": {
        "type": "Incorrect",
        "text": "A VPN per VPC does not scale with many networks."
      },
      "D": {
        "type": "Incorrect",
        "text": "Public internet routing is not private connectivity."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint VPC Connectivity Methods",
        "url": "https://docs.mulesoft.com/cloudhub/vpc-connectivity-methods-concept"
      },
      "secondary": {
        "title": "Anypoint Virtual Private Cloud",
        "url": "https://docs.mulesoft.com/cloudhub/virtual-private-cloud"
      }
    }
  },
  {
    "id": "q-228",
    "number": 228,
    "title": "CloudHub Deployment - Dedicated private link",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Networking",
      "Direct Connect"
    ],
    "prompt": "A bank requires a dedicated private network connection between its data center and CloudHub with consistent bandwidth rather than VPN tunnels over the internet. Which option fits?",
    "options": [
      {
        "letter": "A",
        "text": "Larger CloudHub workers to increase the application's throughput"
      },
      {
        "letter": "B",
        "text": "A second shared load balancer to distribute the traffic"
      },
      {
        "letter": "C",
        "text": "VPC peering directly between the Anypoint VPC and the data center"
      },
      {
        "letter": "D",
        "text": "A dedicated private connection such as AWS Direct Connect to the Anypoint VPC"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. A dedicated private connection such as AWS Direct Connect provides consistent bandwidth and a private path instead of VPN tunnels over the internet. Larger workers (A) do not change network connectivity, a second shared load balancer (B) does not create a private circuit, and VPC peering (C) works only between VPCs.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "AWS Direct Connect provides a dedicated private connection with consistent bandwidth."
      },
      "A": {
        "type": "Incorrect",
        "text": "Worker size affects compute, not the network path."
      },
      "B": {
        "type": "Incorrect",
        "text": "A second shared load balancer does not provide a private circuit."
      },
      "C": {
        "type": "Incorrect",
        "text": "VPC peering connects VPCs, not a data center directly."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint VPC Connectivity Methods",
        "url": "https://docs.mulesoft.com/cloudhub/vpc-connectivity-methods-concept"
      },
      "secondary": {
        "title": "Anypoint VPC Network Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/vpc-architecture-concept"
      }
    }
  },
  {
    "id": "q-229",
    "number": 229,
    "title": "CloudHub Deployment - Choose two: connectivity methods",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Networking",
      "Anypoint VPC"
    ],
    "prompt": "A company must connect its Anypoint VPC to its corporate network and to its AWS environment so that Mule applications can reach on-premises systems and private AWS resources. Which two methods can connect an Anypoint VPC to customer networks?",
    "options": [
      {
        "letter": "A",
        "text": "IPsec VPN tunnels between the Anypoint VPC and the customer network"
      },
      {
        "letter": "B",
        "text": "API Manager SLA tiers assigned to the customer's client applications"
      },
      {
        "letter": "C",
        "text": "Exchange private portals shared with the customer's teams"
      },
      {
        "letter": "D",
        "text": "Persistent queues configured between the two networks"
      },
      {
        "letter": "E",
        "text": "VPC peering with a customer AWS VPC"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Correct answers: A and E. An Anypoint VPC connects to customer networks through IPsec VPN tunnels or through VPC peering with a customer AWS VPC. SLA tiers (B) and Exchange portals (C) govern access to APIs and assets rather than providing network connectivity, and persistent queues (D) are a messaging feature.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "IPsec VPN tunnels connect the Anypoint VPC to a customer network."
      },
      "E": {
        "type": "Correct",
        "text": "VPC peering connects the Anypoint VPC to a customer AWS VPC."
      },
      "B": {
        "type": "Incorrect",
        "text": "SLA tiers govern API quotas, not network connectivity."
      },
      "C": {
        "type": "Incorrect",
        "text": "Exchange portals govern asset access, not network connectivity."
      },
      "D": {
        "type": "Incorrect",
        "text": "Persistent queues are a messaging feature, not a connectivity method."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint VPC Connectivity Methods",
        "url": "https://docs.mulesoft.com/cloudhub/vpc-connectivity-methods-concept"
      },
      "secondary": {
        "title": "Anypoint VPN",
        "url": "https://docs.mulesoft.com/cloudhub/vpn-about"
      }
    }
  },
  {
    "id": "q-230",
    "number": 230,
    "title": "CloudHub Deployment - Single worker",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Single Point of Failure",
      "Workers"
    ],
    "prompt": "A critical Experience API runs on one 4 vCore CloudHub worker. What is the most significant single point of failure?",
    "options": [
      {
        "letter": "A",
        "text": "The API's Exchange asset"
      },
      {
        "letter": "B",
        "text": "The single worker"
      },
      {
        "letter": "C",
        "text": "The number of API policies applied"
      },
      {
        "letter": "D",
        "text": "The vCore size of the worker"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. With a single worker, any worker or data center failure makes the API unavailable until a replacement starts. Two or more smaller workers, spread across data centers, remove this single point of failure.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Exchange is not on the request path."
      },
      "B": {
        "type": "Correct",
        "text": "A failure of the only worker makes the API unavailable."
      },
      "C": {
        "type": "Incorrect",
        "text": "Policies do not create redundancy issues."
      },
      "D": {
        "type": "Incorrect",
        "text": "Size affects capacity, not redundancy."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub High Availability Features",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric"
      },
      "secondary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      }
    }
  },
  {
    "id": "q-231",
    "number": 231,
    "title": "CloudHub Deployment - Single VPN tunnel",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Single Point of Failure",
      "VPN"
    ],
    "prompt": "All CloudHub traffic to the on-premises ERP flows through one VPN connection terminating on one customer gateway. How can this single point of failure be removed?",
    "options": [
      {
        "letter": "A",
        "text": "Add more workers in the same region to spread the traffic"
      },
      {
        "letter": "B",
        "text": "Enable persistent queues so messages are not lost during an outage"
      },
      {
        "letter": "C",
        "text": "Add a second VPN connection terminating on a different customer gateway"
      },
      {
        "letter": "D",
        "text": "Increase the worker size so each worker can handle more traffic"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. A single VPN connection to one customer gateway is a single point of failure, so removing it means adding a second VPN connection that terminates on a different customer gateway. More workers (A) or larger workers (D) do not add a network path, and persistent queues (B) buffer messages but do not remove the connectivity single point of failure.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "A second VPN on a different customer gateway removes the network single point of failure."
      },
      "A": {
        "type": "Incorrect",
        "text": "More workers do not add a redundant network path."
      },
      "B": {
        "type": "Incorrect",
        "text": "Persistent queues buffer messages; they do not add a network path."
      },
      "D": {
        "type": "Incorrect",
        "text": "A larger worker does not provide network redundancy."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint VPN High Availability",
        "url": "https://docs.mulesoft.com/cloudhub/vpn-high-availability"
      },
      "secondary": {
        "title": "Anypoint VPN",
        "url": "https://docs.mulesoft.com/cloudhub/vpn-about"
      }
    }
  },
  {
    "id": "q-232",
    "number": 232,
    "title": "CloudHub Deployment - Downstream SPOF",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Single Point of Failure",
      "Dependencies"
    ],
    "prompt": "A Process API runs on three CloudHub workers, but every request depends on a single on-premises database server with no failover. What should the architect point out?",
    "options": [
      {
        "letter": "A",
        "text": "The workers will cache all data if the database fails"
      },
      {
        "letter": "B",
        "text": "CloudHub will fail the database over automatically"
      },
      {
        "letter": "C",
        "text": "Three workers make the whole solution highly available"
      },
      {
        "letter": "D",
        "text": "The database is still a single point of failure"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. End-to-end availability depends on every component in the request path. Even with multiple workers, a single non-redundant backend remains a single point of failure, which needs its own redundancy or fallback.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Scaling the API does not protect against the database failing."
      },
      "A": {
        "type": "Incorrect",
        "text": "No caching is described in the design."
      },
      "B": {
        "type": "Incorrect",
        "text": "CloudHub does not manage customer databases."
      },
      "C": {
        "type": "Incorrect",
        "text": "Availability is limited by the least available dependency."
      }
    },
    "references": {
      "primary": {
        "title": "High Availability and Disaster Recovery Across Deployment Models",
        "url": "https://docs.mulesoft.com/hosting-home/hadr-guide"
      },
      "secondary": {
        "title": "CloudHub High Availability Features",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric"
      }
    }
  },
  {
    "id": "q-233",
    "number": 233,
    "title": "CloudHub Deployment - Regional dependency",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Single Point of Failure",
      "Regions"
    ],
    "prompt": "A business requires its order API to survive the loss of a whole cloud region. It currently runs four workers in one CloudHub region. What is needed?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy to a second region"
      },
      {
        "letter": "B",
        "text": "Larger workers in the same region"
      },
      {
        "letter": "C",
        "text": "Persistent queues in the same region"
      },
      {
        "letter": "D",
        "text": "Four more workers in the same region"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Multiple workers in one region protect against data-center failures, but the region itself is a single point of failure. A second deployment in another region with a failover mechanism, such as DNS-based routing, removes it.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "Size does not change regional dependency."
      },
      "C": {
        "type": "Incorrect",
        "text": "Queues are regional too."
      },
      "A": {
        "type": "Correct",
        "text": "Only multi-region deployment protects against a regional outage."
      },
      "D": {
        "type": "Incorrect",
        "text": "They would share the same regional failure."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub High Availability and Disaster Recovery",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-hadr"
      },
      "secondary": {
        "title": "High Availability and Disaster Recovery Across Deployment Models",
        "url": "https://docs.mulesoft.com/hosting-home/hadr-guide"
      }
    }
  },
  {
    "id": "q-234",
    "number": 234,
    "title": "CloudHub Deployment - Choose two: removing SPOFs",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Single Point of Failure",
      "High Availability"
    ],
    "prompt": "An architect is reviewing a single-worker CloudHub deployment that is critical to the business and that reaches the corporate data center through a single VPN connection. Management asks what changes would eliminate single points of failure in this deployment. Which two changes remove single points of failure in a CloudHub deployment?",
    "options": [
      {
        "letter": "A",
        "text": "Disabling automatic restarts to avoid unexpected restarts"
      },
      {
        "letter": "B",
        "text": "Running at least two workers per application"
      },
      {
        "letter": "C",
        "text": "Placing all applications on the same single worker size"
      },
      {
        "letter": "D",
        "text": "Using one larger worker instead of two smaller ones"
      },
      {
        "letter": "E",
        "text": "Using redundant VPN connections to the data center"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Correct answers: B and E. Avoiding single points of failure means adding redundancy at every layer: at least two workers per application and redundant network connections to the data center. Disabling automatic restarts (A) reduces resilience, standardizing on one worker size (C) is unrelated to redundancy, and replacing two workers with one larger worker (D) actually creates a single point of failure.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Multiple workers remove the single-worker point of failure."
      },
      "E": {
        "type": "Correct",
        "text": "Redundant VPN connections survive the loss of one tunnel."
      },
      "A": {
        "type": "Incorrect",
        "text": "Disabling automatic restarts reduces resilience."
      },
      "C": {
        "type": "Incorrect",
        "text": "A shared worker size does not add redundancy."
      },
      "D": {
        "type": "Incorrect",
        "text": "One larger worker is itself a single point of failure."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub High Availability Features",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-fabric"
      },
      "secondary": {
        "title": "Anypoint VPN High Availability",
        "url": "https://docs.mulesoft.com/cloudhub/vpn-high-availability"
      }
    }
  },
  {
    "id": "q-235",
    "number": 235,
    "title": "API Quality Goals - Caching slow-changing reference data",
    "domain": "Meeting API quality goals",
    "topics": [
      "Caching",
      "HTTP Caching Policy"
    ],
    "prompt": "A Product Catalog Process API is called thousands of times per minute, but product descriptions change only once a day. The System API behind it is slow, and consumers accept data that is up to one hour old. Which approach most improves response times without changing the API implementation?",
    "options": [
      {
        "letter": "A",
        "text": "Apply the HTTP Caching policy to the System API with a five-minute time-to-live"
      },
      {
        "letter": "B",
        "text": "Scale the System API out to more workers so each call returns faster"
      },
      {
        "letter": "C",
        "text": "Apply the HTTP Caching policy to the Process API with a one-hour time-to-live"
      },
      {
        "letter": "D",
        "text": "Increase the Process API's worker size so it can handle the call volume"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Consumers accept data up to an hour old and the catalog changes once a day, so caching the Process API's responses with a one-hour TTL removes almost all backend calls while staying within the freshness the consumers accept. A five-minute TTL on the System API (A) still lets far more calls through, and adding workers or a larger worker (B, D) does not reduce the number of calls the slow System API must serve.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "A one-hour TTL matches the accepted staleness and removes most backend calls."
      },
      "A": {
        "type": "Incorrect",
        "text": "A five-minute TTL is far stricter than the consumers require, so it removes much less load."
      },
      "B": {
        "type": "Incorrect",
        "text": "Scaling out serves more calls faster but does not reduce how many the System API receives."
      },
      "D": {
        "type": "Incorrect",
        "text": "A larger worker does not reduce the number of calls reaching the System API."
      }
    },
    "references": {
      "primary": {
        "title": "HTTP Caching Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-http-caching"
      },
      "secondary": {
        "title": "Mule Runtime — Cache Scope",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/cache-scope"
      }
    }
  },
  {
    "id": "q-236",
    "number": 236,
    "title": "API Quality Goals - Data that must not be cached",
    "domain": "Meeting API quality goals",
    "topics": [
      "Caching",
      "Suitability"
    ],
    "prompt": "An architect is considering caching for several APIs. For which API is response caching least appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "A Country Codes API whose data changes a few times a year and is read at every checkout"
      },
      {
        "letter": "B",
        "text": "A Product Images API that serves the same static images to every client"
      },
      {
        "letter": "C",
        "text": "A Store Locations API that is updated weekly and read constantly by a store locator"
      },
      {
        "letter": "D",
        "text": "An Account Balance API used to authorize payments in real time"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Response caching is appropriate when the same response can safely be reused, which is true of slowly changing reference data and static content (A, B, C). A real-time account balance used to authorize a payment must reflect the current state on every call, so a cached response could authorize a payment against a stale balance.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Authorizing a payment requires the current balance, so a cached response is unsafe."
      },
      "A": {
        "type": "Incorrect",
        "text": "Slowly changing reference data is an ideal caching candidate."
      },
      "B": {
        "type": "Incorrect",
        "text": "Static content shared by all clients is an ideal caching candidate."
      },
      "C": {
        "type": "Incorrect",
        "text": "Data updated weekly and read constantly is a good caching candidate."
      }
    },
    "references": {
      "primary": {
        "title": "Mule Runtime — Cache Scope",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/cache-scope"
      },
      "secondary": {
        "title": "HTTP Caching Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-http-caching"
      }
    }
  },
  {
    "id": "q-237",
    "number": 237,
    "title": "API Quality Goals - Sharing state across CloudHub workers",
    "domain": "Meeting API quality goals",
    "topics": [
      "Object Store",
      "Object Store v2"
    ],
    "prompt": "A Mule application deployed to CloudHub with two workers stores a watermark that records the last processed record ID. After a restart or when the other worker runs the job, the watermark must still be available. Where should the watermark be stored?",
    "options": [
      {
        "letter": "A",
        "text": "In a persistent object store such as Object Store v2, shared by all workers"
      },
      {
        "letter": "B",
        "text": "In an in-memory object store on each worker, which the runtime keeps in sync"
      },
      {
        "letter": "C",
        "text": "In a flow variable that is set at the end of each run"
      },
      {
        "letter": "D",
        "text": "In a file written to each worker's local disk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. A shared persistent store such as Object Store v2 keeps the watermark available to both workers and across restarts. An in-memory store (B) is per worker, a flow variable (C) is scoped to one event, and the worker's local disk (D) is not shared or durable.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Object Store v2 is shared and persistent, so the watermark survives restarts and is visible to both workers."
      },
      "B": {
        "type": "Incorrect",
        "text": "An in-memory store is per worker and is not shared."
      },
      "C": {
        "type": "Incorrect",
        "text": "A flow variable is scoped to a single event."
      },
      "D": {
        "type": "Incorrect",
        "text": "The local disk is neither shared between workers nor durable."
      }
    },
    "references": {
      "primary": {
        "title": "Object Store v2 Guide",
        "url": "https://docs.mulesoft.com/object-store/osv2-guide"
      },
      "secondary": {
        "title": "Mule Runtime — Object Stores",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/mule-object-stores"
      }
    }
  },
  {
    "id": "q-238",
    "number": 238,
    "title": "API Quality Goals - Cache scope versus caching policy",
    "domain": "Meeting API quality goals",
    "topics": [
      "Caching",
      "Cache Scope"
    ],
    "prompt": "A Process API calls three System APIs. Only the call to the Tax Rate System API returns data that is the same for all requests from the same region and changes monthly. The other two calls return customer-specific, real-time data. What is the best way to apply caching?",
    "options": [
      {
        "letter": "A",
        "text": "Cache all three System API responses for one month"
      },
      {
        "letter": "B",
        "text": "Wrap only the Tax Rate call in a Cache scope keyed by region"
      },
      {
        "letter": "C",
        "text": "Apply the HTTP Caching policy to the whole Process API"
      },
      {
        "letter": "D",
        "text": "Cache only the two customer-specific calls, because they are the slowest"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Only the Tax Rate call returns data that is the same for every request from a region and changes monthly, so wrapping just that call in a Cache scope keyed by region reuses it safely. Caching all three (A) would serve stale customer-specific data, caching the whole Process API (C) would mix responses across customers, and caching the customer-specific calls (D) would return another customer's data.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "A region-keyed cache around the Tax Rate call reuses data that is identical per region."
      },
      "A": {
        "type": "Incorrect",
        "text": "Caching all three would serve stale customer-specific data."
      },
      "C": {
        "type": "Incorrect",
        "text": "Caching the whole Process API would mix responses across customers."
      },
      "D": {
        "type": "Incorrect",
        "text": "Caching customer-specific calls would return another customer's data."
      }
    },
    "references": {
      "primary": {
        "title": "Mule Runtime — Cache Scope",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/cache-scope"
      },
      "secondary": {
        "title": "HTTP Caching Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-http-caching"
      }
    }
  },
  {
    "id": "q-239",
    "number": 239,
    "title": "API Quality Goals - Idempotent request detection",
    "domain": "Meeting API quality goals",
    "topics": [
      "Object Store",
      "Idempotency"
    ],
    "prompt": "A Payments Process API sometimes receives the same request twice because clients retry after timeouts. Each request carries a unique transaction ID. The API runs on several CloudHub workers. How can duplicate processing be prevented?",
    "options": [
      {
        "letter": "A",
        "text": "Apply the HTTP Caching policy so that a repeated POST returns the first response"
      },
      {
        "letter": "B",
        "text": "Store the processed transaction IDs in a variable inside the flow"
      },
      {
        "letter": "C",
        "text": "Store the processed transaction IDs in a persistent object store shared by all workers"
      },
      {
        "letter": "D",
        "text": "Enable persistent queues on the API so that each request is delivered exactly once"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Detecting duplicates requires remembering which transaction IDs have already been processed, in a store shared by all workers; a persistent object store such as Object Store v2 does this. Caching a POST (A) is not appropriate for payment requests, a flow variable (B) is scoped to one event and one worker, and persistent queues (D) provide at-least-once delivery rather than deduplication.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "POST payment requests should not be cached, and caching does not deduplicate them."
      },
      "B": {
        "type": "Incorrect",
        "text": "Variables are per event and per worker, so duplicates on another worker are not detected."
      },
      "D": {
        "type": "Incorrect",
        "text": "Persistent queues are at-least-once and do not deduplicate client retries."
      },
      "C": {
        "type": "Correct",
        "text": "A shared persistent store lets every worker check whether an ID was already processed."
      }
    },
    "references": {
      "primary": {
        "title": "Mule Runtime — Object Stores",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/mule-object-stores"
      },
      "secondary": {
        "title": "Object Store v2 Guide",
        "url": "https://docs.mulesoft.com/object-store/osv2-guide"
      }
    }
  },
  {
    "id": "q-240",
    "number": 240,
    "title": "API Quality Goals - Fallback to cached data",
    "domain": "Meeting API quality goals",
    "topics": [
      "Caching",
      "Resilience"
    ],
    "prompt": "An Experience API displays loyalty points from a Loyalty Process API. The business accepts showing points that are a few hours old if the Process API is unavailable, rather than showing an error. Which design meets this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Apply a Rate Limiting policy to the Process API so it stays available under load"
      },
      {
        "letter": "B",
        "text": "Apply the HTTP Caching policy to the Process API so responses are reused across all clients"
      },
      {
        "letter": "C",
        "text": "Configure the Experience API to retry the Process API with exponential backoff until it responds"
      },
      {
        "letter": "D",
        "text": "Cache each successful response in the Experience API and return the cached value when the call fails"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. The requirement is a fallback that returns recently cached data when the Process API is unavailable, so the Experience API caches each good response and serves it on failure. Rate limiting (A) does not provide a fallback, caching at the gateway (B) does not define what happens on failure and would also mix per-user responses, and retrying until success (C) makes the client wait rather than respond.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Rate limiting protects availability but provides no fallback value."
      },
      "B": {
        "type": "Incorrect",
        "text": "A gateway cache reuses responses but does not implement the failure fallback, and risks mixing users' data."
      },
      "D": {
        "type": "Correct",
        "text": "Caching a good response and returning it on failure meets the accepted-staleness requirement."
      },
      "C": {
        "type": "Incorrect",
        "text": "Retrying until success makes the client wait instead of returning a result."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Making a Fault-tolerant Application Network",
        "url": "https://blogs.mulesoft.com/dev-guides/application-network-fault-tolerance/"
      },
      "secondary": {
        "title": "Mule Runtime — Object Stores",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/mule-object-stores"
      }
    }
  },
  {
    "id": "q-241",
    "number": 241,
    "title": "API Quality Goals - Object Store data retention",
    "domain": "Meeting API quality goals",
    "topics": [
      "Object Store",
      "Object Store v2"
    ],
    "prompt": "A team plans to use Object Store v2 on CloudHub as the permanent system of record for customer preferences, retained indefinitely. What should the architect advise?",
    "options": [
      {
        "letter": "A",
        "text": "Use a database, because Object Store v2 entries have a limited time-to-live"
      },
      {
        "letter": "B",
        "text": "Proceed, but switch to the in-memory object store so the data survives restarts"
      },
      {
        "letter": "C",
        "text": "Proceed, because Object Store v2 retains entries indefinitely unless they are deleted"
      },
      {
        "letter": "D",
        "text": "Store the preferences in the application's properties so they are always available"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Object Store v2 is designed for transient application state such as caching, watermarks, and deduplication, and its entries have a maximum time-to-live, so it is not a permanent system of record. An in-memory store is less durable (B), entries do expire (C), and application properties are configuration rather than mutable records (D).",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Object Store v2 entries expire after their TTL, so a database is the right system of record."
      },
      "B": {
        "type": "Incorrect",
        "text": "An in-memory store is less durable than the persistent store."
      },
      "C": {
        "type": "Incorrect",
        "text": "Object Store v2 entries expire after their time-to-live."
      },
      "D": {
        "type": "Incorrect",
        "text": "Application properties hold configuration, not mutable customer records."
      }
    },
    "references": {
      "primary": {
        "title": "Object Store v2 FAQ",
        "url": "https://docs.mulesoft.com/object-store/osv2-faq"
      },
      "secondary": {
        "title": "Object Store v2 — Usage Information",
        "url": "https://docs.mulesoft.com/object-store/osv2-usage"
      }
    }
  },
  {
    "id": "q-242",
    "number": 242,
    "title": "API Quality Goals - Choose two: Object Store use cases",
    "domain": "Meeting API quality goals",
    "topics": [
      "Object Store",
      "Use Cases"
    ],
    "prompt": "A Mule application deployed to CloudHub must keep a watermark of the last processed record for incremental database polling and cache access tokens for a downstream API until they expire. The architect is evaluating a persistent object store for these needs. Which two scenarios are appropriate uses of a persistent object store in a Mule application deployed to CloudHub?",
    "options": [
      {
        "letter": "A",
        "text": "Storing large binary documents as the application's permanent archive"
      },
      {
        "letter": "B",
        "text": "Keeping a watermark for incremental polling of a database"
      },
      {
        "letter": "C",
        "text": "Replacing the CRM as the master record of customer accounts"
      },
      {
        "letter": "D",
        "text": "Running complex relational queries across the stored records for reporting"
      },
      {
        "letter": "E",
        "text": "Caching access tokens for a downstream API until they expire"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Correct answers: B and E. A persistent object store holds shared key-value state such as a polling watermark and cached access tokens that must be visible to every worker. It is not for permanent large-file archiving (A), it is not a system of record (C), and it cannot run relational queries (D).",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A persistent object store has a limited TTL and is not a permanent archive."
      },
      "C": {
        "type": "Incorrect",
        "text": "A persistent object store is application state, not a system of record."
      },
      "D": {
        "type": "Incorrect",
        "text": "It offers key-value access, not relational querying."
      },
      "B": {
        "type": "Correct",
        "text": "A watermark is shared, persistent state that suits a persistent object store."
      },
      "E": {
        "type": "Correct",
        "text": "Caching tokens until they expire is a suitable shared-state use."
      }
    },
    "references": {
      "primary": {
        "title": "Mule Runtime — Object Stores",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/mule-object-stores"
      },
      "secondary": {
        "title": "Object Store v2 Guide",
        "url": "https://docs.mulesoft.com/object-store/osv2-guide"
      }
    }
  },
  {
    "id": "q-243",
    "number": 243,
    "title": "API Quality Goals - Cache key design",
    "domain": "Meeting API quality goals",
    "topics": [
      "Caching",
      "Cache Key"
    ],
    "prompt": "An API returns personalized recommendations for each signed-in customer. A developer applies the HTTP Caching policy using only the request path as the cache key. What problem will this cause?",
    "options": [
      {
        "letter": "A",
        "text": "The cache will never return a hit, because the path differs for each customer"
      },
      {
        "letter": "B",
        "text": "All personalized responses will be stored under one key, so the cache will fill and evict the entries it needs"
      },
      {
        "letter": "C",
        "text": "Customers may receive another customer's cached recommendations"
      },
      {
        "letter": "D",
        "text": "The policy will cache only the response headers, not the personalized body"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. A cache key must include every input that changes the response. With only the path as the key, every customer's request maps to the same entry, so one customer's recommendations can be served to another; the key must include the customer's identity or the response must not be cached. The path does not vary per customer (A), the problem is cross-user leakage rather than cache churn (B), and the policy caches the response rather than headers only (D).",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The path is the same for all customers, so the cache will return hits, which is the problem."
      },
      "B": {
        "type": "Incorrect",
        "text": "The concern is cross-user leakage, not the cache filling up."
      },
      "C": {
        "type": "Correct",
        "text": "Requests with the same path share one entry, so personalized data can leak between users."
      },
      "D": {
        "type": "Incorrect",
        "text": "The policy caches the response, not just the headers."
      }
    },
    "references": {
      "primary": {
        "title": "HTTP Caching Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-http-caching"
      },
      "secondary": {
        "title": "Mule Runtime — Cache Scope",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/cache-scope"
      }
    }
  },
  {
    "id": "q-244",
    "number": 244,
    "title": "API Quality Goals - Invalidating cached data",
    "domain": "Meeting API quality goals",
    "topics": [
      "Caching",
      "Freshness"
    ],
    "prompt": "Prices for a Price List API are cached for 24 hours. The business now requires that a price change be visible within five minutes, while still reducing backend load as much as possible. What should the architect do?",
    "options": [
      {
        "letter": "A",
        "text": "Remove caching entirely so that every request reaches the backend with current prices"
      },
      {
        "letter": "B",
        "text": "Keep the 24-hour TTL but add a cache key that includes the current date"
      },
      {
        "letter": "C",
        "text": "Scale the backend horizontally so it can serve every request directly"
      },
      {
        "letter": "D",
        "text": "Reduce the cache time-to-live to five minutes or less"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Lowering the TTL to five minutes or less makes a price change visible within the required window while still absorbing repeated reads between refreshes. Removing caching (A) removes all load reduction, a date-based cache key (B) still serves data up to a day old, and scaling the backend (C) does not satisfy the freshness requirement.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "A five-minute TTL meets the freshness requirement while still reducing backend load."
      },
      "A": {
        "type": "Incorrect",
        "text": "Removing caching gives up the load reduction entirely."
      },
      "B": {
        "type": "Incorrect",
        "text": "A date-based key still serves data that can be up to a day old."
      },
      "C": {
        "type": "Incorrect",
        "text": "Scaling the backend does not change how stale the cached data is."
      }
    },
    "references": {
      "primary": {
        "title": "HTTP Caching Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-http-caching"
      },
      "secondary": {
        "title": "Mule Runtime — Cache Scope",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/cache-scope"
      }
    }
  },
  {
    "id": "q-245",
    "number": 245,
    "title": "API Quality Goals - First step toward fault tolerance",
    "domain": "Meeting API quality goals",
    "topics": [
      "Resilience",
      "Timeouts"
    ],
    "prompt": "An Experience API must respond within 2 seconds. It calls a Process API that occasionally hangs for 30 seconds before failing. Which change should be made first so that the Experience API does not violate its own SLA?",
    "options": [
      {
        "letter": "A",
        "text": "Set a timeout that fits within the 2-second SLA"
      },
      {
        "letter": "B",
        "text": "Increase the Experience API's worker size"
      },
      {
        "letter": "C",
        "text": "Apply a rate limiting policy to the Experience API"
      },
      {
        "letter": "D",
        "text": "Retry the Process API call five times before responding"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Timeouts are the first fault-tolerance measure for API invocations. They should be set as low as possible and in line with the API client's own SLA, so that a slow or hung dependency does not cause the client to fail its consumers.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "More CPU and memory do not shorten the time spent waiting for a hung dependency."
      },
      "C": {
        "type": "Incorrect",
        "text": "Rate limiting caps traffic but does not stop the client from waiting 30 seconds."
      },
      "D": {
        "type": "Incorrect",
        "text": "Retrying a call that hangs multiplies the wait and makes the SLA worse."
      },
      "A": {
        "type": "Correct",
        "text": "A timeout stops waiting for a hung call and lets the client respond in time."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Making a Fault-tolerant Application Network",
        "url": "https://blogs.mulesoft.com/dev-guides/application-network-fault-tolerance/"
      },
      "secondary": {
        "title": "HTTP Connector — Request Reference",
        "url": "https://docs.mulesoft.com/http-connector/latest/http-request-ref"
      }
    }
  },
  {
    "id": "q-246",
    "number": 246,
    "title": "API Quality Goals - Retrying transient failures",
    "domain": "Meeting API quality goals",
    "topics": [
      "Resilience",
      "Retries"
    ],
    "prompt": "A Process API calls a System API that sometimes returns HTTP 503 for a few seconds during backend maintenance. The operation is a read and can safely be repeated. Which strategy is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "Retry by calling a different HTTP method on the same resource, because the read is safe"
      },
      {
        "letter": "B",
        "text": "Retry a limited number of times with a delay between attempts"
      },
      {
        "letter": "C",
        "text": "Return the error to the consumer immediately, since the consumer can retry the read itself"
      },
      {
        "letter": "D",
        "text": "Retry continuously with no delay until the call succeeds"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Retries help when failures are transient, but they should be limited and spaced out, and applied only to operations that are safe to repeat; Mule's Until Successful scope supports a maximum number of retries and a delay. Changing the method (A) changes the meaning of the request, returning the error immediately (C) fails requests that would succeed a moment later, and continuous retries (D) can overload a recovering API.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Changing the method changes the meaning of the request."
      },
      "B": {
        "type": "Correct",
        "text": "Limited, spaced retries overcome transient failures without overloading the API."
      },
      "C": {
        "type": "Incorrect",
        "text": "Giving up immediately fails requests that would succeed a moment later."
      },
      "D": {
        "type": "Incorrect",
        "text": "Unlimited immediate retries can overload a recovering API and hang the client."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Making a Fault-tolerant Application Network",
        "url": "https://blogs.mulesoft.com/dev-guides/application-network-fault-tolerance/"
      },
      "secondary": {
        "title": "Mule Runtime — Until Successful Scope",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/until-successful-scope"
      }
    }
  },
  {
    "id": "q-247",
    "number": 247,
    "title": "API Quality Goals - Retries and non-idempotent operations",
    "domain": "Meeting API quality goals",
    "topics": [
      "Resilience",
      "Idempotency"
    ],
    "prompt": "A client times out while calling POST /payments, and it does not know whether the payment was created. What must be in place before the client automatically retries the request?",
    "options": [
      {
        "letter": "A",
        "text": "Nothing, because HTTP POST is idempotent by definition"
      },
      {
        "letter": "B",
        "text": "A Spike Control policy on the Payments API"
      },
      {
        "letter": "C",
        "text": "An idempotency key that lets the API detect repeats"
      },
      {
        "letter": "D",
        "text": "A longer cache time-to-live on the Payments API"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Retries are safe only for idempotent operations. Methods such as GET, PUT, and DELETE are idempotent, but POST is not, so retrying a POST can create duplicates. Before retrying, the API must be able to detect repeated requests, for example through a unique ID supplied by the client and stored by the API.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Without duplicate detection, a retried POST may create a second payment."
      },
      "A": {
        "type": "Incorrect",
        "text": "POST is not idempotent; repeating it can create duplicate resources."
      },
      "B": {
        "type": "Incorrect",
        "text": "Spike Control smooths traffic and does not detect duplicate requests."
      },
      "D": {
        "type": "Incorrect",
        "text": "Caching does not prevent duplicate creation by POST requests."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Making a Fault-tolerant Application Network",
        "url": "https://blogs.mulesoft.com/dev-guides/application-network-fault-tolerance/"
      },
      "secondary": {
        "title": "Mule Runtime — Object Stores",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/mule-object-stores"
      }
    }
  },
  {
    "id": "q-248",
    "number": 248,
    "title": "API Quality Goals - Stop calling a failing API",
    "domain": "Meeting API quality goals",
    "topics": [
      "Resilience",
      "Circuit Breaker"
    ],
    "prompt": "A Process API calls a Credit Check System API. When the credit bureau is down, every call waits for a timeout, threads pile up, and the Process API itself becomes slow for all consumers. Which pattern best prevents this cascading failure?",
    "options": [
      {
        "letter": "A",
        "text": "Longer timeouts so that the credit bureau has more time to respond"
      },
      {
        "letter": "B",
        "text": "An HTTP Caching policy on the Process API"
      },
      {
        "letter": "C",
        "text": "More retries for each credit check call"
      },
      {
        "letter": "D",
        "text": "A circuit breaker that fails fast and probes later"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. A circuit breaker tracks failures of a dependency and, after a threshold, stops calling it for a period, failing fast instead of waiting for timeouts. It then allows trial calls to detect recovery. This prevents failures from propagating to the API client and its consumers.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Longer timeouts make threads pile up faster during an outage."
      },
      "B": {
        "type": "Incorrect",
        "text": "Credit checks are customer-specific and current, and caching does not address the outage."
      },
      "D": {
        "type": "Correct",
        "text": "Opening the circuit stops waiting on a known-failing dependency and protects the client's resources."
      },
      "C": {
        "type": "Incorrect",
        "text": "Additional retries increase load and waiting time when the dependency is down."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Making a Fault-tolerant Application Network",
        "url": "https://blogs.mulesoft.com/dev-guides/application-network-fault-tolerance/"
      },
      "secondary": {
        "title": "MuleSoft Developers — Circuit Breaker Custom Policy",
        "url": "https://developer.mulesoft.com/tutorials-and-howtos/custom-api-policies-api-manager-circuit-breaker-policy/"
      }
    }
  },
  {
    "id": "q-249",
    "number": 249,
    "title": "API Quality Goals - Fallback options",
    "domain": "Meeting API quality goals",
    "topics": [
      "Resilience",
      "Fallback"
    ],
    "prompt": "An Experience API calls a Recommendations Process API to show suggested products. If the Process API fails, the page must still load. Which fallback is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "Return a default list of best-selling products when the call fails"
      },
      {
        "letter": "B",
        "text": "Block the page until the Process API recovers and then render the recommendations"
      },
      {
        "letter": "C",
        "text": "Apply the HTTP Caching policy to the Process API so its responses are reused when it fails"
      },
      {
        "letter": "D",
        "text": "Retry the Process API with increasing delays until it eventually succeeds"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. The requirement is that the page still loads, so the Experience API should return a sensible fallback such as a default list of best-selling products. Blocking the page (B) or retrying until success (D) makes the user wait, and a gateway cache (C) reuses responses but does not define the fallback behavior when the dependency fails.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "Blocking makes the page wait for a dependency that may be down."
      },
      "C": {
        "type": "Incorrect",
        "text": "A gateway cache reuses responses but does not implement the failure fallback."
      },
      "D": {
        "type": "Incorrect",
        "text": "Retrying until success makes the user wait instead of loading the page."
      },
      "A": {
        "type": "Correct",
        "text": "A default list lets the page load even when the dependency fails."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Making a Fault-tolerant Application Network",
        "url": "https://blogs.mulesoft.com/dev-guides/application-network-fault-tolerance/"
      },
      "secondary": {
        "title": "Mule Runtime — Try Scope",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/try-scope-concept"
      }
    }
  },
  {
    "id": "q-250",
    "number": 250,
    "title": "API Quality Goals - Handling rate-limit responses",
    "domain": "Meeting API quality goals",
    "topics": [
      "Resilience",
      "Rate Limiting"
    ],
    "prompt": "A partner's client application calls an API protected by a Rate Limiting policy and starts receiving HTTP 429 responses during peak hours. How should the client application behave?",
    "options": [
      {
        "letter": "A",
        "text": "Treat the 429 as a permanent failure and stop calling the API until the contract is renewed"
      },
      {
        "letter": "B",
        "text": "Back off and retry after the rate-limit window resets"
      },
      {
        "letter": "C",
        "text": "Retry immediately in a tight loop until a request succeeds"
      },
      {
        "letter": "D",
        "text": "Rotate the client secret more frequently so the quota resets sooner"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. HTTP 429 means the client exceeded its quota for the current window; the correct behavior is to back off and retry after the window resets, honoring any Retry-After header. Treating it as permanent (A) gives up a transient condition, a tight retry loop (C) makes the throttling worse, and rotating the secret (D) does not change the quota.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A 429 is a transient quota condition, not a permanent failure."
      },
      "B": {
        "type": "Correct",
        "text": "Backing off and retrying after the window resets respects the quota."
      },
      "C": {
        "type": "Incorrect",
        "text": "Immediate retries make the throttling worse."
      },
      "D": {
        "type": "Incorrect",
        "text": "Rotating the secret does not change the quota window."
      }
    },
    "references": {
      "primary": {
        "title": "Rate Limiting Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-rate-limiting"
      },
      "secondary": {
        "title": "MuleSoft Blog — Making a Fault-tolerant Application Network",
        "url": "https://blogs.mulesoft.com/dev-guides/application-network-fault-tolerance/"
      }
    }
  },
  {
    "id": "q-251",
    "number": 251,
    "title": "API Quality Goals - Retries in a layered network",
    "domain": "Meeting API quality goals",
    "topics": [
      "Resilience",
      "Retries"
    ],
    "prompt": "In an application network, the Experience API retries failed calls three times, the Process API retries three times, and the System API retries three times. During a backend outage, what is the main risk?",
    "options": [
      {
        "letter": "A",
        "text": "Each layer's retries are deduplicated by the API gateway, so the backend sees a single call"
      },
      {
        "letter": "B",
        "text": "Mule runtime ignores configured retries in the lower layers during an outage"
      },
      {
        "letter": "C",
        "text": "Retries multiply across layers and can overload the backend"
      },
      {
        "letter": "D",
        "text": "Retries cancel each other out, so the backend receives fewer calls"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Retries at every layer compound: retries at one layer multiply the calls made by the layer above, so three retries at three layers can produce many times the original number of calls and overload a recovering backend. The gateway does not deduplicate retries across layers (A), Mule executes configured retries regardless of the cause (B), and nested retries add calls rather than cancel them (D).",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "No component deduplicates retries across layers."
      },
      "B": {
        "type": "Incorrect",
        "text": "Mule runtime executes configured retries regardless of the cause."
      },
      "C": {
        "type": "Correct",
        "text": "Each layer's retries multiply the calls reaching the backend."
      },
      "D": {
        "type": "Incorrect",
        "text": "Nested retries add calls; they do not cancel out."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Making a Fault-tolerant Application Network",
        "url": "https://blogs.mulesoft.com/dev-guides/application-network-fault-tolerance/"
      },
      "secondary": {
        "title": "Mule Runtime — Until Successful Scope",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/until-successful-scope"
      }
    }
  },
  {
    "id": "q-252",
    "number": 252,
    "title": "API Quality Goals - Choose two client-side strategies",
    "domain": "Meeting API quality goals",
    "topics": [
      "Resilience",
      "Fault Tolerance"
    ],
    "prompt": "An Experience API calls a Process API that sometimes fails. Which two strategies help the Experience API remain available to its own clients? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Set a very long timeout so the Process API always has time to respond"
      },
      {
        "letter": "B",
        "text": "Return every downstream error unchanged to the end user so the client can decide"
      },
      {
        "letter": "C",
        "text": "Call the Process API with a new client ID on each attempt to spread the load"
      },
      {
        "letter": "D",
        "text": "Use a timeout aligned with the Experience API's own SLA"
      },
      {
        "letter": "E",
        "text": "Return a cached or default result when the call fails"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Correct answers: D and E. Fault-tolerant invocations stop a dependency's failures from reaching the API's own consumers: a timeout aligned with the SLA bounds the wait, and a fallback such as a cached or default result lets the API still respond. A very long timeout (A) lets a slow dependency consume the response time, propagating errors (B) spreads the failure, and changing the client ID per attempt (C) breaks governance and does not improve reliability.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "A timeout aligned with the SLA prevents a slow dependency from consuming the client's response time."
      },
      "A": {
        "type": "Incorrect",
        "text": "A very long timeout lets a slow call exhaust threads and break the SLA."
      },
      "B": {
        "type": "Incorrect",
        "text": "Propagating errors spreads the failure to clients instead of containing it."
      },
      "C": {
        "type": "Incorrect",
        "text": "Changing credentials does not make calls more reliable and breaks governance."
      },
      "E": {
        "type": "Correct",
        "text": "A fallback lets the API respond successfully even when the dependency fails."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Making a Fault-tolerant Application Network",
        "url": "https://blogs.mulesoft.com/dev-guides/application-network-fault-tolerance/"
      },
      "secondary": {
        "title": "Mule Runtime — Try Scope",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/try-scope-concept"
      }
    }
  },
  {
    "id": "q-253",
    "number": 253,
    "title": "API Quality Goals - Alternative API as fallback",
    "domain": "Meeting API quality goals",
    "topics": [
      "Resilience",
      "Fallback"
    ],
    "prompt": "A Shipping Rates Process API calls a primary carrier's rate API. A second carrier offers an equivalent API with similar rates. The business prefers a slightly different quote over no quote. Which strategy should the architect use?",
    "options": [
      {
        "letter": "A",
        "text": "Call the second carrier's API as a fallback when the primary carrier fails"
      },
      {
        "letter": "B",
        "text": "Cache the primary carrier's quotes for a year so a quote is always available"
      },
      {
        "letter": "C",
        "text": "Retry the primary carrier with exponential backoff until it responds"
      },
      {
        "letter": "D",
        "text": "Return HTTP 503 with a Retry-After header and ask the client to try the next day"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Because an equivalent carrier API is available and the business prefers a slightly different quote over no quote, calling the second carrier as a fallback meets the requirement. Caching quotes for a year (B) serves stale rates, retrying until success (C) makes the client wait, and returning 503 (D) returns no quote at all.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "Year-old quotes are unusable for shipping rates."
      },
      "A": {
        "type": "Correct",
        "text": "A second carrier API provides an equivalent quote when the primary fails."
      },
      "C": {
        "type": "Incorrect",
        "text": "Retrying until success makes the client wait for the primary carrier."
      },
      "D": {
        "type": "Incorrect",
        "text": "Returning 503 provides no quote, which the business wants to avoid."
      }
    },
    "references": {
      "primary": {
        "title": "MuleSoft Blog — Making a Fault-tolerant Application Network",
        "url": "https://blogs.mulesoft.com/dev-guides/application-network-fault-tolerance/"
      },
      "secondary": {
        "title": "Mule Runtime — Try Scope",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/try-scope-concept"
      }
    }
  },
  {
    "id": "q-254",
    "number": 254,
    "title": "API Quality Goals - Protecting an API from sudden bursts",
    "domain": "Meeting API quality goals",
    "topics": [
      "Resilience",
      "Spike Control"
    ],
    "prompt": "A System API in front of a fragile legacy backend receives short traffic bursts that cause the backend to fail, although average load is low. The provider wants to smooth the bursts by delaying excess requests briefly instead of rejecting them immediately. Which policy should be applied?",
    "options": [
      {
        "letter": "A",
        "text": "Client ID Enforcement, so that only known callers reach the fragile backend"
      },
      {
        "letter": "B",
        "text": "Spike Control, which delays excess requests to smooth the bursts"
      },
      {
        "letter": "C",
        "text": "Rate Limiting, configured to reject requests above the backend's capacity"
      },
      {
        "letter": "D",
        "text": "HTTP Caching, so that repeated requests are served without reaching the backend"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Spike Control smooths short bursts by delaying excess requests to a configured rate instead of rejecting them, which is exactly what the provider wants. Client ID Enforcement (A) restricts callers rather than smoothing load, Rate Limiting (C) rejects requests rather than delaying them, and caching (D) only helps repeated identical requests.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Client ID Enforcement restricts callers; it does not smooth bursts."
      },
      "C": {
        "type": "Incorrect",
        "text": "Rate Limiting rejects excess requests rather than delaying them."
      },
      "D": {
        "type": "Incorrect",
        "text": "Caching helps only repeated identical requests, not bursts."
      },
      "B": {
        "type": "Correct",
        "text": "Spike Control delays excess requests to smooth the bursts."
      }
    },
    "references": {
      "primary": {
        "title": "Spike Control Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-spike-control"
      },
      "secondary": {
        "title": "Rate Limiting Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-rate-limiting"
      }
    }
  },
  {
    "id": "q-255",
    "number": 255,
    "title": "API Quality Goals - Scaling a CPU-bound API",
    "domain": "Meeting API quality goals",
    "topics": [
      "Horizontal Scaling",
      "Throughput"
    ],
    "prompt": "A stateless pricing API performs heavy calculations in memory and has no downstream calls. At peak, CPU usage on its CloudHub workers reaches 100%, and requests queue up. What effect will adding workers most likely have?",
    "options": [
      {
        "letter": "A",
        "text": "No effect, because horizontal scaling only helps APIs that wait on downstream systems"
      },
      {
        "letter": "B",
        "text": "Lower throughput, because the load balancer adds latency to every request"
      },
      {
        "letter": "C",
        "text": "Higher throughput and lower response times at peak"
      },
      {
        "letter": "D",
        "text": "Faster processing of each individual calculation, because the work is split across workers"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. The API is stateless and CPU-bound with no downstream calls, so each worker is an independent unit of capacity: adding workers lets the workers share the queued requests, raising throughput and reducing queuing time. Horizontal scaling is not limited to database-bound APIs (A), the load balancer does not reduce throughput (B), and adding workers does not make any single calculation faster (D).",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Horizontal scaling helps CPU-bound stateless APIs as well as I/O-bound ones."
      },
      "B": {
        "type": "Incorrect",
        "text": "The load balancer does not lower throughput; it distributes requests."
      },
      "C": {
        "type": "Correct",
        "text": "More workers share the queued requests, raising throughput and cutting queuing time."
      },
      "D": {
        "type": "Incorrect",
        "text": "Adding workers increases parallel capacity; it does not speed up one calculation."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      },
      "secondary": {
        "title": "CloudHub 2.0 Architecture",
        "url": "https://docs.mulesoft.com/cloudhub-2/ch2-architecture"
      }
    }
  },
  {
    "id": "q-256",
    "number": 256,
    "title": "API Quality Goals - Backend is the bottleneck",
    "domain": "Meeting API quality goals",
    "topics": [
      "Horizontal Scaling",
      "Bottlenecks"
    ],
    "prompt": "A System API's response time is 4 seconds, of which 3.8 seconds is spent waiting for a legacy database that allows only 20 concurrent connections. The API's workers use little CPU. What will happen if the API is scaled from two to six workers?",
    "options": [
      {
        "letter": "A",
        "text": "Response time will drop to about a third, because six workers share the wait"
      },
      {
        "letter": "B",
        "text": "Throughput will triple, because each worker handles an equal share of the load"
      },
      {
        "letter": "C",
        "text": "The database connection limit will scale automatically with the workers"
      },
      {
        "letter": "D",
        "text": "Little or no improvement, and possibly more contention on the database"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Nearly all of the response time is spent waiting on a legacy database that allows only 20 concurrent connections, so the bottleneck is the database rather than the API's CPU. Adding workers gives little or no improvement and can add contention as more workers compete for the same limited connections; the limit does not scale automatically (C), and neither the response time (A) nor throughput (B) improves proportionally.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "The database is the bottleneck, so extra workers add little and may increase contention."
      },
      "A": {
        "type": "Incorrect",
        "text": "The wait is on the database, so adding workers does not cut response time proportionally."
      },
      "B": {
        "type": "Incorrect",
        "text": "Throughput is capped by the database connection limit, not by worker count."
      },
      "C": {
        "type": "Incorrect",
        "text": "The legacy connection limit does not scale automatically with workers."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      },
      "secondary": {
        "title": "Mule Runtime — Back-Pressure and MaxConcurrency",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/tuning-backpressure-maxconcurrency"
      }
    }
  },
  {
    "id": "q-257",
    "number": 257,
    "title": "API Quality Goals - Latency of a single request",
    "domain": "Meeting API quality goals",
    "topics": [
      "Horizontal Scaling",
      "Response Time"
    ],
    "prompt": "Under light load, a single request to an API takes 900 ms because of a long sequence of processing steps. A stakeholder suggests adding more CloudHub workers to make each request faster. What is the most accurate response?",
    "options": [
      {
        "letter": "A",
        "text": "Extra workers will not speed up a single request that is not waiting on capacity"
      },
      {
        "letter": "B",
        "text": "Additional workers will reduce the network latency to the client"
      },
      {
        "letter": "C",
        "text": "The request will be split across all workers automatically and complete faster"
      },
      {
        "letter": "D",
        "text": "Each additional worker will reduce the request time proportionally"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. The 900 ms is the time the request spends passing through a long sequence of processing steps within one request, so it is not caused by capacity contention; adding workers raises how many requests can run at once but does not shorten one request. Network latency is unrelated to worker count (B), a request is not split across workers (C), and request time does not fall proportionally with workers (D).",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "Worker count does not change network latency."
      },
      "A": {
        "type": "Correct",
        "text": "Extra workers add parallel capacity but do not shorten one unsaturated request."
      },
      "C": {
        "type": "Incorrect",
        "text": "A single request is not split across workers."
      },
      "D": {
        "type": "Incorrect",
        "text": "Request time does not decrease proportionally with the number of workers."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      },
      "secondary": {
        "title": "CloudHub 2.0 Architecture",
        "url": "https://docs.mulesoft.com/cloudhub-2/ch2-architecture"
      }
    }
  },
  {
    "id": "q-258",
    "number": 258,
    "title": "API Quality Goals - Stateful in-memory sessions",
    "domain": "Meeting API quality goals",
    "topics": [
      "Horizontal Scaling",
      "Statelessness"
    ],
    "prompt": "An API implementation stores each client's shopping cart in the memory of the worker that handled the client's first request. The team plans to scale from one to four workers behind the load balancer. What problem should the architect anticipate?",
    "options": [
      {
        "letter": "A",
        "text": "The load balancer will refuse to route requests to more than one worker"
      },
      {
        "letter": "B",
        "text": "Carts may be missing when requests reach a different worker"
      },
      {
        "letter": "C",
        "text": "Memory usage per worker will quadruple"
      },
      {
        "letter": "D",
        "text": "No problem, because CloudHub replicates worker memory automatically"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Horizontal scaling works best for stateless API implementations. If state is kept in a single worker's memory, requests routed to other workers cannot see it. State should be moved to a shared store, such as a persistent object store or database, before scaling out.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "In-memory state is local to one worker, but the load balancer can route requests anywhere."
      },
      "A": {
        "type": "Incorrect",
        "text": "Load balancers distribute requests across all available workers."
      },
      "C": {
        "type": "Incorrect",
        "text": "Each worker still holds only the carts it has created."
      },
      "D": {
        "type": "Incorrect",
        "text": "Worker memory is not replicated between workers."
      }
    },
    "references": {
      "primary": {
        "title": "Mule Runtime — Object Stores",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/mule-object-stores"
      },
      "secondary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      }
    }
  },
  {
    "id": "q-259",
    "number": 259,
    "title": "API Quality Goals - Choose two: when scaling out helps",
    "domain": "Meeting API quality goals",
    "topics": [
      "Horizontal Scaling",
      "Throughput"
    ],
    "prompt": "In which two situations is horizontal scaling of an API implementation likely to improve throughput as seen by API clients? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "The API processes one very large file record by record on a single node"
      },
      {
        "letter": "B",
        "text": "A Rate Limiting policy is rejecting clients that exceed their SLA tier"
      },
      {
        "letter": "C",
        "text": "The implementation is stateless and its workers are CPU-saturated"
      },
      {
        "letter": "D",
        "text": "Every request waits on a downstream API that is limited to a fixed rate"
      },
      {
        "letter": "E",
        "text": "Requests are queuing because all worker threads are busy"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Correct answers: C and E. Horizontal scaling helps when the implementation itself is the bottleneck: stateless workers that are CPU-saturated and queues caused by all worker threads being busy both add capacity when workers are added. A single-node sequential job (A) does not parallelize, rejected clients (B) are a policy limit, and a downstream API with a fixed rate (D) remains the bottleneck.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A single-node sequential job does not gain from more workers."
      },
      "B": {
        "type": "Incorrect",
        "text": "Rate-limit rejections are a policy limit, not a capacity limit."
      },
      "C": {
        "type": "Correct",
        "text": "Stateless CPU-saturated workers gain capacity from scaling out."
      },
      "D": {
        "type": "Incorrect",
        "text": "A downstream fixed-rate limit remains the bottleneck."
      },
      "E": {
        "type": "Correct",
        "text": "Thread exhaustion is relieved by adding workers."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub 2.0 Architecture",
        "url": "https://docs.mulesoft.com/cloudhub-2/ch2-architecture"
      },
      "secondary": {
        "title": "CloudHub 2.0 — Horizontal Autoscaling",
        "url": "https://docs.mulesoft.com/cloudhub-2/ch2-configure-horizontal-autoscaling"
      }
    }
  },
  {
    "id": "q-260",
    "number": 260,
    "title": "API Quality Goals - Primary-node-only workloads",
    "domain": "Meeting API quality goals",
    "topics": [
      "Horizontal Scaling",
      "Clustering"
    ],
    "prompt": "A Mule application polls an FTP directory every minute and processes each file sequentially. The poller is configured to run only on the primary node of a cluster. The team adds two more nodes, hoping to process files faster. What is the likely result?",
    "options": [
      {
        "letter": "A",
        "text": "Each file will be processed once per node, so files are processed three times"
      },
      {
        "letter": "B",
        "text": "Files will be processed roughly three times faster"
      },
      {
        "letter": "C",
        "text": "Polling will fail, because clustered applications cannot poll an FTP directory"
      },
      {
        "letter": "D",
        "text": "No gain, because only the primary node runs the poller"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. When a poller is configured to run only on the primary node, adding nodes does not add polling capacity, so throughput does not improve. The poller runs on one node, so files are not processed three times (A) and throughput does not triple (B), and clustering does not prevent FTP polling (C).",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The poller runs on the primary node only, so files are not processed per node."
      },
      "B": {
        "type": "Incorrect",
        "text": "Throughput does not triple because only the primary node polls."
      },
      "C": {
        "type": "Incorrect",
        "text": "Clustered applications can poll an FTP directory."
      },
      "D": {
        "type": "Correct",
        "text": "With primary-node-only polling, extra nodes add no polling capacity."
      }
    },
    "references": {
      "primary": {
        "title": "Mule Runtime — High Availability Clusters",
        "url": "https://docs.mulesoft.com/mule-runtime/latest/mule-high-availability-ha-clusters"
      },
      "secondary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      }
    }
  },
  {
    "id": "q-261",
    "number": 261,
    "title": "API Quality Goals - Autoscaling CloudHub 2.0",
    "domain": "Meeting API quality goals",
    "topics": [
      "Horizontal Scaling",
      "Autoscaling"
    ],
    "prompt": "An Experience API on CloudHub 2.0 has unpredictable daily traffic peaks caused by marketing campaigns. Between peaks, two replicas are sufficient. The team wants capacity to follow demand automatically. What should the architect recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Enable horizontal autoscaling for the application's replicas"
      },
      {
        "letter": "B",
        "text": "Permanently deploy the maximum number of replicas needed at peak"
      },
      {
        "letter": "C",
        "text": "Increase the replica size so two replicas can always handle the peaks"
      },
      {
        "letter": "D",
        "text": "Apply a Rate Limiting policy so peak traffic never exceeds two replicas"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. CloudHub 2.0 supports horizontal autoscaling, which adjusts the number of replicas based on resource usage within configured minimum and maximum values, so capacity follows unpredictable demand. Permanently deploying peak capacity (B) wastes resources between peaks, a larger fixed replica size (C) may still be insufficient and is wasted off-peak, and rate limiting (D) rejects demand rather than serving it.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "This works but wastes capacity outside the peaks."
      },
      "A": {
        "type": "Correct",
        "text": "Autoscaling adds and removes replicas based on load within configured limits."
      },
      "C": {
        "type": "Incorrect",
        "text": "Larger replicas may still be insufficient and are wasted between peaks."
      },
      "D": {
        "type": "Incorrect",
        "text": "Rejecting peak traffic does not meet the goal of serving demand."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub 2.0 — Horizontal Autoscaling",
        "url": "https://docs.mulesoft.com/cloudhub-2/ch2-configure-horizontal-autoscaling"
      },
      "secondary": {
        "title": "CloudHub 2.0 Architecture",
        "url": "https://docs.mulesoft.com/cloudhub-2/ch2-architecture"
      }
    }
  },
  {
    "id": "q-262",
    "number": 262,
    "title": "API Quality Goals - Vertical versus horizontal scaling",
    "domain": "Meeting API quality goals",
    "topics": [
      "Horizontal Scaling",
      "Vertical Scaling"
    ],
    "prompt": "A batch-style API processes one very large payload per request and fails with out-of-memory errors on its current worker size. Traffic volume is low. Which scaling approach addresses the problem?",
    "options": [
      {
        "letter": "A",
        "text": "Horizontal scaling to more workers of the same size"
      },
      {
        "letter": "B",
        "text": "Vertical scaling to a larger worker size"
      },
      {
        "letter": "C",
        "text": "Adding a Spike Control policy to smooth the batch requests"
      },
      {
        "letter": "D",
        "text": "Enabling the HTTP Caching policy for the batch responses"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. The failure is out-of-memory on a single large payload, so each request needs more memory; increasing the worker size gives the application a larger heap. Adding workers of the same size (A) does not increase the memory available to one request, and neither Spike Control (C) nor HTTP Caching (D) addresses memory.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "A larger worker provides the heap a single large payload needs."
      },
      "A": {
        "type": "Incorrect",
        "text": "More workers of the same size do not increase per-request memory."
      },
      "C": {
        "type": "Incorrect",
        "text": "Spike Control shapes traffic; it does not add memory."
      },
      "D": {
        "type": "Incorrect",
        "text": "Caching affects response reuse, not memory per request."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      },
      "secondary": {
        "title": "CloudHub 2.0 Architecture",
        "url": "https://docs.mulesoft.com/cloudhub-2/ch2-architecture"
      }
    }
  },
  {
    "id": "q-263",
    "number": 263,
    "title": "API Quality Goals - Scaling and SLA-limited consumers",
    "domain": "Meeting API quality goals",
    "topics": [
      "Horizontal Scaling",
      "SLA Tiers"
    ],
    "prompt": "A partner complains that their throughput is capped at 100 requests per minute when calling an API. The API's workers are at 15% CPU. The partner's client application is on the Silver SLA tier, which allows 100 requests per minute. What will adding workers achieve?",
    "options": [
      {
        "letter": "A",
        "text": "The SLA tier will be upgraded automatically"
      },
      {
        "letter": "B",
        "text": "The partner's throughput will rise in proportion to the number of workers"
      },
      {
        "letter": "C",
        "text": "Nothing for this partner, because the SLA tier limits their throughput"
      },
      {
        "letter": "D",
        "text": "Response times will drop below the SLA tier's limits"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. When throughput is capped by an SLA-based rate limiting policy, the constraint is the consumer's contract, not the API implementation's capacity. Horizontal scaling only helps when the implementation is the bottleneck; here the partner would need a higher SLA tier.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "SLA tier changes require a contract change, not more workers."
      },
      "B": {
        "type": "Incorrect",
        "text": "Rate limiting based on SLA tiers is enforced regardless of worker count."
      },
      "D": {
        "type": "Incorrect",
        "text": "The limit is on request count, not response time."
      },
      "C": {
        "type": "Correct",
        "text": "The limit is set by the contract's SLA tier, not by the API's capacity."
      }
    },
    "references": {
      "primary": {
        "title": "Rate Limiting Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-rate-limiting"
      },
      "secondary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      }
    }
  },
  {
    "id": "q-264",
    "number": 264,
    "title": "API Quality Goals - Which layer to scale",
    "domain": "Meeting API quality goals",
    "topics": [
      "Horizontal Scaling",
      "Bottlenecks"
    ],
    "prompt": "An Order Process API calls an Inventory System API. Under load, the Process API's workers run at 20% CPU and spend most of their time waiting, while the Inventory System API's workers are at 100% CPU and its requests queue. The inventory backend itself has spare capacity. Which change will most improve order throughput?",
    "options": [
      {
        "letter": "A",
        "text": "Scale out the Order Process API, since it orchestrates the calls"
      },
      {
        "letter": "B",
        "text": "Scale both APIs vertically to the largest worker size"
      },
      {
        "letter": "C",
        "text": "Apply a Spike Control policy to the Order Process API to smooth the calls"
      },
      {
        "letter": "D",
        "text": "Scale out the Inventory System API, whose workers are CPU-saturated"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. The Inventory System API's workers are at 100% CPU with requests queuing while its backend has spare capacity, so the bottleneck is the System API itself; scaling it out adds the capacity that raises order throughput. The Process API is at 20% CPU and mostly waiting, so scaling it (A) adds no capacity, scaling both vertically (B) is unnecessary for the Process API, and Spike Control (C) does not add capacity.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The Process API is mostly waiting, so scaling it adds no useful capacity."
      },
      "B": {
        "type": "Incorrect",
        "text": "Scaling the Process API vertically is unnecessary; only the System API is saturated."
      },
      "D": {
        "type": "Correct",
        "text": "The System API is CPU-saturated, so scaling it out raises order throughput."
      },
      "C": {
        "type": "Incorrect",
        "text": "Spike Control smooths traffic; it does not add capacity."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub Architecture",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture"
      },
      "secondary": {
        "title": "CloudHub 2.0 Architecture",
        "url": "https://docs.mulesoft.com/cloudhub-2/ch2-architecture"
      }
    }
  },
  {
    "id": "q-265",
    "number": 265,
    "title": "Monitoring Analyzing - Which Anypoint Platform feature provides a realtime",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Visualizer"
    ],
    "prompt": "Which Anypoint Platform feature provides a real-time visual graph of the application network showing API dependencies and the traffic between them?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Visualizer, which draws the dependency graph from observed traffic"
      },
      {
        "letter": "B",
        "text": "Anypoint Monitoring, because its dashboards chart traffic between APIs over time"
      },
      {
        "letter": "C",
        "text": "Runtime Manager, because it shows every deployed application and its workers"
      },
      {
        "letter": "D",
        "text": "Anypoint Exchange, because it catalogs the APIs and the versions they depend on"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Anypoint Visualizer builds a real-time graph of the application network from observed traffic, showing which applications and APIs call each other. Anypoint Monitoring charts metrics rather than dependencies (B), Runtime Manager lists applications and workers without their call relationships (C), and Exchange catalogs assets without runtime traffic (D).",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "Anypoint Monitoring charts metrics; it does not draw the dependency graph."
      },
      "A": {
        "type": "Correct",
        "text": "Visualizer draws the dependency graph from observed traffic in real time."
      },
      "C": {
        "type": "Incorrect",
        "text": "Runtime Manager lists applications and workers, not their call relationships."
      },
      "D": {
        "type": "Incorrect",
        "text": "Exchange catalogs assets; it does not show runtime traffic between them."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Visualizer — Real-Time Application Network Topology & Dependency Graph",
        "url": "https://docs.mulesoft.com/visualizer/#visualizer-control-plane"
      },
      "secondary": {
        "title": "Anypoint Monitoring Dashboards & Telemetry Integration",
        "url": "https://docs.mulesoft.com/monitoring/app-dashboards#overview-charts"
      }
    }
  },
  {
    "id": "q-266",
    "number": 266,
    "title": "Monitoring Analyzing - Which Anypoint capability stores Mule application logs",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Monitoring",
      "Log Aggregation"
    ],
    "prompt": "Which Anypoint capability stores Mule application logs centrally for a default period of 30 days and supports searching across applications?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Visualizer, which retains the traffic it uses to draw the network edges"
      },
      {
        "letter": "B",
        "text": "Anypoint Monitoring log search, which retains application logs for a default 30 days"
      },
      {
        "letter": "C",
        "text": "API Manager, which stores the request and response payloads for each managed API"
      },
      {
        "letter": "D",
        "text": "Anypoint Exchange, which stores the API specifications and their versions"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Anypoint Monitoring log management stores application logs centrally for a default retention period of 30 days and lets you search across applications. Visualizer retains traffic data for the graph (A), API Manager applies policies rather than storing payloads (C), and Exchange stores design-time assets (D).",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Visualizer retains traffic data for the graph, not searchable application logs."
      },
      "B": {
        "type": "Correct",
        "text": "Anypoint Monitoring log search retains application logs for a default 30 days."
      },
      "C": {
        "type": "Incorrect",
        "text": "API Manager applies policies; it does not store request and response payloads."
      },
      "D": {
        "type": "Incorrect",
        "text": "Exchange stores design-time assets, not runtime logs."
      }
    },
    "references": {
      "primary": {
        "title": "Searching Aggregated Logs in Anypoint Monitoring & Log Retention",
        "url": "https://docs.mulesoft.com/monitoring/logs-search-hf#query-logs-from-the-search-bar"
      },
      "secondary": {
        "title": "Using Search Filters in Anypoint Monitoring Logs",
        "url": "https://docs.mulesoft.com/monitoring/logs-search-hf#use-search-filters"
      }
    }
  },
  {
    "id": "q-267",
    "number": 267,
    "title": "Monitoring Analyzing - Which Anypoint Monitoring artifact lets architects build",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Monitoring"
    ],
    "prompt": "Which Anypoint Monitoring artifact lets an architect build a customized view that combines latency, throughput, and error metrics across several APIs?",
    "options": [
      {
        "letter": "A",
        "text": "An Anypoint Visualizer canvas, which overlays latency and error metrics on the graph"
      },
      {
        "letter": "B",
        "text": "API Manager analytics, which reports each API's policies and client contracts"
      },
      {
        "letter": "C",
        "text": "A custom dashboard, which can combine metrics from multiple APIs on one canvas"
      },
      {
        "letter": "D",
        "text": "An Exchange asset page, which can embed static charts in the API documentation"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Anypoint Monitoring custom dashboards let you assemble charts for latency, throughput, and error metrics across multiple APIs. A Visualizer canvas shows topology rather than a combined metrics view (A), API Manager analytics covers policies and contracts (B), and Exchange pages present design-time documentation (D).",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Custom dashboards combine metrics from multiple APIs on one canvas."
      },
      "A": {
        "type": "Incorrect",
        "text": "A Visualizer canvas shows topology, not a combined metrics dashboard."
      },
      "B": {
        "type": "Incorrect",
        "text": "API Manager analytics covers policies and contracts, not combined metrics."
      },
      "D": {
        "type": "Incorrect",
        "text": "Exchange pages present design-time documentation, not live metrics."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring Dashboards — Custom Dashboards for Latency, Throughput, and Errors",
        "url": "https://docs.mulesoft.com/monitoring/app-dashboards#overview-charts"
      },
      "secondary": {
        "title": "Configuring Alerts and Telemetry in Anypoint Monitoring",
        "url": "https://docs.mulesoft.com/monitoring/alerts#threshold"
      }
    }
  },
  {
    "id": "q-268",
    "number": 268,
    "title": "Monitoring Analyzing - Which capability is provided by Anypoint Visualizer",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Visualizer",
      "Anypoint Monitoring"
    ],
    "prompt": "Which capability is provided by Anypoint Visualizer and not by Anypoint Monitoring?",
    "options": [
      {
        "letter": "A",
        "text": "Time-series charts of latency and throughput for an individual API"
      },
      {
        "letter": "B",
        "text": "Centralized log search across an environment's applications"
      },
      {
        "letter": "C",
        "text": "Alert policies that notify when a metric crosses a threshold"
      },
      {
        "letter": "D",
        "text": "A real-time, dependency-aware diagram of the application network"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Visualizer's distinctive capability is the dependency-aware graph of the application network; Monitoring provides time-series charts (A), centralized log search (B), and metric alert policies (C).",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Time-series charts are provided by Anypoint Monitoring."
      },
      "D": {
        "type": "Correct",
        "text": "The dependency-aware network diagram is Visualizer's distinctive capability."
      },
      "B": {
        "type": "Incorrect",
        "text": "Centralized log search is provided by Anypoint Monitoring."
      },
      "C": {
        "type": "Incorrect",
        "text": "Metric alert policies are provided by Anypoint Monitoring."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Visualizer — Real-Time Dependency-Aware Diagram of the Application Network",
        "url": "https://docs.mulesoft.com/visualizer/#visualizer-control-plane"
      },
      "secondary": {
        "title": "Anypoint Monitoring Dashboards & Telemetry Integration",
        "url": "https://docs.mulesoft.com/monitoring/app-dashboards#overview-charts"
      }
    }
  },
  {
    "id": "q-269",
    "number": 269,
    "title": "Monitoring Analyzing - Which feature provides automatic notification when CloudHub",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Monitoring"
    ],
    "prompt": "Which feature provides automatic notification when CloudHub workers crash or scale, or when a configured metric threshold is breached?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Monitoring alert policies on application and API metrics"
      },
      {
        "letter": "B",
        "text": "Anypoint Visualizer, which highlights failing nodes on the network canvas"
      },
      {
        "letter": "C",
        "text": "API Manager alerts on client application contracts"
      },
      {
        "letter": "D",
        "text": "The Runtime Manager log viewer, which surfaces the failing worker's logs"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Anypoint Monitoring alert policies evaluate application and API metrics and send notifications when a threshold is crossed or a condition such as a worker crash or scale event occurs. Visualizer highlights failing nodes but does not notify (B), API Manager alerts concern contracts (C), and the log viewer displays logs without notifying (D).",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "Visualizer highlights failing nodes but does not send notifications."
      },
      "A": {
        "type": "Correct",
        "text": "Monitoring alert policies notify on metric thresholds and events such as crashes or scaling."
      },
      "C": {
        "type": "Incorrect",
        "text": "API Manager alerts concern client contracts, not worker health."
      },
      "D": {
        "type": "Incorrect",
        "text": "The log viewer displays logs; it does not send notifications."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring — Configuring Operational Alerts for Worker Crashes and Thresholds",
        "url": "https://docs.mulesoft.com/monitoring/alerts#threshold"
      },
      "secondary": {
        "title": "Using Built-in Mule App Dashboards for Telemetry and Metric Trends",
        "url": "https://docs.mulesoft.com/monitoring/app-dashboards#overview-charts"
      }
    }
  },
  {
    "id": "q-270",
    "number": 270,
    "title": "Monitoring Analyzing - Which Anypoint feature is most useful for",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Visualizer"
    ],
    "prompt": "An architect must visually identify which Process APIs depend on a particular System API before changing that System API. Which feature is most useful?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Monitoring custom dashboards, filtered by the System API's name"
      },
      {
        "letter": "B",
        "text": "Anypoint Visualizer, whose dependency graph shows which APIs call the System API"
      },
      {
        "letter": "C",
        "text": "Anypoint Exchange, where each API's dependencies are listed on its asset page"
      },
      {
        "letter": "D",
        "text": "Runtime Manager, which groups applications by the business group they belong to"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Visualizer's dependency graph shows which APIs call the System API, so the architect can see the impact of a change. Monitoring dashboards show metrics rather than call relationships (A), Exchange asset pages do not list runtime dependencies (C), and Runtime Manager groups applications by business group rather than by calls (D).",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "The dependency graph shows which APIs call the System API."
      },
      "A": {
        "type": "Incorrect",
        "text": "Monitoring dashboards show metrics, not call relationships."
      },
      "C": {
        "type": "Incorrect",
        "text": "Exchange asset pages do not list runtime dependencies."
      },
      "D": {
        "type": "Incorrect",
        "text": "Runtime Manager groups by business group, not by call relationships."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Visualizer — Visual Impact Analysis of API Dependencies Before Changes",
        "url": "https://docs.mulesoft.com/visualizer/#visualizer-control-plane"
      },
      "secondary": {
        "title": "Anypoint Monitoring Dashboards & Dependency Telemetry",
        "url": "https://docs.mulesoft.com/monitoring/app-dashboards#overview-charts"
      }
    }
  },
  {
    "id": "q-271",
    "number": 271,
    "title": "Monitoring Analyzing - Which feature in CloudHub measures and exposes",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Monitoring"
    ],
    "prompt": "A team wants to alert on a backlog or under-throughput condition for a CloudHub application. Which feature measures and exposes the rate at which the application processes events?",
    "options": [
      {
        "letter": "A",
        "text": "Runtime Manager, which shows the number of workers and their vCore size"
      },
      {
        "letter": "B",
        "text": "Object Store time-to-live, which records when each event was last processed"
      },
      {
        "letter": "C",
        "text": "Anypoint Monitoring metrics and alert policies on application throughput"
      },
      {
        "letter": "D",
        "text": "Anypoint MQ queue depth, which counts the messages still waiting to be read"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Anypoint Monitoring exposes application metrics such as throughput, and alert policies can fire when the rate falls or a backlog grows. Worker count and size (A) describe capacity rather than the processing rate, Object Store TTL (B) is a state expiry, and MQ queue depth (D) measures a queue rather than the application's own processing rate.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Monitoring exposes throughput metrics that can drive backlog and under-throughput alerts."
      },
      "A": {
        "type": "Incorrect",
        "text": "Worker count and size describe capacity, not the processing rate."
      },
      "B": {
        "type": "Incorrect",
        "text": "Object Store TTL governs state expiry, not event throughput."
      },
      "D": {
        "type": "Incorrect",
        "text": "Queue depth measures a queue, not the application's processing rate."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring — Measuring Event Processing Rates, Backlog, and Throughput Alerts",
        "url": "https://docs.mulesoft.com/monitoring/app-dashboards#overview-charts"
      },
      "secondary": {
        "title": "Configuring Operational Alerts and Notifications in Anypoint Monitoring",
        "url": "https://docs.mulesoft.com/monitoring/alerts#threshold"
      }
    }
  },
  {
    "id": "q-272",
    "number": 272,
    "title": "Monitoring Analyzing - Which is the recommended way to expose",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Log Aggregation",
      "Anypoint Monitoring"
    ],
    "prompt": "A company wants its Mule application and CloudHub-level metrics available in a centralized enterprise observability stack such as Splunk or Datadog. What is the recommended approach?",
    "options": [
      {
        "letter": "A",
        "text": "Schedule a job that exports Runtime Manager logs to a shared file share for the enterprise stack to read"
      },
      {
        "letter": "B",
        "text": "Build an Anypoint Monitoring custom dashboard and have the enterprise stack embed it as an iframe"
      },
      {
        "letter": "C",
        "text": "Have the enterprise stack poll the Runtime Manager log viewer through the platform APIs"
      },
      {
        "letter": "D",
        "text": "Configure Anypoint Monitoring integrations or a custom Log4j2 appender to ship logs and metrics to the enterprise stack"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Centralized observability is achieved with Anypoint Monitoring integrations or a custom Log4j2 appender that ship logs and metrics to the enterprise stack. Scheduled file exports (A) are not real-time and are fragile, embedding a dashboard (B) keeps the data inside the platform, and polling the log viewer (C) is not how metrics are exported.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Monitoring integrations or a custom appender ship logs and metrics to the enterprise stack."
      },
      "A": {
        "type": "Incorrect",
        "text": "Scheduled file exports are not real-time and are operationally fragile."
      },
      "B": {
        "type": "Incorrect",
        "text": "Embedding a dashboard keeps the data inside the platform."
      },
      "C": {
        "type": "Incorrect",
        "text": "Polling the log viewer is not a supported metrics export path."
      }
    },
    "references": {
      "primary": {
        "title": "Searching and Querying Aggregated Logs in Anypoint Monitoring & SIEM (Splunk/Datadog) Forwarding",
        "url": "https://docs.mulesoft.com/monitoring/logs-search-hf#query-logs-from-the-search-bar"
      },
      "secondary": {
        "title": "Using Built-in Mule App Dashboards for Telemetry and Metric Trends",
        "url": "https://docs.mulesoft.com/monitoring/app-dashboards#overview-charts"
      }
    }
  },
  {
    "id": "q-273",
    "number": 273,
    "title": "Monitoring - Which component generates API monitoring data",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "API Monitoring",
      "Monitoring Components"
    ],
    "prompt": "An architect must identify which Anypoint Platform component generates the metrics used for API monitoring and alerting, so the team can report on latency and usage for its APIs. Which component provides this data?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Monitoring, which collects API and Mule application metrics and exposes them through dashboards and alerts"
      },
      {
        "letter": "B",
        "text": "API Manager, which applies policies to API instances and records the invocation metrics"
      },
      {
        "letter": "C",
        "text": "Anypoint Exchange, which tracks how often each asset is downloaded and reused"
      },
      {
        "letter": "D",
        "text": "API Designer, which records each mock invocation made during design"
      }
    ],
    "explanation": "Correct answer: A. Anypoint Monitoring collects API and Mule application metrics and exposes them through dashboards and alerts. API Manager applies policies and tracks contracts but is not the metrics engine (B), Exchange tracks asset reuse rather than invocation metrics (C), and API Designer records design-time mocks (D).",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Anypoint Monitoring collects the API and application metrics used for dashboards and alerts."
      },
      "B": {
        "type": "Incorrect",
        "text": "API Manager applies policies and tracks contracts; it is not the metrics engine."
      },
      "C": {
        "type": "Incorrect",
        "text": "Exchange tracks asset reuse, not invocation latency and usage."
      },
      "D": {
        "type": "Incorrect",
        "text": "API Designer records design-time mocks, not runtime metrics."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring Overview",
        "url": "https://docs.mulesoft.com/monitoring/"
      },
      "secondary": {
        "title": "Anypoint Monitoring - Metrics, Retention, and Limits FAQ",
        "url": "https://docs.mulesoft.com/monitoring/am-faq"
      }
    },
    "correctAnswer": "A"
  },
  {
    "id": "q-274",
    "number": 274,
    "title": "Monitoring - Alerts for API invocation metrics",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Monitoring",
      "Alerts"
    ],
    "prompt": "A manufacturing company wants real-time visibility into integration performance and must be notified automatically when API error rates exceed a threshold, in order to meet a 99.9% uptime SLA. What should the architect configure?",
    "options": [
      {
        "letter": "A",
        "text": "A scheduled job that exports Runtime Manager logs every hour and scans them for error spikes"
      },
      {
        "letter": "B",
        "text": "Anypoint Monitoring dashboards together with alert policies on metrics such as response time, error rate, and throughput"
      },
      {
        "letter": "C",
        "text": "API Manager rate-limiting policies configured to reject requests above the error threshold"
      },
      {
        "letter": "D",
        "text": "A custom Mule flow that writes request timestamps to an external database for analysis"
      }
    ],
    "explanation": "Correct answer: B. Anypoint Monitoring provides real-time dashboards and alert policies that notify when a metric such as error rate crosses a threshold. An hourly export (A) is not real-time, rate limiting (C) controls traffic rather than reporting on it, and a custom logging flow (D) is bespoke and provides no built-in alerting.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Dashboards plus alert policies give real-time visibility and automatic notification on threshold breaches."
      },
      "A": {
        "type": "Incorrect",
        "text": "Hourly exports are not real-time and raise no alerts."
      },
      "C": {
        "type": "Incorrect",
        "text": "Rate limiting controls traffic; it does not monitor or alert on error rates."
      },
      "D": {
        "type": "Incorrect",
        "text": "A custom logging flow is non-standard effort and provides no built-in alerting."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring Overview",
        "url": "https://docs.mulesoft.com/monitoring/"
      },
      "secondary": {
        "title": "Anypoint Monitoring - Metrics, Retention, and Limits FAQ",
        "url": "https://docs.mulesoft.com/monitoring/am-faq"
      }
    },
    "correctAnswer": "B"
  },
  {
    "id": "q-275",
    "number": 275,
    "title": "Monitoring - Alerts to define across API layers",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "API Monitoring",
      "Alerts"
    ],
    "prompt": "A logistics company with a 99.9% SLA requirement and a limited monitoring budget must ensure API health and be alerted when performance degrades. Which two actions should it take? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Rely on CloudHub autoscaling to detect and resolve degradation automatically"
      },
      {
        "letter": "B",
        "text": "Schedule a nightly log-analysis job to detect performance issues"
      },
      {
        "letter": "C",
        "text": "Configure alerts on API invocation metrics such as error rate and response time"
      },
      {
        "letter": "D",
        "text": "Enable persistent queues so in-flight messages are not lost during degradation"
      },
      {
        "letter": "E",
        "text": "Configure alerts on Mule application health metrics such as CPU and memory"
      }
    ],
    "explanation": "Correct answers: C and E. Alerting on API invocation metrics and on application health metrics covers both the API-level and the runtime-level signals of degradation. Autoscaling (A) reacts to load but does not alert, a nightly job (B) is not timely, and persistent queues (D) protect messages rather than alert on health.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "API invocation metrics alert on error rate and response time degradation."
      },
      "E": {
        "type": "Correct",
        "text": "Application health metrics alert on CPU and memory degradation."
      },
      "A": {
        "type": "Incorrect",
        "text": "Autoscaling reacts to load; it does not alert on degradation."
      },
      "B": {
        "type": "Incorrect",
        "text": "A nightly job is not timely enough for a 99.9% SLA."
      },
      "D": {
        "type": "Incorrect",
        "text": "Persistent queues protect messages; they do not alert on health."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring Overview",
        "url": "https://docs.mulesoft.com/monitoring/"
      },
      "secondary": {
        "title": "Anypoint Monitoring - Metrics, Retention, and Limits FAQ",
        "url": "https://docs.mulesoft.com/monitoring/am-faq"
      }
    },
    "correctAnswers": [
      "C",
      "E"
    ]
  },
  {
    "id": "q-276",
    "number": 276,
    "title": "Monitoring - Audit trail for API and configuration changes",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Audit Logging",
      "Monitoring"
    ],
    "prompt": "A regional healthcare provider handling protected patient data must record who accessed or changed APIs and platform configuration, to satisfy an audit requirement, while minimizing additional licensing costs. What should the architect enable?",
    "options": [
      {
        "letter": "A",
        "text": "A Message Logging policy on every API, which records who changed each API's configuration"
      },
      {
        "letter": "B",
        "text": "Anypoint Monitoring API Analytics, relying on its default retention"
      },
      {
        "letter": "C",
        "text": "A third-party APM agent installed on the CloudHub workers"
      },
      {
        "letter": "D",
        "text": "The built-in Anypoint Platform audit log, which records user and administrative actions and can be exported"
      }
    ],
    "explanation": "Correct answer: D. The Anypoint Platform audit log natively records user and administrative actions and can be exported, satisfying the audit requirement without extra licensing or custom code. A Message Logging policy (A) records API traffic rather than who changed configuration, API Analytics (B) records usage metrics, and a third-party APM agent (C) does not produce platform audit records.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "The built-in audit log records user and administrative actions and can be exported."
      },
      "A": {
        "type": "Incorrect",
        "text": "Message Logging records API traffic, not who changed platform configuration."
      },
      "B": {
        "type": "Incorrect",
        "text": "API Analytics records usage metrics, not an audit trail of actions."
      },
      "C": {
        "type": "Incorrect",
        "text": "A third-party APM agent does not produce Anypoint Platform audit records."
      }
    },
    "references": {
      "primary": {
        "title": "Audit Logging in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/audit-logging"
      },
      "secondary": {
        "title": "Anypoint Monitoring Overview",
        "url": "https://docs.mulesoft.com/monitoring/"
      }
    },
    "correctAnswer": "D"
  },
  {
    "id": "q-277",
    "number": 277,
    "title": "Logging Configuration - Reducing log volume while keeping root-cause detail",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Logging Configuration",
      "Logging"
    ],
    "prompt": "A Mule application is flooding the console with logs, and the team needs to capture only critical events without losing root-cause detail. What should it do first?",
    "options": [
      {
        "letter": "A",
        "text": "Set the root logger level to ERROR in the runtime's Log4j2 configuration so only errors and their stack traces are emitted"
      },
      {
        "letter": "B",
        "text": "Set the root logger level to INFO and add a Logger component to every flow"
      },
      {
        "letter": "C",
        "text": "Disable application logging and rely on Anypoint Monitoring alerts to surface failures"
      },
      {
        "letter": "D",
        "text": "Increase the console buffer size so that more log lines are retained for analysis"
      }
    ],
    "explanation": "Correct answer: A. Mule's logging is driven by Log4j2; raising the root logger level to ERROR suppresses lower-severity messages while still emitting errors and their stack traces. Adding INFO loggers (B) increases volume, disabling logging (C) removes the evidence needed to diagnose failures, and a larger console buffer (D) keeps more noise rather than filtering it.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Setting the root logger to ERROR filters lower-severity noise while keeping errors and stack traces."
      },
      "B": {
        "type": "Incorrect",
        "text": "INFO loggers increase log volume rather than reducing it."
      },
      "C": {
        "type": "Incorrect",
        "text": "Disabling logging removes the diagnostics needed to investigate incidents."
      },
      "D": {
        "type": "Incorrect",
        "text": "A larger console buffer retains more output but does not filter it."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring - Metrics, Retention, and Limits FAQ",
        "url": "https://docs.mulesoft.com/monitoring/am-faq"
      },
      "secondary": {
        "title": "Anypoint Monitoring Overview",
        "url": "https://docs.mulesoft.com/monitoring/"
      }
    },
    "correctAnswer": "A"
  },
  {
    "id": "q-278",
    "number": 278,
    "title": "Monitoring Deployment - Keeping monitoring data on-premises",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Monitoring Deployment",
      "Data Residency"
    ],
    "prompt": "A federal government agency must store all monitoring data on-premises for security reasons, yet still wants to use Anypoint Monitoring dashboards. What should the architect recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Use the standard SaaS Anypoint Monitoring service and restrict access with role-based permissions"
      },
      {
        "letter": "B",
        "text": "Deploy Anypoint Monitoring on Anypoint Platform Private Cloud Edition so that the monitoring data stays on-premises"
      },
      {
        "letter": "C",
        "text": "Install the Anypoint Monitoring agent on-premises but keep using the SaaS dashboards and storage"
      },
      {
        "letter": "D",
        "text": "Export monitoring data to CSV files on a schedule and store them in the agency's data center"
      }
    ],
    "explanation": "Correct answer: B. Anypoint Platform Private Cloud Edition supports Anypoint Monitoring, which keeps monitoring data within the customer's environment and satisfies the residency requirement. The SaaS service (A) stores data in MuleSoft's cloud, the on-premises agent with SaaS storage (C) still forwards data to the cloud, and CSV exports (D) are not a monitoring capability.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Anypoint Monitoring on PCE keeps monitoring data inside the customer environment."
      },
      "A": {
        "type": "Incorrect",
        "text": "The SaaS service stores monitoring data in MuleSoft's cloud, which violates the requirement."
      },
      "C": {
        "type": "Incorrect",
        "text": "The agent still sends monitoring data to the SaaS storage endpoint."
      },
      "D": {
        "type": "Incorrect",
        "text": "Manual CSV export is not a functioning monitoring capability."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring on Anypoint Platform PCE (on-premises)",
        "url": "https://docs.mulesoft.com/private-cloud/3.2/anypoint-monitoring"
      },
      "secondary": {
        "title": "MuleSoft Blog - Government Cloud Monitoring Best Practices for Hybrid Runtimes",
        "url": "https://blogs.mulesoft.com/dev-guides/government-cloud-monitoring-best-practices"
      }
    },
    "correctAnswer": "B"
  },
  {
    "id": "q-279",
    "number": 279,
    "title": "Monitoring - Isolating a latency bottleneck",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Monitoring",
      "Troubleshooting"
    ],
    "prompt": "A manufacturing plant's ERP integration shows intermittent latency spikes during peak shifts, and the team must isolate the bottleneck quickly. Which Anypoint Platform capability should it use first?",
    "options": [
      {
        "letter": "A",
        "text": "Increasing the JVM heap size on the runtime so the flows have more memory"
      },
      {
        "letter": "B",
        "text": "Adding API Manager throttling policies to limit the request rate during peak shifts"
      },
      {
        "letter": "C",
        "text": "Anypoint Monitoring's flow and transaction metrics, to identify the slow step in the integration"
      },
      {
        "letter": "D",
        "text": "Adding more CloudHub workers so the load is spread across more instances"
      }
    ],
    "explanation": "Correct answer: C. Anypoint Monitoring exposes per-flow and per-processor metrics, so you can see which step is slow and target the fix. Raising the heap (A), throttling requests (B), and scaling out (D) are all changes that may or may not help; without metrics they are guesses at the cause.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Flow and transaction metrics reveal which step is slow, letting the team fix the real bottleneck."
      },
      "A": {
        "type": "Incorrect",
        "text": "Increasing heap addresses memory pressure, not necessarily the latency source."
      },
      "B": {
        "type": "Incorrect",
        "text": "Throttling limits traffic; it does not diagnose where the time is spent."
      },
      "D": {
        "type": "Incorrect",
        "text": "Adding workers is a change made without diagnosis and may not resolve the bottleneck."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring Overview",
        "url": "https://docs.mulesoft.com/monitoring/"
      },
      "secondary": {
        "title": "API Visualizer (Anypoint Visualizer) Overview",
        "url": "https://docs.mulesoft.com/visualizer/"
      }
    },
    "correctAnswer": "C"
  },
  {
    "id": "q-280",
    "number": 280,
    "title": "Monitoring - Real-time alerts for SLA breaches",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "API Monitoring",
      "Alerts"
    ],
    "prompt": "A fintech startup wants to be alerted in real time when API SLA thresholds are breached, with low operational overhead. What should the architect configure?",
    "options": [
      {
        "letter": "A",
        "text": "A custom application that polls API Manager metrics and writes breach events to a database"
      },
      {
        "letter": "B",
        "text": "A third-party APM tool integrated through a connector"
      },
      {
        "letter": "C",
        "text": "A daily review of Runtime Manager health-check alerts by the operations team"
      },
      {
        "letter": "D",
        "text": "Anypoint Monitoring alert policies that notify when the monitored metrics cross their defined thresholds"
      }
    ],
    "explanation": "Correct answer: D. Anypoint Monitoring alert policies evaluate the monitored metrics and notify when a threshold is crossed, giving real-time alerting with no custom code. A custom polling application (A) adds maintenance overhead, a third-party APM tool (B) adds cost and integration effort, and a daily review (C) is neither real-time nor low-overhead.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Built-in alert policies notify in real time when metrics breach their thresholds."
      },
      "A": {
        "type": "Incorrect",
        "text": "A custom polling application adds code and maintenance overhead."
      },
      "B": {
        "type": "Incorrect",
        "text": "A third-party APM tool adds licensing cost and integration effort."
      },
      "C": {
        "type": "Incorrect",
        "text": "A daily review is slow and does not provide real-time alerting."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring Overview",
        "url": "https://docs.mulesoft.com/monitoring/"
      },
      "secondary": {
        "title": "Anypoint Monitoring - Metrics, Retention, and Limits FAQ",
        "url": "https://docs.mulesoft.com/monitoring/am-faq"
      }
    },
    "correctAnswer": "D"
  },
  {
    "id": "q-281",
    "number": 281,
    "title": "API Analytics - Balancing insight, budget, and custom dashboards",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "API Analytics",
      "Monitoring"
    ],
    "prompt": "A large retail enterprise is rolling out API analytics and must balance detailed usage insight with a strict budget, while also giving business stakeholders custom dashboards. Which two actions should it take? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Enable API analytics only for the high-value APIs that need the insight"
      },
      {
        "letter": "B",
        "text": "Enable full-suite analytics for every API and purchase a premium analytics add-on"
      },
      {
        "letter": "C",
        "text": "Rely on Anypoint Visualizer alone for detailed usage insight"
      },
      {
        "letter": "D",
        "text": "Rely on the built-in dashboards only, and skip the custom dashboards"
      },
      {
        "letter": "E",
        "text": "Export analytics data through the Anypoint Monitoring metrics API to an external BI tool for custom dashboards"
      }
    ],
    "explanation": "Correct answers: A and E. Limiting analytics to the high-value APIs controls cost, and exporting analytics through the Anypoint Monitoring metrics API lets an external BI tool build the custom dashboards stakeholders want. Enabling everything with a premium add-on (B) conflicts with the budget, Visualizer (C) shows topology rather than usage insight, and built-in dashboards alone (D) do not meet the custom-dashboard requirement.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Enabling analytics only for high-value APIs keeps the cost within budget."
      },
      "E": {
        "type": "Correct",
        "text": "Exporting through the metrics API lets an external BI tool build the custom dashboards."
      },
      "B": {
        "type": "Incorrect",
        "text": "Full-suite analytics with a premium add-on conflicts with the strict budget."
      },
      "C": {
        "type": "Incorrect",
        "text": "Visualizer shows topology, not detailed usage insight."
      },
      "D": {
        "type": "Incorrect",
        "text": "Built-in dashboards alone do not meet the custom-dashboard requirement."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring Overview",
        "url": "https://docs.mulesoft.com/monitoring/"
      },
      "secondary": {
        "title": "Anypoint Monitoring - Metrics, Retention, and Limits FAQ",
        "url": "https://docs.mulesoft.com/monitoring/am-faq"
      }
    },
    "correctAnswers": [
      "A",
      "E"
    ]
  },
  {
    "id": "q-282",
    "number": 282,
    "title": "Observability - Audit logging and compliance alerting",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Observability",
      "Audit Logging"
    ],
    "prompt": "A healthcare integration team must retain audit-level records and detect any deviation from its compliance metrics. Which two actions should it take? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Set the runtime log level to INFO and rely on autoscaling logs for compliance"
      },
      {
        "letter": "B",
        "text": "Enable audit-level logging and configure the appropriate retention for those records"
      },
      {
        "letter": "C",
        "text": "Use Anypoint Visualizer flow diagrams in place of configuring alerts"
      },
      {
        "letter": "D",
        "text": "Enable API Functional Monitoring to retain the audit records"
      },
      {
        "letter": "E",
        "text": "Create an Anypoint Monitoring alert policy that fires when a compliance metric deviates beyond its threshold"
      }
    ],
    "explanation": "Correct answers: B and E. Audit-level logging with a configured retention retains the required records, and an Anypoint Monitoring alert policy detects deviation from the compliance metrics. INFO logging (A) is not audit-level and is not retained for compliance, Visualizer (C) shows topology rather than detecting deviations, and Functional Monitoring (D) runs tests rather than retaining audit records.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Audit-level logging with configured retention retains the required records."
      },
      "E": {
        "type": "Correct",
        "text": "A monitoring alert policy detects deviation from the compliance metrics."
      },
      "A": {
        "type": "Incorrect",
        "text": "INFO logging is not audit-level and is not retained for compliance."
      },
      "C": {
        "type": "Incorrect",
        "text": "Visualizer shows topology; it does not detect metric deviations."
      },
      "D": {
        "type": "Incorrect",
        "text": "Functional Monitoring runs tests; it does not retain audit records."
      }
    },
    "references": {
      "primary": {
        "title": "Audit Logging in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/audit-logging"
      },
      "secondary": {
        "title": "Anypoint Monitoring Overview",
        "url": "https://docs.mulesoft.com/monitoring/"
      }
    },
    "correctAnswers": [
      "B",
      "E"
    ]
  },
  {
    "id": "q-283",
    "number": 283,
    "title": "Audit Logging - Long-term audit retention",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Audit Logging",
      "Monitoring"
    ],
    "prompt": "A healthcare provider must keep an audit trail of API and configuration changes for seven years, using the simplest platform-native option. What should the architect enable?",
    "options": [
      {
        "letter": "A",
        "text": "A custom Logger component in each flow that writes the audited events to a database"
      },
      {
        "letter": "B",
        "text": "Anypoint Monitoring API Analytics, relying on its default retention"
      },
      {
        "letter": "C",
        "text": "The built-in Anypoint Platform audit log, forwarding its entries to the organization's long-term archive"
      },
      {
        "letter": "D",
        "text": "Operating-system file logging on the runtime with manual rotation"
      }
    ],
    "explanation": "Correct answer: C. The built-in audit log records user and administrative actions, and its entries can be forwarded to a long-term archive to meet a multi-year retention requirement without custom code. A custom Logger (A) captures only chosen events, API Analytics (B) records usage rather than an audit trail and has limited retention, and OS-level logging (D) is not an audit trail of platform actions.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "The platform audit log records the required actions and can be forwarded to long-term storage."
      },
      "A": {
        "type": "Incorrect",
        "text": "A custom Logger is not a complete audit trail and requires code."
      },
      "B": {
        "type": "Incorrect",
        "text": "API Analytics records usage, not an audit trail, and does not meet multi-year retention."
      },
      "D": {
        "type": "Incorrect",
        "text": "OS-level file logging is not an audit trail of platform configuration changes."
      }
    },
    "references": {
      "primary": {
        "title": "Audit Logging in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/audit-logging"
      },
      "secondary": {
        "title": "Anypoint Monitoring Overview",
        "url": "https://docs.mulesoft.com/monitoring/"
      }
    },
    "correctAnswer": "C"
  },
  {
    "id": "q-284",
    "number": 284,
    "title": "Logging and Monitoring - Diagnosing errors with the log viewer",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Logging",
      "Troubleshooting"
    ],
    "prompt": "A retail chain's order-processing flow started returning intermittent 500 errors after an upgrade, and the engineers need to see the exception detail quickly. What should they do?",
    "options": [
      {
        "letter": "A",
        "text": "Add a java.util.logging logger inside a custom Java component in the flow"
      },
      {
        "letter": "B",
        "text": "Set the global logger level to DEBUG for the entire application and restart the runtime"
      },
      {
        "letter": "C",
        "text": "Configure an Anypoint Monitoring alert that pages the team whenever the API returns a 500 response"
      },
      {
        "letter": "D",
        "text": "Use Runtime Manager's log viewer, raise the log level for the relevant Mule package, and filter by the request's correlation ID"
      }
    ],
    "explanation": "Correct answer: D. Runtime Manager's log viewer lets you inspect application logs, and raising the level for a specific Mule package captures the exception detail while filtering by correlation ID isolates the failing request. A custom Java logger (A) adds code for no benefit, a global DEBUG level (B) floods the logs and needs a restart, and an alert on every 500 (C) reports the symptom rather than the cause.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "The log viewer with a targeted log level and correlation-ID filter surfaces the exception detail quickly."
      },
      "A": {
        "type": "Incorrect",
        "text": "A custom Java logger adds code without giving better access to the exception."
      },
      "B": {
        "type": "Incorrect",
        "text": "A global DEBUG level increases noise and requires a restart."
      },
      "C": {
        "type": "Incorrect",
        "text": "An alert on every 500 reports the symptom, not the underlying exception."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring Overview",
        "url": "https://docs.mulesoft.com/monitoring/"
      },
      "secondary": {
        "title": "Anypoint Monitoring - Metrics, Retention, and Limits FAQ",
        "url": "https://docs.mulesoft.com/monitoring/am-faq"
      }
    },
    "correctAnswer": "D"
  },
  {
    "id": "q-285",
    "number": 285,
    "title": "API Analytics - Access control for usage metrics",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "API Analytics",
      "Monitoring"
    ],
    "prompt": "A federal agency must ensure that API usage metrics are visible only to cleared personnel, preferring native platform capabilities over third-party tools. What should the architect do?",
    "options": [
      {
        "letter": "A",
        "text": "Use Anypoint Monitoring for the API metrics and restrict access to them with role-based permissions"
      },
      {
        "letter": "B",
        "text": "Enable the platform's 'Encrypt API Analytics' setting so only cleared users can read the data"
      },
      {
        "letter": "C",
        "text": "Export the usage data to an encrypted Amazon S3 bucket that only cleared personnel can access"
      },
      {
        "letter": "D",
        "text": "Install a third-party encryption gateway in front of the analytics store"
      }
    ],
    "explanation": "Correct answer: A. Anypoint Monitoring exposes API usage metrics and integrates with Anypoint Platform's role-based access control, so access can be limited to cleared personnel natively. There is no platform-wide 'Encrypt API Analytics' setting (B), exporting to S3 (C) moves the data outside the platform, and a third-party gateway (D) is exactly the kind of external tool the agency wants to avoid.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Anypoint Monitoring metrics are governed by role-based permissions that limit who can view them."
      },
      "B": {
        "type": "Incorrect",
        "text": "There is no platform setting that encrypts analytics to restrict viewing."
      },
      "C": {
        "type": "Incorrect",
        "text": "Exporting to S3 moves the data outside the platform."
      },
      "D": {
        "type": "Incorrect",
        "text": "A third-party gateway is an external tool the agency wants to avoid."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring Overview",
        "url": "https://docs.mulesoft.com/monitoring/"
      },
      "secondary": {
        "title": "Anypoint Monitoring - Metrics, Retention, and Limits FAQ",
        "url": "https://docs.mulesoft.com/monitoring/am-faq"
      }
    },
    "correctAnswer": "A"
  },
  {
    "id": "q-286",
    "number": 286,
    "title": "Performance Monitoring - Finding slow processors",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Performance Monitoring",
      "Monitoring"
    ],
    "prompt": "A manufacturing company's ERP integration has latency spikes, and the team suspects inefficient flows. It already has Anypoint Monitoring available. What should it do first?",
    "options": [
      {
        "letter": "A",
        "text": "Add more runtime instances to distribute the load across more workers"
      },
      {
        "letter": "B",
        "text": "Review the flow activity metrics in Anypoint Monitoring to identify the slow processors, then refactor the flow"
      },
      {
        "letter": "C",
        "text": "Insert custom loggers at the start and end of each flow to measure latency"
      },
      {
        "letter": "D",
        "text": "Increase the JVM heap size of the runtime so the flows have more memory"
      }
    ],
    "explanation": "Correct answer: B. Flow activity metrics show how long each processor takes, so the team can pinpoint and fix the slow step instead of guessing. Scaling out (A), custom latency loggers (C), and a larger heap (D) are changes made without first locating the bottleneck, and none of them identifies the inefficient processor.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Flow activity metrics identify the slow processors, enabling a targeted fix."
      },
      "A": {
        "type": "Incorrect",
        "text": "Adding instances spreads load but does not reveal or fix the inefficient flow."
      },
      "C": {
        "type": "Incorrect",
        "text": "Custom latency loggers duplicate what Anypoint Monitoring already provides."
      },
      "D": {
        "type": "Incorrect",
        "text": "A larger heap addresses memory, not necessarily the flow's inefficiency."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring Overview",
        "url": "https://docs.mulesoft.com/monitoring/"
      },
      "secondary": {
        "title": "Anypoint Monitoring - Metrics, Retention, and Limits FAQ",
        "url": "https://docs.mulesoft.com/monitoring/am-faq"
      }
    },
    "correctAnswer": "B"
  },
  {
    "id": "q-287",
    "number": 287,
    "title": "API Monitoring and Governance - Anomaly detection with GDPR retention",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "API Monitoring & Governance",
      "Monitoring"
    ],
    "prompt": "A hospital network wants to proactively detect abnormal API usage while meeting GDPR data-retention rules, using Anypoint Monitoring and custom alerts. Which two actions should it take? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Send all logs to the SIEM indefinitely and assume the SIEM filters out personal data"
      },
      {
        "letter": "B",
        "text": "Rely on API Manager client ID enforcement alone to detect abnormal usage"
      },
      {
        "letter": "C",
        "text": "Configure Anypoint Monitoring alerts, including anomaly-based detection, on the key API metrics"
      },
      {
        "letter": "D",
        "text": "Forward logs to an external system using the platform's default retention settings"
      },
      {
        "letter": "E",
        "text": "Set monitoring data retention to the minimum required and purge data beyond the GDPR window"
      }
    ],
    "explanation": "Correct answers: C and E. Anypoint Monitoring alerts, including anomaly-based detection, surface abnormal usage, and setting retention to the minimum required with purging keeps the data within the GDPR window. Relying on the SIEM to filter personal data (A) is not a retention control, client ID enforcement (B) authenticates callers rather than detecting anomalies, and the default retention (D) may exceed the allowed window.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Anomaly-based alerts detect abnormal usage of the key API metrics."
      },
      "E": {
        "type": "Correct",
        "text": "Minimizing retention and purging beyond the window satisfies the GDPR rules."
      },
      "A": {
        "type": "Incorrect",
        "text": "Assuming the SIEM filters personal data is not a retention control."
      },
      "B": {
        "type": "Incorrect",
        "text": "Client ID enforcement authenticates callers; it does not detect anomalies."
      },
      "D": {
        "type": "Incorrect",
        "text": "The default retention may exceed the allowed GDPR window."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring Overview",
        "url": "https://docs.mulesoft.com/monitoring/"
      },
      "secondary": {
        "title": "Anypoint Monitoring - Metrics, Retention, and Limits FAQ",
        "url": "https://docs.mulesoft.com/monitoring/am-faq"
      }
    },
    "correctAnswers": [
      "C",
      "E"
    ]
  },
  {
    "id": "q-288",
    "number": 288,
    "title": "API Monitoring - Single-view visibility across many APIs",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "API Monitoring",
      "Monitoring"
    ],
    "prompt": "A national retail chain wants real-time visibility into API usage across many applications, but its operations team can manage only a few dashboards. What should the architect configure?",
    "options": [
      {
        "letter": "A",
        "text": "A separate monitoring dashboard for each runtime in the organization"
      },
      {
        "letter": "B",
        "text": "CloudHub real-time log streaming, watched directly in the console"
      },
      {
        "letter": "C",
        "text": "A third-party SIEM dashboard fed by API Autodiscovery"
      },
      {
        "letter": "D",
        "text": "Anypoint Monitoring's built-in dashboards with alert policies, so many APIs can be watched from a single view"
      }
    ],
    "explanation": "Correct answer: D. Anypoint Monitoring's built-in dashboards aggregate API and application metrics, and alert policies notify the team when something needs attention, so a small team can watch many APIs from one view. A dashboard per runtime (A) multiplies the views the team cannot manage, watching raw log streams (B) is not scalable monitoring, and API Autodiscovery (C) links implementations to API instances rather than feeding a SIEM.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Built-in dashboards plus alert policies give single-view visibility across many APIs."
      },
      "A": {
        "type": "Incorrect",
        "text": "One dashboard per runtime increases the number of views the team must manage."
      },
      "B": {
        "type": "Incorrect",
        "text": "Watching raw log streams is not a scalable monitoring approach."
      },
      "C": {
        "type": "Incorrect",
        "text": "API Autodiscovery links an implementation to an API instance; it does not feed a SIEM."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring Overview",
        "url": "https://docs.mulesoft.com/monitoring/"
      },
      "secondary": {
        "title": "API Visualizer (Anypoint Visualizer) Overview",
        "url": "https://docs.mulesoft.com/visualizer/"
      }
    },
    "correctAnswer": "D"
  },
  {
    "id": "q-289",
    "number": 289,
    "title": "Monitoring and Observability - Visualizer topology and policy troubleshooting",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Visualizer",
      "API Manager Policies"
    ],
    "prompt": "An organization wants to view the dependencies between its Experience, Process, and System APIs in real time and also troubleshoot whether a Rate Limiting policy on the Experience API is causing failures. Which Anypoint Platform tool should the architect recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Visualizer, which shows the topology and the policy visualization"
      },
      {
        "letter": "B",
        "text": "Anypoint Monitoring custom dashboards, which chart the dependencies and policy failures"
      },
      {
        "letter": "C",
        "text": "API Manager analytics, which reports each API's policy violations over time"
      },
      {
        "letter": "D",
        "text": "Anypoint Functional Monitoring, which tests the APIs from outside the network"
      }
    ],
    "explanation": "Correct answer: A. Visualizer shows the dependency topology in real time and includes a policy visualization that indicates whether policies are applied and where failures occur. Monitoring dashboards chart metrics rather than dependencies (B), API Manager analytics reports usage and policy data but not the live topology (C), and Functional Monitoring runs external tests (D).",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "Monitoring dashboards chart metrics, not the dependency topology."
      },
      "A": {
        "type": "Correct",
        "text": "Visualizer shows the topology and the policy visualization needed here."
      },
      "C": {
        "type": "Incorrect",
        "text": "API Manager analytics reports usage and policy data, not the live topology."
      },
      "D": {
        "type": "Incorrect",
        "text": "Functional Monitoring runs scheduled external tests."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Visualizer — Architecture Visualization and Access",
        "url": "https://docs.mulesoft.com/visualizer/architecture-visualization#access-api-visualizer"
      },
      "secondary": {
        "title": "Anypoint Visualizer — Policy Visualization",
        "url": "https://docs.mulesoft.com/visualizer/policy-visualization#view-information-about-one-service-in-your-network"
      }
    },
    "correctAnswer": "A"
  },
  {
    "id": "q-290",
    "number": 290,
    "title": "Monitoring and Observability - CloudHub worker CPU alert",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Runtime Manager Alerts",
      "CloudHub"
    ],
    "prompt": "A Mule application deployed to CloudHub 1.0 requires an email alert if a worker's CPU utilization exceeds 80% for more than 10 minutes. Where must this alert be configured?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Monitoring Alerts, which evaluate API and application metrics"
      },
      {
        "letter": "B",
        "text": "Runtime Manager Alerts, which support worker CPU conditions for CloudHub 1.0 applications"
      },
      {
        "letter": "C",
        "text": "API Manager Alerts, which evaluate client contract and quota conditions"
      },
      {
        "letter": "D",
        "text": "The CloudHub Connector, configured to emit a notification when CPU is high"
      }
    ],
    "explanation": "Correct answer: B. Worker CPU conditions for CloudHub 1.0 applications are configured as Runtime Manager alerts. Anypoint Monitoring alerts (A) evaluate API and application metrics rather than the Runtime Manager worker conditions, API Manager alerts (C) concern contracts and quotas, and the CloudHub Connector (D) emits notifications from within a flow.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Runtime Manager Alerts support worker CPU conditions for CloudHub 1.0 applications."
      },
      "A": {
        "type": "Incorrect",
        "text": "Monitoring alerts evaluate API and application metrics, not Runtime Manager worker conditions."
      },
      "C": {
        "type": "Incorrect",
        "text": "API Manager alerts evaluate client contracts and quotas."
      },
      "D": {
        "type": "Incorrect",
        "text": "The CloudHub Connector emits notifications from a flow; it is not an alert configuration."
      }
    },
    "references": {
      "primary": {
        "title": "Runtime Manager — Alert Conditions for CloudHub Applications",
        "url": "https://docs.mulesoft.com/runtime-manager/alerts-on-runtime-manager#conditions-for-applications-deployed-to-cloudhub"
      },
      "secondary": {
        "title": "Runtime Manager — Compare Runtime Manager and Anypoint Monitoring Alerts",
        "url": "https://docs.mulesoft.com/runtime-manager/alerts-on-runtime-manager#compare-runtime-manager-alerts-and-anypoint-monitoring-alerts"
      }
    },
    "correctAnswer": "B"
  },
  {
    "id": "q-291",
    "number": 291,
    "title": "Monitoring and Observability - External compliant application logging",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Logging",
      "CloudHub"
    ],
    "prompt": "A company requires all Mule application logs to go directly to its enterprise Splunk system and prohibits logs from being stored or viewed in Anypoint Platform. How should the architect design logging for CloudHub applications?",
    "options": [
      {
        "letter": "A",
        "text": "Configure an Anypoint Monitoring log forwarder and hide the Runtime Manager log viewer"
      },
      {
        "letter": "B",
        "text": "Send logs to Splunk from a flow using the Splunk Connector instead of the logging framework"
      },
      {
        "letter": "C",
        "text": "Configure a custom Log4j2 appender in the Mule application and select \"Disable CloudHub logs\" in the Runtime Manager deployment settings"
      },
      {
        "letter": "D",
        "text": "Ask MuleSoft Support to reroute the application's logs to Splunk and bypass CloudHub storage"
      }
    ],
    "explanation": "Correct answer: C. A custom Log4j2 appender forwards logs from the application to the external SIEM, and selecting \"Disable CloudHub logs\" prevents the platform from retaining them. An Anypoint Monitoring forwarder (A) is not a native third-party log forwarder, sending logs from a flow (B) couples log delivery to application processing, and a support reroute (D) is not the standard configuration.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "The custom appender sends logs to Splunk, and disabling CloudHub logs prevents platform storage."
      },
      "A": {
        "type": "Incorrect",
        "text": "Anypoint Monitoring does not provide the described native third-party forwarder."
      },
      "B": {
        "type": "Incorrect",
        "text": "Logging from a flow couples log delivery to application processing."
      },
      "D": {
        "type": "Incorrect",
        "text": "A support reroute is not the standard application logging configuration."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub — Custom Log Appender and Disabling CloudHub Logging",
        "url": "https://docs.mulesoft.com/cloudhub/custom-log-appender#create-your-log4j-configuration"
      },
      "secondary": {
        "title": "CloudHub — Enable Custom Log4j Configurations in CloudHub",
        "url": "https://docs.mulesoft.com/cloudhub/custom-log-appender#enable-custom-log4j-configurations-in-cloudhub"
      }
    },
    "correctAnswer": "C"
  },
  {
    "id": "q-292",
    "number": 292,
    "title": "Monitoring and Observability - Scheduled external API tests",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Functional Monitoring",
      "API Testing"
    ],
    "prompt": "An organization needs to test a public Experience API every five minutes by sending a specific JSON payload from an external geographic location and asserting that the response is HTTP 200. Which tool provides this capability?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Monitoring Alerts, which notify when an API's error rate crosses a threshold"
      },
      {
        "letter": "B",
        "text": "Runtime Manager health checks, which ping the application from inside CloudHub"
      },
      {
        "letter": "C",
        "text": "API Manager automated policies, which validate each response against the specification"
      },
      {
        "letter": "D",
        "text": "Anypoint Functional Monitoring, which runs scheduled tests from external locations"
      }
    ],
    "explanation": "Correct answer: D. Anypoint Functional Monitoring runs scheduled API tests from external locations, sending a defined payload and asserting the response. Monitoring Alerts (A) react to metrics rather than sending test requests, Runtime Manager health checks (B) monitor the application from inside CloudHub, and API Manager policies (C) enforce rules on live traffic.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Functional Monitoring runs scheduled API tests from external locations."
      },
      "A": {
        "type": "Incorrect",
        "text": "Monitoring Alerts react to metrics; they do not send test requests."
      },
      "B": {
        "type": "Incorrect",
        "text": "Runtime Manager health checks monitor from inside CloudHub, not from an external location."
      },
      "C": {
        "type": "Incorrect",
        "text": "API Manager policies enforce rules on live traffic rather than testing."
      }
    },
    "references": {
      "primary": {
        "title": "API Functional Monitoring — Monitors, Tests, and Schedules",
        "url": "https://docs.mulesoft.com/api-functional-monitoring/#functional-monitoring-concepts"
      },
      "secondary": {
        "title": "API Functional Monitoring — Add a Schedule and Scheduling Limits",
        "url": "https://docs.mulesoft.com/api-functional-monitoring/afm-add-schedule#scheduling-limits"
      }
    },
    "correctAnswer": "D"
  },
  {
    "id": "q-293",
    "number": 293,
    "title": "Monitoring and Observability - Assigning Visualizer architecture layers",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Visualizer",
      "API-led Connectivity"
    ],
    "prompt": "An organization wants Mule applications to appear automatically in the Experience, Process, and System layers in Anypoint Visualizer. How should the applications be configured when deployed to CloudHub?",
    "options": [
      {
        "letter": "A",
        "text": "Set the anypoint.platform.visualizer.layer property in the application or in the Runtime Manager deployment properties"
      },
      {
        "letter": "B",
        "text": "Add the applications to a specific business group in Access Management"
      },
      {
        "letter": "C",
        "text": "Apply an automated API Manager policy that targets the API layer"
      },
      {
        "letter": "D",
        "text": "Configure an API layer tag in Anypoint Exchange and link it to the implementation"
      }
    ],
    "explanation": "Correct answer: A. An application's Visualizer layer is assigned with the anypoint.platform.visualizer.layer property at deployment. Business group membership (B) controls access rather than the layer, an API Manager policy (C) cannot set the layer, and an Exchange tag (D) is not how the layer is assigned.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The visualizer.layer property assigns the application to a Visualizer layer."
      },
      "B": {
        "type": "Incorrect",
        "text": "Business group membership controls access, not the Visualizer layer."
      },
      "C": {
        "type": "Incorrect",
        "text": "An API Manager policy cannot assign a Visualizer layer."
      },
      "D": {
        "type": "Incorrect",
        "text": "An Exchange tag is not how the Visualizer layer is assigned."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Visualizer — Set a Layer with Properties",
        "url": "https://docs.mulesoft.com/visualizer/layers#set-a-layer-with-properties"
      },
      "secondary": {
        "title": "Anypoint Visualizer — Architecture Visualization",
        "url": "https://docs.mulesoft.com/visualizer/architecture-visualization#access-api-visualizer"
      }
    },
    "correctAnswer": "A"
  },
  {
    "id": "q-294",
    "number": 294,
    "title": "Monitoring and Observability - Alerting on API client quota violations",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "API Manager Alerts",
      "Rate Limiting"
    ],
    "prompt": "An operations team needs an email notification if a specific API client, identified by its client_id, exceeds its request quota under a Rate Limiting SLA policy. Where must the alert be configured?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Monitoring Alerts, which evaluate API invocation metrics"
      },
      {
        "letter": "B",
        "text": "API Manager Alerts, which evaluate client contract and quota conditions"
      },
      {
        "letter": "C",
        "text": "Runtime Manager Alerts, which evaluate worker and application health"
      },
      {
        "letter": "D",
        "text": "Access Management audit logs, which record client access changes"
      }
    ],
    "explanation": "Correct answer: B. Quota conditions tied to a client application's SLA contract are configured as API Manager alerts. Anypoint Monitoring alerts (A) evaluate invocation metrics rather than contract quotas, Runtime Manager alerts (C) cover worker and application health, and audit logs (D) record access changes rather than raising alerts.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "API Manager Alerts evaluate client contract and quota conditions."
      },
      "A": {
        "type": "Incorrect",
        "text": "Monitoring Alerts evaluate API invocation metrics, not contract quotas."
      },
      "C": {
        "type": "Incorrect",
        "text": "Runtime Manager Alerts cover worker and application health."
      },
      "D": {
        "type": "Incorrect",
        "text": "Audit logs record access changes; they do not raise quota alerts."
      }
    },
    "references": {
      "primary": {
        "title": "API Manager — Using API Alerts for Contracts and Clients",
        "url": "https://docs.mulesoft.com/api-manager/latest/using-api-alerts#contracts-alerts"
      },
      "secondary": {
        "title": "API Manager — Defining SLA Tiers and Managing Applications",
        "url": "https://docs.mulesoft.com/api-manager/latest/defining-sla-tiers#managing-applications"
      }
    },
    "correctAnswer": "B"
  },
  {
    "id": "q-295",
    "number": 295,
    "title": "Monitoring and Observability - Geographic functional testing",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Functional Monitoring",
      "API Testing"
    ],
    "prompt": "An integration team needs continuous tests of public Experience APIs from multiple geographic locations outside its own network, sending JSON payloads and asserting HTTP 200 responses. Which capability meets this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Monitoring custom dashboards, which chart API response times"
      },
      {
        "letter": "B",
        "text": "Runtime Manager alerts, which monitor worker health and availability"
      },
      {
        "letter": "C",
        "text": "Anypoint Functional Monitoring, which runs scheduled tests from external locations"
      },
      {
        "letter": "D",
        "text": "API Manager automated policies, which validate responses against the specification"
      }
    ],
    "explanation": "Correct answer: C. Anypoint Functional Monitoring runs scheduled tests from external geographic locations, sending defined payloads and asserting the responses. Monitoring dashboards (A) chart metrics, Runtime Manager alerts (B) monitor worker health, and API Manager policies (D) enforce rules on live traffic.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Functional Monitoring runs scheduled tests from external locations."
      },
      "A": {
        "type": "Incorrect",
        "text": "Monitoring dashboards chart metrics rather than sending test requests."
      },
      "B": {
        "type": "Incorrect",
        "text": "Runtime Manager alerts monitor worker health, not API responses."
      },
      "D": {
        "type": "Incorrect",
        "text": "API Manager policies enforce rules on live traffic rather than testing."
      }
    },
    "references": {
      "primary": {
        "title": "API Functional Monitoring — Public and Private Locations",
        "url": "https://docs.mulesoft.com/api-functional-monitoring/#afm-public-locations"
      },
      "secondary": {
        "title": "API Functional Monitoring — Testing Private APIs from Public Locations",
        "url": "https://docs.mulesoft.com/api-functional-monitoring/afm-monitoring-public-apis#testing-private-apis-from-public-locations"
      }
    },
    "correctAnswer": "C"
  },
  {
    "id": "q-296",
    "number": 296,
    "title": "Monitoring and Observability - Custom business-logic notifications",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Runtime Manager Alerts",
      "CloudHub Connector"
    ],
    "prompt": "A Mule application on a CloudHub 1.0 worker must alert when a specific business-logic error occurs inside a Choice router, such as an invalid third-party payload. How can this custom alert be achieved?",
    "options": [
      {
        "letter": "A",
        "text": "Create an API Manager alert based on the HTTP 400 responses the flow returns"
      },
      {
        "letter": "B",
        "text": "Configure an Anypoint Monitoring alert that scans application logs for a DataWeave error string"
      },
      {
        "letter": "C",
        "text": "Define a custom metric in Anypoint Visualizer that highlights the application node"
      },
      {
        "letter": "D",
        "text": "Use the CloudHub Connector to emit a Custom Application Notification and configure a Runtime Manager alert for it"
      }
    ],
    "explanation": "Correct answer: D. A Mule flow can emit a Custom Application Notification through the CloudHub Connector, and Runtime Manager can alert on that notification. An HTTP 400 alert (A) does not represent the internal business condition, monitoring alerts cannot be configured by scanning logs for an arbitrary string (B), and Visualizer (C) displays topology rather than creating business alerts.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "The connector emits the custom notification from the flow, and Runtime Manager alerts on it."
      },
      "A": {
        "type": "Incorrect",
        "text": "An HTTP status alert does not represent the internal business-logic condition."
      },
      "B": {
        "type": "Incorrect",
        "text": "Monitoring alerts cannot be configured by scanning logs for an arbitrary string."
      },
      "C": {
        "type": "Incorrect",
        "text": "Visualizer displays topology; it does not create business-condition alerts."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub — Custom Application Alerts with CloudHub Connector",
        "url": "https://docs.mulesoft.com/cloudhub/custom-application-alerts#configure-the-notification-in-cloudhub-connector"
      },
      "secondary": {
        "title": "CloudHub — Create a Custom Alert",
        "url": "https://docs.mulesoft.com/cloudhub/custom-application-alerts#create-a-custom-alert"
      }
    },
    "correctAnswer": "D"
  },
  {
    "id": "q-297",
    "number": 297,
    "title": "Monitoring and Observability - Long-term CloudHub log retention",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Logging",
      "CloudHub"
    ],
    "prompt": "A company must retain application logs for one year for compliance. Its APIs run on CloudHub 1.0. What is the most architecturally sound way to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Configure a custom Log4j2 appender to forward logs to an external SIEM, and optionally disable CloudHub logging"
      },
      {
        "letter": "B",
        "text": "Download logs from Runtime Manager on a schedule and store them in an S3 bucket"
      },
      {
        "letter": "C",
        "text": "Purchase Anypoint Titanium, which natively extends CloudHub log retention to one year"
      },
      {
        "letter": "D",
        "text": "Store the log payloads in Object Store v2 so they persist for the required period"
      }
    ],
    "explanation": "Correct answer: A. Forwarding logs to an external SIEM provides durable, centrally managed retention beyond CloudHub's application log limits, and CloudHub logging can then be disabled if needed. Scheduled downloads (B) are operationally fragile, a subscription tier (C) does not guarantee one-year CloudHub log retention, and Object Store (D) is not a log-archiving mechanism.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "An external SIEM retains forwarded logs for the required period."
      },
      "B": {
        "type": "Incorrect",
        "text": "Scheduled manual downloads are operationally fragile and not continuous archival."
      },
      "C": {
        "type": "Incorrect",
        "text": "A subscription tier does not guarantee one-year CloudHub log retention."
      },
      "D": {
        "type": "Incorrect",
        "text": "Object Store is not an appropriate log-archiving mechanism."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub — Custom Log Appender Requirements and Restrictions",
        "url": "https://docs.mulesoft.com/cloudhub/custom-log-appender#requirements-and-restrictions"
      },
      "secondary": {
        "title": "Anypoint Monitoring — Data Storage and Retention",
        "url": "https://docs.mulesoft.com/monitoring/#data-storage-retention"
      }
    },
    "correctAnswer": "A"
  },
  {
    "id": "q-298",
    "number": 298,
    "title": "Monitoring and Observability - Cross-application metrics dashboard",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Monitoring",
      "Custom Dashboards"
    ],
    "prompt": "An architect wants one dashboard showing CPU utilization of a System API, memory utilization of a Process API, and average response time of an Experience API side by side. Which Anypoint Platform feature provides this capability?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Monitoring built-in dashboards, which show the metrics of one application at a time"
      },
      {
        "letter": "B",
        "text": "Anypoint Monitoring custom dashboards, which combine charts for several applications on one canvas"
      },
      {
        "letter": "C",
        "text": "Anypoint Visualizer, which overlays metrics on the dependency graph"
      },
      {
        "letter": "D",
        "text": "API Manager analytics, which reports each API's policy and contract data"
      }
    ],
    "explanation": "Correct answer: B. Custom dashboards let you place charts for several applications and metrics on one canvas. Built-in dashboards (A) are oriented to one application at a time, Visualizer (C) shows topology with metrics overlaid, and API Manager analytics (D) reports policy and contract data.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Custom dashboards combine charts for several applications and metrics on one canvas."
      },
      "A": {
        "type": "Incorrect",
        "text": "Built-in dashboards show one application at a time."
      },
      "C": {
        "type": "Incorrect",
        "text": "Visualizer shows topology with metrics overlaid, not a combined metrics dashboard."
      },
      "D": {
        "type": "Incorrect",
        "text": "API Manager analytics reports policy and contract data."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring — Custom Dashboards",
        "url": "https://docs.mulesoft.com/monitoring/custom-dashboards#custom-dashboards"
      },
      "secondary": {
        "title": "Anypoint Monitoring — Dashboard Configuration Reference",
        "url": "https://docs.mulesoft.com/monitoring/dashboard-config-ref#metrics"
      }
    },
    "correctAnswer": "B"
  },
  {
    "id": "q-299",
    "number": 299,
    "title": "Monitoring and Observability - Environment visibility in Visualizer",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Visualizer",
      "Runtime Manager Permissions"
    ],
    "prompt": "A developer can see QA dependencies in Anypoint Visualizer but cannot see production dependencies for a set of APIs. What is the most likely reason?",
    "options": [
      {
        "letter": "A",
        "text": "The Visualizer layer property is missing from the production applications"
      },
      {
        "letter": "B",
        "text": "The developer lacks Visualizer Editor permission in the production business group"
      },
      {
        "letter": "C",
        "text": "The developer lacks Read Applications permission for the production environment in Runtime Manager"
      },
      {
        "letter": "D",
        "text": "Visualizer does not support multiple environments in one organization"
      }
    ],
    "explanation": "Correct answer: C. What a user sees in Visualizer is scoped by their environment permissions, so the developer most likely lacks Read Applications permission for production. A missing layer property (A) would affect the layer grouping, not visibility of the whole environment, Visualizer Editor (B) governs creating defined views, and Visualizer does support multiple environments (D).",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Visualizer visibility is scoped by environment permissions such as Read Applications."
      },
      "A": {
        "type": "Incorrect",
        "text": "A missing layer property affects grouping, not visibility of the environment."
      },
      "B": {
        "type": "Incorrect",
        "text": "Visualizer Editor governs creating defined views, not environment visibility."
      },
      "D": {
        "type": "Incorrect",
        "text": "Visualizer supports multiple environments in one organization."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Visualizer — Troubleshooting Permissions Issues",
        "url": "https://docs.mulesoft.com/visualizer/troubleshoot-visualizer#i-seem-to-have-permissions-issues"
      },
      "secondary": {
        "title": "Runtime Manager — Access and Permissions for Deployments",
        "url": "https://docs.mulesoft.com/runtime-manager/deployment-strategies#runtime-manager-features"
      }
    },
    "correctAnswer": "C"
  },
  {
    "id": "q-300",
    "number": 300,
    "title": "Monitoring and Observability - BDD API tests in CI/CD",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "BAT CLI",
      "CI/CD",
      "API Testing"
    ],
    "prompt": "A DevSecOps pipeline must run standard BDD test suites against newly deployed QA APIs before production deployment. Which tool is designed to execute these tests from the command line in CI/CD?",
    "options": [
      {
        "letter": "A",
        "text": "The MUnit Maven Plugin, which runs unit tests during the Maven build"
      },
      {
        "letter": "B",
        "text": "Anypoint CLI, which manages platform assets and deployments"
      },
      {
        "letter": "C",
        "text": "API Manager CLI, which manages policies and contracts"
      },
      {
        "letter": "D",
        "text": "BAT CLI, which executes BDD test suites from the command line"
      }
    ],
    "explanation": "Correct answer: D. BAT CLI is designed to execute BDD API test suites from the command line in a CI/CD pipeline. The MUnit Maven Plugin (A) runs unit tests inside the Mule application build, and Anypoint CLI and API Manager CLI (B, C) manage platform assets, policies, and deployments rather than running BDD API tests.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "BAT CLI executes BDD API test suites from the command line in CI/CD."
      },
      "A": {
        "type": "Incorrect",
        "text": "The MUnit Maven Plugin runs unit tests during the application build."
      },
      "B": {
        "type": "Incorrect",
        "text": "Anypoint CLI manages platform assets and deployments."
      },
      "C": {
        "type": "Incorrect",
        "text": "API Manager CLI manages policies and contracts, not BDD test suites."
      }
    },
    "references": {
      "primary": {
        "title": "API Functional Monitoring — BAT CLI Commands",
        "url": "https://docs.mulesoft.com/api-functional-monitoring/bat-command-reference#bat-commands"
      },
      "secondary": {
        "title": "API Functional Monitoring — Behavior Driven Development (BDD) Language",
        "url": "https://docs.mulesoft.com/api-functional-monitoring/#afm-bdd"
      }
    },
    "correctAnswer": "D"
  },
  {
    "id": "q-301",
    "number": 301,
    "title": "Monitoring and Observability - Troubleshooting cascading API failures",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Visualizer",
      "Troubleshooting"
    ],
    "prompt": "An Experience API intermittently returns 502 Bad Gateway errors. The architect wants to quickly determine whether the Experience API or a downstream Process or System API is failing. Which tool gives the fastest visual representation of the failure chain?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Visualizer, whose graph shows which downstream API is failing"
      },
      {
        "letter": "B",
        "text": "Runtime Manager's dashboard, which shows each application's worker health"
      },
      {
        "letter": "C",
        "text": "API Manager alerts, which report policy violations for the API"
      },
      {
        "letter": "D",
        "text": "Access Management audit logs, which record configuration changes"
      }
    ],
    "explanation": "Correct answer: A. Visualizer's graph shows the failure chain across the APIs, so the failing downstream API is visible quickly. Runtime Manager's dashboard (B) shows worker health rather than the call chain, API Manager alerts (C) report policy violations, and audit logs (D) record configuration changes.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Visualizer's graph shows which downstream API in the chain is failing."
      },
      "B": {
        "type": "Incorrect",
        "text": "Runtime Manager's dashboard shows worker health, not the call chain."
      },
      "C": {
        "type": "Incorrect",
        "text": "API Manager alerts report policy violations."
      },
      "D": {
        "type": "Incorrect",
        "text": "Audit logs record configuration changes, not request failures."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Visualizer — View Metrics for One Service in Your Network",
        "url": "https://docs.mulesoft.com/visualizer/troubleshooting-visualization#view-metrics-for-one-service-in-your-network"
      },
      "secondary": {
        "title": "Anypoint Visualizer — Choosing Your Metric",
        "url": "https://docs.mulesoft.com/visualizer/troubleshooting-visualization#choosing-your-metric"
      }
    },
    "correctAnswer": "A"
  },
  {
    "id": "q-302",
    "number": 302,
    "title": "Monitoring and Observability - Monitoring customer-hosted runtimes",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Monitoring Agent",
      "Customer-Hosted Runtimes"
    ],
    "prompt": "An organization runs customer-hosted Mule runtimes on local VMs and wants to view API metrics and custom dashboards in Anypoint Monitoring. What is required?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy an API proxy in CloudHub to route traffic to the on-premises VMs"
      },
      {
        "letter": "B",
        "text": "Install and configure the Anypoint Monitoring Agent on the on-premises runtime hosts"
      },
      {
        "letter": "C",
        "text": "Purchase Anypoint Titanium, because on-premises monitoring is otherwise disabled"
      },
      {
        "letter": "D",
        "text": "Set anypoint.platform.analytics_base_uri in the runtime's wrapper.conf file"
      }
    ],
    "explanation": "Correct answer: B. Customer-hosted Mule runtimes require the Anypoint Monitoring Agent to collect and send metrics to the monitoring plane. A CloudHub proxy (A) is not required to enable monitoring, Titanium alone (C) does not install or configure the agent, and the analytics_base_uri property (D) is not the stated mechanism.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "The Anypoint Monitoring Agent collects and sends metrics from customer-hosted runtimes."
      },
      "A": {
        "type": "Incorrect",
        "text": "A CloudHub proxy is not required to enable monitoring."
      },
      "C": {
        "type": "Incorrect",
        "text": "Titanium alone does not install or configure the monitoring agent."
      },
      "D": {
        "type": "Incorrect",
        "text": "That property is not the mechanism for enabling customer-hosted monitoring."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring — Install the Anypoint Monitoring Agent on On-Premises Hosts",
        "url": "https://docs.mulesoft.com/monitoring/am-installing#install_ap_monitoring_onprem"
      },
      "secondary": {
        "title": "Anypoint Monitoring — Verify the Anypoint Monitoring Agent is Running",
        "url": "https://docs.mulesoft.com/monitoring/am-installing#verify-the-anypoint-monitoring-agent-is-running"
      }
    },
    "correctAnswer": "B"
  },
  {
    "id": "q-303",
    "number": 303,
    "title": "Monitoring and Observability - Tracking application deletion",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Access Management",
      "Audit Logs"
    ],
    "prompt": "An administrator needs to determine which user deleted a critical Mule application from the CloudHub Production environment yesterday. Which Anypoint Platform feature provides this historical tracking information?",
    "options": [
      {
        "letter": "A",
        "text": "Runtime Manager alerts, which notify when an application stops running"
      },
      {
        "letter": "B",
        "text": "Anypoint Monitoring logs, which retain the application's runtime logs"
      },
      {
        "letter": "C",
        "text": "Access Management audit logs, which record administrative actions such as deleting an application"
      },
      {
        "letter": "D",
        "text": "API Manager analytics, which reports API usage and policy violations"
      }
    ],
    "explanation": "Correct answer: C. Access Management audit logs record administrative actions, including who deleted an application. Runtime Manager alerts (A) notify when an application stops but do not attribute the action, runtime logs (B) record the application's own output, and API Manager analytics (D) reports API usage.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Access Management audit logs record who performed administrative actions such as deletion."
      },
      "A": {
        "type": "Incorrect",
        "text": "Runtime Manager alerts notify of a stop but do not attribute the action to a user."
      },
      "B": {
        "type": "Incorrect",
        "text": "Runtime logs record the application's output, not administrative actions."
      },
      "D": {
        "type": "Incorrect",
        "text": "API Manager analytics reports API usage and policy violations."
      }
    },
    "references": {
      "primary": {
        "title": "Access Management — Audit Logging and Export Audit Logs",
        "url": "https://docs.mulesoft.com/access-management/audit-logging#export-audit-logs"
      },
      "secondary": {
        "title": "Access Management — Audit Log Contents for Runtime Manager",
        "url": "https://docs.mulesoft.com/access-management/audit-logging#runtime-manager"
      }
    },
    "correctAnswer": "C"
  },
  {
    "id": "q-304",
    "number": 304,
    "title": "Monitoring and Observability - Supported Runtime Manager alert conditions",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Runtime Manager Alerts",
      "CloudHub"
    ],
    "prompt": "An architect is configuring an alert in Runtime Manager for a CloudHub worker. Which condition is natively supported by Runtime Manager Alerts?",
    "options": [
      {
        "letter": "A",
        "text": "API response time exceeds 2000 milliseconds"
      },
      {
        "letter": "B",
        "text": "HTTP 500 error rate exceeds 5% in the last hour"
      },
      {
        "letter": "C",
        "text": "The API receives a request with an invalid OAuth token"
      },
      {
        "letter": "D",
        "text": "Worker CPU utilization exceeds 90%"
      }
    ],
    "explanation": "Correct answer: D. Runtime Manager Alerts support worker-level conditions such as CPU utilization. Response time and error rate (A, B) are API metrics evaluated by Anypoint Monitoring, and invalid OAuth tokens (C) are handled by a token enforcement policy rather than a Runtime Manager alert.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Worker CPU utilization is a natively supported Runtime Manager alert condition."
      },
      "A": {
        "type": "Incorrect",
        "text": "Response time is an API metric evaluated by Anypoint Monitoring."
      },
      "B": {
        "type": "Incorrect",
        "text": "Error rate is an API metric evaluated by Anypoint Monitoring."
      },
      "C": {
        "type": "Incorrect",
        "text": "Invalid tokens are handled by a token enforcement policy, not a Runtime Manager alert."
      }
    },
    "references": {
      "primary": {
        "title": "Runtime Manager — Alert Conditions for Applications Deployed to CloudHub",
        "url": "https://docs.mulesoft.com/runtime-manager/alerts-on-runtime-manager#conditions-for-applications-deployed-to-cloudhub"
      },
      "secondary": {
        "title": "Runtime Manager — Create an Alert",
        "url": "https://docs.mulesoft.com/runtime-manager/alerts-on-runtime-manager#create-an-alert"
      }
    },
    "correctAnswer": "D"
  },
  {
    "id": "q-305",
    "number": 305,
    "title": "Monitoring and Observability - Dynamic request logging without redeployment",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "API Manager Policies",
      "Message Logging"
    ],
    "prompt": "Without changing Mule application source code, an operations team needs to temporarily log incoming HTTP headers and payloads to troubleshoot a production issue. How can this be accomplished?",
    "options": [
      {
        "letter": "A",
        "text": "Apply a Message Logging policy to the API in API Manager"
      },
      {
        "letter": "B",
        "text": "Enable Verbose Logging in the Runtime Manager application settings"
      },
      {
        "letter": "C",
        "text": "Add a custom appender to log4j2.xml through the Runtime Manager UI"
      },
      {
        "letter": "D",
        "text": "Use the Anypoint Visualizer troubleshooting overlay"
      }
    ],
    "explanation": "Correct answer: A. A Message Logging policy can be applied in API Manager to log request and response headers and payloads without touching the application. Verbose Logging (B) changes the volume of the application's own logs, a custom appender (C) still requires configuration outside the platform UI, and the Visualizer overlay (D) shows topology rather than payloads.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "A Message Logging policy logs headers and payloads without changing the application."
      },
      "B": {
        "type": "Incorrect",
        "text": "Verbose Logging changes the application's own log volume, not the logged fields."
      },
      "C": {
        "type": "Incorrect",
        "text": "A custom appender requires configuration outside the platform UI."
      },
      "D": {
        "type": "Incorrect",
        "text": "The Visualizer overlay shows topology, not request payloads."
      }
    },
    "references": {
      "primary": {
        "title": "Message Logging Policy — Injecting Runtime Logging at the Gateway",
        "url": "https://docs.mulesoft.com/gateway/latest/policies-included-message-logging#how-this-policy-works"
      },
      "secondary": {
        "title": "Message Logging Policy — About the Logging Format",
        "url": "https://docs.mulesoft.com/gateway/latest/policies-included-message-logging#about-the-logging-format"
      }
    },
    "correctAnswer": "A"
  },
  {
    "id": "q-306",
    "number": 306,
    "title": "Monitoring and Observability - Runtime Fabric cluster log forwarding",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Runtime Fabric",
      "Logging"
    ],
    "prompt": "A company runs multiple APIs on Runtime Fabric and requires all application logs to be sent to a centralized third-party system such as Splunk or ELK. What is the recommended approach?",
    "options": [
      {
        "letter": "A",
        "text": "Modify the log4j2.xml of every Mule application on the cluster to add an appender"
      },
      {
        "letter": "B",
        "text": "Configure log forwarding at the Runtime Fabric cluster level to send container standard output to the external system"
      },
      {
        "letter": "C",
        "text": "Install the Splunk Connector in every Mule application and send logs from a flow"
      },
      {
        "letter": "D",
        "text": "Use BAT CLI to extract the container logs on a schedule"
      }
    ],
    "explanation": "Correct answer: B. Runtime Fabric container logs are emitted to standard output, and cluster-level log forwarding centralizes their collection without per-application changes. Editing every application's logging configuration (A) or installing a connector in every application (C) is more costly and error-prone, and BAT CLI (D) runs functional tests rather than collecting logs.",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "Cluster-level forwarding centralizes standard-output collection and delivery."
      },
      "A": {
        "type": "Incorrect",
        "text": "Editing every application's logging configuration is more costly and error-prone."
      },
      "C": {
        "type": "Incorrect",
        "text": "A connector in every application is not the recommended infrastructure-level method."
      },
      "D": {
        "type": "Incorrect",
        "text": "BAT CLI runs functional tests; it is not a log collection tool."
      }
    },
    "references": {
      "primary": {
        "title": "Runtime Fabric — Enable and Configure Log Forwarding",
        "url": "https://docs.mulesoft.com/runtime-fabric/latest/use-anypoint-monitoring#logs"
      },
      "secondary": {
        "title": "Runtime Fabric — Log Forwarding Architecture",
        "url": "https://docs.mulesoft.com/runtime-fabric/latest/use-anypoint-monitoring#log-forwarding-architecture"
      }
    },
    "correctAnswer": "B"
  },
  {
    "id": "q-307",
    "number": 307,
    "title": "Monitoring and Observability - Diagnosing HTTP 429 responses",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Monitoring",
      "API Manager Policies"
    ],
    "prompt": "An API's Anypoint Monitoring built-in dashboard shows many HTTP 429 (Too Many Requests) responses. What is the most likely cause?",
    "options": [
      {
        "letter": "A",
        "text": "The CloudHub shared load balancer is dropping connections because of high traffic"
      },
      {
        "letter": "B",
        "text": "The downstream System API is timing out"
      },
      {
        "letter": "C",
        "text": "An API Manager Rate Limiting or Spike Control policy is rejecting the requests"
      },
      {
        "letter": "D",
        "text": "The worker has run out of memory"
      }
    ],
    "explanation": "Correct answer: C. HTTP 429 is returned by a Rate Limiting or Spike Control policy when a caller exceeds the allowed rate. A load balancer dropping connections (A) would surface as connection errors, a downstream timeout (B) would surface as a 504 or 500, and an out-of-memory worker (D) would surface as 500 errors or restarts.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Rate Limiting or Spike Control policies return 429 when the rate is exceeded."
      },
      "A": {
        "type": "Incorrect",
        "text": "A dropped connection surfaces as a connection error, not a 429."
      },
      "B": {
        "type": "Incorrect",
        "text": "A downstream timeout surfaces as a 504 or 500, not a 429."
      },
      "D": {
        "type": "Incorrect",
        "text": "An out-of-memory worker surfaces as 500 errors or restarts, not a 429."
      }
    },
    "references": {
      "primary": {
        "title": "Spike Control Policy — How This Policy Works",
        "url": "https://docs.mulesoft.com/gateway/latest/policies-included-spike-control#how-this-policy-works"
      },
      "secondary": {
        "title": "API Manager — Rate Limiting and Throttling Policy",
        "url": "https://docs.mulesoft.com/gateway/latest/policies-included-rate-limiting#how-this-policy-works"
      }
    },
    "correctAnswer": "C"
  },
  {
    "id": "q-308",
    "number": 308,
    "title": "Monitoring and Observability - Custom Visualizer labels",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Visualizer",
      "Application Metadata"
    ],
    "prompt": "A team wants to assign custom labels to APIs in Anypoint Visualizer to distinguish Internal traffic from External partner traffic. Which application property should be configured?",
    "options": [
      {
        "letter": "A",
        "text": "`anypoint.platform.visualizer.layer=External`"
      },
      {
        "letter": "B",
        "text": "`anypoint.platform.client_id`"
      },
      {
        "letter": "C",
        "text": "`anypoint.platform.visualizer.group=External`"
      },
      {
        "letter": "D",
        "text": "`anypoint.platform.visualizer.tags=External`"
      }
    ],
    "explanation": "Correct answer: D. The anypoint.platform.visualizer.tags property adds custom metadata for filtering and grouping; the layer property shows the System, Process, or Experience tier, and the client_id property controls access rather than labeling.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The layer property identifies an architectural tier, not an arbitrary custom traffic label."
      },
      "D": {
        "type": "Correct",
        "text": "The tags property adds custom labels such as Internal or External for Visualizer filtering."
      },
      "B": {
        "type": "Incorrect",
        "text": "The client ID property is unrelated to Visualizer custom labels."
      },
      "C": {
        "type": "Incorrect",
        "text": "The proposed visualizer.group property is not the custom tags property."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Visualizer — Set the Tag Using Properties",
        "url": "https://docs.mulesoft.com/visualizer/use-tags-in-visualizer#set-the-tag-using-properties"
      },
      "secondary": {
        "title": "Anypoint Visualizer — Set a Layer with Properties",
        "url": "https://docs.mulesoft.com/visualizer/layers#set-a-layer-with-properties"
      }
    },
    "correctAnswer": "D"
  },
  {
    "id": "q-309",
    "number": 309,
    "title": "Monitoring and Observability - Titanium log search capability",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Monitoring",
      "Subscription Tiers"
    ],
    "prompt": "A company is evaluating Anypoint Titanium. Which capability is provided by the Titanium tier that is not available in the Base tier of Anypoint Monitoring?",
    "options": [
      {
        "letter": "A",
        "text": "Searching logs across all applications in an environment at the same time"
      },
      {
        "letter": "B",
        "text": "Viewing basic CPU and memory metrics in Runtime Manager"
      },
      {
        "letter": "C",
        "text": "Using Anypoint Visualizer to map application dependencies"
      },
      {
        "letter": "D",
        "text": "Applying SLA-based Rate Limiting policies"
      }
    ],
    "explanation": "Correct answer: A. Titanium adds advanced log management, including searching logs across all applications in an environment at once. Basic CPU and memory metrics (B) and Visualizer (C) are available at lower tiers, and SLA-based rate limiting (D) is an API Manager policy rather than a monitoring tier feature.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Cross-application log search in an environment is a Titanium capability."
      },
      "B": {
        "type": "Incorrect",
        "text": "Basic CPU and memory metrics are available at lower tiers."
      },
      "C": {
        "type": "Incorrect",
        "text": "Visualizer is available at lower tiers."
      },
      "D": {
        "type": "Incorrect",
        "text": "SLA-based rate limiting is an API Manager policy, not a monitoring tier feature."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Monitoring — Log Searches Across Applications",
        "url": "https://docs.mulesoft.com/monitoring/logs-search-hf#search-logs"
      },
      "secondary": {
        "title": "Anypoint Monitoring — Anypoint Platform Packages and Plans",
        "url": "https://docs.mulesoft.com/monitoring/#billing"
      }
    },
    "correctAnswer": "A"
  },
  {
    "id": "q-310",
    "number": 310,
    "title": "Monitoring and Observability - CloudHub worker unresponsiveness",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Runtime Manager Alerts",
      "CloudHub"
    ],
    "prompt": "A CloudHub 1.0 application occasionally becomes unresponsive, and the team configures a Runtime Manager Worker Unresponsive alert. How does Runtime Manager determine that a worker is unresponsive?",
    "options": [
      {
        "letter": "A",
        "text": "Runtime Manager pings the application's /api/status endpoint every 10 seconds"
      },
      {
        "letter": "B",
        "text": "CloudHub infrastructure monitors the underlying instance and the Mule Agent heartbeats from the worker"
      },
      {
        "letter": "C",
        "text": "Runtime Manager monitors the internal Hazelcast cluster heartbeat"
      },
      {
        "letter": "D",
        "text": "Runtime Manager checks whether worker CPU has stayed at 100% for five minutes"
      }
    ],
    "explanation": "Correct answer: B. CloudHub infrastructure watches the underlying instance and the Mule Agent heartbeats from the worker to decide that it is unresponsive. There is no /api/status ping every 10 seconds (A), the check is not the Hazelcast heartbeat (C), and sustained 100% CPU is a different condition (D).",
    "rationales": {
      "B": {
        "type": "Correct",
        "text": "CloudHub monitors the underlying instance and the Mule Agent heartbeats."
      },
      "A": {
        "type": "Incorrect",
        "text": "Runtime Manager does not ping an /api/status endpoint every 10 seconds."
      },
      "C": {
        "type": "Incorrect",
        "text": "The unresponsive check is not the Hazelcast cluster heartbeat."
      },
      "D": {
        "type": "Incorrect",
        "text": "Sustained high CPU is a separate condition from unresponsiveness."
      }
    },
    "references": {
      "primary": {
        "title": "CloudHub — How Application Monitoring Works and Automatic Restarts",
        "url": "https://docs.mulesoft.com/cloudhub/worker-monitoring#how-application-monitoring-works"
      },
      "secondary": {
        "title": "Runtime Manager — Alert Conditions for CloudHub Applications",
        "url": "https://docs.mulesoft.com/runtime-manager/alerts-on-runtime-manager#conditions-for-applications-deployed-to-cloudhub"
      }
    },
    "correctAnswer": "B"
  },
  {
    "id": "q-311",
    "number": 311,
    "title": "Monitoring and Observability - Visualizer error indicator",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Visualizer",
      "Troubleshooting"
    ],
    "prompt": "In an Anypoint Visualizer canvas, a Process API node has a bold red circle around it. What does this indicator mean in the troubleshooting and metrics view?",
    "options": [
      {
        "letter": "A",
        "text": "The API's CPU utilization is above the configured threshold"
      },
      {
        "letter": "B",
        "text": "The application has crashed and its CloudHub worker is offline"
      },
      {
        "letter": "C",
        "text": "The API has experienced failing requests, such as HTTP 5xx responses, in the selected time range"
      },
      {
        "letter": "D",
        "text": "The API is missing an active Autodiscovery configuration"
      }
    ],
    "explanation": "Correct answer: C. The red indicator highlights request failures in the selected time range, rather than worker health, CPU thresholds, or Autodiscovery configuration. It does not represent a CPU threshold (A), a crashed worker (B), or a missing Autodiscovery configuration (D).",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "The red ring marks API request failures such as 5xx responses in the selected period."
      },
      "A": {
        "type": "Incorrect",
        "text": "The red ring represents failing requests, not a CPU threshold."
      },
      "B": {
        "type": "Incorrect",
        "text": "The indicator does not specifically mean the worker is offline."
      },
      "D": {
        "type": "Incorrect",
        "text": "The red indicator is not an Autodiscovery configuration warning."
      }
    },
    "references": {
      "primary": {
        "title": "API Visualizer (Anypoint Visualizer) Overview",
        "url": "https://docs.mulesoft.com/visualizer/"
      },
      "secondary": {
        "title": "Anypoint Monitoring Overview",
        "url": "https://docs.mulesoft.com/monitoring/"
      }
    },
    "correctAnswer": "C"
  },
  {
    "id": "q-312",
    "number": 312,
    "title": "Monitoring and Observability - Registering an implementation with API Manager",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "API Autodiscovery",
      "API Manager"
    ],
    "prompt": "A team needs its CloudHub API implementation to register with API Manager so that analytics and policy enforcement are activated. Which configuration is mandatory in the Mule application?",
    "options": [
      {
        "letter": "A",
        "text": "Add the Anypoint Monitoring Agent dependency to the application's pom.xml"
      },
      {
        "letter": "B",
        "text": "Set anypoint.platform.analytics_base_uri to true in the application properties"
      },
      {
        "letter": "C",
        "text": "Configure a custom Log4j2 appender that sends data to API Manager"
      },
      {
        "letter": "D",
        "text": "Configure the API Autodiscovery global element with the API Manager API ID"
      }
    ],
    "explanation": "Correct answer: D. API Autodiscovery, configured with the API Manager API ID, pairs the deployed application with its API instance so policies and analytics are activated. A monitoring agent dependency (A) collects metrics but does not register the API, the analytics_base_uri property (B) is not a registration switch, and a Log4j2 appender (C) does not register the API.",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "API Autodiscovery with the API ID registers the application with its API instance."
      },
      "A": {
        "type": "Incorrect",
        "text": "A monitoring agent collects metrics but does not register the API."
      },
      "B": {
        "type": "Incorrect",
        "text": "That property is not the API registration mechanism."
      },
      "C": {
        "type": "Incorrect",
        "text": "A Log4j2 appender does not register the API with API Manager."
      }
    },
    "references": {
      "primary": {
        "title": "API Autodiscovery — Prerequisites and Proxy vs Basic Endpoint",
        "url": "https://docs.mulesoft.com/api-manager/latest/api-auto-discovery-new-concept#prerequisites"
      },
      "secondary": {
        "title": "API Manager — Autodiscovery Schemes",
        "url": "https://docs.mulesoft.com/api-manager/latest/latest-overview-concept#autodiscovery-schemes"
      }
    },
    "correctAnswer": "D"
  },
  {
    "id": "q-313",
    "number": 313,
    "title": "Monitoring and Observability - Configuring the Visualizer node display name",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Visualizer",
      "Application Metadata"
    ],
    "prompt": "An architect wants the node for the Orders System API to show a friendly, readable title on the Anypoint Visualizer canvas instead of its deployed application name. Which application property should be configured?",
    "options": [
      {
        "letter": "A",
        "text": "anypoint.platform.visualizer.displayName=Orders System API"
      },
      {
        "letter": "B",
        "text": "anypoint.platform.visualizer.layer=Orders System API"
      },
      {
        "letter": "C",
        "text": "anypoint.platform.visualizer.tags=Orders System API"
      },
      {
        "letter": "D",
        "text": "anypoint.platform.client_id=Orders System API"
      }
    ],
    "explanation": "Correct answer: B. The anypoint.platform.visualizer.displayName property sets the readable title shown on a Visualizer node; the layer property assigns the tier, the tags property adds custom grouping labels, and the client_id property is unrelated.",
    "rationales": {
      "B": {
        "type": "Incorrect",
        "text": "anypoint.platform.visualizer.layer assigns the node to a layer; it does not change the node's displayed name."
      },
      "A": {
        "type": "Correct",
        "text": "anypoint.platform.visualizer.displayName=<name> sets the readable title displayed for the node on the canvas."
      },
      "C": {
        "type": "Incorrect",
        "text": "anypoint.platform.visualizer.tags adds tags used for filtering views; it does not rename the node."
      },
      "D": {
        "type": "Incorrect",
        "text": "anypoint.platform.client_id identifies a client application for policy and tracking purposes; it is not a Visualizer display-name property."
      }
    },
    "references": {
      "primary": {
        "title": "Customize the API Visualizer Canvas — Display Name",
        "url": "https://docs.mulesoft.com/visualizer/customize-your-canvas"
      },
      "secondary": {
        "title": "API Visualizer Architecture Visualization — Customization",
        "url": "https://docs.mulesoft.com/visualizer/architecture-visualization"
      }
    },
    "correctAnswer": "A"
  },
  {
    "id": "q-314",
    "number": 314,
    "title": "Monitoring and Observability - Visualizer policy compliance indicator",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Visualizer",
      "API Manager Policies"
    ],
    "prompt": "In the Anypoint Visualizer Policy visualization, an architect selects several InfoSec policies in the Policies card. One API node on the canvas turns green. What does this indicate?",
    "options": [
      {
        "letter": "A",
        "text": "The API has no policies applied to it at all."
      },
      {
        "letter": "B",
        "text": "The API is compliant with all of the selected policies."
      },
      {
        "letter": "C",
        "text": "The API's failure rate is above the configured threshold."
      },
      {
        "letter": "D",
        "text": "The API has been promoted to the production environment."
      }
    ],
    "explanation": "Correct answer: B. In the Visualizer policy view, compliance mode becomes active when you select one or more policies in the Policies card, and a green node indicates the API is compliant with all of the selected policies.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A node with no policies applied does not comply with the selected policies, so it would not turn green."
      },
      "B": {
        "type": "Correct",
        "text": "In compliance mode, an API that complies with all of the selected policies turns green."
      },
      "C": {
        "type": "Incorrect",
        "text": "Failure rate is a metric in the Troubleshooting visualization, not a Policy visualization compliance indicator."
      },
      "D": {
        "type": "Incorrect",
        "text": "Environment promotion is not represented by the green compliance state; the Policy visualization reports policy compliance."
      }
    },
    "references": {
      "primary": {
        "title": "Viewing Policies in API Visualizer — Compliance Mode",
        "url": "https://docs.mulesoft.com/visualizer/policy-visualization"
      },
      "secondary": {
        "title": "Troubleshooting API Visualizer — Permissions and Metrics",
        "url": "https://docs.mulesoft.com/visualizer/troubleshoot-visualizer"
      }
    },
    "correctAnswer": "B"
  },
  {
    "id": "q-315",
    "number": 315,
    "title": "Monitoring and Observability - Visualizer tags set via application properties",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Visualizer",
      "Tags"
    ],
    "prompt": "A team assigns the tag partner-external to a Mule application using the anypoint.platform.visualizer.tags application property at deployment time. What is the effect of this configuration in the Anypoint Visualizer UI?",
    "options": [
      {
        "letter": "A",
        "text": "The tag can be renamed and removed from the Customization section in the UI"
      },
      {
        "letter": "B",
        "text": "The tag is applied only to the production environment and must be re-added for sandbox"
      },
      {
        "letter": "C",
        "text": "The tag appears on the node but cannot be modified or overridden in the UI; it must be changed in the application properties"
      },
      {
        "letter": "D",
        "text": "The tag replaces the node's layer assignment, so the layer is derived from the tag in Visualizer"
      }
    ],
    "explanation": "Correct answer: C. Tags set through the anypoint.platform.visualizer.tags property are controlled by the application properties: they appear on the node but cannot be overridden in the UI. Such tags cannot be renamed or removed from the UI (A), they are not scoped to one environment (B), and tags are independent of layers (D).",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "Property-assigned tags are shown but cannot be overridden in the UI."
      },
      "A": {
        "type": "Incorrect",
        "text": "Property-assigned tags cannot be modified or removed from the UI."
      },
      "B": {
        "type": "Incorrect",
        "text": "The tags property is not scoped to a single environment."
      },
      "D": {
        "type": "Incorrect",
        "text": "Tags and layers are separate customizations."
      }
    },
    "references": {
      "primary": {
        "title": "Using Tags in API Visualizer — Set the Tag Using Properties",
        "url": "https://docs.mulesoft.com/visualizer/use-tags-in-visualizer"
      },
      "secondary": {
        "title": "Customize the API Visualizer Canvas — Tags",
        "url": "https://docs.mulesoft.com/visualizer/customize-your-canvas"
      }
    },
    "correctAnswer": "C"
  },
  {
    "id": "q-316",
    "number": 316,
    "title": "Monitoring and Observability - Visualizer edges based on recent traffic",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Visualizer",
      "Troubleshooting"
    ],
    "prompt": "An architect notices that an edge is displayed between a Process API and a System API on the Anypoint Visualizer canvas, but another pair of APIs defined in the same project shows no edge. What is the most likely explanation?",
    "options": [
      {
        "letter": "A",
        "text": "Visualizer draws edges only between APIs assigned to the same layer"
      },
      {
        "letter": "B",
        "text": "Edges require an API Manager policy to be applied to both APIs"
      },
      {
        "letter": "C",
        "text": "Edges are hidden until the Anypoint Monitoring agent is enabled on both applications"
      },
      {
        "letter": "D",
        "text": "Edges are drawn only when there has been traffic between the applications in the past seven days"
      }
    ],
    "explanation": "Correct answer: D. Visualizer draws edges from observed traffic in the last seven days, so a pair without traffic in that window shows no edge. Edges are not limited to APIs in the same layer (A), policies are not a prerequisite (B), and enabling the Monitoring agent would add metrics rather than reveal edges (C).",
    "rationales": {
      "D": {
        "type": "Correct",
        "text": "Edges come from observed traffic in the past seven days."
      },
      "A": {
        "type": "Incorrect",
        "text": "Edges reflect traffic, not layer membership."
      },
      "B": {
        "type": "Incorrect",
        "text": "Policies are not a prerequisite for drawing an edge."
      },
      "C": {
        "type": "Incorrect",
        "text": "Enabling the Monitoring agent adds metrics, not edges."
      }
    },
    "references": {
      "primary": {
        "title": "Troubleshooting App Visualization — Connections and Traffic",
        "url": "https://docs.mulesoft.com/visualizer/troubleshooting-visualization"
      },
      "secondary": {
        "title": "API Visualizer Overview — How Connections Are Determined",
        "url": "https://docs.mulesoft.com/visualizer/"
      }
    },
    "correctAnswer": "D"
  },
  {
    "id": "q-317",
    "number": 317,
    "title": "Monitoring and Observability - Visualizer Editor permission for defined views",
    "domain": "Monitoring and analyzing application networks",
    "topics": [
      "Anypoint Visualizer",
      "Views",
      "Rbac Permissions"
    ],
    "prompt": "A platform architect wants to create a saved, auto-discoverable view in Anypoint Visualizer so that all team members with access to the included environments see the same filtered topology. Which permission is required to create this defined view?",
    "options": [
      {
        "letter": "A",
        "text": "Visualizer Editor, which is required to create and save defined views"
      },
      {
        "letter": "B",
        "text": "Organization Administrator, which grants full control of the organization"
      },
      {
        "letter": "C",
        "text": "API Manager Policy Editor, which allows changes to API policies"
      },
      {
        "letter": "D",
        "text": "Runtime Manager CloudHub Network Viewer, which allows viewing of network settings"
      }
    ],
    "explanation": "Correct answer: A. The Visualizer Editor permission is required to create and save defined views. Organization Administrator (B) is broader than necessary, API Manager Policy Editor (C) governs policies, and CloudHub Network Viewer (D) governs network settings.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Visualizer Editor is the permission required to create and save defined views."
      },
      "B": {
        "type": "Incorrect",
        "text": "Organization Administrator is broader than the required permission."
      },
      "C": {
        "type": "Incorrect",
        "text": "API Manager Policy Editor governs policies, not Visualizer views."
      },
      "D": {
        "type": "Incorrect",
        "text": "CloudHub Network Viewer governs network settings, not Visualizer views."
      }
    },
    "references": {
      "primary": {
        "title": "Defining a View in API Visualizer — Create a Defined View",
        "url": "https://docs.mulesoft.com/visualizer/view"
      },
      "secondary": {
        "title": "Troubleshooting API Visualizer — Permissions",
        "url": "https://docs.mulesoft.com/visualizer/troubleshoot-visualizer"
      }
    },
    "correctAnswer": "A"
  },
  {
    "id": "q-318",
    "number": 318,
    "title": "Deployment Options - Refer to the exhibit.",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Deployment Options"
    ],
    "prompt": "Refer to the exhibit.\nA customer runs Mule applications on Runtime Fabric for self-managed Kubernetes in a multi-cloud environment. Based on the configuration, how do the Agents and Runtime Manager communicate, and what is exchanged between them?",
    "image": "images/q229.svg",
    "options": [
      {
        "letter": "A",
        "text": "The Agents communicate with Runtime Manager to report cluster status and to download images, and Mule applications are updated automatically whenever new images are available"
      },
      {
        "letter": "B",
        "text": "The Agents communicate with Runtime Manager to report cluster status and to download images, and Mule applications are updated only when the customer chooses to do so"
      },
      {
        "letter": "C",
        "text": "Runtime Manager initiates traffic to the Agents to check cluster status, and it deploys new images automatically whenever updates are available"
      },
      {
        "letter": "D",
        "text": "Runtime Manager communicates with the Agents to report cluster status and to update Mule applications whenever the customer chooses to do so"
      }
    ],
    "explanation": "Correct answer: B. On Runtime Fabric the Agents initiate communication with Runtime Manager to report cluster status and to pull images, and application updates are applied only when the customer chooses. Automatic updates (A, C) are not the behavior, and the direction of the status reporting is reversed in D.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Applications are not updated automatically; the customer chooses when to apply updates."
      },
      "B": {
        "type": "Correct",
        "text": "The Agents report status and pull images, and the customer chooses when to update applications."
      },
      "C": {
        "type": "Incorrect",
        "text": "The Agents, not Runtime Manager, initiate the communication, and updates are not automatic."
      },
      "D": {
        "type": "Incorrect",
        "text": "The direction of the status reporting is reversed."
      }
    },
    "references": {
      "primary": {
        "title": "Runtime Fabric Security Architecture — Management Flow: \"Runtime Fabric agent initiates and control the tunnel.\"",
        "url": "https://docs.mulesoft.com/runtime-fabric/latest/security-architecture#management-flow"
      },
      "secondary": {
        "title": "Runtime Fabric Overview — Runtime Fabric Core Services: \"The Runtime Fabric agent is deployed as a pod in the cluster and communicates with the control plane via an mTLS outbound connection established at startup.\"",
        "url": "https://docs.mulesoft.com/runtime-fabric/latest/#runtime-fabric-core-services"
      }
    },
    "correctAnswer": "B"
  },
  {
    "id": "q-319",
    "number": 319,
    "title": "Performance - Refer to the exhibit.",
    "domain": "Meeting API quality goals",
    "topics": [
      "Performance"
    ],
    "prompt": "Refer to the exhibit.\nA manufacturing company is developing a new set of APIs for its retail business. One of the APIs is a Master Look Up API, which is a System API. The API uses a persistent object-store. This API will be used by almost all other APIs to provide master lookup data. The Master Look Up API is deployed on two CloudHub workers of 0.1 vCore each because there is a lot of master data to be cached. Most of the master lookup data is stored as a key-value pair. The cache gets refreshed if the key is not found in the cache. During performance testing, it was determined that the Master Look Up API has a high response time due to the latency of database queries executed to fetch the master lookup data. What two methods can be used to resolve these performance issues? (Choose two.)",
    "image": "images/q238.svg",
    "options": [
      {
        "letter": "A",
        "text": "Add an additional CloudHub worker of 0.1 vCore to provide additional capacity"
      },
      {
        "letter": "B",
        "text": "Implement locking to synchronize access to the Object Store"
      },
      {
        "letter": "C",
        "text": "Implement the HTTP caching policy for all GET endpoints for the Master Look Up API"
      },
      {
        "letter": "D",
        "text": "Front the API with a Dedicated Load Balancer to reduce the database query latency."
      },
      {
        "letter": "E",
        "text": "Upgrade the vCore size from 0.1 vCore to 0.2 vCore"
      }
    ],
    "explanation": "Correct answers: C and E. The Master Look Up API is slow because each cache miss triggers a database query to refresh the cache, and the latency of those queries dominates the response time. Two independent levers address this. First, the HTTP Caching policy (C) caches HTTP responses for reuse: according to MuleSoft, \"Caching these responses speeds up the response time for user requests and reduces the load on the backend,\" and on a cache hit \"the stored response is returned\" without calling the backend, so repeated master-data lookups are served from the cache and the database is not queried at all. Second, the API is deployed on 0.1 vCore CloudHub workers, which \"provide limited CPU and I/O for apps with smaller workloads\" and \"can burst to higher CPU speeds for a short time\" rather than delivering consistent performance. Upgrading each worker to 0.2 vCore (E) raises worker memory from 1 GB to 2 GB and heap memory from 500 MB to 1 GB, giving the API more resources to serve the cached lookups. Option A (adding another 0.1 vCore worker) does not help: although CloudHub's HTTP load balancing service distributes requests across workers on a round-robin basis, each request is still served by a single 0.1 vCore worker with the same limited CPU and I/O, so extra workers add capacity rather than reduce the per-request latency caused by the database queries. Option B (locking) is wrong because Object Stores \"do not support transactional access or modification,\" and locking to synchronize access to the Object Store would serialize the cache and tend to increase, not decrease, response time.",
    "rationales": {
      "C": {
        "type": "Correct",
        "text": "The HTTP Caching policy caches HTTP responses for reuse, which \"speeds up the response time for user requests and reduces the load on the backend.\" On a cache hit the stored response is returned without reaching the backend, so the database queries responsible for the latency are avoided for repeated lookups."
      },
      "A": {
        "type": "Incorrect",
        "text": "Adding another 0.1 vCore worker scales the application horizontally — CloudHub's HTTP load balancing service distributes requests across workers on a round-robin basis — but each request is still served by a single 0.1 vCore worker with the same limited CPU and I/O. More workers add capacity, not lower per-request latency, so the database-query delay remains."
      },
      "B": {
        "type": "Incorrect",
        "text": "Object Stores do not support transactional access or modification, and locking to synchronize access to the Object Store serializes cache access. It does not reduce the database-query latency that causes the slow responses and can make contention worse."
      },
      "E": {
        "type": "Correct",
        "text": "0.1 vCore workers provide limited CPU and I/O and can only burst to higher CPU speeds for short periods. Upgrading to 0.2 vCore doubles worker memory from 1 GB to 2 GB and heap memory from 500 MB to 1 GB, giving the API more resources to serve the cached lookups."
      },
      "D": {
        "type": "Incorrect",
        "text": "A load balancer distributes traffic; it does not reduce the latency of the database queries that dominate the response time."
      }
    },
    "references": {
      "primary": {
        "title": "HTTP Caching Policy — Summary (speeds up response time and reduces backend load)",
        "url": "https://docs.mulesoft.com/gateway/latest/policies-included-http-caching#summary"
      },
      "secondary": {
        "title": "CloudHub Architecture — CloudHub Workers (vCore, memory, and heap sizes)",
        "url": "https://docs.mulesoft.com/cloudhub/cloudhub-architecture#cloudhub-workers"
      }
    },
    "correctAnswers": [
      "C",
      "E"
    ]
  },
  {
    "id": "q-320",
    "number": 320,
    "title": "Api Policies - Refer to the exhibit. Choosing the better gateway deployment",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Flex Gateway",
      "Mule Gateway",
      "API Management"
    ],
    "prompt": "Refer to the exhibit.\nAn architect is comparing two ways to govern the same set of APIs: (A) embed governance in the Mule runtime with Mule Gateway, or (B) front the APIs with a dedicated Flex Gateway instance. Based on the exhibit and MuleSoft guidance, which alternative is the better choice for an organization that must protect both Mule and non-Mule APIs in Kubernetes and on-premises, with high availability and high performance?",
    "image": "images/q269.svg",
    "options": [
      {
        "letter": "A",
        "text": "Alternative A, because embedding governance in the Mule runtime is the recommended choice for high-performance non-Mule APIs running anywhere"
      },
      {
        "letter": "B",
        "text": "Alternative A, because non-Mule APIs must be rewritten as Mule applications before policies can be applied"
      },
      {
        "letter": "C",
        "text": "Neither, because API governance rulesets are the only way to protect non-Mule APIs"
      },
      {
        "letter": "D",
        "text": "Alternative B, because Flex Gateway is an Envoy-based gateway that MuleSoft recommends for high-availability and high-performance Mule and non-Mule applications"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Mule Gateway is embedded in the Mule runtime and is recommended for Mule applications on CloudHub that do not require managing the underlying infrastructure. Flex Gateway is an Envoy-based gateway recommended for high-availability and high-performance Mule and non-Mule APIs running anywhere, so it is the better fit here. Non-Mule APIs do not have to be rewritten (B), and API Governance rulesets check conformance rather than enforce runtime policies (C).",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Mule Gateway is embedded in the Mule runtime and does not match the high-availability/high-performance requirement across Kubernetes and on-premises."
      },
      "D": {
        "type": "Correct",
        "text": "Flex Gateway is the recommended Envoy-based gateway for high-availability, high-performance Mule and non-Mule APIs anywhere."
      },
      "B": {
        "type": "Incorrect",
        "text": "Non-Mule APIs do not need to be rewritten; Flex Gateway protects them directly."
      },
      "C": {
        "type": "Incorrect",
        "text": "API Governance rulesets check conformance, not runtime policy enforcement."
      }
    },
    "references": {
      "primary": {
        "title": "Anypoint Platform Gateways Overview — Gateway Selection Guidance",
        "url": "https://docs.mulesoft.com/gateway-home"
      },
      "secondary": {
        "title": "Omni Gateway (formerly Flex Gateway) Overview",
        "url": "https://docs.mulesoft.com/gateway/latest"
      }
    }
  },
  {
    "id": "q-321",
    "number": 321,
    "title": "Api Policies - Refer to the exhibit. OAuth 2.0 token validation with an external provider",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
      "Oauth2 Policy",
      "API Security",
      "Jwt Validation"
    ],
    "prompt": "Refer to the exhibit.\nAn organization's API portal registers client applications dynamically with an external OpenID Connect identity provider. Based on the exhibit, which policy should be applied to the API gateway so that only requests presenting a valid OAuth 2.0 access token issued to a registered client application are accepted?",
    "image": "images/q270.svg",
    "options": [
      {
        "letter": "A",
        "text": "The OpenID Connect OAuth 2.0 Token Enforcement policy"
      },
      {
        "letter": "B",
        "text": "The OAuth 2.0 Access Token Enforcement Using Mule OAuth Provider policy"
      },
      {
        "letter": "C",
        "text": "The IP Allowlist policy"
      },
      {
        "letter": "D",
        "text": "The JSON Threat Protection policy"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Because tokens are issued by an external OpenID Connect identity provider, the OpenID Connect OAuth 2.0 Token Enforcement policy validates them at the gateway. The Mule OAuth Provider variant (B) is for tokens issued by Anypoint Platform itself, IP Allowlist (C) restricts source addresses, and JSON Threat Protection (D) inspects payload structure.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The OpenID Connect variant validates tokens issued by the external provider."
      },
      "B": {
        "type": "Incorrect",
        "text": "The Mule OAuth Provider variant is for tokens issued by Anypoint Platform, not an external provider."
      },
      "C": {
        "type": "Incorrect",
        "text": "IP Allowlist restricts source addresses, not tokens."
      },
      "D": {
        "type": "Incorrect",
        "text": "JSON Threat Protection inspects payload structure, not tokens."
      }
    },
    "references": {
      "primary": {
        "title": "OpenID Connect OAuth 2.0 Token Enforcement Policy",
        "url": "https://docs.mulesoft.com/mule-gateway/policies-included-openid-token-enforcement"
      },
      "secondary": {
        "title": "Configuring OpenID Connect Client Management in Anypoint Platform",
        "url": "https://docs.mulesoft.com/access-management/configure-client-management-openid-task"
      }
    }
  },
  {
    "id": "q-322",
    "number": 322,
    "title": "Api Policies - Refer to the exhibit. CloudHub 2.0 private space ingress with TLS",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "CloudHub 2.0",
      "Private Spaces",
      "SSL/TLS",
      "DNS"
    ],
    "prompt": "Refer to the exhibit.\nA company deploys an API to a CloudHub 2.0 private space and wants external clients to reach it at the custom domain api.company.com over HTTPS. Based on the exhibit, which alternative correctly describes how this is achieved?",
    "image": "images/q271.svg",
    "options": [
      {
        "letter": "A",
        "text": "Create a Dedicated Load Balancer in the private space and upload the company certificate to it"
      },
      {
        "letter": "B",
        "text": "Create a TLS context for the certificate, set api.company.com as an external endpoint in the app's Ingress settings, and point a DNS CNAME at the private space's public DNS target"
      },
      {
        "letter": "C",
        "text": "CloudHub propagates the application's TLS context to the private space's shared ingress, so no DNS change is needed"
      },
      {
        "letter": "D",
        "text": "Deploy the API to a shared space, because private spaces do not support custom domains"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. CloudHub 2.0 uses TLS contexts to encrypt inbound traffic and enable custom domains; you create a TLS context with the company certificate, set the domain as an external endpoint in the app's Ingress settings, and point a DNS CNAME at the private space's public DNS target. A private space uses a managed ingress rather than a customer-created DLB (A), the default cloudhub.io TLS context cannot be removed (C), and custom domains are supported only on private spaces, not shared spaces (D).",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A private space uses a managed ingress load balancer, not a customer-created DLB."
      },
      "B": {
        "type": "Correct",
        "text": "A TLS context plus an external endpoint plus a DNS CNAME maps the custom domain to the app over HTTPS."
      },
      "C": {
        "type": "Incorrect",
        "text": "An app-level TLS context does not configure the space's shared ingress; the DNS CNAME to the space's public DNS target is still required."
      },
      "D": {
        "type": "Incorrect",
        "text": "Custom domains are supported only on private spaces, not shared spaces."
      }
    },
    "references": {
      "primary": {
        "title": "Configuring Domains and Certificates (TLS Context) for a Private Space",
        "url": "https://docs.mulesoft.com/cloudhub-2/ps-config-domains"
      },
      "secondary": {
        "title": "CloudHub 2.0 Networking Architecture — Custom Certificates and CNAME",
        "url": "https://docs.mulesoft.com/cloudhub-2/ch2-networking-guide"
      }
    }
  },
  {
    "id": "q-323",
    "number": 323,
    "title": "API Governance - Enforcing mTLS with a custom policy",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
          "Mutual TLS",
          "Custom Policy"
    ],
    "prompt": "A partner API must be called only by partners whose TLS client certificates are issued by the company’s internal certificate authority. The security team requires mutual TLS: the gateway must validate each client’s certificate against the internal CA before the request reaches the implementation. The validation logic must run inside the gateway for every request. How should the architect meet this requirement?",
    "options": [
          {
                "letter": "A",
                "text": "Use the built-in IP Allowlist policy, because client certificates are always tied to a fixed set of IP addresses"
          },
          {
                "letter": "B",
                "text": "Write a custom policy that validates the client certificate from the TLS handshake against the internal CA, and apply it in API Manager"
          },
          {
                "letter": "C",
                "text": "Ask each partner to also send the certificate in an HTTP header and validate it in the implementation"
          },
          {
                "letter": "D",
                "text": "Rely on the platform’s HTTPS termination alone, because a server-side certificate proves the client’s identity"
          }
    ],
    "correctAnswers": ["B"],
    "explanation": "Correct answer: B. Mutual TLS requires the gateway to validate each client’s certificate during the TLS handshake. Anypoint Platform’s built-in policies do not include certificate-chain validation against a custom CA, so a custom policy is needed. IP addresses (A) do not identify a client certificate, moving validation into the implementation (C) defeats the gateway’s purpose, and server-side TLS (D) authenticates the server, not the client.",
    "rationales": {
          "B": {
                "type": "Correct",
                "text": "Certificate validation against a custom CA in every request is custom-policy territory; API Manager applies it without changing the implementation."
          },
          "A": {
                "type": "Incorrect",
                "text": "IP allowlisting is not certificate validation and does not prove the caller holds a CA-issued certificate."
          },
          "C": {
                "type": "Incorrect",
                "text": "A header can be forged and bypassed; the validated handshake certificate cannot."
          },
          "D": {
                "type": "Incorrect",
                "text": "One-way TLS authenticates the server to the client; it says nothing about the client."
          }
    },
    "references": {
          "primary": {
                "title": "API Manager — Custom Policies",
                "url": "https://docs.mulesoft.com/api-manager/2.x/custom-policies"
          },
          "secondary": {
                "title": "MuleSoft — What Is Mutual TLS?",
                "url": "https://www.mulesoft.com/resources/api/what-is-mutual-tls"
          }
    }
  },
  {
    "id": "q-324",
    "number": 324,
    "title": "API Governance - Choosing policies that do not require mTLS alternatives",
    "domain": "Governing web APIs on Anypoint Platform",
    "topics": [
          "Mutual TLS",
          "Client ID Enforcement",
          "JWT Validation"
    ],
    "prompt": "An architect is securing an Experience API consumed by both mobile apps and partner systems. The team evaluates three enforcement mechanisms: Client ID Enforcement, JWT Validation, and mutual TLS. The mobile channel cannot install client certificates because its app store distribution forbids it. Which conclusion is most correct?",
    "options": [
          {
                "letter": "A",
                "text": "Mutual TLS must be dropped entirely, because a single API cannot combine transport-level and message-level authentication"
          },
          {
                "letter": "B",
                "text": "The mobile channel can be authenticated with Client ID Enforcement or JWT validation, while mTLS remains available for partner systems that support certificates"
          },
          {
                "letter": "C",
                "text": "Client ID Enforcement and mutual TLS are interchangeable; either one fully replaces the other"
          },
          {
                "letter": "D",
                "text": "JWT validation requires a client certificate, so it cannot be used on this API"
          }
    ],
    "correctAnswers": ["B"],
    "explanation": "Correct answer: B. Enforcement mechanisms can be combined and are not mutually exclusive. Mobile apps commonly authenticate with client credentials or JWTs, while machine-to-machine partner integrations can use mTLS for stronger caller authentication. Exposing mTLS for partners alongside credentials for mobile (B) is the supported approach; dropping mTLS entirely (A) is unnecessary, the mechanisms are not equivalent (C), and JWT validation works over standard HTTPS without client certificates (D).",
    "rationales": {
          "B": {
                "type": "Correct",
                "text": "Policies are composable per consumer profile: credentials or tokens for the mobile channel, certificates where the partner can present them."
          },
          "A": {
                "type": "Incorrect",
                "text": "Policies are composable; transport-level and message-level authentication can coexist on one API."
          },
          "C": {
                "type": "Incorrect",
                "text": "mTLS authenticates the transport-level caller; client IDs and JWTs authenticate the application and user claims at the message level."
          },
          "D": {
                "type": "Incorrect",
                "text": "JWT validation verifies a signed token presented by the client; no client certificate is involved."
          }
    },
    "references": {
          "primary": {
                "title": "API Manager — Supported Policies",
                "url": "https://docs.mulesoft.com/api-manager/2.x/policies-list"
          },
          "secondary": {
                "title": "MuleSoft — API Security Best Practices",
                "url": "https://www.mulesoft.com/resources/api/api-security"
          }
    }
  },
  {
    "id": "q-325",
    "number": 325,
    "title": "CloudHub Deployment - Dedicated versus shared load balancer",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
          "Dedicated Load Balancer",
          "Shared Load Balancer"
    ],
    "prompt": "A company runs a public Orders API on CloudHub 1.0. The security team requires that the API be exposed only through the company’s own domain name with a custom TLS certificate, and that a security group restrict which source addresses may reach the Mule applications. Which load balancer configuration meets these requirements?",
    "options": [
          {
                "letter": "A",
                "text": "The shared CloudHub load balancer, with the custom domain configured as a CNAME on the shared load balancer’s DNS name"
          },
          {
                "letter": "B",
                "text": "A dedicated load balancer inside an Anypoint VPC, with the custom certificate uploaded and a security group limiting source addresses"
          },
          {
                "letter": "C",
                "text": "A dedicated load balancer outside an Anypoint VPC, because dedicated load balancers do not require a VPC"
          },
          {
                "letter": "D",
                "text": "No load balancer at all: point the custom domain directly at the application’s worker IP addresses"
          }
    ],
    "correctAnswers": ["B"],
    "explanation": "Correct answer: B. Custom domains with custom TLS certificates and security groups that filter source traffic require a dedicated load balancer, which in turn must be created inside an Anypoint VPC. The shared load balancer uses cloudhub.io domains with platform certificates (A), a DLB cannot exist outside a VPC (C), and worker IPs are not stable addresses for DNS (D).",
    "rationales": {
          "B": {
                "type": "Correct",
                "text": "A DLB in a VPC supports custom certificates, custom domains, and security group rules."
          },
          "A": {
                "type": "Incorrect",
                "text": "The shared load balancer does not accept custom certificates or per-customer security groups."
          },
          "C": {
                "type": "Incorrect",
                "text": "Dedicated load balancers are VPC resources; no VPC means no DLB."
          },
          "D": {
                "type": "Incorrect",
                "text": "Worker IPs can change and bypass the load balancing and TLS termination the API needs."
          }
    },
    "references": {
          "primary": {
                "title": "Dedicated Load Balancers on CloudHub",
                "url": "https://docs.mulesoft.com/runtime-cloud/dlb-overview"
          },
          "secondary": {
                "title": "Anypoint VPC Overview",
                "url": "https://docs.mulesoft.com/runtime-cloud/vpc-overview"
          }
    }
  },
  {
    "id": "q-326",
    "number": 326,
    "title": "CloudHub Deployment - DLB routing to multiple applications",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
          "Dedicated Load Balancer",
          "Ingress",
          "URL Mapping"
    ],
    "prompt": "A company wants a single external domain, api.company.com, to serve three Mule applications deployed to CloudHub: /orders/{app name}/orders should reach the Orders API, /customers should reach the Customer API, and /inventory should reach the Inventory API, all over the company’s TLS certificate. Which feature of the dedicated load balancer makes this possible?",
    "options": [
          {
                "letter": "A",
                "text": "The DLB’s default behavior, which automatically routes each path segment to the application with the matching name"
          },
          {
                "letter": "B",
                "text": "Ingress URL mapping rules configured on the DLB, which forward each path pattern to the named application"
          },
          {
                "letter": "C",
                "text": "API Manager SLA tiers, which route each client application to the right backend"
          },
          {
                "letter": "D",
                "text": "One DLB per application, each owning api.company.com at a different time of day"
          }
    ],
    "correctAnswers": ["B"],
    "explanation": "Correct answer: B. A dedicated load balancer supports ingress (URL) mapping rules: one DLB with one custom domain and certificate can route path patterns to different Mule applications by their internal DNS name. The mapping is explicit (A is wrong), SLA tiers govern quotas and approval rather than routing (C), and multiple DLBs cannot share one external domain simultaneously (D).",
    "rationales": {
          "B": {
                "type": "Correct",
                "text": "Ingress mapping is the DLB feature for multiplexing several apps behind one custom domain."
          },
          "A": {
                "type": "Incorrect",
                "text": "Routing is never automatic; each rule maps a path pattern to an explicit target."
          },
          "C": {
                "type": "Incorrect",
                "text": "SLA tiers control consumption limits and approval, not HTTP routing."
          },
          "D": {
                "type": "Incorrect",
                "text": "A domain resolves to one DLB; time-sharing DNS is not a real pattern."
          }
    },
    "references": {
          "primary": {
                "title": "Dedicated Load Balancer — Ingress Configuration",
                "url": "https://docs.mulesoft.com/runtime-cloud/dlb-overview"
          },
          "secondary": {
                "title": "CloudHub — Custom Domains and Certificates",
                "url": "https://docs.mulesoft.com/runtime-cloud/shared-dlb-custom-domains"
          }
    }
  },
  {
    "id": "q-327",
    "number": 327,
    "title": "Case Study - FleetTrack architecture (part 1 of 3)",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
          "CloudHub Workers",
          "Dedicated Load Balancer",
          "Anypoint VPC"
    ],
    "prompt": "CASE STUDY (part 1 of 3) — FleetTrack, a logistics company, is deploying a new Orders API to CloudHub 1.0. The API must reach an on-premises SAP system, be exposed only at api.fleettrack.com with the company’s TLS certificate, and survive the loss of any single data center. The deployment will use an Anypoint VPC with a dedicated load balancer. For the application itself, which CloudHub configuration contributes most directly to surviving a data-center loss?",
    "options": [
          {
                "letter": "A",
                "text": "One large worker (for example, 4.0 vCore), because a single powerful worker processes faster"
          },
          {
                "letter": "B",
                "text": "Two or more workers, because CloudHub spreads the workers of an application across data centers"
          },
          {
                "letter": "C",
                "text": "Two applications deployed with identical code, one per data center, kept in sync manually"
          },
          {
                "letter": "D",
                "text": "A fractional worker with automatic restarts enabled, which guarantees faster recovery"
          }
    ],
    "correctAnswers": ["B"],
    "explanation": "Correct answer: B. CloudHub distributes an application’s workers across data centers (or availability zones, depending on deployment), so a multi-worker application keeps serving traffic if one data center fails. A single large worker is still a single point of failure (A), duplicate manually-synced applications are an anti-pattern (C), and fractional workers offer no data-center redundancy (D).",
    "rationales": {
          "B": {
                "type": "Correct",
                "text": "Multiple workers give data-center-level redundancy; the platform handles placement."
          },
          "A": {
                "type": "Incorrect",
                "text": "One worker, however large, fails entirely with its data center."
          },
          "C": {
                "type": "Incorrect",
                "text": "Manual dual deployment is error-prone and not the platform’s supported model."
          },
          "D": {
                "type": "Incorrect",
                "text": "Fractional size and restarts affect capacity, not data-center placement."
          }
    },
    "references": {
          "primary": {
                "title": "CloudHub — Application Reliability",
                "url": "https://docs.mulesoft.com/runtime-cloud/shared-cloudhub-reliability"
          },
          "secondary": {
                "title": "CloudHub — Worker Sizing",
                "url": "https://docs.mulesoft.com/runtime-cloud/shared-worker-sizing"
          }
    }
  },
  {
    "id": "q-328",
    "number": 328,
    "title": "Case Study - FleetTrack architecture (part 2 of 3)",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
          "Dedicated Load Balancer",
          "TLS",
          "VPC Peering"
    ],
    "prompt": "CASE STUDY (part 2 of 3) — FleetTrack’s Orders API is deployed with two workers inside an Anypoint VPC. The API must be exposed only at api.fleettrack.com with FleetTrack’s own TLS certificate, and nothing but the load balancer may accept public traffic. Which configuration meets these requirements?",
    "options": [
          {
                "letter": "A",
                "text": "Use the shared CloudHub load balancer with a CNAME from api.fleettrack.com, keeping the default certificate"
          },
          {
                "letter": "B",
                "text": "Create a dedicated load balancer in the Anypoint VPC, upload the company certificate, point a DNS CNAME at the DLB, and keep the application’s HTTP port private"
          },
          {
                "letter": "C",
                "text": "Register api.fleettrack.com directly against each worker’s public IP with the certificate embedded in the application"
          },
          {
                "letter": "D",
                "text": "VPC-peer the Anypoint VPC with the corporate network so partners resolve api.fleettrack.com privately"
          }
    ],
    "correctAnswers": ["B"],
    "explanation": "Correct answer: B. Custom domain plus custom certificate plus restricted public entry is exactly the dedicated load balancer’s role inside an Anypoint VPC: it terminates TLS with the uploaded certificate and forwards to the application over the private network. The shared load balancer cannot use custom certificates (A), worker IPs are unstable and bypass TLS termination (C), and VPC peering is for private connectivity, not partner-facing DNS (D).",
    "rationales": {
          "B": {
                "type": "Correct",
                "text": "DLB in a VPC with an uploaded certificate is the platform’s supported custom-domain pattern."
          },
          "A": {
                "type": "Incorrect",
                "text": "The shared load balancer serves platform certificates on cloudhub.io domains only."
          },
          "C": {
                "type": "Incorrect",
                "text": "DNS to worker IPs bypasses the LB and breaks with worker changes."
          },
          "D": {
                "type": "Incorrect",
                "text": "Peering connects networks; it does not publish a public HTTPS domain."
          }
    },
    "references": {
          "primary": {
                "title": "Dedicated Load Balancers",
                "url": "https://docs.mulesoft.com/runtime-cloud/dlb-overview"
          },
          "secondary": {
                "title": "Anypoint VPC — Connectivity",
                "url": "https://docs.mulesoft.com/runtime-cloud/vpc-peering"
          }
    }
  },
  {
    "id": "q-329",
    "number": 329,
    "title": "Case Study - FleetTrack architecture (part 3 of 3)",
    "domain": "Meeting API quality goals",
    "topics": [
          "Functional Testing",
          "MUnit",
          "CI/CD"
    ],
    "prompt": "CASE STUDY (part 3 of 3) — Before any FleetTrack Orders API release goes to production, the team must prove that the SAP-calling flows behave correctly and that a regression in the order-enrichment logic is caught automatically. SAP is not reachable from the CI environment. Which approach meets both needs?",
    "options": [
          {
                "letter": "A",
                "text": "MUnit tests with the SAP connector mocked, run automatically in the CI pipeline on every commit"
          },
          {
                "letter": "B",
                "text": "Manual smoke tests against production after each release, because SAP is unreachable from CI"
          },
          {
                "letter": "C",
                "text": "An Anypoint Monitoring alert on 5xx responses, which catches regressions before users do"
          },
          {
                "letter": "D",
                "text": "Load tests in Staging after release, which exercise the same code paths as unit tests"
          }
    ],
    "correctAnswers": ["A"],
    "explanation": "Correct answer: A. MUnit lets the team mock the SAP connector so the flow logic can be tested in CI without connectivity, and running it on every commit makes regression detection automatic. Manual production smoke tests (B) are late and risky, alerts (C) report failures rather than prevent them, and load tests (D) measure performance, not correctness.",
    "rationales": {
          "A": {
                "type": "Correct",
                "text": "Mocked connectors plus MUnit in CI give deterministic, automated functional verification per commit."
          },
          "B": {
                "type": "Incorrect",
                "text": "Testing after release in production finds regressions with users already affected."
          },
          "C": {
                "type": "Incorrect",
                "text": "Alerts are detection of incidents, not verification of logic."
          },
          "D": {
                "type": "Incorrect",
                "text": "Load testing answers capacity questions, not functional correctness."
          }
    },
    "references": {
          "primary": {
                "title": "MUnit — Testing Mule Applications",
                "url": "https://docs.mulesoft.com/munit/2.3/"
          },
          "secondary": {
                "title": "MUnit — Mock Processors",
                "url": "https://docs.mulesoft.com/munit/2.3/mock-event-processors"
          }
    }
  }
]