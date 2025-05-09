'use client'

import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, ExternalLink, ArrowUpRight, Menu, X, Star, Activity, ShieldCheck, Clock, Cpu, BarChart3, Zap, Bot, Wrench, Layout, AlertCircle, CheckCircle2 } from 'lucide-react';
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

interface StatsItemProps {
    value: string;
    label: string;
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
                            AI-Powered Robotics Command Center
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                            Slash MTTR and <br className="hidden md:block" />Maximize Uptime
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
                            The AI-powered command center for industrial robotics that predicts issues, diagnoses failures, and guides your team to faster resolution - all from one intelligent platform.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white transition-all duration-300 shadow-lg shadow-indigo-600/20 flex items-center justify-center group">
                                <span>Book a Demo</span>
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all duration-300 flex items-center justify-center">
                                <span>See How It Works</span>
                            </button>
                        </div>

                        <div className="flex justify-center items-center space-x-8 text-sm text-slate-500">
                            <div className="flex items-center">
                                <CheckCircle2 className="w-5 h-5 mr-2 text-cyan-500" />
                                <span>No code integration</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle2 className="w-5 h-5 mr-2 text-cyan-500" />
                                <span>Works with any brand</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle2 className="w-5 h-5 mr-2 text-cyan-500" />
                                <span>Setup in hours, not weeks</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 relative max-w-screen-xl mx-auto">
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-20 blur-xl"></div>
                    <div className="relative rounded-2xl bg-slate-800/50 border border-slate-700 overflow-hidden shadow-2xl">
                        {/* Dashboard visualization - placeholder until you have a real dashboard image */}
                        <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 relative p-6">
                            <div className="grid grid-cols-4 gap-4 h-full">
                                <div className="col-span-3 bg-slate-800/60 rounded-xl border border-slate-700 p-4 flex flex-col">
                                    <div className="border-b border-slate-700 pb-2 mb-3 flex items-center justify-between">
                                        <div className="text-lg font-semibold text-white">Real-time Facility Status</div>
                                        <div className="flex space-x-3">
                                            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                                            <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                                            <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 mb-4">
                                        <div className="bg-slate-700/50 rounded-lg p-4">
                                            <div className="text-cyan-400 mb-2 text-sm flex items-center">
                                                <Bot className="h-4 w-4 mr-1" /> Robots Online
                                            </div>
                                            <div className="text-2xl font-bold">42/45</div>
                                            <div className="text-xs text-slate-400">3 in maintenance</div>
                                        </div>
                                        <div className="bg-slate-700/50 rounded-lg p-4">
                                            <div className="text-emerald-400 mb-2 text-sm flex items-center">
                                                <Activity className="h-4 w-4 mr-1" /> Efficiency Rate
                                            </div>
                                            <div className="text-2xl font-bold">94.2%</div>
                                            <div className="text-xs text-emerald-500">↑ 2.1% from last week</div>
                                        </div>
                                        <div className="bg-slate-700/50 rounded-lg p-4">
                                            <div className="text-indigo-400 mb-2 text-sm flex items-center">
                                                <Clock className="h-4 w-4 mr-1" /> Avg MTTR
                                            </div>
                                            <div className="text-2xl font-bold">47 min</div>
                                            <div className="text-xs text-indigo-500">↓ 23% from baseline</div>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-slate-700/40 rounded-lg relative">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-full px-6">
                                                <div className="mb-3 flex items-center justify-between">
                                                    <div className="text-sm text-slate-400">Facility Floor Plan</div>
                                                    <div className="text-xs text-cyan-500">Live View</div>
                                                </div>
                                                <div className="h-3 w-full bg-slate-700 rounded-full mb-2">
                                                    <div className="h-3 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full" style={{ width: '67%' }}></div>
                                                </div>
                                                <div className="grid grid-cols-6 gap-2">
                                                    {[...Array(24)].map((_, i) => (
                                                        <div 
                                                            key={i} 
                                                            className={`aspect-square rounded-md ${
                                                                i % 7 === 0 ? 'bg-yellow-500/20 border border-yellow-500/40' : 
                                                                i % 11 === 0 ? 'bg-red-500/20 border border-red-500/40' : 
                                                                'bg-green-500/20 border border-green-500/40'
                                                            }`}
                                                        >
                                                            {i % 7 === 0 && <AlertCircle className="h-3 w-3 m-1 text-yellow-500" />}
                                                            {i % 11 === 0 && <AlertCircle className="h-3 w-3 m-1 text-red-500" />}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1 flex flex-col gap-4">
                                    <div className="bg-slate-800/60 rounded-xl border border-slate-700 p-4 flex-1">
                                        <div className="text-sm font-semibold mb-3 text-slate-300">Active Alerts</div>
                                        <div className="space-y-3">
                                            <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-2 text-xs">
                                                <div className="flex items-center text-red-400 mb-1">
                                                    <AlertCircle className="h-3 w-3 mr-1" /> Critical
                                                </div>
                                                <div className="font-medium text-slate-200">Pick & Place #3 motor anomaly</div>
                                                <div className="text-slate-400 mt-1">12 min ago</div>
                                            </div>
                                            <div className="bg-yellow-950/30 border border-yellow-900/50 rounded-lg p-2 text-xs">
                                                <div className="flex items-center text-yellow-400 mb-1">
                                                    <AlertCircle className="h-3 w-3 mr-1" /> Warning
                                                </div>
                                                <div className="font-medium text-slate-200">Conveyor belt deviation</div>
                                                <div className="text-slate-400 mt-1">24 min ago</div>
                                            </div>
                                            <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-2 text-xs">
                                                <div className="flex items-center text-blue-400 mb-1">
                                                    <AlertCircle className="h-3 w-3 mr-1" /> Info
                                                </div>
                                                <div className="font-medium text-slate-200">Preventive maintenance due</div>
                                                <div className="text-slate-400 mt-1">1 hour ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-800/60 rounded-xl border border-slate-700 p-4 flex-1">
                                        <div className="text-sm font-semibold mb-3 text-slate-300">Predictive Insights</div>
                                        <div className="bg-indigo-950/30 border border-indigo-900/50 rounded-lg p-3 text-xs">
                                            <div className="font-medium text-white mb-2">AI Assistant Analysis</div>
                                            <div className="text-slate-300">Sorting arm #8 showing early signs of wear. Recommend inspection within 72 hours.</div>
                                            <button className="mt-2 w-full py-1.5 rounded bg-indigo-600/50 hover:bg-indigo-600 text-white text-xs transition-colors">
                                                Schedule Maintenance
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-950 to-transparent"></div>
            </section>

            {/* Stats Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="text-slate-400 uppercase tracking-wider text-sm font-semibold mb-4">TRUSTED BY INDUSTRY LEADERS</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                            {/* Placeholder company logos */}
                            <div className="h-8 w-32 bg-gradient-to-r from-slate-800 to-slate-700 rounded opacity-60 hover:opacity-100 transition-opacity"></div>
                            <div className="h-8 w-32 bg-gradient-to-r from-slate-800 to-slate-700 rounded opacity-60 hover:opacity-100 transition-opacity"></div>
                            <div className="h-8 w-32 bg-gradient-to-r from-slate-800 to-slate-700 rounded opacity-60 hover:opacity-100 transition-opacity"></div>
                            <div className="h-8 w-32 bg-gradient-to-r from-slate-800 to-slate-700 rounded opacity-60 hover:opacity-100 transition-opacity"></div>
                            <div className="h-8 w-32 bg-gradient-to-r from-slate-800 to-slate-700 rounded opacity-60 hover:opacity-100 transition-opacity"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-10">
                        <StatsItem value="62%" label="Average reduction in MTTR" />
                        <StatsItem value="38%" label="Increase in uptime" />
                        <StatsItem value="73%" label="Faster issue detection" />
                        <StatsItem value="87%" label="Teams report easier troubleshooting" />
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section id="features" className="py-20 md:py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <div className="inline-block py-0.5 px-3 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-400 uppercase tracking-wide mb-3">
                            Your AI-Powered Command Center
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-100">
                            Reimagine Robotic Operations
                        </h2>
                        <p className="text-lg text-slate-400">
                            Our platform combines real-time monitoring, AI-powered diagnostics, and guided resolution to reduce downtime and maximize productivity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard 
                            icon={<Activity size={32} className="text-cyan-400" />}
                            title="Unified Monitoring"
                            description="Connect all your robots, PLCs, and sensors—regardless of brand—into a single, real-time command center."
                        />
                        <FeatureCard 
                            icon={<Cpu size={32} className="text-indigo-400" />}
                            title="AI-Powered Diagnostics"
                            description="Our AI assistant identifies issues before they cause downtime and provides expert guidance to your team."
                        />
                        <FeatureCard 
                            icon={<BarChart3 size={32} className="text-purple-400" />}
                            title="Predictive Analytics"
                            description="Machine learning models detect anomalies and predict potential failures days or weeks in advance."
                        />
                    </div>

                    {/* Feature Detail Row */}
                    <div className="mt-32 grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-20 blur-xl"></div>
                            <div className="relative rounded-2xl bg-slate-800/50 border border-slate-700 overflow-hidden p-4 shadow-2xl">
                                <div className="bg-slate-900 rounded-xl p-4 h-80">
                                    <div className="border-b border-slate-800 pb-3 mb-4">
                                        <div className="text-lg font-semibold text-white">AI Issue Resolution Assistant</div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-slate-800 rounded-lg p-3 text-sm">
                                            <div className="font-medium text-cyan-400 mb-1">Color Robotics AI</div>
                                            <div className="text-slate-300">I've detected an abnormal vibration pattern in the articulation joint of Robot #12. Based on the frequency spectrum, this appears to be a bearing issue.</div>
                                        </div>
                                        <div className="bg-slate-800 rounded-lg p-3 text-sm">
                                            <div className="font-medium text-cyan-400 mb-1">Color Robotics AI</div>
                                            <div className="text-slate-300">Would you like me to walk you through the diagnostic procedure or show similar issues from the knowledge base?</div>
                                            <div className="mt-3 flex space-x-3">
                                                <button className="flex-1 py-1.5 rounded bg-indigo-600 text-white text-xs">
                                                    Diagnostic Procedure
                                                </button>
                                                <button className="flex-1 py-1.5 rounded bg-slate-700 text-white text-xs">
                                                    Similar Issues
                                                </button>
                                            </div>
                                        </div>
                                        <div className="bg-slate-800 rounded-lg p-3 text-sm">
                                            <div className="font-medium text-cyan-400 mb-1">Color Robotics AI</div>
                                            <div className="text-slate-300">I've notified the maintenance team and prepared a checklist. The average resolution time for similar issues is 37 minutes.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block py-0.5 px-3 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 uppercase tracking-wide mb-3">
                                Virtual AI Engineer
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">Your Team's 24/7 Support Partner</h3>
                            <p className="text-slate-400 mb-8">
                                Our AI Assistant acts as a virtual engineer, providing expert guidance even when your technical team isn't available.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 flex items-center justify-center">
                                        <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-white">Root Cause Analysis</h4>
                                        <p className="text-slate-400">Intelligent diagnosis that goes beyond symptoms to identify the underlying cause of issues.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 flex items-center justify-center">
                                        <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-white">Step-by-Step Guidance</h4>
                                        <p className="text-slate-400">Clear instructions that empower frontline workers to resolve complex issues independently.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 flex items-center justify-center">
                                        <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-white">Institutional Knowledge</h4>
                                        <p className="text-slate-400">Learns from every incident to build a knowledge base that preserves expertise across your organization.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Detail Row 2 */}
                    <div className="mt-32 grid md:grid-cols-2 gap-16 items-center">
                        <div className="md:order-2 relative">
                            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-20 blur-xl"></div>
                            <div className="relative rounded-2xl bg-slate-800/50 border border-slate-700 overflow-hidden p-4 shadow-2xl">
                                <div className="bg-slate-900 rounded-xl p-4 h-80">
                                    <div className="border-b border-slate-800 pb-3 mb-4">
                                        <div className="text-lg font-semibold text-white">Predictive Maintenance Dashboard</div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="bg-slate-800 rounded-lg p-3">
                                            <div className="text-sm text-slate-400 mb-1">Health Score</div>
                                            <div className="text-xl font-bold text-white">94%</div>
                                            <div className="h-2 w-full bg-slate-700 rounded-full mt-2">
                                                <div className="h-2 bg-gradient-to-r from-green-500 to-green-400 rounded-full" style={{ width: '94%' }}></div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-800 rounded-lg p-3">
                                            <div className="text-sm text-slate-400 mb-1">Predicted Issues</div>
                                            <div className="text-xl font-bold text-white">3</div>
                                            <div className="flex items-center mt-2 text-xs text-yellow-400">
                                                <AlertCircle size={12} className="mr-1" />
                                                <span>Requires attention</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-800 rounded-lg p-3 h-40">
                                        <div className="text-sm text-slate-400 mb-3">Component Health Forecast (30 days)</div>
                                        <div className="h-32 w-full relative">
                                            {/* Simple line chart visualization */}
                                            <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-700"></div>
                                            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-700"></div>
                                            <svg viewBox="0 0 100 50" className="h-full w-full">
                                                <path
                                                    d="M0,25 C10,20 20,18 30,5 C40,15 50,25 60,20 C70,15 80,5 90,10 L100,15"
                                                    fill="none"
                                                    stroke="rgba(6, 182, 212, 0.5)"
                                                    strokeWidth="1.5"
                                                />
                                                <path
                                                    d="M0,25 C10,20 20,18 30,5 C40,15 50,25 60,20 C70,15 80,5 90,10 L100,15"
                                                    fill="none"
                                                    stroke="#06b6d4"
                                                    strokeWidth="1.5"
                                                    strokeDasharray="1 1"
                                                />
                                            </svg>
                                            {/* Prediction point */}
                                            <div className="absolute right-10 top-1/2 h-3 w-3 bg-yellow-500 rounded-full transform -translate-y-1/2 animate-pulse"></div>
                                            <div className="absolute right-28 bottom-10 h-2 w-2 bg-red-500 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:order-1">
                            <div className="inline-block py-0.5 px-3 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-400 uppercase tracking-wide mb-3">
                                Prevent Downtime
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">Predict Issues Before They Impact Production</h3>
                            <p className="text-slate-400 mb-8">
                                Our advanced analytics engine continuously monitors your automation systems to detect anomalies and predict potential failures days or even weeks before they occur.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 flex items-center justify-center">
                                        <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-white">Machine Learning Models</h4>
                                        <p className="text-slate-400">Purpose-built algorithms trained on millions of hours of industrial robot operation data.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 flex items-center justify-center">
                                        <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-white">Early Warning System</h4>
                                        <p className="text-slate-400">Receive alerts about developing issues with clear severity ratings and recommended actions.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 flex items-center justify-center">
                                        <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-white">Maintenance Optimization</h4>
                                        <p className="text-slate-400">Schedule maintenance based on actual equipment condition, not calendar dates or usage hours.</p>
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
                            Our platform is optimized for the unique automation challenges in manufacturing and warehousing environments.
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
                                {activeDemoTab === 'warehousing' && 'Maximize Uptime for Warehouse Automation'}
                                {activeDemoTab === 'manufacturing' && 'Transform Your Production Line Efficiency'}
                                {activeDemoTab === 'food' && 'Ensure Continuous Food Processing Operations'}
                                {activeDemoTab === 'electronics' && 'Maintain Precision in Electronics Assembly'}
                            </h3>

                            <p className="text-slate-400 mb-8">
                                {activeDemoTab === 'warehousing' && 'Quickly diagnose and resolve issues across AMRs, conveyors, and sortation systems to keep products flowing and meet SLAs.'}
                                {activeDemoTab === 'manufacturing' && 'Ensure continuous operation of robotic cells with real-time monitoring, predictive maintenance, and guided troubleshooting.'}
                                {activeDemoTab === 'food' && 'Maintain the highest levels of operational reliability in a demanding environment where downtime directly impacts food quality.'}
                                {activeDemoTab === 'electronics' && 'Ensure precise, consistent assembly with early detection of tool wear and calibration drift in high-precision environments.'}
                            </p>

                            <div className="space-y-4 mb-8">
                                {activeDemoTab === 'warehousing' && (
                                    <>
                                        <BenefitItem text="Reduce mean-time-to-repair by up to 62%" />
                                        <BenefitItem text="Predict AMR failures 7-14 days in advance" />
                                        <BenefitItem text="Increase first-time fix rate to 93%" />
                                        <BenefitItem text="Maintain 99.8% automation uptime" />
                                    </>
                                )}

                                {activeDemoTab === 'manufacturing' && (
                                    <>
                                        <BenefitItem text="Detect robot path deviations before quality issues occur" />
                                        <BenefitItem text="Cut unplanned downtime by 45%" />
                                        <BenefitItem text="Reduce troubleshooting time by 73%" />
                                        <BenefitItem text="Extend equipment life by 22%" />
                                    </>
                                )}

                                {activeDemoTab === 'food' && (
                                    <>
                                        <BenefitItem text="Maintain consistent processing speeds 24/7" />
                                        <BenefitItem text="Predict sanitization needs before quality impacts" />
                                        <BenefitItem text="Reduce food waste from equipment issues by 28%" />
                                        <BenefitItem text="Improve batch changeover efficiency by 41%" />
                                    </>
                                )}

                                {activeDemoTab === 'electronics' && (
                                    <>
                                        <BenefitItem text="Monitor sub-millimeter placement accuracy" />
                                        <BenefitItem text="Detect subtle calibration drift before failures" />
                                        <BenefitItem text="Cut quality escapes by 83%" />
                                        <BenefitItem text="Support rapid product changeovers with minimal downtime" />
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
                                {/* Industry-specific visualization - placeholder until you have real images */}
                                <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 p-6">
                                    <div className="h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="inline-block mb-6">
                                                {activeDemoTab === 'warehousing' && <Bot size={80} className="text-cyan-500" />}
                                                {activeDemoTab === 'manufacturing' && <Cpu size={80} className="text-indigo-500" />}
                                                {activeDemoTab === 'food' && <Zap size={80} className="text-emerald-500" />}
                                                {activeDemoTab === 'electronics' && <Wrench size={80} className="text-purple-500" />}
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4 text-white">
                                                {activeDemoTab === 'warehousing' && 'Warehouse Automation Command Center'}
                                                {activeDemoTab === 'manufacturing' && 'Manufacturing Operation Hub'}
                                                {activeDemoTab === 'food' && 'Food Processing Monitor'}
                                                {activeDemoTab === 'electronics' && 'Precision Assembly Control'}
                                            </h3>
                                            <p className="text-slate-400 max-w-md mx-auto">
                                                {activeDemoTab === 'warehousing' && 'Unified view of all automated storage, retrieval, and conveyor systems with real-time alerts and predictive insights.'}
                                                {activeDemoTab === 'manufacturing' && 'Complete visibility across production cells with AI-guided diagnostics and virtual assistance for your team.'}
                                                {activeDemoTab === 'food' && 'Specialized monitoring for food-safe environments with contamination prevention and regulatory compliance.'}
                                                {activeDemoTab === 'electronics' && 'High-precision monitoring with micron-level deviation detection and component-level traceability.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                            See how leading companies have transformed their robotic operations and dramatically reduced downtime.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <TestimonialCard
                            quote="Color Robotics has cut our MTTR by 58%. Our maintenance team can now troubleshoot complex issues with the AI assistant guiding them every step of the way."
                            author="Sarah Johnson"
                            title="Automation Director, GlobalLogistics Inc."
                            bgGradient="from-cyan-500 to-indigo-600"
                        />

                        <TestimonialCard
                            quote="The predictive maintenance has been a game-changer. We've avoided 17 major failures in the last quarter alone, saving us countless hours of downtime."
                            author="Michael Chang"
                            title="CTO, FutureTech Manufacturing"
                            bgGradient="from-indigo-500 to-violet-600"
                        />

                        <TestimonialCard
                            quote="Our technicians can now resolve issues that previously required specialist support. The step-by-step guidance has been like having an expert at their side 24/7."
                            author="David Rodriguez"
                            title="Operations Manager, AutomateNow Solutions"
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
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">How MidWest Manufacturing Slashed MTTR by 62%</h3>
                                    <p className="text-slate-400 mb-8">
                                        Learn how a leading manufacturer with 45+ industrial robots reduced downtime costs by $2.8M annually while enabling frontline workers to resolve complex issues independently.
                                    </p>
                                    <div className="mt-auto">
                                        <button className="inline-flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white transition-all duration-300 shadow-lg shadow-indigo-600/20 group">
                                            <span>Read Case Study</span>
                                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                                <div className="md:h-96 bg-slate-900">
                                    <div className="h-full flex items-center justify-center p-8">
                                        <div className="text-center">
                                            <div className="inline-block p-4 rounded-full bg-indigo-500/10 mb-6">
                                                <Activity size={64} className="text-indigo-400" />
                                            </div>
                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <p className="text-slate-400 text-sm">Before Color Robotics</p>
                                                    <div className="h-4 w-full bg-slate-700 rounded-full">
                                                        <div className="h-4 bg-red-500 rounded-full" style={{ width: '100%' }}></div>
                                                    </div>
                                                    <p className="text-slate-300 text-sm">3.2 hours average MTTR</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-slate-400 text-sm">After Color Robotics</p>
                                                    <div className="h-4 w-full bg-slate-700 rounded-full">
                                                        <div className="h-4 bg-emerald-500 rounded-full" style={{ width: '38%' }}></div>
                                                    </div>
                                                    <p className="text-slate-300 text-sm">1.2 hours average MTTR</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                            Ready to Slash Your Robotic Downtime?
                                        </h2>
                                        <p className="text-slate-400 text-lg mb-8">
                                            Book a personalized demo to see how our AI-powered platform can transform your robotic operations and dramatically reduce MTTR.
                                        </p>

                                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                                            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white transition-all duration-300 shadow-lg shadow-indigo-600/20 flex items-center justify-center group font-medium">
                                                <span>Book Your Demo</span>
                                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                            <button className="px-8 py-4 rounded-full bg-slate-700 hover:bg-slate-600 text-white transition-all duration-300 flex items-center justify-center font-medium">
                                                <span>Talk to Sales</span>
                                            </button>
                                        </div>

                                        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500">
                                            <div className="flex items-center">
                                                <CheckCircle2 className="w-5 h-5 mr-2 text-cyan-500" />
                                                <span>15-minute setup</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle2 className="w-5 h-5 mr-2 text-cyan-500" />
                                                <span>Free implementation support</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle2 className="w-5 h-5 mr-2 text-cyan-500" />
                                                <span>ROI calculator included</span>
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
                                The AI-powered command center for industrial robotics that predicts issues, diagnoses failures, and guides your team to faster resolution.
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

function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
            <div className="relative p-8 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full">
                <div className="mb-6 inline-flex p-3 rounded-lg bg-slate-700/50">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
                <p className="text-slate-400 mb-4">
                    {description}
                </p>
                <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm">
                    Learn more
                    <ArrowRight size={14} className="ml-1" />
                </a>
            </div>
        </div>
    );
}

function StatsItem({ value, label }: StatsItemProps) {
    return (
        <div className="bg-slate-800/60 rounded-xl border border-slate-700 p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                {value}
            </div>
            <div className="text-slate-400">{label}</div>
        </div>
    );
}