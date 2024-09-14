import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { Anime } from "@/lib/types";
import { GET_RANDOM_ANIME } from "@/lib/queries";

const Hero = () => {
  const { data, loading, error } = useQuery(GET_RANDOM_ANIME);
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      setAnimes(data.Page.media);
    }
  }, [data, loading]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div className="hero-section bg-gray-900 text-white text-center">
      {animes.length > 0 && (
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {animes.map((anime: Anime, index) => (
            <SwiperSlide key={`${anime.id}-${index}`}>
              <div className="anime-slide text-center">
                <Image
                  src={anime.coverImage.large}
                  alt={anime.title.english || anime.title.romaji}
                  width={300}
                  height={100}
                  className="rounded-lg"
                  priority={true}
                />
                <h2 className="text-xl mt-2">
                  {anime.title.english || anime.title.romaji}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Hero;
