const express = require('express');

const app = express();
const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());

// In-memory collection of books
let books = [
    {
        id: 1,
        title: "The Hobbit",
        author: "J.R.R. Tolkien"
    },
    {
        id: 2,
        title: "Harry Potter",
        author: "J.K. Rowling"
    }
];

// GET - Get all books
app.get('/books', (req, res) => {
    res.status(200).json(books);
});

// GET - Get one book
app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    res.status(200).json(book);
});

// POST - Create a new book
app.post('/books', (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({
            message: "Title and author are required"
        });
    }

    const newBook = {
        id: books.length + 1,
        title: title,
        author: author
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

// PUT - Update a book
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({
            message: "Title and author are required"
        });
    }

    book.title = title;
    book.author = author;

    res.status(200).json(book);
});

// DELETE - Delete a book
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(book => book.id === id);

    if (bookIndex === -1) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    const deletedBook = books.splice(bookIndex, 1)[0];

    res.status(200).json({
        message: "Book deleted successfully",
        book: deletedBook
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});