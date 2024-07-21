import React, { useState, useRef } from 'react' 
import CustomHook from './CustomHook';


function Contact  () {

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='contact' id='contact' ref={scrollTab}>
      <div className='title-contact' ref={(el) => el && divs.current.push(el)}>
        This is my Contact
      </div>
      <div className='des-contact' ref={(el) => el && divs.current.push(el)}>
      "Welcome to my contact page! Here, you can reach out to me through the following channels.":
      </div>
      <form action="https://formsubmit.co/el/cipafo" onSubmit="sendEmail(); reset(); return false">
        <div className="input-group" ref={(el) => el && divs.current.push(el)}>
          <div className="input-box">
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="number" id="phone" placeholder="Phone Number" required />
            <input type="text" name="subject" placeholder="Subject" />
          </div>
          <div className="input-box-1">
            <textarea name="message" cols="30" rows="10" placeholder=" Your Message"></textarea>
          </div>
        </div>
        <div className="input-group-2">
          <input type="submit" value="Send Message" className="btn" />
        </div>
      </form>
    </section>
  );
}

export default Contact;
