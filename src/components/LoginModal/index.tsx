import { AppContext } from "@/context";
import React, { useContext, useEffect } from "react";
import { Button } from "..";
import { useLazyQuery, useMutation } from "@apollo/client";
import LOGIN_MUTATION from "@mutations/login.graphql";
import { Types } from "@/context/actionType";

import { IoMdClose } from "react-icons/io";
import ME_QUERY from "@queries/getMe.graphql";
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";

type Props = {};

const index = (props: Props) => {
  const { state, dispatch } = useContext(AppContext);
  const [login, { data, error, loading }] = useMutation(LOGIN_MUTATION);

  const [getMe, { error: error_me, loading: loading_me }] = useLazyQuery(
    ME_QUERY,
    {
      fetchPolicy: "no-cache",
    }
  );
  const [signedInPage, setSignedInPage] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const [password, setPassword] = React.useState("");
  const [isPasswordVisible, setPasswordVisibility] = React.useState(true);

  const [errorMssg, setErrorMssg] = React.useState("");
  const [loggedInUser, setLoggedInUser] = React.useState<any>();

  const [newUserName, setNewUserName] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [newEmail, setNewEmail] = React.useState("");

  useEffect(() => {
    console.log("STATE", state.modal.isOpen);
  }, [state]);

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
            .then((res) => {
              dispatch({ type: Types.AddUser, payload: res.data.me }),
                setLoggedInUser(res.data.me);
            })
            .then(() =>
              dispatch({ type: Types.CloseModal, payload: { isOpen: false } })
            );
        }
      })
      .catch((e) => setErrorMssg(e.message));
  };
  return (
    <>
      {state.modal.isOpen ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[450px] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className=" bg-[#EBEAF5] flex items-center justify-between p-5 border-b-2 border-solid border-primary rounded-t-3xl">
                  <h3 className="text-3xl font-semibold text-black">
                    {signedInPage ? "Sign Up" : "Join the club"}
                  </h3>

                  <button
                    className="p-1 ml-auto  rounded-full text-white bg-[#D4D1E1]  text-xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() =>
                      dispatch({
                        type: Types.OpenModal,
                        payload: { isOpen: !state.modal.isOpen },
                      })
                    }
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
                              value={"newUserName"}
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
                              // onClick={() => registerFunction()}
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
                              animate={false}
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
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default index;
