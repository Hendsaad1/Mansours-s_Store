# Mansour’s Store – Backend API

## Description

A simple store management system with products, purchase invoices, sales, returns, and dashboard statistics. Built with Node.js, Express, and MongoDB.

## Products APIs

### Add Products
- **Endpoint**: post `http://localhost:5000/api/products/add`
- **Description**: Adds multiple products to the inventory in a single request.
- **Request Body** (Required):
  ```json
  {
    "products": [
      {
        "name": "string (required)",
        "size": "number (required)",
        "purchasePrice": "number (required)",
        "sellPrice": "number (required)"
      }
    ]
  }
  ```
- **Optional Fields**: None
- **Example Request**:
  ```json
  {
    "products": [
      {
        "name": "T-Shirt",
        "size": 42,
        "purchasePrice": 50,
        "sellPrice": 80
      },
      {
        "name": "Jeans",
        "size": 32,
        "purchasePrice": 100,
        "sellPrice": 150
      }
    ]
  }
  ```
- **Success Response** (201):
  ```json
  {
    "success": true,
    "data": [
      {
        "_id": "64f...",
        "name": "T-Shirt",
        "size": 42,
        "purchasePrice": 50,
        "sellPrice": 80,
        "dataAdded": "2023-10-01T12:00:00.000Z"
      }
    ]
  }
  ```
- **Error Response** (400):
  ```json
  {
    "success": false,
    "message": "البيانات غير صحيحة"
  }
  ```
- **Error Response** (500):
  ```json
  {
    "success": false,
    "message": "Database error message"
  }
  ```

## Purchase APIs

No implemented APIs yet. Placeholder routes exist.

## Sales APIs

No implemented APIs yet. Placeholder routes exist.

## Return APIs

No implemented APIs yet. Placeholder routes exist.

## Users/Auth APIs

No implemented APIs yet. Placeholder routes exist.

## Dashboard APIs

No implemented APIs yet.

## Base URL

For local development: `http://localhost:5000`

## Notes for Front-End Usage

- All responses include a `success` boolean field.
- Use Arabic messages for user-facing errors if needed.
- Ensure request bodies are sent as JSON with `Content-Type: application/json`.
- Handle both success and error responses appropriately.

## Error Codes

- **400**: Bad Request (invalid data, e.g., non-array products)
- **500**: Internal Server Error (database issues, etc.)

## Database Models

### Product Model
- **name**: String (required)
- **size**: Number (required)
- **purchasePrice**: Number (required)
- **sellPrice**: Number (required)
- **dataAdded**: Date (default: current timestamp)

Stored in MongoDB collection: `products`
