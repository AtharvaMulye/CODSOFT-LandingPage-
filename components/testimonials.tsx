import React from "react";
import Header from "./header";
import TestimonialCard from "./testimonialCard";

function TestimonialSection() {
const appReviewData = [
    {
        id: 0,
        imageUrl: "/g1.jpg",
        reviewerName: "Sara Thompson",
        review:
            "COMPIL is a game-changer! The AI tools are incredibly powerful, and the user-friendly interface makes navigation a breeze. I highly recommend it!",
    },
    {
        id: 1,
        imageUrl: "/g2.webp",
        reviewerName: "Michael Chen",
        review:
            "I've been searching for a platform like COMPIL for ages! It's become my go-to resource hub for everything related to IT and computer science. Kudos to the team!",
    },
    {
        id: 2,
        imageUrl: "/g3.jpg",
        reviewerName: "Lisa Patel",
        review:
            "COMPIL has revolutionized the way I work. The AI image generator is a lifesaver, and the comprehensive collection of resources is unmatched. Truly impressed!",
    },
    {
        id: 3,
        imageUrl: "/g4.jpg",
        reviewerName: "Caterina Richards",
        review:
            "With COMPIL, I've discovered a treasure trove of IT resources. From code snippets to insightful articles, it has everything I need to stay ahead in my field. Highly recommended!",
    },
];
  return (
    <section className="mt-[9rem]">
      <Header title="testimonials" subtitle="What Clients say about us" />
      <div className="grid grid-cols-1 gap-16  md:grid-cols-2 mt-8 md:mt-[6.75rem]">
        {appReviewData.map((review) => (
          <TestimonialCard
            key={review.id}
            imageUrl={review.imageUrl}
            review={review.review}
            reviewerName={review.reviewerName}
          />
        ))}
      </div>
    </section>
  );
}
export default TestimonialSection;
