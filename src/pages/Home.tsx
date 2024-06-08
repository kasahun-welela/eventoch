import CardComponent from "@/components/CardComponent";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Organizer from "@/components/Organizer";

function Home() {
  return (
    <div className="px-5 mt-16 md:mt-2 md:w-[90%] mx-auto">
      <div>
        <h1 className="text-2xl font-semibold">Featured Events</h1>
        <hr className="border bg-primary h-1.5 w-10 mt-2"></hr>
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="my-3"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/4 ">
              <CardComponent />
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 ">
              <CardComponent />
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 ">
              <CardComponent />
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 ">
              <CardComponent />
            </CarouselItem>
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
      <div>
        <h1 className="text-2xl font-semibold">Upcoming Events</h1>
        <hr className="border bg-primary h-1.5 w-10 mt-2"></hr>
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
            <CarouselItem className="md:basis-1/4 ">
              <CardComponent />
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 ">
              <CardComponent />
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 ">
              <CardComponent />
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 ">
              <CardComponent />
            </CarouselItem>
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
      <div>
        <h1 className="text-2xl font-semibold">Game & Sport Events</h1>
        <hr className="border bg-primary h-1.5 w-10 mt-2"></hr>
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="my-3"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/4 ">
              <CardComponent />
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 ">
              <CardComponent />
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 ">
              <CardComponent />
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 ">
              <CardComponent />
            </CarouselItem>
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
      <div>
        <h1 className="text-2xl font-semibold">Cinema & Sport Events</h1>
        <hr className="border bg-primary h-1.5 w-10 mt-2"></hr>
        <Carousel
          plugins={[
            Autoplay({
              delay: 3500,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="my-3"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/4 ">
              <CardComponent />
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 ">
              <CardComponent />
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 ">
              <CardComponent />
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 ">
              <CardComponent />
            </CarouselItem>
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>

      <div>
        <h1 className="text-2xl font-semibold">Top Organizers</h1>
        <hr className="border bg-primary h-1.5 w-10 mt-2"></hr>
        <Organizer />
      </div>
    </div>
  );
}

export default Home;
