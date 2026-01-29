import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Loginpage = () => {
    const navigate = useNavigate();
    const { login, loading: authLoading } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isRegister, setIsRegister] = useState(false);

    const handlelogin = async (e) => {
        e.preventDefault();
        
        if (!email.trim()) {
            setError("Please enter your email address");
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            return;
        }
        
        if (!password) {
            setError("Please enter your password");
            return;
        }
        
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setError("");
        setIsLoading(true);
        
        try {
            await login(email, password);
            console.log("Login successful");
            navigate('/');
        } catch (err) {
            setError(err.message || "Login failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-amber-600 py-12 px-4 sm:px-6 lg:px-8">
            {/* Background decorative elements */}
            <div className="absolute top-0 -left-40 w-80 h-80 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 -right-40 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            
            <div className="w-full max-w-md relative">
                {/* Card Container */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl bg-opacity-95">
                    {/* Gradient Top Bar */}
                    <div className="h-2 bg-gradient-to-r from-green-700 to-amber-500"></div>
                    
                    {/* Content */}
                    <div className="p-8 sm:p-10">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-amber-600 bg-clip-text text-transparent mb-2">
                                {isRegister ? "Create Account" : "Welcome Back"}
                            </h1>
                            <p className="text-gray-600 text-sm">
                                {isRegister ? "Sign up to get started" : "Sign in to your account to continue"}
                            </p>
                        </div>

                        {/* Form */}
                        <form className="space-y-5" onSubmit={handlelogin}>
                            {/* Name Input (Register Only) */}
                            {isRegister && (
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="John Doe"
                                            className={`w-full px-4 py-3 pl-11 border-2 rounded-lg focus:outline-none transition-all duration-300 ${
                                                error && !name ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-green-700 focus:bg-green-50"
                                            }`}
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value);
                                                setError("");
                                            }}
                                        />
                                        <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                            
                            {/* Email Input */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className={`w-full px-4 py-3 pl-11 border-2 rounded-lg focus:outline-none transition-all duration-300 ${
                                            error && !email ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-green-700 focus:bg-green-50"
                                        }`}
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setError("");
                                        }}
                                    />
                                    <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="space-y-2">
                                <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className={`w-full px-4 py-3 pl-11 pr-11 border-2 rounded-lg focus:outline-none transition-all duration-300 ${
                                            error && !password ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-green-700 focus:bg-green-50"
                                        }`}
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            setError("");
                                        }}
                                    />
                                    <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-14-14zM10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                                    <p className="text-sm text-red-700 flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        {error}
                                    </p>
                                </div>
                            )}

                            {/* Remember & Forgot */}
                            {!isRegister && (
                                <div className="flex items-center justify-between text-sm">
                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            className="w-4 h-4 text-green-700 rounded focus:ring-2 focus:ring-green-700 cursor-pointer"
                                        />
                                        <span className="ml-2 text-gray-700">Remember me</span>
                                    </label>
                                    <Link to="#" className="text-green-700 hover:text-amber-600 font-semibold transition-colors">
                                        Forgot password?
                                    </Link>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading || authLoading}
                                className="w-full bg-gradient-to-r from-green-700 to-amber-500 text-white font-bold py-3 px-4 rounded-lg hover:from-green-800 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isLoading || authLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        {isRegister ? "Creating account..." : "Signing in..."}
                                    </>
                                ) : (
                                    isRegister ? "Create Account" : "Sign In"
                                )}
                            </button>
                        </form>

                        {/* Toggle Register/Login */}
                        <div className="mt-8 text-center border-t border-gray-200 pt-6">
                            <p className="text-gray-600 text-sm">
                                {isRegister ? "Already have an account? " : "Don't have an account? "}
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsRegister(!isRegister);
                                        setError("");
                                        setEmail("");
                                        setPassword("");
                                        setName("");
                                    }}
                                    className="text-green-700 hover:text-amber-600 font-bold transition-colors cursor-pointer"
                                >
                                    {isRegister ? "Sign in now" : "Sign up now"}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Text */}
                <div className="text-center mt-6">
                    <p className="text-gray-400 text-xs">By signing in, you agree to our Terms of Service and Privacy Policy</p>
                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
            `}</style>
        </div>
    );
};

export default Loginpage;