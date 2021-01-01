import * as React from "react"
import { motion } from "framer-motion";
import {Helmet} from "react-helmet";
import Layout from 'src/components/Layout'
import red from 'src/static/red.png'
import blue from 'src/static/blue.png'
import orange from 'src/static/orange.png'
import tech from 'src/static/tech.png'
import custom from 'src/static/custom.png'
import fast from 'src/static/fast.png'

// markup
const IndexPage = () => {

    const defaultHero = {scale: 0.92};
    const defaultAward = {opacity:0, scale:0.8}

    return (
        <Layout>
            <Helmet>
                <title>P E T A L .</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center w-full h-screen mt-20">
                <motion.div initial={defaultHero} animate={{scale: 1}} transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}>
                    <h2 className="mb-12 text-5xl font-black leading-tight tracking-tight text-center text-white xl:text-10xl lg:text-8xl md:text-7xl sm:text-6xl">
                        <span className="gradienta">Cost-effective</span>
                        <br/>
                        web development
                        <br/>
                        <span className="gradienta">you'll adore</span>
                    </h2>
                </motion.div>
                <div className="flex items-center justify-around w-full mb-16">
                    <motion.div initial={defaultAward} animate={{scale: 1, opacity:1}} transition={{ delay:0.7, duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }} className="flex flex-col items-center space-y-5 xl:w-48">
                        <img className="w-20" src={tech} alt="technology"/>
                        <p className="text-xs font-light text-center">All our sites are bespoke & custom-made to our clients exact requirements</p>
                    </motion.div>
                    <motion.div initial={defaultAward} animate={{scale: 1, opacity:1}} transition={{ delay:0.9, duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }} className="flex flex-col items-center space-y-5 xl:w-48">
                        <img className="w-20" src={custom} alt="custom made"/>
                        <p className="text-xs font-light text-center">We use the best, cutting-edge technology to give the user the best possible experience</p>
                    </motion.div>
                    <motion.div initial={defaultAward} animate={{scale: 1, opacity:1}} transition={{ delay:1.1, duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }} className="flex flex-col items-center space-y-5 xl:w-48">
                        <img className="w-20" src={fast} alt="fast"/>
                        <p className="text-xs font-light text-center">All our sites are optimised for SEO, performance and accessibility</p>
                    </motion.div>
                </div>
            </div>

            <div className="my-24">
                <h2 className="text-6xl font-black leading-tight tracking-tight text-center text-white">We make websites that:</h2>
            </div>

            <div className="z-10 flex flex-col items-center p-12 rounded-lg md:flex-row">
                <div className="md:w-1/2 md:mr-5">
                    <h3 className="text-4xl font-bold leading-10 tracking-tight text-white"><span className="gradienta">Score perfectly</span> in Google's five main metrics</h3>
                    <p className="mt-4 text-lg font-light leading-loose">Although Google’s algorithms are a closely guarded secret, we do know Google ranks a website according to the experience it gives its users.</p>
                </div>
                <div className="md:w-1/2 md:ml-5">
                    <img src={red} alt="red background"/>
                </div>
            </div>
            <div className="z-10 flex flex-col items-center p-12 rounded-lg md:flex-row">
                <div className="md:w-1/2 md:mr-5">
                    <h3 className="text-4xl font-bold leading-10 tracking-tight text-white"><span className="gradienta">Display perfectly</span> on any device</h3>
                    <p className="mt-4 text-lg font-light leading-loose">Although Google’s algorithms are a closely guarded secret, we do know Google ranks a website according to the experience it gives its users.</p>
                </div>
                <div className="md:w-1/2 md:ml-5">
                    <img src={blue} alt="blue background"/>
                </div>
            </div>
            <div className="z-10 flex flex-col items-center p-12 rounded-lg md:flex-row">
                <div className="md:w-1/2 md:mr-5">
                    <h3 className="text-4xl font-bold leading-10 tracking-tight text-white"><span className="gradienta">Can be edited anywhere</span>, instantly</h3>
                    <p className="mt-4 text-lg font-light leading-loose">Although Google’s algorithms are a closely guarded secret, we do know Google ranks a website according to the experience it gives its users.</p>
                </div>
                <div className="md:w-1/2 md:ml-5">
                    <img src={orange} alt="orange background"/>
                </div>
            </div>
            <div className="z-10 flex flex-col items-center p-12 rounded-lg md:flex-row">
                <div className="md:w-1/2 md:mr-5">
                    <h3 className="text-4xl font-bold leading-10 tracking-tight text-white">Users can add to <span className="gradienta">their homescreen</span></h3>
                    <p className="mt-4 text-lg font-light leading-loose">Although Google’s algorithms are a closely guarded secret, we do know Google ranks a website according to the experience it gives its users.</p>
                </div>
                <div className="md:w-1/2 md:ml-5">
                    <img src={orange} alt="orange background"/>
                </div>
            </div>

        </Layout>
    )
}

export default IndexPage

//TODO: The white font on the awards is too bright, maybe the blue on the wreath