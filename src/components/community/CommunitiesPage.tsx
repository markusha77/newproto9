import React from 'react'
import { Navbar } from './Navbar'

interface Community {
  id: string;
  name: string;
  logo: string;
  members: number;
  description: string;
  projects: number;
  joinStatus: 'join' | 'request' | 'joined';
}

const communities: Community[] = [
  {
    id: '1',
    name: 'EcoTech Innovators',
    logo: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    members: 3,
    description: 'A community of developers, designers, and entrepreneurs building technology solutions for environmental sustainability.',
    projects: 2,
    joinStatus: 'join'
  },
  {
    id: '2',
    name: 'AI Creators Collective',
    logo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    members: 3,
    description: 'A collaborative community exploring the frontiers of artificial intelligence and machine learning applications.',
    projects: 1,
    joinStatus: 'request'
  },
  {
    id: '3',
    name: 'Design Systems Guild',
    logo: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    members: 3,
    description: 'A professional community dedicated to advancing the practice of design systems and component-based design.',
    projects: 1,
    joinStatus: 'join'
  }
];

const CommunitiesPage: React.FC = () => {
  const renderJoinButton = (status: Community['joinStatus']) => {
    switch (status) {
      case 'join':
        return (
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Join
          </button>
        );
      case 'request':
        return (
          <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            Request Access
          </button>
        );
      case 'joined':
        return (
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md cursor-default">
            Joined
          </button>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Communities</h1>
          <p className="text-gray-600 mt-2">
            Explore and join partner communities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community) => (
            <div key={community.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-center mb-4">
                <img 
                  src={community.logo} 
                  alt={community.name}
                  className="h-12 w-12 rounded-full mr-3"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80";
                  }}
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{community.name}</h3>
                  <p className="text-sm text-gray-500">{community.members} members</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 line-clamp-2">
                {community.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{community.projects} projects</span>
                {renderJoinButton(community.joinStatus)}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default CommunitiesPage
