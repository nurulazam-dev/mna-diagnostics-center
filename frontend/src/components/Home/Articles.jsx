import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { articlesData } from "../../assets/data/articles";

const Articles = () => {
  return (
    <section className="container mb-10">
      <h2 className="heading text-center">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[20px]">
        {articlesData.slice(0, 3).map((article, id) => (
          <div className="border rounded" key={id}>
            <img src={article.img} alt="" />
            <div className="flex justify-between items-center mt-3 lg:px-5 px-3 text-[13px] lg:text-[12px] font-serif">
              <p>
                by <strong className="text-green-700">{article.writer}</strong>
              </p>
              <p>{article.post_date}</p>
            </div>
            <div className="pt-[5px] pb-[20px] px-3 lg:px-5 ">
              <h2 className="lg:text-[20px] text-[16px] text-violet-900 leading-6 font-[800]">
                {article.title}
              </h2>
              <p className="text-[14px] leading-6 text-textColor font-[400] mt-3 text-justify">
                {article.desc}
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
    </section>
  );
};

export default Articles;
