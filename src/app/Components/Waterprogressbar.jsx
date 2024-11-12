"use client"

import React, { useState, useEffect } from 'react';
import { Circle } from 'rc-progress';
import { LuGlassWater } from "react-icons/lu";
import { GiWaterRecycling } from "react-icons/gi";
import { BsCup } from "react-icons/bs";
import { WiRaindrop } from "react-icons/wi";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@nextui-org/react";

function Waterprogressbar({ dailyGoal, setDailyGoal }) {
    const [water, setWater] = useState(0);
    const [currentWater, setCurrentWater] = useState(0);
    const [selectedCupSize, setSelectedCupSize] = useState(100);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    useEffect(() => {
        setWater((currentWater / dailyGoal) * 100);
    }, [dailyGoal]);

    const handleWaterAdd = () => {
        const increment = (selectedCupSize / dailyGoal) * 100;
        if (water + increment >= 100) {
            setWater(0);
            setCurrentWater(0);
        } else {
            setWater(water + increment);
            setCurrentWater(currentWater + selectedCupSize);
        }
    };

    const handleCupSelect = (size) => {
        setSelectedCupSize(size);
        onOpenChange(false);
    };

    return (
        <div className="w-full max-w-sm mx-auto p-4 md:p-6 bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-lg mb-10">
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
                    Daily Hydration
                </h2>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                    <WiRaindrop className="text-blue-500 text-xl" />
                    <p className="font-medium">
                        <span className="text-blue-600">{currentWater}</span>
                        <span className="text-gray-400"> / </span>
                        <span className="text-blue-500">{dailyGoal}</span>
                        <span className="text-sm text-gray-400"> ml</span>
                    </p>
                </div>
                <p className="text-sm text-gray-500 mt-1">Current cup size: {selectedCupSize}ml</p>
            </div>

            <div className="relative w-full aspect-square max-w-[240px] mx-auto">
                <Circle
                    percent={water}
                    strokeWidth={4}
                    strokeColor={{
                        '0%': '#60A5FA',
                        '100%': '#2563EB'
                    }}
                    trailColor="#EFF6FF"
                    trailWidth={4}
                    strokeLinecap={'round'}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="text-3xl font-bold text-blue-600">{Math.round(water)}%</p>
                    <p className="text-sm text-gray-500">completed</p>
                </div>
            </div>

            <div className="flex items-center justify-center mt-8 gap-6">
                <button
                    className="transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-3xl rounded-full text-white shadow-lg hover:shadow-blue-200"
                    onClick={handleWaterAdd}
                >
                    <LuGlassWater className="transform hover:rotate-12 transition-transform" />
                </button>

                <Button
                    onPress={onOpen}
                    className="transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-indigo-500 to-indigo-600 p-4 text-2xl rounded-full text-white shadow-lg hover:shadow-indigo-200"
                >
                    <GiWaterRecycling className="transform hover:rotate-180 transition-transform duration-500" />
                </Button>
            </div>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="bg-white/80 backdrop-blur-lg backdrop-filter"
                size="lg"
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col items-center pt-8 pb-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-3 bg-blue-100 rounded-full">
                                        <BsCup className="text-3xl text-blue-600" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                        Select Cup Size
                                    </h2>
                                </div>
                                <p className="text-gray-500 text-sm mt-2">Choose your preferred volume</p>
                            </ModalHeader>

                            <ModalBody className="px-4 md:px-6 pb-8">
                                <div className="grid grid-cols-3 gap-3 md:gap-4">
                                    {[100, 150, 200, 300, 400].map((size) => (
                                        <div
                                            key={size}
                                            onClick={() => handleCupSelect(size)}
                                            className={`group transform transition-all hover:scale-105 cursor-pointer bg-gradient-to-br ${
                                                selectedCupSize === size
                                                    ? 'from-blue-100 to-blue-200 border-blue-400'
                                                    : 'from-blue-50 to-blue-100 border-blue-200'
                                            } rounded-xl p-3 md:p-4 border shadow-sm hover:shadow-md flex flex-col items-center justify-center space-y-2`}
                                        >
                                            <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                                                <BsCup className="text-xl md:text-2xl text-blue-600" />
                                            </div>
                                            <span className="font-medium text-gray-700 text-sm md:text-base">{size} ml</span>
                                        </div>
                                    ))}

                                    <div
                                        onClick={() => {
                                            const customSize = prompt("Enter custom cup size (in ml):");
                                            if (customSize && !isNaN(customSize)) {
                                                handleCupSelect(parseInt(customSize));
                                            }
                                        }}
                                        className="group transform transition-all hover:scale-105 cursor-pointer bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-3 md:p-4 border border-indigo-200 shadow-sm hover:shadow-md flex flex-col items-center justify-center space-y-2"
                                    >
                                        <div className="p-2 bg-indigo-100 rounded-full group-hover:bg-indigo-200 transition-colors">
                                            <span className="material-icons text-xl md:text-2xl text-indigo-600">settings</span>
                                        </div>
                                        <span className="font-medium text-gray-700 text-sm md:text-base">Customize</span>
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}

export default Waterprogressbar;