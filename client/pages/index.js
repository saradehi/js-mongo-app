import Head from "next/head";
import Guest from './components/Guest/Guest'
import User from "./components/User/User";
import { useSession } from "next-auth/react";


export default function Home() {
  const { data: session} = useSession()
  return (
    <div>
      <Head><title>Home Page</title></Head>

      {
        session ? <User session={{data:session}} /> : <Guest />
      }

    </div>
  );
}



