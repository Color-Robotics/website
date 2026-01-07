'use client'

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Menu, X, Cpu, Clock, AlertTriangle, DollarSign, CheckCircle2, Video, Wrench } from 'lucide-react';
import ContactForm from './ContactForm';

export default function LandingPage() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [armProgress, setArmProgress] = useState<number>(0);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 50);

            // Calculate animation progress based on scroll distance
            // Animation goes from 0 to 1 over 500px of scrolling
            const scrollY = window.scrollY;
            const maxScroll = 500;
            const progress = Math.max(0, Math.min(1, scrollY / maxScroll));
            setArmProgress(progress);
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
                                <div className="font-display text-2xl font-semibold leading-tight">
                                    <span className="text-brand-blue">C</span>
                                    <span className="text-brand-blue">o</span>
                                    <span className="text-brand-blue">l</span>
                                    <span className="text-brand-yellow">o</span>
                                    <span className="text-brand-orange">r</span>
                                    <span className="text-text-0 ml-1">Robotics</span>
                                </div>
                            </a>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#how-it-works" className="text-text-1 hover:text-text-0 transition-colors font-medium">How It Works</a>
                            <a href="#contact" className="text-text-1 hover:text-text-0 transition-colors font-medium">Contact</a>
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
                            href="#how-it-works"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-center text-lg font-medium text-text-0 py-2"
                        >
                            How It Works
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-center text-lg font-medium text-text-0 py-2"
                        >
                            Contact
                        </a>
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
            <section className="relative overflow-hidden pt-32 pb-20 md:pb-32">
                {/* Background layers */}
                <div className="absolute inset-0 gradient-mesh-hero"></div>
                <div className="absolute inset-0 bg-dot-pattern opacity-60"></div>

                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left: Text */}
                        <div className="space-y-8 relative">
                            {/* Decorative elements near text */}
                            <div className="absolute -left-8 top-0 h-16 w-16 rounded-full bg-brand-blue/10 blur-xl"></div>
                            <div className="absolute -left-4 bottom-0 h-12 w-12 rounded-lg bg-brand-orange/15 blur-lg animate-pulse-glow"></div>

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

                        {/* Right: Abstract Diagnostic Flow Visual */}
                        <div ref={heroRef} className="relative h-[400px] lg:h-[500px]">
                            {/* Ambient glow - very soft */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-brand-blue/15 blur-[80px]" />
                            <div className="absolute top-1/4 right-0 h-64 w-64 rounded-full bg-brand-orange/10 blur-[60px]" />

                            {/* Three-stage diagnostic flow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row items-center gap-3 md:gap-6 w-full px-4 md:px-0 md:w-auto">

                                {/* Stage 1: Alert/Problem */}
                                <div
                                    className="relative flex flex-row md:flex-col items-center gap-3 md:gap-0"
                                    style={{
                                        transform: `translateY(${-10 + armProgress * 20}px)`,
                                        opacity: 1 - armProgress * 0.3,
                                        transition: 'all 0.2s ease-out'
                                    }}
                                >
                                    <div className="h-14 w-14 md:h-20 md:w-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-red-500/20 to-red-500/10 border-2 border-red-500/30 flex items-center justify-center shadow-lg backdrop-blur-sm flex-shrink-0">
                                        <AlertTriangle size={24} className="text-red-500 md:hidden" />
                                        <AlertTriangle size={36} className="text-red-500 hidden md:block" />
                                    </div>
                                    <span className="text-xs font-medium text-text-2 md:mt-3">Failure detected</span>
                                </div>

                                {/* Connector 1 */}
                                <div className="hidden md:flex items-center">
                                    <div
                                        className="h-1 bg-gradient-to-r from-red-500/50 to-brand-orange/50 rounded-full"
                                        style={{
                                            width: `${40 + armProgress * 20}px`,
                                            transition: 'width 0.2s ease-out'
                                        }}
                                    />
                                    <ArrowRight size={16} className="text-brand-orange -ml-1" />
                                </div>

                                {/* Stage 2: AI Analysis (center, prominent) */}
                                <div
                                    className="relative flex flex-row md:flex-col items-center gap-3 md:gap-0"
                                    style={{
                                        transform: `scale(${1 + armProgress * 0.1})`,
                                        transition: 'transform 0.2s ease-out'
                                    }}
                                >
                                    <div className="h-16 w-16 md:h-28 md:w-28 rounded-2xl md:rounded-3xl bg-gradient-to-br from-brand-orange to-brand-yellow flex items-center justify-center shadow-xl relative overflow-hidden flex-shrink-0">
                                        <div
                                            className="absolute inset-0 bg-white/20"
                                            style={{
                                                transform: `translateY(${100 - armProgress * 100}%)`,
                                                transition: 'transform 0.3s ease-out'
                                            }}
                                        />
                                        <Cpu size={28} className="text-white relative z-10 md:hidden" />
                                        <Cpu size={44} className="text-white relative z-10 hidden md:block" />
                                    </div>
                                    <span className="text-xs font-semibold text-brand-orange md:mt-3">AI Diagnosis</span>

                                    {/* Scanning rings - desktop only */}
                                    <div
                                        className="absolute -inset-4 rounded-[2rem] border-2 border-brand-orange/20 hidden md:block"
                                        style={{
                                            transform: `scale(${1 + armProgress * 0.15})`,
                                            opacity: 0.6 - armProgress * 0.3,
                                            transition: 'all 0.2s ease-out'
                                        }}
                                    />
                                    <div
                                        className="absolute -inset-8 rounded-[2.5rem] border border-brand-orange/10 hidden md:block"
                                        style={{
                                            transform: `scale(${1 + armProgress * 0.2})`,
                                            opacity: 0.4 - armProgress * 0.2,
                                            transition: 'all 0.2s ease-out'
                                        }}
                                    />
                                </div>

                                {/* Connector 2 */}
                                <div className="hidden md:flex items-center">
                                    <div
                                        className="h-1 bg-gradient-to-r from-brand-orange/50 to-brand-green/50 rounded-full"
                                        style={{
                                            width: `${40 + armProgress * 20}px`,
                                            transition: 'width 0.2s ease-out'
                                        }}
                                    />
                                    <ArrowRight size={16} className="text-brand-green -ml-1" />
                                </div>

                                {/* Stage 3: Fixed/Success */}
                                <div
                                    className="relative flex flex-row md:flex-col items-center gap-3 md:gap-0"
                                    style={{
                                        transform: `translateY(${10 - armProgress * 20}px)`,
                                        opacity: 0.7 + armProgress * 0.3,
                                        transition: 'all 0.2s ease-out'
                                    }}
                                >
                                    <div className="h-14 w-14 md:h-20 md:w-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-brand-green/20 to-brand-green/10 border-2 border-brand-green/30 flex items-center justify-center shadow-lg backdrop-blur-sm flex-shrink-0">
                                        <CheckCircle2 size={24} className="text-brand-green md:hidden" />
                                        <CheckCircle2 size={36} className="text-brand-green hidden md:block" />
                                    </div>
                                    <span className="text-xs font-medium text-text-2 md:mt-3">Resolved</span>
                                </div>
                            </div>

                            {/* Progress indicator */}
                            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
                                <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/90 backdrop-blur-sm border border-border-soft shadow-medium">
                                    <div className="flex gap-1">
                                        <div
                                            className="h-1 md:h-1.5 w-5 md:w-8 rounded-full transition-colors duration-300"
                                            style={{ backgroundColor: armProgress > 0 ? '#FF6600' : '#e5e7eb' }}
                                        />
                                        <div
                                            className="h-1 md:h-1.5 w-5 md:w-8 rounded-full transition-colors duration-300"
                                            style={{ backgroundColor: armProgress > 0.4 ? '#FF6600' : '#e5e7eb' }}
                                        />
                                        <div
                                            className="h-1 md:h-1.5 w-5 md:w-8 rounded-full transition-colors duration-300"
                                            style={{ backgroundColor: armProgress > 0.7 ? '#1B4D2E' : '#e5e7eb' }}
                                        />
                                    </div>
                                    <span className="text-[10px] md:text-xs font-medium text-text-2 ml-1 md:ml-2">
                                        {armProgress > 0.7 ? 'Fixed' : armProgress > 0.4 ? 'Analyzing...' : 'Detected'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section divider */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
            </section>

            {/* Problem Section - More Visual */}
            <section className="relative py-20 md:py-28 bg-surface-1">
                {/* Background gradient mesh */}
                <div className="absolute inset-0 -z-10 gradient-mesh-section"></div>

                {/* Ambient color washes - very soft */}
                <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-brand-orange/15 blur-[100px]"></div>
                <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-brand-blue/10 blur-[100px]"></div>

                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="font-display text-3xl leading-tight text-text-0 md:text-5xl">
                            Every minute of downtime <span className="text-gradient-primary">costs you money.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Pain Point 1 */}
                        <div className="relative rounded-3xl border-2 border-[rgba(255,102,0,0.2)] bg-white p-8 shadow-medium text-center group hover:shadow-large transition-shadow duration-300">
                            <div className="mb-6 mx-auto h-16 w-16 rounded-2xl bg-[rgba(255,102,0,0.1)] flex items-center justify-center">
                                <Clock size={32} className="text-brand-orange animate-icon-float" />
                            </div>
                            <h3 className="font-display text-xl text-text-0 mb-2">Extended Downtime</h3>
                            <p className="text-text-2 text-sm">
                                Expert arrives Thursday. Your line stopped now.
                            </p>
                        </div>

                        {/* Pain Point 2 */}
                        <div className="relative rounded-3xl border-2 border-[rgba(24,91,167,0.2)] bg-white p-8 shadow-medium text-center group hover:shadow-large transition-shadow duration-300">
                            <div className="mb-6 mx-auto h-16 w-16 rounded-2xl bg-[rgba(24,91,167,0.1)] flex items-center justify-center">
                                <AlertTriangle size={32} className="text-brand-blue animate-icon-float" style={{ animationDelay: '0.5s' }} />
                            </div>
                            <h3 className="font-display text-xl text-text-0 mb-2">Unclear Diagnostics</h3>
                            <p className="text-text-2 text-sm">
                                Error codes don&apos;t explain what actually happened.
                            </p>
                        </div>

                        {/* Pain Point 3 */}
                        <div className="relative rounded-3xl border-2 border-[rgba(27,77,46,0.2)] bg-white p-8 shadow-medium text-center group hover:shadow-large transition-shadow duration-300">
                            <div className="mb-6 mx-auto h-16 w-16 rounded-2xl bg-[rgba(27,77,46,0.1)] flex items-center justify-center">
                                <DollarSign size={32} className="text-brand-green animate-icon-float" style={{ animationDelay: '1s' }} />
                            </div>
                            <h3 className="font-display text-xl text-text-0 mb-2">Revenue Loss</h3>
                            <p className="text-text-2 text-sm">
                                Every hour of downtime costs thousands in lost production.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section divider */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />
            </section>

            {/* How It Works - Two-column vertical layout */}
            <section id="how-it-works" className="relative py-20 md:py-28 bg-white overflow-hidden">
                {/* Background gradient mesh */}
                <div className="absolute inset-0 -z-10 gradient-mesh-how-it-works"></div>

                {/* Ambient color washes - very soft */}
                <div className="absolute -top-10 -right-20 h-96 w-96 rounded-full bg-brand-green/10 blur-[100px]"></div>
                <div className="absolute -bottom-10 -left-20 h-96 w-96 rounded-full bg-brand-blue/10 blur-[100px]"></div>

                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                            {/* Left column - Header and intro */}
                            <div className="md:sticky md:top-32">
                                <h2 className="font-display text-3xl leading-tight text-text-0 md:text-4xl lg:text-5xl mb-6">
                                    How It Works
                                </h2>
                                <p className="text-lg text-text-1 leading-relaxed">
                                    Implementing Color Robotics is a simple three-step process designed to integrate seamlessly with your existing hardware.
                                </p>
                            </div>

                            {/* Right column - Vertical steps */}
                            <div className="space-y-6">
                                {/* Step 1 */}
                                <div className="relative rounded-2xl border border-border-soft bg-white p-6 shadow-medium hover:shadow-large transition-shadow duration-300">
                                    <div className="flex gap-5">
                                        <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                                            <Video size={24} className="text-brand-blue" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-brand-blue text-white text-xs font-bold">1</span>
                                                <h3 className="font-display text-lg text-text-0">Point Camera</h3>
                                            </div>
                                            <p className="text-text-2 text-sm leading-relaxed">
                                                Set up any standard camera to monitor your robot. No special hardware required.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative rounded-2xl border border-border-soft bg-white p-6 shadow-medium hover:shadow-large transition-shadow duration-300">
                                    <div className="flex gap-5">
                                        <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                                            <Cpu size={24} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-brand-orange text-white text-xs font-bold">2</span>
                                                <h3 className="font-display text-lg text-text-0">AI Diagnoses</h3>
                                            </div>
                                            <p className="text-text-2 text-sm leading-relaxed">
                                                Our system watches for failures and identifies root causes using computer vision.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative rounded-2xl border border-border-soft bg-white p-6 shadow-medium hover:shadow-large transition-shadow duration-300">
                                    <div className="flex gap-5">
                                        <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-brand-green/10 flex items-center justify-center">
                                            <Wrench size={24} className="text-brand-green" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-brand-green text-white text-xs font-bold">3</span>
                                                <h3 className="font-display text-lg text-text-0">Get the Fix</h3>
                                            </div>
                                            <p className="text-text-2 text-sm leading-relaxed">
                                                Receive step-by-step guidance to resolve issues, including suggested code fixes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section divider */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/20 to-transparent" />
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative py-20 md:py-28 bg-surface-1">
                {/* Background gradient mesh */}
                <div className="absolute inset-0 -z-10 gradient-mesh-contact"></div>

                {/* Ambient color washes - very soft */}
                <div className="absolute -top-20 left-0 h-96 w-96 rounded-full bg-brand-green/8 blur-[100px]"></div>
                <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-brand-blue/8 blur-[100px]"></div>

                <div className="container relative mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                            {/* Left column - Contact info */}
                            <div>
                                <h2 className="font-display text-3xl text-text-0 md:text-4xl lg:text-5xl mb-6">
                                    Ready to reduce downtime?
                                </h2>
                                <p className="text-lg text-text-1 mb-8">
                                    Get a personalized demo of how Color Robotics can save you time and money. Fill out the form and our team will be in touch within 24 hours.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-blue" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-text-2">Email</p>
                                            <a href="mailto:hello@colorrobotics.ai" className="text-text-0 font-medium hover:text-brand-blue transition-colors">
                                                hello@colorrobotics.ai
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right column - Form */}
                            <div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative bg-surface-2 py-12 text-text-1">
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="flex flex-col items-center gap-6 text-center">
                        <div className="font-display text-xl font-semibold">
                            <span className="text-brand-blue">C</span>
                            <span className="text-brand-blue">o</span>
                            <span className="text-brand-blue">l</span>
                            <span className="text-brand-yellow">o</span>
                            <span className="text-brand-orange">r</span>
                            <span className="text-text-0 ml-1">Robotics</span>
                        </div>

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
