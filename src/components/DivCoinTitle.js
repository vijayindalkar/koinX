import { useMemo } from "react";

const DivCoinTitle = ({ sandeep, johnSmith, propPadding }) => {
  const divIncreaseStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[9px] pl-0 box-border max-w-full shrink-0 text-center text-mini text-gray-1 font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12">
      <div className="flex-1 rounded-[7.46px] bg-www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-solitude flex flex-row items-center justify-start py-[11.194828987121582px] pr-[19px] pl-[11.194828987121582px] box-border gap-[0px_16px] max-w-full mq1125:flex-wrap">
        <div className="h-[155px] flex flex-col items-center justify-start gap-[13.19px_0px]">
          <img
            className="w-[96.4px] flex-1 relative rounded-[6.68px] max-h-full overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src={sandeep}
          />
          <div
            className="flex flex-col items-center justify-start py-0 px-[15px] gap-[4.12px_0px]"
            style={divIncreaseStyle}
          >
            <div className="relative font-semibold">{johnSmith}</div>
            <div className="relative text-xs font-medium text-day-gray-06">
              Designation here
            </div>
          </div>
        </div>
        <div className="w-[646px] relative text-sm leading-[160%] text-left inline-block shrink-0 max-w-full">
          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
          fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
          nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
          neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
          quis consectetur. Tellus gravida ultricies feugiat sed eu egestas
          dolor est ipsum. Malesuada etiam mi gravida praesent interdu
        </div>
      </div>
    </div>
  );
};

export default DivCoinTitle;
