import { useState, useEffect } from "react";

function Forest() {
    const [forest, setForest] = useState('')

    const genRandomForest = () => {
        let randomString = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 60; i++) {
            randomString += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        setForest(randomString)
    };

    const numToForest = (digit: String) => {
        switch (digit) {
            case '1':
                return '🌲';
            case '2':
                return '🌳';
            case '3':
                return '🪵';
            case '4':
                return '🍄';
            case '5':
                return '🐇';
            case '6':
                return '🦋';
            case '7':
                return '🌲';
            case '8':
                return '🦌';
            case '9':
                return '🌳'
            case 'a':
                return '🌲';
            case 'b':
                return '🌳';
            case 'c':
                return '🪨';
            case 'd':
                return '🦆';
            case 'e':
                return '🦔';
            case 'h':
                return '🪻';
            case 's':
                return '🐌';
            case 't':
                return '⛺';
            default:
                return '.';
        }
    };

    useEffect(() => {
        genRandomForest();
    }, [])

    return (
        <div className="my-9 cursor-pointer select-none" onClick={() => genRandomForest()}>
            <div className="grid grid-cols-12 gap-y-3 text-white">
                {forest.split('').map((f: String, i) => (
                    <p key={i}>{numToForest(f)}</p>
                ))}
            </div>
            <p className="italic text-center text-slate-300 m-3">[ click for random forest ]</p>
        </div>
    )
}

export default Forest
