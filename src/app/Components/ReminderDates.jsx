"use client"
import React, { useState } from 'react';

export default function ReminderDates() {
    const [activeDay, setActiveDay] = useState(0);

    const daysOfWeek = [
        { day: "Monday", date: "12", pills: 3 },
        { day: "Tuesday", date: "13", pills: 2 },
        { day: "Wednesday", date: "14", pills: 4 },
        { day: "Thursday", date: "15", pills: 1 },
        { day: "Friday", date: "16", pills: 3 },
        { day: "Saturday", date: "17", pills: 2 },
        { day: "Sunday", date: "18", pills: 0 }
    ];

    return (
        <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide touch-pan-x scroll-container">
            <div className="flex space-x-4 p-4">
                {daysOfWeek.map((dayInfo, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveDay(index)}
                        className={`
                            group relative min-w-[100px] p-4 rounded-2xl flex-shrink-0
                            transform transition-all duration-300
                            ${activeDay === index
                            ? 'bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg scale-105'
                            : 'bg-white hover:bg-gray-50'
                        }
                        `}
                    >
                        {/* Pill count indicator */}
                        {dayInfo.pills > 0 && (
                            <div className={`
                                absolute -top-2 -right-2 w-6 h-6
                                flex items-center justify-center
                                rounded-full text-xs font-bold
                                ${activeDay === index
                                ? 'bg-pink-500 text-white'
                                : 'bg-indigo-100 text-indigo-600'
                            }
                            `}>
                                {dayInfo.pills}
                            </div>
                        )}

                        {/* Day content */}
                        <div className="flex flex-col items-center space-y-2">
                            <p className={`
                                text-sm font-medium
                                ${activeDay === index ? 'text-white/70' : 'text-gray-500'}
                            `}>
                                {dayInfo.day.slice(0, 3)}
                            </p>
                            <p className={`
                                text-2xl font-bold
                                ${activeDay === index ? 'text-white' : 'text-gray-800'}
                            `}>
                                {dayInfo.date}
                            </p>

                            {/* Active day indicator dot */}
                            <div className={`
                                w-2 h-2 rounded-full transition-all duration-300
                                ${activeDay === index
                                ? 'bg-white scale-100'
                                : 'bg-transparent scale-0'
                            }
                            `} />
                        </div>

                        {/* Hover border effect */}
                        <div className={`
                            absolute inset-0 rounded-2xl border-2 transition-colors duration-300
                            ${activeDay === index
                            ? 'border-white/20'
                            : 'border-transparent group-hover:border-indigo-100'
                        }
                        `} />
                    </button>
                ))}
            </div>
        </div>
    );
}