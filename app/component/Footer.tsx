import Image from "next/image";
import logo from "../../app/assets/logo.png";

const Footer = () => {
    return (
        <footer className="w-full border-t border-[#2f3036] bg-[#090a0d]">
            <div className="mx-auto flex min-h-[62px] max-w-[1160px] items-center justify-between px-5">

                {/* Left Side */}
                <div className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="FITLOG"
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px] object-contain"
                    />

                    <span className="text-[12px] font-bold tracking-wide text-white">
                        FITLOG
                    </span>
                </div>

                {/* Right Side */}
                <p className="text-[10px] text-[#686b73]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;