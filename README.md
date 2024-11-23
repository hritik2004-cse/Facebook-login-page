# Facebook Login Clone

This is a **Facebook Login Page Clone** built with HTML, CSS, and JavaScript. The project replicates the login and sign-up UI of Facebook with added functionality like **dark mode toggle** and **greeting feature** for input validation.

---

## Features

- 🌗 **Theme Toggle**
  - Toggle between **light** and **dark** modes using a button in the navigation bar.
  - Icons change between **sun** and **moon** to reflect the theme state.

- ✉️ **Login Form**
  - Input fields for **email** and **password** with proper validation.
  - Password field supports a maximum of 8 characters.

- 🛠️ **Responsive Design**
  - Adapts seamlessly to different screen sizes using **media queries**.

- ⚠️ **Greeting Functionality**
  - Validates the email field to ensure it’s not empty.
  - Displays an alert message based on the email input.

---

## Technology Stack

### **Frontend**
- **HTML5**: Provides the structure of the web page.
- **CSS3**: Handles styling and layout.
- **FontAwesome**: Provides icons for theme toggling.

### **JavaScript**
- Implements the **theme toggle** and **greeting functionality**.

---

## How to Use

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/facebook-login-clone.git
   
2. Open the Project
----------------
Navigate to the folder and open index.html in your preferred browser.

3. Interacting with the Project
----------------------------
4. Enter email and password fields to simulate login.
---------------------------   
Use the button in the navigation bar to toggle between themes.

## Preview
------------
![Facebook Logo](https://github.com/hritik2004-cse/Facebook-login-page/blob/main/img/preview%20img.png)


Upcoming Features
-----------------
- 🌐 Backend integration for real authentication.
- 🎨 Customizable themes for users.
- 📱 Improved mobile UI/UX.

Contributors
------------
**Your Name** (GitHub Profile)  
Developer and designer of this project.

License
-------
This project is licensed under the MIT License.

Code Explanation
----------------
### HTML (index.html)
**Structure**: The HTML provides the basic structure for the Facebook login page, including sections for the theme toggle button, the email/password login form, and the "Create new account" button.

**Elements**:
- `<input>` fields for email and password.
- A button to log in (`Log in`).
- A button for creating a new account.
- A link for the forgotten password section.

### CSS (style.css)
**Global Styles**: The page uses the Roboto font from Google Fonts and resets default margin and padding across elements.  
**Variables**: CSS variables (e.g., `--background-col`, `--text-col`, `--box-col`) allow dynamic switching of colors for light and dark themes.  
**Responsive Design**: The page is styled to be responsive using media queries. Different layouts and font sizes are adjusted for screen widths 1500px, 1400px, 1250px, and 850px.

### JavaScript (script.js)
**Theme Toggle**: The JavaScript listens for a button click to switch between light and dark modes. It also toggles the sun and moon icons based on the current theme.  
**Greeting Function**: The greeting function checks if the email input field is empty and displays an alert with a message accordingly.

Known Issues
------------
- **Incomplete Password Validation**: Currently, password validation is minimal (only a maximum length check).
- **No Form Submission**: The login button doesn’t actually submit the form. A future update will include backend integration to validate credentials.

Contact
-------
For any questions or feedback, feel free to reach out to me at:

- Email: hritiksharma08725@gmail.com
- GitHub: hritik2004-cse

