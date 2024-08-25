import { cookies } from "next/headers";
import Link from "next/link";

export default function Home() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("next-auth.session-token")?.value || "";
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl text-[#FF8002] my-4">
        Welcome to Video Player Demo
      </h1>
      {authToken ? (
        <div className="flex justify-between md:w-[600px]">
          <Link href="/course">
            <div className="my-2 items-center justify-between text-xl font-bold border-solid border-2 bg-emerald-500 text-white p-2 rounded-lg">
              See S3 Videos
            </div>
          </Link>
          <Link href="/mux">
            <div className="my-2 items-center justify-between text-xl font-bold border-solid border-2 bg-[#DA3E99] text-white p-2 rounded-lg">
              See MUX Videos
            </div>
          </Link>
          <Link href="/video-stream">
            <div className="my-2 items-center justify-between text-xl font-bold border-solid border-2 bg-[#4183c3] text-white p-2 rounded-lg">
              See HLS Video
            </div>
          </Link>
        </div>
      ) : (
        <div className="text-2xl font-semibold mb-4 text-sky-500">
          {" "}
          Login to View Course{" "}
        </div>
      )}
    </main>
  );
}
