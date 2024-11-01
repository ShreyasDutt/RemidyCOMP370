import Image from "next/image";
import Med from "/public/medicine1.png";
import ReminderDates from "@/app/Components/ReminderDates";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import Bottomnav from "@/app/Components/Bottomnav";
import { GiPill } from "react-icons/gi";

export default function Page() {
    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 min-h-screen">
            <div className="relative flex flex-col w-full h-screen max-w-md overflow-hidden">
                {/* Main content container with scrolling */}
                <div className="flex-1 overflow-y-auto pb-16">
                    <div className="relative z-40 h-96 bg-gradient-to-b from-white/80 to-transparent">

                        <div className="flex justify-center">
                            <Image
                                src={Med}
                                alt="Remidy Logo"
                                className="drop-shadow-xl"
                            />
                        </div>
                    </div>

                    <div className="px-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">Reminders</h1>
                        <div className="mb-8">
                            <ReminderDates/>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Today Activities</h2>

                        <div className="space-y-4 mb-20">
                            {/*Medicine Details*/}
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-white/20 p-3 rounded-xl">
                                            <GiPill className="text-4xl text-white"/>
                                        </div>
                                        <div className="flex flex-col space-y-1">
                                            <h1 className="font-semibold text-xl text-white">Ketoprofen</h1>
                                            <p className="text-sm text-white/70">After Lunch</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm text-white p-3 px-5 rounded-xl border border-white/20">
                                        <p className="font-bold text-2xl text-center">10</p>
                                        <p className="text-sm text-white/70 text-center">mg</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-rose-500 to-pink-600 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-white/20 p-3 rounded-xl">
                                            <GiPill className="text-4xl text-white"/>
                                        </div>
                                        <div className="flex flex-col space-y-1">
                                            <h1 className="font-semibold text-xl text-white">Ketoprofen</h1>
                                            <p className="text-sm text-white/70">After Lunch</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm text-white p-3 px-5 rounded-xl border border-white/20">
                                        <p className="font-bold text-2xl text-center">10</p>
                                        <p className="text-sm text-white/70 text-center">mg</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fixed bottom navigation */}
                <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto">
                    <Bottomnav/>
                </div>
            </div>
        </div>
    );
}