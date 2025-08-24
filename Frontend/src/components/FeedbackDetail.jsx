import React from "react";

export default function FeedbackDetail({
  feedbackData,
  selectedFeedback,
  setSelectedFeedback,
}) {
  if (!selectedFeedback) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Feedback List</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-green-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Trees</th>
              <th className="p-2 border">Rating</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map((fb) => (
              <tr key={fb.id} className="text-center">
                <td className="p-2 border">{fb.name}</td>
                <td className="p-2 border">{fb.trees}</td>
                <td className="p-2 border">{fb.rating}</td>
                <td className="p-2 border">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={() => setSelectedFeedback(fb)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Show full details
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Feedback Details</h2>
      <p><strong>Name:</strong> {selectedFeedback.name}</p>
      <p><strong>Email:</strong> {selectedFeedback.email}</p>
      <p><strong>Trees Planted:</strong> {selectedFeedback.trees}</p>
      <p><strong>Rating:</strong> {selectedFeedback.rating}</p>
      <p><strong>Comments:</strong> {selectedFeedback.comments}</p>
      <p><strong>Participate Again:</strong> {selectedFeedback.participateAgain}</p>

      {/* Action Buttons */}
      <div className="mt-4 space-x-3">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Approve
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Reject
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          Flag
        </button>
      </div>

      <button
        className="mt-6 bg-gray-500 text-white px-4 py-2 rounded"
        onClick={() => setSelectedFeedback(null)}
      >
        Back to List
      </button>
    </div>
  );
}
