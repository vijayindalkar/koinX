import { useMemo } from "react";

const DivcoinMayLikeContainer = ({
  youMayAlsoLike,
  bnbpng,
  bNB,
  topMarginDiv,
  imgMargin,
  svg,
  solanaSOLjpeg,
  sOL,
  chartItemWrapper,
  divCointopmargin,
  svg1,
  xRPXRPpng,
  xRP,
  sVGFill,
  divContainerMargin,
  svg2,
  cardanoADAjpeg,
  aDA,
  aVAX,
  coinItemPrice,
  svg3,
  avalancheAVAXpng,
  aVAX1,
  prop,
  buttonNextSlide,
  svg4,
  propPadding,
  propPadding1,
  propPadding2,
  propWidth,
  propPadding3,
  propBackgroundColor,
  propPadding4,
  propColor,
  propPadding5,
  propWidth1,
  propTop,
  propBottom,
  propTop1,
  propBottom1,
}) => {
  const divcoinTopStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const divcoinTop1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const divincreaseStyle = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const divcoinTop2Style = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding3,
    };
  }, [propWidth, propPadding3]);

  const divincrease1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding4,
    };
  }, [propBackgroundColor, propPadding4]);

  const sVGStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const divincrease2Style = useMemo(() => {
    return {
      padding: propPadding5,
    };
  }, [propPadding5]);

  const divcoinTop3Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const buttonNextSlideStyle = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const buttonNextSlide1Style = useMemo(() => {
    return {
      top: propTop1,
      bottom: propBottom1,
    };
  }, [propTop1, propBottom1]);

  return (
    <div className="w-[1300px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border gap-[20px_0px] text-left text-5xl text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mine-shaft font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12">
      <div className="self-stretch flex flex-col items-start justify-start">
        <h3 className="m-0 relative text-inherit leading-[36px] font-semibold font-inherit inline-block max-w-[1300px] mq450:text-lgi mq450:leading-[29px] mq1300:max-w-full">
          {youMayAlsoLike}
        </h3>
      </div>
      <div className="flex-1 flex flex-row flex-wrap items-center justify-center relative max-w-full text-base">
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start max-w-full">
          <div className="w-[1300px] flex-1 overflow-x-auto flex flex-row items-start justify-start max-w-full">
            <div className="self-stretch w-[262px] shrink-0 flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
              <div className="self-stretch flex-1 rounded-3xs flex flex-col items-start justify-start py-[17px] pr-[18px] pl-4 border-[1px] border-solid border-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mercury">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-1">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3">
                        <div
                          className="w-[116px] flex flex-row items-center justify-between py-0 pr-[0.000003814697265625px] pl-0 box-border gap-[0px] [row-gap:20px]"
                          style={divcoinTopStyle}
                        >
                          <div className="flex flex-row items-center justify-start">
                            <div className="flex flex-col items-start justify-start py-0 pr-[7px] pl-0">
                              <img
                                className="w-[26px] h-[26px] relative rounded-smi overflow-hidden shrink-0 object-cover"
                                alt=""
                                src={bnbpng}
                              />
                            </div>
                            <div className="flex flex-row items-center justify-start pt-px px-0 pb-0">
                              <div className="relative">{bNB}</div>
                            </div>
                          </div>
                          <div className="rounded-sm bg-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-niagara-6 flex flex-row items-center justify-center pt-[2.75px] pb-[2.25px] pr-[3px] pl-1 text-xs text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-shamrock">
                            <div className="flex flex-col items-start justify-start">
                              <div className="relative">{topMarginDiv}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start text-xl text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-cod-gray">
                        <div className="relative leading-[24px] font-medium whitespace-nowrap mq450:text-base mq450:leading-[19px]">
                          {imgMargin}
                        </div>
                      </div>
                    </div>
                    <div className="w-[200px] flex-1 overflow-hidden flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-center py-0 px-[30px]">
                        <img
                          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                          loading="lazy"
                          alt=""
                          src={svg}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-[262px] shrink-0 flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
              <div className="self-stretch flex-1 rounded-3xs flex flex-col items-start justify-start py-[17px] pr-[18px] pl-4 border-[1px] border-solid border-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mercury">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-1">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3">
                        <div
                          className="w-[113px] flex flex-row items-center justify-between py-0 pr-[0.000003814697265625px] pl-0 box-border gap-[0px] [row-gap:20px]"
                          style={divcoinTop1Style}
                        >
                          <div className="flex flex-row items-center justify-start">
                            <div className="flex flex-col items-start justify-start py-0 pr-[7px] pl-0">
                              <img
                                className="w-[26px] h-[26px] relative rounded-smi overflow-hidden shrink-0 object-cover"
                                alt=""
                                src={solanaSOLjpeg}
                              />
                            </div>
                            <div className="flex flex-row items-center justify-start pt-px px-0 pb-0">
                              <div className="relative">{sOL}</div>
                            </div>
                          </div>
                          <div
                            className="rounded-sm bg-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-burnt-sienna-10 flex flex-row items-center justify-center pt-[2.75px] pb-[2.25px] pr-[3px] pl-1 text-xs text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-sunglo"
                            style={divincreaseStyle}
                          >
                            <div className="flex flex-col items-start justify-start">
                              <div className="relative">{chartItemWrapper}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start text-xl text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-cod-gray">
                        <div className="relative leading-[24px] font-medium whitespace-nowrap mq450:text-base mq450:leading-[19px]">
                          {divCointopmargin}
                        </div>
                      </div>
                    </div>
                    <div className="w-[200px] flex-1 overflow-hidden flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-center py-0 px-[30px]">
                        <img
                          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                          loading="lazy"
                          alt=""
                          src={svg1}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-[262px] shrink-0 flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
              <div className="self-stretch flex-1 rounded-3xs flex flex-col items-start justify-start py-[17px] pr-[18px] pl-4 border-[1px] border-solid border-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mercury">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-1">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3">
                        <div
                          className="w-[114px] flex flex-row items-center justify-between py-0 pr-[0.00000762939453125px] pl-0 box-border gap-[0px] [row-gap:20px]"
                          style={divcoinTop2Style}
                        >
                          <div className="flex flex-row items-center justify-start">
                            <div className="flex flex-col items-start justify-start py-0 pr-[7px] pl-0">
                              <img
                                className="w-[26px] h-[26px] relative rounded-smi overflow-hidden shrink-0 object-cover"
                                alt=""
                                src={xRPXRPpng}
                              />
                            </div>
                            <div className="flex flex-row items-center justify-start pt-px px-0 pb-0">
                              <div className="relative">{xRP}</div>
                            </div>
                          </div>
                          <div
                            className="rounded-sm bg-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-niagara-6 flex flex-row items-center justify-center pt-[2.75px] pb-[2.25px] pr-[3px] pl-1 text-xs text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-shamrock"
                            style={divincrease1Style}
                          >
                            <div className="flex flex-col items-start justify-start">
                              <div className="relative" style={sVGStyle}>
                                {sVGFill}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start text-xl text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-cod-gray">
                        <div className="relative leading-[24px] font-medium whitespace-nowrap mq450:text-base mq450:leading-[19px]">
                          {divContainerMargin}
                        </div>
                      </div>
                    </div>
                    <div className="w-[200px] flex-1 overflow-hidden flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-center py-0 px-[30px]">
                        <img
                          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                          loading="lazy"
                          alt=""
                          src={svg2}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-[262px] shrink-0 flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
              <div className="self-stretch flex-1 rounded-3xs flex flex-col items-start justify-start py-[17px] pr-[18px] pl-4 border-[1px] border-solid border-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mercury">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-1">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3">
                        <div className="w-28 flex flex-row items-center justify-between gap-[0px] [row-gap:20px]">
                          <div className="flex flex-row items-center justify-start">
                            <div className="flex flex-col items-start justify-start py-0 pr-[7px] pl-0">
                              <img
                                className="w-[26px] h-[26px] relative rounded-smi overflow-hidden shrink-0 object-cover"
                                alt=""
                                src={cardanoADAjpeg}
                              />
                            </div>
                            <div className="flex flex-row items-center justify-start pt-px px-0 pb-0">
                              <div className="relative">{aDA}</div>
                            </div>
                          </div>
                          <div
                            className="rounded-sm bg-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-burnt-sienna-10 flex flex-row items-center justify-center pt-[2.75px] px-1 pb-[2.25px] text-xs text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-sunglo"
                            style={divincrease2Style}
                          >
                            <div className="flex flex-col items-start justify-start">
                              <div className="relative">{aVAX}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start text-xl text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-cod-gray">
                        <div className="relative leading-[24px] font-medium whitespace-nowrap mq450:text-base mq450:leading-[19px]">
                          {coinItemPrice}
                        </div>
                      </div>
                    </div>
                    <div className="w-[200px] flex-1 overflow-hidden flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-center py-0 px-[30px]">
                        <img
                          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                          alt=""
                          src={svg3}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-[262px] shrink-0 flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
              <div className="self-stretch flex-1 rounded-3xs flex flex-col items-start justify-start py-[17px] pr-[18px] pl-4 border-[1px] border-solid border-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mercury">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-1">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3">
                        <div
                          className="w-[122px] flex flex-row items-center justify-between gap-[0px] [row-gap:20px]"
                          style={divcoinTop3Style}
                        >
                          <div className="flex flex-row items-center justify-start">
                            <div className="flex flex-col items-start justify-start py-0 pr-[7px] pl-0">
                              <img
                                className="w-[26px] h-[26px] relative rounded-smi overflow-hidden shrink-0 object-cover"
                                alt=""
                                src={avalancheAVAXpng}
                              />
                            </div>
                            <div className="flex flex-row items-center justify-start pt-px px-0 pb-0">
                              <div className="relative">{aVAX1}</div>
                            </div>
                          </div>
                          <div className="rounded-sm bg-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-burnt-sienna-10 flex flex-row items-center justify-center pt-[2.75px] px-1 pb-[2.25px] text-xs text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-sunglo">
                            <div className="flex flex-col items-start justify-start">
                              <div className="relative">{prop}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start text-xl text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-cod-gray">
                        <div className="relative leading-[24px] font-medium whitespace-nowrap mq450:text-base mq450:leading-[19px]">
                          {buttonNextSlide}
                        </div>
                      </div>
                    </div>
                    <div className="w-[200px] flex-1 overflow-hidden flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-center py-0 px-[30px]">
                        <img
                          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                          alt=""
                          src={svg4}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="!m-[0] absolute h-[27.5%] top-[36.25%] right-[-11.5px] bottom-[36.25%] flex flex-row items-center justify-center py-[5px] px-0 box-border z-[1]"
          style={buttonNextSlideStyle}
        >
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <div className="overflow-hidden flex flex-col items-center justify-center">
              <img
                className="w-[34px] h-[34px] relative overflow-hidden shrink-0"
                alt=""
                src="/e0d847asvg.svg"
              />
            </div>
          </div>
        </div>
        <div
          className="!m-[0] absolute h-[27.5%] top-[63.75%] right-[1264.5px] bottom-[8.75%] flex flex-row items-center justify-center py-[5px] px-0 box-border [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]"
          style={buttonNextSlide1Style}
        >
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <div className="overflow-hidden flex flex-col items-center justify-center">
              <img
                className="w-[34px] h-[34px] relative overflow-hidden shrink-0 [transform:_rotate(-180deg)]"
                alt=""
                src="/e0d847asvg.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivcoinMayLikeContainer;
