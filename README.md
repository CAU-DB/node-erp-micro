# node-erp-micro

Node.js GUI extensions for ERP-Micro

## Installation

To install the dependencies, run the following command:

```bash
npm install
```

## Setting up the .env file

Create a `.env` file in the root directory of your project and add the following environment variables:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=ERP-Micro
PORT=3000
```

Replace the values with your actual database configuration.

The server will start on the port specified in the `.env` file or default to port 3000.

## Usage

To start the application, run the following command:

```bash
npm start
```

## API Endpoints

The following endpoints are available:

-   `GET /api/v1/:model` - Get all records of the specified model
-   `GET /api/v1/:model/:id` - Get a single record by ID
-   `POST /api/v1/:model` - Create a new record
-   `PUT /api/v1/:model/:id` - Update a record by ID
-   `DELETE /api/v1/:model/:id` - Delete a record by ID

## Models

The following models are available:

-   Account
-   Account Period
-   Approval
-   Attendance
-   Bank Account
-   Basic Salary
-   Budget
-   Customer
-   Department
-   Employee
-   Employee Detail
-   Factory
-   Inventory
-   Journal
-   Order
-   Order Product
-   Participation
-   Pay
-   Pay Category
-   Payment
-   Payment Card
-   Permission
-   Position History
-   Product
-   Production
-   Project
-   Status History
-   Supplier
-   Supply
-   Transaction
-   Use Account
-   Warehouse

## Sample Data

To add sample data to the database, use the following endpoint:

-   `GET /api/v1/add-sample-data`

## Testing

To test the API, open the `tester.html` file in the `public` directory in your browser or go to [localhost:3000/tester](http://localhost:3000/tester).
