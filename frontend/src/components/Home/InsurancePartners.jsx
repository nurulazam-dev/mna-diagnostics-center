const insurancePartnersData = [
  {
    name: "Pragati Life Insurance",
    website: "https://pragatilife.com",
    logo: "https://pragatilife.com/images/banners/pragati-Life-Ins-Logo-Eng.png",
  },
  {
    name: "Delta Life Insurance",
    website: "https://deltalife.org",
    logo: "https://www.deltalife.org/assets/site/img/logo.png",
  },
  {
    name: "Prime Islami Life Insurance",
    website: "https://primeislamilife.com",
    logo: "https://primeislamilife.com/image/Logo/primebaner.png",
  },

  {
    name: "Sonar Bangla Insurance",
    website: "https://sonarbangla.com.bd",
    logo: "https://www.sonarbanglainsurance.com/images/footer-logomj.jpg",
  },
  {
    name: "Asia Pacific General Insurance",
    website: "https://asiapacificgenins.com",
    logo: "https://www.apgicl.com/front/assets/images/logo.png",
  },

  {
    name: "Eastern Insurance Bangladesh",
    website: "https://easterninsbd.com",
    logo: "https://easterninsurancebd.com/wp-content/uploads/2019/08/LOGO-main.svg",
  },
  {
    name: "Central Insurance Bangladesh",
    website: "https://centralinsbd.com",
    logo: "https://cicl-bd.com/admin/uploads/banner/HNOIm6CJlteC.jpg",
  },
];

const InsurancePartners = () => {
  return (
    <section className="container mb-10">
      <h2 className="text-center heading">Insurance & Partners</h2>
      <div className="overflow-hidden px-5">
        <div className="firstLine-logos-slide">
          {insurancePartnersData?.map((data, index) => {
            return (
              <div key={index} className="my-2 me-6">
                {/* card body */}
                <div className="bg-white flex justify-center flex-col items-center h-[90px] w-[300px] py-[5px] me-3 shadow-md border rounded-md">
                  {/* image part */}
                  <img src={data.logo} alt="" className="h-[50px] w-[250px]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;
