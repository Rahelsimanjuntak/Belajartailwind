import patternImg from "../../assets/pattern.png";
import statistikImg from "../../assets/statistik.png";
import logoImg from "../../assets/logo.png";
import { Info, Copyright, EyeOff, Eye } from "lucide-react";
import { useState } from "react";

function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative lg:flex flex-col lg:flex-row min-h-screen bg-white justify-center lg:p-8 2xl:px-9 md:gap-4 lg:gap-8">
      <div className="flex-1 flex flex-col relative bg-[#3182CE] overflow-hidden lg:rounded-4xl">
        <div
          className="absolute inset-0 bg-repeat opacity-10"
          style={{
            backgroundImage: `url(${patternImg})`,
          }}
        />

        <div className="relative z-10 flex h-full flex-col justify-center items-center gap-4 sm:gap-6 lg:gap-16 p-6 sm:px-8 lg:py-0 lg:px-10 xl:px-12 2xl:px-16">
          <h1 className=" mt-8 sm:mt-0 text-center text-xl sm:text-2xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-white">
            Optimize and simplifies yours ampling activity with{" "}
            <span className="font-black">QCIS</span>
          </h1>
          <div className="w-full">
            <img
              className="w-full h-auto rounded-lg ring-10 ring-white/50 shadow-2xl overflow-hidden"
              src={statistikImg}
              alt="preview"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-0 lg:relative flex-1 flex flex-col items-center justify-center bg-white rounded-t-4xl lg:rounded-none -mt-20 sm:-mt-28 md:-mt-30 lg:mt-0 z-10">
        <div className=" w-full  lg:max-w-125 2xl:max-w-150 mx-auto flex flex-col justify-center gap-2 lg:gap-10 xl:gap-12 2xl:gap-15">
          {/* DIV 1: logo n header */}
          <div className="flex flex-col gap-4 sm:gap-10 xl:gap-12 2xl:gap-20">
            <img
              src={logoImg}
              alt="PTSN Logo"
              className="w-32 sm:w-36 lg:w-36 2xl:w-60 h-auto"
            />
          </div>

          {/* DIV 2: form */}
          <div className="flex flex-col gap-4 lg:gap-10 2xl:gap-15">
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-[#404040] text-2xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                Get Started Now
              </h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#757575]">
                Enter your Credentials to access your account
              </p>
            </div>

            <div className="w-full h-px bg-gray-200" />

            <form>
              <div className="flex flex-col gap-2 lg:gap-6 2xl:gap-8">
                <div className="flex flex-col gap-2 2xl:gap-4">
                  <label
                    htmlFor="email"
                    className="block text-left text-sm sm:text-xl text-[#616161]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full px-4 py-2 xl:py-2.5 border border-[#C2C2C2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3182CE]"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2 min-[1920px]:gap-4">
                  <label
                    htmlFor="password"
                    className="block text-left text-sm sm:text-xl text-[#616161]"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Your Password"
                      className="w-full text-sm sm:text-base min-[1920px]:text-lg text-[#757575] px-4 py-2.5 min-[1920px]:py-3 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-[#3182CE]"
                      minLength={8}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 2xl:mt-5">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 accent-blue-500" />
                  <span className="ml-2 text-sm sm:text-base text-[#404040]">
                    Remember Me
                  </span>
                </label>
              </div>
            </form>
            <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 lg:gap-6 2xl:gap-8">
              <button
                type="submit"
                className="w-full py-3 text-lg xl:text-xl 2xl:text-2xl rounded-md bg-blue-500 text-white hover:bg-blue-600"
              >
                Sign In
              </button>

              <div className="self-start flex items-center justify-center gap-2">
                <Info className="w-4 h-4 text-gray-400 shrink-0" />
                <p className="text-xs sm:text-sm text-[#9E9E9E]">
                  Account will be locked after 6 unsuccessful login attempts.
                </p>
              </div>
            </div>
          </div>

          <div className="self-start flex items-center justify-center gap-2">
            <Copyright className="w-4 h-4 text-gray-400" />
            <p className="text-xs sm:text-sm text-[#9E9E9E]">
              2024 MIS All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;