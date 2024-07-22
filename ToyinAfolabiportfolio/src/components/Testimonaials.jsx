import {motion} from "framer-motion";
import Testimonialone from "../assets/testimonials/testimonial1.png"
export const Testimonials = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.5}}  
                className="my-20 text-center text-cyan-600 text-4xl"
            >
                Testimonials
            </motion.h1>

            <div className="mb-8  flex flex-wrap lg:justify-center">
                <div className=" place-content-around mr-2 mt-4 space-rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-800 flex flex-col items-center">
                    <img src={Testimonialone} className="rounded p-6 w-90 h-40 object-cover" alt="contentwritingimage" />
                    <h1> Gnoskincare specializes in the creation and sale of
 organic soaps that offer more than just cleansing;
 they serve as a route to achieving glowing skin. Their
 expertise lies in enabling individuals to confidently
 embrace their beauty by using meticulously crafted
 skincare items.   </h1>
                </div>
                <div className="place-content-around  mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-800 flex flex-col items-center">
                    <img src="" className="rounded p-6 w-50 h-40 object-cover" alt="Graphicdesignimage" />
                    <h1>Graphic Designer</h1>
                </div>
                <div className="place-content-around mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-800 flex flex-col items-center">
                    <img src="" className="rounded p-6 w-50 h-40 object-cover" alt="social media image" />
                    <h1>Social Media</h1>
                </div>
            </div>
        </div>
    );
}
