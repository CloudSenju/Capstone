import { render, screen } from '@testing-library/react';
import Form from './Components/Booking Components/form'; // Adjust the import path

describe('Form Function', () => {
  test('it renders correctly', () => {
    render(<Form selectedDate="2023-10-20" />); // Adjust the props as needed
    // Add assertions to verify the rendered output
  });

  test('it validates email correctly', () => {
    // Write test cases to validate email validation logic
    // For example:
    const validEmail = 'test@example.com';
    const invalidEmail = 'invalid-email';
    // Assert that validateEmail(validEmail) returns the expected result
  });

});
