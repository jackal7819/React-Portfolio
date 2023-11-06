import SectionTitle from './SectionTitle';
import aboutSvg from '../assets/about.svg';

const About = () => {
	return (
		<section className='py-20 bg-white' id='about'>
			<div className='grid items-center gap-16 align-element md:grid-cols-2'>
				<img src={aboutSvg} alt='about' className='w-full h-64' />
				<article>
					<SectionTitle text='code and tea' />
					<p className='mt-8 leading-loose text-slate-600'>
						Hello! I&apos;m an aspiring developer passionate about
						the world of React and front-end development. My journey
						into development began with an exciting exploration of
						React fundamentals, understanding its nuances, and
						applying it in small-scale projects. My enthusiasm for
						crafting web applications and the thirst for acquiring
						new knowledge drive me to seek fresh opportunities for
						growth. I aspire not just to write code, but to create
						amazing user interfaces that make web processes more
						intuitive and engaging.
					</p>
				</article>
			</div>
		</section>
	);
};

export default About;
