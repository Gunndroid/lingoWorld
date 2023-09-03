import React from "react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface SignUpProps {
  onClose: () => void;
  isSignUpOpen: boolean;
  setIsLoginOpen: Dispatch<SetStateAction<boolean>>;
}

export default function SignUp({
  onClose,
  isSignUpOpen,
  setIsLoginOpen,
}: SignUpProps) {
  if (!isSignUpOpen) return null;

  return (
    <div className="md:w-1/2 w-9/12 ">
      <div className="relative flex flex-col p-10 rounded-md sm:p-10 bg-white text-black ">
        {/* Close Button */}
        <div>
          <button
            onClick={onClose}
            className="absolute top-3 right-5 text-2xl text-black"
          >
            ×
          </button>
        </div>
        <div className="mb-6 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign up</h1>
          <p className="text-sm dark:text-gray-400">
            Create a LingoWorld Account
          </p>
        </div>
        <div>
          <form noValidate action="" className="space-y-6 ">
            {/* Inputs */}
            <div className="space-y-4">
              <div className="flex gap-4 justify-center">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-sm">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-white text-black"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-white text-black"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm">
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
                <div className="flex-1">
                  <label htmlFor="city" className="block text-sm">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-white text-black"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-white text-black"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-white text-black"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="space-y-2">
              <div>
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  className="mr-2"
                />
                <label htmlFor="terms" className="text-sm">
                  I agree to the <Link href="/terms">Terms and Conditions</Link>
                </label>
              </div>
              <div>
                <button
                  type="button"
                  className="w-full px-8 py-3 font-semibold rounded-md bg-m-gold dark:text-gray-900"
                >
                  Sign up
                </button>
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-400">
                Already have an account? <br />
                <Link
                  onClick={() => {
                    onClose(); // Close the SignUp modal
                    setIsLoginOpen(true); // Open the Login modal
                  }}
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline text-m-gold"
                >
                  Sign in
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
