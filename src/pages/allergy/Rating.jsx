import React, { useState } from "react";

const reviewsData = [
  {
    id: 1,
    name: "Samantha D.",
    rating: 4.5,
    date: "November 14, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Alex M.",
    rating: 4,
    date: "November 15, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Ethan R.",
    rating: 4.5,
    date: "November 16, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "Olivia P.",
    rating: 5,
    date: "November 17, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    name: "Liam K.",
    rating: 4,
    date: "November 18, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    name: "Ava H.",
    rating: 4.5,
    date: "November 19, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <img key={i} src="/star.png" alt="star" className="w-4 h-4" />
      ))}
      {hasHalfStar && (
        <img src="/halfstar.png" alt="half star" className="w-3 h-4" />
      )}
    </div>
  );
};

const Rating = () => {
  const [visible, setVisible] = useState(6);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Title with light sides & dark center */}
      <div className="mb-8 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Rating & Reviews
        </h2>

        <div className="flex items-center justify-center">
          <div className="w-80 h-px bg-gray-200" />
          <div className="w-34 h-px bg-gray-900" />
          <div className="w-80 h-px bg-gray-200" />
        </div>
      </div>

      {/* Sub Header */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-semibold text-gray-900">
          All Reviews <span className="text-black/60"> (451) </span>
        </span>

        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center w-12 h-12 min-w-12 min-h-12 bg-[#F0F0F0] rounded-full">
            <img src="/filter2.png" alt="filter" className="w-5 h-5" />
          </button>

          <button className="flex items-center gap-2 bg-[#F0F0F0] text-black text-sm px-6 py-3 rounded-full font-medium">
            latest
            <img src="/downarrow2.png" alt="down arrow" className="w-2 h-2" />
          </button>

          <button className="bg-black text-white px-5 py-1.5 rounded-full text-sm">
            Write a Review
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviewsData.slice(0, visible).map((review) => (
          <div
            key={review.id}
            className="relative border border-gray-200 rounded-xl p-6"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <StarRating rating={review.rating} />

                <div className="flex items-center gap-2 mt-2">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <img
                    src="/circletickmark.png"
                    alt="verified"
                    className="w-4 h-4"
                  />
                </div>
              </div>

              <button className="text-gray-400">•••</button>
            </div>

            <p className="text-sm text-gray-500 mb-4">{review.text}</p>

            <span className="text-xs text-gray-400">
              Posted on {review.date}
            </span>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visible < reviewsData.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisible((prev) => prev + 2)}
            className="bg-[#D8A85B] text-white px-8 py-2 rounded-full text-sm font-medium"
          >
            Load More Reviews
          </button>
        </div>
      )}

      {/* Write a Review Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-[#D8A85B] text-white px-6 py-2 rounded-full text-sm font-medium">
          Load More Reviews
        </button>
      </div>
    </section>
  );
};

export default Rating;
