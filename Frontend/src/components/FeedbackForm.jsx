import React, { useState } from "react";
import { Link } from "react-router-dom";

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
  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    const formData = new FormData();

    // Append all form fields to formData
    for (const key in form) {
      if (form.hasOwnProperty(key) && form[key] !== null) {
        formData.append(key, form[key]);
      }
    }

    try {
      const response = await fetch("http://localhost:3001/api/feedback", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      setSubmitted(true);
      // Optionally reset form here if you want
      // setForm({ name: "", email: "", phone: "", date: "", location: "", trees: "", comments: "", rating: "", participateAgain: "", photo: null });

    } catch (err) {
      setError(err.message || "Something went wrong");
      setSubmitted(false);
    }
  }

  return (
    <div className="mx-auto bg-green-50 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
        Tree Plantation Feedback Form
      </h2>
      {submitted ? (
        <div className="text-center">
          <div className="text-green-700 text-lg mb-6">
            Thank you for your feedback! 🌱
          </div>
          <div className="text-green-600 mb-6">
            Your valuable feedback helps us improve our tree plantation initiatives.
          </div>
          <Link
            to="/"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Return to Home Page
          </Link>
        </div>
      ) : (
        <>
          {error && (
            <div className="text-red-600 text-center mb-4">{error}</div>
          )}
          <form onSubmit={handleSubmit}>
            {/* Form fields here same as before */}
            <label className="block mb-4 font-medium text-green-700">
              Name:
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-green-300 rounded-lg bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            </label>
            <label className="block mb-4 font-medium text-green-700">
              Email:
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-green-300 rounded-lg bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            </label>
            <label className="block mb-4 font-medium text-green-700">
              Phone Number:
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-green-300 rounded-lg bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            </label>
            <label className="block mb-4 font-medium text-green-700">
              Date of Plantation:
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-green-300 rounded-lg bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            </label>
            <label className="block mb-4 font-medium text-green-700">
              Location of Plantation:
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-green-300 rounded-lg bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            </label>
            <label className="block mb-4 font-medium text-green-700">
              Number of Trees Planted:
              <input
                type="number"
                name="trees"
                value={form.trees}
                onChange={handleChange}
                required
                min="1"
                className="w-full mt-2 p-3 border border-green-300 rounded-lg bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            </label>
            <label className="block mb-4 font-medium text-green-700">
              Feedback/Comments:
              <textarea
                name="comments"
                value={form.comments}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-green-300 rounded-lg bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200 min-h-[80px]"
              />
            </label>
            <label className="block mb-4 font-medium text-green-700">
              Rating of Experience:
              <select
                name="rating"
                value={form.rating}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-green-300 rounded-lg bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200"
              >
                <option value="">Select</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </label>
            <label className="block mb-4 font-medium text-green-700">
              Would you participate again?
              <div className="mt-2">
                <label className="mr-6 text-green-600">
                  <input
                    type="radio"
                    name="participateAgain"
                    value="Yes"
                    checked={form.participateAgain === "Yes"}
                    onChange={handleChange}
                    required
                    className="mr-2 text-green-600 focus:ring-green-500"
                  />
                  Yes
                </label>
                <label className="text-green-600">
                  <input
                    type="radio"
                    name="participateAgain"
                    value="No"
                    checked={form.participateAgain === "No"}
                    onChange={handleChange}
                    required
                    className="mr-2 text-green-600 focus:ring-green-500"
                  />
                  No
                </label>
              </div>
            </label>
            <label className="block mb-4 font-medium text-green-700">
              Upload a Photo:
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-green-300 rounded-lg bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            </label>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold mt-4 w-full transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Submit Feedback
            </button>
          </form>
        </>
      )}
    </div>
  );
}
