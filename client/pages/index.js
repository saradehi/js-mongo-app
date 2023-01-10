import Head from "next/head";
import { useState } from "react";
import Guest from './components/Guest/Guest'
import User from "./components/User/User";


export default function Home() {
  const [session, setSession] = useState(false)
  return (
    <div>
      <Head><title>Home Page</title></Head>

      {
        session === true ? <User /> : <Guest />
      }

    </div>
  );
}


