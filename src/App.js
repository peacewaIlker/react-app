import React, {useEffect, useState} from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

const images = [
    'testpic.jpg' // Убедитесь, что пути к изображениям корректны
    // ...
];

const loadingGif = 'loading.gif'; // Путь к вашему GIF файлу
const headerImage = 'tg.png'; // Путь к вашему изображению для замены подписи
const defaultImage = 'basic.png'; // Путь к изображению по умолчанию

function App() {

    useEffect(() => {
        tg.ready()
        tg.expand()
    }, []);
    const [image, setImage] = useState(defaultImage);
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
            <div className="header">
                <div className="header-top">
                    <img src={headerImage} alt="Header" className="header-image" />
                    <span className="header-text">tg_marcus_top1</span>
                </div>
                <div className="header-text header-text-bold">MINES HACKER</div>
            </div>
            <div className="result-container">
                <div className="image-container">
                    {isCalculating && <img src={loadingGif} alt="Loading" />}
                    {!isCalculating && image && (
                        <img src={image} alt="Result" />
                    )}
                </div>
                {!isCalculating && (
                    <button onClick={getResult}>
                        {isCalculating || !image ? 'START HACKING' : 'GET SIGNAL'}
                    </button>
                )}
            </div>
        </div>
    );
}

export default App;
