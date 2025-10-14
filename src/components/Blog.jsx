import React from "react";

const posts = [
  {
    id: 1,
    title: "Importance of investing more in branding first",
    date: "Feb 14, 2021",
    img: "/images/Rectangle-59.png",
    tag: "Business",
  },
  {
    id: 2,
    title: "Latest design trend: minimalism looks pleasing",
    date: "Feb 11, 2021",
    img: "/images/Rectangle-62.png",
    tag: "Branding",
  },
  {
    id: 3,
    title: "Top 100 most beautiful t-shirt prints",
    date: "Feb 11, 2021",
    img: "/images/Rectangle-66.png",
    tag: "Design",
  },
];

export default function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <h2>Blog</h2>

        <div className="row">
          {posts.map((p) => (
            <article key={p.id} className="col-md-4 post-item blog-article">
              <div className="image-holder">
                <a href="#" className="image-hvr-effect">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="post-image"
                  />
                </a>
              </div>

              <div className="blog-description">
                <div style={{ fontSize: ".85rem", color: "#7a7a7a" }}>
                  {p.date} — {p.tag}
                </div>
                <h4>{p.title}</h4>
                <a href="#" className="icon-link">
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
