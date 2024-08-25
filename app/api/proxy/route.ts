import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const cloudFrontUrl =
    "https://dnkcbwlsi6wyr.cloudfront.net/SampleVideo_1280x720_2mb.mp4"; // Use the appropriate signed URL here

  const response = await fetch(cloudFrontUrl);

  const videoBlob = await response.blob();

  return new NextResponse(videoBlob, {
    headers: {
      "Content-Type": response.headers.get("Content-Type") || "video/mp4",
      "Content-Disposition": "inline",
      "Cache-Control": "no-store",
    },
  });
}
