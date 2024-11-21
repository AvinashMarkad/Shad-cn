import React from 'react';

const foodItems = [
    {
        name: 'Pizza',
        description: 'Delicious cheese pizza with fresh ingredients.',
        image: '/images/pizza.jpg',
    },
    {
        name: 'Burger',
        description: 'Juicy beef burger with lettuce, tomato, and cheese.',
        image: '/images/burger.jpg',
    },
    {
        name: 'Pasta',
        description: 'Creamy Alfredo pasta with grilled chicken.',
        image: '/images/pasta.jpg',
    },
];

const TestImgCode = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Food Restaurant Menu</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {foodItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                            <p className="text-gray-700">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestImgCode;