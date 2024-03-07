import Navbar from "../components/Navbar";
import Divchartitemmargin from "../components/Divchartitemmargin";
import FrameComponent from "../components/FrameComponent";

const Bitcoin = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start gap-[78px_0px] tracking-[normal] mq450:gap-[19px_0px] mq800:gap-[39px_0px]">
      <main className="self-stretch flex flex-col items-center justify-start gap-[18px_0px] max-w-full shrink-0">
        <Navbar />
        <section className="w-[1368px] flex flex-row items-start justify-start py-0 px-5 box-border gap-[0px_20px] max-w-full text-center text-5xl text-gray-white font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 mq1125:flex-wrap">
          <Divchartitemmargin />
          <div className="w-[427px] flex flex-col items-start justify-start pt-[34px] px-0 pb-0 box-border min-w-[427px] max-w-full mq800:min-w-full mq1125:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px_0px] max-w-full">
              <div className="self-stretch rounded-2xl overflow-hidden flex flex-row items-center justify-center max-w-full">
                <div className="flex-1 rounded-lg bg-primary-blue flex flex-col items-center justify-start pt-[31px] pb-[49px] pr-[50px] pl-[49px] box-border gap-[20px_0px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pt-5 mq800:pb-8 mq800:box-border">
                  <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[19px] gap-[14px_0px] shrink-0">
                    <h3 className="m-0 w-[268px] relative text-inherit leading-[40px] font-bold font-inherit inline-block mq450:text-lgi mq450:leading-[32px]">
                      Get Started with KoinX for FREE
                    </h3>
                    <div className="w-[327px] h-[68px] relative text-sm leading-[24px] font-medium text-whitesmoke-100 inline-block shrink-0">
                      With our range of features that you can equip for free,
                      KoinX allows you to be more educated and aware of your tax
                      reports.
                    </div>
                  </div>
                  <img
                    className="w-[178.7px] h-[166.2px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-3.svg"
                  />
                  <button className="cursor-pointer [border:none] py-2.5 pr-[25px] pl-6 bg-gray-white rounded-lg flex flex-row items-center justify-start gap-[0px_5px] whitespace-nowrap hover:bg-gainsboro-100">
                    <div className="relative text-base leading-[28px] font-semibold font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 text-gray-1 text-left">
                      Get Started for FREE
                    </div>
                    <img
                      className="h-5 w-5 relative"
                      alt=""
                      src="/iconlylightarrow--right.svg"
                    />
                  </button>
                </div>
              </div>
              <div className="self-stretch rounded-lg bg-gray-white flex flex-col items-center justify-start p-6 gap-[24px_0px] text-left text-gray-1">
                <div className="self-stretch flex flex-row items-center justify-start gap-[0px_57px]">
                  <h3 className="m-0 relative text-inherit leading-[28.8px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px]">
                    Trending Coins (24h)
                  </h3>
                  <div className="h-[19px] w-[76px] relative hidden text-right text-base text-primary-blue">
                    <div className="absolute top-[0px] left-[0px] tracking-[-0.04em] font-medium hidden w-full h-full">
                      View more
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px_0px] text-base">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                    <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                      <img
                        className="h-6 w-6 relative min-h-[24px]"
                        loading="lazy"
                        alt=""
                        src="/component-50.svg"
                      />
                      <div className="relative leading-[24px] font-medium">
                        Ethereum(ETH)
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] p-2 bg-mintcream h-7 w-[84px] rounded flex flex-row items-center justify-center box-border gap-[0px_8px] hover:bg-gainsboro-300">
                      <img
                        className="h-2 w-[11px] relative"
                        alt=""
                        src="/polygon-2.svg"
                      />
                      <div className="relative text-base font-medium font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 text-mediumseagreen text-center">
                        8.21%
                      </div>
                    </button>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                    <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                      <img
                        className="h-6 w-6 relative object-cover min-h-[24px]"
                        alt=""
                        src="/component-50-1@2x.png"
                      />
                      <div className="relative leading-[24px] font-medium">
                        Bitcoin (BTC)
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] p-2 bg-mintcream h-7 rounded flex flex-row items-center justify-center box-border gap-[0px_8px] hover:bg-gainsboro-300">
                      <img
                        className="h-2 w-[11px] relative"
                        alt=""
                        src="/polygon-2-2.svg"
                      />
                      <div className="relative text-base font-medium font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 text-mediumseagreen text-center">
                        5.26%
                      </div>
                    </button>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                    <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                      <img
                        className="h-6 w-6 relative object-cover min-h-[24px]"
                        alt=""
                        src="/component-50-2@2x.png"
                      />
                      <div className="relative leading-[24px] font-medium">
                        Polygon (MATIC)
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] p-2 bg-mintcream h-7 rounded flex flex-row items-center justify-center box-border gap-[0px_8px] hover:bg-gainsboro-300">
                      <img
                        className="h-2 w-[11px] relative"
                        alt=""
                        src="/polygon-2-2.svg"
                      />
                      <div className="relative text-base font-medium font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 text-mediumseagreen text-center">
                        4.32%
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FrameComponent />
    </div>
  );
};

export default Bitcoin;
