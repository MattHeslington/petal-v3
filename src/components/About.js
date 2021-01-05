import React from 'react'
import Lottie from 'react-lottie';
import animationData from 'src/components/animations/AboutAnim.json'

const About = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="flex flex-col h-screen lg:flex-row">
            <div className="flex flex-col justify-center w-full h-screen px-12 lg:w-1/2">
                <h2 className="font-sans text-5xl font-bold leading-snug tracking-tight text-center text-white lg:text-left">You're in <span className="gradienta">great hands</span>.</h2>
                <p className="mt-4 font-sans text-lg font-light leading-loose text-center lg:text-left">Petal is a small boutique design studio dedicated to achieving outstanding results using the latest web technologies. We have over twenty years of experience of web design and development, have also run stunningly successful digital marketing campaigns in some of the toughest market-segments in the world, and have turned small online businesses into multi-million dollar operations.</p>
            </div>
            <div className="flex items-center justify-center w-full px-12 lg:h-screen lg:w-1/2">
                <div className="z-10 flex md:mb-24 h-190">
                    <Lottie options={defaultOptions}
                        height={600}
                        width={600}
                    />
                </div>
            </div>
        </div>
    )
}

export default About
