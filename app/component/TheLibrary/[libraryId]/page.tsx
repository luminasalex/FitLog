import type { iData } from "@/app/component/type";
import Image from "next/image";
import { notFound } from "next/navigation";


const detailsPage = async ({ params }: { params: Promise<{ libraryId: string }> }) => {
    const { libraryId } = await params;

    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${libraryId}`);

    if (!res.ok) {
        notFound();
    }
    const post: iData = await res.json();

    return (
        <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-[#252830] bg-[#0f1115] p-4 text-white shadow-xl">
            <div className="grid grid-cols-1 gap-7 md:grid-cols-[305px_1fr]">


                <div className="relative h-[380px] w-full overflow-hidden rounded-lg md:h-full md:min-h-[380px]">
                    <Image
                        src={post.image}
                        alt={post.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 305px"
                        className="object-cover"
                    />
                </div>


                <div className="flex flex-col">


                    <div>
                        <h1 className="text-2xl font-extrabold uppercase tracking-tight">
                            {post.name}
                        </h1>

                        <p className="mt-2 max-w-xl text-xs leading-5 text-gray-400">
                            {post.description}
                        </p>
                    </div>


                    <div className="mt-3 flex flex-wrap gap-2">
                        {post.muscleGroups?.map((muscle, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-lime-400 px-3 py-1 text-[10px] font-bold uppercase text-black">
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* ================= STATS ================= */}
                    <div className="mt-4 overflow-hidden rounded-lg border border-[#252830] bg-[#15181e]">

                        <div className="divide-y divide-[#252830]">
                            <InfoRow
                                label="EQUIPMENT"
                                value={post.equipment}
                            />

                            <InfoRow
                                label="DIFFICULTY"
                                value={post.difficulty}
                            />

                            <InfoRow
                                label="SETS"
                                value={post.sets}
                            />

                            <InfoRow
                                label="REPS"
                                value={post.reps}
                            />

                            <InfoRow
                                label="DURATION"
                                value={`${post.duration} min`}
                            />

                            <InfoRow
                                label="CALORIES"
                                value={`${post.caloriesBurned} kcal`}
                            />

                            <InfoRow
                                label="RATING"
                                value={post.rating}
                            />

                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-[11px] font-bold uppercase tracking-wide">
                            Instructions
                        </h2>

                        <ol className="mt-2 space-y-2 pl-5 text-[10px] leading-4 text-gray-400">
                            {post.instructions?.map((instruction, index) => (
                                <li key={index} className="pl-1">
                                    {instruction}
                                </li>
                            ))}
                        </ol>
                    </div>


                    <div className="mt-5 flex flex-wrap gap-2">

                        <button type="button" className="rounded-md bg-lime-400 px-4 py-2 text-[10px] font-bold text-black transition hover:bg-lime-300">
                            Add to today&apos;s plan
                        </button>

                        <button type="button" className="rounded-md border border-[#30343d] bg-[#15181e] px-4 py-2 text-[10px] font-medium text-gray-300 transition hover:bg-[#1c2027]">
                            ♡ Save for later
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};


/* ================= INFO ROW ================= */

interface InfoRowProps {
    label: string;
    value: string | number;
}

const InfoRow = ({ label, value }: InfoRowProps) => {
    return (
        <div className="flex items-center justify-between px-3 py-2.5">
            <span className="text-[8px] font-medium uppercase tracking-wider text-gray-400">
                {label}
            </span>

            <span className="text-[9px] font-medium text-gray-200">
                {value}
            </span>
        </div>
    );
};


export default detailsPage;