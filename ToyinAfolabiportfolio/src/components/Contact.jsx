import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import { motion } from "framer-motion";

const ContactCard = ({ icon, title, detail, additionalDetail, link }) => {
  return (
    <div className="bg-cyan-200 rounded-lg p-6 mb-4 flex flex-col items-center text-black">
      <div className="mb-2">{icon}</div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-base">{detail}</p>
      {additionalDetail && link ? (
        <a href={link} className="text-sm text-black-900" target="_blank" rel="noopener noreferrer">
          {additionalDetail}
        </a>
      ) : null}
    </div>
  );
};

const Contact = () => {
  const email = "afolabitoyin253@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/toyin-afolabi-/"; // Replace with your LinkedIn profile URL

  return (
    <div className="min-h-screen  text-black flex flex-col items-center pt-10">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-neutral-800 text-4xl"
      >Get In Touch
      </motion.h1>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-neutral-800 text-4xl"
      >Contact Me
      </motion.h1>
      <ContactCard 
        icon={<FaEnvelope size={30} />}
        title="Email"
        detail={email}
        additionalDetail="Send a message on email"
        link={`mailto:${email}`}
      />
      <ContactCard
        icon={<FaPhone size={30} />}
        title="Phone"
        detail="+2349027883008"
      />
      <ContactCard
        icon={<FaLinkedin size={30} />}
        title="LinkedIn"
        additionalDetail="View Profile"
        link={linkedinUrl}
      />
    </div>
  );
};

export default Contact;
