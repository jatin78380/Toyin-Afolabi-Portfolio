import toyinpic from "../assets/toyinpic.jpg";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"


export const Navbar = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
    
    <div className="flex flex-wrap">

        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8">
        <div className="flex  rounded items-center justify-center">
<img  className="rounded-2xl" src={toyinpic} alt="about"/> 
        </div>
       
    </motion.div>
    <motion.div
     whileInView={{opacity:1,x:0}}
     initial={{opacity:0,x:100}}
     transition={{duration: 0.5}}
    className="w-full lg:w-1/2">
        <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">hihhh </p>
        </div>
        </motion.div>
        </div>
        <h1 className="my-20 text-center text-4xl">About 
        <span className="text-blue-600"> Me</span></h1>
</div>
  )
}
