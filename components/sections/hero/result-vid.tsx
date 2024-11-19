import React from 'react';

interface VideoPlayerProps {
  className?: string; // Add className as an optional prop
  videoId: string; // Add videoId as a required prop for YouTube videos
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ className, videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&mute=1&playlist=${videoId}`;

  return (
    <iframe
      width="930"
      height="523" // Set the height to maintain aspect ratio
      className={className}
      src={embedUrl}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;



