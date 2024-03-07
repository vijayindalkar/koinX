const Navbar = () => {
  return (
    <header className="self-stretch bg-gray-white shadow-[0px_0px_12px_rgba(16,_38,_73,_0.06)] box-border flex flex-row items-center justify-between py-5 pr-14 pl-[60px] top-[0] z-[99] sticky max-w-full gap-[20px] text-left text-base text-gray-1 font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 border-b-[1px] border-solid border-gainsboro-200 mq800:pl-[30px] mq800:pr-7 mq800:box-border">
      <img
        className="h-6 w-24 relative overflow-hidden shrink-0 object-contain"
        loading="lazy"
        alt=""
        src="/1-koinx-logo@2x.png"
      />
      <div className="w-[554px] flex flex-row items-center justify-start gap-[0px_32px] max-w-full mq800:hidden mq800:gap-[0px_16px]">
        <div className="relative tracking-[-0.01em] font-semibold whitespace-nowrap">
          Crypto Taxes
        </div>
        <div className="relative tracking-[-0.01em] font-semibold whitespace-nowrap">
          Free Tools
        </div>
        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[13px] pl-0">
          <div className="relative tracking-[-0.01em] font-semibold whitespace-nowrap">
            Resource Center
          </div>
        </div>
        <button className="cursor-pointer [border:none] pt-[11px] pb-2.5 pr-[18px] pl-[23px] bg-[transparent] flex-[0.7724] rounded-lg [background:linear-gradient(81.62deg,_#2870ea_8.72%,_#1b4aef_85.01%)] flex flex-row items-center justify-center whitespace-nowrap">
          <div className="relative text-base tracking-[-0.01em] font-semibold font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 text-gray-white text-left">
            Get Started
          </div>
        </button>
      </div>
      <div className="h-[70px] hidden flex-row items-center justify-center text-gray-2">
        <div className="h-[19px] flex-1 relative tracking-[-0.01em] font-medium inline-block">
          Feedback
        </div>
      </div>
    </header>
  );
};

export default Navbar;
