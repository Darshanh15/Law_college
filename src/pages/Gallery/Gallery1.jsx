// import React from "react";
// import "./Gallery1.scss";

// import img from "../../assets/collage_img/main (1).jpeg";
// import img1 from "../../assets/collage_img/main (2).jpeg";
// import img2 from "../../assets/collage_img/main (3).jpeg";
// import img3 from "../../assets/collage_img/main (4).jpeg";
// import img4 from "../../assets/collage_img/main (5).jpeg";
// import img5 from "../../assets/collage_img/main (6).jpeg";
// import img6 from "../../assets/collage_img/main (7).jpeg";
// import img7 from "../../assets/collage_img/main (8).jpeg";
// import img8 from "../../assets/collage_img/main (9).jpeg";
// import img9 from "../../assets/collage_img/main (10).jpeg";
// import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

// const images = [img, img1, img2, img3, img4, img5, img6, img7, img8, img9];

// const Gallery1 = () => {
//   return (
//     <>
//       <SectionTitle2 title="Gallery" />

//       <div className="gallery">
//         <div className="images-grid">
//           {images.map((img, index) => (
//             <div className="img-card" key={index}>
//               <img src={img} alt={`Gallery image ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Gallery1;



// --------------------------------------------------------------------------------------


import React, { useState } from "react";
import "./Gallery1.scss";

import img from "../../assets/collage_img/main (1).jpeg";
import img1 from "../../assets/collage_img/main (2).jpeg";
import img2 from "../../assets/collage_img/main (3).jpeg";
import img3 from "../../assets/collage_img/main (4).jpeg";
import img4 from "../../assets/collage_img/main (5).jpeg";
import img5 from "../../assets/collage_img/main (6).jpeg";
import img6 from "../../assets/collage_img/main (7).jpeg";
import img7 from "../../assets/collage_img/main (8).jpeg";
import img8 from "../../assets/collage_img/main (9).jpeg";
import img9 from "../../assets/collage_img/main (10).jpeg";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const images = [img, img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Gallery1 = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const showNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
    <SectionTitle2 title="Gallery" />
    
    <div className="gallery">
      {/* Image Grid */}
      <div className="images-grid">
        {images.map((src, index) => (
          <div className="img-card" key={index} onClick={() => openImage(index)}>
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="lightbox">
          <span className="close" onClick={closeImage}>
            &times;
          </span>
          <span className="prev" onClick={showPrev}>
            &#10094;
          </span>
          <img className="lightbox-img" src={images[selectedIndex]} alt="preview" />
          <span className="next" onClick={showNext}>
            &#10095;
          </span>
        </div>
      )}
    </div>

    </>
  );
};

export default Gallery1;
