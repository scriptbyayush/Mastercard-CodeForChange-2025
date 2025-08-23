import React, { useState } from "react";

export default function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    trees: "",
    comments: "",
    rating: "",
    participateAgain: "",
    photo: null,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // You can send form data to backend here
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8 mt-8">
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
        Tree Plantation Feedback Form
      </h2>
      {submitted ? (
        <div className="text-green-700 text-lg text-center mt-8">
          Thank you for your feedback!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label className="block mb-4 font-medium">
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2 border border-green-300 rounded"
            />
          </label>
          <label className="block mb-4 font-medium">
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2 border border-green-300 rounded"
            />
          </label>
          <label className="block mb-4 font-medium">
            Phone Number:
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-green-300 rounded"
            />
          </label>
          <label className="block mb-4 font-medium">
            Date of Plantation:
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2 border border-green-300 rounded"
            />
          </label>
          <label className="block mb-4 font-medium">
            Location of Plantation:
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2 border border-green-300 rounded"
            />
          </label>
          <label className="block mb-4 font-medium">
            Number of Trees Planted:
            <input
              type="number"
              name="trees"
              value={form.trees}
              onChange={handleChange}
              required
              min="1"
              className="w-full mt-2 p-2 border border-green-300 rounded"
            />
          </label>
          <label className="block mb-4 font-medium">
            Feedback/Comments:
            <textarea
              name="comments"
              value={form.comments}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2 border border-green-300 rounded"
            />
          </label>
          <label className="block mb-4 font-medium">
            Rating of Experience:
            <select
              name="rating"
              value={form.rating}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2 border border-green-300 rounded"
            >
              <option value="">Select</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </label>
          <label className="block mb-4 font-medium">
            Would you participate again?
            <div className="mt-2">
              <label className="mr-6">
                <input
                  type="radio"
                  name="participateAgain"
                  value="Yes"
                  checked={form.participateAgain === "Yes"}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="participateAgain"
                  value="No"
                  checked={form.participateAgain === "No"}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                No
              </label>
            </div>
          </label>
          <label className="block mb-4 font-medium">
            Upload a Photo:
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-green-300 rounded"
            />
          </label>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold mt-4 w-full"
          >
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
}