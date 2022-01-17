import React from 'react';

const HeroTable = ({ heroes, ability, search }) => {
	const filteredHero = heroes.filter(hero => hero.primary_attr === ability);
	return (
		<>
			<ul className={`hero-list ${ability}`}>
				<h1 className="hero-list__title">
					{ability === 'str' ? 'Strange' : ability === 'agi' ? 'Agility' : 'Intelligents'}
				</h1>
				{filteredHero.map(hero => (
					<li
						className={`hero-list__hero ${
							hero.localized_name.includes(search.charAt(0).toUpperCase() + search.slice(1)) ? 'active' : ''
						}`}
						key={hero.id}
					>
						<a className="single-hero" href={`/${hero.id}`}>
							<img className="single-hero__img" src={`https://api.opendota.com${hero.img}`} alt="hero" />
							<span className="single-hero__name">{hero.localized_name}</span>
						</a>
					</li>
				))}
			</ul>
		</>
	);
};

export default HeroTable;
