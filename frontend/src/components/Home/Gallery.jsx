const Gallery = () => {
  const images = [
    { id: 1, src: "/path/to/image1.jpg", span: "row-span-2" },
    { id: 2, src: "/path/to/image2.jpg", span: "" },
    { id: 3, src: "/path/to/image3.jpg", span: "col-span-2" },
    { id: 4, src: "/path/to/image4.jpg", span: "" },
    { id: 5, src: "/path/to/image5.jpg", span: "row-span-2" },
    { id: 6, src: "/path/to/image6.jpg", span: "" },
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Our Programs & Activities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className={`rounded-lg overflow-hidden ${image.span}`}
            >
              <img
                src={image.src}
                alt={`Gallery Image ${image.id}`}
                className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
