import { links } from '../data';

const Navbar = () => {
	return (
		<nav className='bg-sky-100'>
			<div className='flex flex-col px-8 py-4 mx-auto max-w-7xl sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
				<h2 className='text-3xl font-bold'>
					Site<span className='text-sky-600'>Craft</span>
				</h2>
				<div className='flex gap-x-3'>
					{links.map((link) => (
						<a
							key={link.id}
							href={link.href}
							className='text-xl tracking-wide capitalize duration-300 hover:text-sky-600'>
							{link.text}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
