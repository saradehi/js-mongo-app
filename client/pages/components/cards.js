import React from "react"
import Link from "next/link"
import Image from "next/image"

const DogCard = ({name, weight, image, life_span}) => {

    return (
        <div >
            <Link href={'/detail'}>
                <Image src={image} width={500} height={500} alt={name}></Image>
                <h1>{name}</h1>
                <p>{weight}</p>
                <p>{life_span}</p>
            </Link>
        </div>
    )
}

export default DogCard;