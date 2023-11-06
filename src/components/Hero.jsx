import { FaGithubSquare, FaLinkedin, FaTelegram } from 'react-icons/fa';

import heroImg from '../assets/develop_app.svg';

const Hero = () => {
	return (
		<div className='py-24 bg-sky-100'>
			<div className='grid items-center gap-8 md:grid-cols-2 align-element'>
				<article>
					<h1 className='font-bold tracking-wider text-7xl'>
						I&apos;m Viktor
					</h1>
					<p className='mt-4 text-3xl tracking-wide capitalize text-slate-700'>
						Front-End Developer
					</p>
					<p className='mt-2 text-lg capitalize text-slate-700'>
						transforming concepts into engaging interfaces
					</p>
					<div className='flex mt-4 duration-300 gap-x-4 '>
						<a
							href='https://github.com/jackal7819'
							target='_blank'
							rel='noreferrer'>
							<FaGithubSquare
								size={30}
								className='text-sky-600 hover:text-sky-900'
							/>
						</a>
						<a
							href='https://t.me/jackal3156'
							target='_blank'
							rel='noreferrer'>
							<FaTelegram
								size={30}
								className='text-sky-600 hover:text-sky-900'
							/>
						</a>
						<a
							href='https://www.linkedin.com/in/viktor-filippov-51a259241/'
							target='_blank'
							rel='noreferrer'>
							<FaLinkedin
								size={30}
								className='text-sky-600 hover:text-sky-900'
							/>
						</a>
					</div>
				</article>
                <article className='hidden md:block'>
                    <img src={heroImg} alt="developer" className='h-80 lg:h-96'/>
                </article>
			</div>
		</div>
	);
};

export default Hero;
