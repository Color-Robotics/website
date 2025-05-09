'use client'

import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, ExternalLink, ArrowUpRight, Menu, X, Star } from 'lucide-react';
import Image from 'next/image';

// Types for component props
interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
}

interface IndustryTabProps {
    active: boolean;
    onClick: () => void;
    label: string;
}

interface BenefitItemProps {
    text: string;
}

interface TestimonialCardProps {
    quote: string;
    author: string;
    title: string;
    bgGradient: string;
}

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface StepItemProps {
    number: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    isLeft: boolean;
}

type IndustryTabType = 'warehousing' | 'manufacturing' | 'food' | 'electronics';

export default function LandingPage() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [activeDemoTab, setActiveDemoTab] = useState<IndustryTabType>('warehousing');

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
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-5'}`}>
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <a href="#" className="flex items-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-600 blur-2xl opacity-20 rounded-full"></div>
                                    <div className="bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent text-3xl font-extrabold relative">C</div>
                                </div>
                                <div className="font-semibold text-xl ml-1">
                                    <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">Color</span>
                                    <span className="text-white">Robotics</span>
                                </div>
                            </a>
                        </div>

                        <div className="hidden md:flex space-x-8 items-center">
                            <NavLink href="#features">Platform</NavLink>
                            <NavLink href="#solutions">Solutions</NavLink>
                            <NavLink href="#cases">Case Studies</NavLink>
                            <NavLink href="#pricing">Pricing</NavLink>
                            <NavLink href="#about">About</NavLink>
                        </div>

                        <div className="hidden md:flex items-center space-x-4">
                            <button className="text-white hover:text-cyan-400 transition-colors duration-300">
                                Login
                            </button>
                            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white transition-all duration-300 shadow-lg shadow-indigo-600/20 flex items-center group">
                                <span>Get Started</span>
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="md:hidden">
                            <button onClick={toggleMobileMenu} className="text-white p-2">
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-slate-900 pt-20 p-6 md:hidden">
                    <div className="flex flex-col space-y-6">
                        <NavLink href="#features" onClick={() => setMobileMenuOpen(false)}>Platform</NavLink>
                        <NavLink href="#solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</NavLink>
                        <NavLink href="#cases" onClick={() => setMobileMenuOpen(false)}>Case Studies</NavLink>
                        <NavLink href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</NavLink>
                        <NavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
                        <div className="pt-6 border-t border-slate-800">
                            <button className="w-full py-3 mb-4 text-white hover:text-cyan-400 transition-colors duration-300">
                                Login
                            </button>
                            <button className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white transition-all duration-300 shadow-lg shadow-indigo-600/20 flex items-center justify-center">
                                <span>Get Started</span>
                                <ArrowRight size={16} className="ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
                {/* Background elements */}
                <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden -z-10">
                    <div className="absolute top-1/4 -right-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>
                    <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-slate-900 rounded-full"></div>

                    {/* Grid pattern */}
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
                </div>

                <div className="container mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block mb-6 py-1 px-3 border border-slate-700 rounded-full text-xs text-cyan-400 font-medium uppercase tracking-wider">
                            Version 2.3 Just Released
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                            Unify Your Robotic <br className="hidden md:block" /> Automation Stack
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
                            The complete integration and observability platform for industrial robotics, connecting your robots, PLCs, and sensors in one intelligent system.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white transition-all duration-300 shadow-lg shadow-indigo-600/20 flex items-center justify-center group">
                                <span>Request Demo</span>
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all duration-300 flex items-center justify-center">
                                <span>View Documentation</span>
                            </button>
                        </div>

                        <div className="flex justify-center max-w-lg mx-auto mb-12">
                            <div className="flex p-1 rounded-full border border-slate-700 bg-slate-800/50 w-full">
                                <div className="flex items-center space-x-1 w-full">
                                    <input
                                        type="email"
                                        placeholder="Enter your work email"
                                        className="flex-grow py-3 px-4 bg-transparent text-white placeholder-slate-500 focus:outline-none"
                                    />
                                    <button className="py-3 px-6 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white transition-all duration-300 text-sm">
                                        Start Free Trial
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center space-x-8 text-sm text-slate-500">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>14-day free trial</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Cancel anytime</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 relative max-w-screen-xl mx-auto">
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-20 blur-xl"></div>
                    <div className="relative rounded-2xl bg-slate-800/50 border border-slate-700 overflow-hidden shadow-2xl">
                        {/* Dashboard visualization */}
                        <Image
                            src="/images/dashboard.png"
                            alt="Color Robotics Dashboard"
                            width={1200}
                            height={600}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-950 to-transparent"></div>
            </section>

            {/* Trust + Logos Section */}
            <section className="py-16 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="text-slate-400 mb-8">TRUSTED BY INDUSTRY LEADERS IN AUTOMATION</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                            <div className="h-8 w-32 bg-slate-800 rounded"></div>
                            <div className="h-8 w-32 bg-slate-800 rounded"></div>
                            <div className="h-8 w-32 bg-slate-800 rounded"></div>
                            <div className="h-8 w-32 bg-slate-800 rounded"></div>
                            <div className="h-8 w-32 bg-slate-800 rounded"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section id="features" className="py-20 md:py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <div className="bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl h-1 w-16 mx-auto mb-6"></div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-100">
                            One Platform to Rule<br />All Your Robots
                        </h2>
                        <p className="text-lg text-slate-400">
                            Streamline operations, reduce downtime, and optimize performance with our comprehensive robotics integration and observability platform.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                            <div className="relative p-8 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full">
                                <div className="mb-6 inline-flex p-3 rounded-lg bg-slate-700/50">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.27 12C3.27 7.4 7.4 3.27 12 3.27L12 12L12 12L12 20.73C7.4 20.73 3.27 16.6 3.27 12Z" fill="#0EA5E9" />
                                        <path d="M12 20.73L12 12L20.73 12C20.73 16.6 16.6 20.73 12 20.73Z" fill="#818CF8" />
                                        <path d="M20.73 12L12 12L12 3.27C16.6 3.27 20.73 7.4 20.73 12Z" fill="#60A5FA" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Unified Integration</h3>
                                <p className="text-slate-400 mb-4">
                                    Connect your entire automation stack including PLCs, robots, and sensors from any manufacturer into a single, coherent system.
                                </p>
                                <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm">
                                    Learn more
                                    <ArrowRight size={14} className="ml-1" />
                                </a>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                            <div className="relative p-8 rounded-xl bg-slate-800 border border-slate-700 hover:border-indigo-500 transition-all duration-300 h-full">
                                <div className="mb-6 inline-flex p-3 rounded-lg bg-slate-700/50">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#0EA5E9" strokeWidth="2" />
                                        <path d="M22 12C22 6.48 17.52 2 12 2" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M15 11L18 14L21 11" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Real-time Monitoring</h3>
                                <p className="text-slate-400 mb-4">
                                    Get comprehensive visibility into all your robotic systems with real-time dashboards, analytics, and automated alerts.
                                </p>
                                <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm">
                                    Learn more
                                    <ArrowRight size={14} className="ml-1" />
                                </a>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                            <div className="relative p-8 rounded-xl bg-slate-800 border border-slate-700 hover:border-violet-500 transition-all duration-300 h-full">
                                <div className="mb-6 inline-flex p-3 rounded-lg bg-slate-700/50">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L4 6V18L12 22L20 18V6L12 2Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 22V16" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="12" cy="13" r="3" fill="#6366F1" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">AI-Powered Analytics</h3>
                                <p className="text-slate-400 mb-4">
                                    Leverage machine learning to identify optimization opportunities, predict failures, and automate troubleshooting.
                                </p>
                                <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm">
                                    Learn more
                                    <ArrowRight size={14} className="ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Feature Detail Row */}
                    <div className="mt-20 grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-20 blur-xl"></div>
                            <div className="relative rounded-2xl bg-slate-800/50 border border-slate-700 overflow-hidden p-2 shadow-2xl">
                                <Image
                                    src="/images/integration.png"
                                    alt="Integration Dashboard"
                                    width={600}
                                    height={500}
                                    className="w-full h-auto rounded-xl"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="inline-block py-0.5 px-3 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-400 uppercase tracking-wide mb-3">
                                Integration Made Easy
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">Seamlessly Connect Your Automation Ecosystem</h3>
                            <p className="text-slate-400 mb-8">
                                Stop dealing with siloed systems and incompatible platforms. Color Robotics unifies your complete automation stack regardless of manufacturer or age.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 flex items-center justify-center">
                                        <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-white">Multi-vendor Support</h4>
                                        <p className="text-slate-400">Connect any PLC, robot, or sensor regardless of brand with our extensive library of pre-built connectors.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 flex items-center justify-center">
                                        <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-white">No-code Configuration</h4>
                                        <p className="text-slate-400">Configure integrations through an intuitive visual interface without writing a single line of code.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 flex items-center justify-center">
                                        <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-white">Secure Remote Access</h4>
                                        <p className="text-slate-400">Manage your automation systems securely from anywhere with role-based access control.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Detail Row 2 */}
                    <div className="mt-32 grid md:grid-cols-2 gap-16 items-center">
                        <div className="md:order-2 relative">
                            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-20 blur-xl"></div>
                            <div className="relative rounded-2xl bg-slate-800/50 border border-slate-700 overflow-hidden p-2 shadow-2xl">
                                <Image
                                    src="/images/analytics.png"
                                    alt="AI Analytics Dashboard"
                                    width={600}
                                    height={500}
                                    className="w-full h-auto rounded-xl"
                                />
                            </div>
                        </div>

                        <div className="md:order-1">
                            <div className="inline-block py-0.5 px-3 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 uppercase tracking-wide mb-3">
                                Predictive Intelligence
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">Anticipate Issues Before They Happen</h3>
                            <p className="text-slate-400 mb-8">
                                Our AI-powered platform continuously monitors your systems to detect anomalies and predict potential failures before they impact operations.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 flex items-center justify-center">
                                        <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-white">Anomaly Detection</h4>
                                        <p className="text-slate-400">Machine learning algorithms that identify unusual patterns in sensor data and operational metrics.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 flex items-center justify-center">
                                        <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-white">Predictive Maintenance</h4>
                                        <p className="text-slate-400">Schedule maintenance based on actual equipment condition, not arbitrary intervals.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 flex items-center justify-center">
                                        <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-white">Automated Troubleshooting</h4>
                                        <p className="text-slate-400">AI assistant that diagnoses issues and suggests solutions based on historical data.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions/Industry Section */}
            <section id="solutions" className="py-20 md:py-32 bg-slate-900 relative">
                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-950 to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-950 to-transparent"></div>

                <div className="container mx-auto px-6 relative">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <div className="bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl h-1 w-16 mx-auto mb-6"></div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-100">
                            Purpose-Built for Your Industry
                        </h2>
                        <p className="text-lg text-slate-400">
                            Our platform is optimized for the unique automation challenges across different industries.
                        </p>
                    </div>

                    {/* Industry Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        <IndustryTab
                            active={activeDemoTab === 'warehousing'}
                            onClick={() => setActiveDemoTab('warehousing')}
                            label="Warehousing"
                        />
                        <IndustryTab
                            active={activeDemoTab === 'manufacturing'}
                            onClick={() => setActiveDemoTab('manufacturing')}
                            label="Manufacturing"
                        />
                        <IndustryTab
                            active={activeDemoTab === 'food'}
                            onClick={() => setActiveDemoTab('food')}
                            label="Food & Beverage"
                        />
                        <IndustryTab
                            active={activeDemoTab === 'electronics'}
                            onClick={() => setActiveDemoTab('electronics')}
                            label="Electronics"
                        />
                    </div>

                    {/* Industry Content */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">
                                {activeDemoTab === 'warehousing' && 'Optimize Your Warehouse Automation'}
                                {activeDemoTab === 'manufacturing' && 'Transform Your Production Lines'}
                                {activeDemoTab === 'food' && 'Streamline Food Processing Operations'}
                                {activeDemoTab === 'electronics' && 'Perfect Precision in Electronics Assembly'}
                            </h3>

                            <p className="text-slate-400 mb-8">
                                {activeDemoTab === 'warehousing' && 'Unify conveyor, AMR, and sortation systems while reducing downtime and improving throughput in high-volume environments.'}
                                {activeDemoTab === 'manufacturing' && 'Improve OEE with version control for PLCs/robotics, predictive maintenance, and faster error resolution for your production lines.'}
                                {activeDemoTab === 'food' && 'Ensure consistency and uptime for food processing equipment with centralized oversight and real-time performance monitoring.'}
                                {activeDemoTab === 'electronics' && 'Handle high-mix, low-volume production with rapid integration of new equipment and anomaly detection for quality control.'}
                            </p>

                            <div className="space-y-4 mb-8">
                                {activeDemoTab === 'warehousing' && (
                                    <>
                                        <BenefitItem text="Reduce picking errors by up to 73%" />
                                        <BenefitItem text="Cut integration time for new automation by 58%" />
                                        <BenefitItem text="Lower maintenance costs by 32%" />
                                        <BenefitItem text="Achieve 99.8% order accuracy" />
                                    </>
                                )}

                                {activeDemoTab === 'manufacturing' && (
                                    <>
                                        <BenefitItem text="Increase OEE by up to 25%" />
                                        <BenefitItem text="Reduce unplanned downtime by 45%" />
                                        <BenefitItem text="Cut changeover times by 35%" />
                                        <BenefitItem text="Improve first-time-right quality by 27%" />
                                    </>
                                )}

                                {activeDemoTab === 'food' && (
                                    <>
                                        <BenefitItem text="Ensure 99.9% product consistency" />
                                        <BenefitItem text="Reduce compliance reporting time by 67%" />
                                        <BenefitItem text="Cut waste by up to 28%" />
                                        <BenefitItem text="Improve batch changeover speed by 41%" />
                                    </>
                                )}

                                {activeDemoTab === 'electronics' && (
                                    <>
                                        <BenefitItem text="Achieve sub-millimeter placement accuracy" />
                                        <BenefitItem text="Reduce programming time by 64%" />
                                        <BenefitItem text="Cut quality escapes by 83%" />
                                        <BenefitItem text="Support rapid product changeovers" />
                                    </>
                                )}
                            </div>

                            <button className="inline-flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white transition-all duration-300 shadow-lg shadow-indigo-600/20 group">
                                <span>See Industry Solution</span>
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-20 blur-xl"></div>
                            <div className="relative rounded-2xl bg-slate-800/50 border border-slate-700 overflow-hidden shadow-2xl">
                                <Image
                                    src={`/images/${activeDemoTab}.png`}
                                    alt={`${activeDemoTab} Solution`}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials & Case Studies */}
            <section id="cases" className="py-20 md:py-32 relative">
                <div className="container mx-auto px-6 relative">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <div className="bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl h-1 w-16 mx-auto mb-6"></div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-100">
                            Success Stories
                        </h2>
                        <p className="text-lg text-slate-400">
                            See how leading companies in your industry are transforming their operations with Color Robotics.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <TestimonialCard
                            quote="Color Robotics helped us reduce integration time by 45% and cut downtime by over 30% in our warehouse operations."
                            author="Sarah Johnson"
                            title="Automation Director, GlobalLogistics Inc."
                            bgGradient="from-cyan-500 to-indigo-600"
                        />

                        <TestimonialCard
                            quote="The predictive analytics have been a game-changer. We now address issues before they impact production, saving us millions."
                            author="Michael Chang"
                            title="CTO, FutureTech Manufacturing"
                            bgGradient="from-indigo-500 to-violet-600"
                        />

                        <TestimonialCard
                            quote="As a systems integrator, this platform has transformed how we support clients. Remote diagnostics has cut our travel time by 60%."
                            author="David Rodriguez"
                            title="CEO, AutomateNow Solutions"
                            bgGradient="from-blue-500 to-cyan-500"
                        />
                    </div>

                    {/* Case Study Feature */}
                    <div className="mt-24 relative overflow-hidden rounded-2xl">
                        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-30 blur-lg"></div>
                        <div className="relative bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
                            <div className="grid md:grid-cols-2">
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="inline-block py-0.5 px-3 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-400 uppercase tracking-wide mb-3">
                                        Case Study
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">How Acme Robotics Achieved 43% Improved Efficiency</h3>
                                    <p className="text-slate-400 mb-8">
                                        Learn how a leading manufacturer unified their robotic operations across 12 global facilities, reduced downtime by 37%, and accelerated new product introductions.
                                    </p>
                                    <div className="mt-auto">
                                        <button className="inline-flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white transition-all duration-300 shadow-lg shadow-indigo-600/20 group">
                                            <span>Read Case Study</span>
                                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                                <div className="md:h-96">
                                    <Image
                                        src="/images/case-study.png"
                                        alt="Case Study"
                                        width={600}
                                        height={500}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32 relative bg-slate-900">
                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-950 to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-950 to-transparent"></div>

                <div className="container mx-auto px-6 relative">
                    <div className="max-w-5xl mx-auto">
                        <div className="relative overflow-hidden rounded-3xl">
                            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-30 blur-lg"></div>
                            <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-3xl overflow-hidden p-8 md:p-12">
                                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                                </div>

                                <div className="relative">
                                    <div className="text-center max-w-3xl mx-auto">
                                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-100">
                                            Ready to Transform Your Automation Operations?
                                        </h2>
                                        <p className="text-slate-400 text-lg mb-8">
                                            Schedule a personalized demo to see how our platform can address your specific integration and observability needs.
                                        </p>

                                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                                            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white transition-all duration-300 shadow-lg shadow-indigo-600/20 flex items-center justify-center group font-medium">
                                                <span>Schedule Demo</span>
                                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                            <button className="px-8 py-4 rounded-full bg-slate-700 hover:bg-slate-600 text-white transition-all duration-300 flex items-center justify-center font-medium">
                                                <span>Contact Sales</span>
                                            </button>
                                        </div>

                                        <div className="flex justify-center items-center space-x-8 text-sm text-slate-500">
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Free implementation support</span>
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>24/7 technical assistance</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-400 py-16 relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        <div className="col-span-2">
                            <div className="flex items-center mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-600 blur-lg opacity-20 rounded-full"></div>
                                    <div className="bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent text-3xl font-extrabold relative">C</div>
                                </div>
                                <div className="font-semibold text-xl ml-1">
                                    <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">Color</span>
                                    <span className="text-white">Robotics</span>
                                </div>
                            </div>
                            <p className="mb-6">
                                Unifying the world of industrial automation with intelligent integration and observability.
                            </p>
                            <div className="flex space-x-4 mb-8">
                                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">Platform</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">Industries</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-white transition-colors">Warehousing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Manufacturing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Food & Beverage</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">Company</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p>&copy; {new Date().getFullYear()} Color Robotics. All rights reserved.</p>
                        <div className="mt-4 md:mt-0 flex space-x-6">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function NavLink({ href, children, onClick }: NavLinkProps) {
    return (
        <a
            href={href}
            onClick={onClick}
            className="font-medium text-slate-300 hover:text-white transition-colors relative after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-indigo-600 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
        >
            {children}
        </a>
    );
}

function IndustryTab({ active, onClick, label }: IndustryTabProps) {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${active
                ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                }`}
        >
            {label}
        </button>
    );
}

function BenefitItem({ text }: BenefitItemProps) {
    return (
        <div className="flex items-center">
            <svg className="h-5 w-5 mr-3 text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L10 16L17 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{text}</span>
        </div>
    );
}

function TestimonialCard({ quote, author, title, bgGradient }: TestimonialCardProps) {
    return (
        <div className="relative group">
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${bgGradient} rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500`}></div>
            <div className="relative p-8 rounded-xl bg-slate-800 border border-slate-700 hover:border-indigo-500 transition-all duration-300 h-full">
                <div className="flex items-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                </div>
                <p className="text-slate-300 mb-8 text-lg">"{quote}"</p>
                <div>
                    <h4 className="font-semibold text-white">{author}</h4>
                    <p className="text-slate-400 text-sm">{title}</p>
                </div>
            </div>
        </div>
    );
}