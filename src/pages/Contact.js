
import React, { useState } from "react";
import classes from "./Contact.module.scss";

const Contact = () => {

  const [click,setClick] = useState(false)

  let chatWindow = (
      <div className="message">
          <div>Chat</div>
          <form>
              <div>
                  <label> Name </label>
                  <input type="text" required />
              </div>
              <div>
                  <label> Email </label>
                  <input className="message-email" type="text" required />
              </div>
              <div>
                  <label className="message-label">Message</label>
                  <textarea className="textbox" name="comment">
                    Enter text here...</textarea>
              </div>
              <div>
                  <button className="message-submit" type="submit" onClick={ (e) => e.preventDefault() && setClick(!click)} > Submit </button>
              </div>
          </form>
      </div>
  )


return (
    <div className={classes.contact_container}>
        <h1 className={classes.topper}>Questions? We have answers!</h1>
        <h3>Call Us: <span>800-354-7767</span> </h3>
        <h3>Email Us: <span>customerservice@ezproof.com</span> </h3>
        <h4 className="send-message"> Send Us A Message! </h4>
        <button className={classes.chat} onClick={ () => setClick(!click)} >
          Message </button>
          {click === false ? undefined : chatWindow}
    </div>
  )
};

// click === false ? classes.chat : "message"

export default Contact;