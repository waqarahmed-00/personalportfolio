import './index.css'

import facebook_img from '../../Assets/facebook.png'
import instagram_img from '../../Assets/instagram.png'
import twitter_img from '../../Assets/twitter.png'
import linkedin_img from '../../Assets/linkedin.png'
import github_img from '../../Assets/github.png'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log('Public Key:', 'UpZPeKoT79HE82ph-');
    
        emailjs
          .sendForm('service_n2kjpia', 'template_0wtigzh', form.current, 'Cni0b53MXCQAZJYqB5qyh',{
            publicKey: 'UpZPeKoT79HE82ph-',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert("Email Successfully ")
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            //   alert("Email Failed to Send")
              e.target.reset();


            },
          );
      };

    return <section id='contact' className='contact_section'>
            <h2 className='contact_title'>Contact Me</h2>
            <p className='contact_desc'>"As a junior seeking internship opportunities, I'm eager to connect and learn from experienced professionals in the field. Please don't hesitate to reach out through the form below to discuss potential collaborations or opportunities." </p>
            <form className='contact_form' ref={form} onSubmit={sendEmail} >
                <input className='name' type='text' placeholder='Your Name' name='your_name' />
                <input className='email' type='email' placeholder='Your Email' name='your_email' />
                {/* <input className='number' type='number' placeholder='Your Number' /> */}
                <textarea className='msg' name='message' rows='5' placeholder='Your Message' ></textarea>
                <button type='submit' className='submit_btn' value='send'>Submit</button>
                <div className='links'>
                   <a target='_blank' href='https://www.facebook.com/waqar.rana.1253236' ><img src={facebook_img} alt='' className='link' /></a> 
                   <a target='_blank' href='https://www.instagram.com/waqarrana78/' ><img src={instagram_img} alt='' className='link' /> </a> 
                   <a target='_blank' href='#' > <img src={twitter_img} alt='' className='link' /> </a>
                   <a target='_blank' href='https://www.linkedin.com/in/waqar-ahmed-22120224b/'> <img src={linkedin_img} alt='' className='link' /> </a>
                   <a target='_blank' href='https://github.com/waqarahmed-00'> <img src={github_img} alt='' className='link' /> </a>

                </div>

            </form>
      


    </section>
}