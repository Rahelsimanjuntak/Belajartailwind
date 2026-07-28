import patternImg from "./assets/pattern.png";
import statistikImg from "./assets/statistik.png";
import logoImg from "./assets/logo.png";
import { Info, Copyright, EyeOff, Eye } from "lucide-react";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row bg-white gap-0 sm:gap-2 lg:gap-6 xl:gap-8 min-h-screen">
      
      <div className="flex-1 bg-white flex flex-col p-0 sm:p-6 lg:p-8">
        <div className="relative h-auto bg-[#3182CE] border-2 border-white/50 rounded-none overflow-hidden flex-1 sm:rounded-[32px]">
          <div
            className="absolute inset-0 bg-repeat opacity-10"
            style={{
              backgroundImage: `url(${patternImg})`,
            }}
          />

          <div className="relative z-10 flex h-full flex-col justify-center xl:-translate-y-14 items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-16 px-6 sm:px-8 md:px-10 lg:px-12">
            <h1 className="text-center text-xl sm:text-2xl 2 xl:text-3xl xl:text-5xl text-white font-bold">
              Optimize and simplifies yours ampling activity with
              <span className="font-black"> QCIS</span>
            </h1>
            <div className="w-full px-4 lg:px-10 xl:px-20 mt-8 ">
                <img
                  className="w-full h-auto rounded-lg border-4 border-white/70 shadow-[0_9px_20px_rgba(0,0,0,0.10), 0_37px_37px_rgba(0,0,0,0.09),0_82px_49px_rgba(0,0,0,0.05),0_146px_59px_rgba(0,0,0,0.01)]"
                  src={statistikImg}
                  alt="image dashboard"
                />
            </div>
          </div>
        </div>
      </div>

    
      <div className="flex-1 items-center bg-white flex flex-col sm:gap-8 lg:gap-20 px-5 py-6 sm:px-8 sm:py-8 md:px-8 lg:px-8 xl:px-10 rounded-t-[32px] sm:rounded-none -mt-15 sm:mt-0 relative z-10">
        <div className="w-full mx-auto flex flex-col flex-1 justify-center py-4 sm:py-8 lg:py-10 md:max-w-[450px] 2xl:max-w-[581px] gap-10 md:gap-14 lg:gap-16 2xl:gap-20">

          {/* DIV 1: logo n header */}
          <div className="flex flex-col gap-4 sm:gap-10 xl:gap-20 ">
            <img src={logoImg} alt="PTSN Logo" className="w-32 sm:w-36 md:w-36 lg:w-40 2xl:w-[237px] h-auto" />
          </div>

          {/* DIV 2: form */}
          <div className="flex flex-col gap-8 2xl:gap-16">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-[#404040] text-2xl sm:text-2xl lg:text-5xl">
                Get Started Now
              </h2>
              <p className="text-sm sm:text-base md:text-base lg:text-2xl text-[#757575]">
                Enter your Credentials to access your account
              </p>
            </div>

            <div className="w-full h-px bg-gray-200" />

            <form>
              <div className="flex flex-col gap-5 md:gap-8">
                <div className="flex flex-col gap-2 md:gap-4">
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
                    className="w-full text-sm sm:text-base min-[1920px]:text-lg text-[#757575] px-4 py-2.5 border border-[#C2C2C2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3182CE]"
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
              <div className="mt-4 min-[1920px]:">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 accent-blue-500" />
                  <span className="ml-2 text-sm sm:text-base text-[#404040]">
                    Remember Me
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-2.5 sm:py-3 min-[1920px]:py-4 mt-6 sm:mt-8 min-[1920px]:mt-15 text-base sm:text-lg md:text-lg lg:text-3xl rounded-md bg-blue-500 text-white transition active:bg-blue-600 hover:bg-blue-600"
              >
                Sign In
              </button>
            <div className="flex flex-row items-center mt-8">
              <Info className="w-4 h-4 text-gray-400 shrink-0" />
              <p className="text-xs sm:text-sm min-[1920px]:text-base text-[#9E9E9E]">
                Account will be locked after 6 unsuccessful login attempts.
              </p>
            </div>
            </form>
          </div>

          {/* DIV 3: footer notes */}
          <div className="w-full flex flex-col justify-center gap-20">
            <div className="flex flex-row items-start gap-2">
              <Copyright className="w-4 h-4 text-gray-400 shrink-0" />
              <p className="text-xs sm:text-sm min-[1920px]:text-base text-[#9E9E9E]">
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