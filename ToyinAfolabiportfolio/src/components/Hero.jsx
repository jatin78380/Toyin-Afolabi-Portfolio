import { HERO_CONTENT } from "../constants";
import Profile from "../assets/toyinpic.png";

import {motion} from 'framer-motion'
const container =(delay)=>( {
  hidden: { x: -100, opacity: 0 },
  visible:{
    x:0,
    opacity:1,
    transition: {duration: 0.5, delay:delay}
  }
})
export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 l lg:mb-35"> 
         <div className="flex flex-wrap">
         
          <div className="w-full flex justfiy-center lg:w-1/2 lg:p-1">
          <div className="flex-justify-center">
            <motion.img
           initial={{y:-100,opacity:0}} 
           animate={{y:0,opacity: 1}} 
           transition={{duration: 1, delay: 0.5}}
           src={Profile} className="rounded-2xl" alt="profilepicture"/>
          </div>
          </div>
          <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className=" text-xl text-neutral-900 pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">Toyin Afolabi </motion.h1>
            <motion.h1 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className=" text-xl text-neutral-900 pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">About Me </motion.h1>
            <motion.span  variants={container(1)}
            initial="hidden"
            animate="visible" className="text-neutral-900 text-3xl tracking-tight text-transparent">Social Media Manager / Digital Startegist | Web3 Educator | Coach.
</motion.span>
            < motion.p  variants={container(1.5)}
            initial="hidden"
            animate="visible" className="my-2 max-w-xl py-6  text-xl text-neutral-800  tracking-tighter"> {HERO_CONTENT}</motion.p>
          </div>
          </div>
          
         </div>

      </div>
  )
}