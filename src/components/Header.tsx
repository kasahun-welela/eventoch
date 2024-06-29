import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white py-3">
      <div className="hidden md:flex items-center justify-between md:w-[90%] mx-auto">
        <Link to="/">
          <img src="eventoch.webp" alt="logo" />
        </Link>
        <div className="flex items-center gap-5">
          <div>
            <Select>
              <SelectTrigger className="w-[300px]">
                <i className="ri-map-pin-fill text-primary text-xl"></i>
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Addis Ababa">Addis Ababa</SelectItem>
                <SelectItem value="Hawassa">Hawassa</SelectItem>
                <SelectItem value="Jimma">Jimma</SelectItem>
                <SelectItem value="Bahirdar">Bahirdar</SelectItem>
                <SelectItem value="Mekele">Mekele</SelectItem>
                <SelectItem value="Adama">Adama</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="relative md:w-[400px]">
            <i className="ri-search-2-line text-primary font-bold absolute top-1/2 left-2 transform -translate-y-1/2"></i>
            <Input
              placeholder="Search Events"
              type="text"
              className="pl-10 pr-3 py-2 border rounded-lg w-full"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Link to="/login">
            <i className="ri-user-line text-xl font-bold"></i>
          </Link>
          <Link to="/post_event">
            <Button>
              <i className="ri-add-line text-lg"></i> Add Event
            </Button>
          </Link>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="z-10 absolute shadow-2xl top-0 right-0 left-0 md:hidden bg-white py-3">
        <div className="md:hidden flex justify-between px-5">
          <Link to="/">
            <img src="eventoch.webp" alt="logo" className="w-24 h-10" />
          </Link>
          <div className="flex items-center gap-5">
            <Link to="/login">
              <i className="ri-user-line text-xl font-bold"></i>{" "}
            </Link>
            <Link to="/post_event">
              <Button>
                <i className="ri-add-line text-lg"></i> Add Event
              </Button>
            </Link>

            {isOpen ? (
              <i className="ri-close-fill text-xl" onClick={toggleButton}></i>
            ) : (
              <i className="ri-menu-line text-xl" onClick={toggleButton}></i>
            )}
          </div>
        </div>
        {/* Mobile Navigation Content */}
        {isOpen && (
          <ul
            className="flex flex-col gap-3 p-3 bg-white "
            onClick={toggleButton}
          >
            <li>
              <Link to="/all_event" className="hover:text-primary">
                All Event
              </Link>
            </li>
            <li>
              <Link to="/about_us" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact_us" className="hover:text-primary">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/privacy_policy" className="hover:text-primary">
                Privacy Method
              </Link>
            </li>
            <li>
              <Link to="/community_guideline" className="hover:text-primary">
                Community Guidelines
              </Link>
            </li>
            <li>
              <Link to="/terms_condition" className="hover:text-primary">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
