import React from 'react'

const Responsive = () => {
    return (
        <div className="fixed top-0 right-0 z-50 flex items-center justify-center w-8 h-8 p-2 text-sm text-white bg-black border border-white rounded-full">
            <span className="sm:hidden">ph</span>
            <span className="hidden sm:block md:hidden">sm</span>
            <span className="hidden md:block lg:hidden">md</span>
            <span className="hidden lg:block xl:hidden">lg</span>
            <span className="hidden xl:block">xl</span>
        </div>
    )
}

export default Responsive
