'use client'
import React from 'react'

const Heromain = () => {
    const ref=useRef<HTMLDivElement>(null)
    const [areaRatio, setAreaRatio] = useState<number | null>(null); // State to hold the area ratio

    useEffect(() => {
        const widthElement = ref.current;
        if (widthElement) {
            const offsetWidth = widthElement.offsetWidth;
            const offsetHeight = widthElement.offsetHeight;
            const refArea = offsetWidth * offsetHeight; // Area of the ref element

            // Calculate the area of the specified box
            const boxWidth = 44; // Width in pixels (adjust based on your responsive design)
            const boxHeight = 44; // Height in pixels (adjust based on your responsive design)
            const boxArea = boxWidth * boxHeight; // Area of the box

            // Calculate the area ratio
            const ratio = refArea / boxArea;
            setAreaRatio(ratio); // Set the area ratio in state
        }
    }, []);
    // console.log(areaRatio);
    // console.log('shiva');
    
    
    return (
        <div ref={ref} className='relative  pb-10'>
            <div className="absolute z-0 h-full w-[110dvw]">
                <div className="h-[80%] w-full overflow-hidden">
                    <div className="flex flex-wrap !gap-0">
                        {[...Array(Math.floor(areaRatio))].map((_, index) => (
                           <div className="absolute z-0 h-full w-[110dvw]">
                               <div className="h-[80%] w-full overflow-hidden">
                                   <div className="flex flex-wrap !gap-0">
                                       {Array.from({ length: Math.floor(areaRatio) }).map((_, index) => (
                                           <div key={index} className="flex-center h-[44px] w-[44px] border-[.5px] border-[#eaeaea] sm:h-[54px] sm:w-[54px] lg:h-[64px] lg:w-[64px] xl4:h-[74px] xl4:w-[74px]">
                                               <div className="hidden h-full w-full bg-[#EBFAE2]"></div>
                                           </div>
                                       ))}
                                   </div>
                               </div>
                           </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative z-10">
                <h1 className='text-[#FB9D46] font-bold text-[48px] leading-[1.2] mx-auto text-center'>Hey there, future tech superstar! 👋</h1>
                <p className='text-[24px] tracking-[.5px] leading-[1.4] text-center mx-auto mt-10 text-[#462B34] max-w-[606px]'>Want to see what companies are actually paying
                    top dollars for ?</p>
            </div>
        </div>
    )
}

export default Heromain
