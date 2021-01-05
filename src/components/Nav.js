import React from 'react'
import { Link } from "gatsby"
import logo from 'src/static/petal-logo.png'
import text from 'src/static/fast-site.png'

const Nav = () => {

    return (
        <div className="z-20 flex flex-row items-center justify-between h-24 -mb-24">
            <div>
                <Link to="/">
                    <img className="h-4" src={logo} alt="P E T A L . logo"/>
                </Link>
            </div>
            <div>
                <ul className="flex flex-row items-center space-x-4 sm:space-x-12">

                    <li className="text-sm font-light">
                        <div className="navlink">
                            <Link to="/working-with-petal" data-content="Working with Petal" className="font-sans highlight">Working with Petal</Link>
                        </div>

                        <div className="absolute w-40 mt-2 mr-12">
                            <img src={text} alt="see how fast our site is" style={{width:"160px",height:"78px"}}/>
                        </div>
                    </li>

                    <li>
                        <Link to="/schedule">
                            <button className="flex items-center px-4 py-2 font-sans text-sm font-light border border-white rounded-full sm:px-5 sm:py-3 bg-footerBG">
                                Schedule a Call&nbsp;
                                <svg className="inline-block w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                            </button>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Nav
