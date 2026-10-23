# Salesforce Certified MuleSoft Platform Architect — Exam Guide

Source: <https://help.salesforce.com/s/articleView?id=005298956&type=1> (Spring '24 release)

## About the Exam

- **Content:** 60 multiple-choice questions and up to five non-scored questions
- **Time allotted:** 120 minutes
- **Passing score:** 70%
- **Registration fee:** US$400, JPY 60,000, plus applicable taxes
- **Retake fee:** US$200, JPY 30,000, plus applicable taxes
- **Delivery:** Proctored, onsite at a testing center or online
- **References:** No hard-copy or online materials may be referenced during the exam
- **Prerequisite:** None

## Audience

Candidates define and are responsible for an organization's Anypoint Platform strategy, and can direct the emergence of an effective application network out of individual integration solutions following API-led connectivity across an organization using Anypoint Platform.

Typical job roles (with experience in common integration approaches such as SOA, integration technologies/platforms, and basic knowledge of Anypoint Platform components):

- Enterprise Architects
- Solution Architects

## Exam Outline

The exam measures knowledge and skills related to the following objectives.

### Explaining application network basics: 7%
- Identify and differentiate between technologies typically used to implement API-led connectivity.
- Describe the role and characteristics of web APIs.
- Correctly assign APIs to tiers according to ownership, functional focus, and rate of change.
- Describe the capabilities and high-level components of Anypoint Platform.

### Establishing organizational and platform foundations: 10%
- Advise on establishing a Center for Enablement (C4E) and identify key performance indicators (KPIs) to measure its success.
- Describe the high-level structure and benefits of MuleSoft Catalyst.
- Choose between options for hosting and managing Anypoint Platform control and runtime planes.
- Compare and contrast Identity Management and Client Management options on Anypoint Platform.
- Identify data residency of different kinds of data (payload, metrics, and others).

### Designing and sharing APIs: 10%
- Identify dependencies between an API, its API specification, its implementation, and its clients.
- Describe the creation and publication of reusable API-related assets using API specifications and Anypoint Platform components.
- Identify changes to an API that would require or not require changing the major/minor/patch component of its semantic version.
- Given a specific power relationship between two Bounded Contexts, choose the most appropriate strategy for mapping between the API data models of these Bounded Contexts.
- Identify idempotent HTTP methods and HTTP-native support for optimistic concurrency.

### Designing APIs using System, Process, and Experience Layers: 12%
- Identify appropriate APIs to implement a business process and assign them to layers of API-led connectivity.
- Assign APIs to layers according to ownership, functional focus, and rate of change.
- Recommend the most appropriate approach relating the API data model of System APIs to that of their backend system based on specific requirements and organizational characteristics.
- Recommend the use of an Enterprise Data Model or Bounded Context Data Models based on a set of APIs and specific preferences and organizational characteristics.
- Select DataGraph only for suitable roles in an application network, according to its high-level features.

### Governing web APIs on Anypoint Platform: 17%
- Make appropriate use of API instances and environments in API Manager, taking into account the nature of the API and the underlying data and system.
- Select appropriate API policies and other components of the API to support specific non-functional requirements (NFRs).
- Identify any change(s) required to an API specification to reflect the application of an API policy with specific characteristics.
- Select an approach to API policy enforcement based on specific preferences and constraints, including, but not limited to, API proxies/API gateways and Anypoint Service Mesh.
- Secure web APIs using API policies appropriately chosen for the API's tier (System, Process, Experience).
- Describe in what circumstances and how to pass client ID and secret to a web API.
- Explain how to request access to an API version for an API client, and how that access is approved and revoked.
- Select appropriate API policies to enforce non-functional security constraints on web API invocations.
- Explain the relationships of Anypoint Platform, external Identity Providers (IdPs), API Business Groups, and API clients in the context of OAuth 2.0.
- Identify scenarios needing custom API policies.

### Architecting and deploying API implementations: 11%
- Explain how to use auto-discovery to link a web API implementation to an API instance managed with API Manager.
- Identify requirements that call for the use of an Anypoint Virtual Private Cloud (VPC).
- Compare and contrast options for hosting and managing Anypoint Platform runtime planes.
- Compare unit and integration tests and specify where MUnit is best employed.
- Explain options for automated building, testing, and deployment of API implementations and related artifacts in a DevOps setting.

### Deploying API implementations to CloudHub: 11%
- Describe the scenarios for which Object Store (OS) should be used with CloudHub.
- Select CloudHub worker sizes and configuration as appropriate.
- Given an app deployed to the CloudHub shared worker cloud in one or more regions, describe and predict its reliability and performance characteristics.
- Identify the defining differences between the CloudHub Shared and Dedicated Load Balancers.
- Compare and contrast the options for CloudHub networking in the presence of customer-owned Amazon VPCs and on-premises data centers.
- Identify and avoid single points of failure in CloudHub deployments of API implementations.

### Meeting API quality goals: 10%
- Design, describe, and differentiate between scenarios that use an OS or caching.
- Select resilience strategies that help web API clients guard against failures when invoking APIs.
- Describe when horizontal scaling of an API implementation is or is not likely to benefit response time and throughput as seen by API clients.

### Monitoring and analyzing application networks: 12%
- Identify the components of Anypoint Platform that generate data for monitoring and alerting.
- Describe the metrics collected by Anypoint Platform for API invocations.
- Specify alerts to define for key metrics of API invocations for all layers of API-led connectivity.
- Specify alerts to define for Mule applications.

## Recommended Training and Resources

A combination of hands-on experience, training course completion, Trailhead trails, and self-study is recommended in the areas listed in the Exam Outline.

Recommended Trailhead Academy course:
- [Anypoint Platform Architecture: Application Networks (ARC720)](https://trailhead.salesforce.com/en/academy/classes/arc720-anypoint-platform-architecture-application-networks/)

Documentation, Tip Sheets, and User Guides are searchable through [Salesforce Help](https://help.salesforce.com/).

## Maintaining the Certification

There is no required maintenance for the Salesforce Certified MuleSoft Platform Architect certification at this time. Continued learning is encouraged through the Trailblazer Community, Trailhead, and Trailhead Academy.