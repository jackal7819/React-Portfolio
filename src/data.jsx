import { FaHtml5, FaReact } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

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
		title: 'HTML&CSS',
		icon: <FaHtml5 className='w-16 h-16 text-sky-500' />,
		text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
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
		text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
	},
	{
		id: nanoid(),
		title: 'React',
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
		img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://react-projects.netlify.app/',
		github: 'https://github.com/john-smilga',
		title: 'first project',
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
	},
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://react-projects.netlify.app/',
		github: 'https://github.com/john-smilga',
		title: 'second project',
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
	},
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://react-projects.netlify.app/',
		github: 'https://github.com/john-smilga',
		title: 'third project',
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
	},
];
