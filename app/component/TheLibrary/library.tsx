import { Suspense } from "react";
import { iData } from "../type";
import Loading from "./loading";
import LibCard from "./libCard";

const Library = async () => {
    const data = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const posts: iData[] = await data.json();

    return (
        <div className="min-h-screen bg-[#0b0c0f]">

            {/* ================= HEaD ================= */}
            <div className="min-h-[78px] w-full border-l-4 border-[#15171b] bg-[#0b0c0f] px-[14px] py-[22px]">
                <h1 className="font-[family-name:var(--font-oswald)] text-[20px] font-bold uppercase leading-[20px] text-white">
                    THE LIBRARY
                </h1>

                <p className="font-[family-name:var(--font-inter)] text-[9px] leading-[12px] text-[#777b84]">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            {/* ================= CARD================= */}
            <Suspense fallback={<Loading />}>
                <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <LibCard key={post.id} {...post} />
                    ))}
                </div>
            </Suspense>
        </div>
    );
};

export default Library;