import patternImg from './assets/pattern.png';
import statistikImg from './assets/statistik.png';
import logoImg from './assets/logo.png';
import { Info, Copyright } from 'lucide-react';


function App() {
  return (
    
    <div className=" min-h-screen flex flex-col sm:flex-row gap-8">
      
      <div className="w-full sm:w-1/2 bg-white flex flex-col p-8">
        <div className="relative h-full bg-[#3182CE] rounded-lg overflow-hidden flex-1">
          <div
            className="absolute inset-0 bg-center bg-repeat opacity-10" //absolute inset-0: fully flush with all four sides of the parent (top, right, bottom, left = 0)
            style={{
              backgroundImage: `url(${patternImg})`,
              backgroundSize: '70px',
            }}
          /> 
          
          <div className="relative z-10 flex flex-col items-center text-center m-4 sm:px-6 md:px-10 lg:px-12"> 
            <h1 className="text-center text-2xl sm:text-3xl font-bold leading-tight mt-10 mb-10 ">
              Optimize and simplifies your sampling activity with QCIS
            </h1>
            <img
              className="w-full max-w-xl h-auto border-4 border-white/50 shadow-lg" src={statistikImg} alt="contoh dashboard" />
          </div> 
        </div>
      </div>

      <div className="w-full sm:w-1/2 bg-white flex flex-col items-center p-8">
          <div className="flex flex-col gap-4 w-full">
          
              <img src={logoImg} alt="PTSN Logo" className="w-40"/>
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl mt-16">Get Started Now </h2>
                <p className="font-light text-md mt-1 mb-16">Enter your Credentials to access your account</p>
            
            <form>
              <label htmlFor="email" className="block mt-4 mb-2 text-left text-xl text-gray-700 font-bold">
                Email
              </label>
              <input id="email" type="email" placeholder="Enter Your Email" className="w-full text-lg px-4 py-2 border border-gray-300 rounded-md" required />
              <label htmlFor="password" className="block mt-4 mb-2 text-left text-xl text-gray-700 font-bold">
                Password
              </label>
              <input id="password" type="password" placeholder="Enter Your Password" className="w-full text-lg px-4 py-2 border border-gray-300 rounded-md" required/>
              <label className="flex items-center mt-4 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-500"/>
                <span className="ml-2 text-sm text-gray-500">
                  Remember Me
                </span>
              </label>
              <button type="submit" className="w-full mt-6 py-3 rounded-md bg-blue-500 text-white font-semibold transition active:bg-blue-600">
                Sign In
              </button> 
            </form>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-start gap-2 mt-1 ">
              <Info className="w-4 h-4 text-gray-400 mt-0.5" /> 
              <p className="text-sm text-gray-500">
                Account will be locked after 6 unsuccessful login attempts.
              </p>
            </div>
            <div className="flex flex-row items-start gap-2 mt-20">
              <Copyright className="w-4 h-4 text-gray-400 " />
              <p className="text-sm text-gray-400">
                2024 MIS All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
