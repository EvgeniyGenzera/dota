import React from 'react';

const HeroTable = ({heroes, abiliti, search}) => {
    const filteredHero = heroes.filter((hero) => hero.primary_attr === abiliti);
    return (
           <>
            <ul className='hero-list'>
                <h1 className='hero-list__title'>{abiliti === 'str' ? "Strange" : abiliti === 'agi' ? "Agility" : "Intelligents"}</h1>
                {
                    filteredHero.map((hero) => ( <li className={`${abiliti} hero-list__hero ${hero.localized_name.includes(search.charAt(0).toUpperCase() + search.slice(1)) ? "active": ""}`} key={hero.id}><a className='single-hero' href={`/${hero.id}`}>{hero.localized_name}</a></li>))
                }
            </ul>
           </>
    );
};

export default HeroTable;