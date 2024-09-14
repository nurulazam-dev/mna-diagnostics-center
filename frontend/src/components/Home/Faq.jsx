import faqImg from "../../assets/images/others/faq-img.png";
import FaqList from "./Faq/FaqList";

const Faq = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-0">
          <div className="w-1/2 hidden md:block ">
            <img src={faqImg} alt="" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="heading">Most questions by our beloved patients</h2>

            {/* ===FaqList component=== */}
            <FaqList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
