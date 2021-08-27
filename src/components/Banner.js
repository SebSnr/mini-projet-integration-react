import React from 'react'

// import pokeBowl from '../assets/pokeBowl.jpg'
import bannerImg from '../assets/pokeBowl.jpg'

export default function Banner() {
    return (
        <div className="banner">
            <img src={bannerImg}  alt="Plat" className="banner__img" />
        </div>
    )
}
