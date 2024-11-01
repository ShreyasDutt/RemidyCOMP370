import React from 'react';
import {FaPills, FaHeartbeat, FaRunning, FaBell, FaClock, FaCalendarAlt} from 'react-icons/fa';
import Bottomnav from "@/app/Components/Bottomnav";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {UserButton} from "@clerk/nextjs";

const HealthMetricCard = ({ icon: Icon, label, value, color }) => (
    <div className={`transform transition-all duration-300 hover:scale-105 bg-white p-4 rounded-xl shadow-md border-l-4 ${color}`}>
        <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-lg ${color.replace('border', 'bg').replace('-500', '-100')}`}>
                <Icon className={`text-xl ${color.replace('border', 'text')}`} />
            </div>
            <div>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="font-semibold text-gray-800">{value}</p>
            </div>
        </div>
    </div>
);

const MedicineCard = ({ name, icon: Icon, color, bgColor, price }) => (
    <div className={`transform transition-all duration-300 hover:scale-105 ${bgColor} p-6 rounded-xl shadow-lg`}>
        <div className="flex flex-col items-center">
            <Icon className={`${color} text-4xl mb-3`} />
            <p className="text-gray-800 font-medium mb-2">{name}</p>
            <p className="text-sm text-gray-600 mb-3">{price}</p>
            <button className={`${color.replace('text', 'bg')} text-white px-4 py-2 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                Buy Now
            </button>
        </div>
    </div>
);

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            <div className="mx-auto p-6">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">Health Dashboard</h1>
                        <p className="text-gray-500">Welcome back! Let&apos;s check your health</p>
                    </div>
                    <UserButton/>
                </div>

                {/* Health Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <HealthMetricCard
                        icon={FaHeartbeat}
                        label="Heart Rate"
                        value="72 BPM"
                        color="border-red-500"
                    />
                    <HealthMetricCard
                        icon={FaRunning}
                        label="Daily Steps"
                        value="8,459"
                        color="border-green-500"
                    />
                </div>

                {/* Reminder Card */}
                <div
                    className="mb-8 transform transition-all duration-300 hover:scale-102 bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="relative">
                        {/* Top gradient bar */}
                        <div className="h-2 bg-gradient-to-r from-violet-500 to-blue-500"/>

                        <div className="p-6 space-y-6">
                            {/* Header with status and countdown */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="h-2.5 w-2.5 bg-violet-500 rounded-full animate-pulse"/>
                                    <span
                                        className="text-violet-600 font-medium text-sm px-3 py-1 bg-violet-50 rounded-full">
              Upcoming Check-up
            </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaBell className="text-violet-400"/>
                                    <span className="text-sm text-violet-600 font-medium">2 days left</span>
                                </div>
                            </div>

                            {/* Main content */}
                            <div className="flex items-start justify-between">
                                <div className="space-y-4">
                                    {/* Title */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">Blood Test Due</h3>
                                        <p className="text-gray-500 text-sm mt-1">Regular Health Check-up</p>
                                    </div>

                                    {/* Date and time */}
                                    <div className="flex items-center space-x-6">
                                        <div className="flex items-center space-x-2">
                                            <div className="p-2 bg-violet-50 rounded-lg">
                                                <FaCalendarAlt className="text-violet-500"/>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-600">Date</p>
                                                <p className="text-sm text-gray-800">2 March</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <div className="p-2 bg-blue-50 rounded-lg">
                                                <FaClock className="text-blue-500"/>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-600">Time</p>
                                                <p className="text-sm text-gray-800">08:00 am</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Priority indicator */}
                                <div
                                    className="bg-gradient-to-br from-violet-600 to-blue-600 text-white h-14 w-14 rounded-2xl flex items-center justify-center font-bold shadow-lg">
                                    2d
                                </div>
                            </div>

                            {/* Action buttons */}
                            <div className="flex items-center space-x-3 pt-2">
                                <button
                                    className="flex-1 px-4 py-2 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-colors duration-300 font-medium">
                                    Confirm
                                </button>
                                <button
                                    className="flex-1 px-4 py-2 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors duration-300 font-medium">
                                    Reschedule
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Medicines Section */}
                <div className="space-y-6 mb-20">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-gray-800">Medicines</h2>
                        <Link href={"/shop"} className="text-blue-600 hover:text-blue-700 transition-colors">View All</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <MedicineCard
                            name="Ibuprofen"
                            icon={FaPills}
                            color="text-blue-600"
                            bgColor="bg-blue-50"
                            price="$12.99"
                        />
                        <MedicineCard
                            name="Paracetamol"
                            icon={FaPills}
                            color="text-pink-500"
                            bgColor="bg-pink-50"
                            price="$9.99"
                        />
                    </div>
                </div>


                <div className="mt-8">
                    <Bottomnav/>
                </div>
            </div>
        </div>
    );
}
