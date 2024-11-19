
# **Face Search AI**

Face Search AI is a powerful web application that allows users to upload an image and search for its occurrences online. Built with modern web technologies, the platform offers seamless user experiences with robust authentication, responsive design, and dynamic features.

---

## **Features**
- **Image Upload & Search**: Upload an image and search where it appears online.
- **Secure Authentication**: Users can sign up and log in with JWT-based authentication.
- **Pricing Plans**: A dedicated pricing page to showcase different subscription options.
- **User-Specific Data**: Tracks user-uploaded images for personalized search history.
- **Responsive Design**: Fully responsive and optimized for all devices.
- **Techy Animated Backgrounds**: Visually engaging animations for a dynamic feel.
- **Protected Routes**: 
  - Logged-in users are redirected from the login/signup pages to the homepage.
  - Non-logged-in users are redirected from the uploading and pricing pages to the homepage.

---

## **Tech Stack**
- **Frontend**: React.js, Tailwind CSS, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Toast Notifications**: `react-toastify`
- **Animations**: Pure CSS for techy, dynamic backgrounds

---

## **Setup Instructions**
Follow these steps to set up and run the project on your local machine:

### **Prerequisites**
- Node.js and npm installed.
- MongoDB installed or access to a cloud MongoDB instance.

### **Clone the Repository**
```bash
git clone https://github.com/bhanupm07/face-search-ai
cd face-search-ai
```

### **Install Dependencies**
#### Backend
```bash
cd server
npm install
```

#### Frontend
```bash
cd client
npm install
```

### **Set Up Environment Variables**
Create a `.env` file in the `server` directory and add the following variables:
```env
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
```

### **Run the Application**
#### Start Backend
```bash
cd server
npm start
```

#### Start Frontend
```bash
cd client
npm start
```

### **Access the Application**
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## **API Endpoints**
| Endpoint                  | Method | Description                         | Authentication Required |
|---------------------------|--------|-------------------------------------|--------------------------|
| `/api/user/signup`        | POST   | Register a new user                 | No                       |
| `/api/user/login`         | POST   | Log in an existing user             | No                       |
| `/api/user/details`       | GET    | Get user details                    | Yes                      |
| `/api/user/upload-image`  | POST   | Save an uploaded image URL          | Yes                      |

---

## **How to Contribute**
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## **Contact**
For any questions or feedback, please reach out to:
- **Email**: bpmahant2003@gmail.com
- **GitHub**: [bhanupm07](https://github.com/bhanupm07)
