'use client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
const router=useRouter()

const finfmentorhandle=()=>{
router.push('/explore-mentors')
}
const path=usePathname()
if(path==='/explore-mentors'){
    return null
}

  return (
    <nav class="sticky z-30 !border-[#CBE8F6] bg-[#ebf7fd] md:!border-b top-[0px] flex w-full font-inter flex-col justify-center border-b  duration-300 lg:h-[80px]" >
        <div class="relative hidden h-full w-full items-center justify-between px-10 lg:flex">
            <div class="flex h-full items-center text-sm font-medium">
            <a class="pr-1 lg:pr-3" href="/">
                <svg width="98" height="27" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-3 scale-125">
            <path d="M18.549 20.847v-4.193c.422.582 1.303 1.057 2.501 1.057 2.449 0 4.087-1.937 4.087-4.562 0-2.572-1.462-4.51-3.999-4.51-1.303 0-2.272.581-2.66 1.25V8.834h-2.272v12.014h2.343Zm4.28-7.68c0 1.55-.95 2.448-2.149 2.448-1.198 0-2.167-.916-2.167-2.449 0-1.532.97-2.43 2.167-2.43 1.198 0 2.15.898 2.15 2.43ZM32.277 8.797c-.176-.017-.352-.035-.546-.035-.74 0-1.938.212-2.466 1.357V8.833h-2.273V17.5h2.343v-3.964c0-1.867 1.04-2.448 2.238-2.448.211 0 .44.017.704.07v-2.36ZM35.548 12.18c.053-.793.722-1.709 1.938-1.709 1.339 0 1.903.846 1.938 1.709h-3.876Zm4.105 2.255c-.282.775-.881 1.321-1.973 1.321-1.163 0-2.132-.828-2.185-1.973h6.201c0-.035.036-.388.036-.722 0-2.784-1.603-4.493-4.281-4.493-2.22 0-4.263 1.797-4.263 4.563 0 2.924 2.096 4.633 4.474 4.633 2.132 0 3.506-1.25 3.946-2.748l-1.955-.581ZM45.92 20.847v-4.193c.422.582 1.303 1.057 2.501 1.057 2.449 0 4.087-1.937 4.087-4.562 0-2.572-1.462-4.51-3.999-4.51-1.303 0-2.272.581-2.66 1.25V8.834h-2.272v12.014h2.343Zm4.28-7.68c0 1.55-.95 2.448-2.149 2.448-1.198 0-2.166-.916-2.166-2.449 0-1.532.968-2.43 2.166-2.43s2.15.898 2.15 2.43ZM56.706 17.5V4.746h-2.343V17.5h2.343ZM58.635 15.14c0 1.356 1.127 2.607 2.977 2.607 1.286 0 2.114-.6 2.554-1.286 0 .334.036.81.088 1.039h2.15a9.698 9.698 0 0 1-.106-1.374v-4.263c0-1.744-1.022-3.295-3.77-3.295-2.325 0-3.576 1.498-3.717 2.854l2.079.44c.07-.757.634-1.409 1.656-1.409.986 0 1.462.511 1.462 1.128 0 .3-.159.546-.652.616l-2.132.318c-1.444.21-2.59 1.074-2.59 2.624Zm3.47.863c-.757 0-1.127-.494-1.127-1.005 0-.669.475-1.004 1.074-1.092l1.956-.3v.388c0 1.533-.916 2.009-1.903 2.009ZM72.519 10.735c1.162 0 1.708.74 1.92 1.462l2.096-.704c-.37-1.462-1.709-2.925-4.07-2.925-2.519 0-4.492 1.92-4.492 4.598 0 2.66 2.009 4.598 4.563 4.598 2.308 0 3.664-1.48 4.052-2.924l-2.061-.687c-.194.67-.793 1.462-1.99 1.462-1.199 0-2.22-.88-2.22-2.449 0-1.568 1.004-2.43 2.202-2.43ZM79.934 12.18c.053-.793.722-1.709 1.938-1.709 1.338 0 1.902.846 1.937 1.709h-3.875Zm4.104 2.255c-.281.775-.88 1.321-1.973 1.321-1.162 0-2.131-.828-2.184-1.973h6.201c0-.035.035-.388.035-.722 0-2.784-1.603-4.493-4.28-4.493-2.22 0-4.264 1.797-4.264 4.563 0 2.924 2.097 4.633 4.475 4.633 2.131 0 3.505-1.25 3.946-2.748l-1.956-.581ZM96.224 4.746h-2.307v4.95c-.247-.458-.952-1.075-2.449-1.075-2.449 0-4.158 1.99-4.158 4.528 0 2.625 1.762 4.562 4.228 4.562 1.163 0 2.044-.528 2.431-1.215 0 .405.053.828.089 1.004h2.237a17.86 17.86 0 0 1-.07-1.568V4.746Zm-6.553 8.403c0-1.55.951-2.431 2.15-2.431 1.197 0 2.13.863 2.13 2.413 0 1.568-.933 2.484-2.13 2.484-1.234 0-2.15-.916-2.15-2.466Z" fill="#03020A">
                </path>
                
                <g clip-path="url(#PreplacedLogoLogin_svg__a)">
                    <path d="M10.13 9.594c0-1.156-1.007-2.094-2.25-2.094-1.242 0-2.25.938-2.25 2.094v5.812c0 1.156 1.008 2.094 2.25 2.094 1.243 0 2.25-.938 2.25-2.094V9.594Z" fill="#FC690C"></path><path d="M7.875 6.604a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM4.546 13.027c0-1.156-1.007-2.094-2.25-2.094s-2.25.938-2.25 2.094v5.812c0 1.157 1.007 2.094 2.25 2.094s2.25-.938 2.25-2.094v-5.812Z" fill="#0029F5"></path>
                    <path d="M2.296 10.038a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" fill="#FC690C"></path>
                    </g>
                    <defs>
                        <clipPath id="PreplacedLogoLogin_svg__a">
                            <path fill="#fff" transform="translate(.046 1.916)" d="M0 0h10.115v20.041H0z"></path></clipPath>
                            </defs>
                            </svg>
            </a>
                            <div class="absolute left-1/2 flex h-full -translate-x-1/2">
                            <a class="flex h-full items-center px-1.5 text-[15px] lg:px-3" href="/explore-mentors">Explore Mentors</a>
                            <a class="flex h-full items-center gap-2 px-1.5 text-[15px] lg:px-3" href="/mentorai/pro-pilot">ProPilot<div class="flex items-center rounded-full bg-gradient-to-r from-[#FB6514] to-[#FEB273] pl-2 pr-2.5 text-[13px]">
                                <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.166 1.333 3.23 8.458c-.233.28-.35.42-.351.537-.002.102.044.2.124.264.091.074.273.074.636.074H8.5l-.667 5.334L13.77 7.54c.232-.279.348-.418.35-.536a.333.333 0 0 0-.124-.264c-.091-.074-.273-.074-.636-.074H8.5l.666-5.334Z" fill="currentColor"></path></svg>
                                <p class="py-[2px]">AI</p></div></a>
                            <a class="flex h-full items-center px-1.5 text-[15px] lg:px-3" href="/success-stories">Success Stories</a>
                            </div></div>
                            <div class="flex items-center gap-3"><div class="relative mr-2 flex h-full w-full justify-center">
                                <button type="button" class="text-[15px] font-medium leading-5">Login</button></div>
                                <button onClick={finfmentorhandle} class="flex items-center whitespace-nowrap rounded-lg bg-black px-4 py-2 text-sm font-medium text-white" type="button">Find your mentor <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m13.477 9.167-4.47-4.47 1.178-1.179L16.667 10l-6.482 6.482-1.178-1.179 4.47-4.47H3.333V9.167h10.144Z" fill="#F9F9FB"></path></svg></button></div></div>
        </nav>
  )
}

export default Navbar