
# Walla second hand shop on React

## Local Environment Installation and Execution

### Requirements:
Node v16.14.0

### Cloning the Repository:

`git clone https://github.com/Balexo/react_practica.git`

### Installing Dependencies:
`npm install`

### Application Execution (Default Port 3000):
`npm start`

### Backend Startup:
The backend is based on the implementation in Nestjs developed by David Jiménez:

`https://github.com/transitive-bullshit/chatgpt-api`

### Once cloned and its dependencies are installed, run:

`npm start`

The backend runs by default on port 3001

### Authenticating a User on the Home Page:

Predefined user:

Username: user@user.com
Password: 1234


## Basic Features:

* Register a new user
* Authenticate a user against the backend
* Keep credentials/accesToken on the user's device
* Create ads with five fields - name, price, sale, tags, photo- (photo fields is not required). Adds are persisted on the backend
* View the list of existing ads
* View the details of an ad
* Search and find ads based on criteria: name, min and max price, and categories
* Delete an ad (after confirmation)
* Log out (after confirmation)

### Notes:
Ad filtering is done on the frontend, so searches by filters do not involve additional requests to the backend.
