"use client";

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "/public/Remidy.png";

const Home = () => {
    const { isSignedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isSignedIn) {
            router.push("/home");
        }
    }, [isSignedIn, router]);

    return (
        <div className="min-h-screen bg-[#0D2329] bg-gradient-to-b from-[#0D2329] to-black from-60% text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col items-center justify-center space-y-12">

                    <div className="text-center space-y-6">
                        <div className="flex items-center justify-center mb-8">
                            <div className="relative w-48 h-48">
                                <Image
                                    src={Logo}
                                    alt="Remidy Logo"
                                    layout="fill"
                                    objectFit="contain"
                                    priority
                                />
                            </div>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300 bg-clip-text text-transparent pb-2">
                            Welcome to Remidy
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Your journey to wellness begins here
                        </p>
                    </div>

                    <div className="mt-8">
                        <SignedOut>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <SignInButton mode="modal">
                                    <button className="px-8 py-3 text-emerald-300 bg-transparent border-2 border-emerald-300 rounded-lg hover:bg-emerald-300/10 transition-colors duration-200">
                                        Sign In
                                    </button>
                                </SignInButton>
                                <SignUpButton mode="modal">
                                    <button className="px-8 py-3 text-[#0A1A1F] bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300 rounded-lg hover:opacity-90 transition-opacity duration-200">
                                        Get Started
                                    </button>
                                </SignUpButton>
                            </div>
                        </SignedOut>
                        <SignedIn>
                            <div className="flex items-center justify-center space-x-4">
                                <UserButton />
                                <span className="text-gray-300">Welcome back!</span>
                            </div>
                        </SignedIn>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;