'use client'
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'




const FaqINdividual = ({  question, solution, indexed }) => {
    const faqanser = ['All-inclusive package', 'Save up to 50% of resource cost', 'Complete transparency on salary to candidates', 'Recruit Top 5% of Indian IT talent', 'Flexibility on contract (Min. 4 months)', 'Recognised as employee of the your company in Linkedin', 'Commitment to a Single Client Focus', 'Cool Offices Located Across India']
    // const [expanded, setExpanded] = useState<string | false>(false);

    // const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: Boolean) => {
    //     // console.log(isExpanded, panel, identity);

    //     setExpanded(isExpanded ? panel : false);
    // };
    const [open, setOpen] = useState(false)
    const [heihgtvalue, setHeightValue] = useState(0)

    const solref = useRef(null)
    const handleClick = () => {

        setOpen(!open)
        // console.log(solref.current);
        // console.log(open);

        if (solref.current) {
            solref.current.style.transitionDuration = '500ms';
            solref.current.style.height = !open
                ? `${solref.current.scrollHeight}px`
                : '0px';
        }
    }
    // useEffect(() => {
    //     // if (solref.current) {
    //     //     solref.current.style.height = open
    //     //         ? `${solref.current.scrollHeight}px`
    //     //         : '0px';
    //     // }
    // }, [])
    // useEffect(() => {
    //     if (open) {
    //         if (solref.current) {
    //             // console.log(solref.current.getBoundingClientRect());

    //             const height = solref.current.getBoundingClientRect().height
    //             console.log(height);
    //             setHeightValue(height)

    //         }

    //     }
    // }, [open])
    // console.log(open);

    return (
        <>
             <motion.button onClick={() => handleClick()} type="button" class=" border-[solid] border-[#383838] box-border [font-feature-settings:inherit] [color:inherit] [font-family:inherit] text-[100%] [font-variation-settings:inherit] [font-weight:inherit] [line-height:inherit] m-0 p-3 normal-case [appearance:button] bg-transparent  cursor-pointer max-w-[800px] rounded-[14px] border text-left bg-[linear-gradient(rgba(255,_255,_255,_0),_rgba(171,_171,_171,_0.06))] pl-4 pr-4 pb-4 pt-4">
             <div  class=" border-[solid] border-[#383838] box-border flex items-center justify-between">
                            <p class=" border-[solid] border-[#383838] box-border m-0 max-w-none text-[16px] leading-[24px]">Does Long-term mentorship really produce outcomes?</p>

                            {
                      !open?
                            
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none" class=" border-[solid] border-[rgb(229,231,235)] box-border block align-middle">
                                <path d="M14.75 8a.75.75 0 0 1-.75.75H9.25v4.75a.75.75 0 1 1-1.5 0V8.75H3a.75.75 0 0 1 0-1.5h4.75V2.5a.75.75 0 0 1 1.5 0v4.75H14a.75.75 0 0 1 .75.75Z" fill="#8F8F8F" class=" border-[solid] border-[rgb(229,231,235)] box-border"></path>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path d="M6.5 12H19" stroke="#8F8F8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
}
                        </div>
              

                        <div ref={solref}  style={{ height: 0, overflow: 'hidden' }} class="  border-[solid] border-[rgb(229,231,235)] box-border  overflow-hidden text-[14px] leading-[28px] opacity-80 duration-500 [transition:height] ease-in-out">1:1 Long-term mentorship is a new concept in comparison to a typical course or a bootcamp.
                            <br class=" border-[solid] border-[rgb(229,231,235)] box-border"></br> Hence, your doubt is completely valid. So let’s us resolve your doubt with Preplaced mentor stats
                            <br class=" border-[solid] border-[rgb(229,231,235)] box-border"></br>
                            <ul class=" border-[solid] border-[rgb(229,231,235)] box-border [list-style:none] m-0 p-0 list-disc pl-6">
                                <li class=" border-[solid] border-[rgb(229,231,235)] box-border">Avg. 90% of mentees say they became more consistent with the help of 1:1 long-term mentorship (Compared to a 10% completion rate of courses)</li>
                                <li class=" border-[solid] border-[rgb(229,231,235)] box-border">Avg. 70% of mentees achieve their career aspirations with the power of 1:1 long-term mentorship (Compared to 30% of people who get success)</li>
                            </ul>Nothing is more powerful than 1:1 long-term mentorship when it comes to delivering results💪. 
                            <br class=" border-[solid] border-[rgb(229,231,235)] box-border"></br>Working with an elite mentor who has been there done that simply transforms your career.
                        </div>



            </motion.button>

          




        </>
    )
}

export default FaqINdividual