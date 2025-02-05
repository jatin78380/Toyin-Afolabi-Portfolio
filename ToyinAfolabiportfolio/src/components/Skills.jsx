import {motion} from "framer-motion";
import Content from "../assets/content.jpeg";
import Graphic from "../assets/graphicdesign.jpeg";
import Social from "../assets/socialmedia.jpg";

export const Skills = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.5}}  
                className="my-20 text-center text-neutral-900 text-4xl"
            >
                What I offer 
            </motion.h1>

            <div className="mb-8  flex flex-wrap lg:justify-center">
                <div className=" place-content-around mr-2 mt-4 space-rounded bg-neutral-900 px-2 py-1 text-sm font-bold text-white-900 flex flex-col items-center">
                    <img src={Content} className="rounded p-6 w-50 h-40 object-cover" alt="contentwritingimage" />
                    <h1>Content Writing</h1>
                </div>
                <div className="place-content-around  mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-bold text-white-800 flex flex-col items-center">
                    <img src={Graphic} className="rounded p-6 w-50 h-40 object-cover" alt="Graphicdesignimage" />
                    <h1>Graphic Designing</h1>
                </div>
                <div className="place-content-around mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-bold text-white-800 flex flex-col items-center">
                    <img src={Social} className="rounded p-6 w-50 h-40 object-cover" alt="social media image" />
                    <h1>Social Media Managing</h1>
                </div>
            </div>
        </div>
    );
}
