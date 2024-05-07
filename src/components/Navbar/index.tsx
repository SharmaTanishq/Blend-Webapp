import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Spinner } from "@nextui-org/spinner";
import { Button, ButtonSecondary } from "..";
import { useRouter } from "next/router";
import LOGIN_MUTATION from "@mutations/login.graphql";
import ME_QUERY from "@queries/getMe.graphql";

import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { AppContext } from "@/context";
import { Types } from "@/context/actionType";

type Props = {};

const index = (props: Props) => {
  let Links = [
    { name: "The App", link: "/" },
    { name: "What's Poppin?", link: "/" },
    { name: "Ambassadors", link: "/" },
    { name: "Blog's", link: "/" },
  ];

  const router = useRouter();

  const [scroll, setScroll] = useState(false);

  const { state, dispatch } = useContext(AppContext);

  const [getMe, { error: error_me, loading: loading_me }] = useLazyQuery(
    ME_QUERY,
    {
      fetchPolicy: "no-cache",
    }
  );

  const [login, { data, error, loading }] = useMutation(LOGIN_MUTATION);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [signedInPage, setSignedInPage] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<any>();

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    changeNav();
    window.addEventListener("scroll", changeNav);
  }, []);

  useEffect(() => {
    getMe().then((res) => {
      setLoggedInUser(res?.data?.me);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("logged_in_user", JSON.stringify(loggedInUser));

    if (loggedInUser) {
      setIsLoggedIn(true);
      dispatch({ type: Types.AddUser, payload: loggedInUser });
    }
  }, [loggedInUser]);

  const isSpotifyConnected = () => {
    if (loggedInUser && !loggedInUser.spotifyId) {
      return false;
    }
    return true;
  };

  const connectSpotify = async () => {
    //@ts-ignore
    await fetch(process.env.CONNECT_SPOTIFY_URL, {
      method: "GET",
      redirect: "follow",
      credentials: "include",
    }).then((data: any) => {
      router.push(data.url);
    });
  };

  let [open, setOpen] = useState(false);

  return (
    <nav
      data-aos="fade-down"
      className={`  w-full fixed top-0 left-0 z-[10] transition-all duration-500 ease-in mt-7 md:px-0 px-3   		`}
    >
      <div
        className={`md:flex max-w-7xl mx-auto items-center justify-between rounded-full	 backdrop-blur	md:bg-secondary	 ${
          open ? "bg-none" : "bg-none  "
        } py-0 md:py-1 md:px-1 px-7 transition-all duration-500 ease-in `}
      >
        <div
          className="font-bold text-2xl cursor-pointer flex items-center
          text-gray-800 no-underline hover:no-underline "
        >
          <Link href={"/"} className="no-underline  hover:no-underline">
            <span
              className={`text-3xl md:text-4xl transition-all duration-500 ${
                open || scroll ? "md:text-primary text-secondary text-center" : "md:text-primary text-secondary"
              } font-bold tracking-wider	 md:ml-5 md:pt-2 no-underline  hover:no-underline`}
            >
              Peach
            </span>
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-1 cursor-pointer md:hidden"
        >
          {/* <ion-icon name={open ? 'close':'menu'}></ion-icon> */}
          {open ? (
            <div className="text-primary bg-secondary p-2 rounded-full text-2xl">
              <FaTimes />
            </div>
          ) : (
            <div className={`${scroll ? "text-primary" : "text-primary"} bg-secondary p-2 rounded-full text-2xl`}>
              <FaBars />
            </div>
          )}
        </div>

        <ul
          className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-50 left-0 w-full justify-end md:pl-0  transition-all duration-500 ease-in ${
            open ? "top-20 bg-secondary rounded-md" : "top-[-490px] "
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              style={{ textDecoration: "none" }}
              className="md:ml-8 text-xl md:my-0 my-7 "
            >
              <Link
                style={{ textDecoration: "none" }}
                href={link.link}
                className={`${
                  open || scroll
                    ? "text-primary-800 text-center"
                    : "text-gray-800"
                }  cursor-pointer hover:text-primary  duration-500`}
              >
                <h1>{link.name}</h1>
              </Link>
            </li>
          ))}
          <div
            className={`flex flex-row ${open ? "justify-evenly px-32" : ""} `}
          >
            <li className="md:ml-8 text-4xl md:my-0 my-7 ">
              <Link
                href="/blog/"
                className={`${
                  open || scroll ? "text-gray-800" : "text-gray-800"
                } cursor-pointer hover:text-primary  duration-500`}
              >
                <FaInstagram />
              </Link>
            </li>
            <li className="md:ml-8 md:my-0 my-7 text-4xl mr-4">
              <Link
                href="/blog/"
                className={`${
                  open || scroll ? "text-gray-800 text-center" : "text-gray-800"
                }  cursor-pointer hover:text-primary  duration-500`}
              >
                <FaFacebook />
              </Link>
            </li>
            
          </div>
          {isLoggedIn ? (
            <>
              {isSpotifyConnected() ? (
                <li>
                  <Link
                    href="/me/"
                    className={`${
                      open || scroll ? "text-gray-800" : "text-gray-800"
                    } cursor-pointer text-xl font-semibold hover:text-primary duration-500 hover:no-underline `}
                    style={{ textDecoration: "none" }}
                  >
                    <p style={{ textDecoration: "none" }}>
                      Hi, {loggedInUser.name}
                    </p>
                  </Link>
                </li>
              ) : (
                <>
                  <ButtonSecondary
                    marginBottom="mb-0"
                    marginTop="mt-0"
                    onClick={() => connectSpotify()}
                    text="Connect Spotify"
                    textColor={`${
                      open || scroll ? "text-white" : "text-primary"
                    }`}
                    background={`${
                      open || scroll ? "bg-primary" : "bg-primaryWhite"
                    }`}
                    minWidth={`${
                      open ? "max-w-[280px] ml-12 " : "max-w-[150px]"
                    }`}
                  />
                </>
              )}
            </>
          ) : (
            <>
              {loading_me ? (
                <Spinner />
              ) : (
                <ButtonSecondary
                  marginBottom="mb-0"
                  marginTop="mt-0"
                  // onClick={() => setShowModal(true)}
                  onClick={() => {
                    dispatch({
                      type: Types.OpenModal,
                      payload: { isOpen: true },
                    });
                  }}
                  text="Join the club"
                  textColor="text-secondary"
                  background={`${open || scroll ? "bg-primary" : "bg-primary"}`}
                  minWidth={`${
                    open ? "max-w-[300px] ml-12 " : "max-w-[180px]"
                  }`}
                />
              )}
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default index;
