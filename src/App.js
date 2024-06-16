import React, { useState } from 'react';
import './App.css';

const images = [
    'image1.jpg', // Убедитесь, что пути к изображениям корректны
    'logo192.png'
    // ...
];

const loadingGif = 'gus.gif'; // Путь к вашему GIF файлу

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
            <div className="top-container">
                {!isCalculating && !image && (
                    <>
                        <h1>Нажми сюда</h1>
                        <div className="arrow-down">↓</div>
                    </>
                )}
            </div>
            <div className="result-container">
                <div className="image-container">
                    {isCalculating && <img src={loadingGif} alt="Loading" />}
                    {image && !loading && (
                        <img src={image} alt="Result" />
                    )}
                </div>
                <button onClick={getResult}>
                    {isCalculating || !image ? 'Рассчитать результат' : 'Получить прогноз'}
                </button>
            </div>
        </div>
    );
}

export default App;
