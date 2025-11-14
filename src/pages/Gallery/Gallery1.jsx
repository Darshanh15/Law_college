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
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

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
import img10 from "../../assets/Gallery/img (1).jpeg";
import img11 from "../../assets/Gallery/img (2).jpeg";
import img12 from "../../assets/Gallery/img (3).jpeg";
import img13 from "../../assets/Gallery/img (4).jpeg";
import img14 from "../../assets/Gallery/img (5).jpeg";
import img15 from "../../assets/Gallery/img (6).jpeg";
import img16 from "../../assets/Gallery/img (7).jpeg";
import img17 from "../../assets/Gallery/img (8).jpeg";
import img18 from "../../assets/Gallery/img (9).jpeg";
import img19 from "../../assets/Gallery/img (10).jpeg";
import img20 from "../../assets/Gallery/img (11).jpeg";
import img21 from "../../assets/Gallery/img (12).jpeg";
import img22 from "../../assets/Gallery/img (13).jpeg";
import img23 from "../../assets/Gallery/img (14).jpeg";
import img24 from "../../assets/Gallery/img (15).jpeg";
import img25 from "../../assets/Gallery/img (16).jpeg";
import img26 from "../../assets/Gallery/img (17).jpeg";
import img27 from "../../assets/Gallery/img (18).jpeg";
import DriveGallery from "./DriveGallery";



const images = [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27];

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
    {/* <div style={{ padding: 16 }}>
      <DriveGallery folderId="1PFgUOQEW49BZnZcf0-qSIYhEZWUr9MZD" />
    </div> */}
    
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
