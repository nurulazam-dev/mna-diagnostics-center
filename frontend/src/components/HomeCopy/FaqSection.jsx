import { useState } from "react";
import { faqs } from "../../assets/data/faqs";
import faqImg from "../../assets/images/others/faq-img.png";

const FaqSection = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="p-4 lg:p-12">
      <h1 className="heading text-center">Frequently Asked Questions</h1>
      <div className="flex items-center justify-center ">
        {/* Image Section */}
        <div className="hidden lg:block md:block lg:w-1/2 w-full">
          <img
            src={faqImg}
            alt="Diagnostics Center"
            className="w-full h-auto"
          />
        </div>

        {/* FAQ Section */}
        <div className="lg:w-1/2 w-full space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white shadow-md p-4 rounded-lg">
              <div className="flex items-center justify-between text-[15px] lg:text-[18px]">
                <h2 className="pr-2 text-violet-800 font-semibold">
                  {faq.question}
                </h2>
                <button
                  onClick={() => setActive(faq.id)}
                  className="cursor-pointer text-red-700 font-bold"
                >
                  {active === faq.id ? "X" : "|||"}
                </button>
              </div>
              <div className="">
                {active === faq.id && (
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
