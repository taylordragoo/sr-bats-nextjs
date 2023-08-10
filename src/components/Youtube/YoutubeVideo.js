import React, { useEffect, useState } from 'react';
import * as styles from './YoutubeVideo.module.css';

const YoutubeVideo = ({ videoId }) => {
    const [player, setPlayer] = useState(null);
    const [isMuted, setIsMuted] = useState(true);

    const containerStyle = {
        position: 'relative',
        width: '100%',
        minHeight: '80vh',
        overflow: 'hidden',
    };

    const iframeStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.body.appendChild(script);

        window.onYouTubeIframeAPIReady = () => {
            const newPlayer = new window.YT.Player('player', {
                height: '390',
                width: '640',
                videoId: videoId,
                playerVars: {
                    'autoplay': 1,
                    'controls': 0,
                    'mute': 1,
                    'rel': 0,
                    'modestbranding': 1,
                    'iv_load_policy': 3,
                    'loop': 1,
                    'playlist': videoId,
                    'showinfo': 0,
                },
                events: {
                    'onReady': function (event) {
                        event.target.mute();
                    }
                }
            });
            setPlayer(newPlayer);
        }

        return () => {
            document.body.removeChild(script);
        }
    }, [videoId]);

    const toggleMute = () => {
        if (isMuted) {
            player.unMute();
        } else {
            player.mute();
        }
        setIsMuted(!isMuted);
    }

    return (
        <div style={containerStyle}>
            <div id="player" style={iframeStyle}></div>
            <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
        </div>
    );
};

export default YoutubeVideo;
