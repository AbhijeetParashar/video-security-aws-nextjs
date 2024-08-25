"use client";

import { useEffect, useState } from "react";

interface VideoPlayerProps {
  signedUrl: string;
}

const Player: React.FC<VideoPlayerProps> = ({ signedUrl }) => {
  const [videoSrc, setVideoSrc] = useState<string>("");

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch("/api/proxy");
        console.log(signedUrl);
        console.log("response", response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const videoBlob = await response.blob();
        const blobUrl = URL.createObjectURL(videoBlob);

        setVideoSrc(blobUrl);
      } catch (error) {
        console.error("Failed to fetch video:", error);
      }
    };

    fetchVideo();

    return () => {
      if (videoSrc) {
        URL.revokeObjectURL(videoSrc);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signedUrl]);

  return (
    <video
      controls
      src={videoSrc}
      autoPlay
      height={500}
      width={600}
      controlsList="nodownload"
    />
  );
};

export default Player;
