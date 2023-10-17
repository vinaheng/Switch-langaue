import Sidbar from './components/sidbar';
export const metadata = {
    title: 'Next js Contact',
    description: 'Run Build web',
};
export default function ContactLayout({ children }) {
    return (
        <>
            <div className="flex gap-4 ">
                <div className=" bg-green-300 h-screen">
                    <Sidbar />
                </div>
                <div className="w-full">{children}</div>
            </div>
        </>
    );
}
