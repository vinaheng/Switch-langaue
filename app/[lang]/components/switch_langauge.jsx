'use client';
import kh from '@/app/assets/Flag-Cambodia.jpg';
import en from '@/app/assets/Kingdom.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function LocaleSwitcher() {
    const pathName = usePathname();
    const check = pathName.split('/')[1];
    const redirectedPathName = (locale) => {
        if (!pathName) return '/';
        const segments = pathName.split('/');
        segments[1] = locale;
        return segments.join('/');
    };
    return (
        <ul className="flex gap-x-3">
            {check === 'en' ? (
                <a href={redirectedPathName('kh')} className="rounded-md border bg-black  text-white">
                    <img
                        className="w-10 h-6"
                        src="https://cdn.britannica.com/27/4027-004-B57F84E9/Flag-Cambodia.jpg"
                        alt=""
                    />
                </a>
            ) : (
                <a href={redirectedPathName('en')} className="rounded-md border bg-black  text-white">
                    <img
                        className="w-10 h-6"
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                        alt=""
                    />
                </a>
            )}
        </ul>
    );
}
