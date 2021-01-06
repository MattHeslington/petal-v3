import * as React from "react"
import { motion } from "framer-motion";
import {Helmet} from "react-helmet";
import Layout from 'src/components/Layout'
import About from 'src/components/About'
import FooterCTA from 'src/components/FooterCTA'

import tech from 'src/static/tech.png'
import custom from 'src/static/custom.png'
import fast from 'src/static/fast.png'
import lighthouse from 'src/static/lighthouse.png'
import responsive from 'src/static/responsive.jpeg'
import pwa from 'src/static/pwa.jpg'
import cms from 'src/static/cms.jpg'

// markup
const IndexPage = () => {

    const defaultHero = {scale: 0.92};
    const defaultAward = {opacity:0, scale:0.8}

    return (
        <>
        <Layout>
            <Helmet>
                <title>P E T A L .</title>
                <meta name="description" content="Petal is a small boutique design studio dedicated to achieving outstanding results using the latest web technologies." />
            </Helmet>
            <div className="flex flex-col items-center justify-center w-full h-screen mt-20">
                <motion.div initial={defaultHero} animate={{scale: 1}} transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}>
                    <h2 className="mt-32 mb-6 font-sans text-4xl font-black leading-tight tracking-tight text-center text-white xl:-mt-24 lg:-mt-20 md:-mt-16 sm:mt-0 xl:text-10xl lg:text-8xl md:text-7xl sm:text-6xl">
                        <span className="gradienta">Cost-effective</span>
                        <br/>
                        web development
                        <br/>
                        <span className="gradienta">you'll adore</span>
                    </h2>
                </motion.div>
                <div className="flex flex-col items-center justify-around w-full mt-8 mb-16 space-x-2 space-y-8 sm:flex sm:flex-row xl:mt-0 lg:mt-12 md:mt-16 sm:mt-20 sm:space-y-0">
                    <motion.div initial={defaultAward} animate={{scale: 1, opacity:1}} transition={{ delay:0.7, duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }} className="flex flex-col items-center w-48 space-y-5">
                        <img className="w-8 lg:w-20 md:w-16 sm:w-12" src={tech} alt="technology"/>
                        <p className="font-sans text-xs font-light text-center">All our sites are bespoke & custom-made to our client's exact requirements</p>
                    </motion.div>
                    <motion.div initial={defaultAward} animate={{scale: 1, opacity:1}} transition={{ delay:0.9, duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }} className="flex flex-col items-center w-48 space-y-5">
                        <img className="w-8 lg:w-20 md:w-16 sm:w-12" src={custom} alt="custom made"/>
                        <p className="font-sans text-xs font-light text-center">We use the best, cutting-edge technology to give the user the best possible experience</p>
                    </motion.div>
                    <motion.div initial={defaultAward} animate={{scale: 1, opacity:1}} transition={{ delay:1.1, duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }} className="flex flex-col items-center w-48 space-y-5">
                        <img className="w-8 lg:w-20 md:w-16 sm:w-12" src={fast} alt="fast"/>
                        <p className="font-sans text-xs font-light text-center">All our sites are optimised for SEO, performance and accessibility &amp; are incredibly fast</p>
                    </motion.div>
                </div>
            </div>

            <About/>

            <div className="mt-64 sm:my-24">
                <h2 className="font-sans text-4xl font-black leading-tight tracking-tight text-center text-white sm:text-5xl xl:text-6xl"><span className="gradienta">We make websites</span> that:</h2>
            </div>

            <div className="z-10 flex flex-col items-center p-12 rounded-lg md:flex-row">
                <div className="md:w-1/2 md:mr-5">
                    <h3 className="font-sans text-4xl font-bold leading-10 tracking-tight text-center text-white md:text-left"><span className="gradienta">Score perfectly</span> in all of Google's five main metrics</h3>
                    <p className="mt-4 font-sans text-lg font-light leading-loose text-center md:text-left">We ensure the websites we make score as high as possible in Google’s five key metrics, shown here.  If you already have a site, we guarantee we’ll beat the score you currently have. You can <a href="https://web.dev/measure/"  target="_blank" rel="noreferrer" className="underline">measure your current site here<svg className="inline-block w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>.</p>
                </div>
                <div className="md:w-1/2 md:ml-5">
                    <img className="mt-4 border border-gray-700 rounded-lg md:mt-0" src={lighthouse} alt="perfect google lighthouse scores"/>
                </div>
            </div>
            <div className="z-10 flex flex-col items-center p-12 rounded-lg md:flex-row">
                <div className="md:w-1/2 md:mr-5">
                    <h3 className="font-sans text-4xl font-bold leading-10 tracking-tight text-center text-white md:text-left"><span className="gradienta">Display perfectly</span> on any device</h3>
                    <p className="mt-4 font-sans text-lg font-light leading-loose text-center md:text-left">It’s vitally important your website is optimised for hand phones. The majority of all digital content consumption happens on mobile devices. Not only that, the percentage of mobile-only people is steadily outgrowing the percentage of the desktop-only audience.In other words, responsive design is vital to keep and attract customers who rely on mobile devices.</p>
                </div>
                <div className="rounded-xl md:w-1/2 md:ml-5">
                    <img className="mt-4 border border-gray-700 rounded-lg md:mt-0" src={responsive} alt="responsive websites"/>
                </div>
            </div>
            <div className="z-10 flex flex-col items-center p-12 rounded-lg md:flex-row">
                <div className="md:w-1/2 md:mr-5">
                    <h3 className="font-sans text-4xl font-bold leading-10 tracking-tight text-center text-white md:text-left"><span className="gradienta">Can be edited anywhere</span>, instantly</h3>
                    <p className="mt-4 font-sans text-lg font-light leading-loose text-center md:text-left">All our websites come with a custom-made content editor that allows you to make any changes you need to your sites, instantly. Because our Content Management Systems are custom-made, they’re fast, instinctive and beautifully easy to use. </p>
                </div>
                <div className="md:w-1/2 md:ml-5">
                    <img className="mt-4 border border-gray-700 rounded-lg md:mt-0" src={cms} alt="custom-made content management systems"/>
                </div>
            </div>
            <div className="z-10 flex flex-col items-center p-12 pb-64 rounded-lg md:flex-row">
                <div className="md:w-1/2 md:mr-5">
                    <h3 className="font-sans text-4xl font-bold leading-10 tracking-tight text-center text-white md:text-left">Users can add to <span className="gradienta">their device homescreen</span></h3>
                    <p className="mt-4 font-sans text-lg font-light leading-loose text-center md:text-left">Our websites give users the option to add the website  icon to their home screen, making your website instantly available to the user and act and behave like an app.  According to studies, this can lead to a <a href="https://www.sam-solutions.com/blog/the-benefits-of-progressive-web-apps-pwa-for-business/"  target="_blank" rel="noreferrer" className="underline">52% increase in conversions and a 134% increase in page views&nbsp;
                    <svg className="inline-block w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>.</p>
                </div>
                <div className="md:w-1/2 md:ml-5">
                    <img className="mt-4 border border-gray-500 rounded-lg md:mt-0" src={pwa} alt="add your website to a phone's homescreen"/>
                </div>
            </div>



        </Layout>
        <FooterCTA/>
        </>
    )
}

export default IndexPage

//TODO: The white font on the awards is too bright, maybe the blue on the wreath