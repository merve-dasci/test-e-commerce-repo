# API Test Documentation

## Authentication Endpoints

### 1. POST /login
**URL:** `https://workintech-fe-ecommerce.onrender.com/login`

#### Request Body (JSON):
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

#### Expected Response:
```json
{
  "user": {
    "id": 1,
    "name": "Test User",
    "email": "test@example.com",
    "role_id": 2
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 2. GET /verify
**URL:** `https://workintech-fe-ecommerce.onrender.com/verify`

#### Request Headers:
```
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json
```

#### Expected Response (Valid Token):
```json
{
  "user": {
    "id": 1,
    "name": "Test User", 
    "email": "test@example.com",
    "role_id": 2
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." // renewed token (optional)
}
```

#### Expected Response (Invalid Token):
```json
{
  "message": "Token is not valid"
}
```
**Status:** 401 Unauthorized

## Testing Steps:

### Login Test:
1. Open Postman
2. Create new POST request to login endpoint
3. Set Content-Type header to "application/json"
4. Add request body with email and password
5. Send request
6. Save token from response

### Token Verification Test:
1. Create new GET request to verify endpoint
2. Add Authorization header with token (NO Bearer prefix)
3. Send request
4. Check response status and user data

## Implementation Notes:
- Token is stored in localStorage only if "Remember Me" is checked
- Authorization header format: `Authorization: <token>` (NO Bearer prefix)
- On app start, if token exists, automatically verify with /verify endpoint
- If verification fails, remove token and redirect to login
- If verification succeeds, auto-login user with returned data