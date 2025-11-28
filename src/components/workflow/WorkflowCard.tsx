"use client";

import { ReactNode } from "react";

interface WorkflowCardProps {
  title: string;
  subtitle: string;
  gradient: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function WorkflowCard({ title, subtitle, gradient, icon, children, className = "" }: WorkflowCardProps) {
  return (
    <div 
      className={`relative flex h-[340px] w-full flex-col overflow-hidden rounded-[32px] p-8 shadow-[0_24px_45px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl group ${className}`}
      style={{ 
        background: gradient,
        boxShadow: "0 24px 45px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(255,255,255,0.15)",
      }}
    >
      {/* Futuristic Wave/Mesh Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM4.38 0C2.8 0 1.732.153 1.131.377l-1 .386v1.458l-.128-.05L0 2v12.742l1.245.505C7.176 17.778 13.406 19 24.629 19c10.933 0 16.855-1.397 26.66-5.063l1.767-.662c2.475-.923 4.66-1.674 6.724-2.275h-6.335c-.357.13-.72.264-1.088.402l-1.768.661C39.64 15.347 33.647 14 24.629 14c-10.271 0-15.362-1.222-24.629-4.928C4.965 9.151 3.43 8.835 2 8.65V4c2.833 1.579 5.652 2.352 9.378 2.352 11.705 0 16.91-2.618 25.838-5.793C47.585 3.825 54.213 6 66.342 6c12.128 0 19.283-2.125 29.65-5.342l1.636-.513c2.24-.701 4.19-1.21 5.923-1.53l.449 2.21a36.053 36.053 0 0 0-4.353 1.237l-1.629.51C87.795 11.78 80.827 14 66.342 14c-14.485 0-21.58-2.125-32.43-5.441C24.584 5.175 19.025 4 9.378 4c-3.168 0-5.95.633-8.247 1.638V0h3.249zm91.24 0c-3.417 1.588-6.727 2.436-9.85 2.436-5.693 0-10.275-2.308-13.616-4.436h6.653c2.572 1.314 5.41 2.436 8.963 2.436 1.977 0 3.935-.336 5.85-.833V0h2zM0 20c1.49 0 3.025-.294 4.629-.833l.449 2.21a36.053 36.053 0 0 0-4.353 1.237l-.597.187A32.61 32.61 0 0 0 0 23v-3z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "400px 100px",
        }}
      />

      {/* Top Left Icon - Only render if provided */}
      {icon && (
        <div className="relative z-10 mb-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md text-2xl shadow-sm">
          {icon}
        </div>
      )}
      
      {!icon && <div className="h-6" />} 

      {/* Inner Floating UI - Centered/Positioned by parent */}
      <div className="relative z-10 my-4 flex flex-1 items-center justify-center transition-transform duration-500 group-hover:scale-105">
        {children}
      </div>

      {/* Bottom Text */}
      <div className="relative z-10 mt-auto">
        <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
        <p className="text-sm font-medium opacity-90 mix-blend-plus-lighter mt-1" style={{ color: "rgba(255,255,255,0.85)" }}>{subtitle}</p>
      </div>
      
      {/* Inner Glow */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.2)]" />
    </div>
  );
}
