import React, { useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
  children: React.ReactNode;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoUrl, children }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slightly slower playback for more dramatic effect
    }
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/video/coffe.mp4"
      >
        Your browser does not support the video tag.

      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-brown-900/70 via-brown-900/50 to-brown-900/80"></div>

      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;