import { UilPhone, UilEnvelope, UilMapMarker, UilWhatsapp } from '@iconscout/react-unicons'
import {motion} from 'framer-motion'

const Contact = () => {
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

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex flex-col sm:flex-row justify-center
         sm:gap-3 gap-6 lg:gap-10 md:p-6 p-2 w-full rounded-lg lg:max-w-5xl lg:mx-auto"
        >
          <div className="flex flex-col gap-7 ">
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
          </div>
          <form className="flex flex-col w-full flex-1 mx-auto sm:w-2/5 md:w-3/5 gap-4">
            <div className='flex justify-between flex-col md:flex-row gap-3'>
              <input type="text" className='md:w-1/2 w-full' placeholder="Name" />
              <input type="text" className='md:w-1/2 w-full' placeholder="Email" />
            </div>
            <input type="Email" placeholder="Project" />
            <textarea placeholder="Your Message" rows={10} className="resize-none"></textarea>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="btn-primary w-fit">Send Message</motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
