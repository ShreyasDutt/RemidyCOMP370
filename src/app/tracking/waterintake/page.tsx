"use client"
import { FaTint } from "react-icons/fa";
import { WiRaindrop } from "react-icons/wi";
import Bottomnav from "@/app/Components/Bottomnav";
import Waterprogressbar from "@/app/Components/Waterprogressbar";
import { useState } from 'react';

export default function Page() {
    const [dailyGoal, setDailyGoal] = useState(2400);

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50">
            <div className="relative w-full max-w-md mx-auto flex flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto pb-16">
                    {/* Header */}
                    <div className="p-6 relative">
                        <div className="absolute top-0 right-0 opacity-10">
                            <WiRaindrop className="text-blue-600 text-8xl transform rotate-45" />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <FaTint className="text-blue-600 text-xl" />
                                </div>
                                <span className="text-sm font-medium text-blue-600">Daily Progress</span>
                            </div>

                            <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    H2O Tracker
                                </span>
                            </h1>

                            <p className="text-gray-500 text-sm">
                                Stay hydrated, stay healthy
                            </p>
                        </div>
                    </div>

                    {/* Progress Bar Section */}
                    <div className="flex items-center justify-center px-4">
                        <div className="w-full">
                            <Waterprogressbar dailyGoal={dailyGoal} setDailyGoal={setDailyGoal} />
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-lg shadow-lg">
                    <Bottomnav />
                </div>
            </div>
        </div>
    );
}