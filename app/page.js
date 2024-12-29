'use client';
import Image from "next/image";
import GetStartedbyMentors from "./components/GetStartedbyMentors";
import Askmentor from "./components/Askmentor";
import { useRef } from "react";
import {useInView} from 'motion/react'
import Everydomain from "./components/Everydomain";
import Faq from "./components/Faq";
import tigeranalitics from '@/public/tigeranalytics.png'
import Companymarq from "./components/Companymarq";

export default function Home() {
  const lightref=useRef(null)
  const isinview=useInView(lightref)
  return (
    <main>
      <div class="-mt-[80px] w-full from-[#E7F5FE] to-[#fff] pt-[47px] md:bg-gradient-to-b md:pt-20 ">
        <div className="md:px-[2.5rem] px-[1.25rem]">
          <div className="mx-auto max-w-[1200px]">
            <div class="md:border-l md:border-r " style={{borderColor:"#CBE8F6"}}>
              <div class="relative z-5">
                  <div class="absolute -left-[5px] -top-[5px] z-[1] hidden h-[9px] w-[9px] border bg-white md:block"></div>
                 <div class="absolute -right-[5px] -top-[5px] z-[1] hidden h-[9px] w-[9px] border bg-white md:block"></div>
                 <div class=" flex flex-col items-start px-1 pb-9 pt-[64px] md:items-center md:gap-3 md:pb-10 md:pt-[100px] md:text-center">
                  <div class="flex flex-col md:flex-row">
                    <p class=" text-[32px] font-semibold leading-[40px] -tracking-[0.72px] text-[#272727] md:text-[48px] md:font-medium md:leading-[48px] md:tracking-[-0.035em] ">A placement mentorship program
                    </p>
                    {/* <p class=" text-[32px] font-semibold leading-[40px] -tracking-[0.72px] text-[#272727]  md:text-[60px] md:font-medium  md:leading-[48px] md:-tracking-[3px]"> your career with</p> */}
                    </div>
                    <div class="flex flex-col gap-6 md:gap-5">
                      <h1 class="font-gowunBatang text-[32px] font-bold leading-[40px] -tracking-[0.8px] text-[#007AFF] md:text-[48px] md:leading-[2] md:tracking-[-0.035em] ">exclusively for <span class=" text-[32px] font-semibold leading-[40px] -tracking-[0.72px] text-[#272727] md:text-[48px] md:font-medium md:leading-[48px] md:tracking-[-0.035em] ">students of</span>  IITs</h1>
                      <p class=" max-w-[648px] text-[16px] leading-[26px] text-[#5C5C5C] flex md:text-[20px] md:leading-[2] md:-tracking-[0.2px]  ">Imagine having a roadmap to on-campus placement success, crafted by 
the very seniors who have succeeded in the on-campus placement 
drives at India’s top engineering colleges </p>
                      {/* <p class="text-[16px] leading-[26px] text-[#5C5C5C] font-inter md:hidden">1-on-1 long-term mentorship with your chosen mentor to guide you to the career you deserve</p> */}
                      </div>
                 </div> 
                 <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border z-10 flex flex-col items-center border-b pl-0 pr-0 pb-[40px] border-none">
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border flex w-full flex-row gap-4 justify-center">
                <button type="button" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border [font-feature-settings:inherit] [font-family:inherit] text-[100%] [font-variation-settings:inherit] font-medium [line-height:inherit] m-0 p-1 normal-case [appearance:button] bg-none cursor-pointer relative flex h-full w-[fit-content] items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg pl-5 pr-5 pb-3 pt-3 [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">
                    <span class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border text-[14px] font-medium leading-5">Book a Free Trial</span>
                    <span class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border absolute top-0 h-full w-full"></span>
                </button>
                <button type="button" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border [font-feature-settings:inherit] [font-family:inherit] text-[100%] bg-[#272727] [font-variation-settings:inherit] font-medium [line-height:inherit] m-0 p-1 normal-case [appearance:button] bg-none cursor-pointer relative flex h-full w-[fit-content] items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg pl-4 pr-4 pb-3 pt-3 [box-shadow:rgb(73,_73,_73)_0px_-2.4px_0px_0px_inset,_rgba(40,_40,_40,_0.2)_0px_1px_3px_0px,_rgb(45,_45,_45)_0px_0px_0px_1px]">
                    <span class="border-[0px] border-[solid] text-white border-[rgb(229,231,235)] box-border text-[14px] font-medium leading-5">Find your Mentor →</span>
                    <span class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border absolute top-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent animate-shine"></span>
                </button>
            </div>
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border flex items-center gap-6 pt-[28px]">
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border flex items-center gap-2">
                    <svg width="21" height="20" fill="none"
                        xmlns="http://www.w3.org/2000/svg" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.501 1.667a8.333 8.333 0 1 0 0 16.667 8.333 8.333 0 0 0 0-16.667Zm3.145 6.778a.833.833 0 0 0-1.29-1.056L9.19 11.26l-1.015-1.016a.833.833 0 0 0-1.179 1.179l1.667 1.667a.833.833 0 0 0 1.234-.062l3.75-4.583Z" fill="#3C9AFF" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border"></path>
                    </svg>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 text-[14px] leading-[24px]">No Payment Required</p>
                </div>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border flex items-center gap-2">
                    <svg width="21" height="20" fill="none"
                        xmlns="http://www.w3.org/2000/svg" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.501 1.667a8.333 8.333 0 1 0 0 16.667 8.333 8.333 0 0 0 0-16.667Zm3.145 6.778a.833.833 0 0 0-1.29-1.056L9.19 11.26l-1.015-1.016a.833.833 0 0 0-1.179 1.179l1.667 1.667a.833.833 0 0 0 1.234-.062l3.75-4.583Z" fill="#3C9AFF" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border"></path>
                    </svg>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 text-[14px] leading-[24px]">Verified Mentors Only</p>
                </div>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border flex items-center gap-2">
                    <svg width="21" height="20" fill="none"
                        xmlns="http://www.w3.org/2000/svg" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.501 1.667a8.333 8.333 0 1 0 0 16.667 8.333 8.333 0 0 0 0-16.667Zm3.145 6.778a.833.833 0 0 0-1.29-1.056L9.19 11.26l-1.015-1.016a.833.833 0 0 0-1.179 1.179l1.667 1.667a.833.833 0 0 0 1.234-.062l3.75-4.583Z" fill="#3C9AFF" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border"></path>
                    </svg>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 text-[14px] leading-[24px]">Reschedule Anytime</p>
                </div>
            </div>
        </div>
              </div>
            </div>
          </div>
        </div>


        <div className="md:px-[2.5rem] px-[1.25rem] h-[400px]  relative ">
          <div className="mx-auto w-full h-full max-w-[1200px] ">
            <div className="border-[#CBE8F6] h-full md:border-l md:border-r ">
<div class="mb-[-262px] hidden justify-center h-full  md:block ">
  <div class="flex items-start flex-col bg-white px-10  h-[600px] justify-center">  

<div className="mt-8">
<Image src={tigeranalitics} alt="image" width={150} height={60} class="w-full h-full object-cover "/>
</div>
<div className="w-full ml-4 mt-4">
  <h1 className="text-[24px] uppercase font-medium text-[#0e0e0e]">Data Engineer Test</h1>
  <p className="text-[20px] mt-5 text-[#4d4d4a]">OA Pattern</p>
  <div className="mt-5 [&>div]:border-t [&>div:last-of-type]:border-b w-full  [&>div]:border-[#D7D7D7]">
    <div className="flex w-full text-[18px] bg-[#2d2d2d] text-white border-b-[3px] border-[#272727] py-1">
        <div className="basis-[40%] p-2 flex justify-start items-center">Sections <span className="font-bold">&nbsp;5</span></div>
        <div className="basis-[30%] p-2 flex justify-start items-center">Questions <span className="font-bold">&nbsp;28</span></div>
        <div className="basis-[30%] p-2 flex justify-start items-center">Time <span className="font-bold">&nbsp;1 hour 30 min</span> &nbsp;&nbsp; <div className="w-[20px] h-[20px] rounded-full border-[2px] flex items-center justify-center !border-[#fff]">
            <div className="w-full m-[.5px] h-[1px] bg-[#D7D7D7]"></div>
            </div>
            </div>
    </div>

<div className="flex w-full">
        <div className="basis-[40%] p-2 flex justify-start items-center">Quantitative Aptitude</div>
        <div className="basis-[30%] p-2 flex justify-start items-center">15</div>
        <div className="basis-[30%] p-2 flex justify-start items-center">21 min</div>
</div>
<div className="flex w-full">
        <div className="basis-[40%] p-2 flex justify-start items-center">SQL and DBMS</div>
        <div className="basis-[30%] p-2 flex justify-start items-center">10</div>
        <div className="basis-[30%] p-2 flex justify-start items-center">14 min</div>
</div>
<div className="flex w-full">
        <div className="basis-[40%] p-2 flex justify-start items-center">SQLite Coding</div>
        <div className="basis-[30%] p-2 flex justify-start items-center">1</div>
        <div className="basis-[30%] p-2 flex justify-start items-center">15 min</div>
</div>
<div className="flex w-full">
        <div className="basis-[40%] p-2 flex justify-start items-center">Coding - 1</div>
        <div className="basis-[30%] p-2 flex justify-start items-center">1</div>
        <div className="basis-[30%] p-2 flex justify-start items-center">20 min</div>
</div>
<div className="flex w-full">
        <div className="basis-[40%] p-2 flex justify-start items-center">Coding - 2</div>
        <div className="basis-[30%] p-2 flex justify-start items-center">1</div>
        <div className="basis-[30%] p-2 flex justify-start items-center">20 min</div>
</div>

  </div>
</div>

    </div>
</div>
            </div>
          </div>
          </div>

<div class=" md:px-[2.5rem] px-[1.25rem] mx-auto max-w-[1448px] mt-[-64px]  flex flex-col justify-center gap-8 rounded-[32px] border border-[#D6E0FF] bg-slate-950 pt-[51px] text-white">
  <div class="flex flex-col items-center pt-[40px] md:pt-[230px]">
    <div class="relative z-0 flex min-h-[450px] w-full flex-col items-center justify-start overflow-hidden rounded-md bg-slate-950">
      <div ref={lightref} class="relative isolate z-0 flex w-full flex-1 scale-y-75 items-center justify-center md:scale-y-110 ">
        <div class="bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[50vw] duration-700 overflow-visible from-[#18ACFE] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]" style={{backgroundImage: 'conic-gradient(var(--conic-position), var(--tw-gradient-stops))', opacity: isinview ? 1:.5, width: isinview ? '50vw':'10vw'}}>
        <div class="absolute  bottom-0 left-0 z-20 h-40 w-[100%] bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]"></div>
        <div class="absolute  bottom-0 left-0 z-20 h-[100%]  w-40 bg-slate-950 [mask-image:linear-gradient(to_right,white,transparent)]"></div>
        </div>

        <div class="bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[50vw] duration-700 from-transparent via-transparent to-[#18ACFE] text-white [--conic-position:from_290deg_at_center_top]" style={{backgroundImage: 'conic-gradient(var(--conic-position), var(--tw-gradient-stops))', opacity:isinview? 1:.5, width: isinview?'50vw':'10vw'}}>
        <div class="absolute bottom-0 right-0 z-20 h-[100%]  w-40 bg-slate-950 [mask-image:linear-gradient(to_left,white,transparent)]"></div>
        <div class="absolute bottom-0 right-0 z-20 h-40 w-[100%] bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]"></div>
        </div>

        <div class="absolute inset-auto z-50 h-36 -translate-y-1/2 duration-700 rounded-full bg-[#18ACFE] blur-3xl md:w-[28rem]" style={{opacity: isinview?0.5:0}}></div>
        <div class="absolute inset-auto z-50 h-0.5 w-[50vw] -translate-y-[7rem] bg-[#18ACFE] " style={{width: '50vw'}}></div>

      </div>
      <div class="relative z-50 flex -translate-y-60 flex-col items-center  md:px-5"><h1 class="flex flex-col gap-3 bg-gradient-to-b from-white to-slate-500 to-[80%] bg-clip-text pt-5 text-center text-4xl font-medium tracking-tight text-transparent md:gap-5 md:text-7xl" style={{opacity: 1, transform: "none"}}><p class="lamp-1 mt-12 text-[13px] font-medium -tracking-[0.5px] md:mt-0 md:text-[20px] ">Move Over traditional courses</p>
      <div>
        <p class="lamp-2 text-[24px] font-semibold leading-8 -tracking-[1.6px] md:text-[44px] md:font-medium md:leading-[52px]">Start Making Progress</p>
        <p class="lamp-2  text-[24px] font-semibold leading-8 -tracking-[1.6px] md:text-[44px] md:font-medium md:leading-[52px]">with 1:1 Long Term Mentorship</p>
        </div>
        </h1>
        </div>
    </div>

{/* marquee */}

<Companymarq/>


  </div>
</div>
</div>
<GetStartedbyMentors/>
<Everydomain/>
<Askmentor/>
        <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border ml-auto mr-auto max-w-[1448px] pl-10 pr-10">
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border ml-auto mr-auto max-w-[1200px]">
                <div class="border-[0px] border-[solid]  box-border flex h-[180px] max-w-[1448px] flex-col items-center border-[#EBEBEB] border-l border-r"></div>
            </div>
        </div>

<div class="mx-2 max-w-[1448px] rounded-[32px] border border-[#E4D4FF] bg-gradient-to-b from-[#F3EEFC] to-[#fff] md:mx-auto">
        <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border ml-auto mr-auto max-w-[1448px] pl-10 pr-10">
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border ml-auto mr-auto max-w-[1200px]">
                <div class="border-[0px] border-[solid]  box-border border-l border-r pl-14 pr-14 border-[#E4D4FF]">
                    <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border pt-[100px] border-l border-r pl-0 pr-0">
                        <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border flex flex-col gap-2 border-b pb-[60px] border-none">
                            <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 text-center text-[36px] font-medium leading-[50px] tracking-[-1.44px]">Love & Praise by The Mentees</p>
                            <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 text-center text-[16px] leading-6 tracking-[-0.176px]">Get inspired by the real-life experiences of our mentee and their journey to success with Preplaced.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border ml-auto mr-auto max-w-[1448px] pl-10 pr-10">
        <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border ml-auto mr-auto max-w-[1200px]">
          <div class="md:border-l md:border-r pt-5 md:px-14 md:pt-0" style={{borderColor:'#E4D4FF'}}>
<div class="hidden gap-6 border-[#E4D4FF] px-1 pb-20 pt-5 md:block md:columns-2 md:border-x md:px-[66px] ">
   <button type="button" class="border-[0px] border-[solid] hover:bg-[#f7f7f7] border-[rgb(229,231,235)] box-border [font-feature-settings:inherit] [color:inherit] [font-family:inherit] text-[100%] [font-variation-settings:inherit] [font-weight:inherit] [line-height:inherit] m-0 p-5 normal-case [appearance:button] bg-none cursor-pointer mb-7 flex h-full w-full min-w-[fit-content] flex-col justify-between gap-8 rounded-[1.125rem] text-left duration-100 [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border">
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border flex items-center gap-2">
                    <img alt="Nikhil Parihar" referrerpolicy="no-referrer" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=64&q=75 2x" src="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=64&q=75" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle h-8 max-w-full w-8 rounded-full object-cover text-transparent"></img>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 min-w-[32px] text-[14px] font-semibold">Nikhil Parihar</p>
                </div>
                <p class="border-[0px] border-[solid] line-clamp-5 border-[rgb(229,231,235)] box-border m-0 overflow-hidden mb-[calc(1rem*var(--tw-space-y-reverse))] mt-[calc(1rem*(1 - var(--tw-space-y-reverse)))] text-[14px] leading-[24px]">My mentor's practical guidance and unwavering support have been instrumental in my growth. They helped me address my weaknesses effectively, and their consistent availability was invaluable. I wholeheartedly recommend them to anyone seeking valuable mentorship. Their impact on my journey has been significant, and I'm grateful for their support. They are an excellent mentor, and I highly recommend their guidance.
</p>
            </div>
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] bg-[#f7f7f7] box-border relative flex w-full items-center gap-3 rounded-full p-2">
                <img alt="Surya Kant" referrerpolicy="no-referrer" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=96&q=75" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle h-8 max-w-full w-8 min-w-[32px] rounded-full object-cover text-transparent"></img>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border">
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 overflow-hidden text-[12px] font-medium leading-4">Surya Kant</p>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 overflow-hidden text-[10px] leading-[14px]">Engineering Manager, PayPal </p>
                </div>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border absolute right-[15px] -top-[12px] rounded-[10px] pl-2 pr-2 pb-[2px] pt-[2px] text-[12px] leading-[16px] [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">Mentor</div>
            </div>
        </button>
        <button type="button" class="border-[0px] border-[solid] hover:bg-[#f7f7f7] border-[rgb(229,231,235)] box-border [font-feature-settings:inherit] [color:inherit] [font-family:inherit] text-[100%] [font-variation-settings:inherit] [font-weight:inherit] [line-height:inherit] m-0 p-5 normal-case [appearance:button] bg-none cursor-pointer mb-7 flex h-full w-full min-w-[fit-content] flex-col justify-between gap-8 rounded-[1.125rem] text-left duration-100 [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border">
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border flex items-center gap-2">
                    <img alt="Nikhil Parihar" referrerpolicy="no-referrer" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=64&q=75 2x" src="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=64&q=75" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle h-8 max-w-full w-8 rounded-full object-cover text-transparent"></img>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 min-w-[32px] text-[14px] font-semibold">Nikhil Parihar</p>
                </div>
                <p class="border-[0px] border-[solid] line-clamp-5 border-[rgb(229,231,235)] box-border m-0 overflow-hidden mb-[calc(1rem*var(--tw-space-y-reverse))] mt-[calc(1rem*(1 - var(--tw-space-y-reverse)))] text-[14px] leading-[24px]">My mentor's practical guidance and unwavering support have been instrumental in my growth. They helped me address my weaknesses effectively, and their consistent availability was invaluable. I wholeheartedly recommend them to anyone seeking valuable mentorship. Their impact on my journey has been significant, and I'm grateful for their support. They are an excellent mentor, and I highly recommend their guidance.
</p>
            </div>
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] bg-[#f7f7f7] box-border relative flex w-full items-center gap-3 rounded-full p-2">
                <img alt="Surya Kant" referrerpolicy="no-referrer" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=96&q=75" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle h-8 max-w-full w-8 min-w-[32px] rounded-full object-cover text-transparent"></img>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border">
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 overflow-hidden text-[12px] font-medium leading-4">Surya Kant</p>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 overflow-hidden text-[10px] leading-[14px]">Engineering Manager, PayPal </p>
                </div>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border absolute right-[15px] -top-[12px] rounded-[10px] pl-2 pr-2 pb-[2px] pt-[2px] text-[12px] leading-[16px] [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">Mentor</div>
            </div>
        </button>
        <button type="button" class="border-[0px] border-[solid] hover:bg-[#f7f7f7] border-[rgb(229,231,235)] box-border [font-feature-settings:inherit] [color:inherit] [font-family:inherit] text-[100%] [font-variation-settings:inherit] [font-weight:inherit] [line-height:inherit] m-0 p-5 normal-case [appearance:button] bg-none cursor-pointer mb-7 flex h-full w-full min-w-[fit-content] flex-col justify-between gap-8 rounded-[1.125rem] text-left duration-100 [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border">
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border flex items-center gap-2">
                    <img alt="Nikhil Parihar" referrerpolicy="no-referrer" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=64&q=75 2x" src="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=64&q=75" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle h-8 max-w-full w-8 rounded-full object-cover text-transparent"></img>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 min-w-[32px] text-[14px] font-semibold">Nikhil Parihar</p>
                </div>
                <p class="border-[0px] border-[solid] line-clamp-5 border-[rgb(229,231,235)] box-border m-0 overflow-hidden mb-[calc(1rem*var(--tw-space-y-reverse))] mt-[calc(1rem*(1 - var(--tw-space-y-reverse)))] text-[14px] leading-[24px]">My mentor's practical guidance and unwavering support have been instrumental in my growth. They helped me address my weaknesses effectively, and their consistent availability was invaluable. I wholeheartedly recommend them to anyone seeking valuable mentorship. Their impact on my journey has been significant, and I'm grateful for their support. They are an excellent mentor, and I highly recommend their guidance.
</p>
            </div>
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] bg-[#f7f7f7] box-border relative flex w-full items-center gap-3 rounded-full p-2">
                <img alt="Surya Kant" referrerpolicy="no-referrer" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=96&q=75" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle h-8 max-w-full w-8 min-w-[32px] rounded-full object-cover text-transparent"></img>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border">
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 overflow-hidden text-[12px] font-medium leading-4">Surya Kant</p>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 overflow-hidden text-[10px] leading-[14px]">Engineering Manager, PayPal </p>
                </div>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border absolute right-[15px] -top-[12px] rounded-[10px] pl-2 pr-2 pb-[2px] pt-[2px] text-[12px] leading-[16px] [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">Mentor</div>
            </div>
        </button>
        <button type="button" class="border-[0px] border-[solid] hover:bg-[#f7f7f7] border-[rgb(229,231,235)] box-border [font-feature-settings:inherit] [color:inherit] [font-family:inherit] text-[100%] [font-variation-settings:inherit] [font-weight:inherit] [line-height:inherit] m-0 p-5 normal-case [appearance:button] bg-none cursor-pointer mb-7 flex h-full w-full min-w-[fit-content] flex-col justify-between gap-8 rounded-[1.125rem] text-left duration-100 [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border">
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border flex items-center gap-2">
                    <img alt="Nikhil Parihar" referrerpolicy="no-referrer" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=64&q=75 2x" src="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=64&q=75" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle h-8 max-w-full w-8 rounded-full object-cover text-transparent"></img>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 min-w-[32px] text-[14px] font-semibold">Nikhil Parihar</p>
                </div>
                <p class="border-[0px] border-[solid] line-clamp-5 border-[rgb(229,231,235)] box-border m-0 overflow-hidden mb-[calc(1rem*var(--tw-space-y-reverse))] mt-[calc(1rem*(1 - var(--tw-space-y-reverse)))] text-[14px] leading-[24px]">My mentor's practical guidance and unwavering support have been instrumental in my growth. They helped me address my weaknesses effectively, and their consistent availability was invaluable. I wholeheartedly recommend them to anyone seeking valuable mentorship. Their impact on my journey has been significant, and I'm grateful for their support. They are an excellent mentor, and I highly recommend their guidance.
</p>
            </div>
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] bg-[#f7f7f7] box-border relative flex w-full items-center gap-3 rounded-full p-2">
                <img alt="Surya Kant" referrerpolicy="no-referrer" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=96&q=75" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle h-8 max-w-full w-8 min-w-[32px] rounded-full object-cover text-transparent"></img>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border">
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 overflow-hidden text-[12px] font-medium leading-4">Surya Kant</p>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 overflow-hidden text-[10px] leading-[14px]">Engineering Manager, PayPal </p>
                </div>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border absolute right-[15px] -top-[12px] rounded-[10px] pl-2 pr-2 pb-[2px] pt-[2px] text-[12px] leading-[16px] [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">Mentor</div>
            </div>
        </button>
        <button type="button" class="border-[0px] border-[solid] hover:bg-[#f7f7f7] border-[rgb(229,231,235)] box-border [font-feature-settings:inherit] [color:inherit] [font-family:inherit] text-[100%] [font-variation-settings:inherit] [font-weight:inherit] [line-height:inherit] m-0 p-5 normal-case [appearance:button] bg-none cursor-pointer mb-7 flex h-full w-full min-w-[fit-content] flex-col justify-between gap-8 rounded-[1.125rem] text-left duration-100 [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border">
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border flex items-center gap-2">
                    <img alt="Nikhil Parihar" referrerpolicy="no-referrer" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=64&q=75 2x" src="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=64&q=75" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle h-8 max-w-full w-8 rounded-full object-cover text-transparent"></img>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 min-w-[32px] text-[14px] font-semibold">Nikhil Parihar</p>
                </div>
                <p class="border-[0px] border-[solid] line-clamp-5 border-[rgb(229,231,235)] box-border m-0 overflow-hidden mb-[calc(1rem*var(--tw-space-y-reverse))] mt-[calc(1rem*(1 - var(--tw-space-y-reverse)))] text-[14px] leading-[24px]">My mentor's practical guidance and unwavering support have been instrumental in my growth. They helped me address my weaknesses effectively, and their consistent availability was invaluable. I wholeheartedly recommend them to anyone seeking valuable mentorship. Their impact on my journey has been significant, and I'm grateful for their support. They are an excellent mentor, and I highly recommend their guidance.
</p>
            </div>
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] bg-[#f7f7f7] box-border relative flex w-full items-center gap-3 rounded-full p-2">
                <img alt="Surya Kant" referrerpolicy="no-referrer" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=96&q=75" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle h-8 max-w-full w-8 min-w-[32px] rounded-full object-cover text-transparent"></img>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border">
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 overflow-hidden text-[12px] font-medium leading-4">Surya Kant</p>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 overflow-hidden text-[10px] leading-[14px]">Engineering Manager, PayPal </p>
                </div>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border absolute right-[15px] -top-[12px] rounded-[10px] pl-2 pr-2 pb-[2px] pt-[2px] text-[12px] leading-[16px] [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">Mentor</div>
            </div>
        </button>
        <button type="button" class="border-[0px] border-[solid] hover:bg-[#f7f7f7] border-[rgb(229,231,235)] box-border [font-feature-settings:inherit] [color:inherit] [font-family:inherit] text-[100%] [font-variation-settings:inherit] [font-weight:inherit] [line-height:inherit] m-0 p-5 normal-case [appearance:button] bg-none cursor-pointer mb-7 flex h-full w-full min-w-[fit-content] flex-col justify-between gap-8 rounded-[1.125rem] text-left duration-100 [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border">
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border flex items-center gap-2">
                    <img alt="Nikhil Parihar" referrerpolicy="no-referrer" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=64&q=75 2x" src="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=64&q=75" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle h-8 max-w-full w-8 rounded-full object-cover text-transparent"></img>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 min-w-[32px] text-[14px] font-semibold">Nikhil Parihar</p>
                </div>
                <p class="border-[0px] border-[solid] line-clamp-5 border-[rgb(229,231,235)] box-border m-0 overflow-hidden mb-[calc(1rem*var(--tw-space-y-reverse))] mt-[calc(1rem*(1 - var(--tw-space-y-reverse)))] text-[14px] leading-[24px]">My mentor's practical guidance and unwavering support have been instrumental in my growth. They helped me address my weaknesses effectively, and their consistent availability was invaluable. I wholeheartedly recommend them to anyone seeking valuable mentorship. Their impact on my journey has been significant, and I'm grateful for their support. They are an excellent mentor, and I highly recommend their guidance.
</p>
            </div>
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] bg-[#f7f7f7] box-border relative flex w-full items-center gap-3 rounded-full p-2">
                <img alt="Surya Kant" referrerpolicy="no-referrer" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=96&q=75" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle h-8 max-w-full w-8 min-w-[32px] rounded-full object-cover text-transparent"></img>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border">
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 overflow-hidden text-[12px] font-medium leading-4">Surya Kant</p>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 overflow-hidden text-[10px] leading-[14px]">Engineering Manager, PayPal </p>
                </div>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border absolute right-[15px] -top-[12px] rounded-[10px] pl-2 pr-2 pb-[2px] pt-[2px] text-[12px] leading-[16px] [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">Mentor</div>
            </div>
        </button>
        <button type="button" class="border-[0px] border-[solid] hover:bg-[#f7f7f7] border-[rgb(229,231,235)] box-border [font-feature-settings:inherit] [color:inherit] [font-family:inherit] text-[100%] [font-variation-settings:inherit] [font-weight:inherit] [line-height:inherit] m-0 p-5 normal-case [appearance:button] bg-none cursor-pointer mb-7 flex h-full w-full min-w-[fit-content] flex-col justify-between gap-8 rounded-[1.125rem] text-left duration-100 [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border">
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border flex items-center gap-2">
                    <img alt="Nikhil Parihar" referrerpolicy="no-referrer" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=64&q=75 2x" src="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=64&q=75" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle h-8 max-w-full w-8 rounded-full object-cover text-transparent"></img>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 min-w-[32px] text-[14px] font-semibold">Nikhil Parihar</p>
                </div>
                <p class="border-[0px] border-[solid] line-clamp-5 border-[rgb(229,231,235)] box-border m-0 overflow-hidden mb-[calc(1rem*var(--tw-space-y-reverse))] mt-[calc(1rem*(1 - var(--tw-space-y-reverse)))] text-[14px] leading-[24px]">My mentor's practical guidance and unwavering support have been instrumental in my growth. They helped me address my weaknesses effectively, and their consistent availability was invaluable. I wholeheartedly recommend them to anyone seeking valuable mentorship. Their impact on my journey has been significant, and I'm grateful for their support. They are an excellent mentor, and I highly recommend their guidance.
</p>
            </div>
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] bg-[#f7f7f7] box-border relative flex w-full items-center gap-3 rounded-full p-2">
                <img alt="Surya Kant" referrerpolicy="no-referrer" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=96&q=75" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle h-8 max-w-full w-8 min-w-[32px] rounded-full object-cover text-transparent"></img>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border">
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 overflow-hidden text-[12px] font-medium leading-4">Surya Kant</p>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 overflow-hidden text-[10px] leading-[14px]">Engineering Manager, PayPal </p>
                </div>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border absolute right-[15px] -top-[12px] rounded-[10px] pl-2 pr-2 pb-[2px] pt-[2px] text-[12px] leading-[16px] [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">Mentor</div>
            </div>
        </button>
        <button type="button" class="border-[0px] border-[solid] hover:bg-[#f7f7f7] border-[rgb(229,231,235)] box-border [font-feature-settings:inherit] [color:inherit] [font-family:inherit] text-[100%] [font-variation-settings:inherit] [font-weight:inherit] [line-height:inherit] m-0 p-5 normal-case [appearance:button] bg-none cursor-pointer mb-7 flex h-full w-full min-w-[fit-content] flex-col justify-between gap-8 rounded-[1.125rem] text-left duration-100 [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border">
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border flex items-center gap-2">
                    <img alt="Nikhil Parihar" referrerpolicy="no-referrer" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=64&q=75 2x" src="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=64&q=75" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle h-8 max-w-full w-8 rounded-full object-cover text-transparent"></img>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 min-w-[32px] text-[14px] font-semibold">Nikhil Parihar</p>
                </div>
                <p class="border-[0px] border-[solid] line-clamp-5 border-[rgb(229,231,235)] box-border m-0 overflow-hidden mb-[calc(1rem*var(--tw-space-y-reverse))] mt-[calc(1rem*(1 - var(--tw-space-y-reverse)))] text-[14px] leading-[24px]">My mentor's practical guidance and unwavering support have been instrumental in my growth. They helped me address my weaknesses effectively, and their consistent availability was invaluable. I wholeheartedly recommend them to anyone seeking valuable mentorship. Their impact on my journey has been significant, and I'm grateful for their support. They are an excellent mentor, and I highly recommend their guidance.
</p>
            </div>
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] bg-[#f7f7f7] box-border relative flex w-full items-center gap-3 rounded-full p-2">
                <img alt="Surya Kant" referrerpolicy="no-referrer" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=96&q=75" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle h-8 max-w-full w-8 min-w-[32px] rounded-full object-cover text-transparent"></img>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border">
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 overflow-hidden text-[12px] font-medium leading-4">Surya Kant</p>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 overflow-hidden text-[10px] leading-[14px]">Engineering Manager, PayPal </p>
                </div>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border absolute right-[15px] -top-[12px] rounded-[10px] pl-2 pr-2 pb-[2px] pt-[2px] text-[12px] leading-[16px] [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">Mentor</div>
            </div>
        </button>
        <button type="button" class="border-[0px] border-[solid] hover:bg-[#f7f7f7] border-[rgb(229,231,235)] box-border [font-feature-settings:inherit] [color:inherit] [font-family:inherit] text-[100%] [font-variation-settings:inherit] [font-weight:inherit] [line-height:inherit] m-0 p-5 normal-case [appearance:button] bg-none cursor-pointer mb-7 flex h-full w-full min-w-[fit-content] flex-col justify-between gap-8 rounded-[1.125rem] text-left duration-100 [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border">
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border flex items-center gap-2">
                    <img alt="Nikhil Parihar" referrerpolicy="no-referrer" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=64&q=75 2x" src="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKVPD3BkrO42VzMFlLHohT5PN79UbmKVJp7Mj-a2rofJHF7%3Ds96-c&w=64&q=75" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle h-8 max-w-full w-8 rounded-full object-cover text-transparent"></img>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 min-w-[32px] text-[14px] font-semibold">Nikhil Parihar</p>
                </div>
                <p class="border-[0px] border-[solid] line-clamp-5 border-[rgb(229,231,235)] box-border m-0 overflow-hidden mb-[calc(1rem*var(--tw-space-y-reverse))] mt-[calc(1rem*(1 - var(--tw-space-y-reverse)))] text-[14px] leading-[24px]">My mentor's practical guidance and unwavering support have been instrumental in my growth. They helped me address my weaknesses effectively, and their consistent availability was invaluable. I wholeheartedly recommend them to anyone seeking valuable mentorship. Their impact on my journey has been significant, and I'm grateful for their support. They are an excellent mentor, and I highly recommend their guidance.
</p>
            </div>
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] bg-[#f7f7f7] box-border relative flex w-full items-center gap-3 rounded-full p-2">
                <img alt="Surya Kant" referrerpolicy="no-referrer" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" srcset="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FSuryakant%2520m0.6609364079044082%3Falt%3Dmedia%26token%3D04fa7058-0a37-4e26-a3c4-61470afc01fe&w=96&q=75" class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border block align-middle h-8 max-w-full w-8 min-w-[32px] rounded-full object-cover text-transparent"></img>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border">
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 overflow-hidden text-[12px] font-medium leading-4">Surya Kant</p>
                    <p class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border m-0 overflow-hidden text-[10px] leading-[14px]">Engineering Manager, PayPal </p>
                </div>
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border absolute right-[15px] -top-[12px] rounded-[10px] pl-2 pr-2 pb-[2px] pt-[2px] text-[12px] leading-[16px] [box-shadow:rgba(62,_62,_62,_0.04)_0px_-2.4px_0px_0px_inset,_rgba(143,_143,_143,_0.2)_0px_1px_3px_0px,_rgb(235,_235,_235)_0px_0px_0px_1px]">Mentor</div>
            </div>
        </button>
</div>
          </div>
        </div>
        </div>
        
</div>

<div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border ml-auto mr-auto max-w-[1448px] pl-10 pr-10">
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border ml-auto mr-auto max-w-[1200px]">
                <div class="border-[0px] border-[solid]  box-border flex h-[180px] max-w-[1448px] flex-col items-center border-[#EBEBEB] border-l border-r"></div>
            </div>
        </div>

      <Faq/>
        <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border ml-auto mr-auto max-w-[1448px] pl-10 pr-10">
            <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border ml-auto mr-auto max-w-[1200px]">
                <div class="border-[0px] border-[solid] border-[rgb(229,231,235)] box-border flex h-[180px] max-w-[1448px] flex-col items-center border-[#EBEBEB] border-l border-r"></div>
            </div>
        </div>

      
    </main>
  );
}
