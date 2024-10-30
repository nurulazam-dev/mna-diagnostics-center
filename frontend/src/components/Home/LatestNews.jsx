import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { latestNewsData } from "../../assets/data/latestNews";

const LatestNews = () => {
  return (
    <section className="container my-5 pb-3 px-10 w-full md:w-[95%] lg:w-[90%]">
      <div className="">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Latest News</h2>
        </div>
        {/* ===Service-Section-List component=== */}
        <div className="mt-[10px] lg:mt-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[20px]">
            {latestNewsData.slice(0, 3).map((news, id) => (
              <div className="border rounded" key={id}>
                <img src={news.img} alt="" />
                <div className="flex justify-between items-center mt-3 lg:px-5 px-3 text-[13px] lg:text-[12px] font-serif">
                  <p>
                    by <strong className="text-green-700">{news.writer}</strong>
                  </p>
                  <p>{news.post_date}</p>
                </div>
                <div className="pt-[5px] pb-[20px] px-3 lg:px-5 ">
                  <h2 className="lg:text-[20px] text-[16px] text-violet-900 leading-6 font-[800]">
                    {news.title}
                  </h2>
                  <p className="text-[14px] leading-6 text-textColor font-[400] mt-3 text-justify">
                    {news.desc}
                  </p>

                  <Link to="/about">
                    <button className="flex items-center text-blue-700 hover:text-violet-700 mt-2">
                      Read more{" "}
                      <BsArrowRight className="group-hover:text-white w-6 h-6 ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
