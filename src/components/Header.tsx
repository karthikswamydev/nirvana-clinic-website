export default function Header() {
  return (
    <header className="w-full border-b border-white/20 bg-linear-to-r from-[#E8F7F4] via-[#F0FAFF] to-[#E4F3F9] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center space-x-3">
            <div className="w-16 h-16">
              <img src="/nirvanalogo.png" alt="Nirvana Clinic Logo" className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold bg-linear-to-r from-[#1b4280] via-[#0EB4A0] to-[#1B4C9B] bg-clip-text text-transparent font-['Italianno']">
                Nirvana Integrated Clinic
              </span>
              <span className="text-[12px] text-center text-gray-600 font-['Italianno'] -mt-1 tracking-wide">
                Where Healing Meets Harmony
              </span>
            </div>
          </div>


          <nav className="hidden md:flex items-center space-x-12 ml-10">
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer font-medium text-base transition-colors">
              Home
            </span>
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer font-medium text-base transition-colors">
              About
            </span>
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer font-medium text-base transition-colors">
              Services
            </span>
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer font-medium text-base transition-colors">
              Contact
            </span>
          </nav>


          {/* <div className="shrink-0">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-base transition-colors shadow-sm">
              Begin Your Healing
            </button>
          </div> */}
        </div>
      </div>
    </header>
  )
}