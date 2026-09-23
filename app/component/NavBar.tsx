"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../app/assets/logo.png";

const NavBar = () => {
    return (
        <nav className="w-full border-b border-[#494b5a] bg-[#090a0d]">
            <div className="mx-auto flex h-[70px] items-center justify-between px-5">

                {/* ================= LOGO ================= */}
                <Link
                    href="/"
                    className="flex items-center gap-2.5"
                >
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


                {/* ================= CENTER MENU ================= */}
                <nav className="hidden items-center gap-2 md:flex">

                    <Link
                        href="/workouts"
                        className="rounded-full bg-[#182400] px-5 py-2 text-[12px] font-semibold text-[#baff00] transition hover:bg-[#233300]"
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className="rounded-full px-5 py-2 text-[12px] font-medium text-[#8b8d94] transition hover:text-white"
                    >
                        My Plan
                    </Link>

                </nav>


                {/* ================= RIGHT SIDE ================= */}
                <div className="hidden items-center gap-7 text-[12px] md:flex">

                    {/* Plan */}
                    <Link
                        href="/plan"
                        className="flex items-center gap-2 text-[#a7a9b0] transition hover:text-white"
                    >
                        <span>Plan</span>

                        <span className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-[#baff00] px-1 text-[10px] font-bold text-black">
                            0
                        </span>
                    </Link>


                    {/* Saved */}
                    <Link
                        href="/saved"
                        className="flex items-center gap-2 text-[#a7a9b0] transition hover:text-white"
                    >
                        <span>Saved</span>

                        <span className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full border border-[#303238] px-1 text-[10px] text-[#8b8d94]">
                            0
                        </span>
                    </Link>

                </div>


                {/* ================= MOBILE MENU ================= */}
                <div className="dropdown dropdown-end md:hidden">

                    <button
                        tabIndex={0}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#25262b] bg-[#101114] text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    <ul
                        tabIndex={0}
                        className="menu dropdown-content z-[100] mt-3 w-48 rounded-xl border border-[#25262b] bg-[#0d0e11] p-2 shadow-2xl"
                    >
                        <li>
                            <Link
                                href="/workouts"
                                className="text-[#baff00]"
                            >
                                Workouts
                            </Link>
                        </li>

                        <li>
                            <Link href="/my-plan">
                                My Plan
                            </Link>
                        </li>

                        <li>
                            <Link href="/plan">
                                Plan
                                <span className="ml-auto rounded-full bg-[#baff00] px-2 py-0.5 text-[10px] text-black">
                                    0
                                </span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/saved">
                                Saved
                                <span className="ml-auto rounded-full border border-[#303238] px-2 py-0.5 text-[10px]">
                                    0
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