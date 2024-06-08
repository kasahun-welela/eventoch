import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CardComponent() {
  return (
    <Card>
      <CardHeader className="p-0">
        <img src="/die.webp" alt="img " />

        <CardDescription className="flex justify-center gap-5">
          <p className="bg-primary px-2 py-1 rounded-lg text-white">Featured</p>{" "}
          <p className="bg-blue-600 px-2 py-1 rounded-lg text-white">Top</p>{" "}
          <p className="bg-fu-600 px-2 py-1 rounded-lg text-white">Boosted</p>
        </CardDescription>
        <p className="text-start px-5">Cinema</p>
      </CardHeader>
      <CardContent>
        <CardTitle>Die Hard-2</CardTitle>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-3">
          <i className="ri-map-pin-fill text-primary text-xl"></i>
          <p>Addis Ababa</p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CardComponent;
