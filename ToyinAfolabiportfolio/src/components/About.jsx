import Profile from "../assets/toyinpic.png";
import { ABOUT_TEXT } from "../constants";
import {motion} from 'framer-motion'
export const About = ()=>{
    return(
        <div className=" border-b border-neutral-900 pb-4">
           
                <div class="p-8 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-neutral-900 mb-4">Professional Accomplishments</h2>
    
    <div class="mb-6">
        <h3 class="text-xl font-semibold text-neutral-900">LinkedIn</h3>
        <p class="text-neutral-700">2,567 Followers</p>
    </div>
    
    <div class="mb-6">
        <h3 class="text-xl font-semibold text-neutral-900">Content Writing & Sales</h3>
        <p class="text-neutral-700">25+ Projects Completed</p>
    </div>
    
    <div class="mb-6">
        <h3 class="text-xl font-semibold text-neutral-900">Client Management</h3>
        <p class="text-neutral-700">20+ Clients Handled</p>
    </div>
    
    <div class="mb-6">
        <h3 class="text-xl font-semibold text-neutral-900">Design Projects</h3>
        <p class="text-neutral-700">50+ Design Projects Delivered</p>
    </div>
</div>

        </div>
    )
}