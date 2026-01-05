'use client'

import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Cpu, Camera, Clock, AlertTriangle, DollarSign, CheckCircle2 } from 'lucide-react';
import ContactForm from './ContactForm';

export default function LandingPage() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = (): void => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="min-h-screen overflow-hidden bg-surface-0 text-text-0">
            {/* Navigation */}
            <nav
                className={`fixed w-full z-50 transition-all duration-500 ${
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-xl border-b border-border-soft shadow-medium py-3'
                        : 'bg-transparent py-5'
                }`}
            >
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <a href="#" className="flex items-center">
                                <div className="font-display">
                                    <span className="text-gradient-primary text-2xl font-semibold leading-tight">
                                        Color Robotics
                                    </span>
                                </div>
                            </a>
                        </div>

                        <div className="hidden md:flex items-center space-x-4">
                            <a href="#contact" className="px-5 py-2 rounded-full text-white transition-all duration-300 shadow-medium hover:shadow-large flex items-center group" style={{ background: 'var(--accent-spectrum)' }}>
                                <span>Get Early Access</span>
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        <div className="md:hidden">
                            <button onClick={toggleMobileMenu} className="text-text-0 p-2">
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white/98 pt-20 p-6 backdrop-blur-xl md:hidden">
                    <div className="flex flex-col space-y-6">
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold uppercase tracking-[0.32em] text-white transition"
                            style={{ background: 'var(--accent-spectrum)' }}
                        >
                            <span>Get Early Access</span>
                            <ArrowRight size={16} className="ml-2" />
                        </a>
                    </div>
                </div>
            )}

            {/* Hero Section - Visual Focus */}
            <section className="relative overflow-hidden pt-32 pb-20 md:pb-32 bg-gradient-to-b from-[rgba(24,91,167,0.03)] to-white">
                <div className="absolute inset-0 -z-10">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(24,91,167,0.08),_transparent_70%)]"></div>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left: Text */}
                        <div className="space-y-8">
                            <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-text-0 md:text-5xl lg:text-6xl">
                                Robot down? <span className="text-gradient-primary">Back to production</span> in minutes.
                            </h1>
                            <p className="text-xl text-text-1 leading-relaxed">
                                Our AI shows your team exactly what failed and how to fix it—no robotics expertise required.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <a
                                    href="#contact"
                                    className="group rounded-full px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.32em] text-white transition shadow-medium hover:shadow-large"
                                    style={{ background: 'var(--accent-spectrum)' }}
                                >
                                    Get Early Access
                                    <ArrowRight size={16} className="ml-3 inline-block align-middle transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>

                        {/* Right: Visual Diagram */}
                        <div className="relative">
                            <div className="relative rounded-3xl border-2 border-border-soft bg-gradient-to-br from-surface-1 to-white p-8 shadow-large">
                                {/* Animated flow visualization */}
                                <div className="flex flex-col items-center gap-6">
                                    {/* Robot with camera */}
                                    <div className="relative flex items-center gap-4">
                                        <div className="h-20 w-20 rounded-2xl bg-surface-2 flex items-center justify-center border-2 border-border-soft">
                                            <div className="text-3xl">🤖</div>
                                        </div>
                                        <div className="h-12 w-12 rounded-xl bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20">
                                            <Camera size={24} className="text-brand-blue" />
                                        </div>
                                    </div>

                                    {/* Animated connection line */}
                                    <div className="h-8 w-0.5 bg-gradient-to-b from-brand-blue to-brand-orange rounded-full relative">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-brand-blue animate-ping"></div>
                                    </div>

                                    {/* AI Processing */}
                                    <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-orange flex items-center justify-center shadow-medium relative">
                                        <Cpu size={36} className="text-white" />
                                        <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-brand-yellow animate-pulse"></div>
                                    </div>

                                    {/* Output */}
                                    <div className="h-8 w-0.5 bg-gradient-to-b from-brand-orange to-brand-green rounded-full"></div>

                                    {/* Result card */}
                                    <div className="w-full max-w-xs rounded-xl bg-white border-2 border-brand-green/30 p-4 shadow-subtle">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 size={20} className="text-brand-green" />
                                            <div>
                                                <p className="text-sm font-medium text-text-0">Diagnosis Ready</p>
                                                <p className="text-xs text-text-2">Fix instructions generated</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Section - More Visual */}
            <section className="relative py-20 md:py-28 bg-surface-1">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="font-display text-3xl leading-tight text-text-0 md:text-5xl">
                            Robot down? <span className="text-gradient-primary">The clock is ticking.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Pain Point 1 */}
                        <div className="relative rounded-3xl border-2 border-[rgba(255,102,0,0.2)] bg-white p-8 shadow-medium text-center">
                            <div className="mb-6 mx-auto h-16 w-16 rounded-2xl bg-[rgba(255,102,0,0.1)] flex items-center justify-center">
                                <Clock size={32} className="text-brand-orange" />
                            </div>
                            <h3 className="font-display text-xl text-text-0 mb-2">Days of Waiting</h3>
                            <p className="text-text-2 text-sm">
                                Expert arrives Thursday. Production stopped now.
                            </p>
                        </div>

                        {/* Pain Point 2 */}
                        <div className="relative rounded-3xl border-2 border-[rgba(24,91,167,0.2)] bg-white p-8 shadow-medium text-center">
                            <div className="mb-6 mx-auto h-16 w-16 rounded-2xl bg-[rgba(24,91,167,0.1)] flex items-center justify-center">
                                <AlertTriangle size={32} className="text-brand-blue" />
                            </div>
                            <h3 className="font-display text-xl text-text-0 mb-2">Cryptic Errors</h3>
                            <p className="text-text-2 text-sm">
                                Error codes don&apos;t tell you what actually happened.
                            </p>
                        </div>

                        {/* Pain Point 3 */}
                        <div className="relative rounded-3xl border-2 border-[rgba(27,77,46,0.2)] bg-white p-8 shadow-medium text-center">
                            <div className="mb-6 mx-auto h-16 w-16 rounded-2xl bg-[rgba(27,77,46,0.1)] flex items-center justify-center">
                                <DollarSign size={32} className="text-brand-green" />
                            </div>
                            <h3 className="font-display text-xl text-text-0 mb-2">$$$$ per Hour</h3>
                            <p className="text-text-2 text-sm">
                                Every hour of downtime costs thousands.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works - Large Visual */}
            <section id="how-it-works" className="relative py-20 md:py-28 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="font-display text-3xl leading-tight text-text-0 md:text-5xl">
                            From failure to fix
                        </h2>
                    </div>

                    {/* Large Visual Flow */}
                    <div className="relative mx-auto max-w-4xl">
                        <div className="grid md:grid-cols-3 gap-8 relative">
                            {/* Connection lines - desktop only */}
                            <div className="hidden md:block absolute top-1/2 left-[16.67%] right-[16.67%] h-1 bg-gradient-to-r from-brand-blue via-brand-orange to-brand-green rounded-full -translate-y-1/2 z-0"></div>

                            {/* Step 1 */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="h-32 w-32 rounded-3xl bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 border-2 border-brand-blue/20 flex items-center justify-center mb-6 shadow-subtle">
                                    <Camera size={48} className="text-brand-blue" />
                                </div>
                                <div className="bg-white px-4 py-2 rounded-full border border-border-soft shadow-subtle mb-3">
                                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">Step 1</span>
                                </div>
                                <h3 className="font-display text-xl text-text-0">Point Camera</h3>
                                <p className="text-sm text-text-2 mt-2">Any standard camera works</p>
                            </div>

                            {/* Step 2 */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="h-32 w-32 rounded-3xl bg-gradient-to-br from-brand-orange to-brand-yellow flex items-center justify-center mb-6 shadow-medium">
                                    <Cpu size={48} className="text-white" />
                                </div>
                                <div className="bg-white px-4 py-2 rounded-full border border-border-soft shadow-subtle mb-3">
                                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">Step 2</span>
                                </div>
                                <h3 className="font-display text-xl text-text-0">AI Diagnoses</h3>
                                <p className="text-sm text-text-2 mt-2">Sees what went wrong</p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="h-32 w-32 rounded-3xl bg-gradient-to-br from-brand-green/10 to-brand-green/5 border-2 border-brand-green/20 flex items-center justify-center mb-6 shadow-subtle">
                                    <CheckCircle2 size={48} className="text-brand-green" />
                                </div>
                                <div className="bg-white px-4 py-2 rounded-full border border-border-soft shadow-subtle mb-3">
                                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">Step 3</span>
                                </div>
                                <h3 className="font-display text-xl text-text-0">Get the Fix</h3>
                                <p className="text-sm text-text-2 mt-2">Step-by-step guidance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative py-20 md:py-28 bg-white">
                <div className="container relative mx-auto px-6">
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <h2 className="font-display text-3xl text-text-0 md:text-5xl">
                            See it in action
                        </h2>
                        <p className="mt-4 text-lg text-text-1">
                            We&apos;re working with early partners now.
                        </p>
                    </div>

                    <ContactForm />
                </div>
            </section>

            {/* Footer */}
            <footer className="relative bg-surface-2 py-12 text-text-1 border-t border-border-soft">
                <div className="container relative mx-auto px-6">
                    <div className="flex flex-col items-center gap-6 text-center">
                        <div className="font-display text-xl text-gradient-primary">Color Robotics</div>

                        <p className="text-sm text-text-2 max-w-md">
                            Team from Built Robotics, Honeywell, Glacier & Third Wave. Forum Ventures-backed.
                        </p>

                        <div className="flex items-center gap-6 text-sm">
                            <a href="mailto:hello@colorrobotics.ai" className="hover:text-text-0 transition">hello@colorrobotics.ai</a>
                            <a
                                href="https://www.linkedin.com/company/color-robotics"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-text-0 transition"
                            >
                                LinkedIn
                            </a>
                        </div>

                        <p className="text-xs text-text-2">&copy; {new Date().getFullYear()} Color Robotics</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
