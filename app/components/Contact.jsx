"use client";

import { useRef, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Contact = () => {
    // State to store the result message after form submission
    const [result, setResult] = useState("");
    const [isSending, setIsSending] = useState(false);
    // Time the form was rendered, used to reject instant bot submissions
    const loadedAt = useRef(Date.now());

    // Function to handle form submission
    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        if (isSending) return;

        const form = event.target;
        const formData = new FormData(form); // Collect form data

        // Spam protection: bots tend to fill hidden fields or submit instantly.
        // Pretend success so bots get no signal, but send nothing.
        const botFilled = formData.get("botcheck");
        const tooFast = Date.now() - loadedAt.current < 3000;
        if (botFilled || tooFast) {
            setResult(tooFast && !botFilled ? "Please wait a moment and try again." : "Thanks! Your message has been sent.");
            return;
        }

        setIsSending(true);
        setResult("Sending..."); // Display a loading message

        const name = String(formData.get("name") || "").trim();
        formData.append("access_key", "87e1a44a-33a6-426a-8f37-d603e3217d6a"); // Add access key for API authentication
        formData.append("subject", `New message from ${name} via your portfolio`);
        formData.append("from_name", "Portfolio Contact Form");

        try {
            // Send form data to the Web3Forms API
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json(); // Parse the JSON response

            if (data.success) {
                // If the API response indicates success
                setResult("Thanks! Your message has been sent."); // Update the result message
                form.reset(); // Reset the form fields
                loadedAt.current = Date.now();
            } else {
                // If the API response indicates an error
                setResult(data.message); // Display the error message
            }
        } catch (error) {
            // Handle any network or unexpected errors
            console.error("Submission failed", error);
            setResult("An error occurred. Please try again.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section
            id="contact"
            className="text-center w-full px-[12%] py-20 scroll-mt-20"
        >
            <div className="max-w-xl mx-auto">
                {/* Section heading */}
                <p className="text-center text-lg mb-2 font-Ovo">Connect with me</p>
                <h2 className="text-4xl md:text-5xl font-Ovo mb-6">Get in touch</h2>
                <p className="max-w-2xl text-center mx-auto font-Ovo text-gray-600 mb-10">
                    I&apos;d love to hear from you! If you have any questions, comments or
                    feedback, please use the form below.
                </p>

                {/* Contact form */}
                <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-6">
                    {/* Input fields for name and email */}
                    {/* Honeypot field: hidden from humans, bots fill it in */}
                    <input
                        type="checkbox"
                        name="botcheck"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        className="hidden"
                    />

                    <div className="flex flex-col sm:flex-row gap-4">
                        <label className="sr-only" htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            maxLength={100}
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 font-Ovo placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                            required
                        />
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            maxLength={150}
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 font-Ovo placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                            required
                        />
                    </div>

                    {/* Textarea for the message */}
                    <label className="sr-only" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        rows={6}
                        name="message"
                        maxLength={2000}
                        placeholder="Enter your message"
                        className="w-full border border-gray-300 rounded-md px-4 py-3 font-Ovo placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                        required
                    ></textarea>

                    {/* Submit button */}
                    <button
                        type="submit"
                        disabled={isSending}
                        className="mx-auto flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-Ovo hover:bg-rose-500 transition disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {isSending ? "Sending..." : "Submit"} <IoIosArrowRoundForward size={20} />
                    </button>

                    {/* Display result message */}
                    <p className="mt-4 text-rose-500" aria-live="polite">{result}</p>
                </form>
            </div>
        </section>
    );
};

export default Contact;
