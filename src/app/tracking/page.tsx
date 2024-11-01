import { FaDumbbell, FaFire, FaPills, FaTint, FaWalking } from "react-icons/fa";
import Bottomnav from "@/app/Components/Bottomnav";

export default function Page() {
    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 min-h-screen">
            <div className="relative flex flex-col w-full h-screen max-w-md overflow-hidden">
                <div className="flex-1 overflow-y-auto pb-16">
                    {/* Header */}
                    <div className="p-6">
                        <h1 className="text-4xl font-bold mt-2 text-gray-800 tracking-tight">
                            Tracking
                        </h1>
                    </div>

                    {/* Asymmetrical Grid Layout */}
                    <div className="p-4 gap-4 grid grid-cols-2 auto-rows-auto">
                        {/* Large Activity Card - Spans 2 columns */}
                        <div className="col-span-2 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                                    <div className="flex items-center space-x-4">
                                        <FaWalking className="text-3xl text-white/90" />
                                        <div>
                                            <p className="text-sm font-medium text-white/60">Daily Steps</p>
                                            <p className="text-2xl font-bold text-white">7,500</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                                    <div className="flex items-center space-x-4">
                                        <FaFire className="text-3xl text-white/90" />
                                        <div>
                                            <p className="text-sm font-medium text-white/60">Calories</p>
                                            <p className="text-2xl font-bold text-white">300</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Exercise Card */}
                        <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex flex-col h-full justify-between">
                                <FaDumbbell className="text-2xl text-white/90 mb-4" />
                                <div>
                                    <p className="text-white font-medium">Exercise</p>
                                    <span className="text-sm text-white/60">Now</span>
                                </div>
                            </div>
                        </div>

                        {/* Medication Card */}
                        <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex flex-col h-full justify-between">
                                <FaPills className="text-2xl text-white/90 mb-4" />
                                <div>
                                    <p className="text-white font-medium">Medication</p>
                                    <span className="text-sm text-white/60">8:00 AM</span>
                                </div>
                            </div>
                        </div>

                        {/* Water Reminder - Spans 2 columns */}
                        <div className="col-span-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <FaTint className="text-3xl text-white/90" />
                                    <div>
                                        <p className="text-white text-lg font-medium">Water Reminder</p>
                                        <span className="text-sm text-white/60">Every 2 hours</span>
                                    </div>
                                </div>
                                <span className="text-emerald-300 font-medium">Active</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto">
                    <Bottomnav />
                </div>
            </div>
        </div>
    );
}