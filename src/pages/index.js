import HomePage from '@/components/Home';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>ASBot</title>
			</Head>
			<main
				className={`flex min-h-screen flex-col items-center justify-between py-6 px-[10vw] ${inter.className}`}
			>
				<HomePage />
			</main>
		</>
	);
}
