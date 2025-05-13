'use client'

import { useState, FormEvent, ChangeEvent } from 'react';
import { Send, Calendar, CheckCircle2 } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    company: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (errors[name as keyof FormErrors]) {
            setErrors({
                ...errors,
                [name]: undefined
            });
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        if (!validateForm()) {
            e.preventDefault();
            return;
        }
        
        setIsSubmitting(true);
        
        // Form will be submitted natively to Formspark
        // After submission, Formspark will handle the redirect back
        
        // Reset form state after successful submission
        // This will happen when user returns to the page after submission
        window.onload = () => {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('_status') === 'OK') {
                setIsSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    message: ''
                });
                
                setTimeout(() => {
                    setIsSuccess(false);
                }, 5000);
            }
        };
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-20 blur-xl"></div>
                <div className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-10 shadow-2xl">
                    <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                        Get in Touch
                    </h2>
                    <p className="text-slate-400 mb-8">
                        We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                    </p>

                    {isSuccess ? (
                        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 mb-8 flex items-center">
                            <CheckCircle2 className="text-green-500 mr-4 flex-shrink-0" size={24} />
                            <div>
                                <h4 className="text-white font-medium mb-1">Message Sent!</h4>
                                <p className="text-slate-400">Thank you for reaching out. We'll be in touch shortly.</p>
                            </div>
                        </div>
                    ) : null}

                    <form onSubmit={handleSubmit} action="https://submit-form.com/jvPcybbTB" method="POST" target="_blank">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                    Name <span className="text-cyan-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full bg-slate-900 border ${errors.name ? 'border-red-500' : 'border-slate-700'} rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                                    placeholder="Your name"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                    Email <span className="text-cyan-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full bg-slate-900 border ${errors.email ? 'border-red-500' : 'border-slate-700'} rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                                    placeholder="your.email@example.com"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                                Company
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                placeholder="Your company name"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                Message <span className="text-cyan-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className={`w-full bg-slate-900 border ${errors.message ? 'border-red-500' : 'border-slate-700'} rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                                placeholder="Tell us about your robotics needs..."
                            ></textarea>
                            {errors.message && (
                                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                            )}
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white transition-all duration-300 shadow-lg shadow-indigo-600/20 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto"
                            >
                                <span>Send Message</span>
                                <Send size={16} className={`ml-2 ${isSubmitting ? '' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'}`} />
                            </button>

                            <a
                                href="https://calendly.com/colorrobotics/demo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-full bg-slate-700 hover:bg-slate-600 text-white transition-all duration-300 flex items-center justify-center w-full md:w-auto"
                            >
                                <Calendar size={16} className="mr-2" />
                                <span>Schedule a Demo</span>
                            </a>
                        </div>
                    </form>

                    <div className="mt-8 text-sm text-slate-400 border-t border-slate-700 pt-6">
                        <p>
                            By submitting this form, you agree to our <a href="#" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</a>. For faster response, you can also schedule a demo directly through our <a href="https://calendly.com/colorrobotics/demo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Calendly</a>.
                        </p>
                        <p className="mt-4">
                            Email us directly at <a href="mailto:info@colorrobotics.ai" className="text-cyan-400 hover:text-cyan-300">info@colorrobotics.ai</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}