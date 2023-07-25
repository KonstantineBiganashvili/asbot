import HomePage from '@/components/Home';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between py-6 px-[10vw] ${inter.className}`}
		>
			<HomePage />
		</main>
	);
}
