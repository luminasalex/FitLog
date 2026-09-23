import Image from "next/image";
import BannerImage from "../../app/assets/banner.png";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Hero = () => {
    return (
        <section className="bg-[#090a0d] px-5 py-6">
            <div className="mx-auto flex min-h-[232px] justify-between overflow-hidden rounded-lg border border-[#24262d] bg-[#15171c] px-7 py-8 sm:px-10 lg:px-12">

                <div className="z-10 max-w-[520px]">


                    <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.08em] text-[#baff00]">
                        Workout Library
                    </p>


                    <h1 className="max-w-[500px] text-4xl font-bold uppercase leading-[0.92] tracking-tight text-white sm:text-5xl">
                        Train with intent. Log
                        <br />
                        every set.
                    </h1>

                    <p className={`${inter.className} mt-4 max-w-[440px] text-[10px] leading-[1.6] text-[#858890] sm:text-[11px]`}>
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <button className="mt-4 rounded bg-[#baff00] px-4 py-2 text-[9px] font-bold uppercase text-black transition duration-200 hover:bg-[#c9ff33] hover:shadow-[0_0_18px_rgba(186,255,0,0.2)]">
                        Browse Workouts
                    </button>
                </div>



                <div className="relative hidden h-[210px] w-[260px] shrink-0 sm:block">

                    <Image
                        src={BannerImage}
                        alt="Workout illustration"
                        fill
                        priority
                        className="object-contain object-center"
                    />

                </div>

            </div>
        </section>
    );
};

export default Hero;