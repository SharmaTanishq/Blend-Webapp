import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import {Spinner} from "@nextui-org/spinner";
import { Button, ButtonSecondary } from "..";
import { useRouter } from "next/router";
import LOGIN_MUTATION from "@mutations/login.graphql";
import ME_QUERY from "@queries/getMe.graphql";

import { useLazyQuery, useMutation, useQuery } from "@apollo/client";

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
  const [showModal, setShowModal] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisibility] = useState(true);

  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [errorMssg, setErrorMssg] = useState("");
  

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

  const loginFunction = () => {
    login({
      variables: {
        input: {
          email: email,
          password: password,
        },
      },
    })
      .then((result) => {
        if (result.data) {
          getMe()
            .then((res) => setLoggedInUser(res.data.me))
            .then(() => setShowModal(!showModal));
        }
      })
      .catch((e) => setErrorMssg(e.message));
  };

  const registerFunction = () => {
    login({
      variables: {
        input: {
          email: email,
          password: password,
        },
      },
    })
      .then((result) => {
        if (result.data) {
          getMe().then((res) => console.log("res"));
          //getMe().then(res=>setLoggedInUser(res.data.me)).then(()=>setShowModal(!showModal));
        }
      })
      .catch((e) => setErrorMssg(e.message));
  };

  useEffect(() => {
    getMe().then((res) => setLoggedInUser(res?.data?.me));
  }, []);

  useEffect(() => {
    localStorage.setItem("logged_in_user", JSON.stringify(loggedInUser));

    if (loggedInUser) {
      setIsLoggedIn(true);
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
      className={`${
        scroll ? "bg-white" : "bg-none"
      } shadow-md  w-full fixed top-0 left-0 z-[999] transition-all duration-500 ease-in`}
    >
      <div
        className={`md:flex max-w-7xl mx-auto items-center justify-between ${
          open ? "bg-white" : "bg-none"
        } py-4 md:px-10 px-7 transition-all duration-500 ease-in `}
      >
        <div
          className="font-bold text-2xl cursor-pointer flex items-center
      text-gray-800 no-underline hover:no-underline"
        > 

          <Link href={'/'} className="no-underline  hover:no-underline" >
          <span
            className={`text-4xl ${
              open || scroll ? "text-gray-800 text-center" : "text-white"
            } font-bold tracking-wider	 mr-1 pt-2 no-underline  hover:no-underline`}
          >
            Peach
          </span>
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {/* <ion-icon name={open ? 'close':'menu'}></ion-icon> */}
          {open ? (
            <div className="text-primary">
              <FaTimes />
            </div>
          ) : (
            <div className={`${scroll ? "text-primary" : "text-white"}`}>
              <FaBars />
            </div>
          )}
        </div>

        <ul
          className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-50 left-0 w-full justify-end md:pl-0  transition-all duration-500 ease-in ${
            open ? "top-20 bg-white" : "top-[-490px] "
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
                  open || scroll ? "text-gray-800 text-center" : "text-white"
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
                  open || scroll ? "text-gray-800" : "text-white"
                } cursor-pointer hover:text-primary  duration-500`}
              >
                <FaInstagram />
              </Link>
            </li>
            <li className="md:ml-8 md:my-0 my-7 text-4xl mr-4">
              <Link
                href="/blog/"
                className={`${
                  open || scroll ? "text-gray-800 text-center" : "text-white"
                }  cursor-pointer hover:text-primary  duration-500`}
              >
                <FaFacebook />
              </Link>
            </li>
          </div>
          {isLoggedIn  ? (
            <>
              {isSpotifyConnected()  ? (
                <li>
                <Link
                  href="/me/"
                  className={`${
                    open || scroll ? "text-black" : "text-white"
                  } cursor-pointer text-xl font-semibold hover:text-primary duration-500 hover:no-underline `}
                  style={{textDecoration:'none' }}
                >
                  
                  <p style={{textDecoration:'none'}}>Hi, {loggedInUser.name}</p>
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
            {loading_me? <Spinner/> :<ButtonSecondary
                marginBottom="mb-0"
                marginTop="mt-0"
                onClick={() => setShowModal(true)}
                text="Join the club"
                textColor={`${open || scroll ? "text-white" : "text-primary"}`}
                background={`${
                  open || scroll ? "bg-primary" : "bg-primaryWhite"
                }`}
                minWidth={`${open ? "max-w-[300px] ml-12 " : "max-w-[180px]"}`}
              />}
             
            </>
          )}

          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-[450px] my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className=" bg-[#EBEAF5] flex items-center justify-between p-5 border-b-2 border-solid border-primary rounded-t-3xl">
                      <h3 className="text-3xl font-semibold text-black">
                        {signedInPage ? "Sign Up" : "Join the club"}
                      </h3>

                      <button
                        className="p-1 ml-auto  rounded-full text-white bg-[#D4D1E1]  text-xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                          <IoMdClose />
                        </span>
                      </button>
                    </div>
                    {signedInPage ? (
                      <>
                        <div className="relative p-6 w-full flex-col bg-[#EBEAF5] rounded-b-3xl">
                          <div>
                            <form>
                              {errorMssg && (
                                <p
                                  data-aos="flip-down"
                                  className="error text-error text-xs font-bold"
                                >
                                  {" "}
                                  {errorMssg} !{" "}
                                </p>
                              )}
                              <div className="bg-white h-full rounded-2xl mt-4 shadow-custom">
                                <input
                                  className="placeholder-slate-600  p-4 rounded-2xl w-full h-full appearance-none"
                                  type="text"
                                  name="username"
                                  id="username"
                                  placeholder="Username"
                                  value={newUserName}
                                  onChange={(e) => {
                                    setNewUserName(e.target.value);
                                  }}
                                />
                              </div>

                              <div className="bg-white h-full rounded-2xl mt-4 shadow-custom">
                                <input
                                  className="placeholder-slate-600  p-4 rounded-2xl w-full h-full appearance-none"
                                  type="text"
                                  name="username"
                                  id="username"
                                  placeholder="E-mail"
                                  value={newEmail}
                                  onChange={(e) => {
                                    setNewEmail(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="bg-white h-full rounded-2xl mt-4 shadow-custom">
                                <input
                                  className="placeholder-slate-600  p-4 rounded-2xl w-full h-full appearance-none"
                                  type={`${
                                    isPasswordVisible ? "text" : "password"
                                  }`}
                                  name="password"
                                  id="password"
                                  placeholder="Password"
                                  value={newPassword}
                                  onChange={(e) => {
                                    setNewPassword(e.target.value);
                                  }}
                                />
                              </div>

                              <div className="w-full  items-center justify-center flex">
                                <Button
                                  text="Register"
                                  onClick={() => registerFunction()}
                                ></Button>
                              </div>
                            </form>

                            <p className="signup mt-2">
                              Already have an account?
                              <span
                                style={{
                                  textDecoration: "none",
                                  cursor: "pointer",
                                }}
                                onClick={() => setSignedInPage(!signedInPage)}
                                className="text-[#9966ff] font-bold "
                              >
                                {" "}
                                Join the club
                              </span>
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative p-6 w-full flex-col bg-[#EBEAF5] rounded-b-3xl">
                          <div>
                            <form>
                              {errorMssg && (
                                <p
                                  data-aos="flip-down"
                                  className="error text-error text-xs font-bold"
                                >
                                  {" "}
                                  {errorMssg} !{" "}
                                </p>
                              )}
                              <div className="bg-white h-full rounded-2xl mt-4 shadow-custom">
                                <input
                                  className="placeholder-slate-600  p-4 rounded-2xl w-full h-full appearance-none"
                                  type="text"
                                  name="username"
                                  id="username"
                                  placeholder="E-mail"
                                  value={email}
                                  onChange={(e) => {
                                    setEmail(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="bg-white h-full rounded-2xl mt-4 shadow-custom">
                                <input
                                  className="placeholder-slate-600  p-4 rounded-2xl w-full h-full appearance-none"
                                  type={`${
                                    isPasswordVisible ? "text" : "password"
                                  }`}
                                  name="password"
                                  id="password"
                                  placeholder="Password"
                                  value={password}
                                  onChange={(e) => {
                                    setPassword(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="w-full  text-center no-underline mt-3 ">
                                <a
                                  rel="noopener noreferrer"
                                  className="text-primary text-sm font-bold no-underline"
                                  href="#"
                                >
                                  Forgot Password ?
                                </a>
                              </div>
                              <div className="w-full  items-center justify-center flex">
                                <Button
                                  text="Login"
                                  onClick={() => loginFunction()}
                                ></Button>
                              </div>
                            </form>
                            <div className="social-message">
                              <div className="line"></div>
                              <p className="message font-bold">
                                Login with social accounts
                              </p>
                              <div className="line"></div>
                            </div>
                            <div className="social-icons mt-2">
                              <button
                                aria-label="Log in with Google"
                                className="icon"
                              >
                                <FaGoogle />
                              </button>
                              <button
                                aria-label="Log in with Facebook"
                                className="icon"
                              >
                                <FaFacebook />
                              </button>
                              <button
                                aria-label="Log in with Instagram"
                                className="icon"
                              >
                                <FaInstagram />
                              </button>
                            </div>
                            <p className="signup mt-2">
                              Don't have an account?
                              <span
                                style={{
                                  textDecoration: "none",
                                  cursor: "pointer",
                                }}
                                onClick={() => setSignedInPage(!signedInPage)}
                                className="text-primary font-bold "
                              >
                                {" "}
                                Sign up
                              </span>
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};

export default index;
