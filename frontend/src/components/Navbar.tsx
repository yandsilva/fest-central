import { AlignJustify, ChevronRight } from "lucide-react";
import { IoStarOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { toast } from "react-toastify";
import { clearAllUserErrors, logoutUser } from "../store/slice/userSlice";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [auth, setAuth] = useState(false);

  const { isAuthenticated, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("Logout successfully");
    navigateTo("/");
  };

  const navigateTo = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }

    if (isAuthenticated) {
      setAuth(true);
    }
  }, [isAuthenticated, error, dispatch, navigateTo]);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [visible]);

  return (
    <div className="bg-dark">
      <div className="mx-2 flex items-center justify-between py-4 sm:mx-14">
        <a href="/" className="flex items-center">
          {/* <Tickets size={40} color="white" /> */}
          <img src={assets.ticket} alt="" className="w-14" />
          <h1 className="font-lalezar text-4xl text-yellow">FestCentral</h1>
        </a>
        {/* MENU */}
        <ul className="hidden gap-5 font-montserrat font-semibold text-white md:flex">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="hidden h-[2px] w-2/4 border-none bg-yellow" />
          </NavLink>
          <NavLink to="/events" className="flex flex-col items-center gap-1">
            <p>Events</p>
            <hr className="hidden h-[2px] w-2/4 border-none bg-yellow" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>About</p>
            <hr className="hidden h-[2px] w-2/4 border-none bg-yellow" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>Contact</p>
            <hr className="hidden h-[2px] w-2/4 border-none bg-yellow" />
          </NavLink>
        </ul>

        <div className="hidden items-center gap-6 font-montserrat font-semibold text-white sm:flex">
          {!auth ? "" : <Link to="/new-event">Criar Evento</Link>}

          {!auth && (
            <Link to="/login">
              <Button>Entrar</Button>
            </Link>
          )}

          {/* PROFILE AUTHENTICATED */}
          {auth && (
            <div className="flex items-center gap-5">
              <Link
                to="/interested-events"
                className="flex flex-col items-center"
              >
                <IoStarOutline size={25} />
                <p className="font-montserrat text-sm font-semibold">
                  Interesses
                </p>
              </Link>
              <div className="group relative">
                <a href="#" className="flex items-center">
                  <div className="flex flex-col items-center">
                    <CgProfile size={25} />
                    <p className="font-montserrat text-sm font-semibold">
                      Profile
                    </p>
                  </div>
                  <IoMdArrowDropdown />
                </a>

                <div className="dropdown-menu absolute right-0 z-20 hidden pt-1 group-hover:block">
                  <div className="flex w-fit flex-col gap-3 rounded bg-white px-5 py-2 pt-3 text-darker">
                    <p className="cursor-pointer">Interessados</p>
                    <p className="cursor-pointer">Configurações</p>

                    <p className="cursor-pointer">
                      <button onClick={handleLogout}>Log Out </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className="w-5 cursor-pointer md:hidden"
          onClick={() => setVisible(true)}
        >
          <AlignJustify color="white" size={30} />
        </div>

        {/* Sidebar menu for small screens */}
        <div
          className={`absolute bottom-0 right-0 top-0 z-50 overflow-hidden bg-white transition-all ${visible ? "w-full overflow-hidden" : "w-0"}`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              className="flex cursor-pointer items-center gap-4 p-3"
              onClick={() => setVisible(false)}
            >
              <ChevronRight />
              <p>Black</p>
            </div>
            <NavLink
              className="border py-2 pl-6 font-montserrat font-semibold"
              to="/"
              onClick={() => setVisible(false)}
            >
              HOME
            </NavLink>
            <NavLink
              className="border py-2 pl-6 font-montserrat font-semibold"
              to="/events"
              onClick={() => setVisible(false)}
            >
              EVENTS
            </NavLink>
            <NavLink
              className="border py-2 pl-6 font-montserrat font-semibold"
              to="/about"
              onClick={() => setVisible(false)}
            >
              ABOUT
            </NavLink>
            <NavLink
              className="border py-2 pl-6 font-montserrat font-semibold"
              to="/contact"
              onClick={() => setVisible(false)}
            >
              CONTACT
            </NavLink>
            <NavLink
              className="border py-2 pl-6 font-montserrat font-semibold"
              to="/create-event"
              onClick={() => setVisible(false)}
            >
              CRIAR EVENTO
            </NavLink>
            <NavLink
              className="border py-2 pl-6 font-montserrat font-semibold"
              to="/login"
              onClick={() => setVisible(false)}
            >
              LOGIN
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
