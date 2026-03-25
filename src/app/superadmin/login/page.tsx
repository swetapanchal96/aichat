// app/admin/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash, FaBook, FaShieldAlt, FaLock } from 'react-icons/fa';
import { MdEmail, MdAdminPanelSettings } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import logo from '@/app/assets/logo-1.png'
import Image from 'next/image';

interface FormData {
    email: string;
    password: string;
    rememberMe: boolean;
}

interface FormErrors {
    email?: string;
    password?: string;
    general?: string;
}

export default function AdminLoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
        rememberMe: false,
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = 'Email address is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        setErrors({});

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));

            if (formData.email === 'admin@uniwu.edu' && formData.password === 'admin123') {
                if (formData.rememberMe) {
                    localStorage.setItem('adminAuth', 'true');
                } else {
                    sessionStorage.setItem('adminAuth', 'true');
                }
                router.push('/admin/dashboard');
            } else {
                setErrors({ general: 'Invalid email or password. Please try again.' });
            }
        } catch (error) {
            setErrors({ general: 'An error occurred. Please try again later.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-[#2c446b] via-[#2e628c] to-[#70a0bf]">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#70a0bf] opacity-20 blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#2c446b] opacity-20 blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-[#2e628c] opacity-10 blur-3xl" />

                {/* Floating admin icons */}
                <RiAdminFill className="absolute top-20 left-10 text-[#70a0bf] opacity-10 text-7xl animate-bounce" />
                <FaShieldAlt className="absolute bottom-20 right-10 text-[#2c446b] opacity-10 text-6xl animate-pulse" />
                <FaLock className="absolute top-1/3 right-1/4 text-white opacity-5 text-5xl animate-spin-slow" />
            </div>

            {/* Decorative grid pattern */}
            <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `repeating-linear-gradient(45deg, rgba(112,160,191,0.1) 0px, rgba(112,160,191,0.1) 1px, transparent 1px, transparent 30px)`
            }} />

            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md">
                    {/* Logo/Brand Section */}
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg ring-1 ring-white/30 shadow-2xl overflow-hidden">
                            <Image
                                src={logo}
                                alt="UniWU Logo"
                                width={48}
                                height={48}
                                className="h-12 w-12 object-contain"
                            />
                        </div>
                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
                            <FaBook className="h-8 w-8 text-[#70a0bf]" />
                            UniWU Admin
                            <RiAdminFill className="h-8 w-8 text-[#70a0bf]" />
                        </h1>
                        <p className="mt-2 text-sm text-[#70a0bf] font-medium">
                            Secure Administrative Access Portal
                        </p>
                    </div>

                    {/* Login Form Card */}
                    <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl ring-1 ring-white/20 transition-all duration-300 hover:shadow-3xl">
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 h-40 w-40 rounded-full bg-[#70a0bf] opacity-20 blur-2xl" />
                        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-40 w-40 rounded-full bg-[#2c446b] opacity-20 blur-2xl" />

                        <div className="relative px-6 py-8 sm:px-10 sm:py-10">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* General Error Message */}
                                {errors.general && (
                                    <div className="rounded-xl bg-red-500/10 p-4 text-sm text-red-200 ring-1 ring-red-500/20 backdrop-blur-sm flex items-center gap-2">
                                        <FaShieldAlt className="h-4 w-4 shrink-0" />
                                        {errors.general}
                                    </div>
                                )}

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <MdEmail className="h-5 w-5 text-white/40" />
                                        </div>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`block w-full rounded-xl border-0 bg-white/5 pl-10 pr-4 py-3 text-white shadow-sm ring-1 ring-inset ${errors.email ? 'ring-red-400' : 'ring-white/20'
                                                } placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#70a0bf] sm:text-sm sm:leading-6 backdrop-blur-sm transition-all duration-200`}
                                            placeholder="admin@uniwu.edu"
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="mt-2 text-sm text-red-300 flex items-center gap-1">
                                            <FaShieldAlt className="h-3 w-3" />
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaLock className="h-5 w-5 text-white/40" />
                                        </div>
                                        <input
                                            id="password"
                                            name="password"
                                            type={showPassword ? 'text' : 'password'}
                                            autoComplete="current-password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className={`block w-full rounded-xl border-0 bg-white/5 pl-10 pr-12 py-3 text-white shadow-sm ring-1 ring-inset ${errors.password ? 'ring-red-400' : 'ring-white/20'
                                                } placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-[#70a0bf] sm:text-sm sm:leading-6 backdrop-blur-sm transition-all duration-200`}
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/50 hover:text-white/80 transition-colors"
                                        >
                                            {showPassword ? (
                                                <FaEyeSlash className="h-5 w-5" />
                                            ) : (
                                                <FaEye className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="mt-2 text-sm text-red-300 flex items-center gap-1">
                                            <FaShieldAlt className="h-3 w-3" />
                                            {errors.password}
                                        </p>
                                    )}
                                </div>

                                {/* Remember Me & Forgot Password */}
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            name="rememberMe"
                                            checked={formData.rememberMe}
                                            onChange={handleChange}
                                            className="h-4 w-4 rounded border-white/30 bg-white/5 text-[#70a0bf] focus:ring-[#70a0bf] focus:ring-offset-0 focus:ring-offset-transparent"
                                        />
                                        <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                                            Remember me
                                        </span>
                                    </label>
                                    <button
                                        type="button"
                                        className="text-sm font-medium text-[#70a0bf] hover:text-white transition-colors flex items-center gap-1"
                                        onClick={() => {/* Handle forgot password */ }}
                                    >
                                        <FaShieldAlt className="h-3 w-3" />
                                        Forgot password?
                                    </button>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="group relative flex w-full justify-center rounded-xl bg-linear-to-r from-[#2c446b] to-[#2e628c] px-4 py-3 text-sm font-semibold text-white shadow-lg hover:from-[#2e628c] hover:to-[#70a0bf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#70a0bf] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 overflow-hidden"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                    {isLoading ? (
                                        <div className="flex items-center gap-2">
                                            <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                                            Authenticating...
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <MdAdminPanelSettings className="h-5 w-5" />
                                            Sign in to Admin Portal
                                        </div>
                                    )}
                                </button>

                                {/* Security Note */}
                                <div className="flex items-center justify-center gap-2 pt-2">
                                    <FaShieldAlt className="h-4 w-4 text-white/40" />
                                    <span className="text-xs text-white/40">
                                        Protected by enterprise-grade security
                                    </span>
                                    <FaLock className="h-3 w-3 text-white/40" />
                                </div>

                                {/* Demo Credentials */}
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <p className="text-center text-xs text-white/30 mb-2">
                                        Demo Credentials
                                    </p>
                                    <div className="flex justify-center gap-4 text-xs text-white/40">
                                        <span>Email: admin@uniwu.edu</span>
                                        <span>Password: admin123</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <p className="mt-8 text-center text-xs text-white/40 flex items-center justify-center gap-1">
                        <RiAdminFill className="h-3 w-3" />
                        UniWU Administration Portal v1.0
                        <FaBook className="h-3 w-3" />
                    </p>
                </div>
            </div>

            <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
        </div>
    );
}