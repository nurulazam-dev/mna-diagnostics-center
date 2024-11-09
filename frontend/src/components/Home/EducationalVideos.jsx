const EducationalVideos = () => {
  const videos = [
    {
      id: 1,
      title: "Understanding Diabetes: Prevention and Management",
      videoLink:
        "https://www.youtube.com/embed/zJnZXInr83k?si=vnY9U-hK9aOAcdjz",
    },
    {
      id: 2,
      title: "Importance of Regular Health Checkups",
      videoLink:
        "https://www.youtube.com/embed/lT4Z2ZjBnkc?si=IKQ-HJ7A6EEObRrR",
    },
    {
      id: 3,
      title: "Heart Health: Tips for a Healthy Lifestyle",
      videoLink:
        "https://www.youtube.com/embed/guHFpjaFSgY?si=yGfzSCHn6TJJRVpP",
    },
  ];

  return (
    <section className="container mb-10">
      <h2 className="heading text-center">Educational Videos & Webinars</h2>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative group rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <iframe
              className="w-full h-48 object-cover"
              src={video.videoLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <div className="p-4 pt-0">
              <h3 className="text-[20px] font-bold text-violet-600">
                {video.title}
              </h3>
              <button
                to={video.videoLink}
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 mt-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-violet-600 hover:text-white transition duration-300"
              >
                Watch Now &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationalVideos;
