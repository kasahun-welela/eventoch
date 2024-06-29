import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center  gap-5 h-screen justify-center">
      <p className="text-4xl font-extrabold text-primary">404</p>
      <div className="text-center">
        <p className="font-bold">Page Not Found</p>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
      </div>

      <Link
        to="/"
        className="text-white font-bold bg-primary px-8 py-3 rounded-3xl hover:opacity-70 "
      >
        Home Page
      </Link>
    </div>
  );
}

export default NotFound;
