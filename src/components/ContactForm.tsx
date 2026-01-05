'use client'

import { useState, FormEvent, ChangeEvent, useRef } from 'react';
import { Send, Calendar, CheckCircle2 } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    company: string;
}

interface FormErrors {
    name?: string;
    email?: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: ''
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

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
                    company: ''
                });
                setIsSubmitting(false);
            }, 1000);
        }
    };

    return (
        <div className="relative mx-auto w-full max-w-xl">
            <div className="relative rounded-3xl border-2 border-border-soft bg-white p-8 shadow-large md:p-10">
                {isSuccess ? (
                    <div className="flex flex-col items-center rounded-2xl border-2 p-8 text-center" style={{ borderColor: 'var(--brand-green)', background: 'rgba(27, 77, 46, 0.08)' }}>
                        <CheckCircle2 className="mb-4 text-brand-green" size={48} />
                        <h3 className="font-display text-2xl text-text-0">You&apos;re on the list</h3>
                        <p className="mt-2 text-text-1">We&apos;ll be in touch soon.</p>
                    </div>
                ) : (
                    <>
                        <iframe
                            name="hidden-iframe"
                            ref={iframeRef}
                            style={{ display: 'none' }}
                            title="Hidden form target"
                        ></iframe>

                        <form ref={formRef} onSubmit={handleSubmit} action="https://submit-form.com/jvPcybbTB" method="POST" className="space-y-5">
                            <div className="grid gap-5 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-text-1">
                                        Name <span className="text-brand-orange">*</span>
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
                                    <label htmlFor="email" className="text-sm font-medium text-text-1">
                                        Email <span className="text-brand-orange">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full rounded-xl border-2 ${errors.email ? 'border-red-500' : 'border-border-soft'} bg-surface-1 px-4 py-3 text-text-0 focus:outline-none focus:ring-2 focus:ring-brand-blue`}
                                        placeholder="you@company.com"
                                    />
                                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-text-1">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border-2 border-border-soft bg-surface-1 px-4 py-3 text-text-0 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                                    placeholder="Your company"
                                />
                            </div>

                            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-white transition sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
                                    style={{ background: 'var(--accent-spectrum)' }}
                                >
                                    <Send size={18} className="transition-transform group-hover:-translate-y-0.5" />
                                    {isSubmitting ? 'Sending...' : 'Request Access'}
                                </button>

                                <a
                                    href="https://calendly.com/pradeesh-colorrobotics/15-minutes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand-blue bg-white px-6 py-3 font-medium transition hover:bg-surface-1 sm:w-auto"
                                    style={{ color: 'var(--brand-blue)' }}
                                >
                                    <Calendar size={18} />
                                    Book a Call
                                </a>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
