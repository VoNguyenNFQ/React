import React from 'react';

const Modal = ({ open, setOpen, data }) => {
    const handleClose = () => {
        setOpen(false);
    }
    return (
        open &&
        <div className="fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="exampleModalLg" tabIndex="-1"
            aria-labelledby="exampleModalLgLabel"
            aria-modal="true"
            role="dialog"
        >
            <div className="relative sm:w-10/12 md:w-10/12 lg:w-4/6 mx-auto mt-5 pointer-events-none">
                <div className="border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div className="relative p-4">
                        <img className='w-full' src={data.movie_banner} alt={data.title} />
                        <button type="button"
                            className="absolute leading-none rounded-full bg-white leading-6 top-6 right-5 box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            aria-label="Close"
                            onClick={handleClose}
                        >
                            &#10006;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;