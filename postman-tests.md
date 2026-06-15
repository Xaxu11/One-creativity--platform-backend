Postman Testing Guide

Test 1: Get All Services

Method: GET

Endpoint:
/services

Expected Result:
Returns all services in JSON format.

⸻

Test 2: Get Service By ID

Method: GET

Endpoint:
/services/1

Expected Result:
Returns one service record.

⸻

Test 3: Create Service

Method: POST

Endpoint:
/services

Sample Body:

{
“title”: “Logo Design”,
“category”: “Design”,
“description”: “Professional logo creation”,
“price”: 100,
“provider_name”: “Creative Studio”
}

Expected Result:
Creates a new service and returns a success response.
