import React, {useState} from 'react'
import axios from "axios"
import Layout from 'src/components/Layout'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

toast.configure()

const Schedule = () => {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const notify = () => toast("✅ Thank you! We'll be in touch shortly.");

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;

        axios({
            method: "post",
            url: "https://getform.io/f/ffbd67d3-0f6c-4bbb-a350-b1253c6ef9ca",
            data: new FormData(form)
        })
        .then(r => {
            {notify()}
            setName('');
            setCompany('');
            setEmail('');
            setMessage('');
        })
        .catch(r => {
            console.log('something and that.');
        });
    }

    return (
        <Layout>
            <div className="flex justify-center mt-16">
                <h2 className="z-10 mt-40 mb-16 font-sans text-4xl font-bold lg:mb-40 md:mb-24 sm:mb-20 xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl gradienta"><span>Schedule a call with us</span></h2>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="flex flex-row w-full md:w-1/2">
                    <div className="w-full text-center md:w-1/2 md:text-left">
                        <h3 className="font-sans text-4xl font-bold leading-10 tracking-tight text-white"><span className="gradienta">Email us:</span></h3>
                        <p className="font-sans"><a href='&#109;&#97;&#105;l&#116;o&#58;inf&#111;&#64;%&#55;0%&#54;&#53;%74al&#46;p%7&#55;'>&#105;nfo&#64;peta&#108;&#46;pw</a>&nbsp;<svg className="inline-block w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></p>
                    </div>
                    <div className="w-full text-center md:w-1/2 md:text-left">
                        <h3 className="font-sans text-4xl font-bold leading-10 tracking-tight text-white"><span className="gradienta">Call us:</span></h3>
                        <p className="font-sans">+62 81 999 527 649</p>
                    </div>
                </div>
                <div className="w-full space-y-4 md:w-1/2 md:ml-10">
                    <p className="mt-12 font-sans leading-loose text-center md:text-left sm:mt-16 md:mt-0">Fill in our form and we'll get straight back to you or at a time convenient for you. Please let us know if you would like us to call or email you, or we can chat online.</p>
                    <p className="font-sans text-center md:text-left">We look forward to hearing from you.</p>
                </div>
            </div>

            <div>
                <h2 className="mt-12 font-bold tracking-widest uppercase">your details</h2>
            </div>

            <form onSubmit={handleOnSubmit}>
                <div className="flex flex-col mt-8 md:flex-row">
                    <div className="relative z-10 w-full md:mr-5 md:w-1/2">
                        <input onChange={(e) => setName(e.target.value)} value={name} name="name" className="w-full px-6 py-8 text-xl font-light text-gray-400 border border-gray-600 bg-darkBG focus:outline-none focus:border-white" type="text" placeholder="full name"/>
                    </div>
                    <div className="z-10 w-full mt-12 md:ml-5 md:w-1/2 md:mt-0">
                        <input onChange={(e) => setCompany(e.target.value)} value={company} name="company" className="w-full px-6 py-8 text-xl font-light text-gray-400 border border-gray-600 bg-darkBG focus:outline-none focus:border-white"  type="text" placeholder="company"/>
                    </div>
                </div>
                <div className="flex w-full mt-12">
                    <input onChange={(e) => setEmail(e.target.value)} value={email} name="email" className="z-10 w-full px-6 py-8 text-xl font-light text-gray-400 border border-gray-600 bg-darkBG focus:outline-none focus:border-white"  type="text" placeholder="email"/>
                </div>

                <div>
                    <h2 className="mt-12 font-bold tracking-widest uppercase">message</h2>
                </div>

                <div className="flex mt-8">
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} name="message" className="z-10 w-full px-6 py-8 text-xl font-light text-gray-400 border border-gray-600 bg-darkBG focus:outline-none focus:border-white" rows="10">what is your project about and that?</textarea>
                </div>
                <div className="flex justify-center w-full pb-64 mt-8">
                    <button type="submit" className="px-5 py-3 text-sm font-light border border-white rounded-full bg-btnStandard">Send now</button>
                </div>
            </form>
        </Layout>
    )
}

export default Schedule

//TODO: Apply the bg shadow gradient to the span, not as an absolutely positioned element. You could do it like those shadows you were going to use in your portfolio
