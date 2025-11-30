export default function Header() {
  return (
    <header className="w-full border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center space-x-3">
            <div className="w-16 h-16">
              <img src="/nirvanalogo.png" alt="Nirvana Clinic Logo" className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            <span className="text-2xl font-semibold  bg-clip-text  font-['Poppins'] tracking-tight ">
              Nirvana Integrated
            </span>
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


          <div className="shrink-0">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-base transition-colors shadow-sm">
              Begin Your Healing
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}