const Summaryscore = ({ bg, icon, color, category, score, bgHsl }: { bg: string, icon: string, color: string, category: string, score: number, bgHsl: string }) => {
    //bg classes are not working properly so I added inline fallback bg
    return (
        <section className={`flex justify-between p-5 rounded-lg bg-${bg} `} style={{ background: bgHsl }}>
            <div className="flex items-center justify-center gap-4">
                <img src={`${icon}`} alt="svg" />
                <p className={`text-${color}`}>{category}</p>
            </div>
            <p>
                <span className="text-Dark-gray-blue font-semibold">{score} </span>/<span className="text-gray-400"> 100</span>
            </p>
        </section>
    )
}

export default Summaryscore
