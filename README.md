# SocialHub

SocialHub is a social media application built using the MERN stack, allowing users to register, login, post content, like posts, and add comments.

## Features

- User Registration: Users can register using their email, username, and password.
- User Login: Registered users can log in using their username and password.
- Forgot Password: Users can reset their password if forgotten.
- CRUD Operations for Posting: Users can create, read, update, and delete their posts.
- Likes & Comments: Users can like posts and add comments to them.

## Technologies Used

- MongoDB: NoSQL database for storing user information and posts.
- Express.js: Node.js web application framework for building RESTful APIs.
- React.js: JavaScript library for building user interfaces.
- Node.js: JavaScript runtime environment for server-side development.
- JWT: JSON Web Tokens for user authentication.
- Axios: Promise-based HTTP client for making API requests.

## Installation

1. Clone the repository:
   ```
   git clone 
   cd SocialHub
   ```

2. Install dependencies:
   ```
   cd client && npm install
   cd ../server && npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `server` directory.
   - Add the following variables:
     ```
     MONGO_URI=<your_mongodb_uri>
     JWT_SECRET=<your_jwt_secret>
     ```

4. Run the development server:
   ```
   cd server && npm run dev
   ```

5. Navigate to the client directory and start the React app:
   ```
   cd ../client && npm start
   ```

6. The application should now be running on `http://localhost:3000`.

## API Endpoints

- User Registration:
  - `POST /api/users/register`
- User Login:
  - `POST /api/users/login`
- Forgot Password:
  - `POST /api/users/forgot-password`
- CRUD Operations for Posting:
  - Create Post: `POST /api/posts`
  - Read Posts: `GET /api/posts`
  - Update Post: `PUT /api/posts/:postId`
  - Delete Post: `DELETE /api/posts/:postId`
- Likes & Comments:
  - Like Post: `POST /api/posts/:postId/like`
  - Add Comment: `POST /api/posts/:postId/comments`




## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.