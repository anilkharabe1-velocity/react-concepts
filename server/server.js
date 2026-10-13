// Simple demo API for React Query mutations
// Run: npm run server   ->   http://localhost:4000

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;
const DELAY_MS = 1000; // fake network delay so students can see isPending / loading states

app.use(cors()); // allow requests from the React app (different port)
app.use(express.json()); // parse JSON request bodies into req.body

// Log every request and add a fake delay
app.use((req, res, next) => {
  console.log(req.method, req.url);
  setTimeout(next, DELAY_MS);
});

// In-memory "database" (resets when the server restarts)
let nextId = 3;
let books = [
  { id: 1, username: "Ravi", book: "Atomic Habits" },
  { id: 2, username: "Priya", book: "The Alchemist" },
];

function validate({ username, book } = {}) {
  if (!username || !username.trim()) return "username is required";
  if (!book || !book.trim()) return "book is required";
  return null;
}

// GET /books -> list all
app.get("/books", (req, res) => {
  res.json(books);
});

// POST /books -> create { username, book }
app.post("/books", (req, res) => {
  const error = validate(req.body);
  if (error) return res.status(400).json({ message: error });

  const item = {
    id: nextId++,
    username: req.body.username.trim(),
    book: req.body.book.trim(),
  };
  books.push(item);
  res.status(201).json(item);
});

app.listen(PORT, () => {
  console.log(`Books API running at http://localhost:${PORT}/books`);
});
