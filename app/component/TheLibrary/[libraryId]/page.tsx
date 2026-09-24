import type { iData } from "@/app/component/type";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ActionButtons } from "./ActionButtons";


const detailsPage = async ({ params }: { params: Promise<{ libraryId: string }> }) => {
    const { libraryId } = await params;

    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${libraryId}`);

    if (!res.ok) {
        notFound();
    }
    const post: iData = await res.json();

    return (
        <div className="w-full min-h-screen bg-[#0b0d11] p-4 sm:p-6 lg:p-8">
            <div className="mx-auto w-full overflow-hidden rounded-2xl border border-[#252830] bg-[#0f1115] p-6 text-white shadow-2xl lg:p-8">

                <div className="grid min-h-[calc(100vh-64px)] grid-cols-1 gap-10 lg:grid-cols-[46%_1fr] lg:gap-12">

                    {/* ================= IMAGE ================= */}
                    <div className="relative min-h-[550px] w-full overflow-hidden rounded-2xl lg:min-h-full">
                        <Image
                            src={post.image}
                            alt={post.name}
                            fill
                            sizes="(max-width: 1024px) 100vw, 46vw"
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* ================= DETAILS ================= */}
                    <div className="flex flex-col py-2 lg:py-5">

                        {/* TITLE */}
                        <div>
                            <h1 className="text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                                {post.name}
                            </h1>

                            <p className="mt-5 max-w-4xl text-base leading-7 text-gray-400 lg:text-lg lg:leading-8">
                                {post.description}
                            </p>
                        </div>

                        {/* MUSCLE GROUPS */}
                        <div className="mt-6 flex flex-wrap gap-3">
                            {post.muscleGroups?.map((muscle, index) => (
                                <span
                                    key={index}
                                    className="rounded-full bg-lime-400 px-5 py-2.5 text-sm font-bold uppercase text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* ================= STATS ================= */}
                        <div className="mt-8 overflow-hidden rounded-2xl border border-[#292d36] bg-[#15181e]">

                            <div className="divide-y divide-[#292d36]">

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

                        {/* ================= INSTRUCTIONS ================= */}
                        <div className="mt-8">

                            <h2 className="text-lg font-bold uppercase tracking-wide">
                                Instructions
                            </h2>

                            <ol className="mt-5 space-y-4 pl-7 text-sm leading-7 text-gray-400 lg:text-base lg:leading-8">
                                {post.instructions?.map((instruction, index) => (
                                    <li key={index}>
                                        {instruction}
                                    </li>
                                ))}
                            </ol>

                        </div>

                        {/* ================= BUTTONS ================= */}
                        <ActionButtons post={post} />

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