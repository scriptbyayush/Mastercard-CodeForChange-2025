import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  // Sample data - in a real app, this would come from your backend
  const stats = {
    treesPlanted: 127543,
    volunteersActive: 2456,
    carbonOffset: 89.2,
    areasRestored: 156
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Community Tree Planting Drive",
      date: "September 15, 2025",
      location: "Green Valley Park",
      participants: 150,
      image: "🌳"
    },
    {
      id: 2,
      title: "Environmental Awareness Workshop",
      date: "September 22, 2025",
      location: "Community Center Hall",
      participants: 75,
      image: "🎓"
    },
    {
      id: 3,
      title: "Urban Forest Development",
      date: "October 5, 2025",
      location: "Downtown District",
      participants: 200,
      image: "🏙️"
    }
  ];

  const recentFeedback = [
    {
      id: 1,
      name: "Aditya Singh",
      role: "Volunteer",
      comment: "Participating in GreenEarth's tree planting events has been incredibly fulfilling. The organization is well-structured and truly making a difference in our community.",
      rating: 5,
      date: "August 18, 2025"
    },
    {
      id: 2,
      name: "Dheeraj Pandey",
      role: "Environmental Educator",
      comment: "As an educator working with GreenEarth, I've seen firsthand how their programs inspire people to care about our environment. Excellent work!",
      rating: 4,
      date: "August 15, 2025"
    },
    {
      id: 3,
      name: "Paramjeet Singh",
      role: "Local Resident",
      comment: "The transformation in our neighborhood since GreenEarth started their urban forestry project is remarkable. Thank you for making our city greener!",
      rating: 5,
      date: "August 12, 2025"
    }
  ];

  const impactAreas = [
    {
      title: "Climate Action",
      description: "Reducing carbon footprint through strategic tree planting",
      icon: "🌍"
    },
    {
      title: "Biodiversity",
      description: "Creating habitats for wildlife and protecting ecosystems",
      icon: "🦋"
    },
    {
      title: "Community Health",
      description: "Improving air quality and creating green spaces for wellbeing",
      icon: "💚"
    },
    {
      title: "Education",
      description: "Teaching environmental awareness and sustainable practices",
      icon: "📚"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                  <path d="M12 16C12 18.21 10.21 20 8 20C5.79 20 4 18.21 4 16H12Z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-green-800">GreenEarth</span>
            </div>
            <div className="flex space-x-4">
              <Link 
                to="/login" 
                className="text-green-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Join Us
              </Link>
              <Link 
                to="/dashboard" 
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
              Growing a Greener Tomorrow
            </h1>
            <p className="text-xl text-green-600 mb-8 max-w-3xl mx-auto">
              Join our mission to combat climate change through strategic tree planting, 
              environmental education, and community engagement. Together, we're creating 
              a sustainable future for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/signup" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              >
                🌱 Start Planting Today
              </Link>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                📖 Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Impact So Far</h2>
            <p className="text-green-600 text-lg">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">{stats.treesPlanted.toLocaleString()}</div>
              <div className="text-green-800 font-medium">Trees Planted</div>
              <div className="text-green-600 text-sm mt-1">And growing every day!</div>
            </div>
            <div className="text-center p-6 bg-emerald-50 rounded-xl">
              <div className="text-4xl font-bold text-emerald-600 mb-2">{stats.volunteersActive.toLocaleString()}</div>
              <div className="text-emerald-800 font-medium">Active Volunteers</div>
              <div className="text-emerald-600 text-sm mt-1">Passionate changemakers</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">{stats.carbonOffset}k</div>
              <div className="text-green-800 font-medium">Tons CO₂ Offset</div>
              <div className="text-green-600 text-sm mt-1">Annual carbon reduction</div>
            </div>
            <div className="text-center p-6 bg-emerald-50 rounded-xl">
              <div className="text-4xl font-bold text-emerald-600 mb-2">{stats.areasRestored}</div>
              <div className="text-emerald-800 font-medium">Areas Restored</div>
              <div className="text-emerald-600 text-sm mt-1">Hectares of land revived</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
<section className="py-16 bg-green-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-green-800 mb-4">Upcoming Events</h2>
      <p className="text-green-600 text-lg">Join us in making a difference</p>
    </div>

    {/* Events Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {upcomingEvents.map((event) => (
        <div
          key={event.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="p-6 flex flex-col items-center text-center h-full justify-between">
            {/* Event Icon / Image */}
            <div className="text-5xl mb-4">{event.image}</div>

            {/* Event Title */}
            <h3 className="text-xl font-bold text-green-800 mb-3">
              {event.title}
            </h3>

            {/* Event Details */}
            <div className="space-y-2 text-green-600 text-sm mb-4">
              <div>📅 {event.date}</div>
              <div>📍 {event.location}</div>
              <div>👥 {event.participants} expected participants</div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">
              Register Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Impact Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Focus Areas</h2>
            <p className="text-green-600 text-lg">How we're making a comprehensive impact</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-green-100 hover:border-green-300 transition-colors">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{area.title}</h3>
                <p className="text-green-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Feedback */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">What People Say</h2>
            <p className="text-green-600 text-lg">Hear from our community members</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentFeedback.map((feedback) => (
              <div key={feedback.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">
                      {feedback.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-green-800">{feedback.name}</h4>
                    <p className="text-green-600 text-sm">{feedback.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-green-700 mb-4">"{feedback.comment}"</p>
                <p className="text-green-500 text-sm">{feedback.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Every tree planted today creates a better tomorrow. Join thousands of environmental 
            champions who are already making an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              🌳 Become a Volunteer
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              💚 Make a Donation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                    <path d="M12 16C12 18.21 10.21 20 8 20C5.79 20 4 18.21 4 16H12Z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">GreenEarth</span>
              </div>
              <p className="text-green-200">
                Growing a greener tomorrow, one tree at a time.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-green-200">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Projects</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Get Involved</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Programs</h3>
              <ul className="space-y-2 text-green-200">
                <li><a href="#" className="hover:text-white transition-colors">Tree Planting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-green-200">
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Volunteer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2025 GreenEarth NGO. All rights reserved. 🌱 Making the world greener, together.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;