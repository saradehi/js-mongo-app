import Head from "next/head";
import Guest from './components/Guest/Guest'


export default function Home() {
  return (
    <div>
      <Head><title>Home Page</title></Head>

      <Guest></Guest>
    </div>
  );
}


