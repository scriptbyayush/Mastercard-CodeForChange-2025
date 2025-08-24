import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import FeedbackDetail from "./FeedbackDetail";
import Reports from "./Reports";
import UserManagement from "./UserManagement";

export default function AdminDashboard() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3001/api/feedback"); 
        const data = await res.json();
        setFeedbackData(data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
        setFeedbackData([]);
        // fallback dummy data
        // setFeedbackData([
        //   {
        //     id: 1,
        //     name: "Anaya",
        //     email: "anaya@test.com",
        //     trees: 5,
        //     rating: 4,
        //     comments: "Great initiative!",
        //     participateAgain: "Yes",
        //   },
        //   {
        //     id: 2,
        //     name: "Sneha",
        //     email: "sneha@test.com",
        //     trees: 3,
        //     rating: 5,
        //     comments: "Loved the event!",
        //     participateAgain: "Yes",
        //   },
        //   {
        //     id: 3,
        //     name: "Ravi",
        //     email: "ravi@test.com",
        //     trees: 2,
        //     rating: 3,
        //     comments: "Could be more organized.",
        //     participateAgain: "No",
        //   },
        // ]);
      }
    }
    fetchData();
  }, []);

  // Basic analytics
  const totalTrees = feedbackData.reduce(
    (sum, f) => sum + Number(f.trees || 0),
    0
  );
  const totalPeople = feedbackData.length;
  const willingParticipants = feedbackData.filter(
    (f) => f.participateAgain === "Yes"
  ).length;

  // Rating distribution
  const ratingDistribution = [1, 2, 3, 4, 5].map((r) => ({
    rating: `${r} Star`,
    count: feedbackData.filter((f) => Number(f.rating) === r).length,
  }));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-green-700">
        Admin Dashboard
      </h1>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => {
            setActiveTab("dashboard");
            setSelectedFeedback(null);
          }}
          className={`px-4 py-2 rounded ${
            activeTab === "dashboard"
              ? "bg-green-600 text-white"
              : "bg-gray-300"
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab("feedbackDetail")}
          className={`px-4 py-2 rounded ${
            activeTab === "feedbackDetail"
              ? "bg-green-600 text-white"
              : "bg-gray-300"
          }`}
        >
          Feedback Detail
        </button>
        <button
          onClick={() => setActiveTab("reports")}
          className={`px-4 py-2 rounded ${
            activeTab === "reports"
              ? "bg-green-600 text-white"
              : "bg-gray-300"
          }`}
        >
          Reports & Analytics
        </button>
        <button
          onClick={() => setActiveTab("userManagement")}
          className={`px-4 py-2 rounded ${activeTab === "userManagement"
              ? "bg-green-600 text-white"
              : "bg-gray-300"
            }`}
        >
          User Management
        </button>
      </div>

      {/* Default Dashboard */}
      {activeTab === "dashboard" && (
        <div>
          {/* Summary Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded shadow text-center">
              <h2 className="text-lg font-bold">🌳 Trees Planted</h2>
              <p className="text-2xl">{totalTrees}</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h2 className="text-lg font-bold">👥 Participants</h2>
              <p className="text-2xl">{totalPeople}</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h2 className="text-lg font-bold">✅ Will Participate Again</h2>
              <p className="text-2xl">{willingParticipants}</p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-4">Rating Distribution</h3>
              <BarChart width={400} height={250} data={ratingDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="rating" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#4CAF50" />
              </BarChart>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-4">Participation Again</h3>
              <PieChart width={400} height={250}>
                <Pie
                  data={[
                    { name: "Yes", value: willingParticipants },
                    { name: "No", value: totalPeople - willingParticipants },
                  ]}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  <Cell fill="#4CAF50" />
                  <Cell fill="#F44336" />
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>
        </div>
      )}

      {activeTab === "feedbackDetail" && (
        <FeedbackDetail
          feedbackData={feedbackData}
          selectedFeedback={selectedFeedback}
          setSelectedFeedback={setSelectedFeedback}
        />
      )}

      {activeTab === "reports" && <Reports feedbackData={feedbackData} />}
      {activeTab === "userManagement" && <UserManagement/>}
    </div>
  );
}
