import React from 'react'
import {Helmet} from "react-helmet";
import { useInView } from "react-intersection-observer"; // 1.9K gzipped
import { motion } from "framer-motion";
import Layout from 'src/components/Layout'
import FooterCTA from 'src/components/FooterCTA'

import Lottie from 'react-lottie';
import Listen from 'src/components/animations/Listen.json'
import Quote from 'src/components/animations/Quote.json'
import Design from 'src/components/animations/Design.json'
import Mockup from 'src/components/animations/Mockup.json'
import Build from 'src/components/animations/Build.json'
import Launch from 'src/components/animations/Launch.json'

const WorkingWithPetal = () => {

    const listenOptions = {
        loop: true,
        autoplay: true,
        animationData: Listen,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const quoteOptions = {
        loop: true,
        autoplay: true,
        animationData: Quote,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const designOptions = {
        loop: true,
        autoplay: true,
        animationData: Design,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const mockupOptions = {
        loop: true,
        autoplay: true,
        animationData: Mockup,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const buildOptions = {
        loop: true,
        autoplay: true,
        animationData: Build,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const launchOptions = {
        loop: true,
        autoplay: true,
        animationData: Launch,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    return (
        <>
        <Layout>
            <Helmet>
                <title>Working with Petal</title>
            </Helmet>

            <div className="flex justify-center mt-16">
                <h2 className="z-10 my-40 font-bold text-8xl gradienta"><span>Working with Petal</span></h2>
            </div>

            <div className="pb-32">

                <div className="flex items-center w-full md:flex-row">
                    <div className="flex items-center justify-end w-5/12 mr-10">
                        <h3 className="text-4xl font-bold tracking-tight text-right leading-0 gradienta">
                            <div className="inline-block">
                                <div className="flex items-center justify-center w-12 h-12 mr-4 border-4 rounded-full">1</div>
                            </div><span className="gradienta"></span>We listen.</h3>
                    </div>
                    <div className="flex justify-center w-2/12 line">
                        <div className="z-20 flex">
                            <Lottie options={listenOptions}
                                height={150}
                                width={150}
                            />
                        </div>
                    </div>
                    <div className="w-5/12 ml-10">
                        <p>We have curiosity, and a great passion to please. We believe to make great products we must truly listen to what  our clients want. Only be really understanding our client’s needs will we be able to provide what they truly want.</p>
                    </div>
                </div>

                <div className="w-full h-32 line">&nbsp;</div>

                <div className="flex items-center w-full md:flex-row">
                    <div className="w-5/12 mr-10">
                        <p>We believe in transparency and will provide you with an itemised quote, showing every aspect of the build of your website, where you can pick and choose the which features you would like included with your new site, and maybe suggest some new ones.</p>
                    </div>
                    <div className="flex justify-center w-2/12 line">
                        <div className="z-20 flex">
                            <Lottie options={quoteOptions}
                                height={150}
                                width={150}
                            />
                        </div>
                    </div>
                    <div className="w-5/12 ml-10">
                        <h3 className="text-4xl font-bold tracking-tight text-left leading-0 gradienta">
                            <div className="inline-block">
                                <div className="flex items-center justify-center w-12 h-12 mr-4 border-4 rounded-full">2</div>
                            </div>We'll provide an itemised breakdown.</h3>
                    </div>
                </div>

                <div className="w-full h-32 line">&nbsp;</div>

                <div className="flex items-center w-full md:flex-row">
                    <motion.div ref={ref} style={{ opacity: inView ? 1 : 0 }} className="w-5/12 mr-10">
                        <h3 className="text-4xl font-bold tracking-tight text-right leading-0 gradienta">
                            <div className="inline-block">
                                <div className="flex items-center justify-center w-12 h-12 mr-4 border-4 rounded-full">3</div>
                            </div>We design your site.</h3>
                    </motion.div>
                    <div className="flex justify-center w-2/12 line">
                        <div className="z-20 flex">
                            <Lottie options={designOptions}
                                height={150}
                                width={150}
                            />
                        </div>
                    </div>
                    <div className="w-5/12 ml-10">
                        <p>We’ll provide you with a number of graphical mockups of each area of the website, which can then be iterated over through conversation and consideration until we have the best possible new design for your new website. </p>
                    </div>
                </div>

                <div className="w-full h-32 line">&nbsp;</div>

                <div className="flex items-center w-full md:flex-row">
                    <div className="w-5/12 mr-10">
                        <p>Once you’ve decided on your perfect design, we’ll then provide interactive mockups which show your design come-to-life and as it would be used and interacted with in real-life. You’ll be able to view animations, click through to all your pages, and interact with your site as if it was almost real.</p>
                    </div>
                    <div className="flex justify-center w-2/12 line">
                        <div className="z-20 flex">
                            <Lottie options={mockupOptions}
                                height={150}
                                width={150}
                            />
                        </div>
                    </div>
                    <div className="w-5/12 ml-10">
                        <h3 className="text-4xl font-bold tracking-tight text-left leading-0 gradienta">
                            <div className="inline-block">
                                <div className="flex items-center justify-center w-12 h-12 mr-4 border-4 rounded-full">4</div>
                            </div>Play with our interactive mockups.</h3>
                    </div>
                </div>

                <div className="w-full h-32 line">&nbsp;</div>

                <div className="flex items-center w-full md:flex-row">
                    <div className="w-5/12 mr-10">
                        <h3 className="text-4xl font-bold tracking-tight text-right leading-0 gradienta">
                            <div className="inline-block">
                                <div className="flex items-center justify-center w-12 h-12 mr-4 border-4 rounded-full">5</div>
                            </div>We build your site.</h3>
                    </div>
                    <div className="flex justify-center w-2/12 line">
                        <div className="z-20 flex">
                            <Lottie options={buildOptions}
                                height={150}
                                width={150}
                            />
                        </div>
                    </div>
                    <div className="w-5/12 ml-10">
                        <p>When you’re happy with with your interactive mockups, we then begin the all-important crafting of your website, using the best possible technologies for the requirements at hand, ensuring you have a new website which will be your pride and joy.</p>
                    </div>
                </div>

                <div className="w-full h-32 line">&nbsp;</div>

                <div className="flex items-center w-full md:flex-row">
                    <div className="w-5/12 mr-10">
                        <p>There’s no real substitute for getting the feel for how your website looks and feels in real-life.  While we know you'll love your new site, there's no substitute for user-testing in the wild and we'll make and necessary changes based on user-feedback.</p>
                    </div>
                    <div className="flex justify-center w-2/12 line">
                        <div className="z-20 flex">
                            <Lottie options={launchOptions}
                                height={150}
                                width={150}
                            />
                        </div>
                    </div>
                    <div className="w-5/12 ml-10">
                        <h3 className="text-4xl font-bold tracking-tight text-left leading-0 gradienta">
                            <div className="inline-block">
                                <div className="flex items-center justify-center w-12 h-12 mr-4 border-4 rounded-full">6</div>
                            </div>Launch time.</h3>
                    </div>
                </div>

            </div>


        </Layout>
        <FooterCTA/>
        </>
    )
}

export default WorkingWithPetal
