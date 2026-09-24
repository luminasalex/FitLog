'use client';

import { useContext } from "react";
import { UserContext } from "../../User Context/UserContext";
import { toast } from "react-toastify";
import { iData } from "../../type";

export const ActionButtons = ({ post }: { post: iData }) => {
    const context = useContext(UserContext);

    if (!context) return null;

    const { setMyPlan, setSaved, myPlan, saved } = context;

    const handleAddToPlan = () => {
        // Prevent duplicates if you want (optional), but let's just add it
        const isAlreadyAdded = myPlan.some(item => item.id === post.id);
        if (isAlreadyAdded) {
            toast.warning(`${post.name} is already in your plan!`);
            return;
        }
        setMyPlan(prev => [...prev, post]);
        toast.success(`Added ${post.name} to today's plan!`);
    };

    const handleSaveForLater = () => {
        const isAlreadySaved = saved.some(item => item.id === post.id);
        if (isAlreadySaved) {
            toast.warning(`${post.name} is already saved!`);
            return;
        }
        setSaved(prev => [...prev, post]);
        toast.success(`Saved ${post.name} for later!`);
    };

    return (
        <div className="mt-auto flex flex-wrap gap-4 pt-10">
            <button
                type="button"
                onClick={handleAddToPlan}
                className="rounded-xl bg-lime-400 px-7 py-3.5 text-sm font-bold text-black transition hover:bg-lime-300"
            >
                Add to today&apos;s plan
            </button>

            <button
                type="button"
                onClick={handleSaveForLater}
                className="rounded-xl border border-[#30343d] bg-[#15181e] px-7 py-3.5 text-sm font-medium text-gray-300 transition hover:bg-[#1c2027]"
            >
                ♡ Save for later
            </button>
        </div>
    );
}
