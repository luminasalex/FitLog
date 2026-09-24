const Loading = () => {
    return (
        <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
                <div
                    key={index}
                    className="mx-auto w-full max-w-[532px] overflow-hidden rounded-lg border border-[#24262d] bg-[#15171c] animate-pulse"
                >

                    <div className="h-[290px] w-full bg-[#25282e]" />


                    <div className="px-8 py-8">

                        <div className="mb-5 flex gap-2.5">
                            <div className="h-[26px] w-[90px] rounded-full bg-[#25282e]" />
                            <div className="h-[26px] w-[105px] rounded-full bg-[#25282e]" />
                        </div>


                        <div className="h-[30px] w-[75%] rounded bg-[#25282e]" />


                        <div className="mt-3 h-[20px] w-[45%] rounded bg-[#25282e]" />


                        <div className="my-5 h-px w-full bg-[#25282e]" />


                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <div className="h-[19px] w-[19px] rounded-full bg-[#25282e]" />
                                <div className="h-[18px] w-[65px] rounded bg-[#25282e]" />
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="h-[18px] w-[18px] rounded-full bg-[#25282e]" />
                                <div className="h-[18px] w-[75px] rounded bg-[#25282e]" />
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="h-[19px] w-[19px] rounded-full bg-[#25282e]" />
                                <div className="h-[18px] w-[30px] rounded bg-[#25282e]" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Loading;