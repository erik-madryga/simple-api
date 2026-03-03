const express = require('express');
const app = express();
const port = 3000;

// simple endpoint
app.get("/api/status", (req, res) => {
    res.json({ status: "dope" });
});

// get all users
app.get("/api/users", (req, res) => {
    // In a real application, you would fetch this data from a database
    res.json([
        { id: 1, name: "Batman " },
        { id: 2, name: "Superman" },
        { id: 3, name: "Wonder Woman" }
    ]);
});

// accepting input
app.use(express.json()); // Middleware to parse JSON bodies

app.post("/api/echo", (req, res) => {
    res.json({
        sentBody: req.body
})
})

app.listen(port, () => {
    console.log(`Server is running and is exposing API endpoints at http://localhost:${port}`);
});