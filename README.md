# TextUtils

<img width="1333" alt="Screenshot 2024-07-08 at 1 13 12 PM" src="https://github.com/CodeBeginner000001/TextUtils/assets/92913917/96ffe2fc-4bd3-40ef-9657-6d831845c486">
TextUtils is a React application that allows users to manipulate text in various ways. It provides functionality to convert text to uppercase and lowercase, copy text to the clipboard, remove extra spaces, preview the text, and switch between light and dark modes. The app also includes navigation between Home and About pages.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
  - [Home Page](#home-page)
  - [About Page](#about-page)
  - [Theme Toggle](#theme-toggle)
- [Components](#components)
- [Preview](#preview)
- [Contributing](#contributing)

## Features

- **Light/Dark Mode Toggle**: Switch between light and dark themes for better visibility.
- **Text Conversion**: Convert text to uppercase and lowercase.
- **Copy Text**: Copy the entire text from the text area to the clipboard.
- **Remove Extra Spaces**: Remove extra spaces from the text.
- **Word and Character Count**: Display the number of words and characters in the text.
- **Reading Time Estimation**: Estimate the time it will take to read the text.
- **Text Preview**: Preview the text as you type.
- **Navigation**: Navigate between Home and About pages.

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/textutils.git
   ```

2. Navigate to the project directory:
   ```bash
   cd textutils
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Home Page

The Home page provides a text area where you can enter and manipulate text. The available options are:

- **Uppercase**: Convert the text to uppercase.
- **Lowercase**: Convert the text to lowercase.
- **Clear**: Clear the text area.
- **Remove Extra Spaces**: Remove extra spaces from the text.
- **Copy Text**: Copy the entire text to the clipboard.
- **Preview**: Preview the text as you type.

Additionally, the Home page displays the following statistics:

- **Word Count**: The number of words in the text.
- **Character Count**: The number of characters in the text.
- **Reading Time**: The estimated time it will take to read the text.

### About Page

The About page provides information about the TextUtils application and its features.

### Theme Toggle

You can switch between light and dark modes by clicking the toggle button in the Navbar.

## Components

### -> App.js

The main application component that includes the routing logic and theme toggle functionality.

### -> About.js

The About page component that provides information about the application.

### -> Alert.mjs

The Alert component displays alerts and notifications.

### -> Navbar.mjs

The Navbar component contains the navigation links and the theme toggle button.

### -> placeholdertext.css

The CSS file for styling placeholder text.

### -> TextForms.js

The TextForms component includes the text area and buttons for text manipulation.

### -> TextSummary.mjs

The TextSummary component displays the word count, character count, and estimated reading time.

## Preview
<p>Light Mode</p>
<p align="center">
  <img width="1333" alt="Screenshot 2024-07-08 at 1 13 12 PM" src="https://github.com/CodeBeginner000001/TextUtils/assets/92913917/96ffe2fc-4bd3-40ef-9657-6d831845c486">
</p>

<p>Dark Mode</p>
<p align="center">
  <img width="1334" alt="Screenshot 2024-07-08 at 1 17 16 PM" src="https://github.com/CodeBeginner000001/TextUtils/assets/92913917/c4d73465-854b-477c-8f24-c1cc6f7d2cc4">
</p>

<p>About Page</p>
<p align="center">
  <img width="1342" alt="Screenshot 2024-07-08 at 1 18 25 PM" src="https://github.com/CodeBeginner000001/TextUtils/assets/92913917/e6266957-3e1f-4eda-9d10-ce280fc899d1">
</p>

## Contributing

Feel free to fork the repository and submit pull requests. We welcome contributions to improve the functionality and user experience of TextUtils.
