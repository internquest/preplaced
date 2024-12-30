'use client'
import { useMotionValueEvent, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const Companymarq = () => {
    const ref=useRef(null)
    const [translateval,settranslateval]=useState(0)
    const [coltranslateval,setcoltranslateval]=useState(0)
    const [col2translateval,setcol2translateval]=useState(0)
    const [col3translateval,setcol3translateval]=useState(0)
const {scrollYProgress}=useScroll({
    target:ref,
    offset:["start end","end start"]
})
const colmotionval=useTransform(scrollYProgress,[0,1],["202","-199"])
useMotionValueEvent(colmotionval,'change',(latest)=>{
    // settranslateval(latest)
    setcoltranslateval(latest)
    // console.log(latest);
    
})
const col2motionval=useTransform(scrollYProgress,[0,1],["0px","100"])
useMotionValueEvent(col2motionval,'change',(latest)=>{
    // settranslateval(latest)
    setcol2translateval(latest)
    // console.log(latest);
    
})
const col3motionval=useTransform(scrollYProgress,[0,1],["121px","-100"])
useMotionValueEvent(col3motionval,'change',(latest)=>{
    // settranslateval(latest)
    setcol3translateval(latest)
    // console.log(latest);
    
})
useMotionValueEvent(scrollYProgress,'change',(latest)=>{
    settranslateval(latest)
})
// const transmotion=useTransform(scrollYProgress,[0,1],["0px","-100px"])
  return (
    <div ref={ref} className="relative flex overflow-hidden h-[530px] w-full mx-auto flex-col  items-center ">
        {/* <div className='w-full mx-auto flex-col  items-center relative flex h-[700px]'> */}
    <div className="flex  justify-between flex-[0_0_auto] gap-[30px]">


        <div class="box-border">
            <div style={{transform:`translate3d(0px,${col2translateval}px,0px) `}} role="list" class="box-border flex flex-col justify-center gap-y-[16px] mt-[30px]  [transform-style:preserve-3d]">
                <div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(1).svg?updatedAt=1735470718846'} alt='' 
                    height={80}
                    width={80}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div>
                <div role="listitem" class="box-border overflow-hidden flex justify-center items-center w-[175px] bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(5).svg?updatedAt=1735470718849'} alt='' 
                    height={80}
                    width={80}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div>
                <div role="listitem" class="box-border overflow-hidden flex justify-center items-center w-[175px] bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(3).svg?updatedAt=1735470718854'} alt='' 
                    height={80}
                    width={80}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div>
            </div>
        </div>
        {/* 2nd */}
        <div>
        <div style={{transform:`translate3d(0px,${col3translateval}px,0px) `}} role="list" class="box-border flex flex-col justify-center gap-y-[16px] mb-[30px] [transform:translate3d(0px,_0.638px,_0px)_scale3d(1,_1,_1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,_0deg)] [transform-style:preserve-3d]">
           
        <div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(10).svg?updatedAt=1735470718912'} alt='' 
                    height={90}
                    width={90}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div>
                <div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(7).svg?updatedAt=1735470718955'} alt='' 
                    height={100}
                    width={100}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div><div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(9).svg?updatedAt=1735470718914'} alt='' 
                    height={80}
                    width={80}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div><div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(8).svg?updatedAt=1735470718978'} alt='' 
                    height={80}
                    width={80}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div>
        </div>
        </div>
        {/* 3rd */}
        <div>
        <div style={{transform:`translate3d(0px,${coltranslateval}px,0px) `}} role="list" class="box-border flex flex-col justify-center gap-y-[16px] [transform:translate3d(0px,_-0.638px,_0px)_scale3d(1,_1,_1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,_0deg)] [transform-style:preserve-3d]">
        <div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(6).svg?updatedAt=1735470718964'} alt='' 
                    height={120}
                    width={120}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div> 
                <div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(2).svg?updatedAt=1735470718928'} alt='' 
                    height={80}
                    width={80}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div> 
                <div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(4).svg?updatedAt=1735470719006'} alt='' 
                    height={80}
                    width={80}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div>
                 <div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(16).svg?updatedAt=1735470721552'} alt='' 
                    height={80}
                    width={80}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div>
        </div>
        </div>
        {/* 4th */}
        <div>
        <div style={{transform:`translate3d(0px,${coltranslateval}px,0px) `}} role="list" class="box-border flex flex-col justify-center gap-y-[16px] [transform:translate3d(0px,_-0.638px,_0px)_scale3d(1,_1,_1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,_0deg)] [transform-style:preserve-3d]">
        <div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(18).svg?updatedAt=1735470721598'} alt='' 
                    height={100}
                    width={100}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div> 
                <div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(11).svg?updatedAt=1735470721644'} alt='' 
                    height={80}
                    width={80}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div> 
                <div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(15).svg?updatedAt=1735470721575'} alt='' 
                    height={80}
                    width={80}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div> 
                <div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(13).svg?updatedAt=1735470721584'} alt='' 
                    height={80}
                    width={80}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div> 
        </div>
        </div>
        {/* 5th */}
        <div>
        <div style={{transform:`translate3d(0px,${col3translateval}px,0px) `}} role="list" class="box-border flex flex-col justify-center gap-y-[16px] mb-[30px] [transform:translate3d(0px,_0.638px,_0px)_scale3d(1,_1,_1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,_0deg)] [transform-style:preserve-3d]">
        <div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(19).svg?updatedAt=1735470721624'} alt='' 
                    height={100}
                    width={100}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div> 
                <div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(17).svg?updatedAt=1735470721647'} alt='' 
                    height={90}
                    width={90}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div> 
                <div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(14).svg?updatedAt=1735470721892'} alt='' 
                    height={80}
                    width={80}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div> 
                <div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(16).svg?updatedAt=1735470721552'} alt='' 
                    height={80}
                    width={80}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div>
        </div>
        </div>
        {/* 6th */}
        <div>
        <div style={{transform:`translate3d(0px,${col2translateval}px,0px) `}} role="list" class="box-border flex flex-col justify-center gap-y-[16px] mt-[30px] [transform:translate3d(0px,_-1.276px,_0px)_scale3d(1,_1,_1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,_0deg)] [transform-style:preserve-3d]">
        <div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(12).svg?updatedAt=1735470722148'} alt='' 
                    height={80}
                    width={80}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div> 
                <div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(4).svg?updatedAt=1735470719006'} alt='' 
                    height={80}
                    width={80}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div> 
                <div role="listitem" class="box-border overflow-hidden w-[175px] flex justify-center items-center bg-white h-[175px] min-h-[175px] min-w-[175px] rounded-[24px]">
                    <Image src={'https://ik.imagekit.io/ysp4xwrz9/c/1%20(14).svg?updatedAt=1735470721892'} alt='' 
                    height={90}
                    width={90}
                    class="border-[0px] max-w-full align-middle inline-block box-border static  object-cover"/>
                </div> 
        </div>
        </div>


    </div>
    {/* </div> */}
</div>
  )
}

export default Companymarq