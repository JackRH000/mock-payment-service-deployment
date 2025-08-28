# API Service

This project is an Express-based API service that simulates payment processing through a mock implementation of the MPGS (Mastercard Payment Gateway Services) API.

## Project Structure

- **src/**: Contains the source code for the application.
  - **app.ts**: Entry point of the application. Sets up the Express app and middleware.
  - **routes/**: Contains route definitions.
    - **pay.ts**: Defines the `/pay` endpoint and connects it to the PayController.
  - **controllers/**: Contains the logic for handling requests.
    - **payController.ts**: Implements the `PayController` class, which processes payment requests and returns mock responses.
  - **types/**: Contains TypeScript interfaces.
    - **mpgs.ts**: Defines the structure of mock MPGS responses.

## Installation

To install the necessary dependencies, run:

```
npm install
```

## Running the Application

To start the application, use the following command:

```
npm start
```

The server will run on `http://localhost:3000`.

## Endpoints

### POST /pay

This endpoint simulates a payment processing request. It returns a mock response that mimics the structure of a real MPGS response.

#### Request Body

The request should include the necessary payment details (e.g., amount, currency, card information).

#### Response

The response will be a JSON object that represents either a successful payment or an error response, based on the mock implementation.

## License

This project is licensed under the MIT License.