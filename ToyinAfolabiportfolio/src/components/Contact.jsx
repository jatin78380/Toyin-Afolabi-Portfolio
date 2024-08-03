import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactCard = ({ icon, title, detail, additionalDetail,email }) => {
  return (
    <div className="bg-orange-500 rounded-lg p-6 mb-4 flex flex-col items-center text-white">
      <div className="mb-2">{icon}</div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-base">{detail}</p>
      {additionalDetail && (
        <a href={`mailto:${email}`} className="text-sm text-gray-200">
          {additionalDetail}
        </a>
      )}
    </div>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen  text-black flex flex-col items-center pt-10">
      <h2 className="text-sm mb-2 font-bold">Get In Touch</h2>
      <h1 className="text-3xl font-bold mb-10 text-neutral-800">Contact Me</h1>
      <ContactCard
        icon={<FaEnvelope size={30} />}
        title="Email"
        detail="afolabitoyin253@gmail.com"
        additionalDetail="Send Email"
        email = "afolabitoyin253@gmail.com"
      />
      <ContactCard
        icon={<FaPhone size={30} />}
        title="Phone"
        detail="+2349027883008"
      />
    </div>
  );
};

export default Contact;
