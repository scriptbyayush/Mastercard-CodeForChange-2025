// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart,Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend} from "recharts";

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

  const COLORS = ["#4ade80", "#f87171", "#60a5fa", "#facc15", "#a78bfa"];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-6">🌱 Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="shadow-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-700">Total Participants</h2>
            <p className="text-3xl font-bold text-green-600">{totalParticipants}</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-700">Total Trees Planted</h2>
            <p className="text-3xl font-bold text-green-600">{totalTrees}</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-700">Average Rating</h2>
            <p className="text-3xl font-bold text-yellow-500">
              {avgRating.toFixed(1)} ⭐
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Participation Pie Chart */}
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Participation Again?</h2>
            <PieChart width={400} height={300}>
              <Pie
                data={participationData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#4ade80"
                label
              >
                {participationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </CardContent>
        </Card>

        {/* Rating Bar Chart */}
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Feedback Ratings</h2>
            <BarChart width={400} height={300} data={ratingData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#60a5fa" />
            </BarChart>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
