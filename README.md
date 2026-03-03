# Simple API

This project outlines a simple REST API using Express.js. It is intended for learning purposes and as a demonstration of how to set up a basic API server in Node.js.

## Purpose

The goal of this package is to provide a minimal, easy-to-understand example of a REST API. It is ideal for beginners who want to learn how to:

- Set up an Express server
- Define basic API endpoints
- Handle JSON requests and responses

## Setup

1. **Clone the repository** (if you haven't already):
	```sh
	git clone <repository-url>
	cd simple-api
	```

2. **Install dependencies** using npm or yarn:
	```sh
	npm install
	# or
	yarn install
	```

3. **Start the server:**
	```sh
	node index.js
	```

The server will start on the default port (usually 3000). You can then send requests to the API endpoints as described in the code.

## Example Usage

To test the API, you can use curl or any API client (like Postman). For example:

```sh
curl -X POST http://localhost:3000/api/echo \
  -H "Content-Type: application/json" \
  -d '{"hello":"world"}'
```

## License

MIT
