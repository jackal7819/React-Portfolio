import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectsCard = ({ url, img, github, title, text }) => {
	return (
		<article className='duration-300 bg-white rounded-lg shadow-md hover:shadow-xl'>
			<img
				src={img}
				alt={title}
				className='object-cover w-full h-64 rounded-t-lg'
			/>
			<div className='p-8'>
				<h2 className='text-xl font-medium'>{title}</h2>
				<p className='mt-4 leading-loose text-slate-700'>{text}</p>
				<div className='flex mt-4 duration-300 gap-x-4 '>
					<a href={github} target='_blank' rel='noreferrer'>
						<FaGithubSquare
							size={30}
							className='text-sky-600 hover:text-sky-900'
						/>
					</a>
					<a href={url} target='_blank' rel='noreferrer'>
						<TbWorldWww
							size={30}
							className='text-sky-600 hover:text-sky-900'
						/>
					</a>
				</div>
			</div>
		</article>
	);
};

export default ProjectsCard;
