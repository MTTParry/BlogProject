import React from "react";
import { useState } from "react";

const emptySubscriber = {
  name: "",
  email: "",
};

const ContactMe = () => {
  const [subscriber, setSubscriber] = useState(emptySubscriber);

  //create functions that handle the event of the user typing into the form
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSubscriber((subscriber) => ({ ...subscriber, [name]: value }));
  };

  //A function to handle the post request
  const postSubscriber = (subscriber) => {
    return fetch("http://localhost:5005/api/subscribers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subscriber),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post ", data);
        // props.addSubscriber(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postSubscriber(subscriber);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Subscribe to my blog!</h3>
      <fieldset>
        <label>Name/Username</label>
        <br />
        <input
          type="text"
          id="add-subscriber-name"
          placeholder="John Doe"
          required
          name="name"
          value={subscriber.name}
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="text"
          id="add-subscriber-email"
          placeholder="name@email.com"
          required
          name="email"
          value={subscriber.email}
          onChange={handleChange}
        />
      </fieldset>
      <button type="submit">Subscribe now!</button>
    </form>
  );
};

export default ContactMe;
