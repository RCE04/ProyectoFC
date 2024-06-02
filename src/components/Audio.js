import React, { useRef, useEffect } from 'react';

const AudioPlayer = ({ src }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load();
        }
    }, [src]);

    const playAudio = () => {
        audioRef.current.play();
    };

    const pauseAudio = () => {
        audioRef.current.pause();
    };

    return (
        <div className="p-4 bg-gray-100 rounded-md">
            <audio ref={audioRef} className="w-full">
                <source src={src} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <div className="mt-4 flex justify-center space-x-4">
                <button onClick={playAudio} className="px-4 py-2 bg-blue-500 text-white rounded-md">Play</button>
                <button onClick={pauseAudio} className="px-4 py-2 bg-yellow-500 text-white rounded-md">Pause</button>
            </div>
        </div>
    );
};

export default AudioPlayer;