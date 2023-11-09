import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="flex flex-row justify-between p-5 px-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="h-16 w-50 ">
          <Link to="/" className=" cursor-pointer">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAY1BMVEX///8AAACysrKhoaH39/cUFBTa2tr7+/tGRkYNDQ3q6uojIyMaGhouLi7w8PCurq6RkZGDg4Pi4uLLy8s5OTlvb2/R0dG9vb1WVlY+Pj7Dw8MoKCinp6dLS0t3d3dhYWGZmZmayWe5AAAELUlEQVRoge2Z6XLjKhBGaQktSIBA1mpre/+nvA2SY9+M7aQm4KlK8f0YTSGHQwO9gAgJCgoKCgoKCgoKCgq6lzzLf8JNNQeu07dzowEgSRKAoXonttYADKmzoQPo+k3cKEcggyamhMaNHUIe+cemqrSs9nQ0nFo7jlJ5XXHar8xgxq24ay220QyGrT31xK1VsxPOnwn0vI+oUR5WPDtm9fJkVlN1OVYhc8qVx06a++f9Zv187Dx38eUw92vvuXrbx/b7kYqphIRzGL7nONHAmoZDORVf//a16hXt5SVbvrt3al0KgXavP99stRbASuBt9/XeybpW8EYw4SisyWje99cXUyinGcTlwhOHe4x0ujQhmi/d05+k+BNelkKP4NarZSVwxdHwx7mpsi7FREVJDs4Dabccuelzz6k+XpgZoR7I2Os0Gw+DsboFUFqNAJwn87S3+SET0jJuw0pyGJ7qxO4+ztrrSPyQU3RupXKbOYa+6AebKXKleHLleSJHAMrmpsSmDzOCxOaujbPIKzkG2AH1ZrAI33YXilg5vYdsctMAw0fuwsl4Gxl1F6p6DvEbyXdCmw8ymR3HsO+S5VImDvLU35BFwuF5dPdNdr/QG+b888M3Z0jEZsklgAebV+z/ySsc02qedFNK/7gU+kMDcHjca4FvBue8m+r2xTq3Xg920wvy5BP8rUgSyIHsh+x3b5+x/Hp0yMmwIHscVl1JYqUnGqwIThdhSv5KXPDEKhuBlaH7kPk/4awyMOR9djGyGDK2PVkFh+rW3NjclRdr86XsTGZsVg8p+U/Zhc725d4fbu9GgoJ+v2rdtsskiVa7tOy0No5UaKz15N4YoZNnWvfmD/DppO6twGogcFWBkcyQU8CDTJEcrZirFJj4ho/cBVgCLGndt2dSRf0KTR9VNAJ2I5egoijO7cm6hAXnCNycrLr7fvRuzSeyjZwLsNqE8w5rY+0CTCgwEXfyFdlesNalSRorDNX+0oEiXEg2tsUX5Cw3010nnLlLW0XU5pxdstdk2dh6aIPE7VkDN/j5Rj7ta9+brXwlRzZVk5pD7wpqb/bSvd+DXNjjW9HASA4yxQptNq9wuV2R0T6YRzCQD7KpBPEIZ4+rRXk4dCMdk2k8Y7eJpjt53Fuj0QQXMxsFZ0nCxHrcxDokG7iUxz1nRq8Xnhm9tlGjmx/d///36KlN3ow9rYPKCF0Gc0af1nXBhFTFRC41qbAETtuh9fMpvIaq05I0S6q4JMvSbejUasEt1hCliWQq9fRZVNkb7ALwn7EnC4bKYbLkMV9jTXr0t8LPOSPOzUpKoITyE1k2QkRvyU1tQvYJw+vi5zyZiUFfcH5BCbR+GbVYqSWXtTR5sRXK1xGH9pOJ1l1svremfW8+naUdoWdJ6s58ro2/8TEtKCgoKCgoKCgoKOhX6z+7gjWpIk75pQAAAABJRU5ErkJggg=="
              alt=""
              className="h-full w-full"
            />
          </Link>
        </div>

        <nav className="hidden md:flex gap-5 font-medium p-1 text-lg">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="courses"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Courses
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Reviews
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Contact
          </Link>
        </nav>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className=" p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          About
        </Link>
        <Link
          to="courses"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Courses
        </Link>
        <Link
          to="reviews"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Reviews
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
