import { UilPhone, UilEnvelope, UilMapMarker, UilWhatsapp } from '@iconscout/react-unicons'
import {motion} from 'framer-motion'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { aboutVariant, btnVariant } from './../../animations/GlobalVariants';

const Contact = () => {
  const form = useRef();

  const contact_info = [
    { 
      logo: <UilPhone size='30'/>, 
      title: "Call Me", 
      text: "+57 323 5208089" 
    },
    { 
      logo: <UilWhatsapp size='30'/>, 
      title: "Whatsapp", 
      text: "+57 323 5208089" 
    },
    { 
      logo: <UilEnvelope size='30'/>, 
      title: "Email", 
      text: "crisgonzalez07g@gmail.com" 
    },
    {
      logo: <UilMapMarker size='30'/>,
      title: "Location",
      text: "Colombia - Buenavetura",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5gurw56', 'template_xtqqtti', form.current, 'JQW4TF_J-z_PIT8pE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div
        
        className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex flex-col sm:flex-row justify-center
         sm:gap-3 gap-6 lg:gap-10 md:p-6 p-2 w-full rounded-lg lg:max-w-5xl lg:mx-auto"
        >
          <motion.div
            variants={aboutVariant}
            initial='hidden'
            whileInView='visible'
            transition={{type: "spring", stiffness: 40}}
            className="flex flex-col gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem] text-5xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  {contact.logo}
                </div>
                <div >
                  <h3 className='text-xl font-medium'>{contact.title}</h3>
                  <p className="md:text-sm text-sm text-gray-400 break-words">
                    {contact.text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form ref={form} onSubmit={sendEmail}
            variants={aboutVariant}
            initial='hidden'
            whileInView='visible'
            transition={{type: "spring", stiffness: 40}}
            className="flex flex-col w-full flex-1 mx-auto sm:w-2/5 md:w-3/5 gap-4">
            <div className='flex justify-between flex-col md:flex-row gap-3'>
              <input type="text" className='md:w-1/2 w-full' placeholder="Name" name="user_name"/>
              <input type="email" className='md:w-1/2 w-full' placeholder="Email" name="user_email"/>
            </div>
            <input type="text" placeholder="Project" name="project"/>
            <textarea placeholder="Your Message" rows={10} className="resize-none" name="message"/>
            <motion.button type='submit'
              variants={btnVariant}
              whileHover="stateHover"
              whileTap="active"
              transition={{type: "spring", stiffness: 400, damping: 17}}
              className="btn-primary w-fit">Send Message</motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
