import gameboy from "./assets/gameboy.gif"
import floppy from "./assets/floppy.gif"
import pixel1 from "./assets/pixel1.jpg"
import pixel2 from "./assets/pixel2.jpg"

function Header() {

    return (
        <div className="header">
            <div className="rounded-md bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <div className="bg-black">
                    <div className="headerImg flex justify-center items-center">
                        <img src={floppy} alt="Vapor floppy" className="w-48 h-48"></img>    
                        <div className="text-center p-20">
                            <h1 className="inline-block text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text p-1">CurlMike</h1>
                            <h3 className="text-2xl font-semibold">Welcome to my portfolio page :)</h3>
                            <p className="texl-xl">Here you can find some of my projects.</p>
                            <p className="texl-xl">I will try to keep this page updated as much as I can.</p>
                        </div>
                        <img src={gameboy} alt="Vapor gameboy" className="w-48 h-48"></img>
                    </div>
                    <div className="text-center scroll-down">
                        <button className="text-white border-4 border-purple-400 rounded-full bg-gradient-to-r from-blue-400 to-pink-500 lg:p-6 p-4 md:p-5 text-xl lg:text-2xl font-bold hover:cursor-pointer vapor-glow"
                        onClick={() => document.getElementById("topbar").scrollIntoView({ behavior: 'smooth' })}>Click here to see more!</button>
                        <h2 className="text-2xl md:text-3xl text-yellow-300 font-semibold mt-8">Or instead,</h2>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl text-blue-500 font-semibold mt-8 mb-8">&darr; Scroll Down to view more &darr;</h1>
                    </div>
                    <div className="images flex p-2">
                        <img src={pixel1} className="ml-auto mr-8 w-96 h-96 opacity-75 mb-12" alt="pixel1-image"></img>
                        <img src={pixel2} className="mr-auto ml-8 border border-gray-200 w-96 h-96 opacity-75 mb-12" alt="pixel2-image"></img>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Header