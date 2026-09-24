'use client';

import { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "../User Context/UserContext";
import PlanCard from "./planCard";

const MyPlan = () => {
    const context = useContext(UserContext);
    const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan');
    const [sortBy, setSortBy] = useState<'duration' | 'calories' | 'rating'>('duration');

    if (!context) return null;

    const { myPlan, saved } = context;

    const activeList = activeTab === 'plan' ? myPlan : saved;

    // Sort list`sortBy`
    const sortedList = [...activeList].sort((a, b) => {
        if (sortBy === 'duration') return b.duration - a.duration;
        if (sortBy === 'rating') return b.rating - a.rating;
        return b.caloriesBurned - a.caloriesBurned;
    });

    const totalExercises = activeList.length;
    const totalMinutes = activeList.reduce((acc, curr) => acc + curr.duration, 0);
    const totalCalories = activeList.reduce((acc, curr) => acc + curr.caloriesBurned, 0);

    return (
        <main className="min-h-screen bg-[#0d0f13] px-5 py-9 text-white">

            <div className="w-full">

                {/* ================= HEADER ================= */}
                <div className="mb-6">
                    <h1 className="text-[26px] font-extrabold uppercase tracking-[-0.5px]">
                        MY PLAN
                    </h1>

                    <p className="mt-1 text-[13px] text-[#858b99]">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* ================= STATS CARD ================= */}
                <div className="mb-[30px] w-full rounded-[16px] border border-[#242832] bg-[#13161c] px-5 py-[30px]">
                    <div className="grid grid-cols-1 md:grid-cols-3">



                        <div className="px-1 md:border-r md:border-[#20242c] md:pr-7">
                            <p className="mb-1 text-[12px] text-[#858b99]">
                                Exercises
                            </p>

                            <p className="text-[38px] font-extrabold leading-none text-[#baff00]">
                                {totalExercises}
                            </p>
                        </div>




                        {/* Minits */}


                        <div className="mt-6 px-1 md:mt-0 md:px-7 md:border-r md:border-[#20242c]">
                            <p className="mb-1 text-[12px] text-[#858b99]">
                                Minutes
                            </p>

                            <p className="text-[38px] font-extrabold leading-none">
                                {totalMinutes}
                            </p>
                        </div>


                        {/* Calori */}

                        <div className="mt-6 px-1 md:mt-0 md:pl-7">
                            <p className="mb-1 text-[12px] text-[#858b99]">
                                Calories
                            </p>

                            <p className="text-[38px] font-extrabold leading-none">
                                {totalCalories}
                            </p>
                        </div>

                    </div>
                </div>


                <div className="mb-[22px] flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                    {/* Tabs */}
                    <div className="flex h-[38px] w-fit items-center rounded-[11px] border border-[#242832] bg-[#14171d] p-[3px]">

                        <button onClick={() => setActiveTab('plan')} className={`h-[30px] rounded-[8px] px-4 text-[12px] font-medium transition ${activeTab === 'plan' ? 'border border-[#30353e] bg-[#20242c] font-semibold text-white shadow-sm' : 'text-[#858b99] hover:text-white'}`}>
                            Today&apos;s Plan
                        </button>

                        <button onClick={() => setActiveTab('saved')} className={`h-[30px] min-w-[100px] rounded-[8px] px-4 text-[12px] font-medium transition ${activeTab === 'saved' ? 'border border-[#30353e] bg-[#20242c] font-semibold text-white shadow-sm' : 'text-[#858b99] hover:text-white'}`}>
                            Saved
                        </button>
                    </div>

                    {/* Sort */}
                    <div className="flex items-center gap-2">
                        <span className="text-[12px] text-[#858b99]">
                            Sort By
                        </span>

                        <div className="dropdown dropdown-end">
                            <button tabIndex={0} className="flex h-[34px] items-center gap-2 rounded-[9px] border border-[#292e37] bg-[#15181e] px-3 text-[12px] text-white transition hover:border-[#3a404b]">
                                {sortBy === 'duration' ? 'Duration' : sortBy === 'calories' ? 'Calories' : 'Rating'}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-[#15181e] border border-[#292e37] rounded-box w-32 mt-2 z-[1]">
                                <li><button onClick={() => setSortBy('duration')} className="text-white hover:text-[#baff00] text-[12px]">Duration</button></li>
                                <li><button onClick={() => setSortBy('calories')} className="text-white hover:text-[#baff00] text-[12px]">Calories</button></li>
                                <li><button onClick={() => setSortBy('rating')} className="text-white hover:text-[#baff00] text-[12px]">Rating</button></li>
                            </ul>
                        </div>
                    </div>

                </div>




                {/* ================= EMPTY SEction -- content ================= */}


                {sortedList.length > 0 ? (
                    <div className="flex flex-col gap-4">
                        {sortedList.map((exercise) => (
                            <PlanCard
                                key={exercise.id}
                                post={exercise}
                                onRemove={() => {
                                    if (activeTab === 'plan') {
                                        context.setMyPlan(prev => prev.filter(p => p.id !== exercise.id));
                                    } else {
                                        context.setSaved(prev => prev.filter(p => p.id !== exercise.id));
                                    }
                                }}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex min-h-[282px] w-full items-center justify-center rounded-[15px] border border-dashed border-[#292d35] bg-[#0d0f13]">
                        <div className="flex flex-col items-center text-center">
                            <h2 className="text-[20px] font-extrabold uppercase tracking-[-0.2px]">
                                NOTHING HERE YET
                            </h2>
                            <p className="mt-1.5 text-[12px] text-[#858b99]">
                                Browse the library and add a lift to get today moving.
                            </p>
                            <Link href="/">
                                <button className="mt-5 h-[36px] rounded-full bg-[#baff00] px-6 text-[12px] font-bold text-black shadow-[0_8px_22px_rgba(186,255,0,0.15)] transition duration-200 hover:scale-[1.02] hover:bg-[#c5ff24]">
                                    Go to workouts
                                </button>
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </main>
    );
};

export default MyPlan;