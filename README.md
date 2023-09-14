# Lendsqr FrontEnd Engineer Project Test Assessment

This project is a part of the frontend engineer job application judging criteria for a test assessment at Lendsqr. It's a web application developed using TypeScript, ReactJS, Scss and various other technologies. Below, you'll find an overview of the project, its features, and instructions on how to run it locally.

## Table of Contents

-   [Project Overview](#project-overview)
-   [Features](#features)
-   [Getting Started](#getting-started)
-   [Testing](#testing)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [License](#license)

## Project Overview

This project is a web application that simulates various pages and features commonly found in financial and lending platforms. It includes a login page, a dashboard, a user page, and a user details page. The application's design was provided on Figma, and the development process focused on creating a pixel-perfect, high-fidelity implementation of these designs.

### Technologies Used

-   TypeScript
-   ReactJS
-   SCSS and CSS for styling
-   Next.js for API routes
-   Local storage for data persistence
-   Jest and React Testing Library for testing

## Features

-   **Login Page:** Users can log in to access the application.

-   **Dashboard:** A dashboard displaying relevant financial data and statistics.

-   **User Page:** A user management page to view and manage user data.

-   **User Details Page:** A page to view detailed information about a specific user.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/precious-adeyinka/lendsqr-fe-test.git
    ```

2. Navigate to the project directory:

    ```bash
    cd lendsqr-fe-test
    ```

3. Install the project dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open your web browser and access the application at [http://localhost:3000](http://localhost:3000).

## Testing

This project utilizes Jest and React Testing Library for testing. To run the tests, use the following command:

```bash
npm test
# or
yarn test
```

## Usage

-   Access the website [here](https://precious-adeyinka-lendsqr-fe-test.vercel.app/)
-   Login with your credentials to access the Dashboard
-   Click on the `User` menu option under `Customers` segment
-   Click on any of the table header to toggle the table filter popup
-   Click on the organization name of any record (row) from the table to access the `user details` page as seen in the figma design
-   Click on the `back to users` button to navigate back to the users page
-   **Note:** On mobile screen the sidebar is hidden click on the little arrow to the top left under the navigation header at the top to access the sidebar

## Contributing

Contributions to this project are welcome. If you have any suggestions, improvements, or bug fixes, please feel free to submit a pull request. Be sure to follow the project's coding standards and guidelines, you can ask me here - [here](https://officialpreciousadeyinka.vercel.app).

## License

This project is open-source and available under the [MIT License](LICENSE).
