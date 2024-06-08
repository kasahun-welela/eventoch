import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
          <CarouselItem key={index} className="md:basis-1/6 ">
            <img src={organizer} alt={`Organizer ${index}`} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default Organizer;
