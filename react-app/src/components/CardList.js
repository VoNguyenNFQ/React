import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const CardList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("https://ghibliapi.herokuapp.com/films")
            .then(data => setList(data.data))
            .catch(err => console.log(err.response.statusText))
    }, [])

    return (
        <section className="flex flex-row px-5 py-7 gap-5">
            <div className="card-list grid sm:w-full sm:grid-cols-1 md:grid-cols-3 sm: lg:grid-cols-4 gap-5">
                {
                    list.length && list.map(el =>
                        <Card key={el.id} data={el} />
                    )
                }
            </div>
        </section>
    );
};

export default CardList;