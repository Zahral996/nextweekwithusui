'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/shared/button';

const Header = () => {
    // const handleLanguageChange = (language: string) => {
    //     console.log(`Selected language: ${language}`);
    //     // Implement your language switching logic here (e.g., updating state or context)
    // };

    return (
        <header className="w-full flex flex-row justify-between items-center px-10 py-2 border-b-[8px] border-double border-teal-800">
            <div className="logo w-[30%] flex flex-col gap-y-0 flex-shrink-0 items-center lg:items-start">
                <Link href={'/'}>
                    <Image width={130} height={50} src={"/images/logo/logo_header.png"} alt="logo" />
                </Link>
            </div>
            <div className="links w-[70%] flex flex-row gap-x-3 items-center justify-end text-black">
                <div className="relative inline-block">
                    <div className="flex lg:flex-row gap-x-1 items-center cursor-pointer" id="svg-container">
                        <div>
                            <Image width={16} height={16} src={"/images/icons/globe/globe2.svg"} alt='globe photo'/>
                        </div>
                        <div className="hidden lg:block" id="text-container">
                            <span className="text-sm font-semibold">Language</span>
                        </div>
                    </div>
                    {/* <LanguageMenu onLanguageChange={handleLanguageChange}/> */}
                </div>
                <Link href={"/login"} className="py-2 px-2 text-sm font-bold">Log in</Link>
                <Button href={"/signup"} btnName={"Sign up"}/>
            </div>
        </header>
    );
};

export default Header;
