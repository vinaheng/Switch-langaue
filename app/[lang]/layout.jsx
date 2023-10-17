import Header from '../[lang]/components/header';
require('@/app/globals.css');
export const metadata = {
    title: 'Next js',
    description: 'Run Build web',
};

export default function RootLayout({ children, params }) {
    return (
        <html lang={params.lang}>
            <body className="container m-auto text-black font-bold">
                <div className="bg-gray-200 h-screen w-screen fixed left-0 -z-10"></div>
                <nav>
                    <Header />
                </nav>
                {children}
            </body>
        </html>
    );
}
