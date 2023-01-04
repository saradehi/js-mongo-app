import Head from "next/head";
import Link from "next/link";


export default function () {

    return (
        <div>
            <Head>
            <title>
                About
            </title>
            </Head>
            <main>
                <p>Details of dogs</p>
                <p><Link href={'/'}>
                    Home
                </Link></p>
            </main>
        </div>
    )
}