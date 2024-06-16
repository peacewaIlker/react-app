import React, { useState } from 'react';
import './App.css';

const images = [
    'image1.jpg',
    'logo192.png',
    'logo512.png'
    // Убедитесь, что пути к изображениям корректны
    // ...
];

function App() {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const getResult = () => {
        setImage(null); // Убираем предыдущую картинку
        setIsCalculating(true);
        setLoading(true);
        setTimeout(() => {
            const randomImage = images[Math.floor(Math.random() * images.length)];
            setImage(randomImage);
            setLoading(false);
            setIsCalculating(false);
        }, 3000);
    };

    return (
        <div className="App">
            {isCalculating && <div className="loading">Calculating...</div>}
            {!isCalculating && !image && (
                <>
                    <h1>Нажми сюда</h1>
                    <div className="arrow-down">↓</div>
                    <button onClick={getResult}>Рассчитать результат</button>
                </>
            )}
            {!isCalculating && image && (
                <div className="result-container">
                    <div className="image-container">
                        <img src={image} alt="Result" />
                    </div>
                    <button onClick={getResult}>Получить прогноз</button>
                </div>
            )}
        </div>
    );
}

export default App;
