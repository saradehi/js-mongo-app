import React from "react";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";

const Guest = () => {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>
      <div className="flex justify-center">
        <Link href={"/login"}>
          <a className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Sign in
          </a>
        </Link>
      </div>
    </main>
  );
}

export default Guest;