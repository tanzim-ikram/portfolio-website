import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Contact = () => {
    // State to store the result message after form submission
    const [result, setResult] = useState("");

    // Function to handle form submission
    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        setResult("Sending...."); // Display a loading message

        const formData = new FormData(event.target); // Collect form data
        formData.append("access_key", "87e1a44a-33a6-426a-8f37-d603e3217d6a"); // Add access key for API authentication

        try {
            // Send form data to the Web3Forms API
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json(); // Parse the JSON response

            if (data.success) {
                // If the API response indicates success
                setResult("Form Submitted Successfully"); // Update the result message
                event.target.reset(); // Reset the form fields
            } else {
                // If the API response indicates an error
                console.log("Error", data); // Log the error for debugging
                setResult(data.message); // Display the error message
            }
        } catch (error) {
            // Handle any network or unexpected errors
            console.error("Submission failed", error);
            setResult("An error occurred. Please try again.");
        }
    };

    return (
        <section
            id="contact"
            className="text-center w-full px-[12%] py-10 scroll-mt-20"
        >
            <div className="max-w-xl mx-auto">
                {/* Section heading */}
                <h4 className="text-center text-lg mb-2 font-Ovo">Connect with me</h4>
                <h2 className="text-4xl md:text-5xl font-Ovo mb-6">Get in touch</h2>
                <p className="max-w-2xl text-center mx-auto font-Ovo text-gray-600 mb-10">
                    I'd love to hear from you! If you have any questions, comments or
                    feedback, please use the form below.
                </p>

                {/* Contact form */}
                <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-6">
                    {/* Input fields for name and email */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 font-Ovo placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 font-Ovo placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                            required
                        />
                    </div>

                    {/* Textarea for the message */}
                    <textarea
                        rows="6"
                        name="message"
                        placeholder="Enter your message"
                        className="w-full border border-gray-300 rounded-md px-4 py-3 font-Ovo placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                        required
                    ></textarea>

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="mx-auto flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-Ovo hover:bg-rose-500 transition"
                    >
                        Submit now <IoIosArrowRoundForward size={20} />
                    </button>

                    {/* Display result message */}
                    <p className="mt-4 text-rose-500">{result}</p>
                </form>
            </div>
        </section>
    );
};

export default Contact;
