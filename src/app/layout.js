import './globals.css';
import { Inter, Nunito } from 'next/font/google';
import ApiProviders from '@/components/ApiProviders';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const nunito = Nunito({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-nunito',
    weight: ['400', '500', '700'],
});

export const metadata = {
    title: 'Nextjs RTK Query',
    description: 'This project practical for RTK Query',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={`${nunito.variable} ${inter.variable}`}>
            <body suppressHydrationWarning={true}>
                <ApiProviders>{children}</ApiProviders>
            </body>
        </html>
    );
}
