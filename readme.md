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
