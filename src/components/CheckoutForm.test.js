import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';
// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    const header = screen.queryByText("Checkout Form");

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    
    const FirstName = screen.getByLabelText(/First Name/i);
    const LastName = screen.getByLabelText(/Last Name/i);
    const Address = screen.getByLabelText(/Address/i);
    const City = screen.getByLabelText(/City/i);
    const State = screen.getByLabelText(/State/i);
    const Zip = screen.getByLabelText(/Zip/i);
    const Submit = screen.getByText("Checkout");

    userEvent.type(FirstName, "working");
    userEvent.type(LastName, "working");
    userEvent.type(Address, "working");
    userEvent.type(City, "working");
    userEvent.type(State, "working");
    userEvent.type(Zip, "working");

    userEvent.click(Submit);

    const success = screen.queryByTestId('successMessage');
    expect(success).toBeInTheDocument();
});
