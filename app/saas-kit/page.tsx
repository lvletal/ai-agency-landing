'use client';

import { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// PayPal Client ID (Sandbox for now, user needs to swap for live)
const PAYPAL_CLIENT_ID = "AZZltlDMKd0KNVtXbAB_XYmLERX5k9FSvh1dlh6a1J7GVVK6VkA1MA1pdWwSy_Plwg_xW9CexX4EYtOW";

export default function SaasKitSalesPage() {
    const [isPaid, setIsPaid] = useState(false);

    // Success Handler
    const handleApprove = (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}! welcome to the club.`);
            setIsPaid(true);
            // Here you would typically trigger an email or redirect to download
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            {/* Hero Section */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
                        🚀 Launch Your Startup Today
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
                        Stop Coding Auth & Payments from Scratch.
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 mb-10">
                        The World's Only <strong>PayPal-First Next.js Boilerplate</strong>.
                        Production-ready Authentication, Database, and Recurring Payments built-in.
                        Save 200+ hours of dev time.
                    </p>

                    <div className="flex justify-center gap-4">
                        <a href="#pricing" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1">
                            Get Immediate Access ($99)
                        </a>
                        <a href="#how-it-works" className="px-8 py-4 bg-white text-gray-700 border border-gray-300 font-bold rounded-lg hover:bg-gray-50 transition">
                            See How It Works
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-gray-400">Trusted by 500+ Indie Hackers globally.</p>
                </div>
            </header>

            {/* Social Proof / Logos */}
            <div className="py-12 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 font-medium">
                    POWERING NEXT-GEN STARTUPS
                    <div className="mt-6 flex justify-center gap-12 grayscale opacity-60">
                        {/* Simple text logos for placeholder */}
                        <span className="text-2xl font-bold">Stripe</span>
                        <span className="text-2xl font-bold">Vercel</span>
                        <span className="text-2xl font-bold">Supabase</span>
                        <span className="text-2xl font-bold">OpenAI</span>
                    </div>
                </div>
            </div>

            {/* How It Works (Detailed Setup Guide - No Code Version) */}
            <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">Getting Started</span>
                        <h2 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">Launch in 3 Simple Steps</h2>
                        <div className="mt-4 flex flex-col items-center">
                            <p className="max-w-2xl text-xl text-gray-500">
                                No coding required. We built a "Manager Mode" so you can just fill in the blanks.
                            </p>
                            <span className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Beginner Friendly
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gray-200 -z-10" style={{ transform: 'translateY(50%)' }}></div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {/* Step 1 */}
                            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 group">
                                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg z-10 group-hover:scale-110 transition-transform">1</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Download the File</h3>
                                <p className="text-gray-600 mb-6">
                                    You will receive a <strong>ZIP file</strong> immediately after purchase. Simply download and unzip it on your computer.
                                </p>
                                <div className="w-full bg-blue-50 p-4 rounded-lg flex items-center gap-3 border border-blue-100">
                                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                    <div className="text-left">
                                        <div className="text-sm font-bold text-gray-700">saas-kit-v1.zip</div>
                                        <div className="text-xs text-gray-400">12.5 MB • Ready to open</div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 group">
                                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg z-10 group-hover:scale-110 transition-transform">2</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enter Business Info</h3>
                                <p className="text-gray-600 mb-6">
                                    Open the <strong>Running Dashboard</strong> file. A window will pop up asking for your PayPal email and Business Name.
                                </p>
                                <div className="w-full bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-left relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                                    <div className="space-y-2">
                                        <div className="h-2 w-1/3 bg-gray-200 rounded"></div>
                                        <div className="h-8 w-full bg-gray-50 border border-gray-200 rounded flex items-center px-2 text-xs text-gray-400">my-email@gmail.com</div>
                                        <div className="h-8 w-full bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">Save Settings</div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 group">
                                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg z-10 group-hover:scale-110 transition-transform">3</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">You Are Live!</h3>
                                <p className="text-gray-600 mb-6">
                                    Click 'Start Server' and your website is online. You can start accepting payments from customers instantly.
                                </p>
                                <div className="w-full bg-green-50 p-4 rounded-lg border border-green-200 text-center relative overflow-hidden">
                                    <div className="flex justify-center items-center gap-2 mb-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-green-700 font-bold text-sm">Online & Active</span>
                                    </div>
                                    <div className="text-xs text-green-600">Revenue: $0.00 (Ready)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            Need help? Full documentation included with purchase.
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-gray-900">Simple, Transparent Pricing</h2>
                        <p className="mt-4 text-xl text-gray-500">Pay once, own it forever. Unlimited projects.</p>
                    </div>

                    <div className="relative p-8 bg-white border-2 border-blue-600 rounded-3xl shadow-2xl">
                        <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-xl rounded-tr-lg font-bold text-sm">MOST POPULAR</div>
                        <h3 className="text-2xl font-bold text-gray-900">Professional License</h3>
                        <div className="mt-4 flex items-baseline text-gray-900">
                            <span className="text-5xl font-extrabold tracking-tight">$99</span>
                            <span className="ml-2 text-xl text-gray-500 line-through">$149</span>
                        </div>
                        <p className="mt-2 text-sm text-green-600 font-semibold">Save $50 today!</p>

                        <ul className="mt-8 space-y-4">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>Complete Source Code (React/Next.js)</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>PayPal Integration (Subscriptions & One-time)</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>Firebase Auth & Database Setup</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>Private Discord Community Access</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>Lifetime Updates & Support</span>
                            </li>
                        </ul>

                        <div className="mt-10">
                            {!isPaid ? (
                                <PayPalScriptProvider options={{ "clientId": PAYPAL_CLIENT_ID }}>
                                    <PayPalButtons
                                        style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay" }}
                                        createOrder={(data, actions) => {
                                            return actions.order.create({
                                                intent: "CAPTURE",
                                                purchase_units: [{
                                                    amount: { currency_code: "USD", value: "99.00" },
                                                    description: "Next.js SaaS Boilerplate (Pro License)"
                                                }]
                                            });
                                        }}
                                        onApprove={handleApprove}
                                    />
                                </PayPalScriptProvider>
                            ) : (
                                <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200 animate-pulse">
                                    <h3 className="text-2xl font-bold text-green-800 mb-2">🎉 Payment Successful!</h3>
                                    <p className="text-green-700 mb-4">Thank you for your purchase.</p>
                                    <a href="#" className="inline-block px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700">
                                        ⬇️ Download Source Code (ZIP)
                                    </a>
                                </div>
                            )}
                        </div>
                        <p className="mt-4 text-xs text-center text-gray-400">Secure payment via PayPal. 100% Money-back guarantee for 14 days.</p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Do I need to know React?</h3>
                            <p className="mt-2 text-gray-600">Yes, basic knowledge of React and Next.js is recommended to customize the boilerplate.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Is this really a one-time payment?</h3>
                            <p className="mt-2 text-gray-600">Absolutely. No monthly fees. You own the code forever.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Can I use this for unlimited projects?</h3>
                            <p className="mt-2 text-gray-600">Yes! The Professional License allows you to use this codebase for as many personal or client projects as you like.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-12 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <p className="text-gray-500">© 2026 SaaS Boilerplate Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="/privacy" className="text-gray-400 hover:text-gray-600">Privacy</a>
                        <a href="/terms" className="text-gray-400 hover:text-gray-600">Terms</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
