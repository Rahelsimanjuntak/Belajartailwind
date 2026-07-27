import patternImg from "./assets/pattern.png";
import statistikImg from "./assets/statistik.png";
import logoImg from "./assets/logo.png";
import { Info, Copyright, EyeOff, Eye } from "lucide-react";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row bg-white gap-0 sm:gap-2 min-h-screen">
      
      <div className="w-full sm:flex-1 bg-white flex flex-col p-0 sm:p-6 lg:p-8">
        <div className="relative h-[280px] sm:h-auto bg-[#3182CE] border-2 border-white/50 rounded-none overflow-hidden flex-1 sm:rounded-[32px]">
          <div
            className="absolute inset-0 bg-repeat opacity-10"
            style={{
              backgroundImage: `url(${patternImg})`,
            }}
          />

          <div className="relative z-10 flex h-full flex-col  justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 min-[1920px]:gap-14 px-6 sm:px-8 md:px-10 lg:px-12 min-[1920px]:px-20 py-8">
            <h1 className="text-center text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl min-[1920px]:text-[58px] text-white font-bold max-w-[460px] lg:max-w-[500px] min-[1920px]:max-w-[560px] leading-tight">
              Optimize and simplifies yours ampling activity with
              <span className="font-black"> QCIS</span>
            </h1>
            <div className="w-full max-w-[380px] lg:max-w-[420px] min-[1920px]:max-w-[794px] bg-white/50 p-2 rounded-lg mt-8 md:mt-16">
              <img
                className="w-full h-auto rounded-sm"
                src={statistikImg}
                alt="image dashboard"
              />
            </div>
          </div>
        </div>
      </div>

    
      <div className="w-full sm:flex-1 items-center bg-white flex flex-col px-5 py-6 sm:px-8 sm:py-8 md:px-10 lg:px-12 rounded-t-[32px] sm:rounded-none -mt-10 sm:mt-0 relative z-10">
        <div className="w-full mx-auto flex flex-col flex-1 justify-center py-4 sm:py-8 md:py-10 max-w-[440px] md:max-w-[420px] lg:max-w-[460px] min-[1920px]:max-w-[620px] gap-16 lg:gap-14 min-[1920px]:gap-20">

          {/* DIV 1: logo n header */}
          <div className="flex flex-col gap-4 sm:gap-8">
            <img src={logoImg} alt="PTSN Logo" className="w-32 sm:w-36 md:w-36 lg:w-40 min-[1920px]:w-[237px] h-auto" />

            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-[#404040] text-2xl sm:text-2xl md:text-2xl lg:text-3xl min-[1920px]:text-5xl">
                Get Started Now
              </h2>
              <p className="text-sm sm:text-base md:text-base lg:text-lg min-[1920px]:text-2xl text-[#757575]">
                Enter your Credentials to access your account
              </p>
            </div>

            <div className="w-full h-px bg-gray-200" />
          </div>

          {/* DIV 2: form */}
          <div>
            <form>
              <div className="flex flex-col gap-5 min-[1920px]:gap-8">
                <div className="flex flex-col gap-2 min-[1920px]:gap-4">
                  <label
                    htmlFor="email"
                    className="block text-left text-sm sm:text-base min-[1920px]:text-xl text-[#616161]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full text-sm sm:text-base min-[1920px]:text-lg text-[#757575] px-4 py-2.5 min-[1920px]:py-3 border border-[#C2C2C2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3182CE]"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2 min-[1920px]:gap-4">
                  <label
                    htmlFor="password"
                    className="block text-left text-sm sm:text-base min-[1920px]:text-xl text-[#616161]"
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

              <div className="mt-4 min-[1920px]:mt-6">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 accent-blue-500" />
                  <span className="ml-2 text-sm min-[1920px]:text-base text-[#404040]">
                    Remember Me
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 sm:py-3 min-[1920px]:py-4 mt-6 sm:mt-8 min-[1920px]:mt-15 text-base sm:text-lg md:text-lg lg:text-xl min-[1920px]:text-[32px] rounded-md bg-blue-500 text-white transition active:bg-blue-600 hover:bg-blue-600"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* DIV 3: footer notes */}
          <div className="w-full flex flex-col justify-center gap-4">
            <div className="flex flex-row items-center gap-2">
              <Info className="w-4 h-4 text-gray-400 shrink-0" />
              <p className="text-xs sm:text-sm min-[1920px]:text-base text-[#9E9E9E]">
                Account will be locked after 6 unsuccessful login attempts.
              </p>
            </div>
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