import Link from 'next/link';

function Siderbar() {
    return (
        <div className="flex">
            <Link href="/contact/page1">Page 01</Link>
            <Link href="/contact/page2">Page 02</Link>
        </div>
    );
}

export default Siderbar;
