import Link from "next/link";
import { toast } from "react-toastify";
import { iData } from "../type";
import Image from "next/image";

const PlanCard = ({ post, onRemove }: { post: iData; onRemove?: () => void }) => {
    return (
        <div className="flex w-full items-center gap-4 rounded-[16px] border border-[#292d35] bg-[#181b21] p-4">

            <div className="relative h-[96px] w-[145px] shrink-0 overflow-hidden rounded-[15px]">
                <Image
                    src={post.image}
                    alt={post.name}
                    fill
                    sizes="145px"
                    className="object-cover"
                />
            </div>

            {/* ================= DETAILS ================= */}
            <div className="min-w-0 flex-1">

                <h2 className="truncate text-[20px] font-extrabold uppercase leading-tight text-white">
                    {post.name}
                </h2>

                <p className="mt-1 text-[14px] text-[#a0a4ae]">
                    {post.equipment}
                </p>
                <div className="mt-2 flex items-center gap-4 text-[13px]">
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


            {/* ================= Attrubute ================= */}



            <div className="flex shrink-0 items-center gap-2">

                {/* View Details */}
                <Link href={`/component/TheLibrary/${post.id}`} className="flex h-[34px] items-center justify-center rounded-full border border-white px-4 text-[12px] font-semibold text-white transition hover:bg-white hover:text-black">
                    View Details
                </Link>

                {/* Mark Done */}
                <button type="button" onClick={() => {
                    toast.success(`Marked ${post.name} as Done!`);
                    if (onRemove) onRemove();
                }} className="flex h-[34px] items-center gap-2 rounded-full bg-[#baff00] px-4 text-[12px] font-semibold text-black transition hover:bg-[#c8ff32]">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="m5 12 4 4L19 6" />
                    </svg>
                    Mark as Done
                </button>

                {/* Remove */}
                <button type="button" aria-label="Remove workout" onClick={() => {
                    toast.error(`Removed ${post.name}`);
                    if (onRemove) onRemove();
                }} className="ml-2 flex h-8 w-8 items-center justify-center rounded-full text-[20px] text-[#b4b7bf] transition hover:bg-[#292d35] hover:text-white">
                    X
                </button>
            </div>
        </div>
    );
};

export default PlanCard;