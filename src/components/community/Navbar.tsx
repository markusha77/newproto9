import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search } from 'lucide-react'
import { AuthButtons } from '../navigation'
import logo from '../../assets/logo.svg'
import { Users, CircleDot } from 'lucide-react'

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'community' | 'communities' | 'openspaces'>('community');
  const location = useLocation();

  // Set active tab based on current route
  useEffect(() => {
    if (location.pathname.includes('/open-spaces')) {
      setActiveTab('openspaces');
    } else if (location.pathname.includes('/community')) {
      setActiveTab('community');
    } else {
      setActiveTab('communities');
    }
  }, [location.pathname]);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100' 
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="ChatAndBuild Logo" className="h-8 w-8 mr-2" />
                <span className="text-xl font-bold text-indigo-600">ChatAndBuild</span>
              </Link>
              
              <nav className="hidden md:ml-10 md:flex">
                <div className="flex items-center">
                  <Link 
                    to="/community" 
                    className={`flex items-center px-4 py-2 text-base font-medium transition-all duration-200 border-b-2 ${
                      activeTab === 'community' 
                        ? 'text-black border-blue-500' 
                        : 'text-gray-500 border-transparent hover:text-gray-900'
                    }`}
                    onClick={() => setActiveTab('community')}
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Community
                  </Link>
                  
                  <Link 
                    to="/communities" 
                    className={`flex items-center px-4 py-2 text-base font-medium transition-all duration-200 border-b-2 ${
                      activeTab === 'communities' 
                        ? 'text-black border-blue-500' 
                        : 'text-gray-500 border-transparent hover:text-gray-900'
                    }`}
                    onClick={() => setActiveTab('communities')}
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Communities
                  </Link>
                  
                  <Link 
                    to="/open-spaces" 
                    className={`flex items-center px-4 py-2 text-base font-medium transition-all duration-200 border-b-2 ${
                      activeTab === 'openspaces' 
                        ? 'text-black border-blue-500' 
                        : 'text-gray-500 border-transparent hover:text-gray-900'
                    }`}
                    onClick={() => setActiveTab('openspaces')}
                  >
                    <CircleDot className="mr-2 h-5 w-5" />
                    Open Spaces
                  </Link>
                </div>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              {/* Auth buttons */}
              <AuthButtons />
            </div>
          </div>
        </div>
      </header>
      {/* Add padding to account for fixed header */}
      <div className="h-16"></div>
    </>
  )
}
