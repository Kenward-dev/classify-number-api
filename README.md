# Number Properties API

A RESTful API that analyzes numbers and returns their mathematical properties, including Armstrong numbers, prime numbers, perfect numbers, and fun facts fetched from the Numbers API.

## Features

- Determines if a number is prime
- Determines if a number is perfect
- Identifies Armstrong numbers
- Calculates digit sum
- Provides odd/even classification
- Fetches fun mathematical facts from Numbers API
- CORS enabled
- Error handling
- Input validation

## API Specification

### Endpoint

```
GET /api/classify-number?number=<integer>
```

### Success Response (200 OK)

```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is the smallest strobogrammatic number in base 10 that's also an Armstrong number"
}
```

### Error Response (400 Bad Request)

```json
{
    "number": "alphabet",
    "error": true
}
```

### Error Response (500 Internal Server Error)

```json
{
    "number": "123",
    "error": true,
    "message": "Internal server error"
}
```

## Technical Stack

- Node.js
- Express.js
- Axios for HTTP requests
- CORS middleware

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Kenward-dev/classify-number-api.git
```

2. Navigate to the project directory:
```bash
cd classify-number-api
```

3. Install dependencies:
```bash
npm install
```

4. Start the server:
```bash
npm start
```

The API will be available at `http://localhost:3000` by default.

## API Usage Examples

### Using curl

```bash
curl "http://localhost:3000/api/classify-number?number=371"
```

## Error Handling

The API implements robust error handling:

- Invalid input validation
- Numbers API timeout handling
- Internal server error handling
- Detailed error messages in development mode

## Testing

Run the test suite:

```bash
npm test
```

## Deployment

### Prerequisites

- Node.js 14.x or higher
- NPM 6.x or higher

### Deployment Steps

1. Build for production:
```bash
npm run build
```

2. Set environment variables on your hosting platform
3. Start the application:
```bash
npm start
```

### Deployment Platforms

The API can be deployed to:

-Vercel
-Render
- Heroku
- DigitalOcean
- AWS Elastic Beanstalk
- Google Cloud Platform
- Azure App Service

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- [Numbers API](http://numbersapi.com) for providing mathematical facts
- Express.js team for the web framework
- Axios team for the HTTP client

## Support

For support, email codewiwthkenward@gmail.com or open an issue in the GitHub repository.