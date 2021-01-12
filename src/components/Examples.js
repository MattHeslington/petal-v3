import React from 'react'

import store from 'src/static/ecommerce.png'
import app from 'src/static/app.png'
import business from 'src/static/business.png'

const Examples = () => {
    return (
        <>
            <div className="mt-64 sm:my-24">
                <h2 className="font-sans text-4xl font-black leading-tight tracking-tight text-center text-white sm:text-5xl xl:text-6xl "><span className="gradienta">View our work</span></h2>
            </div>

            <div className="z-10 flex flex-col items-center p-12 rounded-lg md:flex-row">
                <div className="md:w-1/2 md:mr-5">
                    <h3 className="font-sans text-4xl font-bold leading-10 tracking-tight text-center text-white md:text-left"><span className="gradienta">Ecommerce</span> done correctly</h3>
                    <p className="mt-4 font-sans text-lg font-light leading-loose text-center md:text-left">Talk to Petal about the right way to do Ecommerce, and why a Petal site gives you far better performance than a shop built in Shopify or Wix. You can <a href="https://petal-ecommerce.vercel.app/"  target="_blank" rel="noreferrer" className="underline">view our blazingly-fast sample ecommerce store here<svg className="inline-block w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>.</p>
                </div>
                <div className="md:w-1/2 md:ml-5">
                    <a href="https://petal-ecommerce.vercel.app/"  target="_blank" rel="noreferrer">
                        <img className="mt-4 border border-gray-700 rounded-lg md:mt-0" src={store} alt="our blazingly-fast sample ecommerce store"/>
                    </a>
                </div>
            </div>
            <div className="z-10 flex flex-col items-center p-12 rounded-lg md:flex-row">
                <div className="md:w-1/2 md:ml-5">
                    <a href="https://petal-app-showcase.vercel.app/"  target="_blank" rel="noreferrer">
                        <img className="mt-4 border border-gray-700 rounded-lg md:mt-0" src={app} alt="promote your business with a Petal showcase website"/>
                    </a>
                </div>
                <div className="md:w-1/2 md:ml-5">
                    <h3 className="mt-4 font-sans text-4xl font-bold leading-10 tracking-tight text-center text-white md:mt-0 md:text-left"><span className="gradienta">Showcase</span> websites</h3>
                    <p className="mt-4 font-sans text-lg font-light leading-loose text-center md:text-left">We know the importance of making a great first impression. Talk to Petal about a gorgeous showcase for your company. <a href="https://petal-app-showcase.vercel.app/"  target="_blank" rel="noreferrer" className="underline"> View an example of a fully responsive showcase website here<svg className="inline-block w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>.</p>
                </div>
            </div>
            <div className="z-10 flex flex-col items-center p-12 rounded-lg md:flex-row">
                <div className="md:w-1/2 md:mr-5">
                    <h3 className="font-sans text-4xl font-bold leading-10 tracking-tight text-center text-white md:text-left"><span className="gradienta">Business</span> websites</h3>
                    <p className="mt-4 font-sans text-lg font-light leading-loose text-center md:text-left">Promoting your business correctly has never been so important. Contact us to chat about what we can do for your company. You can <a href="https://petal-business-showcase.vercel.app/"  target="_blank" rel="noreferrer" className="underline">view an eample of an instanly-loading business showcase here<svg className="inline-block w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>.</p>
                </div>
                <div className="md:w-1/2 md:ml-5">
                    <a href="https://petal-business-showcase.vercel.app/"  target="_blank" rel="noreferrer">
                        <img className="mt-4 border border-gray-700 rounded-lg md:mt-0" src={business} alt="our blazingly-fast business showcase website"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Examples
