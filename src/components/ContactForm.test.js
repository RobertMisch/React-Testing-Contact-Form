import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";
/*what we want to test:
-renders without crashing
-forms rendering
-users can fill in forms
-if a form is left empty, the user sees an error
-submit only works if all things are in
-submit works when all required things are in
-object that was submitted shows*/

//remember AAA arrange, act, assert.

test("renders ContactForm without crashing", () => {
    render(<ContactForm />);
  });

test("forms rendering", ()=>{
    //ARRANGE - set up the testing environment
    const { getByLabelText } = render(<ContactForm />);

    // ACT
    // NONE. Tapped out.

    // ASSERT
    // expect(container.querySelector("firstName").textContent).toBe(fakeUser.name);
 
    getByLabelText(/First Name/i); // getByLabelText throws an exception when it fails -- so you can just use it to check that the input is in the DOM rather than having to say `expect().toBeInDocument()`! 
    getByLabelText(/Last Name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
})

// test("users can fill in forms", ()=>{

// })

// test("if a form is left empty, error displayed")

// test("if a required slot left empty, cannot submit")

// test("submit works with all required in")

// test('object shows')