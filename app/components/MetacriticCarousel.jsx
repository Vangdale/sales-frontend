"use client";

import React, { useCallback, useEffect } from "react";
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import DealCard from "./DealCard";



const MetacriticCarousel = (props) => {
    const { games, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

    useEffect(() => {
        if (!emblaApi) return
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        autoplay.play()
    }, [emblaApi])


    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {games.map((game) => (
                        <div className="embla__slide" key={game.id}>
                            <div className="embla__slide__number">
                                <DealCard  deal={game}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default MetacriticCarousel