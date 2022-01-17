import React, {useEffect, useState} from 'react';
import HeroTable from '../components/HeroTable'
import axios from "axios";

const Home = () => {
    const [heroes, setHeroes] = useState([]);
    const [search, setSearch] = useState('search');
    const abilities = ['str', 'agi', 'int'];
    useEffect(() => {
        getHeroes();
    }, []);
    const getHeroes = () => {
        axios
        .get("https://api.opendota.com/api/heroStats")
        .then((response) => {
            setHeroes(response.data)
        })
        .catch((error) => {
            console.log(`We have a server error`, error);
        });
    }
    const handleChange = (event) => {
        event.target.value.length > 2 ? setSearch(event.target.value) : setSearch("search")
    }
    return (
        <>
            <form className='search'>
                <input onChange={(event) => handleChange(event)} className='search__field' type="text" placeholder='Enter Hero Name'/>
            </form>
            <div className='hero-table'>
                {
                    heroes.length > 0 && abilities.map((abiliti, index) => (
                        <HeroTable key={index} heroes={heroes} abiliti={abiliti} search={search}/>
                    ))
                }
            </div>
        </>
    );
};


export default Home;