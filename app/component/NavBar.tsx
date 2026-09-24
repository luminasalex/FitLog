"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "./User Context/UserContext";
import logo from "../../app/assets/logo.png";

const NavBar = () => {
    const pathname = usePathname();
    const context = useContext(UserContext);
    const myPlanCount = context?.myPlan?.length || 0;
    const savedCount = context?.saved?.length || 0;

    // ================= HOVEr CLASS =================
    const navClass = (path: string) => {
        const isActive = pathname === path;

        return isActive
            ? "rounded-full bg-[#182400] px-5 py-2 text-[12px] font-semibold text-[#baff00]"
            : "rounded-full px-5 py-2 text-[12px] font-medium text-[#8b8d94] transition hover:bg-[#182400] hover:text-[#baff00]";
    };

    return (
        <nav className="w-full border-b border-[#2f3036] bg-[#090a0d]">
            <div className="mx-auto flex h-[70px] items-center justify-between px-5">

                <Link href="/" className="flex items-center gap-2.5">
                    <Image
                        src={logo}
                        alt="FITLOG"
                        width={27}
                        height={27}
                        className="h-[27px] w-[27px] object-contain"
                    />

                    <span className="text-[17px] font-extrabold tracking-wide text-white">
                        FITLOG
                    </span>
                </Link>

                {/* ================= DESKTOP NAV ================= */}
                <nav className="hidden items-center gap-2 md:flex">

                    <Link href="/" className={navClass("/")}>
                        Workouts
                    </Link>

                    <Link href="/component/my-plan" className={navClass("/component/my-plan")}>
                        My Plan
                    </Link>

                </nav>

                {/* ================= RIGHT SIDE ================= */}
                <div className="hidden items-center gap-7 text-[12px] md:flex">

                    <Link href="/component/my-plan" className="group flex items-center gap-2 text-[#a7a9b0] transition hover:text-white">
                        <span>Plan</span>

                        <span className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-[#baff00] px-1 text-[10px] font-bold text-black transition group-hover:scale-105">
                            {myPlanCount}
                        </span>
                    </Link>

                    <Link href="/component/my-plan" className="group flex items-center gap-2 text-[#a7a9b0] transition hover:text-white">
                        <span>Saved</span>

                        <span className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full border border-[#303238] px-1 text-[10px] text-[#8b8d94] transition group-hover:border-[#baff00] group-hover:text-[#baff00]">
                            {savedCount}
                        </span>
                    </Link>

                </div>

                {/* ================= MOBILE MENU ================= */}
                <div className="dropdown dropdown-end md:hidden">

                    <button tabIndex={0} className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#25262b] bg-[#101114] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    <ul tabIndex={0} className="menu dropdown-content z-[100] mt-3 w-48 rounded-xl border border-[#25262b] bg-[#0d0e11] p-2 shadow-2xl">
                        <li>
                            <Link href="/" className={pathname === "/" ? "text-[#baff00]" : "text-[#8b8d94] hover:text-[#baff00]"}>Workouts</Link>
                        </li>


                        <li>
                            <Link href="/component/my-plan" className={pathname === "/component/my-plan" ? "text-[#baff00]" : "text-[#8b8d94] hover:text-[#baff00]"}>
                                My Plan
                            </Link>
                        </li>

                        <li>
                            <Link href="/component/my-plan">
                                Plan
                                <span className="ml-auto rounded-full bg-[#baff00] px-2 py-0.5 text-[10px] text-black">
                                    {myPlanCount}
                                </span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/component/my-plan">
                                Saved
                                <span className="ml-auto rounded-full border border-[#303238] px-2 py-0.5 text-[10px]">
                                    {savedCount}
                                </span>
                            </Link>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
    );
};

export default NavBar;