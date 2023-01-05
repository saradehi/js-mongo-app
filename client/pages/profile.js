import React from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const profile = () => {
    const {data: session} = useSession()

    return (
        <div>
            {
                session ? 
                <div>
                    <Image src={session.user.image} width={150} height={150} style={{borderRadius: '50%'}} alt={session.user.name}></Image>
                    <h1>Welcome, {session.user.name}</h1>
                    <button onClick={() => signOut()}>Sign out</button>
                </div> : 
                <div>
                    <p>You are not sign in</p>
                    <button onClick={()=> signIn()}>Sign in</button>
                </div>
            }
        </div>
    );
};

export default profile

