import React from 'react'
import {Helmet} from "react-helmet";
import Nav from 'src/components/Nav'

import Snowflakes from 'src/components/Snowflakes'

const Layout = ({children}) => {
    return (
        <Snowflakes>
            <Helmet
                htmlAttributes={{
                    lang: 'en',
                }}
            />
            <div className="container flex flex-col min-h-screen mx-auto">
                <Nav/>
                {children}
            </div>
        </Snowflakes>
    )
}

export default Layout
