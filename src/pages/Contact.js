
import React, { useState,useEffect } from "react";
import classes from "./Contact.module.scss";

const Contact = () => {

  const [click,setClick] = useState(false)
  const [thanks,setThanks] = useState (false)

  let mess = () => (
        <div className="thank-you">
        <h3> Thank you! We will get back to you shortly! </h3>
        </div> 
  )

  let thankYou = (e) => {
      e.preventDefault()
      setClick(!click)
      setThanks(!thanks)
  }

  let chatWindow = (
      <div className="message">
          <div>Chat</div>
          <form onSubmit={thankYou} >
              <div>
                  <label> Name </label>
                  <input type="text" required />
              </div>
              <div>
                  <label> Email </label>
                  <input className="message-email" type="text" required />
              </div>
              <div className="message-div">
                  <label className="message-label">Message</label>
                  <textarea className="textbox" name="comment" value={undefined}>
                    </textarea>
              </div>
              <div>
                  <input className="message-submit" type="submit" />
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
        <button className={classes.chat} onClick={ () => setClick(!click) } >
          Message </button>
          {click === false ? undefined : chatWindow}
          {thanks === false ? undefined : mess() }
    </div>
  )
};

// click === false ? classes.chat : "message"

export default Contact;