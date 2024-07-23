import {motion} from "framer-motion";
import Testimonialone from "../assets/testimonials/testimonial1.png"
export const Testimonials = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.5}}  
                className="my-20 text-center text-neutral-800 text-4xl"
            >
               Client Testimonials
            </motion.h1>

            <div className="mb-8  flex flex-wrap lg:justify-center">
                
                <div className="place-content-around  mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white-800 flex flex-col items-center">
                    <img src="" className="rounded p-6 w-50 h-40 object-cover" alt="Graphicdesignimage" />
                    <h1 className="my-2 py-6  text-white-800 tracking-tighter">Banjo Florence - Flora B Event 


            I really love what your student did.
                    It was a pleasure of working with her to optimize my LinkedIn bio, and I couldn’t be more pleased.  She brought a wealth of knowledge and a keen eye for detail, transforming my profile into a compelling and professional representation of my skills and aspirations 

        She took the time to understand my background and goals, and provided insightful suggestions that truly elevated my profile.

        Thank you so so much
            Well done Deborah, she wouldn’t have know so much without your tutorials</h1>
                </div>
                <div className="place-content-around mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-800 flex flex-col items-center">
                    <img src="" className="rounded p-6 w-50 h-40 object-cover" alt="social media image" />
                    <h1>Social Media</h1>
                </div>
            </div>
        </div>
    );
}
