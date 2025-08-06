import logo from "../assets/logo.gif";

export default function Logo() {
    return (
        <div className="flex items-center cursor-pointer">
            <div className="w-16 h-16 flex items-center justify-center">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-full h-full object-contain scale-150"
                />
            </div>

            
            <h1 className="text-3xl font-extrabold">
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-burn">
                    Code
                </span>
                <span className="text-gray-200">With</span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent animate-burn">
                    Yash
                </span>
            </h1>
        </div>
    );
}
