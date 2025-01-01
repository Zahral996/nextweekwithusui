"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface Language {
    code: string;
    name: string;
    svg: string; 
}

const languages: Language[] = [
    { code: 'persian', name: 'Persian', svg: '/images/icons/flags/iran-flag-circular-17855.svg' },
    { code: 'english', name: 'English', svg: '/images/icons/flags/uk-flag-circular-17883.svg' },
    { code: 'german', name: 'German', svg: '/images/icons/flags/germany-flag-circular-17755.svg' },
    { code: 'arabic', name: 'Arabic', svg: '/images/icons/flags/united-arab-emirates-flag-circular-17754.svg' },
    { code: 'spanish', name: 'Spanish', svg: '/images/icons/flags/spain-flag-circular-17884.svg' }
];

const LanguageMenu: React.FC<{ onLanguageChange: (language: string) => void }> = ({ onLanguageChange }) => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]); 

    const handleLanguageChange = (language: Language) => {
        setSelectedLanguage(language);
        onLanguageChange(language.code); 
    };

    return (
        <div className="flex flex-col lg:grid grid-cols-3">
            <div className="menu-item cursor-pointer flex flex-row justify-center items-center gap-x-1" id="language-menu">
                <Image src={selectedLanguage.svg} alt={`${selectedLanguage.name} flag`} width={22} height={22} />
                <span className="text-gray-600 block py-2 text-sm hover:text-black">{selectedLanguage.name}</span>
            </div>
            <div className="flex flex-col mt-2">
                {languages.map((language) => (
                    <div key={language.code} className="cursor-pointer flex items-center gap-x-2" onClick={() => handleLanguageChange(language)}>
                        <Image src={language.svg} alt={`${language.name} flag`} width={22} height={22} />
                        <span className="text-gray-600">{language.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LanguageMenu;
