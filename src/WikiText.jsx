import Cat from "./assets/cat.jpg"
import Lain from "./assets/lain.jpg"

function WikiText({ selected }) {
    switch (selected) {
        case 'about':
            return (
                <div className="about">
                    <h3 className="text-3xl font-semibold bg-gradient-to-t from-blue-400 to-white text-transparent bg-clip-text">About myself</h3>
                    <br/>
                    <div className="text-xl pr-10 pt-2">
                        <p>Hi! I'm CurlMike (online alias), I'm from Portugal and I'm currently studying computer science.</p>
                        <br/>
                        <p>Unfortunately, even with the work on uni I don't feel confident in my coding skills and I feel like I'm lacking in a lot of areas.</p>
                        <br/>
                        <p>In an attempt to fix that, I'm currently developing random projects that come to my mind in order to widen my knowledge and also find what I'm most interested in.</p>
                    </div>
                    <div className="flex justify-center pt-4">
                        <img src={Cat} alt="Cat pc" className="w-96 h-72"></img>
                    </div>
                </div>
            );
        case 'projects':
            return (
                <div className="project-page">
                    <h3 className="text-3xl font-semibold bg-gradient-to-t from-blue-400 to-white text-transparent bg-clip-text">My projects!</h3>
                    <br/>
                    <ul className="projects">
                        <li className="flex border-b border-white hover:bg-gray-700">
                            <img src={Lain} alt="Lain" className="w-24 h-24 mr-4"></img>
                            <a href="https://github.com/CurlMike/Shikinami" className="flex-1 p-1">
                                <h4 className="text-2xl font-bold text-purple-500">Shikinami</h4>
                                <h6 className="text-xl">Languages: Python</h6>
                                <p className="textl-lg">Multi-purpose discord bot. Capable of playing music and moderate.</p>
                            </a>
                        </li>
                    </ul>
                </div>
            );
        default:
            return (
                <>
                    <h3 className="text-3xl font-semibold">Hi!</h3>
                    <p className="text-xl">Choose an option from the topbar to read about it.</p>
                </>
            );
    }
}

export default WikiText;