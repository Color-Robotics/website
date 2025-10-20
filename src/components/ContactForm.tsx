'use client'

import { useState, FormEvent, ChangeEvent, useRef } from 'react';
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

    const formRef = useRef<HTMLFormElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

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
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        const form = formRef.current;
        if (form) {
            form.setAttribute('target', 'hidden-iframe');
            form.submit();

            setTimeout(() => {
                setIsSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    message: ''
                });
                setIsSubmitting(false);
            }, 1000);
        }
    };

    return (
        <div className="relative mx-auto w-full max-w-3xl">
            <div className="relative rounded-[32px] border-2 border-border-soft bg-white p-8 shadow-large md:p-12">
                <div className="space-y-8">
                    <div>
                        <p className="text-xs uppercase tracking-[0.32em] text-text-2">Get in Touch</p>
                        <h2 className="mt-4 font-display text-3xl text-text-0 md:text-4xl">
                            Let&apos;s build your AI infrastructure together
                        </h2>
                        <p className="mt-3 text-text-1">
                            Connect with our team to discuss how Color Robotics can provide the data foundation your manufacturing AI needs.
                        </p>
                    </div>

                    {isSuccess ? (
                        <div className="flex flex-col items-center rounded-2xl border-2 p-8 text-center" style={{ borderColor: 'var(--brand-green)', background: 'rgba(27, 77, 46, 0.08)' }}>
                            <CheckCircle2 className="mb-4 text-signal-positive" size={48} />
                            <h3 className="font-display text-2xl text-text-0">Message sent</h3>
                            <p className="mt-2 text-text-1">Thanks for reaching out to Color Robotics. Expect a follow-up from our team shortly.</p>
                        </div>
                    ) : (
                        <>
                            <iframe
                                name="hidden-iframe"
                                ref={iframeRef}
                                style={{ display: 'none' }}
                                title="Hidden form target"
                            ></iframe>

                            <form ref={formRef} onSubmit={handleSubmit} action="https://submit-form.com/jvPcybbTB" method="POST" className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium uppercase tracking-[0.2em] text-text-2">
                                            Name <span style={{ color: 'var(--brand-orange)' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full rounded-xl border-2 ${errors.name ? 'border-red-500' : 'border-border-soft'} bg-surface-1 px-4 py-3 text-text-0 focus:outline-none focus:ring-2 focus:ring-brand-blue`}
                                            placeholder="Your name"
                                        />
                                        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium uppercase tracking-[0.2em] text-text-2">
                                            Email <span style={{ color: 'var(--brand-orange)' }}>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full rounded-xl border-2 ${errors.email ? 'border-red-500' : 'border-border-soft'} bg-surface-1 px-4 py-3 text-text-0 focus:outline-none focus:ring-2 focus:ring-brand-blue`}
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium uppercase tracking-[0.2em] text-text-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border-2 border-border-soft bg-surface-1 px-4 py-3 text-text-0 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                                        placeholder="Your company name"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium uppercase tracking-[0.2em] text-text-2">
                                        Message <span style={{ color: 'var(--brand-orange)' }}>*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className={`w-full rounded-xl border-2 ${errors.message ? 'border-red-500' : 'border-border-soft'} bg-surface-1 px-4 py-3 text-text-0 focus:outline-none focus:ring-2 focus:ring-brand-blue`}
                                        placeholder="Tell us about your manufacturing needs..."
                                    ></textarea>
                                    {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                                </div>

                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group flex w-full items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-text-0 transition sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
                                        style={{ background: 'var(--accent-spectrum)' }}
                                    >
                                        <Send size={18} className="transition-transform group-hover:-translate-y-0.5" />
                                        {isSubmitting ? 'Sending' : 'Send Message'}
                                    </button>

                                    <a
                                        href="https://calendly.com/pradeesh-colorrobotics/15-minutes"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand-blue bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] transition hover:bg-surface-1 sm:w-auto"
                                        style={{ color: 'var(--brand-blue)' }}
                                    >
                                        <Calendar size={18} style={{ color: 'var(--brand-blue)' }} />
                                        Book Meeting
                                    </a>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
