import React, { useState } from "react";
import "./Gallery.scss";

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

const images = {
  2021: [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, ],
  2022: [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, ],
  2023: [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, ],
  2024: [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, ],
  2025: [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, ],
};

const Gallery = () => {
  const [activeYear, setActiveYear] = useState("2021");

  return (
    <>
      {/* <div>
        <SectionTitle backgroundText="FARMS2Bizz" title="Contact Us" />
      </div> */}

        <SectionTitle2 title="Gallery" />

      {/* <div>
      <SectionTitle1 logo={logo} title="Contact Us" />
    </div> */}
      <div className="gallery">
        {/* Year Tabs */}
        <div className="tabs">
          {Object.keys(images).map((year) => (
            <button
              key={year}
              className={activeYear === year ? "tab active" : "tab"}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Gallery Images */}
        <div className="images-grid">
          {images[activeYear].map((img, index) => (
            <div className="img-card" key={index}>
              <img src={img} alt={`Gallery ${activeYear}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
