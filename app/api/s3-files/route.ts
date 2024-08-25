import { getSignedUrl } from "@aws-sdk/cloudfront-signer"; // Import your signing function
import AWS from "aws-sdk";
import { NextRequest, NextResponse } from "next/server";

// Configure AWS SDK
AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_AWS_REGION,
});

const s3 = new AWS.S3();

export async function GET(req: NextRequest) {
  try {
    // Fetch files from S3 bucket
    const bucketParams = {
      Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME!,
    };

    const data = await s3.listObjectsV2(bucketParams).promise();
    const s3Files = data.Contents;

    if (!s3Files || s3Files.length === 0) {
      return NextResponse.json(
        { message: "No files found in the bucket." },
        { status: 200 }
      );
    }

    // Define CloudFront credentials
    const privateKey = process.env.NEXT_PUBLIC_CLOUDFRONT_PRIVATE_KEY!;
    const keyPairId = process.env.NEXT_PUBLIC_CLOUDFRONT_KEY_PAIR_ID!;

    // Create signed URLs for each S3 file
    const filesWithSignedUrls = s3Files.map((file) => {
      const url = `https://dnkcbwlsi6wyr.cloudfront.net/${file.Key}`; // Replace with your CloudFront URL

      // Set expiration time for 1 minute from the current time
      const dateLessThan = new Date();
      dateLessThan.setMinutes(dateLessThan.getMinutes() + 1);

      const signedUrl = getSignedUrl({
        url,
        keyPairId,
        privateKey,
        dateLessThan: dateLessThan.toISOString(), // Set 1-minute expiration time
      });

      return {
        fileName: file.Key,
        signedUrl,
      };
    });

    // Send response with file names and signed URLs
    return NextResponse.json(filesWithSignedUrls, { status: 200 });
  } catch (error) {
    console.error(
      "Error fetching files from S3 or generating signed URLs:",
      error
    );
    return NextResponse.json(
      { error: "Error fetching files from S3 or generating signed URLs." },
      { status: 500 }
    );
  }
}
