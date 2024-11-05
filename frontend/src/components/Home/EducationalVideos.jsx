const EducationalVideos = () => {
  const videos = [
    {
      id: 1,
      title: "Understanding Diabetes: Prevention and Management",
      videoLink:
        "https://www.youtube.com/embed/RZHDuzQHksM?si=KQo9DtyDe1dCswaf",
    },
    {
      id: 2,
      title: "Importance of Regular Health Checkups",
      videoLink:
        "https://www.youtube.com/embed/-c8rDuCEpCU?si=q6s9SMmxTRQHD865",
    },
    {
      id: 3,
      title: "Heart Health: Tips for a Healthy Lifestyle",
      videoLink:
        "https://www.youtube.com/embed/NmJ70_O-ARY?si=kEVIfIATeptsH8mB",
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="heading text-center">Educational Videos & Webinars</h2>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative group rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <iframe
                // width="560"
                // height="315"
                className="w-full h-48 object-cover"
                src={video.videoLink}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>

              <div className="p-4 pt-0">
                <h3 className="text-[20px] font-bold text-violet-600">
                  {video.title}
                </h3>
                <button
                  href={video.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 mt-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-violet-600 hover:text-white transition duration-300"
                >
                  Watch Now &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalVideos;
