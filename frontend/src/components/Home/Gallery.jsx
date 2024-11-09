import img01 from "../../assets/images/home/gallery/1.png";
import img10 from "../../assets/images/home/gallery/10.png";
import img02 from "../../assets/images/home/gallery/2.png";
import img03 from "../../assets/images/home/gallery/3.png";
import img04 from "../../assets/images/home/gallery/4.png";
import img05 from "../../assets/images/home/gallery/5.png";
import img06 from "../../assets/images/home/gallery/6.png";
import img07 from "../../assets/images/home/gallery/7.png";
import img08 from "../../assets/images/home/gallery/8.png";
import img09 from "../../assets/images/home/gallery/9.png";

const Gallery = () => {
  // const images = Array.from({ length: 10 }, () => img01);

  const images = [
    { id: 1, src: img01 },
    { id: 2, src: img02 },
    { id: 3, src: img03 },
    { id: 4, src: img04 },
    { id: 5, src: img05 },
    { id: 6, src: img06 },
    { id: 7, src: img07 },
    { id: 8, src: img08 },
    { id: 9, src: img09 },
    { id: 10, src: img10 },
  ];

  return (
    <section className="container mb-10">
      <h2 className="heading text-center">Our Programs & Activities</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className={`overflow-hidden border-2 border-violet-600 ${
              index % 5 === 0 ? "row-span-2" : ""
            }`}
          >
            <img
              src={img.src}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
            />
            {/* <h1 className="text-3xl">{img.id}</h1> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
