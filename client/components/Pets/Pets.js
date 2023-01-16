import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../src/actions/index";
import styles from "../../styles/Homemodule.css";
import DogCard from "../cards";

export default function Home() {
  const card = useSelector((state) => state.allDogs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDogs());
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>App with next & mongo</p>
        </div>
        <div>
          <Link href={"/about"}>About</Link>
          <br></br>
          <Link href={"/login"}>Log In / Sign Up</Link>
        </div>
        <div>
          {card?.map((ele) => {
            return (
              <div key={ele._id}>
                <DogCard
                  name={ele.name}
                  weight={ele.weight}
                  image={ele.image}
                  life_span={ele.life_span}
                ></DogCard>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
