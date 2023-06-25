import Summaryscore from "./Summary-score"
import data from "./resources/data.json"
const Summary = () => {
    return (
        <div className="w-full py-[2rem] md:py-[4rem] px-[2rem] flex flex-col gap-[2rem]">
            <div className="text-[1.2rem] font-bold">
                Summary
            </div>
            <div className="flex flex-col gap-[1rem]">
                {data.map(({ bg, category, color, icon, score }, i) => <Summaryscore key={i} bg={bg} category={category} color={color} icon={icon} score={score} />)}
            </div>
            <button className="bg-Dark-gray-blue text-[18px] text-white rounded-[5rem] p-[1rem] hover:bg-black">Continue</button>
        </div>
    )
}

export default Summary
