import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function Organizer() {
  const topOrganizer = [
    "atmo.webp",
    "donkey.webp",
    "gionhotel.webp",
    "linkup.wepb",
    "mint.webp",
    "org1.png",
    "zoya.webp",
    "sakjam2.webp",
    "org3.webp",
    "org2.png",
  ];

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="my-3"
    >
      <CarouselContent>
        {topOrganizer.map((organizer, index) => (
          <CarouselItem key={index} className="basis-1/3 md:basis-1/6 ">
            <img src={organizer} alt={`Organizer ${index}`} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default Organizer;
