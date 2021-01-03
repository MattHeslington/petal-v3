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
        <div className="flex h-screen md:flex-row">
            <div className="flex flex-col justify-center w-1/2 h-screen px-12">
                <h2 className="text-5xl font-bold leading-snug tracking-tight text-white">You're in <span className="gradienta">great hands</span>.</h2>
                <p className="mt-4 text-lg font-light leading-loose">Petal is a small boutique design studio dedicated to achieving outstanding results using the latest web technologies. We have over twenty years of experience of web design and development, have also run stunningly successful digital marketing campaigns in some of the toughest market-segments in the world, and have turned small online businesses into multi-million dollar operations.</p>
            </div>
            <div className="flex items-center justify-center w-1/2 h-screen px-12">
                <div className="z-10 flex md:mb-24">
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
