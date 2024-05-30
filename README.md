# Coding Challenge for MahiGaming Interview

## Calculator App Requirements

This project is a coding challenge for MahiGaming, where the task is to create a Calculator app using Vanilla TypeScript. Below are the detailed requirements and instructions.

### Functional Requirements

1. **Number Range:**
   - The calculator should only accept numbers between -9999.99 and 9999.99.

2. **Precision:**
   - Internal calculations must truncate extra digits after the second decimal place.

3. **Error Handling:**
   - If a calculation results in a number out of the specified range, an error should be thrown and displayed on the screen.

4. **Sign Change:**
   - The sign (+/-) of the number can be changed at any time during input.

5. **Clear Display:**
   - The display can be cleared at any time.

6. **Consecutive Calculations:**
   - Multiple calculations can be performed consecutively without clearing the display.

### Dependencies

- **MathJS:**
  - An extensive math library for JavaScript and Node.js.
  - Official website: [MathJS](https://mathjs.org/)
  
- **http-server:**
  - A simple, zero-configuration command-line static HTTP server.
  - It can be used for testing, local development, and learning.
  - Official website: [http-server](https://www.npmjs.com/package/http-server)

### Installation and Setup

To set up and run the project, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/mahi-gaming-calculator.git
   cd mahi-gaming-calculator
   ```

2. **Install Dependencies:**

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Start the Project:**

   Use the following command to start the project:

   ```bash
   npm start
   ```

   This will start the `http-server` and serve the application.

### Usage

- Open your web browser and navigate to `http://localhost:8080` to use the calculator.
- Perform calculations as per the requirements listed above.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements.

### Contact

For any questions or inquiries, please contact [your-email@example.com](mailto:your-email@example.com).

---

This README file provides all the necessary information to set up, run, and develop the Calculator app for the MahiGaming interview challenge. Follow the instructions carefully to meet all the requirements and ensure smooth functionality. Happy coding!
