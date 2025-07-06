checkpoints API

1. REGISTER - post
   http://localhost:7000/api/auth/register
   {
   "\_id": "6869e9224a16bb233d7b8fbf",
   "name": "Your Name",
   "email": "your@email.com",
   "profileImageUrl": "https://example.com/image.jpg",
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NjllOTIyNGExNmJiMjMzZDdiOGZiZiIsImlhdCI6MTc1MTc3MTQyNiwiZXhwIjoxNzUxODU3ODI2fQ.fMD2xNIPaIXCID81NVu3sY9qapWTQJI17DkYV-4hOHI"
   }

2. LOGIN - post
   http://localhost:7000/api/auth/login
   {
   "email": "test@example.com",
   "password": "testpassword"
   }

3. getAllProfiles - get
   http://localhost:7000/api/auth/profile

4. Image upload - Post
   http://localhost:7000/api/auth/update-image
   follow these steps:
   Go to the Body tab.
   Select form-data.
   Add a key named image.
   Change the type from Text to File (use the dropdown on the left).
   Choose an image file from your computer.

5. Session - Post

Login/register and collect token
On header - key - Authorization, value - Bearer TokenPaste

http://localhost:7000/api/sessions/create

Body - raw - json

{
"role": "Frontend Developer",
"experience": "2 years",
"topicsToFocus": "React, JavaScript",
"description": "Practice for frontend interview",
"questions": [
{ "question": "What is React?", "answer": "A JS library for building UIs" },
{ "question": "Explain useState.", "answer": "A React hook for state." }
]
}

6. Session - Get
   Update key and value

http://localhost:7000/api/sessions/my-sessions

7. Session - get
   get by its id

http://localhost:7000/api/sessions/<sessionId>

headers

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

8. Session - get

get session by id

http://localhost:7000/api/sessions/686a1f566476040e772a74b5

Session- id :686a1f566476040e772a74b5
Token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NmExZjU2NjQ3NjA0MGU3NzJhNzRiNSIsImlhdCI6MTc1MTc4NTMxNywiZXhwIjoxNzUxODcxNzE3fQ.fEELBBSw290XY-8io8mFNmNksrKkX6JJdb_UCKqCXaQ
