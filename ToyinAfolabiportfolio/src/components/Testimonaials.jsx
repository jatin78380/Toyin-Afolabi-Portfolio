import React, { useState } from 'react';
import './Testimonials.css'; 
import Testimonialone from "../assets/testimonials/testimonial1.png";
import Testimonialtwo from "../assets/testimonials/testimonial2.png";
import Testimonialthree from "../assets/testimonials/testimonial3.png";
import Testimonialfour from "../assets/testimonials/testimonial4.png";

const TestimonialCard = ({ name, image, text }) => {
  return (
    <div className="testimonial-card">
      <div className="flex items-center mb-4">
        <img src={image} className="flex flex-col rounded-full w-30 h-40 mr-4" alt={name} />
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
        </div>
      </div>
      <p className="text-sm leading-relaxed">{text}</p>
    </div>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Banjo Florence",
      image: Testimonialone,
      text: `I really love what your student did. It was a pleasure of working with her to optimize my LinkedIn bio, and I couldn’t be more pleased. She brought a wealth of knowledge and a keen eye for detail, transforming my profile into a compelling and professional representation of my skills and aspirations. She took the time to understand my background and goals, and provided insightful suggestions that truly elevated my profile. Thank you so so much. Well done Deborah, she wouldn’t have known so much without your tutorials.`,
    },
    {
      name: "Grace Harrison ",
      image: Testimonialtwo,
      text: `I recently had the pleasure of working with Toyin Afolabi as one of the facilitators for the EmpowerHER "social media management classes," a Skill-up program aimed at empowering women. Toyin's contribution to the program was nothing short of exceptional. She brought a wealth of knowledge and passion to her sessions, ensuring that every participant not only understood the concepts but also could apply them practically. Her dedication to seeing that the students learned and grew was truly inspiring. Toyin's teaching style was engaging, clear, and supportive, making complex topics accessible and interesting. The feedback from the participants was overwhelmingly positive, with many praising Toyin for her enthusiasm and her ability to make the learning process enjoyable and effective. Her commitment to empowering others through education is evident, and she has undoubtedly made a lasting impact on everyone involved in the program. Toyin Afolabi is an outstanding educator and a true asset to any training program.`,
    },
    {
      name: "Oyindamola Taiwo",
      image: Testimonialthree,
      text: ` I really enjoyed your class ma and I learned a lot. Through your teaching I was able to know how to optimize social media accounts, especially LinkedIn and Instagram. I was also able to know the basic differences between all social media platforms. Thank you so much ma. The classes were great.`,
    },
    {
      name: "Priscillia Tochukwu",
      image: Testimonialfour,
      text: `It has been a moment of insights and impacts with you throughout this learning period. You handled every topic meticulously and with so much elaboration. This class opened my eyes to a lot of things concerning social media management, and I'm really grateful for that. Thank you for your time, effort, and patience, Deborah..`,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="border-b border-neutral-900 pb-4 relative">
      <h1 className="my-20 text-center text-neutral-800 text-4xl">Client Testimonials</h1>

      <button className="slider-button left" onClick={handlePrev}>‹</button>
      <div className="card-container">
        <div className="moving-cards" style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
      <button className="slider-button right" onClick={handleNext}>›</button>
    </div>
  );
};
