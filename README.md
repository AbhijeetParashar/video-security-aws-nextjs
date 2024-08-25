# Video Streaming Techniques Demo

This repository demonstrates various video streaming techniques using Next.js, including integration with AWS S3, CloudFront, MediaConvert, and MUX.

## Table of Contents

1. [Overview](#overview)
2. [Techniques](#techniques)
   - [AWS S3 + CloudFront with Signed URLs](#aws-s3--cloudfront-with-signed-urls)
   - [MUX](#mux)
   - [AWS S3 + CloudFront + MediaConvert](#aws-s3--cloudfront--mediaconvert)
3. [Setup and Installation](#setup-and-installation)
4. [Usage](#usage)
5. [Contributing](#contributing)

## Overview

This demo project is built using Next.js to showcase different video streaming techniques for secure and efficient video delivery. It includes examples of using:

- **AWS S3 + CloudFront with Signed URLs**: Secure video delivery using AWS S3 for storage and CloudFront for content delivery with signed URLs.
- **MUX**: A video platform providing hosting, transcoding, and streaming services with analytics.
- **AWS S3 + CloudFront + MediaConvert**: A pipeline for video transcoding and delivery using AWS services.

## Techniques

### AWS S3 + CloudFront with Signed URLs

This technique uses AWS S3 to store video files and AWS CloudFront as the CDN to distribute content. Signed URLs are generated to restrict access to authorized users only, providing secure video delivery.

#### Features

- Secure video streaming with restricted access.
- Content delivery through AWS CloudFront.
- Serverless architecture.

### MUX

MUX provides a powerful video platform with capabilities like hosting, transcoding, and streaming. It also offers detailed video analytics and monitoring tools.

#### Features

- Easy integration with RESTful API.
- Automatic transcoding and adaptive bitrate streaming.
- Advanced video analytics.

### AWS S3 + CloudFront + MediaConvert

This approach utilizes AWS MediaConvert to transcode videos stored in S3. The transcoded videos are then delivered via AWS CloudFront, optimizing the delivery for different devices and network conditions.

#### Features

- High-quality video transcoding with AWS MediaConvert.
- Adaptive bitrate streaming for various devices.
- Secure content delivery with AWS CloudFront.

## Setup and Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/video-streaming-techniques-demo.git
   cd video-streaming-techniques-demo

   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables:**:

```bash
NEXT_PUBLIC_BASE_URL
NEXTAUTH_URL
NEXTAUTH_SECRET
NEXT_PUBLIC_GOOGLE_CLIENT_ID
NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
MUX_TOKEN_ID
MUX_TOKEN_SECRET
NEXT_PUBLIC_AWS_ACCESS_KEY_ID
NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
NEXT_PUBLIC_AWS_REGION
NEXT_PUBLIC_S3_BUCKET_NAME
NEXT_PUBLIC_CLOUDFRONT_KEY_PAIR_ID
NEXT_PUBLIC_CLOUDFRONT_PRIVATE_KEY
```

4. **Run the development server:**:

```bash
npm run dev
```

## Usage

After setting up the project and running the development server, you can explore the different video streaming techniques implemented in this demo. Each technique is demonstrated on a separate page, accessible via specific routes. Below is a guide on how to use each feature.

### 1. AWS S3 + CloudFront with Signed URLs

- **Description**: This page demonstrates secure video delivery using AWS S3 and CloudFront with signed URLs. Users can only access the video if they have a valid signed URL, ensuring restricted access to authorized users.

### 2. MUX

- **Description**: This page demonstrates video streaming using MUX, a third-party service that handles video hosting, transcoding, and playback with adaptive bitrate streaming and built-in analytics.

### 3. AWS S3 + CloudFront + MediaConvert

- **Description**: This page showcases a pipeline using AWS S3, MediaConvert, and CloudFront for video transcoding and streaming. Videos are first transcoded to multiple formats with MediaConvert and then delivered via CloudFront with adaptive bitrate streaming.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
