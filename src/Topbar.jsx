import React from 'react';
import vaporSun from "./assets/vapor-sun.png"

function Topbar({ selected, setSelected }) {
    return (
        <div className="Topbar mt-6 px-1 pt-1" id="topbar">
            <div className="flex justify-around items-center my-2">
                <div className="flex justify-center items-center">
                    <img src={vaporSun} alt="Vapor Sun" className="flex w-12 h-12"></img>
                    <h3 className="text-3xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">CurlMike</h3>
                </div>
                <div className="p-4">
                    <button className={`bg-transparent text-3xl font-semibold mr-6 hover:opacity-75 ${selected === 'about' ? 'bg-gradient-to-r from-blue-400 to-pink-600 text-transparent bg-clip-text' : ''}`} id="aboutBtn"
                    onClick={() => {
                        aboutBtn.classList.add("bg-gradient-to-r", "from-blue-400", "to-pink-600", "text-transparent",  "bg-clip-text")
                        projectsBtn.classList.remove("bg-gradient-to-r", "from-blue-400", "to-pink-600", "text-transparent",  "bg-clip-text")
                        setSelected('about')
                    }}
                    >About</button>
                    <button className={`bg-transparent text-3xl font-semibold mr-6 hover:opacity-75 ${selected === 'projects' ? 'bg-gradient-to-r from-blue-400 to-pink-600 text-transparent bg-clip-text' : ''}`} id="projectsBtn"
                    onClick={() => {
                        projectsBtn.classList.add("bg-gradient-to-r", "from-blue-400", "to-pink-600", "text-transparent",  "bg-clip-text")
                        aboutBtn.classList.remove("bg-gradient-to-r", "from-blue-400", "to-pink-600", "text-transparent",  "bg-clip-text")
                        setSelected('projects')
                    }}
                    >Projects</button>
                </div>
            </div>
            <hr className="h-1 border-0 bg-gradient-to-r from-blue-600 to-pink-400"/>
        </div>
    );
}

export default Topbar