"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bot, MessageSquare, Star, Check, ArrowRight, Zap, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen font-sans bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-4 md:px-10 max-w-7xl mx-auto w-full">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          AI Lite Kit ⚡
        </div>
        <div className="space-x-6 hidden md:block text-sm font-medium text-gray-300">
          <a href="#features" className="hover:text-blue-400 transition">Features</a>
          <a href="#pricing" className="hover:text-blue-400 transition">Pricing</a>
        </div>
        <button
          onClick={() => window.open('https://zeeshanptn.gumroad.com/l/your-product', '_blank')}
          className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition">
          Get Access
        </button>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center mt-20 px-4 mb-20">
        <div className="bg-gray-800 text-sm px-4 py-1 rounded-full mb-6 border border-gray-700 animate-pulse text-blue-300">
          🔥 New: Python SaaS Starter for Non-Coders
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold max-w-4xl leading-tight mb-6">
          Launch your AI Application <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            in 5 Minutes.
          </span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mb-10">
          The <strong>AI Lite Kit</strong> is the simplest way to build and sell AI tools.
          No complex React. No expensive AWS. Just simple Python.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={() => window.open('https://zeeshanptn.gumroad.com/l/your-product', '_blank')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition transform hover:scale-105 shadow-lg shadow-blue-500/30">
            Download AI Lite Kit ($99)
          </button>
          <button
            onClick={() => document.getElementById('demo-video')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-bold transition">
            Watch Demo
          </button>
        </div>
      </header>

      {/* Demo Video Section */}
      <section id="demo-video" className="py-20 px-6 bg-black flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
            <p className="text-gray-400">Watch how fast you can launch your own AI SaaS.</p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl bg-gray-900 aspect-video flex items-center justify-center">
            {/* 
              USER INSTRUCTION: 
              1. Put your video file (e.g., demo.mp4) inside the 'public' folder of ai-agency-landing.
              2. Change the 'src' below from "/demo.mp4" to the actual name of your file.
            */}
            <video
              controls
              preload="metadata"
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why buy this kit?</h2>
            <p className="text-gray-400">Save 100+ hours of setup time.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-yellow-400" />}
              title="Ready-to-use Auth"
              desc="Simple API Key management system included. You control who uses your tool."
            />
            <FeatureCard
              icon={<Bot className="w-6 h-6 text-purple-400" />}
              title="OpenAI Integration"
              desc="Pre-configured GPT-4/3.5 connection. Just change the prompt and you have a new product."
            />
            <FeatureCard
              icon={<Star className="w-6 h-6 text-blue-400" />}
              title="Modern UI/UX"
              desc="Clean, dark-mode Sidebar & Dashboards. Looks expensive, costs nothing."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-3">GETTING STARTED</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Launch in 3 Simple Steps</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              No coding required. We built a "Manager Mode" so you can just fill in the blanks.
              <span className="block mt-4 inline-block bg-green-500/10 text-green-400 px-4 py-1 rounded-full text-sm font-medium border border-green-500/20">
                Beginner Friendly
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl text-black relative overflow-hidden group hover:-translate-y-2 transition duration-300 shadow-2xl">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto shadow-lg">1</div>
              <h4 className="text-xl font-bold mb-4 text-center">Download the File</h4>
              <p className="text-gray-600 text-center mb-8 leading-relaxed">
                You will receive a <strong>ZIP file</strong> immediately after purchase. Simply download and unzip it on your computer.
              </p>
              <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-100 flex items-center gap-4">
                <div className="bg-blue-600 p-2 rounded-lg text-white"><Zap size={20} /></div>
                <div>
                  <div className="font-bold text-sm">ai-lite-kit.zip</div>
                  <div className="text-xs text-gray-500">12.5 MB • Ready to open</div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl text-black relative overflow-hidden group hover:-translate-y-2 transition duration-300 shadow-2xl">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto shadow-lg">2</div>
              <h4 className="text-xl font-bold mb-4 text-center">Enter Business Info</h4>
              <p className="text-gray-600 text-center mb-8 leading-relaxed">
                Open the <strong>config.json</strong> file. A window will pop up asking for your OpenAI Key and Business Name.
              </p>
              <div className="bg-gray-50 p-4 rounded-xl border-2 border-gray-100 space-y-3">
                <div className="h-2 w-1/3 bg-gray-200 rounded"></div>
                <div className="h-8 bg-white border border-gray-300 rounded px-3 flex items-center text-gray-400 text-sm">my-email@gmail.com</div>
                <div className="h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">Save Settings</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl text-black relative overflow-hidden group hover:-translate-y-2 transition duration-300 shadow-2xl">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto shadow-lg shadow-green-500/30">3</div>
              <h4 className="text-xl font-bold mb-4 text-center">You Are Live!</h4>
              <p className="text-gray-600 text-center mb-8 leading-relaxed">
                Click 'Start Server' and your website is online. You can start accepting payments from customers instantly.
              </p>
              <div className="bg-green-50 p-4 rounded-xl border-2 border-green-100 text-center">
                <div className="inline-flex items-center gap-2 text-green-700 font-bold mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Online & Active
                </div>
                <div className="text-xs text-green-600">Revenue: $0.00 (Ready)</div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-blue-900/20 border border-blue-500/30 rounded-full py-4 px-8 inline-flex items-center gap-3 backdrop-blur-sm animate-fade-in shadow-lg shadow-blue-500/10">
            <span className="text-2xl">ℹ️</span>
            <div className="text-left">
              <span className="block text-blue-400 font-bold text-sm uppercase tracking-wider">Need help?</span>
              <span className="text-gray-300 text-sm">Full documentation & step-by-step guide included. You are never alone.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/10 to-transparent -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-gray-400">One-time payment. Own the code forever.</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="p-8 border border-purple-500/30 bg-purple-900/10 rounded-2xl relative overflow-hidden text-center backdrop-blur-sm">
              <div className="absolute top-0 right-0 px-3 py-1 bg-purple-600 text-xs font-bold text-white rounded-bl-lg">
                Limited Time
              </div>
              <h3 className="text-xl font-semibold text-purple-400">Full Source Code</h3>
              <div className="my-4">
                <span className="text-5xl font-bold text-white">$99</span>
                <span className="text-gray-500 line-through ml-2">$199</span>
              </div>
              <p className="text-gray-400 mb-8">Launch your AI SaaS this weekend.</p>

              <ul className="space-y-4 mb-8 text-left inline-block">
                <ListItem text="✅ Complete Python Source Code" />
                <ListItem text="✅ 100% Royalty Free" />
                <ListItem text="✅ Customization Guide Included" />
                <ListItem text="✅ Free Updates forever" />
              </ul>

              <button
                onClick={() => window.open('https://gumroad.com/l/your-product', '_blank')}
                className="w-full py-4 rounded-lg bg-white text-black hover:bg-gray-200 transition font-bold shadow-lg shadow-purple-900/20 text-lg">
                Get Instant Access ⚡
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© 2026 AI Lite Kit. All rights reserved.</p>
        <p className="mt-2 text-xs text-gray-600">
          Refund Policy: Since this is a digital downloadable product (source code),
          <span className="text-gray-500"> all sales are final and non-refundable.</span>
        </p>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition duration-300">
      <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-sm text-gray-300">
      <Check className="w-4 h-4 text-purple-500" />
      {text}
    </li>
  );
}
