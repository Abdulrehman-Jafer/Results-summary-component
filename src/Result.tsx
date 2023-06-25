
const Result = () => {
    return (
        <div className="bg-gradient-to-bl from-Light-slate-blue to-Light-royal-blue w-full md:rounded-3xl flex flex-col justify-center items-center gap-[2rem] py-[2rem] md:py-[4rem] px-[2rem]">
            <h4 className="text-Light-lavender text-2xl pt-[8rem] md:pt-0">Your Result</h4>
            <div className=" w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] rounded-full bg-gradient-to-b from-Violet-blue from-10% to-Persian-blue flex justify-center items-center flex-col">
                <h1 className="text-[5rem] font-extrabold text-white">76</h1>
                <p className="text-gray-400">of 100</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="text-white text-[2rem]">Great</h2>
                <p className="text-Light-lavender max-w-[240px] text-center">You scored higher than 65% of the people who have taken these tests.</p>
            </div>
        </div>
    )
}

export default Result
