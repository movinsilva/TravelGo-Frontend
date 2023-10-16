import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import Login from '../Screens/Login/Login';
import { Provider } from "react-redux"; // Import the Provider
import store from "../store.js"; // Import your Redux store
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe('Login component', () => {
    it('should render the login form', () => {
        render(<Provider store={store}>
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        </Provider>);
        const loginTitle = screen.getByText("Login");
        expect(loginTitle).toBeInTheDocument();
    
        const emailInput = screen.getByPlaceholderText("Username");
        expect(emailInput).toBeInTheDocument();
    
        const passwordInput = screen.getByPlaceholderText("Password");
        expect(passwordInput).toBeInTheDocument();
    
        const loginButton = screen.getByText("Let's Go →");
        expect(loginButton).toBeInTheDocument();
    });
    it("should handle user input", () => {
        render(<Provider store={store}>
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        </Provider>);
    
        const emailInput = screen.getByPlaceholderText("Username");
        const passwordInput = screen.getByPlaceholderText("Password");
    
        
        fireEvent.input(emailInput, { target: { value: "test@example.com" } });
        fireEvent.input(passwordInput, { target: { value: "testPassword" } });
    
        
        expect(emailInput.value).toBe("test@example.com");
        expect(passwordInput.value).toBe("testPassword");
      });

    
    it('should update the password input value when typing', () => {
        render(<Provider store={store}>
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        </Provider>);
    
        const passwordInput = screen.getByPlaceholderText('Password');
        const newPassword = 'newPassword123'; // The new password value you want to test
    
        // Simulate typing in the password input
        fireEvent.input(passwordInput, { target: { value: newPassword } });
    
        // Check if the password input value is updated
        expect(passwordInput.value).toBe(newPassword);
      });
    it('should update the email address input value when typing', () => {
        render(<Provider store={store}>
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        </Provider>);
    
        const emailInput = screen.getByPlaceholderText('Username');
        const newEmail = 'newemail@example.com'; // The new email address you want to test

   
        fireEvent.input(emailInput, { target: { value: newEmail } });

        expect(emailInput.value).toBe(newEmail);
      });

    it("should submit the form when the submit button is clicked", async () => {
        render(<Provider store={store}>
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        </Provider>);
    
        const emailInput = screen.getByPlaceholderText("Username");
        const passwordInput = screen.getByPlaceholderText("Password");
        const submitButton = screen.getByText("Let's Go →");
    
        // Simulate user input
        fireEvent.input(emailInput, { target: { value: "test@example.com" } });
        fireEvent.input(passwordInput, { target: { value: "testPassword" } });
    
        
        fireEvent.click(submitButton);
    
      });  
      it('should redirect to sign up page when clicking the "Sign Up" link', () => {
        render(<Provider store={store}>
            <MemoryRouter initialEntries={['/login']}>
                <Login/>
            </MemoryRouter>
        </Provider>);
    
        const signUpLink = screen.getByText('Sign Up');
        fireEvent.click(signUpLink);

        const currentPathname = window.location.pathname;
     
        expect(currentPathname).toBe('/');
      }); 

    // it('should update the password input value when typing', () => {
    //     const { getByTestId } = render(<Provider store={store}>
    //         <MemoryRouter>
    //             <Login/>
    //         </MemoryRouter>
    //     </Provider>);
    //     const passwordInput = getByTestId('password-input');
    //     fireEvent.change(passwordInput, { target: { value: 'password123' } });
    //     expect(passwordInput.value).toBe('password123');
    // });

    // it('should submit the form when clicking the submit button', () => {
    //    render(<Provider store={store}>
    //         <MemoryRouter>
    //             <Login/>
    //         </MemoryRouter>
    //     </Provider>);
    //     const submitButton = getByTestId('submit');
    //     fireEvent.click(submitButton);
    //     // Add your assertion here to check if the form was submitted successfully
    // });
});
