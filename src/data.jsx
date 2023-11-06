import { FaHtml5, FaReact } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

import imgCine from './assets/screen-cine.webp';
import imgCossack from './assets/screen-cossack.webp';
import imgGalaxy from './assets/screen-nintendo.webp';
import { nanoid } from 'nanoid';

export const links = [
	{ id: nanoid(), href: '#home', text: 'home' },
	{ id: nanoid(), href: '#about', text: 'about' },
	{ id: nanoid(), href: '#skills', text: 'skills' },
	{ id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
	{
		id: nanoid(),
		title: 'HTML & CSS',
		icon: <FaHtml5 className='w-16 h-16 text-sky-500' />,
		text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences',
	},
	{
		id: nanoid(),
		title: 'JavaScript',
		icon: <SiJavascript className='w-16 h-16 text-sky-500' />,
		text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
	},
		{
		id: nanoid(),
		title: 'TypeScript',
		icon: <SiTypescript className='w-16 h-16 text-sky-500' />,
		text: 'Proficient in leveraging TypeScript to develop engaging and dynamic web applications, prioritizing fluid user experiences and enhanced functionality',
	},
	{
		id: nanoid(),
		title: 'React',
		icon: <FaReact className='w-16 h-16 text-sky-500' />,
		text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture',
	},
	{
		id: nanoid(),
		title: 'Tailwind',
		icon: <SiTailwindcss className='w-16 h-16 text-sky-500' />,
		text: 'Mastering the art of Tailwind CSS to sculpt dynamic, adaptable web interfaces, focusing on lightning-fast development and the graceful execution of design',
	},
	{
		id: nanoid(),
		title: 'Next',
		icon: <SiNextdotjs className='w-16 h-16 text-sky-500' />,
		text: 'Fluent in Next.js to architect performance, dynamic web applications, centered on efficient rendering, graceful transitions, and fluid user experiences',
	},
];

export const projects = [
	{
		id: nanoid(),
		img: imgCossack,
		url: 'https://cossack.onrender.com/',
		github: 'https://github.com/jackal7819/Cossack',
		title: 'Cossack',
		text: 'The Cossack Project is a platform showcasing games that feature Ukrainian translations, displaying the type of translation, platform, and description. Supporting the Ukrainian language within the gaming industry, this project provides a convenient overview of available games with comprehensive descriptions and technical details. Technologies used: React, Context, TanStack Query, Tailwind CSS.',
	},
	{
		id: nanoid(),
		img: imgGalaxy,
		url: 'https://nintendo-store.onrender.com/',
		github: 'https://github.com/jackal7819/Nintendo-Store',
		title: 'Gaming Galaxy',
		text: 'Gaming Galaxy represents a visionary game store that offers an immersive gaming experience. The platform is crafted to provide an extensive collection of games, empowering users with a seamless search functionality, sorting capabilities, diverse game categories, and a hassle-free shopping cart feature. Technologies used: React, Redux Toolkit, TypeScript, SCSS, Firebase.',
	},
	{
		id: nanoid(),
		img: imgCine,
		url: 'https://imdb-clone-seven-roan.vercel.app/',
		github: 'https://github.com/jackal7819/IMDB-Clone',
		title: 'CINE World',
		text: 'CINE World is a movie database website built using the TMDB API. It allows users to view information about movies, ratings, what is currently on top. The goals of the project are to provide a complete movie database, make it easy for users to search and explore movies, and see the rating and votes. There is a dark mode in this app. Technologies used: NEXT.js, TypeScript, Tailwind CSS, TMDB.',
	},
];
