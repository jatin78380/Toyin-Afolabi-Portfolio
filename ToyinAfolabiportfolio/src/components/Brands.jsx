import { motion } from "framer-motion";
import Brandtwo from "../assets/brands/brand2.png";
import Brandone from "../assets/brands/brand1.png";
import Brandthree from "../assets/brands/brand3.png";
import Brandfour from "../assets/brands/brand4.png";
import Brandfive from "../assets/brands/brand5.png";

export const Brands = () => {
    return (
        <div className="border-b border-neutral-900 pb-4"> 
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-neutral-900 text-4xl"
            >
                Brands I have worked
            </motion.h1>
            <div>
                <div className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4 flex justify-center"
                    >
                        <img src={Brandone} className="rounded mb-6 w-60 h-32 object-cover" alt="imageofbrand1" />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-3/4"
                    >
                        <h6 className="my-2 py-6 text-xl text-neutral-800 tracking-tighter">
                            Provided comprehensive training to students on effective social media management practices.
                            Assigned and supervised successful LinkedIn optimization projects for students
                            Enhanced students' engagement and understanding of social media strategies through interactive sessions and practical exercises.
                            Significantly improved students' skills in content creation, analytics, and social media strategy.
                            Provided ongoing feedback and mentoring to help students continuously improve their social media management abilities.
                        </h6>
                    </motion.div>
                </div>
                <div className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4 flex justify-center"
                    >
                        <img src={Brandtwo} className="rounded mb-6 w-32 h-32 object-cover" alt="imageofbrand2" />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-3/4"
                    >
                        <h6 className="my-2 py-6 text-xl text-neutral-800 tracking-tighter">
                            Tracked and analyzed campaign performance to optimize content for maximum reach and engagement.
                            Increased Instagram followers from 1,000 to 2,500.
                            Effectively managed the Google My Business account to generate sales.
                            Successfully put the business on Google Maps for better visibility.
                            Achieved a 12% revenue growth after product and service adjustments.
                        </h6>
                    </motion.div>
                </div>
                <div className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4 flex justify-center"
                    >
                        <img src={Brandthree} className="rounded mb-6 w-32 h-32 object-cover" alt="imageofbrand3" />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-3/4"
                    >
                        <h6 className="my-2 py-6 text-xl text-neutral-800 tracking-tighter">
                            Managed 3 social platforms, including X account, and planned content, scheduled content posts, and tracked performance.
                            Increased followers from 400 to 1000 within one month on Instagram.
                            Created engaging and visually appealing graphics and multimedia content for social media posts.
                            Interacted with online audiences to foster meaningful engagement and build brand loyalty.
                        </h6>
                    </motion.div>
                </div>
                <div className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4 flex justify-center"
                    >
                        <img src={Brandfour} className="rounded mb-6 w-32 h-32 object-cover" alt="imageofbrand4" />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-3/4"
                    >
                        <h6 className="my-2 py-6 text-xl text-neutral-800 tracking-tighter">
                            Increased followers from 0 to 3,000 on LinkedIn within 8 months.
                            Increased post visibility and interactions through a strategic approach to captions.
                            Ensured consistency with brand guidelines throughout the entire content creation process.
                        </h6>
                    </motion.div>
                </div>
                <div className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4 flex justify-center"
                    >
                        <img src={Brandfive} className="rounded mb-6 w-41 h-32 object-cover" alt="imageofbrand5" />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-3/4"
                    >
                        <h6 className="my-2 py-6 text-xl text-neutral-800 tracking-tighter">
                            Designed, edited videos, and created engaging content.
                            Created and implemented a strategy that significantly improved visibility.
                            Increased followers from 0 to 300 within one month on a social media platform.
                        </h6>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
