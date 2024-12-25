import React, { useEffect, useState } from "react";
import BlogCard from "../BlogSection/BlogCard";

const BlogPageAllCard = () => {
  const [allcard, setAllCard] = useState([]);

  useEffect(() => {
    fetch("https://maruf02.github.io/Asset-Json-Img-dont-delete/Projects.json")
      .then((res) => res.json())
      .then((data) => setAllCard(data));
  }, []);

  return (
    <div>
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-12 ">
          {allcard.map((card) => (
            <BlogCard key={card.id} card={card}></BlogCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPageAllCard;
