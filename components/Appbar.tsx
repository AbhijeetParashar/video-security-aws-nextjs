import Link from "next/link";
import SignInButton from "./SignInButton";

const Appbar = () => {
  return (
    <header className="flex gap-4 p-4 bg-[#41c3c2] shadow">
      <Link href={"/"}>
        <h1 className="text-2xl font-semibold text-white">DEMO AK</h1>
      </Link>
      <SignInButton />
    </header>
  );
};

export default Appbar;
