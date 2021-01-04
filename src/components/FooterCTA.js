import React from 'react'
import { Link } from "gatsby"

const FooterCTA = () => {
    return (

        <div className="relative flex flex-col items-center justify-center h-screen bg-footerBG">
            <div className="custom-shape-divider-bottom-1609655970">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <h2 className="mb-12 text-5xl font-black leading-tight tracking-tight text-center text-white xl:text-10xl lg:text-8xl md:text-7xl sm:text-6xl">
                <span className="gradienta">Ready to</span>
                <br/>
                <span className="gradienta">chat about a</span>
                <br/>
                new website?
            </h2>
            <Link to="/schedule"><button className="px-5 py-3 text-4xl font-bold tracking-tight text-white border border-white rounded-full bg-ourBlue">Contact us</button></Link>
        </div>

    )
}

export default FooterCTA
