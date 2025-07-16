"use client";

import * as React from "react";
export default function WhyTeamsInnovateSection() {
  return <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-b from-slate-50 to-white" style={{
    background: "linear-gradient(90deg, oklch(0.984 0.003 247.858) 0%, rgb(255, 255, 255) 100%)",
    display: "none"
  }}>
      {/* Canvas background with fade effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-slate-100/30" style={{
      background: `
        radial-gradient(circle, rgba(148, 163, 184, 0.4) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, oklab(0.968 -0.00263402 -0.00648552 / 0.3) 100%)
      `,
      backgroundSize: "20px 20px, 100% 100%",
      transform: "scale(0.6)",
      transformOrigin: "center"
    }} />
      
      {/* Main content container */}
      <div className="relative py-32 px-4">
        <div className="relative flex items-center justify-center min-h-[80vh]" style={{
        display: "none"
      }}>
          <div className="container mx-auto max-w-4xl">
            <div className="flex justify-center">
              <div className="flex flex-col items-center justify-center gap-8 text-center z-10 relative">
                <div className="space-y-8">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                    Why teams innovate on Reaxo
                  </h3>
                  <a role="button" tabIndex={0} href="#signup" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div>Sign up free</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}