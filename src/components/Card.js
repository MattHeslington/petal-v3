import React from 'react'
import { Link } from "gatsby"

const Card = () => {
    return (
        <div>
            <div>
                <div>
                    <h2>01</h2>
                    <h3>Card One</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur, velit quos suscipit sit culpa?</p>
                    <Link to="/more-and-that">Read more</Link>
                </div>
            </div>
        </div>
    )
}

export default Card
