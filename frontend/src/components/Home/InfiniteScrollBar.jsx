const InfiniteScrollBar = () => {
  const noticeText =
    "Welcome to MNA Diagnostics Center - Your trusted partner for healthcare services. Book your appointments easily and get the best diagnostic solutions!";

  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-blue-100 py-1">
      <div
        className="inline-block text-black text-[25px] font-serif leading-10"
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          animation: "scroll 120s linear infinite",
        }}
      >
        {Array(5).fill(`${noticeText} \u00A0\u00A0`)}
      </div>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default InfiniteScrollBar;
