import Image from "next/image";
import { iData } from "../type";

const LibCard = (post: iData) => {
    return (
        <div className="w-full max-w-[532px] overflow-hidden rounded-lg border border-[#24262d] bg-[#15171c]">

            {/* ================= IMAGE ================= */}
            <div className="relative h-[290px] w-full">
                <Image
                    src={post.image}
                    alt={post.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 532px"
                />
            </div>

            {/* ================= CARD CONTENT ================= */}
            <div className="px-8 py-8">

                {/* ================= MUSCLE GROUPS ================= */}
                <div className="mb-5 flex flex-wrap gap-2.5">
                    {post.muscleGroups.slice(0, 2).map((muscle) => (
                        <span
                            key={muscle}
                            className="
                rounded-full
                bg-[#baff00]
                px-[14px]
                py-[6px]
                font-[family-name:var(--font-inter)]
                text-[14px]
                font-bold
                uppercase
                leading-none
                tracking-[0.5px]
                text-black
              "
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* ================= EXERCISE NAME ================= */}
                <h2
                    className="
            font-[family-name:var(--font-oswald)]
            text-[27px]
            font-bold
            uppercase
            leading-[1.1]
            tracking-[0.2px]
            text-white
          "
                >
                    {post.name}
                </h2>

                {/* ================= EQUIPMENT ================= */}
                <p
                    className="
            mt-2
            font-[family-name:var(--font-inter)]
            text-[16px]
            font-normal
            leading-6
            text-[#9a9da6]
          "
                >
                    {post.equipment}
                </p>

                {/* ================= DIVIDER ================= */}
                <div className="my-5 h-px w-full bg-[#25282e]" />

                {/* ================= STATS ================= */}
                <div className="flex items-center gap-6">

                    {/* Duration */}
                    <div className="flex items-center gap-2">
                        <span className="text-[19px] text-[#9a9da6]">
                            ◷
                        </span>

                        <span
                            className="
                font-[family-name:var(--font-inter)]
                text-[15px]
                text-[#9a9da6]
              "
                        >
                            {post.duration} min
                        </span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-2">
                        <span className="text-[18px] text-[#9a9da6]">
                            ♥
                        </span>

                        <span
                            className="
                font-[family-name:var(--font-inter)]
                text-[15px]
                text-[#9a9da6]
              "
                        >
                            {post.caloriesBurned} kcal
                        </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <span className="text-[19px] text-[#9a9da6]">
                            ☆
                        </span>

                        <span
                            className="
                font-[family-name:var(--font-inter)]
                text-[15px]
                text-[#9a9da6]
              "
                        >
                            {post.rating}
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LibCard;