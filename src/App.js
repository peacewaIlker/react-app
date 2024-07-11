import React, {useEffect, useState} from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

const images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
    '16.png',
    '17.png',
    '18.png',
    '19.png',
    '20.png',
    '21.png',
    '22.png',
    '23.png',
    '24.png',
    '25.png',
    '26.png',
    '27.png',
    '28.png',
    '29.png',
    '30.png',
    '31.png',
    '32.png',
    '33.png',
    '34.png',
    '35.png',
    '36.png',
    '37.png',
    '38.png',
    '39.png',
    '40.png',
    '41..png',
    '42.png',
    '43.png',
    '44.png',
    '45.png',
    // ...
];

const loadingGif = 'XDZT.gif'; // Путь к вашему GIF файлу
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
    const [loadedGif, setLoadedGif] = useState(defaultImage); // Добавьте состояние для загрузки GIF
    const [randomNumber, setRandomNumber] = useState(null);


    const generateRandomNumber = () => {
        return Math.floor(Math.random() * (600 - 500 + 1)) + 500;
    };


    const getResult = () => {
        setImage(null); // Убираем предыдущее изображение
        setRandomNumber(null);
        setIsCalculating(true);
        setLoading(true);

        // Выбираем случайное изображение
        const randomImage = images[Math.floor(Math.random() * images.length)];
        const img = new Image();
        img.src = randomImage;

        setRandomNumber(generateRandomNumber())

        img.onload = () => {
            setTimeout(() => {
                setImage(randomImage);
                setLoading(false);
                setIsCalculating(false);
            }, 3000); // Задержка для анимации загрузки
        };
    };

    const img = new Image();
    img.src = loadingGif
    img.onload = () => {
        setLoadedGif(loadingGif)
    }

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
                    {isCalculating && <img src={loadingGif} alt="Loading"/>}
                    {!isCalculating && image && (
                        <img src={image} alt="Result"/>
                    )}
                </div>
                {!isCalculating && (
                    <div className="bet-container">
                        <span className="bet">{`${randomNumber} ₴`}</span>
                    </div>
                )}
                {!isCalculating && (
                    <button onClick={getResult}>
                        {isCalculating ? 'START HACKING' : 'GET SIGNAL'}
                    </button>
                )}
            </div>
        </div>
    );

}


export default App;
