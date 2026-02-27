# Short Response Questions

Answer each question below in your own words. Aim for 3–5 sentences per answer. Be specific — use the exact terms and concepts from the lesson.

Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

---

## Question 1: Server Basics

What does it mean for a server to be "listening"? In your answer, explain the roles of **host**, **port**, and **localhost**.

**Your answer here**:

Servers not only recieve requests and send responses it actively listens for incoming connections on a specific port, ports are like doors
different doors when a server starts listening on a specific `port` (door) like saying I'm here send requests to this `port`
When your server is running locally, the host is **localhost** (your own computer) and the port is whatever number you chose.

## Question 2: req and res

In the callback passed to `http.createServer((req, res) => { ... })`, what are `req` and `res`? Give at least one example of a property or method from each, and explain what it does.

**Your answer here**:

In `http.createServer((req, res) => { ... })`, `req` (request) represents the incoming HTTP request from the client, and `res` (response) represents the server’s response that will be sent back to the client.

The `req` object contains information about what the client is asking for. For example:

- `req.method` - tells you the HTTP method used (`GET`, `POST`, etc.).

- `req.url` - tells you the path the client requested (like `/home` or `/api/users`).

The `res` object is used to send data back to the client. For example:

- `res.writeHead`(statusCode, headers) - sets the HTTP status code and response headers.

- `res.end`(data) - sends the response and closes the connection.

Together, `req` helps you understand the request, and `res` allows you to control what the server sends back.

## Question 3: Routing

What is **routing** in the context of a server, and how do you implement it using `node:http`? Why is it important to use `return` after calling `res.end()`?

**Your answer here**:

Routing is the process of determining how a server responds to different URLs/paths and HTTP methods. It allows the server to send different responses depending on what the client requests.

When using `node:http`, routing is typically implemented by checking `req.url` and `req.method` inside the `createServer` callback.
Routing is important because it allows one server to handle multiple endpoints.

It is important to use return after calling `res.end()` because once the response is sent, the function should stop executing. Without return, the server may continue running additional code and attempt to send another response, which can cause **errors** like “Cannot set headers after they are sent.”
