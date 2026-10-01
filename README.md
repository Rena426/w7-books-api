# Week 7 Books REST API

This project is a simple REST API built with Node.js and Express.

The API uses an in-memory collection of books and supports CRUD operations.

## How to Run

1. Install the dependencies:

```text
npm install
```

2. Start the server:

```text
node server.js
```

3. Open:

```text
http://localhost:3000/books
```

## API Reference

| Method | Endpoint     | Description              |
| ------ | ------------ | ------------------------ |
| GET    | `/books`     | Returns all books        |
| GET    | `/books/:id` | Returns one book by ID   |
| POST   | `/books`     | Creates a new book       |
| PUT    | `/books/:id` | Updates an existing book |
| DELETE | `/books/:id` | Deletes a book           |

## Example Book

```json
{
    "id": 1,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien"
}
```

## Status Codes

* `200` — Request was successful
* `201` — Book was successfully created
* `400` — Missing required information
* `404` — Book was not found
