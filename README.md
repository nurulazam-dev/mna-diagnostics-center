# [MNA Diagnostics Center]()

### (Digital Diagnostics Lab)

**Website**: [MNA Diagnostics Center](https://mna-diagnostics-center.onrender.com)

---

## Overview

The **MNA Diagnostics Center** website is a comprehensive platform designed to enhance patient experiences through easy appointment scheduling, access to diagnostic services, and detailed health information. Patients can browse services, view doctors’ profiles, and book appointments, all in a responsive and interactive web interface. This repository contains both the frontend and backend codebase.

## Features

### General Features

- **Doctor Booking System**: Easily book appointments with specialists.
- **Online Payment**: Pay securely via Stripe for all services.
- **Patient Reviews**: View feedback from other patients on doctor profiles.
- **Health Packages**: Explore and purchase health packages based on diagnostic needs.
- **Educational Resources**: Access educational videos and health articles.
- **Responsive Design**: Fully optimized for various screen sizes and devices.

### Frontend Features

- **User-Friendly Navigation**: Fast and intuitive navigation with `React Router Dom`.
- **Interactive Animations**: Smooth loading spinners and toast notifications for feedback.
- **Image Sliders**: Display Management-Team and Patients Reviews with Swiper.
- **Secure Image Uploads**: Patients can upload necessary images using Cloudinary.
- **Customizable Theme**: Styled with Tailwind CSS for a modern look.

### Backend Features

- **Role-Based Authentication**: JWT-based authentication with roles for patients and doctors.
- **Patient Management**: Manage appointments, payments, and users/patients.
- **Encrypted User Data**: Secure handling of passwords and sensitive information with bcrypt.
- **Payment Integration**: Integrated Stripe payments for efficient transaction processing.
- **Configurable API**: Built with RESTful principles for easy data access.

---

## Technologies Used

### Frontend

- **React**: Core framework for user interface development.
- **React Router Dom**: Manages in-app navigation.
- **Tailwind CSS**: Utility-first framework for responsive and customized styles.
- **react-icons**: Provides icons across the UI.
- **react-spinners**: Adds animated loaders during data fetching.
- **react-toastify**: Delivers success/error messages to users.
- **swiper**: Carousel component for image / card sliders.
- **Google Fonts**: Adds custom fonts for styling.
- **Cloudinary**: Manages secure image uploads and storage.
- **Stripe**: Enables secure payment processing.

### Backend

- **Express**: Backend framework for building APIs.
- **MongoDB** and **Mongoose**: Database and ORM for data persistence.
- **cors**: Middleware for handling cross-origin requests.
- **jsonwebtoken**: Handles authentication with JWT.
- **cookie-parser**: Parses cookies for session management.
- **dotenv**: Configures environment variables.
- **bcryptjs**: Encrypts passwords for user security.
- **Stripe**: Manages payment processing.

## License

This project is licensed under the MIT License.

## Author

- **Mohammad Nurul Azam** - [GitHub Profile](https://github.com/nurulazam-dev)
