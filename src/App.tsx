import patternImg from "./assets/pattern.png";
import statistikImg from "./assets/statistik.png";
import logoImg from "./assets/logo.png";
import { Info, Copyright, EyeOff, Eye } from "lucide-react";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row bg-white gap-0 sm:gap-2 md:gap-44.25">
      <div className="w-full md:w-1/2 bg-white flex flex-col p-0 sm:p-8">
        <div className="relative h-[320px] bg-[#3182CE] border-2 border-white/50 rounded-none overflow-hidden flex-1 sm:rounded-4xl">
          <div
            className="absolute inset-0 bg-repeat opacity-10" //absolute inset-0: fully flush with all four sides of the parent (top, right, bottom, left = 0)
            style={{
              backgroundImage: `url(${patternImg})`,
            }}
          />

          <div className="relative z-10 flex h-full flex-col justify-center items-center gap-2 md:gap-14 p-4 sm:px-6 md:px-20 px-10 mb-[172px]">
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[58px] text-white font-bold ml-0 md:ml-20 mb-0 md:mb-15 mr-0 md:mr-[79px]">
              Optimize and simplifies your sampling activity with QCIS
            </h1>
            <div className="bg-white/50 p-2 rounded-lg">
            <img
              className="w-full h-auto rounded-sm"
              src={statistikImg}
              alt="image dashboard"
            />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 md:max-w-2xl items-center bg-white flex flex-col px-3 py-5 sm:px-8 sm:py-8 md:px-10 lg:px-12 rounded-t-[32px] sm:rounded-none -mt-50 sm:mt-0 relative z-10">
        <div className="w-full mx-auto flex flex-col flex-1 justify-center py-4 sm:py-14 lg:22.5">
          <img src={logoImg} alt="PTSN Logo" className="w-40 sm:w-[237px] h-auto" />
          <div className="flex flex-col gap-10 sm:gap-15">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-[#404040] text-2xl sm:text-3xl md:text-5xl mt-8 sm:mt-10 md:mt-16">
                Get Started Now
              </h2>
              <p className="text-base sm:text-lg lg:text-2xl text-[#757575]">
                Enter your Credentials to access your account
              </p>
            </div>
            <div className="w-full h-px bg-gray-200"></div>
            <form>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="email"
                    className="block mt-2 mb-4 text-left text-base sm:text-xl text-[#616161]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full text-base sm:stext-lg text-[#757575] px-4 py-2 border border-[#C2C2C2] rounded-md"
                    required
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="password"
                    className="block mb-4 mt-2 text-left text-xl text-[#616161] "
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      // type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Your Password"
                      className="w-full text-lg text-[#757575] px-4 py-2 border border-gray-300 rounded-md pr-10"
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
              <div className="mt-5">
                <label className="flex items-center mt-2 ">
                  <input type="checkbox" className="w-4 h-4 accent-blue-500" />
                  <span className="ml-2 text-base text-[#404040]">
                    Remember Me
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-3 sm:py-4 mt-10 sm:mt-15 text-xl sm:text-2xl md:text-[32px] rounded-md bg-blue-500 text-white transition active:bg-blue-600"
              >
                Sign In
              </button>
            </form>
          </div>
        <div className="w-full flex flex-col justify-center">
          <div className="flex flex-row items-center gap-2 mt-8">
            <Info className="w-4 h-4 text-gray-400 " />
            <p className="text-base text-[#9E9E9E]">
              Account will be locked after 6 unsuccessful login attempts.
            </p>
          </div>
          <div className="flex flex-row items-start gap-2 mt-20">
            <Copyright className="w-4 h-4 text-gray-400 " />
            <p className="text-base text-[#9E9E9E]">
              2024 MIS All rights reserved
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
