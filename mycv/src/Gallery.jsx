import React from "react";
import './Gallery.css'

const samplePhotos = [
    "https://picsum.photos/id/1011/800/600",
    "https://picsum.photos/id/1022/800/600",
    "https://picsum.photos/id/1068/800/600",
    "https://picsum.photos/id/1015/800/600",
    "https://picsum.photos/id/1018/800/600",
    "https://picsum.photos/id/1020/800/600",
    "https://picsum.photos/id/1024/800/600",
    "https://picsum.photos/id/1025/800/600"
]


function Gallery() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "40px auto" }}>
      <h3>My Photography Gallery</h3>
      <p>Under construction: Coming soon.</p>
      {/* Optional: uncomment to show sample photos */}
      {/* <div className="gallery-grid">
        {samplePhotos.map((url, i) => (
          <figure key={i} className="photo-card">
            <img src={url} alt={`photo-${i}`} loading="lazy" />
            <figcaption>Photo {i + 1}</figcaption>
          </figure>
        ))}
      </div> */}
    </div>
  );
}

export default Gallery