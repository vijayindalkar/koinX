import { useMemo } from "react";

const GroupComponent = ({
  divincrease,
  calculateYourProfits,
  propBackground,
  propBackground1,
  propPadding,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const rectangleDivStyle = useMemo(() => {
    return {
      background: propBackground1,
    };
  }, [propBackground1]);

  const divitemwrapperStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="flex-1 rounded-[6.65px] [background:linear-gradient(135deg,_#79f1a4,_#0e5cad)] flex flex-row items-start justify-start pt-3 pb-[11px] pr-[25px] pl-3 box-border gap-[28px] min-w-[252px] max-w-full text-left text-xl text-gray-white font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 mq450:flex-wrap"
      style={groupDivStyle}
    >
      <div
        className="h-[151px] w-[388px] relative rounded-[6.65px] [background:linear-gradient(135deg,_#79f1a4,_#0e5cad)] hidden max-w-full"
        style={rectangleDivStyle}
      />
      <img
        className="h-32 w-32 relative rounded-lg object-cover z-[1] mq450:flex-1"
        loading="lazy"
        alt=""
        src={divincrease}
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[127px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px]">
          <b className="w-[195px] relative leading-[140%] inline-block z-[1] mq450:text-base mq450:leading-[22px]">
            {calculateYourProfits}
          </b>
          <button
            className="cursor-pointer [border:none] py-0.5 px-3.5 bg-gray-white rounded-lg flex flex-row items-center justify-start gap-[0px_3px] whitespace-nowrap z-[1] hover:bg-gainsboro-100"
            style={divitemwrapperStyle}
          >
            <div className="relative text-sm leading-[28px] font-semibold font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 text-gray-1 text-left">
              Check Now
            </div>
            <img
              className="h-5 w-5 relative"
              alt=""
              src="/iconlylightarrow--right.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
