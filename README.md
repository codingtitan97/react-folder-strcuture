Input Component Documentation
Overview
The Input component is a customizable input component designed for use in React applications. It provides a clean and visually appealing material design-inspired input with support for dynamic labels, error handling, and various input types.

Usage
To use the Input component, follow these steps:

Import the Component:

jsx
Copy code
import Input from './path/to/Input';
Include the Component in Your JSX:

jsx
Copy code
<Input
  label="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  onError={(error) => setUsernameError(error)}
  type="text"
  isRequired={true}
/>
Props
The Input component accepts the following props:

label (string): The label to be displayed above the input.
value (string): The current value of the input.
onChange (function): A callback function to handle input changes.
onError (function): A callback function to receive error messages.
type (string): The type of input (e.g., 'text', 'email', 'password', etc.).
isRequired (boolean): Indicates whether the input is required (default is false).
...props: Additional HTML input attributes can be passed as props.
Styling
The component uses styled-components for styling. The styles are defined in the component file itself, providing a clean and modular structure.

Validation
The Input component includes basic validation for the 'email' type, checking for required fields and valid email addresses. Custom validation logic can be added or modified in the validateInput function within the component.

Error Handling
Errors are handled within the component, and the onError callback prop allows the parent component to receive and manage error messages. This enables centralized error handling at the application level.

Dynamic Label
The label dynamically adjusts its position and style based on whether the input has a value or an error. The label transitions smoothly to provide a polished user experience.

Conclusion
The Input component offers a versatile solution for input fields with built-in validation, dynamic labels, and error handling. Its modular structure allows for easy integration into React applications, providing a consistent and user-friendly input experience.

