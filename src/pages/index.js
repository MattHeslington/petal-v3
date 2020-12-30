import * as React from "react"
import Layout from 'src/components/Layout'
import red from 'src/static/red.png'
import blue from 'src/static/blue.png'
import orange from 'src/static/orange.png'
import tech from 'src/static/tech.png'
import custom from 'src/static/custom.png'
import fast from 'src/static/fast.png'

// markup
const IndexPage = () => {

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center w-full h-screen mt-20">
                <h2 className="mb-12 text-5xl font-black leading-tight tracking-tight text-center text-white xl:text-10xl lg:text-8xl md:text-7xl sm:text-6xl">
                    <span className="gradienta">Cost-effective</span>
                    <br/>
                    web development
                    <br/>
                    <span className="gradienta">you'll adore</span>
                </h2>
                <div className="flex items-center justify-around w-full mb-16">
                    <div className="flex flex-col items-center space-y-5">
                        <img className="w-24" src={tech} alt="technology"/>
                        <p className="text-sm font-light">We use cutting-edge technology</p>
                    </div>
                    <div className="flex flex-col items-center space-y-5">
                        <img className="w-24" src={custom} alt="custom made"/>
                        <p className="text-sm font-light">Our sites are lovingly custom-made</p>
                    </div>
                    <div className="flex flex-col items-center space-y-5">
                        <img className="w-24" src={fast} alt="fast"/>
                        <p className="text-sm font-light">Both our websites & service are super fast</p>
                    </div>
                </div>
            </div>

            <div className="my-24">
                <h2 className="text-6xl font-black leading-tight tracking-tight text-center text-white">We make websites that:</h2>
            </div>

            <div className="z-10 flex flex-col items-center p-12 rounded-lg md:flex-row">
                <div className="md:w-1/2 md:mr-5">
                    <h3 className="text-4xl font-bold leading-10 tracking-tight text-white"><span className="gradienta">Score perfectly</span> in Google's five main metrics</h3>
                    <p className="mt-4 text-lg font-light leading-loose">Although Google’s algorithms are a closely guarded secret, we do know Google ranks a website according to the experience it gives its users.</p>
                </div>
                <div className="md:w-1/2 md:ml-5">
                    <img src={red} alt="red background"/>
                </div>
            </div>
            <div className="z-10 flex flex-col items-center p-12 rounded-lg md:flex-row">
                <div className="md:w-1/2 md:mr-5">
                    <h3 className="text-4xl font-bold leading-10 tracking-tight text-white"><span className="gradienta">Display perfectly</span> on any device</h3>
                    <p className="mt-4 text-lg font-light leading-loose">Although Google’s algorithms are a closely guarded secret, we do know Google ranks a website according to the experience it gives its users.</p>
                </div>
                <div className="md:w-1/2 md:ml-5">
                    <img src={blue} alt="blue background"/>
                </div>
            </div>
            <div className="z-10 flex flex-col items-center p-12 rounded-lg md:flex-row">
                <div className="md:w-1/2 md:mr-5">
                    <h3 className="text-4xl font-bold leading-10 tracking-tight text-white"><span className="gradienta">Can be edited anywhere</span>, instantly</h3>
                    <p className="mt-4 text-lg font-light leading-loose">Although Google’s algorithms are a closely guarded secret, we do know Google ranks a website according to the experience it gives its users.</p>
                </div>
                <div className="md:w-1/2 md:ml-5">
                    <img src={orange} alt="orange background"/>
                </div>
            </div>
            <div className="z-10 flex flex-col items-center p-12 rounded-lg md:flex-row">
                <div className="md:w-1/2 md:mr-5">
                    <h3 className="text-4xl font-bold leading-10 tracking-tight text-white">Users can add to <span className="gradienta">their homescreen</span></h3>
                    <p className="mt-4 text-lg font-light leading-loose">Although Google’s algorithms are a closely guarded secret, we do know Google ranks a website according to the experience it gives its users.</p>
                </div>
                <div className="md:w-1/2 md:ml-5">
                    <img src={orange} alt="orange background"/>
                </div>
            </div>

        </Layout>
    )
}

export default IndexPage

//TODO: The white font on the awards is too bright, maybe the blue on the wreath