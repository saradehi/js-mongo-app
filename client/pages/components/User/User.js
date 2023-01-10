import Link from "next/link";
import { signOut } from "next-auth/react";

const User = ({name}) => {

  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorized User Homepage</h3>
      <div className="details">
        <h2>Hi, {name}!</h2>
      </div>
      <div className="flex justify-center">
        <button onClick={() => signOut()} className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 gb-gray-50">
          Sign Out
        </button>
      </div>
      <div className="flex justify-center">
        <Link href={"/profile"}>
          <a className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Profile Page
          </a>
        </Link>
      </div>
    </main>
  );
};

export default User;