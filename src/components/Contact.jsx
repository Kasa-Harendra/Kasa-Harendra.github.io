import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import FadeInSection from './ui/FadeInSection';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Optional: form submission handler if you want to prevent default and use JS fetch
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitted(true);
                form.reset();
                setTimeout(() => setIsSubmitted(false), 5000);
            }
        } catch (error) {
            console.error("Form submission error", error);
            // Fallback for demo if formspree URL isn't set yet
            if (form.action.includes("YOUR_FORM_ID_HERE")) {
                setIsSubmitted(true);
                form.reset();
                setTimeout(() => setIsSubmitted(false), 5000);
            }
        }
    };

    return (
        <section id="contact" className="py-10 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <FadeInSection>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Connect</span>
                        </h2>
                    </FadeInSection>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left Column: Contact Info */}
                    <FadeInSection delay={0.1}>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            {/* Email */}
                            <a
                                href="mailto:harendrakasa@gmail.com"
                                className="group flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                <span className="text-sm">harendrakasa@gmail.com</span>
                            </a>

                            {/* Location */}
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-5 h-5" />
                                <span className="text-sm">India</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-2">
                            <h3 className="text-lg font-semibold text-white mb-4">Connect across the web</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/in/harendra-kasa-13a238329/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-14 h-14 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://github.com/Kasa-Harendra"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-14 h-14 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <FaGithub className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://medium.com/@harendrakasa"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-14 h-14 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <FaMedium className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                    </FadeInSection>

                    {/* Right Column: Form */}
                    <FadeInSection delay={0.3}>
                    <div className="relative">
                        {/* Glow effect behind form */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20"></div>

                        <div className="relative bg-[#0B0F19] border border-white/10 rounded-xl p-6 md:p-8 shadow-2xl">
                            <form
                                action="https://formspree.io/f/xpqeqqvr"
                                method="POST"
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-4"
                            >
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="name" className="text-sm text-gray-400 font-medium">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                        placeholder="Harendra"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="email" className="text-sm text-gray-400 font-medium">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                        placeholder="harendrakasa@gmail.com"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="message" className="text-sm text-gray-400 font-medium">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={3}
                                        className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                                        placeholder="Let's collab"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 mt-1 bg-white text-black font-semibold rounded-md hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    {isSubmitted ? (
                                        <>
                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            <span>Message Sent!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-center text-gray-500 mt-2">
                                </p>
                            </form>
                        </div>
                    </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
};

export default Contact;
