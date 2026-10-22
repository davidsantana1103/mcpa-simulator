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
        "text": "The RAML is the API implementation, the Mule app is the API proxy, and the mobile app is the API interface"
      },
      {
        "letter": "B",
        "text": "All three together form the API proxy, which API Manager deploys as a single unit"
      },
      {
        "letter": "C",
        "text": "The Mule app is the API interface, the RAML is the API client, and the mobile app is the API implementation"
      },
      {
        "letter": "D",
        "text": "The RAML is the API interface, the Mule app is the API implementation, and the mobile app is the API client"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. MuleSoft distinguishes the API interface (the contract, typically a RAML or OAS specification), the API implementation (the application, such as a Mule application, that fulfills the contract), and the API client (the application that invokes the API). Keeping these separate lets the implementation change without affecting clients as long as the interface is preserved.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A RAML definition contains no executable logic, and a consuming app is not the interface it calls."
      },
      "B": {
        "type": "Incorrect",
        "text": "An API proxy is a separate gateway application that enforces policies; it is not the combination of these elements."
      },
      "C": {
        "type": "Incorrect",
        "text": "These roles are reversed; the Mule app executes the logic and the mobile app consumes it."
      },
      "D": {
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
        "text": "Protect the Node.js API with an API gateway, such as a proxy or Flex Gateway, managed in API Manager"
      },
      {
        "letter": "B",
        "text": "Rewrite the Node.js API as a Mule application before it can be managed by Anypoint Platform"
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
    "correctAnswer": "A",
    "explanation": "Correct answer: A. API Manager applies policies through an API gateway. For APIs that are not implemented as Mule applications, or that cannot be changed, a gateway such as a Mule API proxy or Anypoint Flex Gateway is placed in front of the implementation. The gateway enforces policies like client ID enforcement and rate limiting while the backend API remains untouched.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "A gateway in front of the implementation enforces API Manager policies without requiring changes to the implementation code."
      },
      "B": {
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
        "text": "Create a WSDL for the API because REST APIs cannot have formal contracts"
      },
      {
        "letter": "B",
        "text": "Define the API in RAML or OAS in Design Center, mock it, and publish the specification to Exchange"
      },
      {
        "letter": "C",
        "text": "Build the Mule application first and generate the contract from its flows once it is complete"
      },
      {
        "letter": "D",
        "text": "Document the API in a wiki page and ask consumers to wait for the first deployment to try it"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. In API-led connectivity, the API interface is typically defined as a RAML or OAS specification. Design Center lets teams author the specification and use the mocking service so consumers can try it before implementation, and Exchange lets them publish and discover it. This supports a design-first approach in which the contract is agreed before implementation begins.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "REST APIs can be formally described with RAML or OAS; WSDL is for SOAP services."
      },
      "B": {
        "type": "Correct",
        "text": "A machine-readable specification captures the contract, can be mocked for early feedback, and can be shared through Exchange."
      },
      "C": {
        "type": "Incorrect",
        "text": "Implementation-first design delays consumer feedback and makes the contract a by-product of the code."
      },
      "D": {
        "type": "Incorrect",
        "text": "A wiki is not a machine-readable contract and does not allow consumers to try the API before it is built."
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
        "text": "Anypoint Visualizer as the engine that executes API transformations"
      },
      {
        "letter": "B",
        "text": "Mule applications deployed to Mule runtime engine as API implementations"
      },
      {
        "letter": "C",
        "text": "Anypoint Exchange as the runtime that routes requests between APIs"
      },
      {
        "letter": "D",
        "text": "Design Center as the production host for Experience APIs"
      },
      {
        "letter": "E",
        "text": "API gateways whose policies are configured centrally in API Manager"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Correct answers: B and E. API-led connectivity is implemented on Anypoint Platform by building API implementations, typically as Mule applications running on Mule runtime engine, and by managing those APIs with API Manager, which applies policies through API gateways. Exchange, Design Center, and Visualizer support discovery, design, and observability but are not runtime components that serve API traffic.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Visualizer displays the application network graph; transformations are done by DataWeave in Mule applications."
      },
      "B": {
        "type": "Correct",
        "text": "Mule runtime engine hosts the applications that implement System, Process, and Experience APIs."
      },
      "C": {
        "type": "Incorrect",
        "text": "Exchange is a catalog for discovering and reusing assets; it does not route API traffic."
      },
      "D": {
        "type": "Incorrect",
        "text": "Design Center is for designing specifications and building applications, not for hosting production traffic."
      },
      "E": {
        "type": "Correct",
        "text": "API Manager and gateways apply security and quality-of-service policies to APIs in every layer."
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
        "text": "Anypoint MQ queues in front of each microservice to apply security policies"
      },
      {
        "letter": "B",
        "text": "Exchange asset pages for each microservice with policy settings in their descriptions"
      },
      {
        "letter": "C",
        "text": "A single Mule application that reimplements every microservice's logic"
      },
      {
        "letter": "D",
        "text": "Anypoint Flex Gateway deployed in the Kubernetes environment and managed through API Manager"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Anypoint Flex Gateway is a lightweight API gateway that can run in environments such as Docker and Kubernetes. It is managed through API Manager, so consistent policies and analytics can be applied to APIs regardless of their implementation language, without changing the services themselves.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Anypoint MQ is a messaging service and does not enforce API security policies on HTTP traffic."
      },
      "B": {
        "type": "Incorrect",
        "text": "Exchange documents assets; it does not apply or enforce policies at runtime."
      },
      "C": {
        "type": "Incorrect",
        "text": "Rewriting the microservices is unnecessary and contradicts the requirement."
      },
      "D": {
        "type": "Correct",
        "text": "Flex Gateway is a lightweight gateway that can run in containers and enforce API Manager policies for any backend."
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
        "text": "Resources identified by URIs and manipulated with standard HTTP methods in stateless requests"
      },
      {
        "letter": "B",
        "text": "A single endpoint that receives every operation name in the request body"
      },
      {
        "letter": "C",
        "text": "Server-side sessions that store the client's state between calls"
      },
      {
        "letter": "D",
        "text": "Mandatory XML payloads described by a WSDL document"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. RESTful web APIs model functionality as resources identified by URIs, use the standard HTTP methods such as GET, POST, PUT, and DELETE as a uniform interface, and treat every request as stateless and self-contained. These characteristics make web APIs easy to consume and scale.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "REST APIs expose resources at URIs and use a uniform interface of HTTP methods, with each request self-contained."
      },
      "B": {
        "type": "Incorrect",
        "text": "A single operation-dispatching endpoint is an RPC style, not a resource-oriented REST design."
      },
      "C": {
        "type": "Incorrect",
        "text": "REST requests are stateless; the server does not keep client session state between requests."
      },
      "D": {
        "type": "Incorrect",
        "text": "REST does not mandate XML or WSDL; JSON is common and contracts are typically RAML or OAS."
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
        "text": "The API interface is a contract that hides the implementation, so it can change if the contract is kept"
      },
      {
        "letter": "D",
        "text": "Consumers connect to the database directly, so the API layer is not involved in the change"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. A web API defines a contract between consumers and the provider. Consumers rely on the interface, including resources, methods, and data types, and not on how it is implemented. As long as the implementation continues to honor the contract, backends can be replaced or refactored without changing the consumers.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "No API technology converts schemas automatically; the implementation must keep honoring the contract."
      },
      "B": {
        "type": "Incorrect",
        "text": "Coordinated redeployment of every consumer is what an API contract is meant to avoid."
      },
      "C": {
        "type": "Correct",
        "text": "Consumers depend only on the published interface, so implementation details can change behind it."
      },
      "D": {
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
        "text": "The API uses a long-lived TCP connection that stays open between the client and one instance"
      },
      {
        "letter": "B",
        "text": "The API stores each client's state in the memory of whichever instance first served it"
      },
      {
        "letter": "C",
        "text": "Requests are stateless, so no client session data has to be stored on a specific instance"
      },
      {
        "letter": "D",
        "text": "Each client is pinned to one instance with server-side sessions for the duration of its use"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Statelessness is a core characteristic of RESTful web APIs: each request carries all the information needed to process it. Because no client state is kept on a particular server, any instance can handle any request, so capacity can be increased simply by adding instances behind a load balancer.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Long-lived connections tie clients to specific instances, complicating scaling."
      },
      "B": {
        "type": "Incorrect",
        "text": "In-memory per-client state is lost or unavailable when another instance handles the next request."
      },
      "C": {
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
    "prompt": "A consumer sends a request to an Order API with a JSON body that is missing required fields. The API team wants consumers to be able to handle this situation consistently using standard web API semantics. How should the API respond?",
    "options": [
      {
        "letter": "A",
        "text": "Return 500 Internal Server Error because the order could not be processed"
      },
      {
        "letter": "B",
        "text": "Return a 400 Bad Request status with an error body describing the missing fields"
      },
      {
        "letter": "C",
        "text": "Return 200 OK with an error flag in the response body"
      },
      {
        "letter": "D",
        "text": "Close the connection without a response so the client retries later"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Web APIs use standard HTTP semantics, including status codes, to communicate outcomes. Client errors such as invalid input use 4xx codes like 400 Bad Request, while 5xx codes are reserved for server-side failures. Consistent use of these semantics lets any client handle errors predictably.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A 5xx status indicates a server-side failure, which misleads clients about who must fix the problem."
      },
      "B": {
        "type": "Correct",
        "text": "A 4xx status tells the client the problem is with its request, and the body explains how to fix it."
      },
      "C": {
        "type": "Incorrect",
        "text": "Hiding errors behind a success status forces every client to parse bodies to detect failures."
      },
      "D": {
        "type": "Incorrect",
        "text": "Dropping the connection gives the client no information and can cause unnecessary retries."
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
    "prompt": "Which statement best describes the role that web APIs play in an application network?",
    "options": [
      {
        "letter": "A",
        "text": "They expose the capabilities of applications, data, and devices as discoverable, reusable, and governed building blocks"
      },
      {
        "letter": "B",
        "text": "They are internal implementation details that should not be visible outside the team that built them"
      },
      {
        "letter": "C",
        "text": "They replace backend systems by storing copies of the data that those systems manage"
      },
      {
        "letter": "D",
        "text": "They are temporary point-to-point connections created for a single project and then retired"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. An application network connects applications, data, and devices through APIs that expose some or all of their assets on the network. Other parts of the business can then discover, reuse, and compose those APIs in a governed way, so each new API adds value to the whole network.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "APIs are the abstraction through which assets are exposed on the network for others to discover and reuse."
      },
      "B": {
        "type": "Incorrect",
        "text": "APIs are meant to be published and discovered so other teams can self-serve them."
      },
      "C": {
        "type": "Incorrect",
        "text": "APIs provide access to systems of record; they are not themselves data stores replacing those systems."
      },
      "D": {
        "type": "Incorrect",
        "text": "An application network is built from reusable assets, the opposite of single-use point-to-point links."
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
        "text": "System tier"
      },
      {
        "letter": "B",
        "text": "Experience tier"
      },
      {
        "letter": "C",
        "text": "Process tier"
      },
      {
        "letter": "D",
        "text": "Both System and Process tiers, because it reads activity data"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Experience APIs are owned by the developers of a channel or app, focus on adapting data to that consumer's needs, and change at the pace of the user experience. A device-specific API reusing an existing Process API is a typical Experience API.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "It does not unlock a system of record; it reuses a Process API instead."
      },
      "B": {
        "type": "Correct",
        "text": "It is owned by a channel team, tailored to one device, and changes with each app release."
      },
      "C": {
        "type": "Incorrect",
        "text": "It adds no reusable business logic; it shapes existing data for one channel."
      },
      "D": {
        "type": "Incorrect",
        "text": "Reading data through a Process API does not make an API part of the lower tiers."
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
        "text": "Integration tier"
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
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Process APIs implement business processes by orchestrating and combining data from multiple System APIs. They are typically owned by the business unit that owns the process and are reused by several channels. They change when the business process changes rather than when a UI changes.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "It is not tailored to one channel; three different channels reuse it."
      },
      "B": {
        "type": "Incorrect",
        "text": "API-led connectivity does not define an integration tier; the tiers are System, Process, and Experience."
      },
      "C": {
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
    "prompt": "Which two characteristics typically apply to System APIs in API-led connectivity? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "They are often owned by central IT or the team that runs the underlying system"
      },
      {
        "letter": "B",
        "text": "They must always be exposed publicly to external partners"
      },
      {
        "letter": "C",
        "text": "They implement cross-system business processes such as order fulfillment"
      },
      {
        "letter": "D",
        "text": "They are tailored to the data format required by a single mobile or web channel"
      },
      {
        "letter": "E",
        "text": "Their contracts change relatively slowly compared with APIs in the other tiers"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Correct answers: A and E. System APIs unlock systems of record and hide their complexity. They are usually owned by central IT or the system's team, focus on a single system, and change slowly. Business processes are implemented in Process APIs and channel-specific needs in Experience APIs.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Teams with knowledge of the system of record are best placed to build and evolve its System APIs."
      },
      "B": {
        "type": "Incorrect",
        "text": "System APIs are usually internal; external consumers are typically served through Experience APIs."
      },
      "C": {
        "type": "Incorrect",
        "text": "Cross-system orchestration is the responsibility of Process APIs."
      },
      "D": {
        "type": "Incorrect",
        "text": "Channel-specific shaping belongs in Experience APIs."
      },
      "E": {
        "type": "Correct",
        "text": "System APIs front long-lived systems of record and are expected to be the most stable tier."
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
        "text": "Runtime Manager"
      },
      {
        "letter": "B",
        "text": "Anypoint Monitoring"
      },
      {
        "letter": "C",
        "text": "Anypoint Exchange"
      },
      {
        "letter": "D",
        "text": "Access Management"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Anypoint Exchange is the platform's marketplace and catalog of reusable assets such as API specifications, fragments, connectors, and templates. Publishing assets to Exchange, and to public or private API portals, lets developers discover and reuse what already exists instead of building duplicates.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Runtime Manager deploys and manages applications; it is not a catalog for discovering reusable assets."
      },
      "B": {
        "type": "Incorrect",
        "text": "Monitoring provides metrics, dashboards, and alerts for running applications and APIs."
      },
      "C": {
        "type": "Correct",
        "text": "Exchange is the catalog where APIs, fragments, and other assets are published, discovered, and reused."
      },
      "D": {
        "type": "Incorrect",
        "text": "Access Management controls users, roles, and business groups, not asset discovery."
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
        "text": "Anypoint Visualizer"
      },
      {
        "letter": "B",
        "text": "Design Center"
      },
      {
        "letter": "C",
        "text": "Anypoint Exchange"
      },
      {
        "letter": "D",
        "text": "API Manager"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. API Manager is the Anypoint Platform component for managing APIs. It is where administrators apply policies such as rate limiting, approve or revoke client application contracts and SLA tiers, and review analytics for API usage.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Visualizer shows a graph of the application network and its dependencies, not policies or contracts."
      },
      "B": {
        "type": "Incorrect",
        "text": "Design Center is used to design API specifications and build applications, not to manage them at runtime."
      },
      "C": {
        "type": "Incorrect",
        "text": "Exchange lets consumers discover APIs and request access, but policies are managed in API Manager."
      },
      "D": {
        "type": "Correct",
        "text": "API Manager applies policies, manages client application contracts and SLA tiers, and shows API analytics."
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
        "text": "Mule runtime engine hosting the deployed API implementations"
      },
      {
        "letter": "B",
        "text": "Design Center, where specifications are authored"
      },
      {
        "letter": "C",
        "text": "API Manager, where policies are configured"
      },
      {
        "letter": "D",
        "text": "Anypoint Exchange, where assets are published"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Anypoint Platform separates the control plane, which provides design, management, and governance capabilities such as Design Center, Exchange, API Manager, and Runtime Manager, from the runtime plane, where Mule runtimes and gateways actually run applications and process data. The runtime plane can be MuleSoft-hosted or customer-hosted.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The runtime plane is where applications run and process data, such as Mule runtimes on CloudHub or customer servers."
      },
      "B": {
        "type": "Incorrect",
        "text": "Design Center is a design capability in the control plane."
      },
      "C": {
        "type": "Incorrect",
        "text": "API Manager is a management capability in the control plane."
      },
      "D": {
        "type": "Incorrect",
        "text": "Exchange is part of the control plane used for discovery and reuse."
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
        "text": "Anypoint Exchange"
      },
      {
        "letter": "B",
        "text": "Anypoint Visualizer"
      },
      {
        "letter": "C",
        "text": "API Designer"
      },
      {
        "letter": "D",
        "text": "Runtime Manager"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Anypoint Visualizer provides a real-time, graphical view of the application network that shows how applications and APIs interact. Nodes can be organized into layers such as Experience, Process, and System, which helps architects assess dependencies and the impact of changes.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Exchange lists assets and their dependencies on other assets, but not runtime call relationships."
      },
      "B": {
        "type": "Correct",
        "text": "Visualizer shows a real-time graph of the application network, including dependencies and layers."
      },
      "C": {
        "type": "Incorrect",
        "text": "API Designer is used to author API specifications, not to observe runtime traffic."
      },
      "D": {
        "type": "Incorrect",
        "text": "Runtime Manager deploys and manages individual applications and does not draw the dependency graph."
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
        "text": "Exchange, Runtime Manager, API Manager"
      },
      {
        "letter": "B",
        "text": "Design Center, API Manager, Runtime Manager"
      },
      {
        "letter": "C",
        "text": "Runtime Manager, Anypoint Monitoring, Access Management"
      },
      {
        "letter": "D",
        "text": "API Manager, Anypoint Visualizer, Exchange"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Runtime Manager deploys, scales, and manages applications; Anypoint Monitoring provides dashboards, metrics, and alerts; and Access Management handles users, roles, teams, and business groups. Knowing the responsibility of each high-level component is essential when designing operations on Anypoint Platform.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Exchange does not deploy applications, and API Manager does not manage user access to business groups."
      },
      "B": {
        "type": "Incorrect",
        "text": "Design Center is for design, and neither API Manager nor Runtime Manager manages users and business groups."
      },
      "C": {
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
    "prompt": "A company's central integration team has a 9-month backlog of requests from the lines of business. Leadership agrees to set up a Center for Enablement (C4E). Which mandate best reflects how a C4E should operate?",
    "options": [
      {
        "letter": "A",
        "text": "Approve every API design before any team may start implementation, regardless of its scope"
      },
      {
        "letter": "B",
        "text": "Focus solely on selecting and procuring integration tools, leaving delivery practices to each team"
      },
      {
        "letter": "C",
        "text": "Take over all integration delivery from the LoB teams so that every API is built by the same experts"
      },
      {
        "letter": "D",
        "text": "Enable LoB teams to deliver their own projects by providing reusable assets, standards, and guidance"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. A Center for Enablement is a cross-functional team that productizes, publishes, and harvests reusable assets and best practices so that lines of business and other teams can deliver projects themselves. Unlike a traditional center of excellence that centralizes delivery, a C4E focuses on enablement and self-service, which is how it helps close the IT delivery gap.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Heavy approval gates slow teams down; a C4E relies on enablement and lightweight governance."
      },
      "B": {
        "type": "Incorrect",
        "text": "A C4E covers assets, best practices, and enablement, not just tooling decisions."
      },
      "C": {
        "type": "Incorrect",
        "text": "Centralizing all delivery recreates the backlog that caused the problem in the first place."
      },
      "D": {
        "type": "Correct",
        "text": "A C4E shifts central IT from delivering every project to enabling others to self-serve."
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
        "text": "The number of consumers reusing each API published in Exchange"
      },
      {
        "letter": "C",
        "text": "The total lines of code written by the C4E team members each month"
      },
      {
        "letter": "D",
        "text": "The number of servers provisioned for the integration platform"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. C4E success is measured by outcomes such as reuse and adoption, not by the C4E's own output. Metrics like the number of consumers per API, Exchange asset consumption, and how many teams are delivering with platform assets show whether the application network is growing through self-service and reuse.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Time spent in meetings is an activity measure, not an outcome measure."
      },
      "B": {
        "type": "Correct",
        "text": "Reuse of published assets directly measures whether the application network is delivering value."
      },
      "C": {
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
        "text": "The number of lines of business actively delivering projects on Anypoint Platform"
      },
      {
        "letter": "B",
        "text": "The number of Mule runtime versions installed across environments"
      },
      {
        "letter": "C",
        "text": "The percentage of projects delivered exclusively by the C4E team"
      },
      {
        "letter": "D",
        "text": "The number of support tickets closed personally by C4E members"
      },
      {
        "letter": "E",
        "text": "The reuse rate of APIs and assets published in Anypoint Exchange"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Correct answers: A and E. Typical C4E KPIs measure adoption and reuse: how many lines of business use the platform, how many assets are published and consumed in Exchange, how many consumers each API has, and how project delivery speed improves. Metrics that measure work done by the C4E itself do not reflect its enabling role.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Broad LoB adoption shows the C4E is enabling teams beyond central IT."
      },
      "B": {
        "type": "Incorrect",
        "text": "Version counts are an operational detail, not a measure of C4E success."
      },
      "C": {
        "type": "Incorrect",
        "text": "A rising share of C4E-delivered projects indicates centralization, not enablement."
      },
      "D": {
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
        "text": "Hire an external team to build every API so that the C4E only has to approve deliverables"
      },
      {
        "letter": "B",
        "text": "Spend a year defining standards for every possible use case before any project begins"
      },
      {
        "letter": "C",
        "text": "Start small alongside the first projects, harvest reusable assets, and grow"
      },
      {
        "letter": "D",
        "text": "Wait until at least fifty APIs exist and then form a C4E to clean them up"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. A C4E is typically established incrementally. It starts with a small cross-functional team tied to initial projects, harvests reusable assets and practices from those projects, publishes them in Exchange, and expands as more lines of business come on board. This approach demonstrates value quickly and builds momentum.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Outsourcing all delivery does not build the internal capability that a C4E is meant to create."
      },
      "B": {
        "type": "Incorrect",
        "text": "Long upfront standardization delays value and produces standards untested by real projects."
      },
      "C": {
        "type": "Correct",
        "text": "Starting small and harvesting assets from real projects lets the C4E show value early and scale with demand."
      },
      "D": {
        "type": "Incorrect",
        "text": "Forming the C4E late means early APIs are built without shared practices or reuse in mind."
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
        "text": "Ask every project team to fill in a monthly spreadsheet with the counts"
      },
      {
        "letter": "B",
        "text": "Pull the metrics from the Exchange, API Manager, and Runtime Manager APIs"
      },
      {
        "letter": "C",
        "text": "Count the number of API specifications stored in the source code repository"
      },
      {
        "letter": "D",
        "text": "Parse the Mule application logs from every runtime to infer the counts"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Anypoint Platform exposes data about assets, managed APIs, client applications, and deployments through its platform APIs. MuleSoft has published approaches such as the Metrics Accelerator that use these APIs to compute platform metrics and feed dashboards, letting a C4E track KPIs automatically and consistently.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Manual reporting is slow, inconsistent, and exactly what the C4E wants to avoid."
      },
      "B": {
        "type": "Correct",
        "text": "Anypoint Platform exposes this information through APIs, so it can be gathered automatically into a dashboard."
      },
      "C": {
        "type": "Incorrect",
        "text": "Repository contents do not show managed APIs, contracts, or deployments."
      },
      "D": {
        "type": "Incorrect",
        "text": "Logs record runtime events, not the inventory of assets, APIs, and contracts."
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
        "text": "An ICC focuses on APIs, while a C4E focuses only on batch and file integrations"
      },
      {
        "letter": "D",
        "text": "An ICC delivers centrally; a C4E enables distributed teams to deliver and reuse"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Traditional ICCs or centers of excellence concentrate integration delivery in one central team, which often becomes a bottleneck. A C4E is a cross-functional team that enables lines of business to deliver themselves, by producing reusable assets, best practices, and lightweight governance and by measuring success through adoption and reuse.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A C4E is cross-functional and includes business and IT roles."
      },
      "B": {
        "type": "Incorrect",
        "text": "A C4E still defines standards and lightweight governance to keep the network consistent."
      },
      "C": {
        "type": "Incorrect",
        "text": "The difference is the operating model, not the integration style."
      },
      "D": {
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
        "text": "Business outcomes, technology delivery, and organizational enablement"
      },
      {
        "letter": "B",
        "text": "Around four phases: requirements, design, build, and production support"
      },
      {
        "letter": "C",
        "text": "Around two tracks: platform installation and developer certification"
      },
      {
        "letter": "D",
        "text": "Around the three API-led layers: System, Process, and Experience"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. MuleSoft Catalyst is an outcome-based delivery methodology structured around three pillars: business outcomes (defining outcomes with clear KPIs and aligning stakeholders), technology delivery (getting Anypoint Platform running and building APIs and integrations), and organizational enablement (making sure the organization is ready to use and adopt the platform).",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Catalyst aligns technology initiatives to business objectives using these three pillars."
      },
      "B": {
        "type": "Incorrect",
        "text": "These are generic project phases, not the structure of the Catalyst methodology."
      },
      "C": {
        "type": "Incorrect",
        "text": "Catalyst covers far more, including business outcomes and organizational enablement."
      },
      "D": {
        "type": "Incorrect",
        "text": "These are API-led connectivity layers, not Catalyst pillars."
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
        "text": "API Manager policy templates"
      },
      {
        "letter": "B",
        "text": "Anypoint Monitoring dashboards"
      },
      {
        "letter": "C",
        "text": "Runtime Manager application settings"
      },
      {
        "letter": "D",
        "text": "MuleSoft Catalyst Knowledge Hub"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. MuleSoft Catalyst brings together a methodology, assets, and services. Its best practices, from playbooks to blueprints, are found in the Catalyst Knowledge Hub, while technical assets such as connectors, templates, and API fragments are available in Anypoint Exchange.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Policy templates configure runtime policies; they are not organizational best practices."
      },
      "B": {
        "type": "Incorrect",
        "text": "Monitoring shows runtime metrics; it does not contain delivery playbooks."
      },
      "C": {
        "type": "Incorrect",
        "text": "Runtime Manager deploys and manages applications, not methodology content."
      },
      "D": {
        "type": "Correct",
        "text": "Catalyst best practices, including playbooks and blueprints, are published in the Catalyst Knowledge Hub."
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
        "text": "Enroll all developers in certification training"
      },
      {
        "letter": "B",
        "text": "Install Mule runtimes in every environment so teams can start building"
      },
      {
        "letter": "C",
        "text": "Define business outcomes with KPIs and align stakeholders"
      },
      {
        "letter": "D",
        "text": "Publish every existing integration to Exchange as an asset"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. In MuleSoft Catalyst, the business outcomes pillar comes first: the organization identifies the outcomes it wants, defines KPIs to measure them, and aligns stakeholders. Technology delivery and organizational enablement are then organized to achieve those outcomes.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Training is part of organizational enablement but does not define what success looks like."
      },
      "B": {
        "type": "Incorrect",
        "text": "Platform setup is technology delivery and does not resolve the lack of agreed goals."
      },
      "C": {
        "type": "Correct",
        "text": "The business outcomes pillar starts by defining outcomes with clear KPIs and aligning stakeholders."
      },
      "D": {
        "type": "Incorrect",
        "text": "Publishing assets supports reuse but does not tie the program to business goals."
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
        "text": "An automated code generator that builds all APIs from business requirements"
      },
      {
        "letter": "B",
        "text": "An outcome-driven methodology, assets, and services that speed up ROI"
      },
      {
        "letter": "C",
        "text": "A separate runtime engine that runs Mule applications faster than Mule runtime"
      },
      {
        "letter": "D",
        "text": "A licensing model that removes the need to size vCores or flows"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. MuleSoft Catalyst brings together an outcomes-driven methodology, customer-validated assets, and services from MuleSoft and partners to help organizations maximize ROI and drive transformation. Its value lies in aligning technology initiatives with business objectives and enabling the organization, not in providing additional runtime technology.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Catalyst provides guidance and assets but does not automatically generate implementations."
      },
      "B": {
        "type": "Correct",
        "text": "Catalyst combines methodology, reusable assets, and services to align delivery with business outcomes."
      },
      "C": {
        "type": "Incorrect",
        "text": "Catalyst is a methodology and services approach, not a runtime engine."
      },
      "D": {
        "type": "Incorrect",
        "text": "Catalyst does not change licensing or capacity planning."
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
        "text": "Establishing a C4E, training, and internal support"
      },
      {
        "letter": "B",
        "text": "Configuring CloudHub 2.0 private spaces for production"
      },
      {
        "letter": "C",
        "text": "Implementing the first System API for the ERP"
      },
      {
        "letter": "D",
        "text": "Defining revenue targets for a new digital channel"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Organizational enablement focuses on making sure the organization can adopt and sustain the platform. In Catalyst this includes establishing a Center for Enablement, training and certification paths, and internal support models, complementing the business outcomes and technology delivery pillars.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "These activities prepare the organization to use and adopt Anypoint Platform."
      },
      "B": {
        "type": "Incorrect",
        "text": "Platform setup belongs to the technology delivery pillar."
      },
      "C": {
        "type": "Incorrect",
        "text": "Building APIs and integrations is part of technology delivery."
      },
      "D": {
        "type": "Incorrect",
        "text": "Defining measurable outcomes belongs to the business outcomes pillar."
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
        "text": "Discover, contract, consume, and retire"
      },
      {
        "letter": "B",
        "text": "Design, implement, test, and deploy"
      },
      {
        "letter": "C",
        "text": "Plan, establish foundation, scale, measure"
      },
      {
        "letter": "D",
        "text": "Assess, migrate, decommission, and archive"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. MuleSoft Catalyst codifies its paths, such as business outcomes, Anypoint Platform, projects, C4E, internal support, and training, into playbooks. Each playbook follows the same approach: plan for success, establish the foundation, build to scale, and measure impact.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "These describe API consumption and lifecycle steps, not Catalyst playbooks."
      },
      "B": {
        "type": "Incorrect",
        "text": "These are software delivery stages for a single API, not the playbook approach."
      },
      "C": {
        "type": "Correct",
        "text": "Each Catalyst playbook follows this consistent progression."
      },
      "D": {
        "type": "Incorrect",
        "text": "These describe a migration project, not the Catalyst playbook structure."
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
        "text": "US control plane with hybrid standalone Mule runtimes"
      },
      {
        "letter": "D",
        "text": "Private Cloud Edition with customer-hosted runtimes"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Anypoint Platform Private Cloud Edition is a self-hosted control plane deployed in the customer's own data center or cloud account, giving full control over where assets and metadata are stored. Combined with customer-hosted runtimes, it provides full data sovereignty, although some Anypoint Platform components are not supported in PCE.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A private space is still MuleSoft-managed infrastructure in a MuleSoft-managed control plane."
      },
      "B": {
        "type": "Incorrect",
        "text": "The EU control plane is MuleSoft-managed, so metadata and identities are stored outside the contractor's infrastructure."
      },
      "C": {
        "type": "Incorrect",
        "text": "Hybrid keeps runtime processing local, but the control plane data is hosted by MuleSoft."
      },
      "D": {
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
        "text": "Use the MuleSoft-managed EU control plane with runtimes in EU regions"
      },
      {
        "letter": "B",
        "text": "Use MuleSoft Government Cloud because it has stricter compliance controls"
      },
      {
        "letter": "C",
        "text": "Use the US control plane and encrypt all API specifications in Exchange"
      },
      {
        "letter": "D",
        "text": "Use the US control plane and deploy CloudHub applications to the Frankfurt region"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. MuleSoft offers regional control planes, such as the EU Cloud, in which the organization's design-time data and metadata are stored in that region. The runtime region is a separate choice: deploying applications to an EU region from the US control plane does not move control plane data to the EU.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The EU control plane stores organization metadata in the EU and supports EU runtime regions."
      },
      "B": {
        "type": "Incorrect",
        "text": "Government Cloud is a FedRAMP environment for US government agencies and is hosted in the US."
      },
      "C": {
        "type": "Incorrect",
        "text": "Encryption does not change where control plane data is stored."
      },
      "D": {
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
        "text": "Anypoint Platform Private Cloud Edition"
      },
      {
        "letter": "B",
        "text": "MuleSoft Government Cloud"
      },
      {
        "letter": "C",
        "text": "US commercial control plane with CloudHub 2.0"
      },
      {
        "letter": "D",
        "text": "EU control plane with Runtime Fabric"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. MuleSoft Government Cloud is a FedRAMP-authorized control plane managed by MuleSoft and intended for US government agencies. Other control planes, such as the US or EU commercial clouds, are not the FedRAMP offering, and PCE is self-managed.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "PCE is self-hosted by the customer, which contradicts the requirement for a MuleSoft-managed cloud."
      },
      "B": {
        "type": "Correct",
        "text": "Government Cloud is a FedRAMP-authorized, MuleSoft-managed environment for US government agencies."
      },
      "C": {
        "type": "Incorrect",
        "text": "The commercial control plane operates under standard commercial terms rather than as the FedRAMP-authorized offering."
      },
      "D": {
        "type": "Incorrect",
        "text": "The EU control plane addresses EU data residency, not US federal compliance."
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
        "text": "CloudHub 2.0 shared space"
      },
      {
        "letter": "B",
        "text": "Hybrid standalone Mule runtimes on EC2 instances"
      },
      {
        "letter": "C",
        "text": "On-premises runtimes without a control plane connection"
      },
      {
        "letter": "D",
        "text": "Anypoint Runtime Fabric"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Anypoint Runtime Fabric is a container service for running Mule applications and API gateways in a customer's data center or third-party cloud. The customer manages the infrastructure, and MuleSoft provides orchestration and centralized management, including high availability and failover.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "CloudHub 2.0 runs on MuleSoft-managed infrastructure, not on the company's own clusters."
      },
      "B": {
        "type": "Incorrect",
        "text": "Standalone runtimes require the company to manage individual servers, which it wants to avoid."
      },
      "C": {
        "type": "Incorrect",
        "text": "Disconnected runtimes lose centralized management from Anypoint Platform."
      },
      "D": {
        "type": "Correct",
        "text": "Runtime Fabric runs Mule applications and gateways in containers on the customer's infrastructure, managed from Anypoint Platform."
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
        "text": "MuleSoft-hosted control plane with CloudHub 2.0"
      },
      {
        "letter": "B",
        "text": "MuleSoft-hosted control plane with Runtime Fabric on self-managed Kubernetes"
      },
      {
        "letter": "C",
        "text": "MuleSoft-hosted control plane with hybrid runtimes on virtual machines"
      },
      {
        "letter": "D",
        "text": "Anypoint Platform PCE with hybrid runtimes"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. CloudHub 2.0 is a fully managed, containerized iPaaS for running APIs and integrations, with features such as high availability and scaling. With the MuleSoft-hosted control plane, it minimizes operational responsibility, which suits small teams without data residency or on-premises requirements.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Both planes are managed by MuleSoft, so the team operates no infrastructure."
      },
      "B": {
        "type": "Incorrect",
        "text": "Runtime Fabric requires the team to operate the underlying infrastructure."
      },
      "C": {
        "type": "Incorrect",
        "text": "Hybrid runtimes put server management, patching, and clustering on the team."
      },
      "D": {
        "type": "Incorrect",
        "text": "PCE and hybrid runtimes require the team to run both planes themselves."
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
        "text": "An OAuth 2.0 access token enforcement policy on every API"
      },
      {
        "letter": "B",
        "text": "Client management with Okta as an OAuth 2.0 client provider"
      },
      {
        "letter": "C",
        "text": "Identity management with Okta as an external IdP"
      },
      {
        "letter": "D",
        "text": "A connected app in Access Management for each developer"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Identity management in Anypoint Platform configures an external identity provider, using SAML 2.0 or OpenID Connect, so that users sign in to the platform with their corporate credentials. Group information from the identity provider can be mapped to teams and permissions.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "API policies secure APIs at runtime; they do not control sign-in to Anypoint Platform."
      },
      "B": {
        "type": "Incorrect",
        "text": "Client management authorizes API client applications, not users signing in to the platform."
      },
      "C": {
        "type": "Correct",
        "text": "Identity management controls how users authenticate to Anypoint Platform itself."
      },
      "D": {
        "type": "Incorrect",
        "text": "Connected apps grant applications programmatic access to the platform, not SSO for users."
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
        "text": "A connected app that issues tokens to each API consumer"
      },
      {
        "letter": "B",
        "text": "Identity management with PingFederate as a SAML identity provider"
      },
      {
        "letter": "C",
        "text": "Client management with PingFederate as a client provider and an OAuth policy"
      },
      {
        "letter": "D",
        "text": "Client ID enforcement only, because it validates OAuth tokens automatically"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Client management lets an organization configure external OAuth 2.0 client providers, such as PingFederate, OpenAM, or OpenID Connect Dynamic Client Registration-compliant providers. Client applications are then registered with that provider, and OAuth 2.0 policies on the APIs validate the tokens it issues.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Connected apps provide access to Anypoint Platform APIs, not to the organization's own APIs."
      },
      "B": {
        "type": "Incorrect",
        "text": "Identity management controls user sign-in to the platform, not authorization of API clients."
      },
      "C": {
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
    "prompt": "Which statement correctly distinguishes identity management from client management in Anypoint Platform?",
    "options": [
      {
        "letter": "A",
        "text": "Identity management applies only to CloudHub, while client management applies only to hybrid runtimes"
      },
      {
        "letter": "B",
        "text": "Identity management secures APIs at runtime; client management controls who can sign in to Exchange"
      },
      {
        "letter": "C",
        "text": "Both serve the same purpose, but identity management is used only in production environments"
      },
      {
        "letter": "D",
        "text": "Identity management is for platform users; client management is for API clients"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Anypoint Platform separates two concerns. Identity management configures an external identity provider for users who sign in to the platform. Client management configures external OAuth 2.0 providers that issue credentials and tokens to the client applications that consume the organization's APIs.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Neither feature depends on the runtime deployment model."
      },
      "B": {
        "type": "Incorrect",
        "text": "These responsibilities are reversed and misstated."
      },
      "C": {
        "type": "Incorrect",
        "text": "They have different purposes and are not tied to specific environments in this way."
      },
      "D": {
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
        "text": "An OpenID Connect client provider in Client Management"
      },
      {
        "letter": "B",
        "text": "Manual registration of each client application in the provider by the platform team"
      },
      {
        "letter": "C",
        "text": "A custom policy that inserts client IDs into the provider's database"
      },
      {
        "letter": "D",
        "text": "SAML identity management, so that every consumer is created as a platform user"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Anypoint Platform supports client providers that comply with OpenID Connect Dynamic Client Registration. When such a provider is configured in Client Management and associated with environments, client applications created through Exchange are registered with the provider automatically, and API policies validate its tokens.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "OpenID Connect client management uses Dynamic Client Registration to create clients in the provider."
      },
      "B": {
        "type": "Incorrect",
        "text": "Manual registration is what Dynamic Client Registration is meant to eliminate."
      },
      "C": {
        "type": "Incorrect",
        "text": "Custom database writes are unsupported and unnecessary when DCR is available."
      },
      "D": {
        "type": "Incorrect",
        "text": "SAML identity management is for user sign-in, not for registering API client applications."
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
        "text": "Identity management can map external identity provider groups to Anypoint Platform teams"
      },
      {
        "letter": "C",
        "text": "Client management is required before any user can sign in to Anypoint Platform"
      },
      {
        "letter": "D",
        "text": "Only one identity provider and one client provider can exist across the entire platform"
      },
      {
        "letter": "E",
        "text": "Multiple client providers can be configured and associated with different environments"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Correct answers: B and E. Identity management connects Anypoint Platform to an external identity provider for user authentication and can map provider groups to teams. Client management can include multiple external client providers associated with different environments, which issue credentials and tokens to API client applications.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Tokens for API clients come from client providers configured in client management."
      },
      "B": {
        "type": "Correct",
        "text": "Group mappings from the identity provider control users' platform permissions."
      },
      "C": {
        "type": "Incorrect",
        "text": "User sign-in is handled by identity management or Anypoint's own accounts."
      },
      "D": {
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
        "text": "The consumer must sign in with SAML SSO, and its session cookie is used as the credential"
      },
      {
        "letter": "B",
        "text": "Anypoint Platform generates a client ID and secret for the client app"
      },
      {
        "letter": "C",
        "text": "The API owner emails a shared password that all consumers use"
      },
      {
        "letter": "D",
        "text": "The consumer cannot obtain credentials until an external OAuth provider is configured"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. By default, Anypoint Platform acts as the client provider: when a consumer creates a client application and requests access to an API, the platform generates a client ID and secret. Policies such as client ID enforcement then validate those credentials. External client providers are needed only when tokens must come from an organization's OAuth server.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Platform user sessions are not used as API client credentials."
      },
      "B": {
        "type": "Correct",
        "text": "Without an external provider, Anypoint Platform itself acts as the client provider for client applications."
      },
      "C": {
        "type": "Incorrect",
        "text": "Shared passwords prevent identifying and controlling individual clients."
      },
      "D": {
        "type": "Incorrect",
        "text": "An external provider is optional; Anypoint Platform can issue client credentials itself."
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
        "text": "Database credentials for every system the applications connect to"
      },
      {
        "letter": "B",
        "text": "All message payloads processed by the Mule applications"
      },
      {
        "letter": "C",
        "text": "Nothing, because hybrid runtimes have no connection to the control plane"
      },
      {
        "letter": "D",
        "text": "Management metadata such as app status and metrics"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. In a hybrid deployment, the runtime plane runs in the customer's infrastructure while the control plane is hosted by MuleSoft. The Runtime Manager agent sends management information, such as application status, and monitoring data to the control plane, while message payloads are processed locally in the customer's runtimes.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Connection secrets remain in the applications' configuration in the customer's environment."
      },
      "B": {
        "type": "Incorrect",
        "text": "Payloads are processed in the customer's runtimes and are not sent to the control plane by default."
      },
      "C": {
        "type": "Incorrect",
        "text": "Hybrid runtimes are registered with and managed from the control plane."
      },
      "D": {
        "type": "Correct",
        "text": "Hybrid runtimes communicate with the control plane for management and monitoring while payloads stay local."
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
        "text": "Forward logs to the SIEM with a custom Log4j appender and disable CloudHub logs"
      },
      {
        "letter": "B",
        "text": "Apply a message logging policy in API Manager that writes to the SIEM"
      },
      {
        "letter": "C",
        "text": "Set the application log level to ERROR so that CloudHub stores fewer log entries"
      },
      {
        "letter": "D",
        "text": "Use the EU control plane so that CloudHub logs are stored in the SIEM"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. By default, CloudHub stores application logs in MuleSoft-managed storage. To meet requirements that logs live only in the customer's own systems, applications can use a custom Log4j appender to send logs to an external system, and CloudHub logging can be disabled for the application.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "CloudHub supports forwarding logs to an external system and disabling CloudHub logging."
      },
      "B": {
        "type": "Incorrect",
        "text": "A policy would not stop the application's own logs from being stored in CloudHub."
      },
      "C": {
        "type": "Incorrect",
        "text": "Fewer logs are still stored in MuleSoft-managed storage."
      },
      "D": {
        "type": "Incorrect",
        "text": "The control plane region determines where platform data is stored, not whether logs go to a SIEM."
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
        "text": "Metadata in the EU control plane and payloads on premises"
      },
      {
        "letter": "C",
        "text": "All in the customer's own infrastructure"
      },
      {
        "letter": "D",
        "text": "Payloads in MuleSoft-managed storage and metadata on premises"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Anypoint Platform PCE is a self-hosted control plane, so assets such as API specifications and metadata are stored in the customer's data center or cloud account. With customer-hosted runtimes, payloads are also processed locally, providing full data sovereignty.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "With PCE, the control plane and its assets are not stored in the US cloud."
      },
      "B": {
        "type": "Incorrect",
        "text": "PCE does not use any MuleSoft-managed control plane."
      },
      "C": {
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
        "text": "API specifications and other assets published to Exchange"
      },
      {
        "letter": "C",
        "text": "The contents of the customer's backend databases"
      },
      {
        "letter": "D",
        "text": "The Kubernetes nodes running the Runtime Fabric workloads"
      },
      {
        "letter": "E",
        "text": "API Manager configuration, such as policies and client application contracts"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Correct answers: B and E. The control plane stores the organization's design-time data and management metadata, including Exchange assets and API Manager configuration. When the runtime plane is customer-hosted, such as with Runtime Fabric, the applications process payloads in the customer's infrastructure.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Payloads are processed by the runtimes in the customer's data center."
      },
      "B": {
        "type": "Correct",
        "text": "Exchange assets are design-time data stored in the control plane."
      },
      "C": {
        "type": "Incorrect",
        "text": "Backend data remains in the customer's systems; the platform does not store it."
      },
      "D": {
        "type": "Incorrect",
        "text": "The nodes are customer infrastructure in the runtime plane."
      },
      "E": {
        "type": "Correct",
        "text": "API management configuration is part of the control plane."
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
        "text": "Only Exchange documentation changes; runtime behavior stays the same"
      },
      {
        "letter": "B",
        "text": "Only the implementation changes; the specification is unaffected"
      },
      {
        "letter": "C",
        "text": "No client is affected because clients ignore fields they do not need"
      },
      {
        "letter": "D",
        "text": "Spec and implementation change; clients using the field may break"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. The specification defines the contract that both the implementation and clients depend on. Removing a response field changes the specification and the implementation, and it can break clients that rely on that field, which is why it is a breaking change requiring a new major version.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Removing a field changes runtime responses as well as documentation."
      },
      "B": {
        "type": "Incorrect",
        "text": "The response structure is part of the specification, so it changes too."
      },
      "C": {
        "type": "Incorrect",
        "text": "Clients that read the removed field will break."
      },
      "D": {
        "type": "Correct",
        "text": "Clients depend on the contract, so a removed field can break those that use it."
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
    "prompt": "Which two statements correctly describe dependencies between an API, its specification, its implementation, and its clients? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "The API specification is generated from the clients' code"
      },
      {
        "letter": "B",
        "text": "API clients depend on the API specification rather than the implementation"
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
      "B",
      "E"
    ],
    "explanation": "Correct answers: B and E. In API-led development, the specification is the contract. Clients depend on it, the implementation fulfills it, and API Manager manages API instances associated with Exchange asset versions of that specification.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The specification is designed independently and clients are written against it."
      },
      "B": {
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
        "text": "Publish them as an API fragment in Exchange"
      },
      {
        "letter": "B",
        "text": "Copy the best version of the types into each specification manually"
      },
      {
        "letter": "C",
        "text": "Define the types in a shared Java library used by all implementations"
      },
      {
        "letter": "D",
        "text": "Put the types in each API's Exchange description as plain text"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. API fragments, such as RAML data types, traits, and security schemes, can be created in Design Center and published to Exchange as reusable assets. Specifications reference the fragments, so teams share consistent, versioned definitions.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Fragments let teams reuse the same definitions across specifications."
      },
      "B": {
        "type": "Incorrect",
        "text": "Copies drift over time and are not centrally versioned."
      },
      "C": {
        "type": "Incorrect",
        "text": "Implementation libraries do not make types reusable in API specifications."
      },
      "D": {
        "type": "Incorrect",
        "text": "Text descriptions cannot be referenced by specifications."
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
        "text": "Apply a policy to the specification in Runtime Manager"
      },
      {
        "letter": "B",
        "text": "Email the RAML file to all development teams"
      },
      {
        "letter": "C",
        "text": "Deploy the specification to CloudHub as an application"
      },
      {
        "letter": "D",
        "text": "Publish the specification to Exchange"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Design Center publishes API specifications to Exchange as versioned assets. Exchange generates documentation and can provide a mocking service so consumers can discover and try the API, and API Manager can create API instances from the asset.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Runtime Manager manages applications; it does not publish specifications."
      },
      "B": {
        "type": "Incorrect",
        "text": "Email does not provide discovery, versioning, or try-it capability."
      },
      "C": {
        "type": "Incorrect",
        "text": "A specification is not a deployable application."
      },
      "D": {
        "type": "Correct",
        "text": "Publishing creates a discoverable, versioned Exchange asset with documentation and a mock."
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
        "text": "An Exchange public portal with the selected assets shared to it"
      },
      {
        "letter": "D",
        "text": "Export the specifications from Exchange and host them on a file share"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Exchange public portals let an organization share selected assets with external developers. Assets are explicitly shared to the portal, where partners can browse documentation and, with an account, request access to APIs.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "This grants far too much access to the company's platform."
      },
      "B": {
        "type": "Incorrect",
        "text": "Design Center is a design tool, not a portal for external consumers."
      },
      "C": {
        "type": "Correct",
        "text": "A public portal exposes chosen assets to external developers."
      },
      "D": {
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
        "text": "Increase the major version number to attract attention"
      },
      {
        "letter": "B",
        "text": "Restrict the asset so only the owning team can view it"
      },
      {
        "letter": "C",
        "text": "Add descriptions, examples, and usage guidance in Exchange"
      },
      {
        "letter": "D",
        "text": "Deploy another copy of the implementation in each environment"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Reuse depends on consumers understanding an asset. Exchange lets owners add rich descriptions, documentation pages, examples, categories, and tags so developers can discover the asset and use it correctly.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Version numbers convey compatibility, not usability."
      },
      "B": {
        "type": "Incorrect",
        "text": "Restricting visibility reduces reuse further."
      },
      "C": {
        "type": "Correct",
        "text": "Good documentation in Exchange makes an asset discoverable and usable."
      },
      "D": {
        "type": "Incorrect",
        "text": "More deployments do not explain how to use the API."
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
        "text": "Create an API instance from the asset version"
      },
      {
        "letter": "B",
        "text": "Publish the API again under a new Exchange asset ID"
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
    "correctAnswer": "A",
    "explanation": "Correct answer: A. In API Manager, an API instance is created from an Exchange asset version. The instance is then linked to its implementation or proxy and used to apply policies, define SLA tiers, and approve client contracts.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "API Manager manages instances that reference an Exchange asset version."
      },
      "B": {
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
    "prompt": "Which two types of API-related assets can be published to Anypoint Exchange for reuse by other teams? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Running Mule application instances with their in-memory state"
      },
      {
        "letter": "B",
        "text": "Anypoint Monitoring dashboards from production"
      },
      {
        "letter": "C",
        "text": "Access tokens issued to client applications"
      },
      {
        "letter": "D",
        "text": "RAML or OAS API specifications"
      },
      {
        "letter": "E",
        "text": "API fragments such as data types, traits, or security schemes"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Correct answers: D and E. Exchange catalogs reusable assets such as REST API specifications (RAML and OAS), API fragments, connectors, templates, examples, and policies. Runtime state, dashboards, and credentials are not Exchange assets.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Running instances are managed in Runtime Manager, not shared as assets."
      },
      "B": {
        "type": "Incorrect",
        "text": "Dashboards are monitoring artifacts, not Exchange assets."
      },
      "C": {
        "type": "Incorrect",
        "text": "Credentials must never be shared as reusable assets."
      },
      "D": {
        "type": "Correct",
        "text": "API specifications are core reusable Exchange assets."
      },
      "E": {
        "type": "Correct",
        "text": "Fragments let specifications share common definitions."
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
        "text": "3.0.0"
      },
      {
        "letter": "B",
        "text": "2.4.0"
      },
      {
        "letter": "C",
        "text": "2.3.2"
      },
      {
        "letter": "D",
        "text": "2.4.1"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Semantic versioning uses MAJOR.MINOR.PATCH. Backward-compatible additions, such as a new optional response field or a new resource, increment the minor version and reset the patch version to zero.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A major increment is reserved for backward-incompatible changes."
      },
      "B": {
        "type": "Correct",
        "text": "A backward-compatible new feature increments the minor version and resets the patch."
      },
      "C": {
        "type": "Incorrect",
        "text": "A patch increment is for fixes that add no new functionality."
      },
      "D": {
        "type": "Incorrect",
        "text": "The patch component resets to zero when the minor version increments."
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
        "text": "A minor change, because no resource was removed"
      },
      {
        "letter": "B",
        "text": "No version change, because query parameters are not part of the contract"
      },
      {
        "letter": "C",
        "text": "A patch change, because only one parameter is affected"
      },
      {
        "letter": "D",
        "text": "A major change; existing requests without it will fail"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Any change that can break existing clients is backward incompatible and requires a new major version. Making an optional parameter required means that existing requests that omit it will be rejected.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Breaking changes need not remove resources; making input stricter also breaks clients."
      },
      "B": {
        "type": "Incorrect",
        "text": "Query parameters are part of the API contract."
      },
      "C": {
        "type": "Incorrect",
        "text": "The size of the change does not matter; its compatibility does."
      },
      "D": {
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
        "text": "3.2.1"
      },
      {
        "letter": "B",
        "text": "4.0.0"
      },
      {
        "letter": "C",
        "text": "3.2.0"
      },
      {
        "letter": "D",
        "text": "3.3.0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Patch versions are for backward-compatible fixes, such as documentation corrections, that add no new functionality. Exchange asset versions follow semantic versioning, and changes should be published as a new version.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "A backward-compatible fix with no new functionality increments the patch version."
      },
      "B": {
        "type": "Incorrect",
        "text": "Nothing breaks clients, so a major version is not needed."
      },
      "C": {
        "type": "Incorrect",
        "text": "Published asset versions should not be overwritten with changed content."
      },
      "D": {
        "type": "Incorrect",
        "text": "No new functionality was added, so the minor version does not change."
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
        "text": "No change; v1 in the URL reflects the major version only"
      },
      {
        "letter": "C",
        "text": "The v1 URL stops working until clients re-register"
      },
      {
        "letter": "D",
        "text": "Clients must switch to /v1.5 to use the new version"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. A common practice is to expose only the major version in the API's URL or instance version, because minor and patch changes are backward compatible. Clients only need to move to a new URL when a new major version introduces breaking changes.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Only major changes require a new major URL."
      },
      "B": {
        "type": "Correct",
        "text": "Minor and patch changes are backward compatible and keep the major-version URL."
      },
      "C": {
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
        "text": "Release 3.0.0 and keep 2.x running during migration"
      },
      {
        "letter": "D",
        "text": "Release 2.7.0 and notify clients of the change"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Renaming or removing resources breaks existing client requests and requires a new major version. Running the previous major version in parallel and deprecating it later gives clients time to migrate.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Changing the path breaks client requests regardless of behavior."
      },
      "B": {
        "type": "Incorrect",
        "text": "Changing a published contract without a new version breaks clients silently."
      },
      "C": {
        "type": "Correct",
        "text": "Renaming a resource breaks clients, so it requires a new major version and a migration period."
      },
      "D": {
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
    "prompt": "Which two changes to a published API should increment only the minor version? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Removing a deprecated response field"
      },
      {
        "letter": "B",
        "text": "Adding a new optional query parameter"
      },
      {
        "letter": "C",
        "text": "Changing a field's data type from string to number"
      },
      {
        "letter": "D",
        "text": "Correcting a spelling mistake in the documentation"
      },
      {
        "letter": "E",
        "text": "Adding a new resource for an additional capability"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Correct answers: B and E. Minor versions are incremented for backward-compatible additions such as new optional parameters, fields, or resources. Removals and type changes are breaking and need a major version; fixes without new functionality are patch changes.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Removal can break clients that still read the field and is a major change."
      },
      "B": {
        "type": "Correct",
        "text": "Existing requests still work, and new functionality is added."
      },
      "C": {
        "type": "Incorrect",
        "text": "Type changes break clients that parse the field."
      },
      "D": {
        "type": "Incorrect",
        "text": "A documentation fix is a patch change."
      },
      "E": {
        "type": "Correct",
        "text": "New resources are backward-compatible additions."
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
        "text": "Shared Kernel, jointly owning a model with the vendor"
      },
      {
        "letter": "C",
        "text": "Conformist, adopting the vendor's model in the Sales context"
      },
      {
        "letter": "D",
        "text": "Anticorruption Layer in the Sales context"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. When the upstream context is dominant and will not adapt, the downstream context chooses between conforming to the upstream model or building an anticorruption layer that translates it. An anticorruption layer protects the downstream model at the cost of translation effort.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The vendor will not accommodate a single customer, so this relationship is not available."
      },
      "B": {
        "type": "Incorrect",
        "text": "A shared kernel requires close collaboration and joint ownership."
      },
      "C": {
        "type": "Incorrect",
        "text": "Conforming would let vendor concepts leak in, which the team wants to avoid."
      },
      "D": {
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
        "text": "Customer/Supplier"
      },
      {
        "letter": "B",
        "text": "Anticorruption Layer"
      },
      {
        "letter": "C",
        "text": "Separate Ways"
      },
      {
        "letter": "D",
        "text": "Conformist"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. In a customer/supplier relationship, the upstream (supplier) context takes the downstream (customer) context's needs into account, for example by planning API changes with it. The downstream can then rely on an API model shaped partly by its requirements, reducing translation.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The upstream supplier accommodates the downstream customer's needs."
      },
      "B": {
        "type": "Incorrect",
        "text": "An anticorruption layer is a downstream translation, not upstream accommodation."
      },
      "C": {
        "type": "Incorrect",
        "text": "Separate Ways means no integration between the contexts."
      },
      "D": {
        "type": "Incorrect",
        "text": "A conformist downstream adopts the upstream model without influence."
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
        "text": "Ask the mainframe team to redesign its data model"
      },
      {
        "letter": "B",
        "text": "An anticorruption layer in the Claims context"
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
    "correctAnswer": "B",
    "explanation": "Correct answer: B. When the upstream model is poor and cannot be changed, and the downstream has a valuable model to protect, an anticorruption layer is the preferred strategy. In API-led architectures this translation often sits in a System API or in the downstream API's implementation.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The mainframe team cannot change the system."
      },
      "B": {
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
        "text": "The power relationship between the two contexts"
      },
      {
        "letter": "B",
        "text": "The number of policies applied in API Manager"
      },
      {
        "letter": "C",
        "text": "Whether the APIs are deployed to CloudHub or Runtime Fabric"
      },
      {
        "letter": "D",
        "text": "The programming language used in each implementation"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Mapping strategies between bounded contexts depend on their relationship. If the upstream accommodates the downstream, a customer/supplier relationship works. If it does not, the downstream either conforms or protects its model with an anticorruption layer.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Who can influence whom decides whether to conform, translate, or collaborate."
      },
      "B": {
        "type": "Incorrect",
        "text": "Policies govern runtime behavior, not model mapping."
      },
      "C": {
        "type": "Incorrect",
        "text": "Deployment target is unrelated to data-model mapping."
      },
      "D": {
        "type": "Incorrect",
        "text": "Implementation language does not determine the mapping relationship."
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
        "text": "Partnership"
      },
      {
        "letter": "B",
        "text": "Customer/Supplier"
      },
      {
        "letter": "C",
        "text": "Conformist"
      },
      {
        "letter": "D",
        "text": "Shared Kernel"
      },
      {
        "letter": "E",
        "text": "Anticorruption Layer"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Correct answers: C and E. When the upstream context does not accommodate the downstream, the downstream's options are to conform to the upstream model or to isolate itself with an anticorruption layer. Collaborative strategies require the upstream's cooperation.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "This requires mutual commitment from both teams."
      },
      "B": {
        "type": "Incorrect",
        "text": "This requires the upstream to accommodate the downstream."
      },
      "C": {
        "type": "Correct",
        "text": "The downstream can adopt the upstream model as-is."
      },
      "D": {
        "type": "Incorrect",
        "text": "This requires joint ownership of part of the model."
      },
      "E": {
        "type": "Correct",
        "text": "The downstream can translate the upstream model to protect its own."
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
        "text": "DELETE"
      },
      {
        "letter": "B",
        "text": "GET"
      },
      {
        "letter": "C",
        "text": "PUT"
      },
      {
        "letter": "D",
        "text": "POST"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. An idempotent method produces the same server state whether it is executed once or many times. GET, HEAD, PUT, and DELETE are idempotent, while POST is not, so retrying a POST can create duplicates unless the API detects repeated requests.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Deleting the same resource again leaves the same end state."
      },
      "B": {
        "type": "Incorrect",
        "text": "GET is safe and idempotent; it does not change server state."
      },
      "C": {
        "type": "Incorrect",
        "text": "PUT replaces a resource with the same state, so repeating it has the same effect."
      },
      "D": {
        "type": "Correct",
        "text": "POST is not idempotent; repeating it can create another resource."
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
        "text": "Require clients to use POST instead of PUT for updates"
      },
      {
        "letter": "B",
        "text": "Return an ETag on GET and require If-Match on PUT"
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
    "correctAnswer": "B",
    "explanation": "Correct answer: B. HTTP supports optimistic concurrency through entity tags. The server returns an ETag representing the resource version; the client sends it back in an If-Match header on updates. If the resource has changed in the meantime, the server rejects the update instead of overwriting it.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Changing the method does not detect concurrent modifications."
      },
      "B": {
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
        "text": "404 Not Found"
      },
      {
        "letter": "B",
        "text": "200 OK with the update applied"
      },
      {
        "letter": "C",
        "text": "412 Precondition Failed"
      },
      {
        "letter": "D",
        "text": "304 Not Modified"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. When a conditional request's precondition, such as If-Match, evaluates to false, the server responds with 412 Precondition Failed. The client should then fetch the current representation and its new ETag before retrying.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The order exists; only its version has changed."
      },
      "B": {
        "type": "Incorrect",
        "text": "Applying the update would overwrite another client's change."
      },
      "C": {
        "type": "Correct",
        "text": "The If-Match precondition is false, so the update is rejected."
      },
      "D": {
        "type": "Incorrect",
        "text": "304 applies to conditional GET requests, not failed updates."
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
        "text": "Use POST to request the catalog only when needed"
      },
      {
        "letter": "B",
        "text": "Add a random query parameter to bypass caches"
      },
      {
        "letter": "C",
        "text": "Send If-Match with the ETag on each GET"
      },
      {
        "letter": "D",
        "text": "Send If-None-Match and handle 304"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. ETags also support conditional GET requests. The client sends the ETag in an If-None-Match header; if the resource is unchanged, the server responds with 304 Not Modified and no body, saving bandwidth and processing.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "POST is not cacheable in this way and changes the semantics."
      },
      "B": {
        "type": "Incorrect",
        "text": "This forces a full download every time."
      },
      "C": {
        "type": "Incorrect",
        "text": "If-Match is used to guard updates, not to avoid re-downloads."
      },
      "D": {
        "type": "Correct",
        "text": "The server returns 304 with no body when the ETag still matches."
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
        "text": "PUT to the customer's preferences resource"
      },
      {
        "letter": "B",
        "text": "GET with the preferences in query parameters"
      },
      {
        "letter": "C",
        "text": "POST to a preferences collection"
      },
      {
        "letter": "D",
        "text": "PATCH with incremental changes"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. PUT replaces the target resource with the supplied representation, so repeating the same PUT leaves the same state. This makes PUT suitable for full updates that clients may retry. POST and PATCH are not guaranteed to be idempotent.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "PUT replaces the resource state and is idempotent, so retries are safe."
      },
      "B": {
        "type": "Incorrect",
        "text": "GET must not change server state."
      },
      "C": {
        "type": "Incorrect",
        "text": "POST is not idempotent and may create duplicates on retry."
      },
      "D": {
        "type": "Incorrect",
        "text": "PATCH is not guaranteed to be idempotent."
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
    "prompt": "Which two HTTP methods are idempotent according to HTTP semantics? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "PATCH"
      },
      {
        "letter": "B",
        "text": "POST"
      },
      {
        "letter": "C",
        "text": "DELETE"
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
      "C",
      "E"
    ],
    "explanation": "Correct answers: C and E. HTTP defines GET, HEAD, OPTIONS, PUT, and DELETE as idempotent: making the same request several times has the same effect on the server as making it once. POST and PATCH are not guaranteed to be idempotent, which matters when designing retries.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "PATCH is not guaranteed to be idempotent."
      },
      "B": {
        "type": "Incorrect",
        "text": "POST is not idempotent and can create multiple resources."
      },
      "C": {
        "type": "Correct",
        "text": "Repeated deletes of the same resource leave the same end state."
      },
      "D": {
        "type": "Incorrect",
        "text": "CONNECT establishes a tunnel and is not defined as idempotent."
      },
      "E": {
        "type": "Correct",
        "text": "Repeating the same PUT leaves the resource in the same state."
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
        "text": "In a Workday System API that also calls Active Directory, ServiceNow, and ADP after reading the hire record"
      },
      {
        "letter": "D",
        "text": "In an Employee Onboarding Process API that calls a System API for each backend"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Process APIs encapsulate business processes that interact with and shape data from multiple systems, independent of the channel that triggers them. Onboarding spans four systems and is needed by more than one consumer, so the orchestration belongs in a Process API that calls one System API per backend. Experience APIs and System APIs should not carry this cross-system logic.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Chaining System APIs together creates hidden coupling between backends and makes the end-to-end process impossible to change or reuse in one place."
      },
      "B": {
        "type": "Incorrect",
        "text": "The orchestration would be tied to one channel, so the Workday-triggered automation would have to duplicate it."
      },
      "C": {
        "type": "Incorrect",
        "text": "System APIs should expose a single system's data and capabilities; embedding cross-system orchestration couples Workday access to unrelated systems."
      },
      "D": {
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
        "text": "Add a Distributor Pricing Experience API that reuses the Pricing Process API"
      },
      {
        "letter": "B",
        "text": "Build a new Distributor Pricing Process API that copies the pricing logic and calls the same System APIs"
      },
      {
        "letter": "C",
        "text": "Modify the Pricing Process API so it returns the partner field names whenever the caller is a distributor"
      },
      {
        "letter": "D",
        "text": "Expose the pricing System APIs directly to distributors and let them calculate prices themselves"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. When an existing business capability must be offered to a new channel with different data formats or policies, API-led connectivity adds an Experience API in front of the existing Process API. The Process API stays channel-agnostic and reusable, while the Experience API handles the partner-specific shape and lets API Manager apply partner-specific policies such as rate limiting.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "An Experience API adapts an existing capability to a new consumer's format and policies without changing or duplicating the Process API."
      },
      "B": {
        "type": "Incorrect",
        "text": "Duplicating the business logic creates two implementations of pricing that will drift apart over time."
      },
      "C": {
        "type": "Incorrect",
        "text": "Adding consumer-specific formatting to the Process API couples it to individual channels and risks breaking the internal sales portal."
      },
      "D": {
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
        "text": "System layer, because it reads inventory data directly from the warehouse management systems"
      },
      {
        "letter": "D",
        "text": "Process layer, because it combines several systems and applies shared business rules"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Layer assignment depends on the API's responsibility, not on who calls it. An API that orchestrates several systems and applies business rules that are independent of any particular channel belongs in the Process layer, where it can be reused by the e-commerce site, store app, and marketplace integration through their own Experience APIs if needed.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Being consumed by channels does not make an API an Experience API; it serves three different channels with the same channel-agnostic result."
      },
      "B": {
        "type": "Incorrect",
        "text": "Duplicating the calculation in every channel produces inconsistent results and prevents reuse."
      },
      "C": {
        "type": "Incorrect",
        "text": "System APIs front a single system and avoid business rules; this API spans two systems and computes a business value."
      },
      "D": {
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
        "text": "The rating engine, capacity-planning system, and Salesforce should each be fronted by System APIs"
      },
      {
        "letter": "D",
        "text": "The discount rules should be implemented in the web portal Experience API because only portal customers receive discounts"
      },
      {
        "letter": "E",
        "text": "A Freight Quote Process API should combine the rates, capacity, and discounts into one channel-independent quote"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Correct answers: C and E. In API-led connectivity, each backend is unlocked by System APIs, cross-system business logic such as calculating a freight quote with discounts is implemented once in a Process API, and each channel receives its own Experience API in the format it requires. Discounts that depend on the customer rather than the channel belong in the Process layer.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The two channels need different formats; separate Experience APIs keep each channel's changes isolated."
      },
      "B": {
        "type": "Incorrect",
        "text": "System APIs should not orchestrate other systems; that hides business logic in the wrong layer and removes reuse."
      },
      "C": {
        "type": "Correct",
        "text": "Each backend gets a System API so that its data and functions are reusable and its complexity is hidden."
      },
      "D": {
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
        "text": "The network inventory System API sends push notifications directly to the customer app when provisioning finishes"
      },
      {
        "letter": "B",
        "text": "The customer app calls the network inventory System API and polls it every few seconds until provisioning completes"
      },
      {
        "letter": "C",
        "text": "A reusable Activation Process API triggers provisioning and publishes a completion event to the channels"
      },
      {
        "letter": "D",
        "text": "The customer Experience API holds the HTTP connection open until the network inventory system finishes provisioning"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. API-led connectivity does not require every interaction to be synchronous. Long-running business processes still belong in the Process layer, which can trigger work through System APIs and publish events when the work completes. Experience APIs or channel components then relay those events in the form each app needs, keeping the activation logic reusable across channels.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Channel notification is not the responsibility of a System API; it would couple the backend layer to a specific consumer."
      },
      "B": {
        "type": "Incorrect",
        "text": "The client would contain process logic and hit the backend repeatedly, and the retail-store app would need the same logic."
      },
      "C": {
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
        "text": "Experience APIs change most often, Process APIs moderately, and System APIs least"
      },
      {
        "letter": "B",
        "text": "Process APIs change most frequently because each new channel requires a new version of every Process API"
      },
      {
        "letter": "C",
        "text": "System APIs change most frequently because backend systems receive patches and upgrades every quarter"
      },
      {
        "letter": "D",
        "text": "All three layers change at the same rate because they are deployed through the same CI/CD pipeline"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. One of the defining characteristics of the three layers is their rate of change. Experience APIs track fast-moving channel and UI requirements, Process APIs evolve with business processes, and System APIs change slowly because they front long-lived systems of record. Separating APIs this way lets fast-changing parts evolve without destabilizing the reusable foundation.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The layers are arranged by rate of change: channels evolve quickly, processes evolve moderately, and systems of record are the most stable."
      },
      "B": {
        "type": "Incorrect",
        "text": "New channels should be handled by new Experience APIs that reuse existing Process APIs unchanged."
      },
      "C": {
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
        "text": "(1) Process, (2) System, (3) Experience"
      },
      {
        "letter": "C",
        "text": "(1) System, (2) Process, (3) Experience"
      },
      {
        "letter": "D",
        "text": "(1) System, (2) Experience, (3) Process"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. API layers can be identified from three characteristics: who owns the API, what it focuses on, and how often it changes. Central IT owning a stable API over one system indicates a System API; a business owner applying cross-system rules indicates a Process API; and an app team iterating every sprint indicates an Experience API.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A slow-changing API over the SIS owned by central IT is not an Experience API, and a sprint-by-sprint app API is not a System API."
      },
      "B": {
        "type": "Incorrect",
        "text": "Student Records fronts a single system of record and Course Enrollment spans two systems, so these are reversed."
      },
      "C": {
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
        "text": "Central IT publishes ERP and CRM System APIs in Exchange for LoB Process APIs to reuse"
      },
      {
        "letter": "C",
        "text": "LoB teams connect their Process APIs directly to the ERP and CRM databases for best performance"
      },
      {
        "letter": "D",
        "text": "Each LoB builds its own System APIs to the ERP and CRM so it is not dependent on central IT"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. API-led connectivity supports decentralized delivery by aligning layers with owners. Central IT exposes core systems once through System APIs published in Exchange, and LoB IT teams self-serve those assets to build Process and Experience APIs for their needs. This balances reuse and governance with the speed and autonomy of the lines of business.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Restricting LoB teams from owning their processes recreates a central bottleneck and contradicts the self-service model."
      },
      "B": {
        "type": "Correct",
        "text": "Shared System APIs owned by central IT prevent duplicated backend access, while LoB teams keep ownership of their own processes."
      },
      "C": {
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
        "text": "Expose the backend's proprietary XML and column names unchanged so the API requires no transformation at all"
      },
      {
        "letter": "B",
        "text": "Mirror the backend's model and semantics, but in JSON with readable names and only needed fields"
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
    "correctAnswer": "B",
    "explanation": "Correct answer: B. MuleSoft's guidance for System API data models depends on the organization. If an Enterprise Data Model exists, System APIs use its types. Otherwise each System API can use the Bounded Context Data Model of its context. If neither is practical, the System API can use data types that closely mirror the backend system's model, while still abstracting technical details such as proprietary formats and naming so consumers are not tied to the backend's idiosyncrasies.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Leaking proprietary formats and cryptic names to every consumer couples them to the backend and makes the API hard to use."
      },
      "B": {
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
        "text": "Create a new Bounded Context Data Model for each System API that differs from the EDM"
      },
      {
        "letter": "B",
        "text": "Use the EDM only in Experience APIs because System APIs should never transform data"
      },
      {
        "letter": "C",
        "text": "Use EDM data types and translate to each backend's model in the implementations"
      },
      {
        "letter": "D",
        "text": "Expose each backend's native data model so the System APIs remain thin pass-through layers"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. If an organization already uses an Enterprise Data Model, the API data model of its System APIs should use data types from that EDM. The System API implementation translates between those EDM types and the native data model of the backend system, so consumers work with consistent, backend-independent definitions.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Duplicating definitions alongside a working EDM fragments the data model without any benefit."
      },
      "B": {
        "type": "Incorrect",
        "text": "System APIs are precisely where translation between the backend model and a shared model belongs."
      },
      "C": {
        "type": "Correct",
        "text": "When an EDM is in use, System APIs adopt its types so all consumers share consistent definitions, and the implementation handles translation to the backend."
      },
      "D": {
        "type": "Incorrect",
        "text": "Ignoring the existing EDM would introduce inconsistent definitions and force every consumer to translate."
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
        "text": "Define one data model per consuming application so every consumer receives exactly what it needs"
      },
      {
        "letter": "D",
        "text": "Assign each System API to a bounded context and use that context's data model"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Without an Enterprise Data Model, each System API can be assigned to a bounded context and use that context's data model. Those types are defined by their business characteristics rather than by the backend's native model, which keeps the API stable if the backend changes, although the translation effort in the implementation can be significant.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Mirroring the backend makes consumers dependent on it, which defeats the goal of replacing systems later."
      },
      "B": {
        "type": "Incorrect",
        "text": "Untyped payloads remove the contract's value and push data interpretation onto every consumer."
      },
      "C": {
        "type": "Incorrect",
        "text": "Consumer-specific models belong in the Experience layer, not in System APIs."
      },
      "D": {
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
        "text": "Expose business-meaningful names and map them to SAP structures in the implementation"
      },
      {
        "letter": "B",
        "text": "Let each Process API team transform the SAP fields into its own names as needed"
      },
      {
        "letter": "C",
        "text": "Keep the SAP field names and publish a mapping spreadsheet in Exchange for the consuming teams"
      },
      {
        "letter": "D",
        "text": "Replace the System API with direct RFC calls from each Process API so they get full SAP functionality"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. A key purpose of System APIs is to hide the complexity of systems of record from their consumers. Exposing understandable, business-oriented data types and handling the mapping to backend-specific structures inside the System API implementation makes the API reusable by teams without backend expertise and reduces the ripple effect of backend changes.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Abstracting SAP-specific complexity lets non-SAP teams consume the API and limits the impact of SAP changes."
      },
      "B": {
        "type": "Incorrect",
        "text": "The same mapping would be duplicated across many Process APIs, creating inconsistency and maintenance cost."
      },
      "C": {
        "type": "Incorrect",
        "text": "Every consumer would still have to understand and code against SAP-specific semantics."
      },
      "D": {
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
        "text": "Keep a single ERP System API so that consumers only need one contract and one set of credentials"
      },
      {
        "letter": "B",
        "text": "Avoid System APIs for the ERP and let Process APIs use the ERP connector directly"
      },
      {
        "letter": "C",
        "text": "Define several System APIs at business-meaningful granularity, such as Customers and Orders"
      },
      {
        "letter": "D",
        "text": "Create one System API per ERP database table so that each API stays very small"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. System APIs, like all APIs, should be defined at a granularity that makes business sense and follows the single responsibility principle. A non-trivial backend system is therefore usually fronted by several System APIs, each focused on a coherent set of business entities, rather than by a single monolithic API or by table-level APIs.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A huge API is hard to understand, version, and govern, and every change risks affecting all consumers."
      },
      "B": {
        "type": "Incorrect",
        "text": "Skipping the System layer duplicates backend access logic in every Process API."
      },
      "C": {
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
        "text": "Base the System APIs on a business-defined bounded context data model"
      },
      {
        "letter": "B",
        "text": "Wait to build System APIs until the new reservation system has been selected"
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
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Mirroring a backend's data model in a System API minimizes translation effort but ties consumers to that backend. When a backend replacement is expected and no EDM exists, defining the System API's data model in terms of a bounded context's business concepts requires more translation now, but allows the backend to be swapped later without changing the contract consumers depend on.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "A business-defined model is independent of the current backend, so replacing the system changes only the System API implementation."
      },
      "B": {
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
        "text": "In the Customer System API's implementation"
      },
      {
        "letter": "C",
        "text": "In every Process API that consumes the Customer System API"
      },
      {
        "letter": "D",
        "text": "In an API policy applied to the Customer System API in API Manager"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. The System API defines a contract in terms of the chosen API data model, and its implementation translates between those data types and the native data model of the backend system. This keeps the translation in one place and shields every consumer from the backend's model.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Changing the system of record to fit an API is costly and usually impossible for packaged or SaaS systems."
      },
      "B": {
        "type": "Correct",
        "text": "The System API implementation owns the mapping between its API data model and the backend system's native model."
      },
      "C": {
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
        "text": "Replace the Enterprise Data Model with Bounded Context Data Models because APIs must always use bounded contexts"
      },
      {
        "letter": "B",
        "text": "Reuse the existing Enterprise Data Model for the API data models"
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
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Choosing between an Enterprise Data Model and Bounded Context Data Models depends on the organization. If an organization already has a functioning EDM with strong central governance, using it for API data models is a sound choice. Bounded Context Data Models are preferable where such agreement does not exist or would be too costly to achieve.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Bounded contexts are not mandatory; discarding a working, governed EDM adds effort without benefit."
      },
      "B": {
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
        "text": "Separate Patient types per context, translated where the contexts interact"
      },
      {
        "letter": "B",
        "text": "Rename one of the types so that no two contexts in the organization use the same name"
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
    "correctAnswer": "A",
    "explanation": "Correct answer: A. In a Bounded Context Data Model approach, each bounded context is identified by its shared vocabulary and has its own set of data type definitions. Types in different contexts may have the same name, such as Patient, but they are separate definitions. Where contexts interact, APIs map between their models.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "In Bounded Context Data Models, each context has its own definitions, which may share names but are formally unrelated."
      },
      "B": {
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
        "text": "An EDM forces every API to use XML, which is not supported by RAML"
      },
      {
        "letter": "C",
        "text": "Mule applications cannot transform data between an EDM and backend models"
      },
      {
        "letter": "D",
        "text": "An EDM needs organization-wide agreement and governance, which becomes a bottleneck"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. An Enterprise Data Model offers a single canonical definition of each data type, but achieving and maintaining it requires agreement and governance across the whole organization. In large organizations this is often slow and fragile, so MuleSoft recommends considering Bounded Context Data Models unless an EDM already exists and works well.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Exchange supports publishing reusable data types and fragments, so this is not a limitation."
      },
      "B": {
        "type": "Incorrect",
        "text": "EDMs are format-independent and RAML and OAS support both JSON and XML."
      },
      "C": {
        "type": "Incorrect",
        "text": "Mule applications routinely perform this kind of transformation."
      },
      "D": {
        "type": "Correct",
        "text": "The main drawback of an EDM is the coordination and governance cost, which grows with organizational size and diversity."
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
        "text": "Sales-to-Logistics data mapping is needed where the Process API calls the System API"
      },
      {
        "letter": "D",
        "text": "The Shipment System API must adopt the Sales context's data model"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. With Bounded Context Data Models, each context maintains its own formally unrelated data types. When an API in one context calls an API in another, data must be mapped between the two models. This mapping is the cost paid for allowing each context to evolve independently.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Bounded contexts are defined precisely so that they do not share data type definitions."
      },
      "B": {
        "type": "Incorrect",
        "text": "Contexts can interact through explicit mappings; merging them is not required."
      },
      "C": {
        "type": "Correct",
        "text": "Bounded contexts have independent models, so interactions across a context boundary require translation."
      },
      "D": {
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
        "text": "One shared definition per data type, reducing point-to-point format mappings"
      },
      {
        "letter": "B",
        "text": "To shield APIs from all non-backward-compatible changes to the canonical model"
      },
      {
        "letter": "C",
        "text": "To remove all data transformation from Mule applications"
      },
      {
        "letter": "D",
        "text": "To allow each line of business to define its own versions of shared entities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. An enterprise-wide canonical (Enterprise) data model defines each data type once for the whole organization. Systems translate between their native format and the canonical format, which reduces the number of distinct mappings needed. The trade-off is the governance needed to agree on and evolve one shared model.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "A canonical model means each system maps to and from one shared format instead of to every other system's format."
      },
      "B": {
        "type": "Incorrect",
        "text": "Breaking changes to a shared canonical model affect every API that uses it."
      },
      "C": {
        "type": "Incorrect",
        "text": "Systems still use their own native models, so transformation to and from the canonical model remains necessary."
      },
      "D": {
        "type": "Incorrect",
        "text": "Independent per-LoB definitions describe bounded contexts, the opposite of a canonical model."
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
        "text": "Spend the first year defining an Enterprise Data Model before building any APIs"
      },
      {
        "letter": "B",
        "text": "Define Bounded Context Data Models aligned with the business domains"
      },
      {
        "letter": "C",
        "text": "Use one data model per API and never share data types between APIs"
      },
      {
        "letter": "D",
        "text": "Adopt the e-commerce platform's native model as the company-wide standard"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. When there is no existing Enterprise Data Model and teams are organized by business domain, Bounded Context Data Models aligned with those domains are usually the most practical choice. Each domain team owns its model and shares types within its context, and mappings are added where contexts interact.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A year-long EDM effort conflicts with the requirement for fast delivery by domain teams."
      },
      "B": {
        "type": "Correct",
        "text": "Domain-aligned bounded contexts let each team deliver independently without waiting for an enterprise-wide agreement."
      },
      "C": {
        "type": "Incorrect",
        "text": "Defining a separate model for every API gives up reuse of shared types within a domain."
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
        "text": "Create a new Process API for each combination of fields requested by an app team"
      },
      {
        "letter": "D",
        "text": "Add the APIs to Anypoint DataGraph so teams query only the fields they need"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Anypoint DataGraph connects the schemas of existing APIs into a unified schema served as a single GraphQL endpoint. Consumers can discover what data is available and request exactly the subset they need in a single query, so the organization does not have to build a new API for every new combination of data.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Direct database access bypasses the APIs, their policies, and their business logic."
      },
      "B": {
        "type": "Incorrect",
        "text": "Apps would need multiple round trips and their own join logic for every combination of data."
      },
      "C": {
        "type": "Incorrect",
        "text": "This is the approach the team wants to avoid, as it creates a growing number of near-duplicate APIs."
      },
      "D": {
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
        "text": "DataGraph builds on existing REST APIs, so the System APIs are still needed"
      },
      {
        "letter": "D",
        "text": "DataGraph can connect to SAP and Oracle directly, so the System APIs are redundant"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Anypoint DataGraph supports REST APIs described with RAML or OAS specifications and combines them into a unified schema. It sits on top of the application network, typically consuming System and Process APIs; it does not connect to backend systems directly and does not remove the need for APIs that unlock those systems.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "DataGraph is a separate managed service that runs a single GraphQL endpoint for the unified schema."
      },
      "B": {
        "type": "Incorrect",
        "text": "DataGraph is a GraphQL query layer, not a message broker."
      },
      "C": {
        "type": "Correct",
        "text": "DataGraph consumes REST APIs with RAML or OAS specifications; it does not replace the APIs that unlock backend systems."
      },
      "D": {
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
        "text": "Letting a mobile app retrieve a customer's orders, shipments, and products in one request"
      },
      {
        "letter": "B",
        "text": "Transferring nightly bulk extracts of millions of records from an ERP to a data warehouse"
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
    "correctAnswer": "B",
    "explanation": "Correct answer: B. DataGraph is designed for consumers that need to query and combine data from existing APIs through a single GraphQL endpoint, with query limits such as a timeout per query. Large-volume batch data transfer is outside this role and is better handled by batch integration patterns in Mule applications.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Retrieving related data from several existing APIs in one query is a core DataGraph use case."
      },
      "B": {
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
        "text": "Restrict access with a firewall rule in the customer data center"
      },
      {
        "letter": "B",
        "text": "Configure security directly in each underlying REST API only, because DataGraph cannot have its own policies"
      },
      {
        "letter": "C",
        "text": "Embed client credentials in the GraphQL queries and validate them in each System API"
      },
      {
        "letter": "D",
        "text": "Manage it in API Manager with policies, client contracts, and SLA tiers"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Anypoint DataGraph is managed in API Manager. Administrators can configure policies on the unified schema's GraphQL endpoint, manage contracts so only authorized client applications can consume it, and define SLA tiers for each DataGraph instance.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "DataGraph is a managed SaaS endpoint; access control is applied through API Manager policies and contracts."
      },
      "B": {
        "type": "Incorrect",
        "text": "DataGraph's GraphQL endpoint can have its own policies and contracts in API Manager."
      },
      "C": {
        "type": "Incorrect",
        "text": "Client access to the GraphQL endpoint is handled through API Manager, not by custom checks in each downstream API."
      },
      "D": {
        "type": "Correct",
        "text": "DataGraph is administered in API Manager, where policies, client contracts, and SLA tiers control who can query and how much."
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
        "text": "Linking the Order type to the Product type"
      },
      {
        "letter": "B",
        "text": "Link the two Customer types so consumers query them separately"
      },
      {
        "letter": "C",
        "text": "Remove one of the APIs from the unified schema"
      },
      {
        "letter": "D",
        "text": "Rewrite both APIs so they return identical Customer payloads"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. DataGraph lets you merge object types to combine similar types into a single type, extending its fields and datasets. Merging the CRM and Billing Customer types yields one Customer type in the unified schema that exposes both contact and balance information.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Merging combines similar types into one, extending their fields for a richer query result."
      },
      "B": {
        "type": "Incorrect",
        "text": "Linking connects different types; it would not present a single Customer type with both sets of fields."
      },
      "C": {
        "type": "Incorrect",
        "text": "Removing an API would lose the fields that consumers need."
      },
      "D": {
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
        "text": "It can serve consumers who need flexible, consumer-driven queries over data that existing APIs already expose"
      },
      {
        "letter": "B",
        "text": "It replaces System APIs by connecting directly to databases and ERPs"
      },
      {
        "letter": "C",
        "text": "It removes the need to manage API access, because GraphQL endpoints cannot be secured with policies"
      },
      {
        "letter": "D",
        "text": "It provides guaranteed message delivery between Process APIs"
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
    "explanation": "Correct answers: A and E. DataGraph sits on top of an application network and is best suited to consumers that want to query and combine data that existing APIs expose, through a single GraphQL endpoint. It complements rather than replaces System and Process APIs, does not provide messaging guarantees, and is governed through API Manager.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Consumers query a unified schema built from existing APIs and request exactly the data they need."
      },
      "B": {
        "type": "Incorrect",
        "text": "DataGraph consumes REST APIs; it does not connect to backend systems directly."
      },
      "C": {
        "type": "Incorrect",
        "text": "DataGraph endpoints are managed in API Manager with policies, contracts, and SLA tiers."
      },
      "D": {
        "type": "Incorrect",
        "text": "Guaranteed delivery is a messaging concern handled by technologies such as Anypoint MQ."
      },
      "E": {
        "type": "Correct",
        "text": "Serving new data combinations from existing APIs without new code is a core DataGraph benefit."
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
        "text": "Apply both policy sets to one instance and let clients choose"
      },
      {
        "letter": "B",
        "text": "Expose the System API directly to partners instead"
      },
      {
        "letter": "C",
        "text": "Two instances of v1, each with its own policies"
      },
      {
        "letter": "D",
        "text": "Publish a second major version of the API for partners"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. API Manager allows several instances of the same API version. Each instance can have its own endpoint, policies, and SLA tiers, which suits cases where different consumer groups need different governance for the same contract.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Policies on an instance apply to all of its traffic."
      },
      "B": {
        "type": "Incorrect",
        "text": "This bypasses the layer design and does not solve the policy differences."
      },
      "C": {
        "type": "Correct",
        "text": "Multiple instances of one API version can expose different endpoints and policy sets."
      },
      "D": {
        "type": "Incorrect",
        "text": "The contract is the same, so a new major version is unnecessary."
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
    "prompt": "Which two statements about API instances in API Manager are correct? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "An API version can have only one instance across the organization"
      },
      {
        "letter": "B",
        "text": "Policies are applied to the Exchange asset, so all instances share them"
      },
      {
        "letter": "C",
        "text": "Instances are created in Runtime Manager when an app is deployed"
      },
      {
        "letter": "D",
        "text": "An API instance belongs to a specific environment"
      },
      {
        "letter": "E",
        "text": "Client contracts are made with a specific API instance"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Correct answers: D and E. An API instance is created in API Manager in a given environment, typically from an Exchange asset version. Policies, SLA tiers, and client contracts are configured per instance, which lets different environments or consumer groups be governed separately.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "An API version can have multiple instances."
      },
      "B": {
        "type": "Incorrect",
        "text": "Policies are applied per instance."
      },
      "C": {
        "type": "Incorrect",
        "text": "Instances are created in API Manager, typically from Exchange assets."
      },
      "D": {
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
        "text": "Rate Limiting: SLA-Based with Free and Premium tiers"
      },
      {
        "letter": "C",
        "text": "Rate Limiting with a single limit of 100,000 per day"
      },
      {
        "letter": "D",
        "text": "HTTP Caching with a one-day time-to-live"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. The Rate Limiting: SLA-Based policy enforces limits defined in SLA tiers. Each client application's contract is associated with a tier, so different consumers get different quotas. Client credentials identify the application.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Spike Control smooths bursts but does not give per-tier quotas."
      },
      "B": {
        "type": "Correct",
        "text": "SLA tiers set different quotas per client application contract."
      },
      "C": {
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
        "text": "Rate Limiting with a limit of 50 requests per second"
      },
      {
        "letter": "D",
        "text": "JSON Threat Protection"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. The Rate Limiting policy enforces a limit on all requests to an API instance, which protects backends with a fixed capacity. SLA-based rate limiting applies limits per client application, so it does not cap the aggregate load.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "SLA limits apply per client contract, so many clients could exceed the total."
      },
      "B": {
        "type": "Incorrect",
        "text": "This identifies clients but does not cap throughput."
      },
      "C": {
        "type": "Correct",
        "text": "A non-SLA rate limit caps total traffic to the API instance."
      },
      "D": {
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
        "text": "Cross-Origin Resource Sharing (CORS)"
      },
      {
        "letter": "B",
        "text": "IP Allowlist"
      },
      {
        "letter": "C",
        "text": "Header Removal"
      },
      {
        "letter": "D",
        "text": "HTTP Caching"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Browsers enforce the same-origin policy for scripts. The CORS policy adds the necessary response headers and handles preflight requests so that the API can be called from approved origins.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "CORS lets the API tell browsers which origins may call it."
      },
      "B": {
        "type": "Incorrect",
        "text": "Restricting IPs does not satisfy the browser's cross-origin checks."
      },
      "C": {
        "type": "Incorrect",
        "text": "Removing headers does not add the required CORS response headers."
      },
      "D": {
        "type": "Incorrect",
        "text": "Caching responses does not change browser origin rules."
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
        "text": "HTTP Basic Authentication"
      },
      {
        "letter": "B",
        "text": "Message Logging"
      },
      {
        "letter": "C",
        "text": "Spike Control"
      },
      {
        "letter": "D",
        "text": "Header Injection"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. The Message Logging policy logs custom messages, built from expressions over request or response data, before or after the API is called. It lets operations teams add audit logging without changing the implementation.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "This authenticates callers but does not log the requested details."
      },
      "B": {
        "type": "Correct",
        "text": "It logs configurable expressions from requests and responses at the gateway."
      },
      "C": {
        "type": "Incorrect",
        "text": "This controls traffic bursts, not logging."
      },
      "D": {
        "type": "Incorrect",
        "text": "This adds headers to messages but does not write logs."
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
        "text": "Client ID Enforcement"
      },
      {
        "letter": "B",
        "text": "JSON Threat Protection"
      },
      {
        "letter": "C",
        "text": "Rate Limiting"
      },
      {
        "letter": "D",
        "text": "HTTP Caching"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. The HTTP Caching policy stores responses and serves them for matching requests until they expire. For read-heavy data that changes infrequently, it reduces response time and backend load without implementation changes.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "This identifies clients but does not reduce backend calls."
      },
      "B": {
        "type": "Incorrect",
        "text": "This protects against malicious payloads, not repeated reads."
      },
      "C": {
        "type": "Incorrect",
        "text": "Rejecting requests reduces load but does not serve them faster."
      },
      "D": {
        "type": "Correct",
        "text": "Cached responses are returned at the gateway without calling the backend."
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
    "prompt": "Which two pairings of a non-functional requirement with an API Manager policy are correct? (Choose two.)",
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
        "text": "Smooth short traffic bursts: Spike Control"
      },
      {
        "letter": "D",
        "text": "Different per-consumer quotas: IP Allowlist"
      },
      {
        "letter": "E",
        "text": "Remove an internal header before the response leaves: Header Removal"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Correct answers: C and E. Each included policy addresses specific non-functional requirements: Spike Control for bursts, Header Removal for stripping headers, SLA-based rate limiting for quotas, OAuth and JWT policies for tokens, and threat protection policies for payload limits.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Message Logging writes logs; token validation needs an OAuth or JWT policy."
      },
      "B": {
        "type": "Incorrect",
        "text": "CORS governs browser origins; JSON Threat Protection limits nesting."
      },
      "C": {
        "type": "Correct",
        "text": "Spike Control delays excess requests to flatten bursts."
      },
      "D": {
        "type": "Incorrect",
        "text": "IP Allowlist restricts origins; SLA-based rate limiting sets per-consumer quotas."
      },
      "E": {
        "type": "Correct",
        "text": "Header Removal strips specified headers."
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
        "text": "Remove all query parameters to avoid conflicts"
      },
      {
        "letter": "B",
        "text": "Add a new resource /login that issues client IDs"
      },
      {
        "letter": "C",
        "text": "Nothing; policies are invisible to API consumers"
      },
      {
        "letter": "D",
        "text": "Declare both headers, e.g. via a trait"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. When a policy requires clients to send something, the specification should describe it. For client ID enforcement, the client_id and client_secret headers or query parameters should be declared, often through a reusable trait, so consumers know how to call the API.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Query parameters do not conflict with header-based credentials."
      },
      "B": {
        "type": "Incorrect",
        "text": "Credentials come from client applications in Exchange, not an API resource."
      },
      "C": {
        "type": "Incorrect",
        "text": "Consumers must send credentials, so the contract should describe them."
      },
      "D": {
        "type": "Correct",
        "text": "Consumers must know from the contract which credentials to send."
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
        "text": "Add an OAuth 2.0 security scheme to secured resources"
      },
      {
        "letter": "B",
        "text": "Change every GET to POST so tokens are sent in the body"
      },
      {
        "letter": "C",
        "text": "Add client_secret as a required query parameter on every method"
      },
      {
        "letter": "D",
        "text": "Add a 429 response to every method"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. RAML and OAS support security schemes. Declaring an OAuth 2.0 scheme and applying it to resources documents that clients must send an access token, typically in the Authorization header, and describes the related error responses.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The scheme documents the Authorization header and the 401 and 403 responses."
      },
      "B": {
        "type": "Incorrect",
        "text": "Tokens are sent in the Authorization header regardless of method."
      },
      "C": {
        "type": "Incorrect",
        "text": "OAuth access tokens are sent as bearer tokens, not as client secrets."
      },
      "D": {
        "type": "Incorrect",
        "text": "429 relates to rate limiting, not OAuth."
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
        "text": "Remove all response codes except 200"
      },
      {
        "letter": "B",
        "text": "Add a required client_secret header"
      },
      {
        "letter": "C",
        "text": "Document 429 and rate-limit headers"
      },
      {
        "letter": "D",
        "text": "Add an OAuth 2.0 security scheme"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Applying a policy can introduce new responses and headers. For rate limiting, the specification should document the 429 Too Many Requests response and any rate-limit headers so clients can handle limits correctly.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Removing error responses makes the contract less accurate."
      },
      "B": {
        "type": "Incorrect",
        "text": "Non-SLA rate limiting does not identify clients."
      },
      "C": {
        "type": "Correct",
        "text": "Clients need to know how quota exhaustion is reported."
      },
      "D": {
        "type": "Incorrect",
        "text": "Rate limiting does not require OAuth."
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
        "text": "Declare client_id and client_secret query parameters"
      },
      {
        "letter": "B",
        "text": "Apply a Basic Authentication security scheme"
      },
      {
        "letter": "C",
        "text": "Add a /token resource that returns OAuth tokens"
      },
      {
        "letter": "D",
        "text": "Add a username field to every request body"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Specifications should reflect the security applied to the API. For HTTP Basic Authentication, a Basic Authentication security scheme documents that the Authorization header is required and that 401 is returned when it is missing or invalid.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "These are used by client ID enforcement, not basic authentication."
      },
      "B": {
        "type": "Correct",
        "text": "The scheme documents the Authorization header and 401 response."
      },
      "C": {
        "type": "Incorrect",
        "text": "Basic authentication does not use OAuth tokens."
      },
      "D": {
        "type": "Incorrect",
        "text": "Basic authentication uses the Authorization header, not body fields."
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
        "text": "Client ID Enforcement"
      },
      {
        "letter": "B",
        "text": "OpenID Connect OAuth 2.0 Token Enforcement"
      },
      {
        "letter": "C",
        "text": "Message Logging"
      },
      {
        "letter": "D",
        "text": "Rate Limiting: SLA-Based"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Policies that require clients to send something or that add responses affect the contract and should be documented. Policies such as Message Logging operate transparently and do not change what clients send or receive.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Clients must send credentials that should be documented."
      },
      "B": {
        "type": "Incorrect",
        "text": "Clients must send access tokens, which should be documented."
      },
      "C": {
        "type": "Correct",
        "text": "Logging at the gateway does not change requests or responses."
      },
      "D": {
        "type": "Incorrect",
        "text": "Clients must send credentials and may receive 429 responses."
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
        "text": "Implement the policies in DataWeave inside each flow"
      },
      {
        "letter": "B",
        "text": "Configure API Autodiscovery in the Mule application"
      },
      {
        "letter": "C",
        "text": "Install Anypoint Service Mesh in a Kubernetes cluster"
      },
      {
        "letter": "D",
        "text": "Deploy a separate API proxy in front of the application"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Mule runtime includes an embedded API gateway. When a Mule application is configured with API Autodiscovery, it pairs with an API instance and enforces its policies directly, without a separate proxy.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Hand-coded policies cannot be managed centrally in API Manager."
      },
      "B": {
        "type": "Correct",
        "text": "The embedded gateway in Mule runtime enforces policies in the same app."
      },
      "C": {
        "type": "Incorrect",
        "text": "Service Mesh targets microservices in Kubernetes, not a single Mule app."
      },
      "D": {
        "type": "Incorrect",
        "text": "A proxy adds a deployment and a network hop."
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
        "text": "Configure API Autodiscovery in the vendor's application"
      },
      {
        "letter": "B",
        "text": "Apply policies directly to the Exchange asset"
      },
      {
        "letter": "C",
        "text": "Ask clients to validate each other's credentials"
      },
      {
        "letter": "D",
        "text": "Deploy an API proxy or Flex Gateway in front of it"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. When the implementation is not a Mule application or cannot be changed, an API proxy or Flex Gateway placed in front of it enforces API Manager policies. The trade-off is an extra hop and an extra component to run.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Autodiscovery applies to Mule applications, and the vendor app cannot change."
      },
      "B": {
        "type": "Incorrect",
        "text": "Exchange assets do not enforce runtime policies."
      },
      "C": {
        "type": "Incorrect",
        "text": "Client-side enforcement is not governance."
      },
      "D": {
        "type": "Correct",
        "text": "A gateway in front of the backend enforces policies without modifying it."
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
        "text": "Anypoint Flex Gateway"
      },
      {
        "letter": "B",
        "text": "A Mule API proxy for each microservice on CloudHub"
      },
      {
        "letter": "C",
        "text": "API Autodiscovery inside each Node.js service"
      },
      {
        "letter": "D",
        "text": "Exchange public portal for each service"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Anypoint Flex Gateway is a lightweight, high-performance gateway that can run in Docker and Kubernetes and is managed through API Manager. It suits non-Mule services that need centralized policies without a Mule runtime per service.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Flex Gateway is a lightweight gateway that runs in containers and is managed by API Manager."
      },
      "B": {
        "type": "Incorrect",
        "text": "Separate Mule proxies add weight and route traffic out of the cluster."
      },
      "C": {
        "type": "Incorrect",
        "text": "Autodiscovery is a Mule runtime feature."
      },
      "D": {
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
        "text": "Policies applied through proxies cannot be changed at runtime"
      },
      {
        "letter": "B",
        "text": "Proxies cannot enforce client ID or rate limiting policies"
      },
      {
        "letter": "C",
        "text": "Proxies require rewriting the backend in Mule"
      },
      {
        "letter": "D",
        "text": "An extra network hop and an extra application to deploy"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. API proxies let policies be applied to any backend, but they are an additional deployment and network hop. When the implementation is a Mule application, the embedded gateway avoids this overhead.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Proxy policies are managed in API Manager like any other."
      },
      "B": {
        "type": "Incorrect",
        "text": "Proxies enforce the same included policies."
      },
      "C": {
        "type": "Incorrect",
        "text": "Proxies exist precisely to avoid changing the backend."
      },
      "D": {
        "type": "Correct",
        "text": "The proxy is a separate component that adds latency and resources."
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
        "text": "Anypoint Service Mesh"
      },
      {
        "letter": "B",
        "text": "A single Experience API that wraps all microservices"
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
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Anypoint Service Mesh extended Anypoint Platform's API management to non-Mule microservices running in Kubernetes, including traffic between services, without changing service code. It appears in the exam guide; for new designs, MuleSoft's current lightweight option for non-Mule services is Flex Gateway.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "It extended API management to microservices in Kubernetes, including service-to-service traffic."
      },
      "B": {
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
        "text": "OAuth 2.0 with end-user consent screens"
      },
      {
        "letter": "B",
        "text": "No policies, because System APIs are internal"
      },
      {
        "letter": "C",
        "text": "Client ID Enforcement plus IP Allowlist"
      },
      {
        "letter": "D",
        "text": "CORS plus HTTP Caching"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. System APIs are usually internal and should be called only by known Process APIs. Client ID enforcement identifies the calling application, and an IP allowlist limits calls to the Process layer's addresses, adding defense in depth.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "End-user consent is unnecessary for internal service calls."
      },
      "B": {
        "type": "Incorrect",
        "text": "Internal APIs still need protection from unintended callers."
      },
      "C": {
        "type": "Correct",
        "text": "Credentials identify the caller, and the allowlist restricts network origin."
      },
      "D": {
        "type": "Incorrect",
        "text": "Neither policy restricts which services can call the API."
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
        "text": "IP Allowlist of mobile carrier networks"
      },
      {
        "letter": "B",
        "text": "OAuth 2.0 token enforcement with the IdP"
      },
      {
        "letter": "C",
        "text": "HTTP Basic Authentication with one shared account"
      },
      {
        "letter": "D",
        "text": "Client ID Enforcement only"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Experience APIs exposed to end-user apps typically use OAuth 2.0, with tokens issued by an identity provider. The token enforcement policy validates tokens so access is tied to the authenticated user and authorized client.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "IP ranges cannot identify individual users."
      },
      "B": {
        "type": "Correct",
        "text": "Access tokens represent the authenticated user and are validated by the policy."
      },
      "C": {
        "type": "Incorrect",
        "text": "A shared account cannot distinguish users."
      },
      "D": {
        "type": "Incorrect",
        "text": "Client credentials identify the app, not the end user."
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
        "text": "Client ID Enforcement"
      },
      {
        "letter": "B",
        "text": "Header Injection"
      },
      {
        "letter": "C",
        "text": "CORS"
      },
      {
        "letter": "D",
        "text": "HTTP Caching"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. A typical baseline for internal Process APIs is client ID enforcement, which identifies calling applications and enables contracts and analytics. Stronger controls, such as OAuth or IP allowlisting, can be added based on data sensitivity.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "It identifies which internal application calls each Process API."
      },
      "B": {
        "type": "Incorrect",
        "text": "Injecting headers does not authenticate callers."
      },
      "C": {
        "type": "Incorrect",
        "text": "CORS is for browser-based callers."
      },
      "D": {
        "type": "Incorrect",
        "text": "Caching is a performance policy, not a security baseline."
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
        "text": "HTTP Caching"
      },
      {
        "letter": "B",
        "text": "CORS allowing all origins"
      },
      {
        "letter": "C",
        "text": "An OAuth 2.0 or JWT token enforcement policy"
      },
      {
        "letter": "D",
        "text": "Message Logging of full payloads"
      },
      {
        "letter": "E",
        "text": "JSON Threat Protection"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Correct answers: C and E. Internet-facing Experience APIs need strong authentication, such as OAuth 2.0 or JWT validation, and protection against malicious payloads, such as JSON threat protection. Performance and logging policies do not address these threats.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Caching improves performance, not security."
      },
      "B": {
        "type": "Incorrect",
        "text": "Allowing every origin weakens browser-based protections."
      },
      "C": {
        "type": "Correct",
        "text": "Tokens authenticate and authorize partner applications."
      },
      "D": {
        "type": "Incorrect",
        "text": "Logging full payloads can expose sensitive data and is not a security control."
      },
      "E": {
        "type": "Correct",
        "text": "It limits payload depth and size to block malicious JSON."
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
        "text": "Correct; securing the Experience layer protects everything below it"
      },
      {
        "letter": "B",
        "text": "Lower tiers still need their own controls"
      },
      {
        "letter": "C",
        "text": "Lower tiers should be secured only by CORS"
      },
      {
        "letter": "D",
        "text": "Lower tiers should use the same end-user OAuth consent flow"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Security in an application network uses defense in depth. Even when Experience APIs enforce OAuth 2.0, Process and System APIs should identify and restrict their callers, for example with client ID enforcement and IP allowlists, appropriate to each tier.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Internal callers or misconfigurations can reach lower tiers directly."
      },
      "B": {
        "type": "Correct",
        "text": "Each tier must protect itself in case calls bypass the upper tiers."
      },
      "C": {
        "type": "Incorrect",
        "text": "CORS is not an authentication mechanism."
      },
      "D": {
        "type": "Incorrect",
        "text": "Internal service calls do not need end-user consent."
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
        "text": "Encoded in the request path as /client/{id}/secret/{secret}"
      },
      {
        "letter": "B",
        "text": "In a cookie set by Anypoint Platform after login"
      },
      {
        "letter": "C",
        "text": "Inside the JSON request body as a credentials object"
      },
      {
        "letter": "D",
        "text": "client_id and client_secret headers or query params"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Client ID enforcement validates the client ID and secret of a registered client application. By default it reads client_id and client_secret from headers or query parameters, and can also be configured to read them from an HTTP Basic Authorization header. Requests should use HTTPS.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Path segments are not the configured credential origin."
      },
      "B": {
        "type": "Incorrect",
        "text": "Client credentials are not platform session cookies."
      },
      "C": {
        "type": "Incorrect",
        "text": "The policy does not read credentials from the body by default."
      },
      "D": {
        "type": "Correct",
        "text": "The default policy reads these values from the request."
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
        "text": "Ask the client to send the secret in the URL path"
      },
      {
        "letter": "B",
        "text": "Remove client ID enforcement for that client only"
      },
      {
        "letter": "C",
        "text": "Read them from the Basic Authorization header"
      },
      {
        "letter": "D",
        "text": "Replace the policy with CORS"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Client ID enforcement can be configured to obtain the client ID and secret from a custom expression, such as headers or query parameters, or from an HTTP Basic Authentication header, with the client ID as the username and the secret as the password.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "This exposes the secret in logs and is not supported."
      },
      "B": {
        "type": "Incorrect",
        "text": "Exempting a client defeats the governance of the API."
      },
      "C": {
        "type": "Correct",
        "text": "The policy supports a Basic Authentication header as the credentials origin."
      },
      "D": {
        "type": "Incorrect",
        "text": "CORS does not authenticate clients."
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
        "text": "Rate Limiting: SLA-Based"
      },
      {
        "letter": "B",
        "text": "IP Allowlist"
      },
      {
        "letter": "C",
        "text": "JSON Threat Protection"
      },
      {
        "letter": "D",
        "text": "Rate Limiting"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. SLA-based rate limiting enforces limits according to the SLA tier of each client application's contract, so requests must carry the client ID and secret. Policies such as plain rate limiting or IP allowlisting do not identify the client application.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The policy must know which contract and tier apply to each request."
      },
      "B": {
        "type": "Incorrect",
        "text": "This restricts by network origin, not client application."
      },
      "C": {
        "type": "Incorrect",
        "text": "This inspects payload structure, not client identity."
      },
      "D": {
        "type": "Incorrect",
        "text": "Non-SLA rate limiting applies to all requests regardless of client."
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
        "text": "Client secrets expire every hour"
      },
      {
        "letter": "B",
        "text": "Anyone viewing the app's code can see the secret"
      },
      {
        "letter": "C",
        "text": "Browsers cannot send custom HTTP headers"
      },
      {
        "letter": "D",
        "text": "Client ID Enforcement works only with mobile apps"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Client secrets should only be used by clients that can keep them confidential, such as server-side applications. Secrets embedded in browser or mobile code can be extracted. Public clients usually call an Experience API via a backend or use OAuth 2.0 flows designed for public clients.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Client secrets do not expire on a fixed hourly basis."
      },
      "B": {
        "type": "Correct",
        "text": "Browser code is public, so the secret cannot be kept confidential."
      },
      "C": {
        "type": "Incorrect",
        "text": "Browsers can send custom headers, subject to CORS."
      },
      "D": {
        "type": "Incorrect",
        "text": "The policy works with any HTTP client."
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
        "text": "It sends the secret to the API on every request alongside the token"
      },
      {
        "letter": "B",
        "text": "It uses them to sign in to Anypoint Platform"
      },
      {
        "letter": "C",
        "text": "It never needs a client ID because tokens are anonymous"
      },
      {
        "letter": "D",
        "text": "Exchange it for a token at the provider, then send the token"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. With OAuth 2.0, the client application authenticates to the authorization server, such as an external client provider, with its credentials and receives an access token. It sends only the token to the API, where the policy validates it.",
    "rationales": {
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
        "text": "Tokens are issued to registered client applications."
      },
      "D": {
        "type": "Correct",
        "text": "With OAuth 2.0, the API receives the token, not the secret."
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
        "text": "Request access in Exchange"
      },
      {
        "letter": "B",
        "text": "Copy credentials from another team's application"
      },
      {
        "letter": "C",
        "text": "Ask Runtime Manager to issue a client ID"
      },
      {
        "letter": "D",
        "text": "Deploy a new API proxy for the developer"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Consumers request access from the API's Exchange page. They select or create a client application, the API instance, and an SLA tier if available. This creates a contract that, once approved, lets the client application's credentials call the API.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "This creates a contract between the client app and the API instance."
      },
      "B": {
        "type": "Incorrect",
        "text": "Sharing credentials hides who is calling the API."
      },
      "C": {
        "type": "Incorrect",
        "text": "Runtime Manager does not issue API client credentials."
      },
      "D": {
        "type": "Incorrect",
        "text": "A proxy does not grant client access."
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
        "text": "Approval is configured per client app, not per tier"
      },
      {
        "letter": "B",
        "text": "Both with manual approval to keep things simple"
      },
      {
        "letter": "C",
        "text": "Bronze auto-approved, Gold manually approved"
      },
      {
        "letter": "D",
        "text": "Both with automatic approval, monitored through analytics"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. SLA tiers in API Manager define limits and whether contract requests are approved automatically or require manual approval by the API owner. This allows low-risk tiers to be self-service while premium tiers are reviewed.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Approval behavior is defined on the SLA tier."
      },
      "B": {
        "type": "Incorrect",
        "text": "Internal teams would wait unnecessarily for Bronze access."
      },
      "C": {
        "type": "Correct",
        "text": "Each SLA tier has its own approval setting."
      },
      "D": {
        "type": "Incorrect",
        "text": "Gold access would be granted without the required review."
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
        "text": "In API Manager, in the API instance's contracts"
      },
      {
        "letter": "C",
        "text": "In Access Management, by making the partner an administrator"
      },
      {
        "letter": "D",
        "text": "In Design Center, by editing the API specification"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Contract requests that require manual approval appear in API Manager for the API instance. The API owner reviews and approves or rejects them; approved contracts allow the client application's requests to pass the policy.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Restarting an app does not approve access."
      },
      "B": {
        "type": "Correct",
        "text": "Pending contracts are approved by the API owner in API Manager."
      },
      "C": {
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
        "text": "Delete the API instance"
      },
      {
        "letter": "B",
        "text": "Remove the Client ID Enforcement policy"
      },
      {
        "letter": "C",
        "text": "Change the API's major version"
      },
      {
        "letter": "D",
        "text": "Revoke its contract in API Manager"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. API owners can revoke a contract in API Manager. Once revoked, the client application's credentials no longer pass policies such as client ID enforcement for that API instance, while other contracts are unaffected.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "This would cut off all clients."
      },
      "B": {
        "type": "Incorrect",
        "text": "This would open the API to everyone."
      },
      "C": {
        "type": "Incorrect",
        "text": "Versioning does not remove one client's access."
      },
      "D": {
        "type": "Correct",
        "text": "Revocation blocks that application's requests to the API instance."
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
        "text": "CORS"
      },
      {
        "letter": "B",
        "text": "HTTP Caching"
      },
      {
        "letter": "C",
        "text": "JSON Threat Protection"
      },
      {
        "letter": "D",
        "text": "Client ID Enforcement"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. The JSON Threat Protection policy limits the structure of JSON payloads, such as container depth, array entry count, and string length, rejecting malicious requests before they reach the implementation.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "CORS governs browser origins, not payload structure."
      },
      "B": {
        "type": "Incorrect",
        "text": "Caching does not inspect payloads."
      },
      "C": {
        "type": "Correct",
        "text": "It limits nesting depth, array size, and string lengths."
      },
      "D": {
        "type": "Incorrect",
        "text": "Authenticated clients could still send malicious payloads."
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
        "text": "JSON Threat Protection"
      },
      {
        "letter": "B",
        "text": "XML Threat Protection"
      },
      {
        "letter": "C",
        "text": "Spike Control"
      },
      {
        "letter": "D",
        "text": "Header Removal"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. The XML Threat Protection policy protects against malicious XML by limiting structures such as element depth, attribute counts, and text sizes, rejecting requests that exceed the limits.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "This policy inspects JSON, not XML."
      },
      "B": {
        "type": "Correct",
        "text": "It limits element depth, attribute counts, and sizes of XML."
      },
      "C": {
        "type": "Incorrect",
        "text": "Spike Control limits rate, not payload structure."
      },
      "D": {
        "type": "Incorrect",
        "text": "Removing headers does not inspect payloads."
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
        "text": "IP Blocklist"
      },
      {
        "letter": "B",
        "text": "CORS"
      },
      {
        "letter": "C",
        "text": "Rate Limiting"
      },
      {
        "letter": "D",
        "text": "IP Allowlist"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. The IP Allowlist policy permits requests only from configured IP addresses or ranges. It is a common control for partner and internal APIs with known source addresses.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A blocklist denies listed addresses and allows all others."
      },
      "B": {
        "type": "Incorrect",
        "text": "CORS restricts browser origins, not network addresses."
      },
      "C": {
        "type": "Incorrect",
        "text": "Rate limits apply to request counts, not origins."
      },
      "D": {
        "type": "Correct",
        "text": "Only requests from the listed addresses are allowed."
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
        "text": "JWT Validation"
      },
      {
        "letter": "B",
        "text": "Header Injection"
      },
      {
        "letter": "C",
        "text": "Client ID Enforcement"
      },
      {
        "letter": "D",
        "text": "HTTP Basic Authentication"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. The JWT Validation policy validates JSON Web Tokens by checking their signature, using a key or JWKS, and claims such as expiration and audience. Self-contained tokens can be validated without calling the issuer on every request.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "It verifies the token's signature and claims, such as expiry and audience."
      },
      "B": {
        "type": "Incorrect",
        "text": "This adds headers and does not validate tokens."
      },
      "C": {
        "type": "Incorrect",
        "text": "This validates client credentials, not JWTs."
      },
      "D": {
        "type": "Incorrect",
        "text": "This validates username and password."
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
    "prompt": "Which two policies enforce security constraints on API invocations? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Message Logging"
      },
      {
        "letter": "B",
        "text": "Spike Control"
      },
      {
        "letter": "C",
        "text": "IP Allowlist"
      },
      {
        "letter": "D",
        "text": "HTTP Caching"
      },
      {
        "letter": "E",
        "text": "XML Threat Protection"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Correct answers: C and E. Security policies authenticate, authorize, or protect APIs from attacks; examples include IP allowlists, threat protection, JWT validation, and OAuth enforcement. Policies such as caching, spike control, and logging address quality of service or operations.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "This records information for auditing and troubleshooting."
      },
      "B": {
        "type": "Incorrect",
        "text": "This manages traffic bursts for quality of service."
      },
      "C": {
        "type": "Correct",
        "text": "It restricts callers by network origin."
      },
      "D": {
        "type": "Incorrect",
        "text": "This improves performance."
      },
      "E": {
        "type": "Correct",
        "text": "It rejects malicious XML payloads."
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
        "text": "In Runtime Manager, per deployed application"
      },
      {
        "letter": "B",
        "text": "In the root org, linked to environments"
      },
      {
        "letter": "C",
        "text": "In Exchange, on each API's asset page"
      },
      {
        "letter": "D",
        "text": "In each Mule application's configuration file"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. External client providers are configured in Access Management at the root organization level and associated with environments, including those of business groups. APIs in those environments then use the provider for client applications and token validation.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Runtime Manager does not manage OAuth client providers."
      },
      "B": {
        "type": "Correct",
        "text": "Client providers are set up in the root org and linked to environments."
      },
      "C": {
        "type": "Incorrect",
        "text": "Exchange uses the configured provider but does not define it."
      },
      "D": {
        "type": "Incorrect",
        "text": "Applications do not register client providers for the platform."
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
        "text": "The client app exists only in Anypoint and cannot get tokens"
      },
      {
        "letter": "B",
        "text": "The client receives a platform user account"
      },
      {
        "letter": "C",
        "text": "The consumer must manually register the client in the IdP first"
      },
      {
        "letter": "D",
        "text": "It is registered in the IdP via Dynamic Client Registration"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. With an OpenID Connect client provider that supports Dynamic Client Registration, creating a client application in Anypoint Platform registers the client in the identity provider. The client can then obtain tokens from the IdP for APIs protected by token enforcement policies.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The registration lets the client obtain tokens from the IdP."
      },
      "B": {
        "type": "Incorrect",
        "text": "Client applications are not platform users."
      },
      "C": {
        "type": "Incorrect",
        "text": "DCR removes the need for manual registration."
      },
      "D": {
        "type": "Correct",
        "text": "Anypoint Platform registers the client with the provider."
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
        "text": "Yes, by assigning providers per environment"
      },
      {
        "letter": "B",
        "text": "No, one client provider applies to the whole organization"
      },
      {
        "letter": "C",
        "text": "Only if retail becomes a separate Anypoint organization"
      },
      {
        "letter": "D",
        "text": "Only if PingFederate is also used for platform user sign-in"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Anypoint Platform supports multiple client providers. Each environment, including environments of business groups, is associated with a client provider, so production can use PingFederate while sandbox uses the default provider.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Client providers can differ by environment."
      },
      "B": {
        "type": "Incorrect",
        "text": "Multiple client providers are supported."
      },
      "C": {
        "type": "Incorrect",
        "text": "Business groups can use different providers per environment."
      },
      "D": {
        "type": "Incorrect",
        "text": "Client management is independent of identity management."
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
    "prompt": "Which two statements about OAuth 2.0 on Anypoint Platform are correct? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Access tokens are stored in Exchange for each request"
      },
      {
        "letter": "B",
        "text": "Client applications are registered with the environment's client provider"
      },
      {
        "letter": "C",
        "text": "Business groups cannot use external client providers"
      },
      {
        "letter": "D",
        "text": "Identity management providers issue tokens for API clients"
      },
      {
        "letter": "E",
        "text": "A token enforcement policy validates tokens issued by the provider"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Correct answers: B and E. In client management, client applications are registered with the client provider associated with the environment. The provider issues access tokens, and an OAuth 2.0 token enforcement policy on the API validates them.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Exchange does not store per-request tokens."
      },
      "B": {
        "type": "Correct",
        "text": "This lets the provider issue tokens to them."
      },
      "C": {
        "type": "Incorrect",
        "text": "Business group environments can use configured providers."
      },
      "D": {
        "type": "Incorrect",
        "text": "Identity management is for platform user sign-in."
      },
      "E": {
        "type": "Correct",
        "text": "The policy checks the token on each request."
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
        "text": "Ask partners to stop signing requests"
      },
      {
        "letter": "B",
        "text": "Use the Header Injection policy to add the signature"
      },
      {
        "letter": "C",
        "text": "Develop a custom policy and apply it in API Manager"
      },
      {
        "letter": "D",
        "text": "Use Client ID Enforcement with the HMAC as the secret"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. When none of the included policies meets a requirement, such as verifying a proprietary request signature, a custom policy can be developed, published to Exchange, and applied in API Manager like any other policy.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "This removes a security requirement."
      },
      "B": {
        "type": "Incorrect",
        "text": "Injecting a header does not verify a signature."
      },
      "C": {
        "type": "Correct",
        "text": "Custom policies extend the gateway when included policies are insufficient."
      },
      "D": {
        "type": "Incorrect",
        "text": "Client ID enforcement compares credentials, not signatures."
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
        "text": "Calling an external fraud-scoring service before forwarding requests"
      },
      {
        "letter": "B",
        "text": "Verifying a proprietary signature scheme on each request"
      },
      {
        "letter": "C",
        "text": "Limiting each client to 100 requests per minute by SLA tier"
      },
      {
        "letter": "D",
        "text": "Enforcing a company-specific header format with complex rules"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Custom policies add development and maintenance effort. When an included policy, such as Rate Limiting: SLA-Based, already meets the requirement, it should be used instead of building a custom policy.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "This custom logic is not available as an included policy."
      },
      "B": {
        "type": "Incorrect",
        "text": "No included policy verifies proprietary signatures."
      },
      "C": {
        "type": "Correct",
        "text": "SLA-based rate limiting already does this."
      },
      "D": {
        "type": "Incorrect",
        "text": "Complex proprietary validation may require a custom policy."
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
        "text": "Anypoint Visualizer custom layers"
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
        "text": "API Designer fragments in Design Center"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. MuleSoft provides the Policy Development Kit for building custom policies for Flex Gateway. For Mule gateways, custom policies are built as Mule 4 custom policy projects. In both cases the policy is published to Exchange and applied in API Manager.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Visualizer shows the network and does not create policies."
      },
      "B": {
        "type": "Correct",
        "text": "PDK is used to build custom policies for Flex Gateway."
      },
      "C": {
        "type": "Incorrect",
        "text": "Runtime Manager does not host gateway policies."
      },
      "D": {
        "type": "Incorrect",
        "text": "Fragments describe APIs and do not run as policies."
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
        "text": "Deploy it as a standalone application in Runtime Manager"
      },
      {
        "letter": "D",
        "text": "Publish it to Exchange so it appears in API Manager"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Custom policies are packaged and published to Exchange. API Manager then lists them alongside included policies, so API owners can apply and configure them consistently on API instances.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "This bypasses central management and versioning."
      },
      "B": {
        "type": "Incorrect",
        "text": "Traits describe APIs; they do not execute policies."
      },
      "C": {
        "type": "Incorrect",
        "text": "Policies are not deployed as applications."
      },
      "D": {
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
    "prompt": "Which two scenarios most likely require a custom policy? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Masking a proprietary account number format in responses"
      },
      {
        "letter": "B",
        "text": "Allowing only requests from a fixed set of IP addresses"
      },
      {
        "letter": "C",
        "text": "Smoothing bursts of traffic to protect a backend"
      },
      {
        "letter": "D",
        "text": "Validating JWT signatures with a JWKS endpoint"
      },
      {
        "letter": "E",
        "text": "Calling an internal entitlement service to authorize each request"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Correct answers: A and E. Custom policies are appropriate for cross-cutting needs specific to an organization, such as proprietary masking or custom authorization calls. Common needs like IP restriction, JWT validation, and burst control are met by included policies.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Organization-specific transformations are not covered by included policies."
      },
      "B": {
        "type": "Incorrect",
        "text": "IP Allowlist covers this."
      },
      "C": {
        "type": "Incorrect",
        "text": "Spike Control covers this."
      },
      "D": {
        "type": "Incorrect",
        "text": "JWT Validation covers this."
      },
      "E": {
        "type": "Correct",
        "text": "Custom authorization logic needs a custom policy."
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
        "text": "An autodiscovery element with the API ID and a flowRef"
      },
      {
        "letter": "B",
        "text": "The policy XML copied into the application's configuration"
      },
      {
        "letter": "C",
        "text": "A client ID enforcement flow written in DataWeave"
      },
      {
        "letter": "D",
        "text": "The Exchange asset ID and version in the pom.xml file"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. API Autodiscovery pairs a deployed Mule application with an API instance in API Manager. The api-gateway:autodiscovery element is configured with the API ID that API Manager assigned to the instance and a flowRef to the flow, which must use an HTTP Listener, so policies are applied to that flow.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "These link the app to the instance and identify the flow to protect."
      },
      "B": {
        "type": "Incorrect",
        "text": "Policies are downloaded from API Manager, not copied into the app."
      },
      "C": {
        "type": "Incorrect",
        "text": "Hand-coded checks are not API Manager policies."
      },
      "D": {
        "type": "Incorrect",
        "text": "Exchange coordinates identify the asset, not the managed instance at runtime."
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
        "text": "A dedicated load balancer in front of the server"
      },
      {
        "letter": "C",
        "text": "An MUnit test suite for the autodiscovery flow"
      },
      {
        "letter": "D",
        "text": "Organization credentials in the Mule runtime"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. To use autodiscovery, Mule runtime engine must start with Anypoint Platform organization credentials (the environment's client ID and secret) configured. Without them, the runtime cannot connect to API Manager to pair with the API instance and download policies.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Portals are for documentation and do not affect pairing."
      },
      "B": {
        "type": "Incorrect",
        "text": "Load balancing does not affect pairing with API Manager."
      },
      "C": {
        "type": "Incorrect",
        "text": "Tests do not establish the runtime's connection to API Manager."
      },
      "D": {
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
        "text": "Reference it as a property and set it per environment at deployment"
      },
      {
        "letter": "C",
        "text": "Use the same API instance for both environments"
      },
      {
        "letter": "D",
        "text": "Hard-code the production API ID, since QA does not need policies"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Each environment has its own API instance and API ID. Configuring the autodiscovery apiId as a property placeholder, set per environment at deployment, lets the same artifact pair with the correct instance in each environment.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Rebuilding per environment breaks the build-once, promote-everywhere practice."
      },
      "B": {
        "type": "Correct",
        "text": "Externalizing the ID lets one artifact pair with each environment's instance."
      },
      "C": {
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
        "text": "Spike Control queues requests at startup"
      },
      {
        "letter": "B",
        "text": "API Manager deletes the instance until the app is restarted"
      },
      {
        "letter": "C",
        "text": "Gatekeeper blocks the API until its policies are applied"
      },
      {
        "letter": "D",
        "text": "The HTTP listener is disabled until MUnit tests pass"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. The Mule gateway's gatekeeper feature blocks API requests until all of the API's policies have been applied, so an API is never exposed unprotected while policies are still being downloaded after startup.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Spike Control is a policy and does not run before policies load."
      },
      "B": {
        "type": "Incorrect",
        "text": "API Manager does not delete instances during pairing."
      },
      "C": {
        "type": "Correct",
        "text": "It prevents requests from passing before policies are in place."
      },
      "D": {
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
        "text": "Any flow; the reference is ignored at runtime"
      },
      {
        "letter": "B",
        "text": "The error-handling flow, so policies apply to errors"
      },
      {
        "letter": "C",
        "text": "Every resource flow, using a separate autodiscovery element each"
      },
      {
        "letter": "D",
        "text": "The main flow that contains the HTTP Listener"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. The autodiscovery flowRef must point to a flow that uses an HTTP Listener. In an APIkit application, this is the main flow that receives requests and routes them, so policies are applied to all API traffic.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The referenced flow determines where policies are enforced."
      },
      "B": {
        "type": "Incorrect",
        "text": "Policies apply to incoming requests, not to error handlers."
      },
      "C": {
        "type": "Incorrect",
        "text": "One autodiscovery element pairs the app with its API instance."
      },
      "D": {
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
    "prompt": "Which two statements about API Autodiscovery are correct? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "It pairs a deployed Mule application with one API instance"
      },
      {
        "letter": "B",
        "text": "It works without any Anypoint Platform credentials"
      },
      {
        "letter": "C",
        "text": "It publishes the application's specification to Exchange"
      },
      {
        "letter": "D",
        "text": "It can pair one application with instances in several environments"
      },
      {
        "letter": "E",
        "text": "The referenced flow must use an HTTP Listener"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Correct answers: A and E. API Autodiscovery pairs a Mule application with a single API instance in API Manager using its API ID. The referenced flow must use an HTTP Listener, and the runtime must be configured with organization credentials for the environment.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The API ID identifies a single instance."
      },
      "B": {
        "type": "Incorrect",
        "text": "The runtime needs organization credentials."
      },
      "C": {
        "type": "Incorrect",
        "text": "Publishing is a separate Design Center or Maven step."
      },
      "D": {
        "type": "Incorrect",
        "text": "An instance belongs to one environment; the runtime uses one environment's credentials."
      },
      "E": {
        "type": "Correct",
        "text": "Policy enforcement requires an HTTP Listener source."
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
        "text": "An Anypoint VPC with a VPN or transit gateway"
      },
      {
        "letter": "D",
        "text": "An Exchange public portal for the SAP System API"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. An Anypoint VPC creates a private, isolated network segment for CloudHub workers. Connecting it to the corporate network through a VPN tunnel, transit gateway, VPC peering, or Direct Connect lets workers access resources behind the corporate firewall.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Worker size does not provide network connectivity."
      },
      "B": {
        "type": "Incorrect",
        "text": "Caching does not create private connectivity."
      },
      "C": {
        "type": "Correct",
        "text": "The VPC extends the corporate network so workers can reach internal systems."
      },
      "D": {
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
        "text": "The CloudHub shared load balancer with a DNS alias"
      },
      {
        "letter": "B",
        "text": "A dedicated load balancer inside an Anypoint VPC"
      },
      {
        "letter": "C",
        "text": "A Rate Limiting policy configured with the domain name"
      },
      {
        "letter": "D",
        "text": "Anypoint Visualizer with custom layers"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. CloudHub dedicated load balancers let organizations use their own SSL certificates and map incoming URLs to applications. They are configured within an Anypoint VPC, so this requirement calls for a VPC.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The shared load balancer uses MuleSoft's certificates and domain."
      },
      "B": {
        "type": "Correct",
        "text": "DLBs use custom certificates and mapping rules and are deployed in a VPC."
      },
      "C": {
        "type": "Incorrect",
        "text": "Policies do not configure domains or certificates."
      },
      "D": {
        "type": "Incorrect",
        "text": "Visualizer shows the network and does not route traffic."
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
        "text": "VPC firewall rules for the corporate CIDR"
      },
      {
        "letter": "B",
        "text": "Client ID Enforcement only"
      },
      {
        "letter": "C",
        "text": "An Exchange private portal"
      },
      {
        "letter": "D",
        "text": "CORS restricted to the corporate domain"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Each Anypoint VPC has firewall rules that control inbound traffic to its workers. Restricting them to the corporate CIDR, and blocking the shared load balancer if needed, ensures that internal APIs are not reachable from the internet.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Firewall rules control which sources can reach workers in the VPC."
      },
      "B": {
        "type": "Incorrect",
        "text": "Credentials do not restrict network origin."
      },
      "C": {
        "type": "Incorrect",
        "text": "Portal visibility does not block network traffic."
      },
      "D": {
        "type": "Incorrect",
        "text": "CORS is enforced by browsers and is not a network control."
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
        "text": "Using a dedicated load balancer with company certificates"
      },
      {
        "letter": "B",
        "text": "Connecting to a database in the company's AWS VPC"
      },
      {
        "letter": "C",
        "text": "Allowing only corporate IP ranges to reach CloudHub workers"
      },
      {
        "letter": "D",
        "text": "Calling a public SaaS API over the internet"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. An Anypoint VPC is needed for private connectivity, network isolation, firewall rules, and dedicated load balancers. Calling public internet endpoints, such as most SaaS APIs, does not require one.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Dedicated load balancers are configured within a VPC."
      },
      "B": {
        "type": "Incorrect",
        "text": "Private AWS resources require peering or similar VPC connectivity."
      },
      "C": {
        "type": "Incorrect",
        "text": "Firewall rules are a VPC capability."
      },
      "D": {
        "type": "Correct",
        "text": "Public internet endpoints are reachable without a VPC."
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
        "text": "It can be changed freely after applications are deployed"
      },
      {
        "letter": "B",
        "text": "It must be a public IP range owned by MuleSoft"
      },
      {
        "letter": "C",
        "text": "It must not overlap corporate network ranges"
      },
      {
        "letter": "D",
        "text": "It must match the corporate network's CIDR exactly"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. An Anypoint VPC's CIDR block should be large enough for its workers and must not overlap with the networks it will connect to, such as the corporate network, so traffic can be routed correctly over the VPN.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Changing a VPC's CIDR after provisioning is not a simple change."
      },
      "B": {
        "type": "Incorrect",
        "text": "VPCs use private address ranges."
      },
      "C": {
        "type": "Correct",
        "text": "Overlapping ranges would make routing between the networks ambiguous."
      },
      "D": {
        "type": "Incorrect",
        "text": "Identical ranges cannot be routed between networks."
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
        "text": "Create a separate Anypoint organization for each environment"
      },
      {
        "letter": "B",
        "text": "Use one VPC and separate environments by worker size"
      },
      {
        "letter": "C",
        "text": "Deploy QA to the shared load balancer and production to Exchange"
      },
      {
        "letter": "D",
        "text": "One VPC for production, another for non-production"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. The base Anypoint VPC subscription includes two VPCs, and each VPC can be associated with multiple environments. A common pattern is one VPC for production and one for non-production environments.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Separate organizations are unnecessary for network isolation."
      },
      "B": {
        "type": "Incorrect",
        "text": "Worker size does not isolate networks."
      },
      "C": {
        "type": "Incorrect",
        "text": "Exchange does not host applications."
      },
      "D": {
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
        "text": "A CloudHub 2.0 private space"
      },
      {
        "letter": "B",
        "text": "A Flex Gateway in the shared space"
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
    "correctAnswer": "A",
    "explanation": "Correct answer: A. In CloudHub 2.0, private spaces are virtual, private, and isolated logical spaces for running applications. They support private connectivity, such as VPN or transit gateway, and network controls similar to Anypoint VPCs in CloudHub.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Private spaces provide isolated networking and private connectivity."
      },
      "B": {
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
        "text": "A Mule cluster in Runtime Manager"
      },
      {
        "letter": "C",
        "text": "A server group"
      },
      {
        "letter": "D",
        "text": "Four CloudHub workers"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. In hybrid deployments, Runtime Manager can group servers. A server group deploys the same applications to several servers without coordination, while a cluster shares state and coordinates processing, providing high availability and failover.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Environments separate configurations; they do not provide failover."
      },
      "B": {
        "type": "Correct",
        "text": "Clusters share state and coordinate processing across servers."
      },
      "C": {
        "type": "Incorrect",
        "text": "Server groups deploy the same apps but do not share state or coordinate."
      },
      "D": {
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
        "text": "No Kubernetes skills are needed because RTF hides Kubernetes"
      },
      {
        "letter": "B",
        "text": "Its own team must operate and secure the Kubernetes clusters"
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
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Runtime Fabric runs Mule applications and gateways on customer infrastructure. On self-managed Kubernetes, the customer is responsible for the Kubernetes clusters, while MuleSoft provides orchestration of Mule runtimes and centralized management.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Customers must operate the underlying Kubernetes."
      },
      "B": {
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
        "text": "Hybrid server groups"
      },
      {
        "letter": "B",
        "text": "CloudHub shared load balancer"
      },
      {
        "letter": "C",
        "text": "Anypoint Platform PCE alone"
      },
      {
        "letter": "D",
        "text": "Runtime Fabric"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Runtime Fabric deploys each Mule application in containers with allocated resources on customer-managed infrastructure, providing isolation between applications. Standalone runtimes host several applications in one runtime process.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Applications in standalone runtimes share the same Mule runtime process."
      },
      "B": {
        "type": "Incorrect",
        "text": "This is a CloudHub networking feature, not a runtime option."
      },
      "C": {
        "type": "Incorrect",
        "text": "PCE is a self-hosted control plane, not a container runtime."
      },
      "D": {
        "type": "Correct",
        "text": "RTF runs each application in its own container on customer infrastructure."
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
    "prompt": "Which two runtime plane options are fully managed by MuleSoft, including the infrastructure? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "CloudHub"
      },
      {
        "letter": "B",
        "text": "On-premises runtimes without a control plane"
      },
      {
        "letter": "C",
        "text": "Runtime Fabric"
      },
      {
        "letter": "D",
        "text": "Hybrid standalone runtimes"
      },
      {
        "letter": "E",
        "text": "CloudHub 2.0"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Correct answers: A and E. CloudHub and CloudHub 2.0 are MuleSoft-managed runtime planes. Runtime Fabric, hybrid standalone runtimes, and on-premises runtimes run on customer infrastructure, with varying levels of MuleSoft management.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "CloudHub runs on MuleSoft-managed infrastructure."
      },
      "B": {
        "type": "Incorrect",
        "text": "These are fully customer-managed."
      },
      "C": {
        "type": "Incorrect",
        "text": "The customer manages the infrastructure."
      },
      "D": {
        "type": "Incorrect",
        "text": "The customer operates the servers and runtimes."
      },
      "E": {
        "type": "Correct",
        "text": "CloudHub 2.0 is a fully managed, containerized iPaaS."
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
    "prompt": "A System API performs many fine-grained calls to an on-premises mainframe. Latency through a VPN from the cloud is too high. Which runtime plane choice best reduces latency?",
    "options": [
      {
        "letter": "A",
        "text": "Add the HTTP Caching policy to every Process API"
      },
      {
        "letter": "B",
        "text": "Move the Experience API to a larger CloudHub 2.0 replica"
      },
      {
        "letter": "C",
        "text": "Run it on a customer-hosted runtime near the mainframe"
      },
      {
        "letter": "D",
        "text": "Increase the CloudHub worker size"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Runtime plane location affects latency. A System API that makes many calls to an on-premises system can run on a customer-hosted runtime, such as hybrid or Runtime Fabric, in the same data center, while other layers can run elsewhere.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Caching may help reads but does not reduce latency for every mainframe call."
      },
      "B": {
        "type": "Incorrect",
        "text": "The latency is between the System API and the mainframe."
      },
      "C": {
        "type": "Correct",
        "text": "Running close to the backend avoids the VPN round trips."
      },
      "D": {
        "type": "Incorrect",
        "text": "More CPU does not reduce network latency."
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
        "text": "Manual tests with Postman against production"
      },
      {
        "letter": "B",
        "text": "Load tests against a sandbox environment"
      },
      {
        "letter": "C",
        "text": "MUnit tests with mocked connectors"
      },
      {
        "letter": "D",
        "text": "Anypoint Monitoring alerts in sandbox"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. MUnit is the testing framework for Mule applications. It is best used for unit tests that exercise flows, transformations, and error handling in isolation, with Mock When replacing calls to external systems, so tests run quickly in every build.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Manual production tests are slow and risky."
      },
      "B": {
        "type": "Incorrect",
        "text": "Load tests measure performance, not logic correctness."
      },
      "C": {
        "type": "Correct",
        "text": "MUnit runs flows in isolation, with mocks replacing external calls."
      },
      "D": {
        "type": "Incorrect",
        "text": "Monitoring detects runtime problems, not logic regressions at build time."
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
    "prompt": "Which statement correctly distinguishes unit tests from integration tests for an API implementation?",
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
        "text": "Use Mock When to return a canned response"
      },
      {
        "letter": "B",
        "text": "Skip testing flows that use connectors"
      },
      {
        "letter": "C",
        "text": "Call the production Salesforce org with a test user"
      },
      {
        "letter": "D",
        "text": "Remove the connector from the flow during testing"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. MUnit's Mock When processor intercepts a processor, such as a connector operation, and returns a defined response. This isolates the flow from external systems so tests are fast and repeatable.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The mock replaces the connector call with a controlled result."
      },
      "B": {
        "type": "Incorrect",
        "text": "Connector flows can be unit-tested with mocks."
      },
      "C": {
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
        "text": "Enable Anypoint Monitoring on the build server"
      },
      {
        "letter": "B",
        "text": "Ask reviewers to estimate coverage in code reviews"
      },
      {
        "letter": "C",
        "text": "Apply a policy in API Manager"
      },
      {
        "letter": "D",
        "text": "Set coverage thresholds in the MUnit Maven plugin"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. The MUnit Maven plugin runs tests as part of the Maven build and can generate coverage reports. It can be configured with minimum coverage requirements so that the build fails when coverage is too low.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Monitoring does not measure test coverage."
      },
      "B": {
        "type": "Incorrect",
        "text": "Manual estimates are unreliable and not enforced."
      },
      "C": {
        "type": "Incorrect",
        "text": "Policies govern runtime traffic, not builds."
      },
      "D": {
        "type": "Correct",
        "text": "The plugin can fail the build when coverage is below the threshold."
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
        "text": "Verifying DataWeave transformations"
      },
      {
        "letter": "B",
        "text": "Load testing with thousands of concurrent users"
      },
      {
        "letter": "C",
        "text": "Checking that a flow routes messages correctly"
      },
      {
        "letter": "D",
        "text": "Testing error handling for a failed connector call"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. MUnit tests the logic of Mule applications, including transformations, routing, and error handling. Load and performance testing under high concurrency requires dedicated tools against deployed environments.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "MUnit can assert transformation results."
      },
      "B": {
        "type": "Correct",
        "text": "Load testing needs dedicated performance tools."
      },
      "C": {
        "type": "Incorrect",
        "text": "MUnit can verify routing and processor calls."
      },
      "D": {
        "type": "Incorrect",
        "text": "Mocks can raise errors to test handlers."
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
    "prompt": "Which two MUnit capabilities support unit testing of Mule applications? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Deploying applications to production"
      },
      {
        "letter": "B",
        "text": "Applying rate limiting policies"
      },
      {
        "letter": "C",
        "text": "Mocking processors to return predefined responses"
      },
      {
        "letter": "D",
        "text": "Generating API specifications from flows"
      },
      {
        "letter": "E",
        "text": "Verifying that a processor was called a specific number of times"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Correct answers: C and E. MUnit provides processors for mocking (Mock When), spying, verifying calls (Verify Call), and asserting results, which together enable isolated unit tests of Mule flows.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Deployment is done by Runtime Manager or Maven, not MUnit."
      },
      "B": {
        "type": "Incorrect",
        "text": "Policies are managed in API Manager."
      },
      "C": {
        "type": "Correct",
        "text": "Mocks isolate the flow from external systems."
      },
      "D": {
        "type": "Incorrect",
        "text": "MUnit does not generate specifications."
      },
      "E": {
        "type": "Correct",
        "text": "Verify checks the flow's behavior."
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
        "text": "An integration test"
      },
      {
        "letter": "B",
        "text": "A unit test with every connector mocked"
      },
      {
        "letter": "C",
        "text": "A static analysis scan"
      },
      {
        "letter": "D",
        "text": "A code review of the Mule configuration"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Integration tests run the deployed application against its real dependencies to catch problems that unit tests with mocks cannot, such as incorrect credentials, network rules, or backend behavior.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "It verifies the app with its real dependencies and configuration."
      },
      "B": {
        "type": "Incorrect",
        "text": "Mocks would hide connectivity and credential problems."
      },
      "C": {
        "type": "Incorrect",
        "text": "Static analysis does not call real systems."
      },
      "D": {
        "type": "Incorrect",
        "text": "Reviews do not exercise real connectivity."
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
        "text": "Exchange public portal"
      },
      {
        "letter": "B",
        "text": "API Designer"
      },
      {
        "letter": "C",
        "text": "Anypoint Visualizer"
      },
      {
        "letter": "D",
        "text": "Mule Maven Plugin"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. The Mule Maven Plugin packages Mule applications and deploys them to targets such as CloudHub, CloudHub 2.0, Runtime Fabric, and hybrid servers. It integrates with any CI server that can run Maven.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Portals publish documentation, not applications."
      },
      "B": {
        "type": "Incorrect",
        "text": "API Designer edits specifications."
      },
      "C": {
        "type": "Incorrect",
        "text": "Visualizer shows the network and does not deploy."
      },
      "D": {
        "type": "Correct",
        "text": "It builds and deploys Mule apps from a Maven build."
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
        "text": "Create a client application in Exchange for the pipeline"
      },
      {
        "letter": "B",
        "text": "Disable authentication for deployments"
      },
      {
        "letter": "C",
        "text": "Use a connected app with only the required scopes"
      },
      {
        "letter": "D",
        "text": "Share the administrator's password with every pipeline"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Connected apps let applications such as CI/CD pipelines authenticate to Anypoint Platform with OAuth 2.0 and only the scopes they need, avoiding personal user credentials.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Client apps are for calling APIs, not for platform operations."
      },
      "B": {
        "type": "Incorrect",
        "text": "Unauthenticated deployment is unacceptable."
      },
      "C": {
        "type": "Correct",
        "text": "Connected apps give pipelines scoped credentials not tied to a person."
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
        "text": "Build once; supply environment properties at deploy"
      },
      {
        "letter": "B",
        "text": "Keep separate source branches for each environment"
      },
      {
        "letter": "C",
        "text": "Hard-code all URLs and change them manually in production"
      },
      {
        "letter": "D",
        "text": "Store backend URLs in Exchange asset descriptions"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Mule applications use property placeholders for environment-specific values, with secure properties for sensitive data. Building one artifact and supplying properties at deployment lets the same tested artifact move through all environments.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Externalized configuration lets the same tested artifact be promoted."
      },
      "B": {
        "type": "Incorrect",
        "text": "Divergent branches make releases inconsistent."
      },
      "C": {
        "type": "Incorrect",
        "text": "Manual changes are error-prone and untested."
      },
      "D": {
        "type": "Incorrect",
        "text": "Exchange descriptions are not runtime configuration."
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
        "text": "In API Manager as a policy"
      },
      {
        "letter": "B",
        "text": "Only after deployment to production"
      },
      {
        "letter": "C",
        "text": "Only on developers' laptops, never in CI"
      },
      {
        "letter": "D",
        "text": "In the Maven build, before deployment"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. The MUnit Maven plugin runs tests during the Maven build. Running them in CI before deployment ensures every change is tested and that failing builds are not deployed.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "API Manager does not run tests."
      },
      "B": {
        "type": "Incorrect",
        "text": "Tests must catch defects before production."
      },
      "C": {
        "type": "Incorrect",
        "text": "Local-only tests are not enforced."
      },
      "D": {
        "type": "Correct",
        "text": "Failing tests then stop broken builds from being deployed."
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
        "text": "Use the Anypoint Platform APIs or Anypoint CLI"
      },
      {
        "letter": "C",
        "text": "Publish the policies as API fragments in Exchange"
      },
      {
        "letter": "D",
        "text": "Record a browser macro that clicks through API Manager"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Anypoint Platform exposes its capabilities through platform APIs, and Anypoint CLI provides command-line access. Pipelines can use them to create API instances, apply policies, and manage other configuration consistently.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Policies are managed in API Manager, not the build file."
      },
      "B": {
        "type": "Correct",
        "text": "Platform APIs and the CLI expose API Manager operations for automation."
      },
      "C": {
        "type": "Incorrect",
        "text": "Fragments describe APIs; they do not apply policies."
      },
      "D": {
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
    "prompt": "Which two practices support automated building and sharing of API-related artifacts? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Publishing API specifications and fragments to Exchange with Maven"
      },
      {
        "letter": "B",
        "text": "Skipping MUnit tests to speed up deployments"
      },
      {
        "letter": "C",
        "text": "Emailing JAR files to the operations team"
      },
      {
        "letter": "D",
        "text": "Editing production configuration directly in Runtime Manager"
      },
      {
        "letter": "E",
        "text": "Deploying applications with the Mule Maven Plugin from CI"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Correct answers: A and E. In a DevOps setting, Maven-based builds can run MUnit tests, publish assets to Exchange, and deploy applications with the Mule Maven Plugin, giving repeatable and traceable delivery.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Assets can be published to Exchange from automated builds."
      },
      "B": {
        "type": "Incorrect",
        "text": "Skipping tests reduces quality and is not good practice."
      },
      "C": {
        "type": "Incorrect",
        "text": "Manual handoffs are not automated or traceable."
      },
      "D": {
        "type": "Incorrect",
        "text": "Manual production edits bypass the pipeline."
      },
      "E": {
        "type": "Correct",
        "text": "CI can deploy applications consistently."
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
    "prompt": "A CloudHub application runs a long batch job. The team learns that if the application is redeployed during the job, the remaining records are not processed. Which CloudHub feature is recommended for persisting state so processing can resume?",
    "options": [
      {
        "letter": "A",
        "text": "Persistent queues"
      },
      {
        "letter": "B",
        "text": "The worker's local disk"
      },
      {
        "letter": "C",
        "text": "A larger worker size"
      },
      {
        "letter": "D",
        "text": "Object Store v2"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. On CloudHub, batch jobs run on a single worker. If the application is updated or redeployed while a batch is running, the rest of the batch does not continue. MuleSoft's documentation recommends Object Store v2 (Cloud Object Store) for persisting such state.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Persistent queues distribute messages between workers but do not preserve batch job state across redeployment."
      },
      "B": {
        "type": "Incorrect",
        "text": "Local worker storage is replaced when the application is redeployed."
      },
      "C": {
        "type": "Incorrect",
        "text": "More memory does not keep state when an application is redeployed."
      },
      "D": {
        "type": "Correct",
        "text": "Object Store v2 is MuleSoft's recommended store for persisting batch state on CloudHub."
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
        "text": "In a persistent VM queue"
      },
      {
        "letter": "B",
        "text": "In Object Store v2"
      },
      {
        "letter": "C",
        "text": "In the application's properties file"
      },
      {
        "letter": "D",
        "text": "In an in-memory object store on each worker"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Persistent object stores on CloudHub are backed by Object Store v2, which keeps data outside individual workers. All workers of the application can read and update the same keys, and the data survives worker restarts.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Queues pass messages; they are not key-value storage for a watermark."
      },
      "B": {
        "type": "Correct",
        "text": "Object Store v2 is shared by all workers of the application."
      },
      "C": {
        "type": "Incorrect",
        "text": "Properties are static configuration, not changing runtime state."
      },
      "D": {
        "type": "Incorrect",
        "text": "Each worker would keep its own value, which is lost on restart."
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
        "text": "(1) Local disk; (2) a flow variable"
      },
      {
        "letter": "B",
        "text": "(1) Object Store v2; (2) persistent queues"
      },
      {
        "letter": "C",
        "text": "(1) Persistent queues; (2) Object Store v2"
      },
      {
        "letter": "D",
        "text": "(1) Anypoint Monitoring; (2) Runtime Manager properties"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. On CloudHub, persistent queues provide durable, distributed messaging between workers, while Object Store v2 provides persistent key-value storage for state such as cached tokens, watermarks, and duplicate detection.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Local disk is not shared, and variables are lost after each event."
      },
      "B": {
        "type": "Incorrect",
        "text": "These are reversed; queues are not a key-value cache."
      },
      "C": {
        "type": "Correct",
        "text": "Queues distribute work durably; Object Store holds key-value state."
      },
      "D": {
        "type": "Incorrect",
        "text": "Neither is a messaging or caching mechanism."
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
        "text": "Proceed, but use the in-memory object store for durability"
      },
      {
        "letter": "B",
        "text": "Proceed, because entries never expire"
      },
      {
        "letter": "C",
        "text": "Store the records in persistent queues instead"
      },
      {
        "letter": "D",
        "text": "Use a database; Object Store v2 entries have a limited TTL"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Object Store v2 is designed for application state such as caching, watermarks, and deduplication, and its entries have a maximum time-to-live. Long-term records such as audit data belong in a database or archive.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "In-memory stores are less durable."
      },
      "B": {
        "type": "Incorrect",
        "text": "Object Store v2 entries expire after their time-to-live."
      },
      "C": {
        "type": "Incorrect",
        "text": "Persistent queue messages are retained for only a few days."
      },
      "D": {
        "type": "Correct",
        "text": "Object Store v2 is for transient state, not multi-year retention."
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
        "text": "Track processed IDs in Object Store v2"
      },
      {
        "letter": "B",
        "text": "Use a 0.1 vCore worker to slow processing"
      },
      {
        "letter": "C",
        "text": "Increase the number of workers"
      },
      {
        "letter": "D",
        "text": "Disable automatic restarts"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. CloudHub persistent queues may deliver a message more than once. When one-time processing matters, the application should record processed IDs in a shared persistent store such as Object Store v2 and ignore repeats.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "A shared store lets every worker detect duplicates."
      },
      "B": {
        "type": "Incorrect",
        "text": "Slower processing does not prevent duplicates."
      },
      "C": {
        "type": "Incorrect",
        "text": "More workers do not prevent duplicate delivery."
      },
      "D": {
        "type": "Incorrect",
        "text": "Restarts do not cause the duplicate deliveries described."
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
    "prompt": "Which two are appropriate uses of Object Store v2 for a CloudHub application? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Hosting large files for permanent archival"
      },
      {
        "letter": "B",
        "text": "Persisting state needed to resume processing after a redeploy"
      },
      {
        "letter": "C",
        "text": "Replacing the CRM as the system of record"
      },
      {
        "letter": "D",
        "text": "Load balancing HTTP requests between workers"
      },
      {
        "letter": "E",
        "text": "Caching reference data shared by all workers of the application"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Correct answers: B and E. Object Store v2 provides persistent key-value storage shared by an application's workers. It suits caching, watermarks, deduplication, and resumable processing state, but not file archiving or system-of-record data.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Object Store v2 is not a file archive."
      },
      "B": {
        "type": "Correct",
        "text": "Object Store v2 keeps state outside the worker."
      },
      "C": {
        "type": "Incorrect",
        "text": "Object Store is not a system of record."
      },
      "D": {
        "type": "Incorrect",
        "text": "Load balancing is done by the CloudHub load balancer."
      },
      "E": {
        "type": "Correct",
        "text": "All workers can read the same cached keys."
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
        "text": "Add a second 0.2 vCore worker only"
      },
      {
        "letter": "B",
        "text": "Deploy to a different region"
      },
      {
        "letter": "C",
        "text": "1 vCore or larger workers"
      },
      {
        "letter": "D",
        "text": "Enable persistent queues"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. CloudHub 0.1 and 0.2 vCore workers provide limited CPU and I/O and can burst to higher speeds only for short periods. For consistent performance, MuleSoft recommends workers with 1 or more vCores.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Fractional workers still provide limited, burstable CPU."
      },
      "B": {
        "type": "Incorrect",
        "text": "Region does not change the worker's CPU characteristics."
      },
      "C": {
        "type": "Correct",
        "text": "Workers of 1 vCore or more provide consistent performance."
      },
      "D": {
        "type": "Incorrect",
        "text": "Queues do not change CPU performance."
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
        "text": "Enable persistent queues"
      },
      {
        "letter": "B",
        "text": "Add more 1 vCore workers"
      },
      {
        "letter": "C",
        "text": "Increase the worker size"
      },
      {
        "letter": "D",
        "text": "Apply the Spike Control policy"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Each CloudHub worker size has a fixed amount of memory and heap. When individual requests need more memory, vertical scaling to a larger worker is required; adding workers increases concurrency but not per-request memory.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Queues do not add memory for the transformation."
      },
      "B": {
        "type": "Incorrect",
        "text": "Each request still runs on a worker with the same memory."
      },
      "C": {
        "type": "Correct",
        "text": "A larger worker provides more memory for each request."
      },
      "D": {
        "type": "Incorrect",
        "text": "Traffic shaping does not change available memory."
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
        "text": "One worker with automatic restarts"
      },
      {
        "letter": "C",
        "text": "One worker with persistent queues"
      },
      {
        "letter": "D",
        "text": "At least two workers"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. CloudHub distributes multiple workers for the same application across two or more data centers. Deploying at least two workers allows the load balancer to keep serving requests if one worker or data center fails.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A single worker is still a single point of failure."
      },
      "B": {
        "type": "Incorrect",
        "text": "Restarts recover the worker but cause downtime."
      },
      "C": {
        "type": "Incorrect",
        "text": "Queues protect messages but do not keep the API available."
      },
      "D": {
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
        "text": "Enable automatic restarts"
      },
      {
        "letter": "B",
        "text": "Reduce the worker size"
      },
      {
        "letter": "C",
        "text": "Disable Anypoint Monitoring"
      },
      {
        "letter": "D",
        "text": "Enable persistent queues"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. CloudHub monitors workers and, when automatic restarts are enabled, restarts applications that stop responding. This improves availability but does not replace fixing the underlying defect.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "CloudHub restarts the application when it detects a problem."
      },
      "B": {
        "type": "Incorrect",
        "text": "A smaller worker would fail sooner."
      },
      "C": {
        "type": "Incorrect",
        "text": "Monitoring does not cause or fix the issue."
      },
      "D": {
        "type": "Incorrect",
        "text": "Queues do not restart unresponsive applications."
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
    "prompt": "A CloudHub application receives large files and splits them into records for processing. The team adds workers but sees that only one worker does the work. What should be enabled so that records are processed across workers?",
    "options": [
      {
        "letter": "A",
        "text": "Automatic restarts"
      },
      {
        "letter": "B",
        "text": "Persistent queues"
      },
      {
        "letter": "C",
        "text": "A larger worker size"
      },
      {
        "letter": "D",
        "text": "A new region"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. CloudHub's HTTP load balancer distributes requests, but work produced inside one worker stays there unless it is handed off. Persistent queues let workers share work items and also protect them from loss if a worker fails.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Restarts do not distribute work."
      },
      "B": {
        "type": "Correct",
        "text": "Persistent queues distribute work across workers."
      },
      "C": {
        "type": "Incorrect",
        "text": "A bigger worker does not distribute work."
      },
      "D": {
        "type": "Incorrect",
        "text": "Deploying elsewhere does not distribute work within the application."
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
    "prompt": "Which two statements about CloudHub workers are correct? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Each worker runs in a separate container"
      },
      {
        "letter": "B",
        "text": "All workers in a region share one JVM"
      },
      {
        "letter": "C",
        "text": "Fractional workers guarantee consistent CPU under load"
      },
      {
        "letter": "D",
        "text": "Only stopped applications count toward vCore usage"
      },
      {
        "letter": "E",
        "text": "Worker size determines the memory and heap available"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Correct answers: A and E. CloudHub workers are dedicated Mule runtime instances, each in its own container, deployed and monitored independently. Worker sizes define compute, memory, heap, and disk. Only running applications count toward worker usage.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Workers are isolated from other applications."
      },
      "B": {
        "type": "Incorrect",
        "text": "Each worker is a separate Mule runtime instance."
      },
      "C": {
        "type": "Incorrect",
        "text": "Fractional workers are burstable and not consistent."
      },
      "D": {
        "type": "Incorrect",
        "text": "Only running applications count toward usage."
      },
      "E": {
        "type": "Correct",
        "text": "Each size has defined memory, heap, and disk."
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
        "text": "The application stays down until an administrator redeploys it"
      },
      {
        "letter": "B",
        "text": "CloudHub migrates the app to a new worker, with some downtime"
      },
      {
        "letter": "C",
        "text": "The application moves to another region automatically"
      },
      {
        "letter": "D",
        "text": "Traffic continues on a hidden standby worker with no interruption"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. CloudHub monitors the worker cloud and migrates an application to a new worker if the underlying hardware fails. With only one worker, the application is unavailable until the replacement starts; multiple workers avoid this gap.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "CloudHub recovers the worker automatically."
      },
      "B": {
        "type": "Correct",
        "text": "Intelligent healing replaces the worker, but one worker means a gap."
      },
      "C": {
        "type": "Incorrect",
        "text": "Recovery happens within the region."
      },
      "D": {
        "type": "Incorrect",
        "text": "A single-worker app has no standby."
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
    "prompt": "An API is deployed to two workers in one CloudHub region. What happens if the entire region becomes unavailable?",
    "options": [
      {
        "letter": "A",
        "text": "Requests are queued by the load balancer until recovery"
      },
      {
        "letter": "B",
        "text": "CloudHub moves the workers to another region automatically"
      },
      {
        "letter": "C",
        "text": "CloudHub moves it to a new worker after a short outage"
      },
      {
        "letter": "D",
        "text": "The second worker keeps serving from a different region"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. CloudHub spreads an application's workers across data centers within a region, but the application and its load balancer are regional. Protection against a region outage requires deploying the application in another region and routing traffic there, for example with customer-managed DNS.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The regional load balancer is also affected."
      },
      "B": {
        "type": "Incorrect",
        "text": "CloudHub does not fail applications over between regions."
      },
      "C": {
        "type": "Correct",
        "text": "Workers and their load balancer live in one region."
      },
      "D": {
        "type": "Incorrect",
        "text": "Both workers are in the same region."
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
        "text": "A single dedicated load balancer spanning both regions"
      },
      {
        "letter": "B",
        "text": "Nothing; myapp.cloudhub.io resolves to both regions"
      },
      {
        "letter": "C",
        "text": "Persistent queues shared between the two regions"
      },
      {
        "letter": "D",
        "text": "It is down unless deployed in another region too"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Applications in different CloudHub regions are separate deployments with region-specific domains. Routing clients between regions requires an external mechanism such as a global DNS service with health checks, and any shared state must be replicated by the design.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A DLB belongs to one VPC in one region."
      },
      "B": {
        "type": "Incorrect",
        "text": "Each region has its own application domain."
      },
      "C": {
        "type": "Incorrect",
        "text": "Persistent queues are regional."
      },
      "D": {
        "type": "Correct",
        "text": "CloudHub does not route traffic between regions itself."
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
        "text": "The update is queued until the next maintenance window"
      },
      {
        "letter": "B",
        "text": "A customer-managed global DNS with health checks"
      },
      {
        "letter": "C",
        "text": "Both versions process every request in parallel"
      },
      {
        "letter": "D",
        "text": "All requests fail for several minutes during deployment"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. CloudHub supports zero-downtime updates: while the new version is deploying, the existing version continues to serve requests, and traffic switches over when the new version is running.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Deployments run when requested."
      },
      "B": {
        "type": "Correct",
        "text": "CloudHub performs zero-downtime updates."
      },
      "C": {
        "type": "Incorrect",
        "text": "Requests are served by one version at a time."
      },
      "D": {
        "type": "Incorrect",
        "text": "CloudHub keeps the old version running during the update."
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
    "prompt": "Most consumers of a CloudHub API and its backend systems are in Frankfurt, but the API is deployed to US East. Users report high latency. What is the best improvement?",
    "options": [
      {
        "letter": "A",
        "text": "Enable persistent queues"
      },
      {
        "letter": "B",
        "text": "Increase the worker size in US East"
      },
      {
        "letter": "C",
        "text": "Add more workers in US East"
      },
      {
        "letter": "D",
        "text": "No downtime; old version serves"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. CloudHub offers worker clouds in several regions. The region determines where workers and their load balancer run, so deploying close to consumers and backend systems reduces network latency.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Queues do not reduce request latency."
      },
      "B": {
        "type": "Incorrect",
        "text": "CPU does not reduce cross-Atlantic latency."
      },
      "C": {
        "type": "Incorrect",
        "text": "More workers do not shorten the network distance."
      },
      "D": {
        "type": "Correct",
        "text": "Deploying near consumers and backends reduces network round trips."
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
    "prompt": "Which two statements describe the reliability of applications in the CloudHub shared worker cloud? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Persistent queues guarantee one-time-only delivery"
      },
      {
        "letter": "B",
        "text": "Single-worker apps never experience downtime"
      },
      {
        "letter": "C",
        "text": "Multiple workers of an app are spread across data centers"
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
    "explanation": "Correct answers: C and E. CloudHub platform services are redundant across at least two data centers, and multiple workers of an application are distributed across data centers. Cross-region failover is not automatic, and persistent queues may deliver duplicates.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Persistent queues may deliver duplicates."
      },
      "B": {
        "type": "Incorrect",
        "text": "Single-worker apps are down while a worker is replaced."
      },
      "C": {
        "type": "Correct",
        "text": "This protects against a single data center failure."
      },
      "D": {
        "type": "Incorrect",
        "text": "Cross-region failover requires customer design."
      },
      "E": {
        "type": "Correct",
        "text": "CloudHub services are available in at least two data centers."
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
        "text": "A dedicated load balancer"
      },
      {
        "letter": "B",
        "text": "The shared load balancer"
      },
      {
        "letter": "C",
        "text": "A persistent queue"
      },
      {
        "letter": "D",
        "text": "The Runtime Manager agent"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. The CloudHub shared load balancer exposes applications at their cloudhub.io domain with MuleSoft-provided certificates. A dedicated load balancer, configured in an Anypoint VPC, lets organizations use their own certificates and domains.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "DLBs serve custom certificates and domains."
      },
      "B": {
        "type": "Incorrect",
        "text": "It uses the cloudhub.io domain and MuleSoft's certificate."
      },
      "C": {
        "type": "Incorrect",
        "text": "Queues are not load balancers."
      },
      "D": {
        "type": "Incorrect",
        "text": "The agent handles management communication, not traffic."
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
        "text": "Dedicated load balancer mapping rules"
      },
      {
        "letter": "B",
        "text": "Three API instances with the same name"
      },
      {
        "letter": "C",
        "text": "The shared load balancer's default routing"
      },
      {
        "letter": "D",
        "text": "One application per worker size"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Dedicated load balancers support mapping rules that translate incoming URLs to specific CloudHub applications and paths, so a single domain can front several applications.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Mapping rules route URL paths to different applications."
      },
      "B": {
        "type": "Incorrect",
        "text": "API Manager instances do not route URLs."
      },
      "C": {
        "type": "Incorrect",
        "text": "It routes each app by its own subdomain."
      },
      "D": {
        "type": "Incorrect",
        "text": "Worker size does not affect routing."
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
        "text": "Persistent queues with encryption"
      },
      {
        "letter": "B",
        "text": "Automatic restarts"
      },
      {
        "letter": "C",
        "text": "An allowlist on a dedicated load balancer"
      },
      {
        "letter": "D",
        "text": "The shared load balancer with a DNS alias"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Dedicated load balancers support allowlists that restrict which client IP addresses can reach them, so unwanted traffic is rejected at the edge. The shared load balancer does not offer customer-specific allowlists.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Queues do not filter client IPs."
      },
      "B": {
        "type": "Incorrect",
        "text": "Restarts do not restrict access."
      },
      "C": {
        "type": "Correct",
        "text": "DLBs can allow only specified client IP ranges."
      },
      "D": {
        "type": "Incorrect",
        "text": "The shared load balancer has no customer allowlists."
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
        "text": "8092"
      },
      {
        "letter": "D",
        "text": "8082"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. The shared load balancer forwards http://myapp.cloudhub.io to the worker's port 8081 and HTTPS on 443 to port 8082. Dedicated load balancers route to ports 8091 (HTTP) and 8092 (HTTPS) inside the VPC.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "8081 receives HTTP traffic from the shared load balancer."
      },
      "B": {
        "type": "Incorrect",
        "text": "443 is the external port; the worker listens on 8082."
      },
      "C": {
        "type": "Incorrect",
        "text": "Port 8092 is used for HTTPS traffic from a dedicated load balancer."
      },
      "D": {
        "type": "Correct",
        "text": "The shared load balancer forwards HTTPS traffic to port 8082."
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
    "prompt": "Which two capabilities does a dedicated load balancer provide that the shared load balancer does not? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Load balancing without an Anypoint VPC"
      },
      {
        "letter": "B",
        "text": "Custom SSL certificates"
      },
      {
        "letter": "C",
        "text": "Distribution of requests across an app's workers"
      },
      {
        "letter": "D",
        "text": "Access to applications over HTTPS"
      },
      {
        "letter": "E",
        "text": "URL mapping rules to multiple applications"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Correct answers: B and E. Both load balancers distribute HTTP and HTTPS traffic across an application's workers. Dedicated load balancers, which run in an Anypoint VPC, add custom certificates, mapping rules, and allowlists.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "DLBs require an Anypoint VPC."
      },
      "B": {
        "type": "Correct",
        "text": "DLBs serve the organization's certificates."
      },
      "C": {
        "type": "Incorrect",
        "text": "Both load balancers distribute requests across workers."
      },
      "D": {
        "type": "Incorrect",
        "text": "The shared load balancer also supports HTTPS."
      },
      "E": {
        "type": "Correct",
        "text": "DLBs can route paths to different apps."
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
        "text": "Public internet access to the database"
      },
      {
        "letter": "B",
        "text": "The shared load balancer"
      },
      {
        "letter": "C",
        "text": "An IPsec VPN to the on-premises data center"
      },
      {
        "letter": "D",
        "text": "Peer the Anypoint VPC with the AWS VPC"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. An Anypoint VPC can connect to a customer's AWS VPC through VPC peering, or via other methods such as Direct Connect or transit gateway, so CloudHub workers reach AWS resources over private addresses.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "This exposes the databases publicly."
      },
      "B": {
        "type": "Incorrect",
        "text": "The load balancer handles inbound traffic, not private outbound access."
      },
      "C": {
        "type": "Incorrect",
        "text": "The databases are in AWS, not on premises."
      },
      "D": {
        "type": "Correct",
        "text": "Peering connects the two VPCs privately."
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
        "text": "VPC peering with the data center"
      },
      {
        "letter": "B",
        "text": "A dedicated load balancer in the data center"
      },
      {
        "letter": "C",
        "text": "An Anypoint IPsec VPN"
      },
      {
        "letter": "D",
        "text": "Exchange public portal access"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. An Anypoint VPN creates IPsec tunnels between an Anypoint VPC and an on-premises network, extending the corporate network so CloudHub workers can reach internal systems.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Peering connects AWS VPCs, not on-premises networks."
      },
      "B": {
        "type": "Incorrect",
        "text": "DLBs run in the Anypoint VPC."
      },
      "C": {
        "type": "Correct",
        "text": "VPN tunnels connect the Anypoint VPC to on-premises networks."
      },
      "D": {
        "type": "Incorrect",
        "text": "Portals do not create network connectivity."
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
        "text": "Create a separate VPC peering for every AWS VPC"
      },
      {
        "letter": "B",
        "text": "Attach the Anypoint VPC to the Transit Gateway"
      },
      {
        "letter": "C",
        "text": "Create a VPN to every AWS VPC"
      },
      {
        "letter": "D",
        "text": "Route all traffic over the public internet"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Anypoint VPC supports transit gateway attachments. When a company already uses an AWS Transit Gateway as a hub, attaching the Anypoint VPC to it gives CloudHub access to the connected VPCs and data centers.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Many peerings are harder to manage at scale."
      },
      "B": {
        "type": "Correct",
        "text": "A transit gateway attachment reaches all connected networks."
      },
      "C": {
        "type": "Incorrect",
        "text": "Many tunnels add complexity."
      },
      "D": {
        "type": "Incorrect",
        "text": "This loses private connectivity."
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
        "text": "AWS Direct Connect to the Anypoint VPC"
      },
      {
        "letter": "B",
        "text": "Larger CloudHub workers"
      },
      {
        "letter": "C",
        "text": "A second shared load balancer"
      },
      {
        "letter": "D",
        "text": "VPC peering directly with the data center"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Anypoint VPC supports AWS Direct Connect, which provides a dedicated private connection with more consistent network performance than VPN tunnels over the internet.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Direct Connect provides a dedicated private link."
      },
      "B": {
        "type": "Incorrect",
        "text": "Worker size does not change network connectivity."
      },
      "C": {
        "type": "Incorrect",
        "text": "Load balancers do not provide private links."
      },
      "D": {
        "type": "Incorrect",
        "text": "Peering applies to AWS VPCs, not data centers."
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
    "prompt": "Which two methods can connect an Anypoint VPC to customer networks? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "API Manager SLA tiers"
      },
      {
        "letter": "B",
        "text": "Exchange private portals"
      },
      {
        "letter": "C",
        "text": "Persistent queues"
      },
      {
        "letter": "D",
        "text": "IPsec VPN tunnels"
      },
      {
        "letter": "E",
        "text": "VPC peering with a customer AWS VPC"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Correct answers: D and E. Anypoint VPC connectivity options include IPsec VPN, transit gateway attachments, VPC peering, and AWS Direct Connect, which extend customer networks to CloudHub workers.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "SLA tiers govern API access, not networks."
      },
      "B": {
        "type": "Incorrect",
        "text": "Portals are documentation, not networking."
      },
      "C": {
        "type": "Incorrect",
        "text": "Queues are a messaging feature."
      },
      "D": {
        "type": "Correct",
        "text": "VPNs connect to on-premises networks."
      },
      "E": {
        "type": "Correct",
        "text": "Peering connects to customer AWS VPCs."
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
        "text": "Add more workers in the same region"
      },
      {
        "letter": "B",
        "text": "Enable persistent queues"
      },
      {
        "letter": "C",
        "text": "The database server"
      },
      {
        "letter": "D",
        "text": "Increase the worker size"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Anypoint VPN supports high-availability designs with redundant tunnels and connections. Using redundant VPNs and customer gateway devices avoids a single point of failure in on-premises connectivity.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Workers still depend on the same VPN."
      },
      "B": {
        "type": "Incorrect",
        "text": "Queues do not provide network redundancy."
      },
      "C": {
        "type": "Correct",
        "text": "Redundant tunnels and gateways keep connectivity if one fails."
      },
      "D": {
        "type": "Incorrect",
        "text": "Workers are not the failing component."
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
        "text": "The database is still a single point of failure"
      },
      {
        "letter": "B",
        "text": "The workers will cache all data if the database fails"
      },
      {
        "letter": "C",
        "text": "CloudHub will fail the database over automatically"
      },
      {
        "letter": "D",
        "text": "Three workers make the whole solution highly available"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. End-to-end availability depends on every component in the request path. Even with multiple workers, a single non-redundant backend remains a single point of failure, which needs its own redundancy or fallback.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Scaling the API does not protect against the database failing."
      },
      "B": {
        "type": "Incorrect",
        "text": "No caching is described in the design."
      },
      "C": {
        "type": "Incorrect",
        "text": "CloudHub does not manage customer databases."
      },
      "D": {
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
        "text": "Larger workers in the same region"
      },
      {
        "letter": "B",
        "text": "Persistent queues in the same region"
      },
      {
        "letter": "C",
        "text": "Deploy to a second region"
      },
      {
        "letter": "D",
        "text": "Four more workers in the same region"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Multiple workers in one region protect against data-center failures, but the region itself is a single point of failure. A second deployment in another region with a failover mechanism, such as DNS-based routing, removes it.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Size does not change regional dependency."
      },
      "B": {
        "type": "Incorrect",
        "text": "Queues are regional too."
      },
      "C": {
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
    "prompt": "Which two changes remove single points of failure in a CloudHub deployment? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Disabling automatic restarts"
      },
      {
        "letter": "B",
        "text": "Placing all apps on the same single worker size"
      },
      {
        "letter": "C",
        "text": "Using one larger worker instead of two smaller ones"
      },
      {
        "letter": "D",
        "text": "Running at least two workers per application"
      },
      {
        "letter": "E",
        "text": "Using redundant VPN connections to the data center"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Correct answers: D and E. Avoiding single points of failure means adding redundancy at every layer: multiple workers per application, redundant network connections, redundant backends, and, if required, multiple regions.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "This reduces resilience."
      },
      "B": {
        "type": "Incorrect",
        "text": "Worker size is unrelated to redundancy."
      },
      "C": {
        "type": "Incorrect",
        "text": "This creates a single point of failure."
      },
      "D": {
        "type": "Correct",
        "text": "Workers are spread across data centers."
      },
      "E": {
        "type": "Correct",
        "text": "Connectivity survives the loss of one tunnel."
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
        "text": "Apply the HTTP Caching policy to the API with a one-hour time-to-live"
      },
      {
        "letter": "B",
        "text": "Scale the System API to more workers so it can respond faster to each call"
      },
      {
        "letter": "C",
        "text": "Apply a Spike Control policy so that requests are queued during busy periods"
      },
      {
        "letter": "D",
        "text": "Ask every consumer to poll the API less frequently than once an hour"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. When data changes infrequently and consumers tolerate some staleness, caching responses is the most effective way to improve response time and reduce backend load. The HTTP Caching policy can be applied in API Manager without changing the implementation, and its time-to-live should match how stale the data may be.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The policy caches responses at the gateway, so repeated requests skip the slow backend without code changes."
      },
      "B": {
        "type": "Incorrect",
        "text": "More workers add capacity but do not make each slow backend call faster."
      },
      "C": {
        "type": "Incorrect",
        "text": "Spike Control smooths traffic peaks; it does not avoid calling the slow backend."
      },
      "D": {
        "type": "Incorrect",
        "text": "Relying on consumers to change their behavior is unenforceable and does not speed up responses."
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
        "text": "A Country Codes API whose data changes a few times per year"
      },
      {
        "letter": "B",
        "text": "An Account Balance API used for payments"
      },
      {
        "letter": "C",
        "text": "A Product Images API that serves static content to many clients"
      },
      {
        "letter": "D",
        "text": "A Store Locations API that is updated weekly and read constantly"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Caching trades freshness for performance. It is appropriate for data that changes rarely or where consumers tolerate staleness, and inappropriate where every response must reflect the latest state, such as account balances used for payments.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Rarely changing reference data is an ideal caching candidate."
      },
      "B": {
        "type": "Correct",
        "text": "Caching would return stale balances, which breaks the requirement for current data."
      },
      "C": {
        "type": "Incorrect",
        "text": "Static content can be cached safely and greatly reduces load."
      },
      "D": {
        "type": "Incorrect",
        "text": "Read-heavy data with weekly updates benefits from caching with a suitable TTL."
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
        "text": "In a persistent object store (Object Store v2)"
      },
      {
        "letter": "B",
        "text": "In an in-memory object store on each worker"
      },
      {
        "letter": "C",
        "text": "In a flow variable that is set at the end of each run"
      },
      {
        "letter": "D",
        "text": "In a file written to the worker's local disk"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. On CloudHub, persistent object stores are backed by Object Store v2, which keeps data outside individual workers. This lets the stored values, such as watermarks, survive restarts and be shared by all workers of the same application, unlike variables, in-memory stores, or local files.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Object Store v2 persists data outside the worker and makes it available to all workers of the application."
      },
      "B": {
        "type": "Incorrect",
        "text": "In-memory stores are lost on restart and are not shared between workers."
      },
      "C": {
        "type": "Incorrect",
        "text": "Variables exist only for one event and are lost when the flow finishes."
      },
      "D": {
        "type": "Incorrect",
        "text": "Local worker storage is not shared and should not be relied on across restarts or redeployments."
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
        "text": "Avoid caching because a Process API cannot cache downstream results"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. The HTTP Caching policy caches whole API responses at the gateway, which suits APIs whose entire response can be reused. When only one downstream call in an implementation is cacheable, the Cache scope can cache that part of the flow, using a key such as the region, while the rest of the flow runs on every request.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The customer-specific data is real-time and must not be cached for a month."
      },
      "B": {
        "type": "Correct",
        "text": "A Cache scope caches the result of part of a flow, so only the stable call is cached."
      },
      "C": {
        "type": "Incorrect",
        "text": "Caching entire responses would also serve stale customer-specific, real-time data."
      },
      "D": {
        "type": "Incorrect",
        "text": "Mule applications can cache downstream results with the Cache scope."
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
        "text": "Apply the HTTP Caching policy so duplicate requests get the same response"
      },
      {
        "letter": "B",
        "text": "Store processed IDs in a variable on each worker"
      },
      {
        "letter": "C",
        "text": "Reduce the client timeout so that clients never retry"
      },
      {
        "letter": "D",
        "text": "Store processed IDs in a persistent object store"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Detecting duplicates requires remembering which unique IDs have already been processed, in a store shared by all instances. A persistent object store, backed by Object Store v2 on CloudHub, can hold these IDs so that any worker can recognize and reject a repeated request.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Caching is for safe, reusable responses; POST payment requests should not be cached."
      },
      "B": {
        "type": "Incorrect",
        "text": "Variables are per event and per worker, so duplicates on another worker are not detected."
      },
      "C": {
        "type": "Incorrect",
        "text": "Shorter timeouts make retries more likely, not less."
      },
      "D": {
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
        "text": "Apply rate limiting to the Process API so that it does not fail"
      },
      {
        "letter": "B",
        "text": "Return HTTP 500 to the app and let the user try again later"
      },
      {
        "letter": "C",
        "text": "Cache each good response and return it on failure"
      },
      {
        "letter": "D",
        "text": "Retry the Process API indefinitely until it responds"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. A fallback is a resilience strategy in which an API client returns an alternative result when an invocation fails. Saving successful responses in an object store and returning the cached value when the downstream API fails lets the client keep working with acceptably stale data.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Rate limiting protects against overload but does not provide data when the API is unavailable."
      },
      "B": {
        "type": "Incorrect",
        "text": "This is the error experience the business wants to avoid."
      },
      "C": {
        "type": "Correct",
        "text": "The last good response can serve as a fallback result when the Process API cannot be reached."
      },
      "D": {
        "type": "Incorrect",
        "text": "Unlimited retries make the client wait or fail instead of returning a usable result."
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
        "text": "Proceed, but use an in-memory object store for better durability"
      },
      {
        "letter": "B",
        "text": "Use a database; Object Store v2 entries have a limited TTL"
      },
      {
        "letter": "C",
        "text": "Proceed, because Object Store v2 retains entries forever unless they are deleted"
      },
      {
        "letter": "D",
        "text": "Store the preferences in application properties so they are always available"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Object Store v2 is intended for application state such as caching, watermarks, and deduplication. Its entries have a maximum time-to-live, so it is not suitable as a permanent system of record. Long-lived business data such as customer preferences belongs in a database or other system of record.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "In-memory stores are less durable, not more."
      },
      "B": {
        "type": "Correct",
        "text": "Object Store v2 is designed for transient state such as caches and watermarks, not long-term records."
      },
      "C": {
        "type": "Incorrect",
        "text": "Object Store v2 enforces a time-to-live on stored entries, so data is not retained indefinitely."
      },
      "D": {
        "type": "Incorrect",
        "text": "Properties are configuration, not a store for frequently changing business data."
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
    "prompt": "Which two scenarios are appropriate uses of a persistent object store in a Mule application deployed to CloudHub? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Storing large binary documents for long-term archiving"
      },
      {
        "letter": "B",
        "text": "Replacing the CRM as the master record of customer accounts"
      },
      {
        "letter": "C",
        "text": "Running complex relational queries for reporting"
      },
      {
        "letter": "D",
        "text": "Keeping a watermark for incremental polling of a database"
      },
      {
        "letter": "E",
        "text": "Caching access tokens for a downstream API until they expire"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Correct answers: D and E. Object stores are key-value stores for application state. Common uses include watermarks, caching values such as tokens or reference data, and duplicate detection. They are not designed for large binary documents, long-term records, or relational reporting.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Object Store v2 is not designed for large files or long-term retention."
      },
      "B": {
        "type": "Incorrect",
        "text": "An object store is not a system of record for business data."
      },
      "C": {
        "type": "Incorrect",
        "text": "Object stores are key-value stores and do not support relational queries."
      },
      "D": {
        "type": "Correct",
        "text": "Watermarks are small, transient state values that must survive restarts."
      },
      "E": {
        "type": "Correct",
        "text": "Tokens are short-lived values that are expensive to request and safe to cache until expiry."
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
        "text": "The cache will never return a hit because the path changes on every request"
      },
      {
        "letter": "B",
        "text": "Responses will be cached forever because the policy has no expiration setting"
      },
      {
        "letter": "C",
        "text": "Customers may receive another customer's cached recommendations"
      },
      {
        "letter": "D",
        "text": "The policy will cache only POST requests, so GET requests are unaffected"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. A cache key must include every input that changes the response. For personalized responses, the key must include the customer's identity or the response should not be cached; otherwise one customer's response can be served to another. The HTTP Caching policy allows a custom key expression for this purpose.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The path is the same for all customers, so the cache will return hits, which is the problem."
      },
      "B": {
        "type": "Incorrect",
        "text": "The policy supports a time-to-live setting."
      },
      "C": {
        "type": "Correct",
        "text": "Requests with the same path share one cache entry, so personalized data can leak between users."
      },
      "D": {
        "type": "Incorrect",
        "text": "The policy is typically used with GET responses and would cache them."
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
        "text": "Reduce the cache time-to-live to five minutes or less"
      },
      {
        "letter": "B",
        "text": "Remove caching entirely so that every request goes to the backend"
      },
      {
        "letter": "C",
        "text": "Keep the 24-hour TTL and ask users to refresh their browsers"
      },
      {
        "letter": "D",
        "text": "Scale the backend horizontally so the cache is refreshed faster"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. The time-to-live of a cache entry determines how stale data can become. To meet a five-minute freshness requirement while retaining most of the performance benefit, the TTL should be reduced to five minutes or less instead of disabling caching.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The TTL defines the maximum staleness, so it must not exceed the freshness requirement."
      },
      "B": {
        "type": "Incorrect",
        "text": "This meets freshness but gives up the load reduction that is still possible with a short TTL."
      },
      "C": {
        "type": "Incorrect",
        "text": "Browser refreshes do not bypass a server-side cache."
      },
      "D": {
        "type": "Incorrect",
        "text": "Backend capacity does not change how long cached entries are served."
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
        "text": "Increase the Experience API's worker size"
      },
      {
        "letter": "B",
        "text": "Apply a rate limiting policy to the Experience API"
      },
      {
        "letter": "C",
        "text": "Retry the Process API call five times before responding"
      },
      {
        "letter": "D",
        "text": "Set a timeout that fits within the 2-second SLA"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Timeouts are the first fault-tolerance measure for API invocations. They should be set as low as possible and in line with the API client's own SLA, so that a slow or hung dependency does not cause the client to fail its consumers.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "More CPU and memory do not shorten the time spent waiting for a hung dependency."
      },
      "B": {
        "type": "Incorrect",
        "text": "Rate limiting caps traffic but does not stop the client from waiting 30 seconds."
      },
      "C": {
        "type": "Incorrect",
        "text": "Retrying a call that hangs multiplies the wait and makes the SLA worse."
      },
      "D": {
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
        "text": "Retry by calling a different HTTP method on the same resource"
      },
      {
        "letter": "B",
        "text": "Retry a limited number of times with a delay between attempts"
      },
      {
        "letter": "C",
        "text": "Never retry, and always return the error to the consumer"
      },
      {
        "letter": "D",
        "text": "Retry immediately and continuously until the call succeeds"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Retries help when failures are transient, but they should be limited and spaced out, and only applied to operations that are safe to repeat. In Mule applications, the Until Successful scope supports a maximum number of retries and a delay between attempts.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Changing the method changes the meaning of the request."
      },
      "B": {
        "type": "Correct",
        "text": "Limited, spaced retries can overcome transient failures without overloading the API."
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
        "text": "An idempotency key that lets the API detect repeats"
      },
      {
        "letter": "B",
        "text": "Nothing, because HTTP POST is idempotent by definition"
      },
      {
        "letter": "C",
        "text": "A Spike Control policy on the Payments API"
      },
      {
        "letter": "D",
        "text": "A longer cache time-to-live on the Payments API"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Retries are safe only for idempotent operations. Methods such as GET, PUT, and DELETE are idempotent, but POST is not, so retrying a POST can create duplicates. Before retrying, the API must be able to detect repeated requests, for example through a unique ID supplied by the client and stored by the API.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Without duplicate detection, a retried POST may create a second payment."
      },
      "B": {
        "type": "Incorrect",
        "text": "POST is not idempotent; repeating it can create duplicate resources."
      },
      "C": {
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
        "text": "A circuit breaker that fails fast and probes later"
      },
      {
        "letter": "D",
        "text": "More retries for each credit check call"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. A circuit breaker tracks failures of a dependency and, after a threshold, stops calling it for a period, failing fast instead of waiting for timeouts. It then allows trial calls to detect recovery. This prevents failures from propagating to the API client and its consumers.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Longer timeouts make threads pile up faster during an outage."
      },
      "B": {
        "type": "Incorrect",
        "text": "Credit checks are customer-specific and current, and caching does not address the outage."
      },
      "C": {
        "type": "Correct",
        "text": "Opening the circuit stops waiting on a known-failing dependency and protects the client's resources."
      },
      "D": {
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
        "text": "Block the page until the Process API recovers"
      },
      {
        "letter": "B",
        "text": "Return HTTP 500 so the page shows an error banner"
      },
      {
        "letter": "C",
        "text": "Call the Process API repeatedly until it succeeds"
      },
      {
        "letter": "D",
        "text": "Return a default list of best-selling products"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. Fallback is a fault-tolerance strategy in which the client uses an alternative when an API invocation fails. Options include calling an alternative API, returning a previously cached result, or returning a static default, such as a list of best-selling products.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Waiting indefinitely breaks the user experience."
      },
      "B": {
        "type": "Incorrect",
        "text": "The requirement is that the page still loads successfully."
      },
      "C": {
        "type": "Incorrect",
        "text": "Repeated calls delay the page and do not guarantee a response."
      },
      "D": {
        "type": "Correct",
        "text": "A static or default result keeps the page working when the API fails."
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
        "text": "Treat 429 as a permanent failure and stop calling the API"
      },
      {
        "letter": "B",
        "text": "Back off and retry after the limit window resets"
      },
      {
        "letter": "C",
        "text": "Retry immediately in a tight loop until a request succeeds"
      },
      {
        "letter": "D",
        "text": "Create additional client applications to multiply the allowed quota"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. A Rate Limiting policy rejects requests that exceed the configured quota with HTTP 429 and can expose rate-limit headers. Resilient clients treat this as a temporary condition and back off until the window resets, rather than retrying immediately or giving up.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The limit resets after its window, so the condition is temporary."
      },
      "B": {
        "type": "Correct",
        "text": "429 means the quota is exhausted, so the client should wait rather than retry immediately."
      },
      "C": {
        "type": "Incorrect",
        "text": "Immediate retries consume quota and keep the client blocked."
      },
      "D": {
        "type": "Incorrect",
        "text": "Circumventing the contract violates the API's governance and SLA."
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
        "text": "The Experience API automatically disables retries in lower layers"
      },
      {
        "letter": "B",
        "text": "Retries are ignored by Mule runtime when an outage is detected"
      },
      {
        "letter": "C",
        "text": "Retries multiply across layers and overload the backend"
      },
      {
        "letter": "D",
        "text": "Retries cancel each other out, so the backend receives fewer calls"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Retries at every layer of an application network multiply: three retries at three layers can produce many times the original number of calls. Retries should be limited, spaced out, and coordinated with timeouts and circuit breakers so that clients do not overwhelm a recovering dependency.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Each layer's retry behavior is configured independently."
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
        "text": "Use a timeout aligned with the Experience API's own SLA"
      },
      {
        "letter": "B",
        "text": "Disable timeouts so that slow responses eventually succeed"
      },
      {
        "letter": "C",
        "text": "Propagate every downstream error unchanged to the end user"
      },
      {
        "letter": "D",
        "text": "Call the Process API with a new client ID on each attempt"
      },
      {
        "letter": "E",
        "text": "Return a cached or default result when the call fails"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Correct answers: A and E. Fault-tolerant API invocations aim to stop failures from propagating to the API client's own consumers. Timeouts, limited retries, circuit breakers, and fallbacks such as cached or default results are the main strategies.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "A timeout prevents a slow dependency from consuming the client's response time."
      },
      "B": {
        "type": "Incorrect",
        "text": "Without timeouts, slow calls can exhaust threads and break the SLA."
      },
      "C": {
        "type": "Incorrect",
        "text": "Propagation spreads the failure to clients rather than containing it."
      },
      "D": {
        "type": "Incorrect",
        "text": "Changing credentials does not make calls more reliable and breaks governance."
      },
      "E": {
        "type": "Correct",
        "text": "A fallback lets the client respond successfully even when the dependency fails."
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
        "text": "Cache the primary carrier's quotes for a year"
      },
      {
        "letter": "B",
        "text": "Call the second carrier's API as a fallback"
      },
      {
        "letter": "C",
        "text": "Retry the primary carrier indefinitely until it responds"
      },
      {
        "letter": "D",
        "text": "Return HTTP 503 and ask the client to retry tomorrow"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. One fallback option for fault-tolerant API invocations is to invoke an alternative API that provides an equivalent result. When the primary carrier's API fails, calling the second carrier's API gives the client a usable quote.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Rates change, so year-old quotes are not an acceptable fallback."
      },
      "B": {
        "type": "Correct",
        "text": "An alternative API provides an equivalent result when the primary invocation fails."
      },
      "C": {
        "type": "Incorrect",
        "text": "Indefinite retries leave the client without a quote during an outage."
      },
      "D": {
        "type": "Incorrect",
        "text": "The business wants a quote rather than an error."
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
        "text": "Client ID Enforcement"
      },
      {
        "letter": "B",
        "text": "Rate Limiting"
      },
      {
        "letter": "C",
        "text": "HTTP Caching"
      },
      {
        "letter": "D",
        "text": "Spike Control"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. The Spike Control policy protects an API implementation from traffic spikes by limiting the number of requests in a time window and delaying excess requests, with a configurable number of attempts, before rejecting them. This smooths bursts so that a fragile backend is not overwhelmed.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Client ID enforcement identifies clients but does not control traffic bursts."
      },
      "B": {
        "type": "Incorrect",
        "text": "Rate Limiting enforces a quota and rejects requests beyond it rather than smoothing them."
      },
      "C": {
        "type": "Incorrect",
        "text": "Caching can reduce load for cacheable reads but does not shape bursts of requests."
      },
      "D": {
        "type": "Correct",
        "text": "Spike Control queues excess requests for a short period and retries them, smoothing bursts."
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
        "text": "No effect, because horizontal scaling only helps APIs that call databases"
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
        "text": "Faster processing of each individual calculation"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Horizontal scaling adds API implementation instances behind a load balancer. For a stateless API whose own CPU is the bottleneck, more instances increase throughput and reduce the time requests wait, improving response times under load, even though each request's processing time is unchanged.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Horizontal scaling helps whenever the API implementation is the bottleneck."
      },
      "B": {
        "type": "Incorrect",
        "text": "The load balancer overhead is small compared with the queuing removed."
      },
      "C": {
        "type": "Correct",
        "text": "The bottleneck is the implementation itself, so more workers reduce queuing."
      },
      "D": {
        "type": "Incorrect",
        "text": "Each calculation still takes the same time; the gain is less waiting in queue."
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
        "text": "Little or no improvement, and possibly more database contention"
      },
      {
        "letter": "B",
        "text": "The database will automatically allow more concurrent connections"
      },
      {
        "letter": "C",
        "text": "Response time will drop to roughly a third of the current value"
      },
      {
        "letter": "D",
        "text": "Throughput will triple because each worker handles the same load"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Horizontal scaling of an API implementation helps only when the implementation itself is the bottleneck. If response time is dominated by a downstream system with limited capacity, adding instances does not improve response time or throughput and can increase contention on that system.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The constraint is the database, which gains no capacity when API workers are added."
      },
      "B": {
        "type": "Incorrect",
        "text": "Database limits are not changed by scaling the API."
      },
      "C": {
        "type": "Incorrect",
        "text": "Scaling the API does not speed up database queries."
      },
      "D": {
        "type": "Incorrect",
        "text": "Throughput is capped by the database's 20 connections."
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
        "text": "Additional workers will reduce network latency to the client"
      },
      {
        "letter": "B",
        "text": "Extra workers won't speed up one unsaturated request"
      },
      {
        "letter": "C",
        "text": "Requests will run in parallel across all workers automatically"
      },
      {
        "letter": "D",
        "text": "Each additional worker will reduce the request time proportionally"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. Horizontal scaling increases the number of requests that can be processed concurrently. It improves response times only when requests are waiting for capacity. Under light load, a single request's latency is determined by its processing steps and dependencies, so it must be optimized directly, for example by parallelizing work or caching.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The client's network latency is unaffected by the number of workers."
      },
      "B": {
        "type": "Correct",
        "text": "With no queuing, each request's duration depends on its own processing path."
      },
      "C": {
        "type": "Incorrect",
        "text": "A single request is not distributed across multiple workers."
      },
      "D": {
        "type": "Incorrect",
        "text": "Requests are handled by one worker at a time and do not split across workers."
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
        "text": "Carts may be missing when requests reach a different worker"
      },
      {
        "letter": "B",
        "text": "The load balancer will refuse to route requests to more than one worker"
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
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Horizontal scaling works best for stateless API implementations. If state is kept in a single worker's memory, requests routed to other workers cannot see it. State should be moved to a shared store, such as a persistent object store or database, before scaling out.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "In-memory state is local to one worker, but the load balancer can route requests anywhere."
      },
      "B": {
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
        "text": "The API processes a single large file one record at a time on one node"
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
        "text": "Every request waits on a downstream API limited to a fixed rate"
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
    "explanation": "Correct answers: C and E. Horizontal scaling helps when the API implementation itself limits throughput, for example when stateless workers are CPU-bound or requests queue for threads. It does not help when the limit comes from a downstream system, an SLA-based policy, or work that only one node can perform.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Single-node sequential processing does not benefit from more instances."
      },
      "B": {
        "type": "Incorrect",
        "text": "Policy limits are per contract and do not change with more instances."
      },
      "C": {
        "type": "Correct",
        "text": "Adding instances adds processing capacity where the bottleneck is."
      },
      "D": {
        "type": "Incorrect",
        "text": "The downstream limit caps throughput regardless of instance count."
      },
      "E": {
        "type": "Correct",
        "text": "More instances reduce queuing time and increase concurrent processing."
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
        "text": "Each file will be processed three times, once per node"
      },
      {
        "letter": "B",
        "text": "Files will be processed three times faster"
      },
      {
        "letter": "C",
        "text": "Polling will stop because clusters do not support FTP"
      },
      {
        "letter": "D",
        "text": "No gain; only the primary node polls the files"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. In a Mule cluster, some sources, such as file or FTP pollers, are configured to run only on the primary node to avoid duplicate processing. Adding nodes improves availability but not throughput for that work, unless the work is distributed, for example by publishing items to a queue that all nodes consume.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Primary-node-only polling prevents duplicate pickup, not duplicate processing gains."
      },
      "B": {
        "type": "Incorrect",
        "text": "The other nodes do not run the primary-node-only poller."
      },
      "C": {
        "type": "Incorrect",
        "text": "Clusters support FTP polling with primary-node configuration."
      },
      "D": {
        "type": "Correct",
        "text": "Work that runs only on the primary node does not gain capacity from extra nodes."
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
        "text": "Permanently deploy the maximum number of replicas needed at peak"
      },
      {
        "letter": "B",
        "text": "Enable horizontal autoscaling for the application's replicas"
      },
      {
        "letter": "C",
        "text": "Increase the replica size so that two replicas can always handle peaks"
      },
      {
        "letter": "D",
        "text": "Apply a Rate Limiting policy so peak traffic never exceeds two replicas"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correct answer: B. CloudHub 2.0 supports horizontal autoscaling, which adjusts the number of replicas of an application based on resource usage within configured minimum and maximum values. This lets stateless APIs follow unpredictable demand without paying for peak capacity at all times.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "This works but wastes capacity outside peaks."
      },
      "B": {
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
        "text": "Vertical scaling to a larger worker size"
      },
      {
        "letter": "B",
        "text": "Horizontal scaling to more workers of the same size"
      },
      {
        "letter": "C",
        "text": "Adding a Spike Control policy"
      },
      {
        "letter": "D",
        "text": "Enabling the HTTP Caching policy"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correct answer: A. Horizontal scaling increases concurrent capacity but leaves the resources available to a single request unchanged. When individual requests need more memory or CPU than one instance provides, vertical scaling to a larger worker or replica size is required.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "More memory per worker lets each large request be processed."
      },
      "B": {
        "type": "Incorrect",
        "text": "Each request still runs on one worker with the same memory limit."
      },
      "C": {
        "type": "Incorrect",
        "text": "Traffic shaping does not change the memory available to process a request."
      },
      "D": {
        "type": "Incorrect",
        "text": "Caching does not address memory needed to process large payloads."
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
        "text": "Response times will drop below the SLA tier's limits"
      },
      {
        "letter": "D",
        "text": "Nothing for this partner, because the SLA tier limits their throughput"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correct answer: D. When throughput is capped by an SLA-based rate limiting policy, the constraint is the consumer's contract, not the API implementation's capacity. Horizontal scaling only helps when the implementation is the bottleneck; here the partner would need a higher SLA tier.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "SLA tier changes require a contract change, not more workers."
      },
      "B": {
        "type": "Incorrect",
        "text": "Rate limiting based on SLA tiers is enforced regardless of worker count."
      },
      "C": {
        "type": "Incorrect",
        "text": "The limit is on request count, not response time."
      },
      "D": {
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
        "text": "Scale out the Order Process API"
      },
      {
        "letter": "B",
        "text": "Scale both APIs vertically to the largest worker size"
      },
      {
        "letter": "C",
        "text": "Scale out the Inventory System API"
      },
      {
        "letter": "D",
        "text": "Apply a Spike Control policy to the Order Process API"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correct answer: C. Horizontal scaling improves throughput only when applied to the component that limits it. Here the Inventory System API is CPU-saturated while its backend has spare capacity, so adding System API workers removes the bottleneck. Scaling the idle Process API would not help and would increase pressure on the saturated System API.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The Process API is mostly idle and waiting; more instances would only send more requests to the saturated System API."
      },
      "B": {
        "type": "Incorrect",
        "text": "Larger Process API workers waste money, and vertical scaling alone is not the targeted fix for a stateless, CPU-bound System API."
      },
      "C": {
        "type": "Correct",
        "text": "The saturated System API is the bottleneck, so adding its workers adds capacity where it is needed."
      },
      "D": {
        "type": "Incorrect",
        "text": "Shaping traffic to the Process API does not add capacity to the System API bottleneck."
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
    "prompt": "An architect must identify which Anypoint Platform component generates the metrics used for API monitoring and alerting, so the team can report on latency and usage for its shipment-tracking APIs. Which component provides this data?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Monitoring, which collects API and Mule application metrics and exposes them through dashboards and alerts."
      },
      {
        "letter": "B",
        "text": "Anypoint Exchange, which catalogs reusable API assets and their versions."
      },
      {
        "letter": "C",
        "text": "API Designer, which defines and mocks API specifications."
      },
      {
        "letter": "D",
        "text": "API Manager, which applies policies to API instances but does not itself generate invocation metrics."
      }
    ],
    "explanation": "Correct answer: A. Anypoint Monitoring is the Anypoint Platform component that collects metrics for APIs and Mule applications and surfaces them through dashboards, custom charts, and alerts. It is the source of the latency, throughput, and error-rate data used for monitoring and alerting. Exchange is an asset catalog, API Designer defines specifications, and API Manager enforces policies; none of them is the metrics generator.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Anypoint Monitoring collects API and application metrics and provides the dashboards and alerts built on that data."
      },
      "B": {
        "type": "Incorrect",
        "text": "Anypoint Exchange stores and catalogs reusable assets; it does not generate invocation metrics."
      },
      "C": {
        "type": "Incorrect",
        "text": "API Designer is used to define and mock API specifications, not to collect runtime metrics."
      },
      "D": {
        "type": "Incorrect",
        "text": "API Manager applies policies to API instances; the invocation metrics themselves are produced by Anypoint Monitoring."
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
        "text": "Anypoint Monitoring dashboards together with alert policies on metrics such as response time, error rate, and throughput."
      },
      {
        "letter": "B",
        "text": "A batch job that exports Runtime Manager logs to a file every hour."
      },
      {
        "letter": "C",
        "text": "API Manager rate-limiting policies on all APIs."
      },
      {
        "letter": "D",
        "text": "A custom Mule flow that writes request timestamps to an external database."
      }
    ],
    "explanation": "Correct answer: A. Anypoint Monitoring provides real-time dashboards and lets you define alert policies that notify you when a metric crosses a threshold, which is exactly what proactive SLA monitoring requires. A batch export (B) is not real-time, rate limiting (C) controls traffic rather than reporting on it, and a custom logging flow (D) is bespoke and does not provide built-in alerting.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Dashboards plus alert policies on key metrics give real-time visibility and automatic notification when thresholds are crossed."
      },
      "B": {
        "type": "Incorrect",
        "text": "Hourly batch exports are not real-time and do not raise alerts on threshold breaches."
      },
      "C": {
        "type": "Incorrect",
        "text": "Rate limiting protects the backend by controlling traffic; it does not monitor or alert on error rates."
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
    "correctAnswer": "A"
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
        "text": "Configure alerts on API invocation metrics such as error rate and response time."
      },
      {
        "letter": "B",
        "text": "Rely on CloudHub autoscaling to detect and resolve degradation automatically."
      },
      {
        "letter": "C",
        "text": "Configure alerts on Mule application health metrics such as CPU and memory."
      },
      {
        "letter": "D",
        "text": "Schedule a nightly log-analysis job to detect performance issues."
      },
      {
        "letter": "E",
        "text": "Enable CloudHub persistent queues so that in-flight messages are not lost during degradation."
      }
    ],
    "explanation": "Correct answers: A and C. The exam guide asks you to specify alerts for key metrics of API invocations across all API-led layers and for Mule applications. API invocation metrics (error rate, response time) catch problems at the API level, and Mule application metrics (CPU, memory) catch problems at the implementation level, so together they cover both. Autoscaling (B) reacts to load but does not detect or notify on SLA breaches, and a nightly job (D) is too slow to protect a 99.9% SLA.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Alerts on API invocation metrics detect degradation at the API level, which is a core exam objective."
      },
      "B": {
        "type": "Incorrect",
        "text": "Autoscaling changes capacity; it neither detects nor notifies you about SLA degradation."
      },
      "C": {
        "type": "Correct",
        "text": "Alerts on Mule application health metrics (CPU, memory) detect problems at the implementation level."
      },
      "D": {
        "type": "Incorrect",
        "text": "A nightly job cannot provide the timely alerting a 99.9% SLA requires."
      },
      "E": {
        "type": "Incorrect",
        "text": "Persistent queues improve message reliability during failure; they do not detect or notify on SLA degradation."
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
      "C"
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
        "text": "The built-in Anypoint Platform audit log, which records user and administrative actions and can be exported."
      },
      {
        "letter": "B",
        "text": "A custom Logger component in each flow that writes events to a database."
      },
      {
        "letter": "C",
        "text": "Anypoint Monitoring API Analytics, relying on its default retention."
      },
      {
        "letter": "D",
        "text": "A third-party APM agent installed on the CloudHub workers."
      }
    ],
    "explanation": "Correct answer: A. The Anypoint Platform audit log natively records user and administrative actions (for example, creating an application, requesting access, or resetting a client secret) and can be exported, which satisfies an audit requirement without extra licensing or custom code. A custom Logger (B) captures only what the flow chooses to log, API Analytics (C) records usage metrics rather than an audit trail of actions, and a third-party APM agent (D) does not produce the platform's audit records.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The built-in audit log records user and administrative actions and can be exported, meeting the audit requirement with no extra license."
      },
      "B": {
        "type": "Incorrect",
        "text": "A custom Logger only captures the events the flow explicitly logs; it is not a complete audit trail."
      },
      "C": {
        "type": "Incorrect",
        "text": "API Analytics records usage metrics, not an audit trail of user and configuration changes."
      },
      "D": {
        "type": "Incorrect",
        "text": "A third-party APM agent monitors performance and does not produce Anypoint Platform audit records."
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
    "correctAnswer": "A"
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
    "prompt": "A logistics startup's Mule application is flooding the console with logs, and the team needs to capture only critical events without losing root-cause visibility. What should it do first?",
    "options": [
      {
        "letter": "A",
        "text": "Set the root logger level to ERROR in the runtime's log4j2 configuration so only errors and their stack traces are emitted."
      },
      {
        "letter": "B",
        "text": "Disable application logging and rely only on Anypoint Monitoring alerts."
      },
      {
        "letter": "C",
        "text": "Add a Logger component at INFO level to every flow."
      },
      {
        "letter": "D",
        "text": "Increase the console buffer size so more log lines are retained."
      }
    ],
    "explanation": "Correct answer: A. Mule's logging is driven by Log4j2; raising the root logger level to ERROR suppresses lower-severity messages while still emitting errors and their stack traces, which preserves root-cause visibility. Disabling logging (B) removes the evidence needed to diagnose failures, adding INFO loggers (C) increases volume rather than reducing it, and enlarging the console buffer (D) keeps more noise instead of filtering it.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Setting the root logger to ERROR filters out lower-severity noise while retaining errors and stack traces."
      },
      "B": {
        "type": "Incorrect",
        "text": "Disabling logging removes the diagnostics you need to investigate incidents."
      },
      "C": {
        "type": "Incorrect",
        "text": "Adding INFO loggers increases log volume rather than reducing it."
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
        "text": "Deploy Anypoint Monitoring on Anypoint Platform Private Cloud Edition (PCE) so that monitoring data stays on-premises."
      },
      {
        "letter": "B",
        "text": "Use the standard SaaS Anypoint Monitoring service, which stores data in MuleSoft's cloud."
      },
      {
        "letter": "C",
        "text": "Export monitoring data to CSV files and upload them manually to the platform."
      },
      {
        "letter": "D",
        "text": "Install the Anypoint Monitoring agent on-premises but continue to use the SaaS dashboards and storage."
      }
    ],
    "explanation": "Correct answer: A. Anypoint Platform Private Cloud Edition (PCE) supports Anypoint Monitoring, which keeps monitoring data within the customer's on-premises environment, satisfying the residency requirement. The SaaS service (B) stores data in MuleSoft's cloud, manual CSV exports (C) are not a monitoring solution, and the on-premises agent (D) still forwards data to the cloud endpoint, so the data does not stay on-premises.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Anypoint Monitoring on PCE runs on-premises and keeps monitoring data inside the customer environment."
      },
      "B": {
        "type": "Incorrect",
        "text": "The SaaS service stores monitoring data in MuleSoft's cloud, which violates the residency requirement."
      },
      "C": {
        "type": "Incorrect",
        "text": "Manual CSV export is not a functioning monitoring capability."
      },
      "D": {
        "type": "Incorrect",
        "text": "The on-premises agent still sends monitoring data to the Anypoint Monitoring cloud endpoint."
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
    "correctAnswer": "A"
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
        "text": "Anypoint Monitoring's flow and transaction metrics to identify the slow step in the integration."
      },
      {
        "letter": "B",
        "text": "Increase the JVM heap size on the runtime."
      },
      {
        "letter": "C",
        "text": "Add API Manager throttling policies to limit request rates."
      },
      {
        "letter": "D",
        "text": "Add more CloudHub workers without further analysis."
      }
    ],
    "explanation": "Correct answer: A. Anypoint Monitoring exposes per-flow and per-processor metrics, so you can see which step is slow and target the fix. Raising heap (B), throttling requests (C), and scaling out (D) are all changes that may or may not help; without metrics you are guessing at the cause of the latency.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Flow and transaction metrics reveal which step is slow, letting the team fix the actual bottleneck."
      },
      "B": {
        "type": "Incorrect",
        "text": "Increasing heap addresses memory pressure, not necessarily the latency source."
      },
      "C": {
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
    "correctAnswer": "A"
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
        "text": "Anypoint Monitoring alert policies that trigger notifications when the monitored metrics cross defined thresholds."
      },
      {
        "letter": "B",
        "text": "A custom application that polls API Manager metrics and writes breach events to a database."
      },
      {
        "letter": "C",
        "text": "A third-party APM tool integrated through a connector."
      },
      {
        "letter": "D",
        "text": "Manual daily review of Runtime Manager health-check alerts."
      }
    ],
    "explanation": "Correct answer: A. Anypoint Monitoring alert policies evaluate the monitored metrics and send notifications when a threshold is crossed, giving real-time alerting with no custom code. A custom polling application (B) adds maintenance overhead, a third-party APM (C) adds cost and integration effort, and manual review (D) is neither real-time nor low-overhead.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Built-in alert policies notify you in real time when metrics breach thresholds, with minimal overhead."
      },
      "B": {
        "type": "Incorrect",
        "text": "A custom polling application adds code and maintenance overhead."
      },
      "C": {
        "type": "Incorrect",
        "text": "A third-party APM adds licensing cost and integration effort."
      },
      "D": {
        "type": "Incorrect",
        "text": "Manual daily review is slow and does not provide real-time alerting."
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
        "text": "Enable API analytics only for the high-value APIs that need the insight."
      },
      {
        "letter": "B",
        "text": "Enable full-suite analytics for every API and purchase a premium analytics add-on."
      },
      {
        "letter": "C",
        "text": "Export analytics data through the Anypoint Monitoring metrics API to an external BI tool for custom dashboards."
      },
      {
        "letter": "D",
        "text": "Rely on Anypoint Visualizer alone for detailed usage insight."
      },
      {
        "letter": "E",
        "text": "Reduce the analytics data-retention period to lower storage cost."
      }
    ],
    "explanation": "Correct answers: A and C. Scoping analytics to the APIs that need them controls data volume and cost, and exporting the metrics through the Anypoint Monitoring metrics API lets stakeholders build custom dashboards in a BI tool without buying more platform capability. Enabling everything with a premium add-on (B) increases cost, and Visualizer (D) shows the application-network graph and its traffic, not detailed usage analytics.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Scoping analytics to high-value APIs keeps data volume and cost under control."
      },
      "B": {
        "type": "Incorrect",
        "text": "Enabling everything plus a premium add-on works against the strict budget."
      },
      "C": {
        "type": "Correct",
        "text": "Exporting metrics to an external BI tool enables custom dashboards without extra platform spend."
      },
      "D": {
        "type": "Incorrect",
        "text": "Visualizer shows the application-network graph; it is not a detailed usage-analytics tool."
      },
      "E": {
        "type": "Incorrect",
        "text": "Shortening retention reduces cost but does not give stakeholders the custom dashboards they require."
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
      "C"
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
        "text": "Enable audit-level logging and configure the appropriate retention for those records."
      },
      {
        "letter": "B",
        "text": "Create an Anypoint Monitoring alert policy that fires when a compliance metric deviates beyond its threshold."
      },
      {
        "letter": "C",
        "text": "Set the runtime log level to INFO and rely on autoscaling logs for compliance."
      },
      {
        "letter": "D",
        "text": "Use Anypoint Visualizer flow diagrams in place of configuring alerts."
      },
      {
        "letter": "E",
        "text": "Turn on API Functional Monitoring to retain the audit records."
      }
    ],
    "explanation": "Correct answers: A and B. Retaining audit-level records satisfies the retention requirement, and an alert policy on the compliance metrics detects deviations as they happen. Setting the log level to INFO (C) does not produce an audit trail, and Visualizer (D) is a graph of the application network, not an alerting mechanism.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Audit-level logging with configured retention provides the required audit records."
      },
      "B": {
        "type": "Correct",
        "text": "An alert policy on the compliance metric detects and notifies on deviations."
      },
      "C": {
        "type": "Incorrect",
        "text": "INFO-level logs are not an audit trail and autoscaling logs do not satisfy compliance."
      },
      "D": {
        "type": "Incorrect",
        "text": "Visualizer diagrams do not replace alerting on compliance metrics."
      },
      "E": {
        "type": "Incorrect",
        "text": "Functional Monitoring runs scheduled API tests; it does not produce or retain an audit trail."
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
      "A",
      "B"
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
        "text": "The built-in Anypoint Platform audit log, forwarding its entries to the organization's long-term archive."
      },
      {
        "letter": "B",
        "text": "A custom Logger component that writes events to a database."
      },
      {
        "letter": "C",
        "text": "API Analytics, relying on its default retention."
      },
      {
        "letter": "D",
        "text": "Operating-system file logging on the runtime with manual rotation."
      }
    ],
    "explanation": "Correct answer: A. The built-in Anypoint Platform audit log records user and administrative actions, and its entries can be forwarded to a long-term archive to meet a multi-year retention requirement without custom code. A custom Logger (B) captures only chosen events, API Analytics (C) records usage rather than an audit trail and has limited retention, and OS-level logging (D) is not an audit trail of platform actions.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The platform audit log records the required actions and can be forwarded to long-term storage."
      },
      "B": {
        "type": "Incorrect",
        "text": "A custom Logger is not a complete audit trail and requires code."
      },
      "C": {
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
    "correctAnswer": "A"
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
        "text": "Use Runtime Manager's log viewer, raise the log level for the relevant Mule package, and filter by the request's correlation ID."
      },
      {
        "letter": "B",
        "text": "Add a java.util.logging logger inside a custom Java component."
      },
      {
        "letter": "C",
        "text": "Set the global logger level to DEBUG for the entire application and restart the runtime."
      },
      {
        "letter": "D",
        "text": "Configure Anypoint Monitoring to email an alert on every 500 response."
      }
    ],
    "explanation": "Correct answer: A. Runtime Manager's log viewer lets you inspect application logs, and raising the level for a specific Mule package (rather than globally) captures the exception detail you need while filtering by correlation ID isolates the failing request. A custom Java logger (B) adds code for no benefit, a global DEBUG level (C) floods the logs and needs a restart, and an email alert on each 500 (D) reports the symptom but not the cause.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The log viewer with a targeted log level and correlation-ID filter surfaces the exception detail quickly."
      },
      "B": {
        "type": "Incorrect",
        "text": "A custom Java logger adds code without giving better access to the exception."
      },
      "C": {
        "type": "Incorrect",
        "text": "A global DEBUG level increases noise and requires a restart."
      },
      "D": {
        "type": "Incorrect",
        "text": "An alert on each 500 reports the symptom, not the underlying exception."
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
        "text": "Use Anypoint Monitoring for the API metrics and restrict access to them with role-based permissions."
      },
      {
        "letter": "B",
        "text": "Enable an 'Encrypt API Analytics' toggle in the platform settings."
      },
      {
        "letter": "C",
        "text": "Export usage data to an encrypted Amazon S3 bucket."
      },
      {
        "letter": "D",
        "text": "Install a third-party encryption gateway in front of the analytics store."
      }
    ],
    "explanation": "Correct answer: A. Anypoint Monitoring provides the API usage metrics, and Anypoint Platform role-based access control determines who can view them, which satisfies the 'only cleared personnel' requirement with native capabilities. There is no single 'Encrypt API Analytics' toggle (B), exporting to S3 (C) moves the data outside the platform and does not control visibility in Anypoint, and a third-party gateway (D) contradicts the preference for native capabilities.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Anypoint Monitoring plus role-based permissions keeps the metrics visible only to authorized users, natively."
      },
      "B": {
        "type": "Incorrect",
        "text": "There is no such 'Encrypt API Analytics' toggle in the platform settings."
      },
      "C": {
        "type": "Incorrect",
        "text": "Exporting to S3 moves the data outside the platform and does not govern in-platform visibility."
      },
      "D": {
        "type": "Incorrect",
        "text": "A third-party gateway is not a native capability and adds unnecessary complexity."
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
        "text": "Review the flow activity metrics in Anypoint Monitoring to identify the slow processors, then refactor the flow."
      },
      {
        "letter": "B",
        "text": "Add more runtime instances to distribute the load."
      },
      {
        "letter": "C",
        "text": "Insert custom loggers at the start and end of each flow to measure latency."
      },
      {
        "letter": "D",
        "text": "Increase the JVM heap size of the runtime."
      }
    ],
    "explanation": "Correct answer: A. Anypoint Monitoring's flow activity metrics show how long each processor takes, so the team can pinpoint and fix the slow step instead of guessing. Scaling out (B), custom latency loggers (C), and a larger heap (D) are all changes made without first locating the bottleneck, and none of them identifies the inefficient processor.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Flow activity metrics identify the slow processors, enabling a targeted fix."
      },
      "B": {
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
    "correctAnswer": "A"
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
        "text": "Configure Anypoint Monitoring alerts, including anomaly-based detection, for the key API metrics."
      },
      {
        "letter": "B",
        "text": "Set monitoring data retention to the minimum required and purge data beyond the GDPR retention window."
      },
      {
        "letter": "C",
        "text": "Send all logs to the SIEM indefinitely and assume the SIEM filters out personal data."
      },
      {
        "letter": "D",
        "text": "Rely on API Manager client-ID enforcement alone to detect abnormal usage."
      },
      {
        "letter": "E",
        "text": "Forward logs to an external system using the platform's default retention settings."
      }
    ],
    "explanation": "Correct answers: A and B. Alerts (including anomaly-based detection) on the key API metrics satisfy the proactive-detection goal, and configuring retention to the minimum required with purging satisfies GDPR. Retaining all logs indefinitely (C) violates GDPR, and client-ID enforcement (D) controls access but does not detect abnormal usage patterns.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Anomaly-based alerts on key API metrics proactively detect abnormal usage."
      },
      "B": {
        "type": "Correct",
        "text": "Minimum retention with purging beyond the GDPR window satisfies the data-retention rule."
      },
      "C": {
        "type": "Incorrect",
        "text": "Indefinite retention of all logs violates GDPR, and the SIEM does not automatically make it compliant."
      },
      "D": {
        "type": "Incorrect",
        "text": "Client-ID enforcement controls access; it does not detect abnormal usage."
      },
      "E": {
        "type": "Incorrect",
        "text": "The default retention may exceed the GDPR window, so relying on it does not satisfy the data-retention rule."
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
      "B"
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
        "text": "Anypoint Monitoring's built-in dashboards with alert policies, so many APIs can be monitored from a single view."
      },
      {
        "letter": "B",
        "text": "A separate monitoring dashboard per runtime."
      },
      {
        "letter": "C",
        "text": "CloudHub real-time log streaming, watched directly in the console."
      },
      {
        "letter": "D",
        "text": "A third-party SIEM dashboard fed by API Autodiscovery."
      }
    ],
    "explanation": "Correct answer: A. Anypoint Monitoring's built-in dashboards aggregate API and application metrics, and alert policies notify the team when something needs attention, so a small team can watch many APIs from a single view. A dashboard per runtime (B) multiplies the dashboards the team cannot manage, watching raw log streams (C) is not scalable monitoring, and API Autodiscovery (D) links implementations to API instances rather than feeding a SIEM.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Built-in dashboards plus alert policies give single-view visibility across many APIs."
      },
      "B": {
        "type": "Incorrect",
        "text": "One dashboard per runtime increases the number of views the team must manage."
      },
      "C": {
        "type": "Incorrect",
        "text": "Watching raw log streams is not a scalable monitoring approach."
      },
      "D": {
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
    "correctAnswer": "A"
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
    "prompt": "An organization wants to view the dependencies between its Experience, Process, and System APIs in real time. It also needs to troubleshoot whether a Rate Limiting policy applied to the Experience API is causing failures. Which Anypoint Platform tool should the architect recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Monitoring Custom Dashboards"
      },
      {
        "letter": "B",
        "text": "Anypoint Visualizer"
      },
      {
        "letter": "C",
        "text": "API Manager Analytics"
      },
      {
        "letter": "D",
        "text": "Anypoint Functional Monitoring"
      }
    ],
    "explanation": "Anypoint Visualizer maps application network dependencies and can display policy information on API nodes, helping identify where a policy such as Rate Limiting is affecting traffic.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Custom dashboards display metrics such as latency and utilization, but do not automatically map API dependencies."
      },
      "B": {
        "type": "Correct",
        "text": "Visualizer displays the application network topology and supports policy views for troubleshooting API nodes."
      },
      "C": {
        "type": "Incorrect",
        "text": "API Manager Analytics provides API usage analytics rather than an application dependency map."
      },
      "D": {
        "type": "Incorrect",
        "text": "Functional Monitoring runs external tests; it is not used to view internal application dependencies."
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
    "correctAnswer": "B"
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
        "text": "Anypoint Monitoring Alerts"
      },
      {
        "letter": "B",
        "text": "API Manager Alerts"
      },
      {
        "letter": "C",
        "text": "Runtime Manager Alerts"
      },
      {
        "letter": "D",
        "text": "CloudHub Connector"
      }
    ],
    "explanation": "Runtime Manager alerts cover CloudHub worker infrastructure conditions, including CPU, memory, worker unresponsiveness, and custom application notifications.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Anypoint Monitoring alerts focus on API and application performance metrics such as response time and HTTP errors."
      },
      "B": {
        "type": "Incorrect",
        "text": "API Manager alerts address API contracts and policy events such as SLA quota violations."
      },
      "C": {
        "type": "Correct",
        "text": "Worker CPU utilization is an infrastructure condition configured in Runtime Manager."
      },
      "D": {
        "type": "Incorrect",
        "text": "The CloudHub Connector can emit application notifications, but it is not where worker CPU alerts are configured."
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
    "correctAnswer": "C"
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
    "prompt": "A company requires all Mule application logs to go directly to its enterprise Splunk system and prohibits logs from being visible or stored in Anypoint Platform. How should the architect design logging for CloudHub applications?",
    "options": [
      {
        "letter": "A",
        "text": "Configure an Anypoint Monitoring log forwarder and disable the Runtime Manager log viewer."
      },
      {
        "letter": "B",
        "text": "Configure a custom Log4j2 appender in the Mule application and select “Disable CloudHub logs” in the Runtime Manager deployment settings."
      },
      {
        "letter": "C",
        "text": "Ask MuleSoft Support to reroute all logs to Splunk and bypass CloudHub storage."
      },
      {
        "letter": "D",
        "text": "Use the Splunk Connector in an asynchronous Mule flow."
      }
    ],
    "explanation": "A custom Log4j2 appender forwards logs from the application to the external SIEM. Disabling CloudHub logs prevents the platform from retaining its default application logs.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Anypoint Monitoring does not provide the described native third-party log forwarder, and hiding the viewer would not prevent log storage."
      },
      "B": {
        "type": "Correct",
        "text": "The custom appender sends logs to Splunk, while disabling CloudHub logs addresses the requirement not to store them in CloudHub."
      },
      "C": {
        "type": "Incorrect",
        "text": "The proposed support rerouting is not the standard application logging configuration."
      },
      "D": {
        "type": "Incorrect",
        "text": "Sending logs through a flow connector couples log delivery to application processing and is not the standard infrastructure logging approach."
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
    "correctAnswer": "B"
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
    "prompt": "An organization needs to test a public Experience API every five minutes by sending a specific JSON payload from an external geographic location such as US-East and asserting that the response is HTTP 200. Which tool provides this capability?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Functional Monitoring"
      },
      {
        "letter": "B",
        "text": "Anypoint Monitoring Alerts"
      },
      {
        "letter": "C",
        "text": "API Manager automated policies"
      },
      {
        "letter": "D",
        "text": "Runtime Manager Server Health Check"
      }
    ],
    "explanation": "Anypoint Functional Monitoring runs scheduled, black-box tests from external locations, allowing test payloads and response assertions.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Functional Monitoring supports scheduled tests, request payloads, assertions, and geographically distributed execution."
      },
      "B": {
        "type": "Incorrect",
        "text": "Monitoring alerts react to observed traffic and metrics; they do not inject synthetic requests."
      },
      "C": {
        "type": "Incorrect",
        "text": "API Manager policies enforce API behavior but do not run scheduled geographic tests."
      },
      "D": {
        "type": "Incorrect",
        "text": "A health check verifies service availability but does not send the required payload or assert the response."
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
    "correctAnswer": "A"
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
        "text": "Add the applications to a specific Business Group in Access Management."
      },
      {
        "letter": "B",
        "text": "Set the property `anypoint.platform.visualizer.layer` in application or Runtime Manager deployment properties."
      },
      {
        "letter": "C",
        "text": "Apply an automated API Manager policy targeting the API layer."
      },
      {
        "letter": "D",
        "text": "Configure an API layer tag in Anypoint Exchange and link it to the implementation."
      }
    ],
    "explanation": "The reserved `anypoint.platform.visualizer.layer` property categorizes applications into the Visualizer architectural layers.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Business Group membership does not assign an application's Visualizer architecture layer."
      },
      "B": {
        "type": "Correct",
        "text": "The Visualizer layer property assigns the application to its Experience, Process, or System layer."
      },
      "C": {
        "type": "Incorrect",
        "text": "API Manager policies enforce API behavior; they do not set Visualizer layer metadata."
      },
      "D": {
        "type": "Incorrect",
        "text": "Exchange metadata does not substitute for the runtime Visualizer layer property."
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
    "correctAnswer": "B"
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
    "prompt": "An operations team needs an email notification if a specific API client, identified by `client_id`, exceeds its request quota under a Rate Limiting SLA policy. Where must the alert be configured?",
    "options": [
      {
        "letter": "A",
        "text": "Runtime Manager Alerts"
      },
      {
        "letter": "B",
        "text": "Anypoint Monitoring Alerts"
      },
      {
        "letter": "C",
        "text": "API Manager Alerts"
      },
      {
        "letter": "D",
        "text": "Access Management Audit Logs"
      }
    ],
    "explanation": "API Manager is responsible for alerts involving API contracts, policies, SLAs, and client violations.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Runtime Manager alerts cover runtime and worker conditions, not API client quotas."
      },
      "B": {
        "type": "Incorrect",
        "text": "Anypoint Monitoring alerts address observed API or application metrics rather than policy quota violations."
      },
      "C": {
        "type": "Correct",
        "text": "The event is a client violation of a Rate Limiting SLA policy, which is configured in API Manager."
      },
      "D": {
        "type": "Incorrect",
        "text": "Audit logs record platform activity but do not configure quota-violation notifications."
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
    "correctAnswer": "C"
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
    "prompt": "An integration team needs continuous tests of public Experience APIs from multiple geographic locations outside its AWS VPC. Tests must send JSON payloads and assert HTTP 200 responses. Which capability meets this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Anypoint Monitoring Custom Dashboards"
      },
      {
        "letter": "B",
        "text": "API Manager Health Checks"
      },
      {
        "letter": "C",
        "text": "Runtime Manager Server Alerts"
      },
      {
        "letter": "D",
        "text": "Anypoint Functional Monitoring"
      }
    ],
    "explanation": "Anypoint Functional Monitoring schedules black-box API tests from public geographic locations and validates their results.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Custom dashboards visualize metrics but do not send test requests or assert responses."
      },
      "B": {
        "type": "Incorrect",
        "text": "API Manager health checks do not provide the described distributed scheduled payload testing."
      },
      "C": {
        "type": "Incorrect",
        "text": "Runtime Manager alerts monitor runtime conditions rather than externally testing API functionality."
      },
      "D": {
        "type": "Correct",
        "text": "Functional Monitoring provides scheduled tests from external geographic locations with payloads and response assertions."
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
    "correctAnswer": "D"
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
    "prompt": "A Mule application on a CloudHub 1.0 worker needs to alert when a specific business-logic error occurs inside a Choice router, such as an invalid third-party payload. How can this custom alert be achieved?",
    "options": [
      {
        "letter": "A",
        "text": "Create an API Manager alert based on HTTP 400 responses."
      },
      {
        "letter": "B",
        "text": "Use the CloudHub Connector to emit a Custom Application Notification and configure a Runtime Manager alert for it."
      },
      {
        "letter": "C",
        "text": "Configure an Anypoint Monitoring alert to scan logs for a DataWeave error string."
      },
      {
        "letter": "D",
        "text": "Define a custom metric in Anypoint Visualizer to highlight the application node."
      }
    ],
    "explanation": "A Mule flow can emit a Custom Application Notification through the CloudHub Connector, and Runtime Manager can alert on that notification.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "An HTTP status alert does not directly represent the specified internal business-logic condition."
      },
      "B": {
        "type": "Correct",
        "text": "The connector emits the custom notification from the flow, and Runtime Manager handles the notification alert."
      },
      "C": {
        "type": "Incorrect",
        "text": "The described alert cannot be configured by scanning application logs for an arbitrary error string."
      },
      "D": {
        "type": "Incorrect",
        "text": "Visualizer displays network topology and metrics; it does not create business-condition alerts."
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
    "correctAnswer": "B"
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
        "text": "Download logs manually from Runtime Manager every 30 days and store them in S3."
      },
      {
        "letter": "B",
        "text": "Purchase Anypoint Titanium, which natively extends CloudHub log retention to one year."
      },
      {
        "letter": "C",
        "text": "Configure a custom Log4j2 appender to forward logs to an external SIEM, and optionally disable CloudHub logging."
      },
      {
        "letter": "D",
        "text": "Use Object Store to save log payloads to a persistent Object Store v2."
      }
    ],
    "explanation": "Forwarding logs to an external SIEM provides durable, centrally managed retention beyond CloudHub's application log retention limits.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Manual periodic downloads are operationally fragile and do not provide a sound continuous archival strategy."
      },
      "B": {
        "type": "Incorrect",
        "text": "A subscription tier does not guarantee one-year CloudHub log retention for compliance archives."
      },
      "C": {
        "type": "Correct",
        "text": "An external SIEM can retain forwarded application logs for the required period; CloudHub logging can also be disabled if needed."
      },
      "D": {
        "type": "Incorrect",
        "text": "Object Store is not an appropriate mechanism for capturing and archiving application logs."
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
    "correctAnswer": "C"
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
        "text": "Anypoint Monitoring Custom Dashboards"
      },
      {
        "letter": "B",
        "text": "Anypoint Monitoring Built-in Dashboards"
      },
      {
        "letter": "C",
        "text": "Anypoint Visualizer"
      },
      {
        "letter": "D",
        "text": "API Manager Analytics"
      }
    ],
    "explanation": "Custom dashboards correlate metrics from multiple applications in one view, while built-in dashboards focus on individual applications.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Custom dashboards can combine the requested metrics from multiple APIs and applications in a single view."
      },
      "B": {
        "type": "Incorrect",
        "text": "Built-in dashboards show application-specific metrics and do not provide the requested cross-application composition."
      },
      "C": {
        "type": "Incorrect",
        "text": "Visualizer maps application topology rather than serving as a customizable metrics dashboard."
      },
      "D": {
        "type": "Incorrect",
        "text": "API Manager Analytics focuses on API usage analytics, not the combined infrastructure and response-time metrics described."
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
    "correctAnswer": "A"
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
        "text": "The Visualizer layer property is missing from the production applications."
      },
      {
        "letter": "B",
        "text": "The developer lacks Visualizer Editor permission in the production Business Group."
      },
      {
        "letter": "C",
        "text": "The developer lacks Read Applications permission for the production environment in Runtime Manager."
      },
      {
        "letter": "D",
        "text": "Visualizer does not automatically support multiple environments."
      }
    ],
    "explanation": "Visualizer visibility respects Runtime Manager environment permissions, so a user needs read access to the production applications.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A missing layer property can affect classification but does not explain environment-specific access to dependencies."
      },
      "B": {
        "type": "Incorrect",
        "text": "The issue described is read visibility, not editing the Visualizer canvas."
      },
      "C": {
        "type": "Correct",
        "text": "Without Read Applications permission in production, the user's production nodes and dependencies are not visible."
      },
      "D": {
        "type": "Incorrect",
        "text": "Visualizer can display applications from multiple environments when the user has the necessary access."
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
        "text": "MUnit Maven Plugin"
      },
      {
        "letter": "B",
        "text": "BAT (Behavioral Analytics Tool) CLI"
      },
      {
        "letter": "C",
        "text": "Anypoint CLI"
      },
      {
        "letter": "D",
        "text": "API Manager CLI"
      }
    ],
    "explanation": "The BAT CLI executes BDD-style API test suites from a local environment or CI/CD pipeline; MUnit primarily tests Mule application code.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "MUnit tests Mule application code and is not the described deployed-API BDD test runner."
      },
      "B": {
        "type": "Correct",
        "text": "BAT CLI executes the functional test suites against deployed APIs from command-line pipelines."
      },
      "C": {
        "type": "Incorrect",
        "text": "Anypoint CLI manages platform resources but is not the BDD API test execution tool."
      },
      "D": {
        "type": "Incorrect",
        "text": "API Manager CLI does not execute the specified BDD test suites."
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
    "correctAnswer": "B"
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
        "text": "Runtime Manager Dashboard"
      },
      {
        "letter": "B",
        "text": "Anypoint Visualizer"
      },
      {
        "letter": "C",
        "text": "API Manager Alerts"
      },
      {
        "letter": "D",
        "text": "Access Management Audit Logging"
      }
    ],
    "explanation": "Visualizer maps dependencies and provides troubleshooting views that help locate failing nodes in an API call chain.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Runtime Manager provides runtime status and metrics but not the visual dependency chain requested."
      },
      "B": {
        "type": "Correct",
        "text": "Visualizer shows API dependencies and troubleshooting metrics to help identify where errors originate."
      },
      "C": {
        "type": "Incorrect",
        "text": "API Manager alerts notify about API or policy conditions but do not visually trace downstream dependencies."
      },
      "D": {
        "type": "Incorrect",
        "text": "Audit logging tracks platform actions and does not diagnose request failures across APIs."
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
    "correctAnswer": "B"
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
        "text": "Deploy an API Proxy in CloudHub to route traffic to the on-premises VMs."
      },
      {
        "letter": "B",
        "text": "Install and configure the Anypoint Monitoring Agent on the on-premises runtime hosts."
      },
      {
        "letter": "C",
        "text": "Purchase Anypoint Titanium because on-premises monitoring is otherwise disabled."
      },
      {
        "letter": "D",
        "text": "Set `anypoint.platform.analytics_base_uri` in `wrapper.conf`."
      }
    ],
    "explanation": "Customer-hosted Mule runtimes require the Anypoint Monitoring Agent to collect and send metrics to the cloud monitoring plane.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "A CloudHub proxy is not required to enable monitoring of customer-hosted runtimes."
      },
      "B": {
        "type": "Correct",
        "text": "The monitoring agent must be installed and configured on the customer-hosted runtime environment."
      },
      "C": {
        "type": "Incorrect",
        "text": "The stated requirement is to install the agent; Titanium alone does not install or configure it."
      },
      "D": {
        "type": "Incorrect",
        "text": "This property is not the stated mechanism for enabling customer-hosted Anypoint Monitoring."
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
        "text": "Runtime Manager Alerts"
      },
      {
        "letter": "B",
        "text": "Anypoint Monitoring Logs"
      },
      {
        "letter": "C",
        "text": "Access Management Audit Logs"
      },
      {
        "letter": "D",
        "text": "API Manager Analytics"
      }
    ],
    "explanation": "Access Management audit logs record user actions across the platform, including resource deletion.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Runtime Manager alerts report configured runtime events and do not provide the user-action history needed."
      },
      "B": {
        "type": "Incorrect",
        "text": "Application logs do not serve as the authoritative record of which platform user deleted an application."
      },
      "C": {
        "type": "Correct",
        "text": "Audit Logs provide historical records of platform actions and identify the user who performed them."
      },
      "D": {
        "type": "Incorrect",
        "text": "API Manager Analytics reports API usage, not administrative deletion activity."
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
        "text": "API response time exceeds 2000 milliseconds."
      },
      {
        "letter": "B",
        "text": "HTTP 500 error rate exceeds 5% in the last hour."
      },
      {
        "letter": "C",
        "text": "Worker CPU utilization exceeds 90%."
      },
      {
        "letter": "D",
        "text": "The API receives a request with an invalid OAuth token."
      }
    ],
    "explanation": "Runtime Manager alerts cover worker infrastructure conditions such as CPU, memory, worker unresponsiveness, and custom notifications.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "API response-time thresholds are monitored through Anypoint Monitoring."
      },
      "B": {
        "type": "Incorrect",
        "text": "API error-rate thresholds are monitored through Anypoint Monitoring."
      },
      "C": {
        "type": "Correct",
        "text": "Worker CPU utilization is an infrastructure metric supported by Runtime Manager alerts."
      },
      "D": {
        "type": "Incorrect",
        "text": "Invalid-token and policy events are associated with API Manager rather than worker alerts."
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
    "correctAnswer": "C"
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
        "text": "Enable Verbose Logging in Runtime Manager application settings."
      },
      {
        "letter": "B",
        "text": "Apply a Message Logging policy to the API in API Manager."
      },
      {
        "letter": "C",
        "text": "Add a custom appender to `log4j2.xml` through the Runtime Manager UI."
      },
      {
        "letter": "D",
        "text": "Use the Anypoint Visualizer troubleshooting overlay."
      }
    ],
    "explanation": "The API Manager Message Logging policy can inject runtime logging for API requests without modifying or redeploying the Mule application.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Runtime Manager does not provide the described verbose request and payload logging switch."
      },
      "B": {
        "type": "Correct",
        "text": "Message Logging can log selected request information dynamically at the API policy layer."
      },
      "C": {
        "type": "Incorrect",
        "text": "The described Runtime Manager UI mechanism for editing application Log4j configuration is not available."
      },
      "D": {
        "type": "Incorrect",
        "text": "Visualizer troubleshooting views display topology and metrics, not request headers or payloads."
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
    "correctAnswer": "B"
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
        "text": "Configure log forwarding at the Runtime Fabric cluster level to forward container standard output to the external system."
      },
      {
        "letter": "B",
        "text": "Modify the `log4j2.xml` of every Mule application on the cluster."
      },
      {
        "letter": "C",
        "text": "Install the Splunk Connector in every Mule application."
      },
      {
        "letter": "D",
        "text": "Use BAT CLI to extract logs periodically."
      }
    ],
    "explanation": "Runtime Fabric container logs are emitted to standard output; cluster-level log forwarding provides centralized collection without per-application changes.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "Cluster-level forwarding centralizes standard-output collection and delivery to the external logging system."
      },
      "B": {
        "type": "Incorrect",
        "text": "Editing every application's logging configuration is more operationally costly than forwarding at the cluster level."
      },
      "C": {
        "type": "Incorrect",
        "text": "A connector in every application is not the recommended infrastructure-level log collection method."
      },
      "D": {
        "type": "Incorrect",
        "text": "BAT CLI runs functional tests and is not a log collection or forwarding tool."
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
    "correctAnswer": "A"
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
    "prompt": "An API's Anypoint Monitoring built-in dashboard shows many HTTP 429 (Too Many Requests) errors. What is the most likely cause?",
    "options": [
      {
        "letter": "A",
        "text": "The CloudHub Shared Load Balancer is dropping connections because of high traffic."
      },
      {
        "letter": "B",
        "text": "An API Manager Rate Limiting or Spike Control policy is rejecting requests."
      },
      {
        "letter": "C",
        "text": "The downstream System API is timing out."
      },
      {
        "letter": "D",
        "text": "The worker has run out of memory."
      }
    ],
    "explanation": "HTTP 429 is typically returned when API Manager enforcement rejects a client request for exceeding a Rate Limiting or Spike Control policy.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Load balancer connection drops do not typically produce policy-related HTTP 429 responses."
      },
      "B": {
        "type": "Correct",
        "text": "Rate Limiting and Spike Control policies return 429 when request limits are exceeded."
      },
      "C": {
        "type": "Incorrect",
        "text": "A downstream timeout generally produces a timeout or gateway error rather than a rate-limit response."
      },
      "D": {
        "type": "Incorrect",
        "text": "Out-of-memory conditions are not the likely cause of HTTP 429 responses."
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
    "correctAnswer": "B"
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
        "text": "`anypoint.platform.visualizer.tags=External`"
      },
      {
        "letter": "C",
        "text": "`anypoint.platform.client_id`"
      },
      {
        "letter": "D",
        "text": "`anypoint.platform.visualizer.group=External`"
      }
    ],
    "explanation": "The Visualizer tags property adds custom metadata for filtering and grouping; the layer property represents the System, Process, or Experience tier.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The layer property identifies an architectural tier, not an arbitrary custom traffic label."
      },
      "B": {
        "type": "Correct",
        "text": "The tags property adds custom labels such as Internal or External for Visualizer filtering."
      },
      "C": {
        "type": "Incorrect",
        "text": "The client ID property is unrelated to Visualizer custom labels."
      },
      "D": {
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
    "correctAnswer": "B"
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
    "prompt": "A company is evaluating Anypoint Titanium. Which capability is explicitly provided by the Titanium tier compared with the Base tier in Anypoint Monitoring?",
    "options": [
      {
        "letter": "A",
        "text": "Viewing basic CPU and memory metrics in Runtime Manager."
      },
      {
        "letter": "B",
        "text": "Using Anypoint Visualizer to map dependencies."
      },
      {
        "letter": "C",
        "text": "Searching logs across all applications in a specific environment simultaneously."
      },
      {
        "letter": "D",
        "text": "Applying SLA-based Rate Limiting policies."
      }
    ],
    "explanation": "Titanium provides advanced log management, including cross-application log search within an environment.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Basic runtime CPU and memory metrics are not the distinguishing cross-application log feature."
      },
      "B": {
        "type": "Incorrect",
        "text": "Visualizer availability is not the capability identified as differentiating Titanium log management."
      },
      "C": {
        "type": "Correct",
        "text": "Titanium supports searching logs across multiple applications in an environment."
      },
      "D": {
        "type": "Incorrect",
        "text": "SLA-based Rate Limiting is an API Manager policy capability, not the Titanium monitoring distinction."
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
    "correctAnswer": "C"
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
        "text": "It pings the application's `/api/status` endpoint every 10 seconds."
      },
      {
        "letter": "B",
        "text": "It monitors the internal Hazelcast cluster heartbeat."
      },
      {
        "letter": "C",
        "text": "CloudHub infrastructure monitors the underlying AWS instance and Mule Agent heartbeats from the worker."
      },
      {
        "letter": "D",
        "text": "It checks whether worker CPU has remained at 100% for more than five minutes."
      }
    ],
    "explanation": "CloudHub relies on infrastructure health and Mule Agent heartbeats; loss of the worker ping or an impaired instance can cause an unresponsive status.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The alert does not depend on repeatedly requesting an application-specific status endpoint."
      },
      "B": {
        "type": "Incorrect",
        "text": "The described worker-health determination is not based on a Hazelcast cluster heartbeat."
      },
      "C": {
        "type": "Correct",
        "text": "CloudHub infrastructure and Mule Agent heartbeats provide the signals used to detect worker unresponsiveness."
      },
      "D": {
        "type": "Incorrect",
        "text": "High CPU can be monitored separately; it is not the definition of worker unresponsiveness."
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
    "correctAnswer": "C"
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
        "text": "The API's CPU utilization is above 90%."
      },
      {
        "letter": "B",
        "text": "The application has crashed and its CloudHub worker is offline."
      },
      {
        "letter": "C",
        "text": "The API has experienced failing requests, such as HTTP 5xx responses, in the selected time range."
      },
      {
        "letter": "D",
        "text": "The API is missing an active Autodiscovery configuration."
      }
    ],
    "explanation": "The red indicator highlights request failures in the selected time range, rather than worker health, CPU thresholds, or Autodiscovery configuration.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The red ring represents failing requests, not a specified CPU threshold."
      },
      "B": {
        "type": "Incorrect",
        "text": "The indicator does not specifically mean the worker is offline or the application has crashed."
      },
      "C": {
        "type": "Correct",
        "text": "The red ring marks API request failures such as 5xx responses during the selected period."
      },
      "D": {
        "type": "Incorrect",
        "text": "Visualizer's red error indicator is not an Autodiscovery configuration warning."
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
        "text": "Add the Anypoint Monitoring Agent to the `pom.xml`."
      },
      {
        "letter": "B",
        "text": "Configure the API Autodiscovery global element with the API Manager API ID."
      },
      {
        "letter": "C",
        "text": "Set `anypoint.platform.analytics_base_uri` to `true`."
      },
      {
        "letter": "D",
        "text": "Configure a custom Log4j2 appender to send data to API Manager."
      }
    ],
    "explanation": "API Autodiscovery binds a running Mule application to its API Manager instance, enabling policy enforcement and API analytics.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "The monitoring agent is not the mechanism that registers an API implementation with API Manager."
      },
      "B": {
        "type": "Correct",
        "text": "The Autodiscovery global element and correct API ID bind the running application to its API Manager API instance."
      },
      "C": {
        "type": "Incorrect",
        "text": "This property is not a replacement for configuring API Autodiscovery."
      },
      "D": {
        "type": "Incorrect",
        "text": "Log4j2 appenders send logs, not API registration or policy enforcement metadata."
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
    "correctAnswer": "B"
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
        "text": "anypoint.platform.visualizer.layer=Orders System API"
      },
      {
        "letter": "B",
        "text": "anypoint.platform.visualizer.displayName=Orders System API"
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
    "explanation": "The application property anypoint.platform.visualizer.displayName=<name> sets the display name shown for a node on the API Visualizer canvas. It is an application property, not a server property, so it can be supplied at deployment time through Runtime Manager, CI/CD, or the platform API. The layer property controls layer assignment and the tags property controls tag filters; neither changes the node's displayed title.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "anypoint.platform.visualizer.layer assigns the node to a layer; it does not change the node's displayed name."
      },
      "B": {
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
    "correctAnswer": "B"
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
    "explanation": "Compliance mode becomes active when you select one or more policies in the Policies card. The number shown on an API node represents how many of the selected policies it complies with, and an API that complies with all of the selected policies turns green. A fraction, such as 2/3, signals partial compliance. Failure rate is a metric in the Troubleshooting visualization, and environment promotion is not represented by this indicator.",
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
        "text": "The tag can be renamed and removed from the Customization section in the UI."
      },
      {
        "letter": "B",
        "text": "The tag appears on the node but cannot be modified or overridden in the UI; it must be changed in the application properties."
      },
      {
        "letter": "C",
        "text": "The tag is applied only to the production environment and must be re-added for sandbox."
      },
      {
        "letter": "D",
        "text": "The tag replaces the node's layer assignment."
      }
    ],
    "explanation": "Tags set through the anypoint.platform.visualizer.tags property are controlled by the application properties. You can add tags in the UI, but you cannot override or modify a tag that was assigned through properties; it must be changed in the application's properties file. Tags and layers are independent customizations, and a tag is applied wherever the application is deployed rather than being scoped to a single environment.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Tags assigned via properties cannot be modified or removed from the UI; they must be changed in the application properties."
      },
      "B": {
        "type": "Correct",
        "text": "Property-assigned tags are shown on the node but cannot be overridden in the UI and must be edited in the application properties."
      },
      "C": {
        "type": "Incorrect",
        "text": "The tags property is not scoped to production; a tag is applied wherever the application is deployed."
      },
      "D": {
        "type": "Incorrect",
        "text": "Tags and layers are separate customizations; assigning a tag does not change the node's layer."
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
    "correctAnswer": "B"
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
    "prompt": "An architect notices that a connection (edge) is displayed between a Process API and a System API on the Anypoint Visualizer canvas, but another pair of APIs defined in the same project shows no edge. What is the most likely explanation?",
    "options": [
      {
        "letter": "A",
        "text": "Visualizer only draws edges between APIs assigned to the same layer."
      },
      {
        "letter": "B",
        "text": "Edges are drawn only when there has been traffic between the applications in the past seven days."
      },
      {
        "letter": "C",
        "text": "Edges require an API Manager policy to be applied to both APIs."
      },
      {
        "letter": "D",
        "text": "Edges are hidden until the Anypoint Monitoring agent is disabled."
      }
    ],
    "explanation": "Connections between nodes in API Visualizer are based on traffic that occurred between the applications or APIs in the last seven days. Edges shown between services are therefore active edges; nonactive app edges do not appear on the canvas. Layers, policies, and the Monitoring agent do not gate whether an edge is drawn.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Edges reflect actual traffic between services, not layer membership; APIs in different layers routinely show edges."
      },
      "B": {
        "type": "Correct",
        "text": "Edges are drawn from observed traffic in the past seven days; without traffic in that window, no edge is displayed."
      },
      "C": {
        "type": "Incorrect",
        "text": "Policies are not a prerequisite for drawing an edge; edges come from traffic data."
      },
      "D": {
        "type": "Incorrect",
        "text": "Disabling the Monitoring agent would remove metrics, not reveal edges; edges derive from traffic data."
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
    "correctAnswer": "B"
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
    "prompt": "A platform architect wants to create a saved, auto-discoverable view in Anypoint Visualizer so that all team members who have access to the included environments see the same filtered topology. Which permission is required to create this defined view?",
    "options": [
      {
        "letter": "A",
        "text": "Organization Administrator"
      },
      {
        "letter": "B",
        "text": "API Manager Policy Editor"
      },
      {
        "letter": "C",
        "text": "Visualizer Editor"
      },
      {
        "letter": "D",
        "text": "Runtime Manager CloudHub Network Viewer"
      }
    ],
    "explanation": "Only users with the Visualizer Editor permission can create, rename, edit, and delete defined views. Once saved, a defined view is auto-discoverable and available to any API Visualizer user who has permission for the included environments. Organization Administrator, Policy Editor, and CloudHub Network Viewer grant other capabilities and do not by themselves allow creating defined views.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Organization Administrator is a broad platform role; it is not the specific permission that grants view authoring in Visualizer."
      },
      "B": {
        "type": "Incorrect",
        "text": "API Manager Policy Editor manages policies; it does not grant the ability to create Visualizer views."
      },
      "C": {
        "type": "Correct",
        "text": "The Visualizer Editor permission is required to create and save defined views that other users can discover."
      },
      "D": {
        "type": "Incorrect",
        "text": "CloudHub Network Viewer affects visibility of network information, not the creation of saved Visualizer views."
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
    "correctAnswer": "C"
  },
  {
    "id": "q-318",
    "number": 318,
    "title": "Deployment Options - Refer to the exhibit.",
    "domain": "Deploying API implementations to CloudHub",
    "topics": [
      "Deployment Options"
    ],
    "prompt": "Refer to the exhibit.\nA customer is running Mule applications on Runtime Fabric for Self-Managed Kubernetes (RTF-BYOK8) in a multi-cloud environment. Based on this configuration, how do Agents and Runtime Manager communicate, and what is exchanged between them?",
    "image": "images/q229.svg",
    "options": [
      {
        "letter": "A",
        "text": "Agents communicate with Runtime Manager to provide updates on cluster status, download images, and update Mule applications (automatically when available) from the container registry"
      },
      {
        "letter": "B",
        "text": "Agents communicate with Runtime Manager to provide updates on cluster status, download images, and update Mule applications (when available and chosen to do so by customer) from the container registry"
      },
      {
        "letter": "C",
        "text": "Runtime Manager initiates traffic to Agents to check the status of clusters and auto-deploys new images when updates to Mule applications are available"
      },
      {
        "letter": "D",
        "text": "Runtime Manager communicates with Agents to provide updates on cluster status, download images, and update Mule applications (when available and chosen to do so by customer) from the container registry"
      }
    ],
    "explanation": "Correct answer: B. Runtime Fabric agents initiate the outbound connection to Runtime Manager over an mTLS tunnel and send cluster and application status updates. Runtime Manager does not push updates to agents: images and Mule application updates are pulled from the container registry only when the customer chooses, not automatically.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Says updates happen automatically when available, but all newer image pulls are triggered by the customer only."
      },
      "B": {
        "type": "Correct",
        "text": "Agents initiate communication to Runtime Manager, and image and Mule application updates happen only when the customer chooses."
      },
      "C": {
        "type": "Incorrect",
        "text": "Says Runtime Manager initiates traffic to the Agents, but the Runtime Fabric agent initiates and controls the mTLS tunnel."
      },
      "D": {
        "type": "Incorrect",
        "text": "Reverses the direction: it says Runtime Manager provides the updates to the Agents, but agents communicate outward to Runtime Manager."
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
        "text": "Implement the HTTP caching policy for all GET endpoints for the Master Look Up API"
      },
      {
        "letter": "B",
        "text": "Add an additional CloudHub worker of 0.1 vCore to provide additional capacity"
      },
      {
        "letter": "C",
        "text": "Implement locking to synchronize access to the Object Store"
      },
      {
        "letter": "D",
        "text": "Upgrade the vCore size from 0.1 vCore to 0.2 vCore"
      },
      {
        "letter": "E",
        "text": "Front the API with a Dedicated Load Balancer to reduce the database query latency."
      }
    ],
    "explanation": "Correct answers: A and D. The Master Look Up API is slow because each cache miss triggers a database query to refresh the cache, and the latency of those queries dominates the response time. Two independent levers address this. First, the HTTP Caching policy (A) caches HTTP responses for reuse: according to MuleSoft, \"Caching these responses speeds up the response time for user requests and reduces the load on the backend,\" and on a cache hit \"the stored response is returned\" without calling the backend, so repeated master-data lookups are served from the cache and the database is not queried at all. Second, the API is deployed on 0.1 vCore CloudHub workers, which \"provide limited CPU and I/O for apps with smaller workloads\" and \"can burst to higher CPU speeds for a short time\" rather than delivering consistent performance. Upgrading each worker to 0.2 vCore (D) raises worker memory from 1 GB to 2 GB and heap memory from 500 MB to 1 GB, giving the API more resources to serve the cached lookups. Option B (adding another 0.1 vCore worker) does not help: although CloudHub's HTTP load balancing service distributes requests across workers on a round-robin basis, each request is still served by a single 0.1 vCore worker with the same limited CPU and I/O, so extra workers add capacity rather than reduce the per-request latency caused by the database queries. Option C (locking) is wrong because Object Stores \"do not support transactional access or modification,\" and locking to synchronize access to the Object Store would serialize the cache and tend to increase, not decrease, response time.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "The HTTP Caching policy caches HTTP responses for reuse, which \"speeds up the response time for user requests and reduces the load on the backend.\" On a cache hit the stored response is returned without reaching the backend, so the database queries responsible for the latency are avoided for repeated lookups."
      },
      "B": {
        "type": "Incorrect",
        "text": "Adding another 0.1 vCore worker scales the application horizontally — CloudHub's HTTP load balancing service distributes requests across workers on a round-robin basis — but each request is still served by a single 0.1 vCore worker with the same limited CPU and I/O. More workers add capacity, not lower per-request latency, so the database-query delay remains."
      },
      "C": {
        "type": "Incorrect",
        "text": "Object Stores do not support transactional access or modification, and locking to synchronize access to the Object Store serializes cache access. It does not reduce the database-query latency that causes the slow responses and can make contention worse."
      },
      "D": {
        "type": "Correct",
        "text": "0.1 vCore workers provide limited CPU and I/O and can only burst to higher CPU speeds for short periods. Upgrading to 0.2 vCore doubles worker memory from 1 GB to 2 GB and heap memory from 500 MB to 1 GB, giving the API more resources to serve the cached lookups."
      },
      "E": {
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
      "A",
      "D"
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
        "text": "Alternative A, because embedding governance in the Mule runtime is the recommended choice for high-availability, high-performance non-Mule APIs running anywhere."
      },
      {
        "letter": "B",
        "text": "Alternative B, because Flex Gateway is an Envoy-based gateway that MuleSoft recommends for high-availability and high-performance Mule and non-Mule applications."
      },
      {
        "letter": "C",
        "text": "Alternative A, because non-Mule APIs must be rewritten as Mule applications before policies can be applied."
      },
      {
        "letter": "D",
        "text": "Neither; API governance rulesets are the only way to protect non-Mule APIs."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Mule Gateway is embedded in the Mule runtime engine and applies governance capabilities to Mule APIs; MuleSoft recommends it for Mule applications on CloudHub that do not require managing and maintaining underlying infrastructure. Note that Mule Gateway can also protect a non-Mule backend: because it runs as a Mule proxy application, you can configure Mule in Runtime Manager as a CloudHub proxy application protecting multiple backends, so a non-Mule backend does not have to be rewritten. Flex Gateway (Omni Gateway) is an Envoy-based, ultrafast lightweight API gateway designed to manage and secure APIs running anywhere, and MuleSoft recommends it for high-availability and high-performance Mule and non-Mule applications. Because the stated requirement emphasizes high availability and high performance across Mule and non-Mule APIs deployed in Kubernetes and on-premises, Flex Gateway is the better alternative.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "Mule Gateway can protect a non-Mule backend through a Mule-hosted proxy application, but it is embedded in the Mule runtime and does not match the stated high-availability/high-performance requirement across Kubernetes and on-premises as well as Flex Gateway."
      },
      "B": {
        "type": "Correct",
        "text": "Flex Gateway is the recommended Envoy-based gateway for high-availability and high-performance Mule and non-Mule APIs anywhere."
      },
      "C": {
        "type": "Incorrect",
        "text": "Non-Mule APIs do not need to be rewritten: Flex Gateway can protect them directly, and Mule Gateway can protect them through a Mule proxy application."
      },
      "D": {
        "type": "Incorrect",
        "text": "API Governance checks conformance to rulesets and is not a runtime policy enforcement gateway."
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
    "explanation": "The OpenID Connect OAuth 2.0 Token Enforcement policy restricts access to a protected resource to only those HTTP requests that provide a valid OAuth 2 token belonging to a client application with API access. It is available only to an organization configured to use the OpenID Connect dynamic client registration as a client-management solution. The policy extracts the token, sends it to the validation endpoint, receives token metadata including the client ID, and then verifies against a local database updated with contracts obtained from Anypoint Platform that the client ID has access to the API. The Mule OAuth Provider variant validates tokens issued by the Mule OAuth provider instead of an external IdP.",
    "rationales": {
      "A": {
        "type": "Correct",
        "text": "This policy validates OAuth 2.0 tokens for organizations using OpenID Connect dynamic client registration with an external IdP."
      },
      "B": {
        "type": "Incorrect",
        "text": "The Mule OAuth Provider policy validates tokens from the Mule OAuth provider, not an external OIDC IdP."
      },
      "C": {
        "type": "Incorrect",
        "text": "IP Allowlist filters by source IP address, not by OAuth 2.0 token validity."
      },
      "D": {
        "type": "Incorrect",
        "text": "JSON Threat Protection guards against malicious JSON payloads, not token validation."
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
        "text": "Create a Dedicated Load Balancer in the private space and upload the certificate to it."
      },
      {
        "letter": "B",
        "text": "Create a TLS context on the private space with the company certificate, add api.company.com as an external endpoint in the app's Ingress settings, and point a DNS CNAME at the private space's public DNS target."
      },
      {
        "letter": "C",
        "text": "Remove the default cloudhub.io TLS context and rely only on the custom certificate."
      },
      {
        "letter": "D",
        "text": "Deploy the API to a shared space, because private spaces do not support custom domains."
      }
    ],
    "correctAnswer": "B",
    "explanation": "CloudHub 2.0 uses TLS contexts to encrypt inbound traffic to the private space, and TLS contexts enable your apps to be reached at custom domains. Each private space includes one default TLS context for cloudhub.io that cannot be removed, and you can create additional TLS contexts with your own keystore. CloudHub 2.0 parses the CN and SAN lists from the certificate and makes those domains available when deploying applications. A TLS context and a CNAME alone are not sufficient to route the hostname: you must also configure api.company.com as an external endpoint in the app's Ingress settings (the administrator sets up the TLS context first, then the endpoint is selected from the Domain drop-down on the Ingress tab), and the CNAME must point at the private space's public DNS target. There is no DLB to create for a private space.",
    "rationales": {
      "A": {
        "type": "Incorrect",
        "text": "CloudHub 2.0 private spaces use a managed ingress load balancer, not a customer-created DLB."
      },
      "B": {
        "type": "Correct",
        "text": "A private space TLS context plus an external endpoint for the domain in the app's Ingress settings plus a DNS CNAME to the private space's public DNS target maps the custom domain to the app over HTTPS."
      },
      "C": {
        "type": "Incorrect",
        "text": "The default cloudhub.io TLS context cannot be removed."
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
  }
]
