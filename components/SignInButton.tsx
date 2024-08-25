"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-black font-bold text-center text-xl">
          {session.user.name}
        </p>
        <button
          className="h-9 w-auto bg-[#ea6c6c] text-white rounded-lg px-2"
          onClick={() => signOut()}
        >
          Log out
        </button>
      </div>
    );
  }
  return (
    <div className="flex gap-4 ml-auto">
      <button
        className="h-9 w-auto m-auto rounded-lg px-2 bg-[#d95f0e] font-bold text-md text-white justify-end"
        onClick={() => signIn()}
      >
        Login
      </button>
    </div>
  );
};

export default SignInButton;
