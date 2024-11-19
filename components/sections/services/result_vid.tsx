import React from 'react';

interface VideoPlayerProps {
  className?: string; // Add className as an optional prop
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ className }) => {
  return (
    <video width={930} className={className} controls autoPlay loop muted>
      <source src="/assets/result_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
