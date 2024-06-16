import React, {useEffect, useState} from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

const images = [
    // Добавьте URL-адреса или импортируйте изображения здесь
    'logo192.png',
    'logo512.png',
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
            {!image && !isCalculating && (
                <>
                    <h1>Нажми сюда</h1>
                    <div className="arrow-down">↓</div>
                    <button onClick={getResult}>Рассчитать результат</button>
                </>
            )}
            {loading && <div className="loading">Calculating...</div>}
            <div className="result-container">
                {image && !loading && (
                    <div className="image-container">
                        <img src={image} alt="Result" />
                    </div>
                )}
                <button onClick={getResult}>Получить прогноз</button>
            </div>
        </div>
    );
}

export default App;
