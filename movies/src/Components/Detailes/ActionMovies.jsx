import React from 'react'
import actionMovies from '../../Actiondet.js';
import { useNavigate } from 'react-router-dom';

export default function ActionMovies() {
    const navigate = useNavigate();

    const handleImageClick = (itemId) => {
        navigate(`/details/${itemId}`);  // Navigate to the details page with the movie ID
    };
    
  return (
    <>
    <h1 className="text-white w-full font-sans text-4xl md:text-6xl md:p-6 font-bold text-center mb-3 p-3 md:mb-6">
                Action Movies
            </h1>
      <div className="grid grid-cols-4 gap-6 p-4 rounded-lg mb-6">
                {actionMovies.map((action, index) => (
                    <div
                        key={action.id}
                        className="relative group rounded-lg overflow-hidden hover:scale-110 transition-all duration-300 ease-in-out"
                        onClick={() => handleImageClick(action.id)} // Handle the click to navigate
                    >
                        <img
                            src={action.image}
                            alt={action.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg font-bold">{action.title}</p>
                        </div>
                    </div>
                ))}
            </div>
    </>
  )
}
