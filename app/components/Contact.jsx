import React, { useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "87e1a44a-33a6-426a-8f37-d603e3217d6a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section id="contact" className="text-center w-full px-[12%] py-10 scroll-mt-20">

            <div className="max-w-xl mx-auto">
                <h4 className="text-center text-lg mb-2 font-Ovo">Connect with me</h4>
                <h2 className="text-4xl md:text-5xl font-Ovo mb-6">Get in touch</h2>
                <p className="max-w-2xl text-center mx-auto font-Ovo text-gray-600 mb-10">
                    I'd love to hear from you! If you have any questions, comments or
                    feedback, please use the form below.
                </p>
                <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 font-Ovo placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500" required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 font-Ovo placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500" required
                        />
                    </div>
                    <textarea
                        rows="6"
                        name="message"
                        placeholder="Enter your message"
                        className="w-full border border-gray-300 rounded-md px-4 py-3 font-Ovo placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500" required
                    ></textarea>
                    <button
                        type="submit"
                        className="mx-auto flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-Ovo hover:bg-rose-500 transition"
                    >
                        Submit now <IoIosArrowRoundForward size={20} />
                    </button>

                    <p className='mt-4 text-rose-500'>{result}</p>
                </form>
            </div>
        </section>
    );
};

export default Contact;
