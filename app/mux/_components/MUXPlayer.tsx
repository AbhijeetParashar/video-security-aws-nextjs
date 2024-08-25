import videoSRC from "@/videos/TestVideo.mp4";
import Video from "next-video";

export default function MUXPlayer() {
  return (
    <Video
      src={videoSRC}
      style={{ maxWidth: "42rem", maxHeight: "25rem" }}
      accentColor={"orange"}
    />
  );
}
