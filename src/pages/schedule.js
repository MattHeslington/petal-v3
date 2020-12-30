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
                <h1 className="z-10 my-40 font-bold text-8xl gradienta"><span>Schedule a call</span></h1>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <p>email us</p>
                    <p>email@email.com</p>
                </div>
                <div className="w-full md:w-1/2">
                    <p>The team is open for your ideas, questions and needs. Our clients get the superior results when a short-term acquaintance turns into a long-term collaboration.</p>
                </div>
            </div>

            <div>
                <h2 className="mt-12 font-bold tracking-widest uppercase">request a quote</h2>
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
                <div className="z-10 w-full mt-12">
                    <input onChange={(e) => setEmail(e.target.value)} value={email} name="email" className="w-full px-6 py-8 text-xl font-light text-gray-400 border border-gray-600 bg-darkBG focus:outline-none focus:border-white"  type="text" placeholder="email"/>
                </div>

                <div>
                    <h2 className="mt-12 font-bold tracking-widest uppercase">message</h2>
                </div>

                <div className="z-10 mt-8">
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} name="message" className="w-full px-6 py-8 text-xl font-light text-gray-400 border border-gray-600 bg-darkBG focus:outline-none focus:border-white" rows="10">what is your project about and that?</textarea>
                </div>
                <div>
                    <button type="submit" className="px-5 py-3 text-sm font-light border border-white rounded-full bg-btnStandard">Send now</button>
                </div>
            </form>
        </Layout>
    )
}

export default Schedule

//TODO: Apply the bg shadow gradient to the span, not as an absolutely positioned element. You could do it like those shadows you were going to use in your portfolio
