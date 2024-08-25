"use client";
import ReactPlayer from "react-player";

interface IVidoPlayerProps {
  videoURL: string;
  videoHeight: number;
  videoWidth: number;
  isControlsRequired: boolean;
}

const VideoPlayer = ({
  videoURL,
  videoHeight,
  videoWidth,
  isControlsRequired = false,
}: IVidoPlayerProps) => {
  return (
    <div className="react-player-video" key={videoURL}>
      <ReactPlayer
        src={videoURL}
        height={videoHeight}
        width={videoWidth}
        controls={isControlsRequired}
        light={false}
        pip={true}
      />
    </div>
  );
};

export default VideoPlayer;
