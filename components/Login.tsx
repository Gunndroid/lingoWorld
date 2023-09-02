import React from "react";

interface LoginProps {
  onClose: () => void;
  isLoginOpen: boolean;
  setIsSignUpOpen: (value: boolean) => void; // Add this line
}

const Login: React.FC<LoginProps> = ({
  isLoginOpen,
  onClose,
  setIsSignUpOpen,
}) => {
  if (!isLoginOpen) return null;

  return (
    <div className="md:w-1/2 w-9/12">
      <div className="relative flex flex-col  p-10 rounded-md sm:p-10 bg-white text-black ">
        {/* Close Button */}
        <div>
          <button
            onClick={onClose}
            className="absolute top-3 right-5 text-2xl text-black"
          >
            ×
          </button>
        </div>
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <div>
          <form noValidate action="" className="space-y-12 ">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-white text-black"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-white text-black"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="button"
                  className="w-full px-8 py-3 font-semibold rounded-md bg-m-gold dark:text-gray-900"
                >
                  Sign in
                </button>
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-400">
                Don&apos;t have an account yet? <br />
                <a
                  onClick={() => {
                    onClose(); // Close the login modal
                    setIsSignUpOpen(true); // Open the sign up modal
                  }}
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline text-m-gold"
                >
                  Sign up
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
