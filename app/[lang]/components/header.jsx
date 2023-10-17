import Link from 'next/link';
import SwitchLang from './switch_langauge';
export default function Header() {
    return (
        <div className="flex gap-4 justify-between bg-slate-700 p-4">
            <div className=" flex gap-5">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <SwitchLang />
        </div>
    );
}
