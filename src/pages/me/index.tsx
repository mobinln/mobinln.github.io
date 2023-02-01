import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import Slide from "components/Slide";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "styles/constants";

export default function Index() {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${breakpoints.sm}px)`,
  });

  return (
    <div style={{ position: "relative" }}>
      <Swiper
        style={{
          width: "70vw",
          height: "100%",
        }}
        navigation={isDesktop}
        modules={[Navigation]}
        className="mySwiper"
        autoplay
        loop
      >
        <SwiperSlide>
          <Slide title="A little about me">
            <p>
              Hello I'm Mobin Larijanian and this is my official website, it's nice to see you here. I built this site
              to share my photos and maybe my opinions with you, and of course, to test my designing skills :D I'm a fan
              of football, classical music and of course literature but to be honest, I really love photography and
              programming besides these two, I play table tennis too I'm studying computer science at AUT with my
              friends and it's really fun You can find me on the contact tab. I'll be glad to see you again :)
            </p>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide title="About my programming background">
            I started programming from 12 until now and i learned many language and technologies such as C, Java, JS,
            C#,... and so on but the most interesting of them is python because of its clearness and simplicity and
            giving some great data science abilities I like programming and I'm a fan of Data science and front-end
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide title="About my photography">
            I don't know when and where I found that but just I know I love photography and that it I remember that when
            I was around 10 no one let me take a photo with his phone because they think I can't take good pictures but
            now I can attract them with my pictures I think I'm in the starting point of this art and there's a very
            long way to go but I love it and that's enough I think just like programming...
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide title="About my education">
            I'm studying computer science at one of the best universities in Iran its name is Amir Kabir university of
            technology from my childhood, I love computers and still have and I think I will have this feeling throw my
            life. I'm a fan of math and its sub-lessons such as discrete mathematics and of course, as I said before,
            programming and anything related to computers.
          </Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
