import Link from "next/link";

const User = () => {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorized User Homepage</h3>
      <div className="details">
        <h5>Unknown</h5>
        <h5>Unknown</h5>
      </div>
      <div className="flex justify-center">
        <button className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 gb-gray-50">
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