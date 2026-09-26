import Link from "next/link";
import { toast } from "react-toastify";
import { iData } from "../type";
import Image from "next/image";

const PlanCard = ({ post, onRemove, showMarkDone = true }: { post: iData; onRemove?: () => void; showMarkDone?: boolean }) => {
    return (
        <div className="flex w-full flex-col gap-4 rounded-[16px] border border-[#292d35] bg-[#181b21] p-4 md:flex-row md:items-center">

            {/* ================= IMAGE ================= */}
            <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-[15px] sm:h-[200px] md:h-[96px] md:w-[145px]">
                <Image
                    src={post.image}
                    alt={post.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 145px"
                    className="object-cover"
                />
            </div>

            {/* ================= DETAILS ================= */}
            <div className="min-w-0 flex-1">
                <h2 className="truncate text-[18px] font-extrabold uppercase leading-tight text-white sm:text-[20px]">
                    {post.name}
                </h2>

                <p className="mt-1 text-[13px] text-[#a0a4ae] sm:text-[14px]">
                    {post.equipment}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px]">
                    <span className="flex items-center gap-1.5 text-white">
                        <svg className="h-[16px] w-[16px] text-[#baff00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 2" />
                        </svg>
                        {post.duration} min
                    </span>

                    <span className="flex items-center gap-1.5 text-white">
                        <svg className="h-[16px] w-[16px] text-[#baff00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22c4.5 0 8-3.1 8-7.5 0-3.2-1.8-5.6-4.3-7.5.1 2-1 3.5-2.2 4.2.1-3.7-1.7-6.8-4.2-9.2.1 4-4.5 6.7-4.5 10.7C4.8 18.7 8 22 12 22Z" />
                        </svg>
                        {post.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1.5 text-white">
                        <svg className="h-[16px] w-[16px] text-[#baff00]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="m12 2 2.9 6 6.6.9-4.8 4.7 1.1 6.6-5.8-3.1-5.8 3.1 1.1-6.6-4.8-4.7 6.6-.9L12 2Z" />
                        </svg>
                        {post.rating}
                    </span>
                </div>
            </div>

            {/* ================= BUTTONS ================= */}
            {/* Mobile: full width row wrapping below details. Desktop: right side. */}
            <div className="flex w-full shrink-0 flex-wrap items-center gap-2 md:w-auto md:flex-nowrap">
                {/* View Details */}
                <Link
                    href={`/component/TheLibrary/${post.id}`}
                    className="flex h-[34px] flex-1 items-center justify-center rounded-full border border-white px-4 text-[12px] font-semibold text-white transition hover:bg-white hover:text-black md:flex-none"
                >
                    View Details
                </Link>

                {/* Mark Done */}
                {showMarkDone && (
                    <button
                        type="button"
                        onClick={() => {
                            toast.success(`Marked ${post.name} as Done!`);
                            if (onRemove) onRemove();
                        }}
                        className="flex h-[34px] flex-1 items-center justify-center gap-2 rounded-full bg-[#baff00] px-4 text-[12px] font-semibold text-black transition hover:bg-[#c8ff32] md:flex-none"
                    >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="m5 12 4 4L19 6" />
                        </svg>
                        Mark as Done
                    </button>
                )}

                {/* Remove */}
                <button
                    type="button"
                    aria-label="Remove workout"
                    onClick={() => {
                        toast.error(`Removed ${post.name}`);
                        if (onRemove) onRemove();
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-[20px] text-[#b4b7bf] transition hover:bg-[#292d35] hover:text-white md:ml-2"
                >
                    ❌
                </button>
            </div>
        </div>
    );
};

export default PlanCard;