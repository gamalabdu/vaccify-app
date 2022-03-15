
import React from "react";
import classes from "./Contact.module.scss";

const Contact = () => {
return (
    <div className={classes.contact_container}>
        <h1 className={classes.topper}>Questions? We have answers!</h1>
        <h3>Call Us: <span>347-543-8530</span> </h3>
        <h3>Email Us: <span>customerservice@vacpass.com</span> </h3>
        <h4>Chat With Us Live</h4>
        <button className={classes.chat}>Chat</button>
    </div>
  )
};

export default Contact;