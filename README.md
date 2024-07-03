# Project Title
Find-my-mechanic

## Overview

Find-my-mechanic is a product for users who find themselves stranded needing auto-mechanic assistance.

### Problem

About one in three drivers find themselves stranded in an unknown area due to a car breakdown, a situation that can be both unprecedented and stressful. This leaves drivers vulnerable, often facing long hours of waiting for assistance. The uncertainty is compounded by concerns over the trustworthiness and quality of the repair services available. Ensuring reliable help and maintaining peace of mind in such scenarios remains a significant challenge for many motorists.


### User Profile

- Drivers:
    - stranded with a broken down vehicle in an unknown location
    - that want to try fixing their cars on their own, instead of   waiting
    - looking for auto-mobile repair services around them
    - looking to calculate the costs of repair for their vehicle


### Features

- As a user, I want to able to find the closest repair service closest to any given location.
- As a user, I want to able to find the closest repair service closest to my current location.
- As a user, I want to able to find the best quality of repair service closest to any given location.
As a user, I want to able to schedule a repair service closest to any current location.
- As a user, I want to be able to view the cost estimates of repair services for a given issue.
- As a user, I want to be able to view possible self-help options.

- As a user, I want to be able to create an account to view the details of my scheduled services.
- As a user, I want to be able to login in to my account to view the details of my scheduled services.

- As a logged in user, I want to store my vehicle's details for future use.

- As a logged in user, I want to see how far away the repair service is from location.
- As a logged in  user, I want to be able to rate the service of the repair person.
- As a logged in  user, I want to be able to update the rating the service of the repair person.
- As a logged in  user, I want to be able to view my repair history and cost.


## Implementation

### Tech Stack

- React
- MySQL
- Express
- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - knex
    - express
    - bcrypt for password hashing

### APIs

Geolocation Api 

### Sitemap

- Home page
- Book a service
- Self-help
- Register
- Login

### Mockups

#### Home Page
![](homepage.jpg)

#### Register Page
![](sign-up.jpg)

#### Save Car Details Page
![](save-car-details.jpg)

#### Book a service Page
![](book-service.jpg)

#### Enter Location Page
![](set-location.jpg)


#### Mechanic details Page
![](mechanic-details.jpg)

#### Review Page
![](review-page.jpg)


### Data

![](diagram.png)



### Endpoints

**GET /mechanics**

- Get mechanics info.

Parameters:
- longitude: User-provided location as a number
- latitude: User-provided location as a number


Response:
```
[ {
    "id": 1,
    "name": "John Doe",
    "specialty": "Engine Repair",
    "experience_years": 10,
    "contact": {
      "phone": "+1 (123) 456-7890",
      "email": "john.doe@example.com"
    },
    "rating": 4.8,
    "location": "123 Main St, Springfield, IL",
    "available": true
  },
]
```
**GET /mechanics/:id**

- Get mechanics by id.

Parameters:
- id: mechanics id as number

Response:
```
[ {
    "id": 1,
    "name": "John Doe",
    "specialty": "Engine Repair",
    "experience_years": 10,
    "contact": {
      "phone": "+1 (123) 456-7890",
      "email": "john.doe@example.com"
    },
    "rating": 4.8,
    "location": "123 Main St, Springfield, IL",
    "available": true
  },
]
```

**GET /mechanics/:id/review**

- Get mechanics by id, with an optional "userRating" if the user is logged in or not

Parameters:
- id: mechanics id as number
- token (optional):  JWT used to add user rating

Response:
```
[ {
    "id": 1,
    "name": "John Doe",
    "specialty": "Engine Repair",
    "experience_years": 10,
    "contact": {
      "phone": "+1 (123) 456-7890",
      "email": "john.doe@example.com"
    },
    "rating": 4.8,
    "location": "123 Main St, Springfield, IL",
    "available": true
  },
]
```



**GET /costEstimates**

- Get cost estimate, returns a json object of services and estimated prices.

Parameters:
- token: JWT of the logged in user
- service
- estimated_price

Response:
```
{
  "service": "Brake replacement",
  "location": "NYC",
  "estimated_price": {
    "min": 150,
    "max": 250,
    "average": 200
  },
}

```

**GET /mechanics/:id/costEstimates**

- Get cost estimate, based on mechanic id returns a json object of services and estimated prices.

Parameters:
- id: mechanic id.
- token: JWT of the logged in user
- estimated_price.

Response:
```
"mechanics": 
    {
      "id": 1,
      "name": "John's Auto Repair",
      "price": 200
    },
    {
      "id": 2,
      "name": "AutoFix",
      "price": 220
    }
  

```

**POST /mechanics/:id/rating**

- Logged in user can add their rating of a mechanic

Parameters:
- id: mechanic id
- token: JWT of the logged in user
- rating: Number Rating out of 5 in 0.5 increments

Response:
```
[ {
    "id": 1,
    "name": "John Doe",
    "specialty": "Engine Repair",
    "rating": 4.8,
    "userRating": 4,
  },
]
```

**POST /users/register**

- Add a user account

Parameters:

- email: User's email
- password: User's provided password

Response:
```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**POST /users/login**

- Login a user

Parameters:
- email: User's email
- password: User's provided password

Response:
```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**POST /carDetails/:id/**

- Logged in user can add their car details.

Parameters:
- id: user id
- token: JWT of the logged in user

Response:
```
[ {
    "id": 1,
    "name": "John Doe",
    "vehicle_name": "Engine Repair",
    "vehicle_brand": 4.8,
    "vehicle_year": 4,
  },
]
```

### Auth

- JWT auth
    - Before adding auth, all API requests will be using a fake user with id 1
    - Added after core features have first been implemented
    - Store JWT in localStorage, remove when a user logs out
    - Add states for logged in showing different UI in places listed in mockups
## Roadmap

- Create client
    - react project with routes and boilerplate pages

- Create server
    - express project with routing, with placeholder 200 responses

- Create migrations

- Gather 15 sample mechanic information and their locations.

- Create seeds with sample mechanic data

- Deploy client and server projects so all commits will be reflected in production

- Feature: List mechanics from a given location
    - Implement list mechanics page including location form
    - Store given location in sessionStorage
    - Create GET /mechanics endpoint

- Feature: View mechanic
    - Implement view mechanic page
    - Create GET /n/:id 

- Feature: Rate mechanic
    - Add form input to view mechanic page
    - Create POST /ratings
    - States for add & update ratings 

- Feature: Home page

- Feature: Create account
    - Implement register page + form
    - Create POST /users/register endpoint

- Feature: Login
    - Implement login page + form
    - Create POST /users/login endpoint

- Feature: Implement JWT tokens
    - Server: Update expected requests / responses on protected endpoints
    - Client: Store JWT in local storage, include JWT on axios calls

- Bug fixes

- DEMO DAY

## Nice-to-haves

- Integrate Google Places / Maps
    - Self-help funtionality
    - Schedule a service
- Forgot password functionality
- Elite status badging for mechanics.
- Unit and Integration Tests
