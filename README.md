# eCommerce Database

## Description

Online retail stores need a way to organzie their products and inventory. This application provides a way to store and interact with all this information in a local database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)

## Installation

Note: To install this program you must already have node.js and mySQL installed on your device.

1. Download this repository on your local device.

2. Open the `eCommerce` directory in your command line.

3. Run the command `npm i`.

4. Create a file called `.env` with the following information replacing your mySQL username and password where indicated, you can also change the database name if desired: 

        DB_NAME='ecommerce_db'

        DB_USER='YOUR USERNAME HERE'

        DB_PASSWORD='YOUR PASSWORD HERE'

5. In the command line open the mySQL shell by running `mysql -u YOUR USERNAME HERE -p`, substituting your mySQL username where indicated, followed by your mySQL passowrd. 

6. In the mySQL shell run `source db/schema.sql;`. Then exit the shell by running `quit`. 

7. If you would like some seed data to get started, in the command line run `node seeds/index.js`. This is optional. 

8. You are now ready to begin using the application. 

## Usage

Note: User must be familiar with API developement through mySQL to use this application. 

After installtion, make sure you are in the `eCommerce` directory. In the command line, run `npm start` to start the server. Navigate to your preffered API development platform, the walkthrough video uses Insomnia. The following routes are available to interact with:

* `GET/POST: localhost:3001/api/products`
* `GET/PUT/DELETE: localhost:3001/api/products/:id`
* `GET/POST: localhost:3001/api/categories`
* `GET/PUT/DELETE: localhost:3001/api/categories/:id`
* `GET/POST: localhost:3001/api/tags`
* `GET/PUT/DELETE: localhost:3001/api/tags/:id`

Click [here]() for a video walkthrough of the application.

## Questions

For any questions about this project please contact:

github.com/jzelasky

jzelasky@gmail.com