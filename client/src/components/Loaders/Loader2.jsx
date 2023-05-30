import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import video from '../imagenes/videoLoader2.mp4'
import './Loader1.css'

const VideoOverlay = () => {
  const [showVideo, setShowVideo] = useState(true);
  const history = useHistory();

  useEffect(() => {
    // Ocultar el video después de 5 segundos
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 120000);

    // Redirigir a la siguiente ruta después de ocultar el video
    // const redirectTimer = setTimeout(() => {
    //   history.push('/home');
    // }, 3000);

    return () => {
        clearTimeout(timer);
        // clearTimeout(redirectTimer);
    };
    }, [history]);

    return (
    <div  className='all-init'>
        <div>
            {showVideo && (
                <div className="video-overlay">
                    <video src={video} autoPlay loop muted type="video/mp4" id="loader2" className="fullscreen-video"/>
                </div>
            )}
        </div>

    </div>
    );
};

export default VideoOverlay;

