import { Link } from "react-router-dom";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-primary py-3">
      <div className="grid grid-cols-2 px-5 md:w-1/3 mx-auto">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold my-2">Quick Links</h1>
          <ul className="flex flex-col ml-5">
            <li>
              <Link to="/" className="hover:text-white">
                All Events
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold my-2">Importants</h1>
          <ul className="flex flex-col ml-5">
            <li>
              <Link to="/" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Terms & Condition
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Community Guidelines
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center font-bold">@Copyright Eventoch {year}</p>
    </div>
  );
}

export default Footer;
