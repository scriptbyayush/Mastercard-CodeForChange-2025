// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeedbacks() {
      try {
        const response = await fetch("http://localhost:3001/api/feedback");
        const data = await response.json();
        setFeedbacks(data);
      } catch (err) {
        console.error("Error fetching feedbacks:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFeedbacks();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600">Loading Dashboard...</div>;
  }

  // 📊 Stats
  const totalParticipants = feedbacks.length;
  const totalTrees = feedbacks.reduce((sum, f) => sum + Number(f.trees || 0), 0);
  const avgRating =
    feedbacks.reduce((sum, f) => sum + Number(f.rating || 0), 0) /
    (feedbacks.length || 1);

  const participationData = [
    { name: "Yes", value: feedbacks.filter((f) => f.participateAgain === "Yes").length },
    { name: "No", value: feedbacks.filter((f) => f.participateAgain === "No").length },
  ];

  const ratingData = [
    { name: "1 - Poor", value: feedbacks.filter((f) => f.rating === "1").length },
    { name: "2 - Fair", value: feedbacks.filter((f) => f.rating === "2").length },
    { name: "3 - Good", value: feedbacks.filter((f) => f.rating === "3").length },
    { name: "4 - Very Good", value: feedbacks.filter((f) => f.rating === "4").length },
    { name: "5 - Excellent", value: feedbacks.filter((f) => f.rating === "5").length },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-6">🌱 Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Total Participants</h2>
          <p className="text-3xl font-bold text-green-600">{totalParticipants}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Total Trees Planted</h2>
          <p className="text-3xl font-bold text-green-600">{totalTrees}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Average Rating</h2>
          <p className="text-3xl font-bold text-yellow-500">
            {avgRating.toFixed(1)} ⭐
          </p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Participation Data */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Participation Again?</h2>
          <div className="space-y-4">
            {participationData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-700">{item.name}</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${(item.value / totalParticipants) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rating Data */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Feedback Ratings</h2>
          <div className="space-y-4">
            {ratingData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-700">{item.name}</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${(item.value / totalParticipants) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feedback List */}
      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Feedback</h2>
          <div className="space-y-4">
            {feedbacks.slice(0, 5).map((feedback, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800">{feedback.name}</h3>
                    <p className="text-gray-600 text-sm">{feedback.email}</p>
                    <p className="text-gray-700 mt-2">{feedback.comments}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center">
                      {[...Array(Number(feedback.rating))].map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {feedback.trees} trees planted
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
