import React from 'react'
import Lottie from 'react-lottie';
import Listen from 'src/components/animations/Listen.json'


const tree = ({number, heading, text}) => {

    const listenOptions = {
        loop: true,
        autoplay: true,
        animationData: Listen,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full space-y-6 md:flex-row md:space-y-0">
            <div className="flex items-center justify-center w-full md:mr-10 md:justify-end md:w-5/12">
                <h3 className="text-4xl font-bold tracking-tight text-center md:text-right leading-0 gradienta">
                    <div className="inline-block">
                        <div className="flex items-center justify-center w-12 h-12 mr-4 border-4 rounded-full">{number}</div>
                    </div><span className="gradienta"></span>{heading}</h3>
            </div>
            <div className="flex justify-center w-full md:w-2/12 line">
                <div className="z-20 flex">
                    <Lottie options={listenOptions}
                        height={150}
                        width={150}
                    />
                </div>
            </div>
            <div className="w-8/12 md:ml-10 md:w-5/12">
                <p className="text-center md:text-left">{text}</p>
            </div>
        </div>
    )
}

export default tree
