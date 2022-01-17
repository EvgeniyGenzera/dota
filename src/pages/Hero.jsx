import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Hero = () => {
	const location = useLocation();
	const [hero, setHero] = useState([]);
	useEffect(() => {
		getHeroes();
	}, []);
	const getHeroes = () => {
		axios
			.get('https://api.opendota.com/api/heroStats')
			.then(response => {
				setHero(response.data.filter(hero => hero.id === parseInt(location.pathname.substring(1)))[0]);
			})
			.catch(error => {
				console.log(`We have a server error`, error);
			});
	};
	return (
		<div className="hero-page">
			<a className="hero-page__homeLink" href="/">
				Go to Home Page
			</a>
			<h1 className="hero-page__title">{hero.localized_name}</h1>
			<img src={`https://api.opendota.com${hero.img}`} alt="hero" />
			<ul className="hero-page__list">
				<li className="specifications">Base Health - {hero.base_health}</li>
				<li className="specifications">Base Health Regen - {hero.base_health_regen}</li>
				<li className="specifications">Base Mana Regen - {hero.base_mana_regen}</li>
				<li className="specifications">
					Base Attack Max - {hero.base_attack_max}, Base Attack Min - {hero.base_attack_min}
				</li>
				<li className="specifications">Base Int - {hero.base_int}</li>
				<li className="specifications">Base Str - {hero.base_str}</li>
				<li className="specifications">Base Agi - {hero.base_agi}</li>
				<li className="specifications">Move Speed - {hero.move_speed}</li>
			</ul>
		</div>
	);
};

export default Hero;
