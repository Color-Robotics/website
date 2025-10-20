'use client'

import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Activity, Cpu, BarChart3, CheckCircle2 } from 'lucide-react';
import ContactForm from './ContactForm';

// Types for component props
interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    accentColor?: string;
}

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
                                <span>Get Started</span>
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
                            className="flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold uppercase tracking-[0.32em] text-text-0 transition"
                            style={{ background: 'var(--accent-spectrum)' }}
                        >
                            <span>Get Started</span>
                            <ArrowRight size={16} className="ml-2" />
                        </a>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-b from-[rgba(24,91,167,0.03)] to-white">
                <div className="absolute inset-0 -z-10">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(24,91,167,0.08),_transparent_70%)]"></div>
                    <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border-soft to-transparent"></div>
                </div>

                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto text-center space-y-12">
                        <div className="inline-flex items-center gap-3 rounded-full border border-border-soft bg-surface-1 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-text-2 shadow-subtle">
                            AI Platform for Manufacturing
                            <span className="inline-flex items-center gap-1 rounded-full bg-[rgba(24,91,167,0.12)] px-2 py-0.5 text-[10px] font-semibold text-brand-blue">
                                Production Ready
                            </span>
                        </div>

                        <div className="space-y-8">
                            <h1 className="font-display text-5xl leading-[1.08] tracking-tight text-text-0 md:text-6xl lg:text-7xl">
                                The <span className="text-gradient-primary">foundation</span> for AI-driven manufacturing operations
                            </h1>
                            <p className="max-w-3xl mx-auto text-xl text-text-1 md:text-2xl leading-relaxed">
                                Connect every control system in your factory. Train AI models on real production data. Build the intelligent manufacturing of tomorrow.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-center">
                            <a
                                href="#contact"
                                className="group w-full rounded-full px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.32em] text-white transition shadow-medium hover:shadow-large sm:w-auto"
                                style={{ background: 'var(--accent-spectrum)' }}
                            >
                                Get Started
                                <ArrowRight size={16} className="ml-3 inline-block align-middle transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href="#features"
                                className="w-full rounded-full border-2 border-brand-blue bg-white px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.32em] text-brand-blue transition hover:bg-surface-1 sm:w-auto"
                            >
                                Explore Platform
                            </a>
                        </div>

                        {/* Brand color dots visualization */}
                        <div className="flex items-center justify-center gap-3 py-8">
                            <div className="h-3 w-3 rounded-full animate-pulse" style={{ background: 'var(--brand-blue)', animationDelay: '0s' }}></div>
                            <div className="h-2 w-2 rounded-full" style={{ background: 'var(--brand-orange)', opacity: 0.6 }}></div>
                            <div className="h-4 w-4 rounded-full animate-pulse" style={{ background: 'var(--brand-yellow)', animationDelay: '0.5s' }}></div>
                            <div className="h-2 w-2 rounded-full" style={{ background: 'var(--brand-green)', opacity: 0.6 }}></div>
                            <div className="h-3 w-3 rounded-full animate-pulse" style={{ background: 'var(--brand-blue)', animationDelay: '1s' }}></div>
                        </div>

                        <dl className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
                            <div className="rounded-2xl border-2 border-[rgba(24,91,167,0.2)] bg-white p-6 shadow-medium">
                                <dt className="text-xs uppercase tracking-[0.28em] text-text-2">Protocol Coverage</dt>
                                <dd className="mt-4 font-display text-3xl text-brand-blue">Universal</dd>
                                <p className="mt-2 text-sm text-text-1">FANUC, ABB, Siemens, Modbus, OPC-UA, EtherCAT, and more.</p>
                            </div>
                            <div className="rounded-2xl border-2 border-[rgba(255,102,0,0.2)] bg-white p-6 shadow-medium">
                                <dt className="text-xs uppercase tracking-[0.28em] text-text-2">Deployment</dt>
                                <dd className="mt-4 font-display text-3xl text-brand-orange">Days</dd>
                                <p className="mt-2 text-sm text-text-1">Pre-built connectors get you live in days, not months.</p>
                            </div>
                            <div className="rounded-2xl border-2 border-[rgba(27,77,46,0.2)] bg-white p-6 shadow-medium">
                                <dt className="text-xs uppercase tracking-[0.28em] text-text-2">Enterprise Scale</dt>
                                <dd className="mt-4 font-display text-3xl text-brand-green">1000+</dd>
                                <p className="mt-2 text-sm text-text-1">Built to scale for factories with thousands of devices.</p>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>


            {/* Key Features Section */}
            <section id="features" className="relative py-20 md:py-32 bg-surface-1">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-brand-blue via-brand-orange to-brand-yellow"></div>
                        <h2 className="font-display text-3xl leading-tight text-text-0 md:text-5xl">
                            Built to be the data foundation for manufacturing AI
                        </h2>
                        <p className="mt-6 text-lg text-text-1">
                            A comprehensive platform that connects every control system in your factory—creating the structured, real-time data layer that AI models need to learn, predict, and optimize.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Activity size={28} />}
                            title="Universal Control Layer Integration"
                            description="Connect every protocol, every vendor, every device. The comprehensive data layer manufacturing AI needs—from legacy PLCs to modern robotics."
                            accentColor="var(--brand-blue)"
                        />
                        <FeatureCard
                            icon={<Cpu size={28} />}
                            title="Production-Grade Data Infrastructure"
                            description="Normalize, timestamp, and structure control data for AI model training and deployment at scale. Built for the reliability manufacturing demands."
                            accentColor="var(--brand-orange)"
                        />
                        <FeatureCard
                            icon={<BarChart3 size={28} />}
                            title="Research-Driven Architecture"
                            description="Built on learnings from robotics research labs. Designed for the autonomous factory of tomorrow, deployed in production today."
                            accentColor="var(--brand-green)"
                        />
                    </div>

                    {/* Feature Detail Row */}
                    <div className="mt-32 grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative rounded-2xl bg-white border-2 border-border-soft overflow-hidden p-4 shadow-large">
                                <div className="bg-surface-1 rounded-xl p-4 h-80">
                                    <div className="border-b border-border-soft pb-3 mb-4">
                                        <div className="font-display text-lg font-semibold text-text-0">Control System Monitor</div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-white border border-border-soft rounded-lg p-3 text-sm">
                                            <div className="font-semibold text-brand-blue mb-1 text-xs uppercase tracking-[0.2em]">Data Collection</div>
                                            <div className="text-text-1">Real-time telemetry from Robot #12, PLC-7, Vision System A. Normalized and timestamped for analysis.</div>
                                        </div>
                                        <div className="bg-white border border-border-soft rounded-lg p-3 text-sm">
                                            <div className="font-semibold text-brand-blue mb-1 text-xs uppercase tracking-[0.2em]">Pattern Detection</div>
                                            <div className="text-text-1">Anomaly detected in bearing vibration frequency. Historical data shows similar patterns preceding failures.</div>
                                            <div className="mt-3 flex space-x-3">
                                                <button className="flex-1 py-1.5 rounded text-white text-xs font-medium" style={{ background: 'var(--brand-blue)' }}>
                                                    View Data
                                                </button>
                                                <button className="flex-1 py-1.5 rounded border-2 border-border-soft text-text-0 bg-white text-xs font-medium hover:bg-surface-1">
                                                    Train Model
                                                </button>
                                            </div>
                                        </div>
                                        <div className="bg-white border border-border-soft rounded-lg p-3 text-sm">
                                            <div className="font-semibold text-brand-blue mb-1 text-xs uppercase tracking-[0.2em]">AI Model Output</div>
                                            <div className="text-text-1">Predictive model deployed. Maintenance window scheduled. Data logged for continuous improvement.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="inline-flex items-center gap-2 py-0.5 px-3 rounded-full text-xs font-semibold bg-[rgba(24,91,167,0.12)] text-brand-blue uppercase tracking-[0.2em] mb-3">
                                <div className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--brand-blue)' }}></div>
                                Real-Time Intelligence
                            </div>
                            <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 text-text-0">Comprehensive Control System Visibility</h3>
                            <p className="text-text-1 mb-8 text-base leading-relaxed">
                                See everything happening across your factory floor in real-time. Our platform creates a unified view of every control system—the foundational layer for AI-driven insights and automation.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-1 h-full rounded-full mt-2" style={{ background: 'var(--brand-blue)', minHeight: '60px' }}></div>
                                    <div>
                                        <h4 className="font-display text-lg font-semibold text-text-0 mb-2">Complete System Understanding</h4>
                                        <p className="text-text-1 leading-relaxed">Connect and monitor every robot, PLC, and sensor—regardless of vendor or protocol. One platform, complete visibility.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-1 h-full rounded-full mt-2" style={{ background: 'var(--brand-blue)', minHeight: '60px' }}></div>
                                    <div>
                                        <h4 className="font-display text-lg font-semibold text-text-0 mb-2">Structured, Time-Series Data</h4>
                                        <p className="text-text-1 leading-relaxed">Automatically normalize and structure control data into a format optimized for AI model training and analysis.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-1 h-full rounded-full mt-2" style={{ background: 'var(--brand-blue)', minHeight: '60px' }}></div>
                                    <div>
                                        <h4 className="font-display text-lg font-semibold text-text-0 mb-2">Production-Ready Infrastructure</h4>
                                        <p className="text-text-1 leading-relaxed">Enterprise-grade reliability and security. Built to run alongside mission-critical manufacturing systems.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Detail Row 2 */}
                    <div className="mt-32 grid md:grid-cols-2 gap-16 items-center">
                        <div className="md:order-2 relative">
                            <div className="relative rounded-2xl bg-white border-2 border-border-soft overflow-hidden shadow-large">
                                {/* AI Model Training Dashboard */}
                                <div className="bg-surface-1 rounded-xl p-4 h-80">
                                    <div className="border-b border-border-soft pb-3 mb-4">
                                        <div className="font-display text-lg font-semibold text-text-0">AI Model Training Pipeline</div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="bg-white border border-border-soft rounded-lg p-3">
                                            <div className="text-xs uppercase tracking-[0.2em] text-text-2 mb-1">Data Quality</div>
                                            <div className="text-xl font-display font-bold text-brand-green">94%</div>
                                            <div className="h-2 w-full bg-surface-2 rounded-full mt-2">
                                                <div className="h-2 rounded-full" style={{ width: '94%', background: 'var(--brand-green)' }}></div>
                                            </div>
                                        </div>
                                        <div className="bg-white border border-border-soft rounded-lg p-3">
                                            <div className="text-xs uppercase tracking-[0.2em] text-text-2 mb-1">Models Active</div>
                                            <div className="text-xl font-display font-bold text-brand-orange">3</div>
                                            <div className="flex items-center mt-2 text-xs text-text-2">
                                                <CheckCircle2 size={12} className="mr-1" />
                                                <span>In production</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-border-soft rounded-lg p-3 h-40">
                                        <div className="text-xs uppercase tracking-[0.2em] text-text-2 mb-3">Model Performance (30 days)</div>
                                        <div className="h-32 w-full relative">
                                            {/* Simple line chart visualization */}
                                            <div className="absolute bottom-0 left-0 right-0 h-px bg-border-soft"></div>
                                            <div className="absolute left-0 top-0 bottom-0 w-px bg-border-soft"></div>
                                            <svg viewBox="0 0 100 50" className="h-full w-full">
                                                <path
                                                    d="M0,25 C10,20 20,18 30,5 C40,15 50,25 60,20 C70,15 80,5 90,10 L100,15"
                                                    fill="none"
                                                    stroke="#185BA7"
                                                    strokeWidth="2"
                                                    opacity="0.5"
                                                />
                                                <path
                                                    d="M0,25 C10,20 20,18 30,5 C40,15 50,25 60,20 C70,15 80,5 90,10 L100,15"
                                                    fill="none"
                                                    stroke="#185BA7"
                                                    strokeWidth="2"
                                                    strokeDasharray="2 2"
                                                />
                                            </svg>
                                            {/* Prediction point */}
                                            <div className="absolute right-10 top-1/2 h-3 w-3 rounded-full transform -translate-y-1/2 animate-pulse" style={{ background: 'var(--brand-yellow)' }}></div>
                                            <div className="absolute right-28 bottom-10 h-2 w-2 rounded-full" style={{ background: 'var(--brand-orange)' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:order-1">
                            <div className="inline-flex items-center gap-2 py-0.5 px-3 rounded-full text-xs font-semibold bg-[rgba(255,102,0,0.12)] text-brand-orange uppercase tracking-[0.2em] mb-3">
                                <div className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--brand-orange)' }}></div>
                                AI Development Platform
                            </div>
                            <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 text-text-0">Built for Training and Deploying AI Models</h3>
                            <p className="text-text-1 mb-8 text-base leading-relaxed">
                                Our platform provides the data infrastructure AI models need. Collect comprehensive control system data, train custom models, and deploy them in production—all on a single platform built for manufacturing reliability.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-1 h-full rounded-full mt-2" style={{ background: 'var(--brand-orange)', minHeight: '60px' }}></div>
                                    <div>
                                        <h4 className="font-display text-lg font-semibold text-text-0 mb-2">Data Collection at Scale</h4>
                                        <p className="text-text-1 leading-relaxed">Comprehensive, timestamped data from every control system—the foundation AI models need to learn patterns and predict outcomes.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-1 h-full rounded-full mt-2" style={{ background: 'var(--brand-orange)', minHeight: '60px' }}></div>
                                    <div>
                                        <h4 className="font-display text-lg font-semibold text-text-0 mb-2">Model Training Infrastructure</h4>
                                        <p className="text-text-1 leading-relaxed">Train models to detect anomalies, predict failures, and optimize operations—using real data from your factory floor.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-1 h-full rounded-full mt-2" style={{ background: 'var(--brand-orange)', minHeight: '60px' }}></div>
                                    <div>
                                        <h4 className="font-display text-lg font-semibold text-text-0 mb-2">Production Deployment</h4>
                                        <p className="text-text-1 leading-relaxed">Deploy AI models directly into your manufacturing environment with the reliability and security production demands.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section id="contact" className="relative py-20 md:py-32 bg-white">

                <div className="container relative mx-auto px-6">
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-orange"></div>
                        <h2 className="font-display text-3xl text-text-0 md:text-5xl">
                            Ready to build your AI infrastructure?
                        </h2>
                        <p className="mt-6 text-lg text-text-1">
                            Connect with our team to explore how we can help you create the data foundation for manufacturing AI.
                        </p>
                    </div>

                    <ContactForm />
                </div>
            </section>

            {/* Footer */}
            <footer className="relative bg-surface-2 py-16 text-text-1 border-t border-border-soft">
                <div className="container relative mx-auto px-6">
                    <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
                        <div>
                            <div className="font-display text-2xl text-gradient-primary">Color Robotics</div>
                            <p className="mt-4 max-w-xl text-text-1">
                                The data foundation for manufacturing AI. We connect every control system in your factory to create the comprehensive, real-time infrastructure that enables AI model training and deployment at scale.
                            </p>
                            <div className="mt-6 flex gap-4">
                                <a
                                    href="https://www.linkedin.com/company/color-robotics"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-border-soft text-text-1 transition hover:border-brand-blue hover:text-brand-blue"
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="grid gap-8 sm:grid-cols-2">
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-text-0">Company</h3>
                                <ul className="mt-4 space-y-3 text-sm">
                                    <li><a href="#contact" className="transition hover:text-text-0">Contact</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-text-0">Contact</h3>
                                <ul className="mt-4 space-y-3 text-sm">
                                    <li><a href="mailto:hello@colorrobotics.ai" className="transition hover:text-text-0">hello@colorrobotics.ai</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border-soft pt-8 text-xs uppercase tracking-[0.28em] text-text-2 md:flex-row">
                        <p>&copy; {new Date().getFullYear()} Color Robotics. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, description, accentColor = 'var(--brand-blue)' }: FeatureCardProps) {
    return (
        <div className="relative overflow-hidden rounded-3xl border-2 bg-white p-8 shadow-medium transition-all duration-500 hover:shadow-large group" style={{ borderColor: `${accentColor}33` }}>
            <div className="relative flex h-full flex-col justify-between">
                <div>
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300" style={{ background: `${accentColor}1a`, color: accentColor }}>
                        {icon}
                    </div>
                    <h3 className="font-display text-2xl text-text-0 transition-colors duration-300" style={{ color: 'inherit' }}>
                        {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-1">
                        {description}
                    </p>
                </div>
                <div className="mt-6 flex items-center gap-2">
                    <div className="h-1 w-8 rounded-full transition-all duration-300 group-hover:w-12" style={{ background: accentColor }}></div>
                    <span className="text-xs uppercase tracking-[0.32em] text-text-2">
                        Production Ready
                    </span>
                </div>
            </div>
        </div>
    );
}
