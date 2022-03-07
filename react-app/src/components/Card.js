import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ data }) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    }
    return (
        <>
            <div
                className="card-item rounded overflow-hidden shadow-lg cursor-pointer"
                onClick={handleClick}
            >
                <img className=" w-full" src={data.image} alt={data.title} />
                <div className="px-6 py-4">
                    <div className="text-white font-bold text-xl mb-2">{data.title}</div>
                    <p className="text-gray-400 text-base">Japanese name: {data.original_title}</p>
                    <p className="text-gray-400 text-base">Release Date: {data.release_date}</p>
                    <p className="text-gray-400 text-base">Rate: <span className="text-yellow-500">{data.rt_score}</span></p>
                </div>
            </div>
            <Modal open={open} data={data} setOpen={setOpen}/>
        </>
    );
};

export default Card;