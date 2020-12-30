import React, { useState } from 'react'
import { Link } from "gatsby"
import logo from 'src/static/petal-logo.png'
import text from 'src/static/fast-site.png'
import { HamburgerArrow } from 'react-animated-burgers'

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(prevState => !prevState);
        console.log(isOpen);
    }

    return (
        <div className="z-20 flex flex-row items-center justify-between h-24 -mb-24">
            <div>
                <Link to="/">
                    <img className="h-4" src={logo} alt="P E T A L . logo"/>
                </Link>
            </div>
            <div>
                <ul className="items-center hidden space-x-12 md:flex md:flex-row">
                    <li className="text-sm font-light">
                        <Link to="/work-with-petal">Working with Petal</Link>
                    </li>
                    <li className="text-sm font-light">
                        <Link to="/examples">Services</Link>
                        <div className="absolute w-40 mt-2 mr-12">
                            <img className="" src={text} alt="see how fast our site is"/>
                        </div>
                    </li>
                    <li>
                        <Link to="/schedule">
                            <button className="px-5 py-3 text-sm font-light border border-white rounded-full bg-btnStandard">
                                Schedule a Call
                            </button>
                        </Link>
                    </li>
                </ul>
                <div className="md:hidden">
                    <HamburgerArrow barColor="white" {...{ isOpen, toggle }} />
                </div>
            </div>
        </div>
    )
}

export default Nav

//TODO: Put a transition time on everything
