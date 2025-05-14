'use client'

import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Activity, Cpu, BarChart3, Zap, Bot, AlertCircle, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import ContactForm from './ContactForm';

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


interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}


type IndustryTabType = 'warehousing' | 'manufacturing' | 'food';

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
                                <div className="font-semibold text-xl">
                                    <span>
                                        <span className="text-[#4a8fd7]">C</span>
                                        <span className="text-[#ffdc5f]">o</span>
                                        <span className="text-[#5bbd6e]">l</span>
                                        <span className="text-[#ff954d]">o</span>
                                        <span className="text-[#4a8fd7]">r</span>
                                    </span>
                                    <span className="text-white ml-2">Robotics</span>
                                </div>
                            </a>
                        </div>

                        <div className="hidden md:flex space-x-8 items-center">
                            <NavLink href="#features">Platform</NavLink>
                            <NavLink href="#solutions">Solutions</NavLink>
                        </div>

                        <div className="hidden md:flex items-center space-x-4">
                            <a href="#contact" className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white transition-all duration-300 shadow-lg shadow-indigo-600/20 flex items-center group">
                                <span>Get Started</span>
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
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
                        <div className="pt-6 border-t border-slate-800">
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white transition-all duration-300 shadow-lg shadow-indigo-600/20 flex items-center justify-center"
                            >
                                <span>Get Started</span>
                                <ArrowRight size={16} className="ml-2" />
                            </a>
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
                            <a
                                href="#contact"
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white transition-all duration-300 shadow-lg shadow-indigo-600/20 flex items-center justify-center group"
                            >
                                <span>Get Started Today</span>
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a 
                                href="#features" 
                                className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all duration-300 flex items-center justify-center"
                            >
                                <span>See How It Works</span>
                            </a>
                        </div>

                        <div className="flex justify-center items-center space-x-8 text-sm text-slate-500">
                            <div className="flex items-center">
                                <CheckCircle2 className="w-5 h-5 mr-2 text-cyan-500" />
                                <span>Simplified integration</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle2 className="w-5 h-5 mr-2 text-cyan-500" />
                                <span>Flexible brand compatibility</span>
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
                        {/* Real dashboard visualization */}
                        <div className="aspect-video relative overflow-hidden">
                            <Image
                                src="/images/monitoring-dashboard.png"
                                alt="Color Robotics Monitoring Dashboard"
                                fill
                                priority
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-950 to-transparent"></div>
            </section>


            {/* Key Features Section */}
            <section id="features" className="py-20 md:py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <div className="inline-block py-0.5 px-3 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-400 uppercase tracking-wide mb-3">
                            Your AI-Powered Command Center
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-10 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-100 leading-normal">
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
                                            <div className="text-slate-300">I&apos;ve detected an abnormal vibration pattern in the articulation joint of Robot #12. Based on the frequency spectrum, this appears to be a bearing issue.</div>
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
                                            <div className="text-slate-300">I&apos;ve notified the maintenance team and prepared a checklist. The average resolution time for similar issues is 37 minutes.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block py-0.5 px-3 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 uppercase tracking-wide mb-3">
                                Virtual AI Engineer
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">Your Team&apos;s 24/7 Support Partner</h3>
                            <p className="text-slate-400 mb-8">
                                Our AI Assistant acts as a virtual engineer, providing expert guidance even when your technical team isn&apos;t available.
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
                            <div className="relative rounded-2xl bg-slate-800/50 border border-slate-700 overflow-hidden shadow-2xl">
                                {/* Keep the existing Predictive Maintenance Dashboard, as it looks good */}
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
                    </div>

                    {/* Industry Content */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">
                                {activeDemoTab === 'warehousing' && 'Maximize Uptime for Warehouse Automation'}
                                {activeDemoTab === 'manufacturing' && 'Transform Your Production Line Efficiency'}
                                {activeDemoTab === 'food' && 'Ensure Continuous Food Processing Operations'}
                            </h3>

                            <p className="text-slate-400 mb-8">
                                {activeDemoTab === 'warehousing' && 'Quickly diagnose and resolve issues across AMRs, conveyors, and sortation systems to keep products flowing and meet SLAs.'}
                                {activeDemoTab === 'manufacturing' && 'Ensure continuous operation of robotic cells with real-time monitoring, predictive maintenance, and guided troubleshooting.'}
                                {activeDemoTab === 'food' && 'Maintain the highest levels of operational reliability in a demanding environment where downtime directly impacts food quality.'}
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

                            </div>

                            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white transition-all duration-300 shadow-lg shadow-indigo-600/20 group">
                                <span>Get Solution</span>
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
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
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4 text-white">
                                                {activeDemoTab === 'warehousing' && 'Warehouse Automation Command Center'}
                                                {activeDemoTab === 'manufacturing' && 'Manufacturing Operation Hub'}
                                                {activeDemoTab === 'food' && 'Food Processing Monitor'}
                                            </h3>
                                            <p className="text-slate-400 max-w-md mx-auto">
                                                {activeDemoTab === 'warehousing' && 'Unified view of all automated storage, retrieval, and conveyor systems with real-time alerts and predictive insights.'}
                                                {activeDemoTab === 'manufacturing' && 'Complete visibility across production cells with AI-guided diagnostics and virtual assistance for your team.'}
                                                {activeDemoTab === 'food' && 'Specialized monitoring for food-safe environments with contamination prevention and regulatory compliance.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Backed by the Best Section */}
            <section className="py-20 relative bg-slate-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-100">
                            Backed by the Best
                        </h2>
                        <p className="text-lg text-slate-400">
                            Our innovation is supported by world-class organizations that believe in our mission to revolutionize robotics operations.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
                        {/* Partner logos */}
                        <div className="relative h-16 flex items-center justify-center group">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10 w-48 h-16">
                                <Image
                                    src="/images/forum-logo.png"
                                    alt="Forum Ventures"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="relative h-16 flex items-center justify-center group">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10 w-48 h-16">
                                <Image
                                    src="/images/nvidia-inception.png"
                                    alt="NVIDIA Inception"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="relative h-16 flex items-center justify-center group">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10 w-48 h-16">
                                <Image
                                    src="/images/aws-activate.jpg"
                                    alt="AWS Activate"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 md:py-32 relative bg-slate-900">
                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-950 to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-950 to-transparent"></div>

                <div className="container mx-auto px-6 relative">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-block py-0.5 px-3 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-400 uppercase tracking-wide mb-3">
                            Get In Touch
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-100">
                            Ready to Slash Your Robotic Downtime?
                        </h2>
                        <p className="text-lg text-slate-400">
                            Book a personalized demo to see how our AI-powered platform can transform your robotic operations and dramatically reduce MTTR.
                        </p>
                    </div>

                    <ContactForm />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-400 py-16 relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-2">
                            <div className="flex items-center mb-6">
                                <div className="font-semibold text-xl">
                                    <span>
                                        <span className="text-[#4a8fd7]">C</span>
                                        <span className="text-[#ffdc5f]">o</span>
                                        <span className="text-[#5bbd6e]">l</span>
                                        <span className="text-[#ff954d]">o</span>
                                        <span className="text-[#4a8fd7]">r</span>
                                    </span>
                                    <span className="text-white ml-2">Robotics</span>
                                </div>
                            </div>
                            <p className="mb-6">
                                The AI-powered command center for industrial robotics that predicts issues, diagnoses failures, and guides your team to faster resolution.
                            </p>
                            <div className="flex mb-8">
                                <a href="https://www.linkedin.com/company/color-robotics" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">Company</h3>
                            <ul className="space-y-3">
                                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-800 mt-16 pt-8 flex justify-center">
                        <p>&copy; {new Date().getFullYear()} Color Robotics. All rights reserved.</p>
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


function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
            <div className="relative p-8 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full">
                <div className="mb-6 inline-flex p-3 rounded-lg bg-slate-700/50">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
                <p className="text-slate-400">
                    {description}
                </p>
            </div>
        </div>
    );
}

