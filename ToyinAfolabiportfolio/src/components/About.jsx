import Profile from "../assets/toyinpic.png";
import { ABOUT_TEXT } from "../constants";
import {motion} from 'framer-motion'
export const About = ()=>{
    return(
        <div className=" border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-blue-500 text-4xl">About 
                <span className="text-green-600"> Me</span></h1>
            <div className="flex flex-wrap">

                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration: 0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
    <img  className="rounded-2xl" src={Profile} alt="about"/> 
                </div>
               
            </motion.div>
            <motion.div
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration: 0.5}}
            className="w-full  lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl text-blue-600 py-6">{ABOUT_TEXT}</p>
                </div>
                </motion.div>
                </div>
                <div class="p-8 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Professional Accomplishments</h2>
    
    <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-700">LinkedIn</h3>
        <p class="text-gray-600">2,567 Followers</p>
    </div>
    
    <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-700">Content Writing & Sales</h3>
        <p class="text-gray-600">25+ Projects Completed</p>
    </div>
    
    <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-700">Client Management</h3>
        <p class="text-gray-600">20+ Clients Handled</p>
    </div>
    
    <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-700">Design Projects</h3>
        <p class="text-gray-600">50+ Design Projects Delivered</p>
    </div>
</div>

        </div>
    )
}