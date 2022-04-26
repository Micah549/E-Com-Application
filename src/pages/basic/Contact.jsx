import React from 'react'
import Footer from '../../components/reusables/displays/Footer'
import Navbar from '../../routes/Navbar'
import "../../themes/ContactStyle.css"

export default function Contact() {
  return (
    <div>
        <Navbar/>
 <div class="container">
  <div>
    <h2>Contact Us</h2>
    <p>Any queries or complaints do not hesitate to leave us a message:</p>
  </div>
  <div class="row">
    <div class="column">
   <div> Head office <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13380.098577380795!2d27.87794913213564!3d-33.029481194342196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e66e19b018c0151%3A0x9f15a60ca3be51d0!2sMercedes-Benz%20Training%20Centre!5e0!3m2!1sen!2sza!4v1649359158110!5m2!1sen!2sza"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </div>
    <div class="column">
      <div >
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="country">Message</label>
       
        
        <textarea id="" name="subject" placeholder="Write something.."></textarea>
        <input type="submit" value="Submit"/>
      </div>
    </div>
  </div>
</div> 
       <Footer/> 


    </div>
  )
}

