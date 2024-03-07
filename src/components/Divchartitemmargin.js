import Td from "./Td";
import GroupComponent from "./GroupComponent";
import DivCoinTitle from "./DivCoinTitle";

const Divchartitemmargin = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[19px_0px] max-w-full text-left text-5xl text-gray-1 font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 mq800:min-w-full">
      <div className="flex flex-row items-center justify-start gap-[0px_8px] text-sm text-day-gray-07">
        <div className="relative">Cryptocurrencies</div>
        <img
          className="h-[10.5px] w-2.5 relative overflow-hidden shrink-0"
          alt=""
          src="/icon.svg"
        />
        <div className="relative font-medium text-gray-1">Bitcoin</div>
      </div>
      <div className="self-stretch rounded-lg bg-gray-white overflow-hidden flex flex-col items-end justify-start pt-6 px-0 pb-[33px] box-border gap-[40px_0px] max-w-full text-gray-200 mq450:gap-[20px_0px] mq800:pt-5 mq800:pb-[21px] mq800:box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[23px]">
          <div className="flex flex-row items-end justify-start gap-[0px_37px] mq450:gap-[0px_18px]">
            <div className="flex flex-row items-center justify-start gap-[0px_8px]">
              <img
                className="h-9 w-9 relative object-cover"
                loading="lazy"
                alt=""
                src="/component-52@2x.png"
              />
              <div className="overflow-hidden flex flex-row items-end justify-end">
                <h3 className="mt-[-1px] m-0 relative text-inherit leading-[28.8px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px]">
                  Bitcoin
                </h3>
              </div>
              <div className="relative text-base leading-[19.2px] font-semibold text-slategray-300">
                BTC
              </div>
            </div>
            <button className="cursor-pointer py-2.5 pr-[7px] pl-2.5 bg-gray-3 rounded-lg flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-lightslategray hover:bg-slategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-slategray-100">
              <div className="h-10 w-20 relative rounded-lg bg-gray-3 box-border hidden border-[1px] border-solid border-lightslategray" />
              <div className="relative text-base leading-[126%] font-medium font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 text-gray-white text-left z-[1]">
                Rank #1
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[30px] pl-6 box-border max-w-full text-9xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px_0px] max-w-full">
            <div className="flex flex-col items-start justify-start max-w-full">
              <div className="flex flex-row items-start justify-start gap-[0px_32px] mq450:flex-wrap mq450:gap-[0px_16px]">
                <div className="relative leading-[38.4px] font-semibold whitespace-nowrap mq450:text-3xl mq450:leading-[31px]">
                  $46,953.04
                </div>
                <div className="h-8 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border text-sm text-gray-3">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[0px_13px]">
                    <button className="cursor-pointer [border:none] pt-[5px] px-2.5 pb-1 bg-mintcream rounded flex flex-row items-center justify-start gap-[0px_8px] hover:bg-gainsboro-300">
                      <img
                        className="h-2 w-[11px] relative"
                        alt=""
                        src="/polygon-2.svg"
                      />
                      <div className="relative text-base font-medium font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12 text-mediumseagreen text-center">
                        2.51%
                      </div>
                    </button>
                    <div className="relative leading-[27px] font-medium">
                      (24H)
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-base leading-[27px] font-medium whitespace-nowrap">
                ₹ 39,42,343
              </div>
            </div>
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-5" />
            <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[20px] text-base mq800:flex-wrap">
              <div className="relative leading-[19.5px] font-semibold">
                Bitcoin Price Chart (USD)
              </div>
              <div className="mt-[-1px] w-[291px] flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[0px_9px] text-smi text-slategray-300">
                <div className="flex flex-col items-start justify-start py-0 pr-3 pl-0">
                  <div className="relative leading-[19.5px] font-medium">
                    1H
                  </div>
                </div>
                <div className="relative leading-[19.5px] font-medium">24H</div>
                <div className="flex-1 rounded-13xl bg-lavender flex flex-row items-center justify-center text-primary-darkblue">
                  <div className="relative leading-[19.5px] font-medium">
                    7D
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0 text-xs">
                  <div className="relative leading-[19.5px] font-medium">
                    1M
                  </div>
                </div>
                <div className="flex-[0.6897] flex flex-col items-start justify-start py-0 pr-[9px] pl-0 text-xs">
                  <div className="relative leading-[19.5px] font-medium">
                    3M
                  </div>
                </div>
                <div className="flex-[0.6667] flex flex-col items-start justify-start py-0 pr-2.5 pl-0 text-xs">
                  <div className="relative leading-[19.5px] font-medium">
                    6M
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                  <div className="relative leading-[19.5px] font-medium">
                    1Y
                  </div>
                </div>
                <div className="relative leading-[19.5px] font-medium">ALL</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mr-[-59px] w-[916px] overflow-hidden flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border relative gap-[46px_0px] max-w-[104%] shrink-0 text-right text-2xs mq800:gap-[23px_0px]">
          <div className="w-[35px] relative hidden z-[0]">16 750</div>
          <div className="w-[829px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] text-center text-xs text-dimgray">
            <img
              className="absolute top-[0.1px] left-[0px] w-[829px] h-[400px]"
              alt=""
            />
            <div className="absolute top-[10px] left-[40px] w-[780px] h-[355px]">
              <img
                className="absolute top-[0.1px] left-[-0.2px] w-[780.1px] h-[355px] z-[1]"
                alt=""
              />
              <div className="absolute top-[0px] left-[0px] w-full h-full">
                <img
                  className="absolute top-[0.1px] left-[-0.2px] w-[780.1px] h-[355px] z-[2]"
                  alt=""
                />
                <div className="absolute top-[0px] left-[0px] w-full h-full">
                  <img
                    className="absolute h-[calc(100%_-_1px)] top-[0.1px] bottom-[0.9px] left-[10.2px] max-h-full w-[685.1px] z-[3]"
                    loading="lazy"
                    alt=""
                  />
                  <img
                    className="absolute top-[-0.4px] left-[-0.2px] w-[780.1px] h-[356px]"
                    alt=""
                    src="/group-1.svg"
                  />
                  <img
                    className="absolute top-[36.2px] left-[-0.2px] w-[780.1px] h-[318.9px] z-[5]"
                    alt=""
                    src="/group-2.svg"
                  />
                  <div className="absolute top-[2.1px] left-[374.5px] z-[5]" />
                  <img
                    className="absolute top-[0.1px] left-[-0.2px] w-0 h-[355px] z-[6]"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <img
              className="absolute top-[365.1px] left-[39.8px] w-[780.1px] h-2.5 z-[1]"
              alt=""
              src="/group-4.svg"
            />
          </div>
          <div className="w-[416px] flex flex-row items-start justify-between gap-[20px] max-w-full">
            <div className="flex flex-col items-end justify-start gap-[46px_0px]">
              <div className="relative z-[1]">47,000</div>
              <div className="relative z-[1]">46,000</div>
            </div>
            <div className="w-0 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border text-center text-base text-darkslategray">
              <div className="w-0 h-[19px] relative inline-block z-[5]" />
            </div>
          </div>
          <div className="h-[214px] flex flex-row items-end justify-start pt-0 px-0 pb-[23px] box-border">
            <div className="relative whitespace-nowrap z-[1]">42,000</div>
            <div className="h-[72px] flex flex-col items-start justify-start ml-[-36px]">
              <div className="relative whitespace-nowrap z-[1]">42,000</div>
            </div>
            <div className="h-[131px] flex flex-col items-start justify-start ml-[-36px]">
              <div className="relative whitespace-nowrap z-[1]">44,000</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start ml-[-36px]">
              <div className="relative z-[1]">45,000</div>
            </div>
          </div>
          <div className="mb-[-1px] w-[747px] flex flex-row items-start justify-between gap-[20px] max-w-full text-center mq450:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-[0px_25px] text-left text-xs text-dimgray">
              <div className="w-0 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                <div className="w-0 h-[15px] relative inline-block z-[1]" />
              </div>
              <div className="relative text-2xs text-gray-200 text-center z-[1]">
                16 Dec
              </div>
            </div>
            <div className="relative z-[1]">17 Dec</div>
            <div className="relative z-[1]">18 Dec</div>
            <div className="relative z-[1]">19 Dec</div>
            <div className="relative z-[1]">20 Dec</div>
            <div className="relative z-[1]">21 Dec</div>
            <div className="relative z-[1]">22 Dec</div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-12 box-border overflow-x-auto shrink-0 flex flex-row items-start justify-start py-0 px-0 gap-[0px_32px] text-base text-gray-2 border-b-[1px] border-solid border-day-gray-04 mq450:gap-[0px_16px]">
        <div className="flex flex-row items-center justify-center pt-[15px] px-0 pb-3.5 text-primary-darkblue border-b-[3px] border-solid border-primary-blue">
          <div className="relative tracking-[-0.01em] font-semibold">
            Overview
          </div>
        </div>
        <div className="mt-[-11px] mb-[-11px] flex flex-row items-center justify-center pt-[26px] px-0 pb-[25px]">
          <div className="relative tracking-[-0.01em] font-medium">
            Fundamentals
          </div>
        </div>
        <div className="mt-[-11px] mb-[-11px] flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[0px_28px]">
          <div className="flex flex-row items-center justify-center pt-[26px] px-0 pb-[25px]">
            <div className="relative tracking-[-0.01em] font-medium">
              News Insights
            </div>
          </div>
          <div className="flex flex-row items-center justify-center pt-[26px] px-0 pb-[25px]">
            <div className="relative tracking-[-0.01em] font-medium">
              Sentiments
            </div>
          </div>
        </div>
        <div className="mt-[-11px] mb-[-11px] flex flex-row items-center justify-center pt-[26px] px-0 pb-[25px]">
          <div className="relative tracking-[-0.01em] font-medium">Team</div>
        </div>
        <div className="mt-[-11px] mb-[-11px] flex flex-row items-center justify-center pt-[26px] px-0 pb-[25px]">
          <div className="relative tracking-[-0.01em] font-medium">
            Technicals
          </div>
        </div>
        <div className="mt-[-11px] mb-[-11px] flex flex-row items-center justify-center pt-[26px] px-0 pb-[25px]">
          <div className="relative tracking-[-0.01em] font-medium">
            Tokenomics
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-gray-white flex flex-col items-center justify-start pt-[23px] pb-[53px] pr-[27px] pl-6 box-border gap-[24px_0px] max-w-full text-groww-in-stocks-zomato-ltd-1440x810-default-gun-powder mq800:pt-5 mq800:pb-[34px] mq800:box-border">
        <div className="self-stretch flex flex-row items-start justify-start text-gray-1">
          <h3 className="m-0 relative text-inherit leading-[28.8px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px]">
            Performance
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border gap-[13px_0px] min-h-[1px] max-w-full text-sm-8">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[0px_7px] max-w-full mq800:flex-wrap">
            <div className="w-[116px] flex flex-col items-start justify-start pt-1.5 px-0 pb-[13px] box-border gap-[10px_0px] min-w-[85px]">
              <div className="relative leading-[20px]">Today’s Low</div>
              <div className="relative text-base-6 leading-[22px] font-medium">
                46,930.22
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[33px] pb-0 pr-px pl-0 box-border min-w-[379px] max-w-full text-sm font-www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-sf-pro-text-regular-14 mq800:min-w-full">
              <div className="self-stretch flex flex-col items-end justify-start gap-[7px_0px]">
                <div className="self-stretch h-3.5 flex flex-col items-end justify-start gap-[1px_0px]">
                  <div className="self-stretch h-[4.6px] rounded-3xs [background:linear-gradient(90deg,_#ff4949,_#ff4e11_15.33%,_#fc870a_30.44%,_#feae11_48.67%,_#c2cb21_62.73%,_#11eb68)] flex flex-col items-start justify-start">
                    <div className="self-stretch h-[5px] relative rounded-3xs [background:linear-gradient(90deg,_#ff4949,_#ff4e11_15.33%,_#fc870a_30.44%,_#feae11_48.67%,_#c2cb21_62.73%,_#11eb68)] hidden" />
                  </div>
                  <div className="w-[266px] flex flex-row items-start justify-center py-0 px-5 box-border">
                    <div className="h-2 w-3 relative overflow-hidden shrink-0">
                      <div className="absolute bottom-[-2.11px] left-[5.65px] bg-absolute-black w-2 h-2 [transform:_rotate(45deg)] [transform-origin:0_0]" />
                    </div>
                  </div>
                </div>
                <div className="w-[266px] flex flex-row items-start justify-center py-0 px-5 box-border">
                  <div className="relative leading-[20px] whitespace-nowrap">
                    $48,637.83
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[115px] flex flex-col items-end justify-start pt-1.5 px-0 pb-[13px] box-border gap-[10px_0px] min-w-[85px] text-right text-sm-6">
              <div className="relative leading-[20px]">Today’s High</div>
              <div className="relative text-base-6 leading-[22px] font-medium">
                49,343.83
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[3px] pl-0 box-border gap-[0px_7px] max-w-full text-sm mq800:flex-wrap">
            <div className="w-[121px] flex flex-col items-start justify-start pt-1.5 px-0 pb-[13px] box-border gap-[10px_0px] min-w-[85px]">
              <div className="relative leading-[20px]">52W Low</div>
              <div className="relative text-base-6 leading-[22px] font-medium">
                16,930.22
              </div>
            </div>
            <div className="h-[4.6px] flex-1 rounded-3xs [background:linear-gradient(90deg,_#ff4949,_#ff4e11_15.33%,_#fc870a_30.44%,_#feae11_48.67%,_#c2cb21_62.73%,_#11eb68)] flex flex-col items-start justify-start min-w-[376px] max-w-full mq800:min-w-full">
              <div className="self-stretch h-[5px] relative rounded-3xs [background:linear-gradient(90deg,_#ff4949,_#ff4e11_15.33%,_#fc870a_30.44%,_#feae11_48.67%,_#c2cb21_62.73%,_#11eb68)] hidden" />
            </div>
            <div className="w-[114px] flex flex-col items-end justify-start pt-1.5 px-0 pb-[13px] box-border gap-[10px_0px] min-w-[85px] text-right text-sm-8">
              <div className="relative leading-[20px]">52W High</div>
              <div className="relative text-base-6 leading-[22px] font-medium">
                49,743.83
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-0 box-border max-w-full text-lg-9">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] max-w-full">
            <div className="flex flex-row items-center justify-start py-0 pr-[367px] pl-0 box-border gap-[0px_0.04px] max-w-full mq450:pr-5 mq450:box-border mq800:pr-[183px] mq800:box-border">
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[20px] font-semibold">
                  Fundamentals
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-0 pl-1.5">
                <div className="overflow-hidden flex flex-row items-center justify-center">
                  <img
                    className="h-5 w-5 relative"
                    loading="lazy"
                    alt=""
                    src="/frame.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_48px] max-w-full text-sm text-gray-3 mq450:gap-[0px_24px] mq800:flex-wrap">
              <div className="flex-[0.8982] flex flex-col items-start justify-start py-0 pr-[39px] pl-0 box-border min-w-[249px] max-w-full mq450:flex-1">
                <div className="self-stretch box-border flex flex-row items-center justify-between pt-3 pb-[12.5px] pr-[12.078125px] pl-0 min-h-[54px] gap-[20px] border-b-[1px] border-solid border-day-gray-04 mq450:flex-wrap mq450:pl-3 mq450:box-border">
                  <div className="relative leading-[20px] font-medium">
                    Bitcoin Price
                  </div>
                  <div className="relative text-smi leading-[20px] font-medium text-gray-100 text-right whitespace-nowrap">
                    $16,815.46
                  </div>
                </div>
                <div className="self-stretch h-[54px] box-border flex flex-row items-center justify-between gap-[-53.47px] border-b-[1px] border-solid border-day-gray-04">
                  <div className="flex flex-row items-start justify-start pt-[12.5px] pb-[13.015625px] pr-[54px] pl-0">
                    <div className="relative leading-[20px] font-medium">
                      24h Low / 24h High
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-end pt-[12.5px] pb-[13.015625px] pr-[11.828125px] pl-[50px] z-[1] text-right text-smi text-gray-100">
                    <div className="relative leading-[20px] font-medium">
                      $16,382.07 / $16,874.12
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[54px] box-border flex flex-row items-center justify-between gap-[-53.47px] border-b-[1px] border-solid border-day-gray-04">
                  <div className="flex flex-row items-start justify-start pt-[12.5px] pb-[13.015625px] pr-[74px] pl-0">
                    <div className="relative leading-[20px] font-medium">
                      7d Low / 7d High
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-end pt-[12.5px] pb-[13.015625px] pr-[11.828125px] pl-[50px] z-[1] text-right text-smi text-gray-100">
                    <div className="relative leading-[20px] font-medium">
                      $16,382.07 / $16,874.12
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[54px] box-border flex flex-row items-center justify-between gap-[-60.47px] border-b-[1px] border-solid border-day-gray-04">
                  <div className="w-[188px] flex flex-row items-start justify-start pt-[12.5px] px-0 pb-[13.015625px] box-border">
                    <div className="relative leading-[20px] font-medium">
                      Trading Volume
                    </div>
                  </div>
                  <div className="w-[216px] flex flex-row items-start justify-end pt-[12.5px] pb-[13.015625px] pr-[12.109375px] pl-3 box-border z-[1] text-right text-gray-100">
                    <div className="relative leading-[20px] font-medium whitespace-nowrap">
                      $23,249,202,782
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[54px] box-border flex flex-row items-center justify-between gap-[-48.47px] border-b-[1px] border-solid border-day-gray-04">
                  <div className="flex flex-row items-start justify-start pt-[12.5px] pb-[13.015625px] pr-[70px] pl-0">
                    <div className="relative leading-[20px] font-medium">
                      Market Cap Rank
                    </div>
                  </div>
                  <div className="w-[204px] flex flex-row items-start justify-end pt-[12.5px] pb-[13.015625px] pr-[12.578125px] pl-[13px] box-border z-[1] text-right text-smi text-gray-100">
                    <div className="relative leading-[20px] font-medium">
                      #1
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start min-w-[253px] max-w-full">
                <div className="self-stretch box-border flex flex-row items-center justify-between min-h-[54px] gap-[-15.47px] [row-gap:20px] border-b-[1px] border-solid border-day-gray-04 mq800:flex-wrap">
                  <div className="w-[188px] flex flex-row items-start justify-start py-[12.5px] px-0 box-border">
                    <div className="relative leading-[20px] font-medium">
                      Market Cap
                    </div>
                  </div>
                  <div className="w-[216px] flex flex-row items-start justify-end py-[12.5px] pr-[11.890625px] pl-3 box-border z-[1] text-right text-gray-100 mq450:ml-0">
                    <div className="relative leading-[20px] font-medium whitespace-nowrap">
                      $323,507,290,047
                    </div>
                  </div>
                </div>
                <div className="self-stretch box-border flex flex-row items-center justify-between min-h-[54px] gap-[-10.47px] [row-gap:20px] border-b-[1px] border-solid border-day-gray-04 mq800:flex-wrap">
                  <div className="flex flex-row items-start justify-start pt-[12.5px] pb-[13.015625px] pr-7 pl-0">
                    <div className="relative leading-[20px] font-medium">
                      Market Cap Dominance
                    </div>
                  </div>
                  <div className="w-[211px] flex flex-row items-start justify-end pt-[12.5px] pb-[13.015625px] pr-[12.28125px] pl-3 box-border z-[1] text-right text-gray-100 mq450:ml-0">
                    <div className="relative leading-[20px] font-medium">
                      38.343%
                    </div>
                  </div>
                </div>
                <div className="self-stretch box-border flex flex-row items-center justify-between min-h-[54px] gap-[-5.47px] [row-gap:20px] border-b-[1px] border-solid border-day-gray-04 mq800:flex-wrap">
                  <div className="flex flex-row items-start justify-start pt-[12.5px] pb-[13.015625px] pr-[45px] pl-0">
                    <div className="relative leading-[20px] font-medium">
                      Volume / Market Cap
                    </div>
                  </div>
                  <div className="w-[206px] flex flex-row items-start justify-end pt-[12.5px] pb-[13.015625px] pr-[11.828125px] pl-3 box-border z-[1] text-right text-smi text-gray-100 mq450:ml-0">
                    <div className="relative leading-[20px] font-medium">
                      0.0718
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[54px] box-border flex flex-row items-center justify-between gap-[-10.16px] border-b-[1px] border-solid border-day-gray-04">
                  <div className="h-[61px] flex flex-row items-center justify-start py-[12.5px] pr-[94px] pl-0 box-border">
                    <div className="relative leading-[20px] font-medium">
                      All-Time High
                    </div>
                  </div>
                  <Td
                    prop="$69,044.77 "
                    prop1="-75.6%"
                    nov102021About1Year="Nov 10, 2021 (about 1 year)"
                  />
                </div>
                <div className="self-stretch h-[54px] box-border flex flex-row items-center justify-between gap-[-6.16px] border-b-[1px] border-solid border-day-gray-04">
                  <div className="h-[61px] flex flex-row items-center justify-start py-[12.5px] pr-[98px] pl-0 box-border">
                    <div className="relative leading-[20px] font-medium">
                      All-Time Low
                    </div>
                  </div>
                  <Td
                    prop="$67.81 "
                    prop1="24729.1%"
                    nov102021About1Year="Jul 06, 2013 (over 9 years)"
                    propWidth="121px"
                    propHeight="16px"
                    propColor="#0fba83"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-gray-white flex flex-row items-end justify-center pt-6 pb-0 pr-[26px] pl-6 box-border max-w-full">
        <div className="h-[532px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full mq1125:h-auto">
          <div className="mb-[-773px] self-stretch overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[821px] box-border gap-[18px_0px] max-w-full shrink-0 mq800:pb-[347px] mq800:box-border mq1300:pb-[534px] mq1300:box-border">
            <h3 className="mt-[-1px] m-0 relative text-inherit leading-[28.8px] font-semibold font-inherit shrink-0 mq450:text-lgi mq450:leading-[23px]">
              Sentiment
            </h3>
            <div className="w-[926px] flex flex-col items-start justify-start gap-[24px_0px] max-w-[111%] shrink-0 text-lg-9 text-groww-in-stocks-zomato-ltd-1440x810-default-gun-powder">
              <div className="self-stretch flex flex-row items-center justify-start gap-[0px_14px] max-w-full mq1125:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[17px_0px] min-w-[296px] max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[0px_6px]">
                    <div className="relative leading-[20px] font-semibold">
                      Key Events
                    </div>
                    <img
                      className="h-5 w-5 relative min-h-[20px]"
                      alt=""
                      src="/frame-1.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[33px_0px] max-w-full text-sm text-www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-shark font-www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-sf-pro-text-regular-14 mq450:gap-[16px_0px]">
                    <div className="self-stretch rounded-xl bg-www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-solitude flex flex-row items-start justify-start pt-[18px] px-[18px] pb-[38px] box-border gap-[0px_8px] min-w-[456px] max-w-full mq450:flex-wrap">
                      <img
                        className="h-11 w-11 relative rounded-21xl overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/frame-1116601921.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start gap-[8px_0px] min-w-[239px] max-w-full">
                        <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[21px] pl-0 box-border max-w-full">
                            <div className="w-[347px] relative leading-[20px] font-medium flex items-center">
                              Lorem ipsum dolor sit amet consectetur. Dui vel
                              quis dignissim mattis enim tincidunt.
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[3px] pl-0 text-day-gray-07">
                          <div className="w-[365px] relative leading-[20px] flex items-center">
                            Lorem ipsum dolor sit amet consectetur. Ac phasellus
                            risus est faucibus metus quis. Amet sapien quam
                            viverra adipiscing condimentum. Ac consectetur et
                            pretium in a bibendum in. Sed vitae sit nisi viverra
                            natoque lacinia libero enim.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0px_6px] text-lg-9 text-groww-in-stocks-zomato-ltd-1440x810-default-gun-powder font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12">
                      <div className="relative leading-[20px] font-semibold">
                        Analyst Estimates
                      </div>
                      <img
                        className="h-5 w-5 relative min-h-[20px]"
                        alt=""
                        src="/frame-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border min-w-[296px] max-w-full text-sm text-www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-shark font-www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-sf-pro-text-regular-14">
                  <div className="self-stretch rounded-xl bg-mintcream flex flex-row items-start justify-end pt-[18px] px-[18px] pb-[38px] box-border relative min-w-[456px] max-w-full">
                    <img
                      className="h-11 w-11 absolute !m-[0] top-[18px] left-[18px] rounded-21xl overflow-hidden shrink-0"
                      alt=""
                      src="/frame-1116601921-1.svg"
                    />
                    <div className="flex flex-col items-start justify-start relative gap-[8px_0px] max-w-full">
                      <div className="flex flex-row items-center justify-start max-w-full">
                        <div className="flex flex-col items-start justify-start py-0 pr-[21px] pl-0 box-border max-w-full">
                          <div className="w-[347px] relative leading-[20px] font-medium flex items-center">
                            Lorem ipsum dolor sit amet consectetur. Dui vel quis
                            dignissim mattis enim tincidunt.
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-[3px] pl-0 text-day-gray-07">
                        <div className="w-[365px] relative leading-[20px] flex items-center">
                          <span className="w-full">
                            <p className="m-0">{`Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra `}</p>
                            <p className="m-0">in a adipisinc metus quis del</p>
                          </span>
                        </div>
                      </div>
                      <img
                        className="w-[60px] h-[60px] absolute !m-[0] right-[78px] bottom-[34px] overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/svg.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[710px] flex flex-row items-center justify-start max-w-full [row-gap:20px] text-17xl-4 text-absolute-green mq800:flex-wrap">
                <div className="h-[120px] w-[156.9px] flex flex-col items-start justify-start">
                  <div className="flex-1 rounded-[59.22px] bg-mintcream flex flex-row items-center justify-center py-[32.25px] pr-[27px] pl-[29px]">
                    <div className="self-stretch flex flex-row items-center justify-center gap-[0px_2px]">
                      <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-[3px]">
                        <div className="relative font-medium mq450:text-3xl mq800:text-10xl">
                          76
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start text-base">
                        <div className="relative leading-[22px] font-medium">
                          %
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[359px] max-w-full text-base-1 text-groww-in-stocks-zomato-ltd-1440x810-default-waterloo mq800:min-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start p-2 box-border gap-[0px_26px] max-w-full text-mini">
                    <div className="relative leading-[22px] font-medium inline-block max-w-[53.709999084472656px]">
                      Buy
                    </div>
                    <div className="w-[388px] flex flex-row items-center justify-start gap-[0px_10px] max-w-[calc(100%_-_54px)] text-mini-3 mq450:flex-wrap">
                      <div className="h-2 flex-1 relative rounded-sm bg-groww-in-stocks-zomato-ltd-1440x810-default-persian-green min-w-[227px] max-w-full" />
                      <div className="relative leading-[22px] font-medium shrink-0">
                        76%
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start p-2 gap-[0px_20px] mq450:flex-wrap">
                    <div className="relative leading-[22px] font-medium inline-block max-w-[53.709999084472656px]">
                      Hold
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[0px_10px] text-base-6">
                      <div className="h-2 w-[33px] relative rounded-sm bg-groww-in-stocks-zomato-ltd-1440x810-default-french-gray" />
                      <div className="relative leading-[22px] font-medium">
                        8%
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start p-2 gap-[0px_27px]">
                    <div className="relative leading-[22px] font-medium inline-block max-w-[53.709999084472656px]">
                      Sell
                    </div>
                    <div className="w-[109px] flex flex-row items-center justify-start gap-[0px_11px] text-base-6">
                      <div className="h-2 flex-1 relative rounded-sm bg-absolute-red" />
                      <div className="relative leading-[22px] font-medium">
                        16%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-gray-white flex flex-col items-center justify-start pt-[23px] pb-32 pr-[27px] pl-6 box-border relative gap-[10px_0px] max-w-full mq800:pb-[54px] mq800:box-border mq1125:pt-5 mq1125:pb-[83px] mq1125:box-border">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[15px] px-0">
          <h3 className="m-0 relative text-inherit leading-[28.8px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px]">
            About Bitcoin
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px_0px] text-lg text-gray-200">
          <b className="relative leading-[21.6px]">What is Bitcoin?</b>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[5px] gap-[15px_0px] text-base text-gray-2">
            <div className="w-[830px] relative leading-[160%] font-medium inline-block">
              Bitcoin’s price today is US$16,951.82, with a 24-hour trading
              volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
              currently -7.70% from its 7-day all-time high of $18,366.66, and
              3.40% from its 7-day all-time low of $16,394.75. BTC has a
              circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
            </div>
            <div className="self-stretch h-px relative box-border border-b-[1px] border-solid border-lightgray" />
          </div>
          <b className="relative leading-[21.6px]">
            Lorem ipsum dolor sit amet
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border max-w-full text-base text-gray-2">
          <div className="h-[364px] w-[830px] relative leading-[160%] font-medium inline-block shrink-0 max-w-full">
            <p className="m-0 whitespace-pre-wrap">{`Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Diam praesent massa dapibus magna aliquam a dictumst volutpat.
              Egestas vitae pellentesque auctor amet. Nunc sagittis libero
              adipiscing cursus felis pellentesque interdum. Odio cursus
              phasellus velit in senectus enim dui. Turpis tristique placerat
              interdum sed volutpat. Id imperdiet magna eget eros donec cursus
              nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
              Integer dignissim augue viverra nulla et quis lobortis phasellus.
              Integer pellentesque enim convallis ultricies at.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
              massa vel convallis duis ac. Mi adipiscing semper scelerisque
              porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
              congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
              eget. Ullamcorper dui
            </p>
          </div>
        </div>
        <div className="self-stretch h-1.5 flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border max-w-full">
          <div className="self-stretch flex-1 relative box-border max-w-full border-b-[1px] border-solid border-lightgray" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px] max-w-full">
          <h3 className="m-0 w-[464px] h-[47px] relative text-inherit leading-[28.8px] font-semibold font-inherit flex items-center shrink-0 max-w-full mq450:text-lgi mq450:leading-[23px]">
            Already Holding Bitcoin?
          </h3>
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px_0px] max-w-full text-xl text-gray-white">
            <div className="w-[807px] flex flex-row items-start justify-start gap-[0px_31px] max-w-full mq450:gap-[0px_15px] mq800:flex-wrap">
              <GroupComponent
                divincrease="/rectangle-11947@2x.png"
                calculateYourProfits="Calculate your Profits"
              />
              <GroupComponent
                divincrease="/rectangle-11947-1@2x.png"
                calculateYourProfits="Calculate your tax liability"
                propBackground="linear-gradient(135.73deg, #ff9865, #ef3031)"
                propBackground1="linear-gradient(135.73deg, #ff9865, #ef3031)"
                propPadding="2px 15px 2px 14px"
              />
            </div>
            <div className="self-stretch h-px relative box-border border-b-[1px] border-solid border-lightgray" />
          </div>
        </div>
        <div className="w-[830px] h-[130px] absolute !m-[0] bottom-[-17px] left-[24px] text-base leading-[160%] font-medium text-gray-2 inline-block">
          <p className="m-0">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
          <p className="m-0">&nbsp;</p>
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-gray-white flex flex-col items-center justify-start pt-[23px] px-[23px] pb-[60px] box-border gap-[25px_0px] max-w-full mq800:pt-5 mq800:pb-[39px] mq800:box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
          <h3 className="m-0 relative text-inherit leading-[28.8px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px]">
            Tokenomics
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-px box-border min-h-[227px] max-w-full text-xl text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-cod-gray1">
          <div className="w-[810px] flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[531px] pl-0 mq450:pr-5 mq450:box-border mq800:pr-[265px] mq800:box-border">
              <div className="relative leading-[36px] font-semibold inline-block max-w-[810px] mq450:text-base mq450:leading-[29px] mq1125:max-w-full">
                Initial Distribution
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[386px] pl-0 box-border gap-[0px_24px] min-h-[210px] text-base text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mine-shaft mq450:pr-5 mq450:box-border mq800:flex-wrap mq1125:pr-[193px] mq1125:box-border">
              <img
                className="h-[179px] w-[179px] relative mq800:flex-1"
                loading="lazy"
                alt=""
                src="/frame-1116601936.svg"
              />
              <div className="flex-1 flex flex-row items-center justify-start py-5 px-0 box-border min-w-[144px]">
                <div className="h-[111px] flex-1 flex flex-col items-start justify-center gap-[16px_0px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="h-5 flex flex-col items-start justify-center py-0 pr-[9px] pl-0 box-border">
                      <div className="w-3 h-3 relative rounded-md bg-dodgerblue" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="relative leading-[20px]">
                        Crowdsale investors: 80%
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start py-0 pr-16 pl-0">
                    <div className="h-5 flex flex-col items-start justify-center py-0 pr-[9px] pl-0 box-border">
                      <div className="w-3 h-3 relative rounded-md bg-orange" />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[20px]">
                        Foundation: 20%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[833px] relative text-base leading-[160%] font-medium text-gray-2 inline-block">
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
            ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
            bibendum amet enim sit eget leo amet. At metus orci augue fusce
            eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales
            massa habitasse urna felis augue. Gravida aliquam fermentum augue
            eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio
            rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae.
            Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio
            nisi eu ac risus.
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-gray-white flex flex-col items-center justify-start pt-[23px] pb-11 pr-[27px] pl-6 box-border gap-[24px_0px] max-w-full mq450:pb-5 mq450:box-border mq800:pt-5 mq800:pb-[29px] mq800:box-border">
        <div className="self-stretch flex flex-row items-start justify-start">
          <h3 className="m-0 relative text-inherit leading-[28.8px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px]">
            Team
          </h3>
        </div>
        <div className="w-[830px] relative text-base leading-[160%] font-medium text-gray-2 inline-block shrink-0">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </div>
        <DivCoinTitle sandeep="/sandeep@2x.png" johnSmith="John Smith" />
        <DivCoinTitle
          sandeep="/sandeep-1@2x.png"
          johnSmith="Elina Williams"
          propPadding="0px 14px"
        />
        <DivCoinTitle
          sandeep="/sandeep-2@2x.png"
          johnSmith="John Smith"
          propPadding="0px 15px"
        />
      </div>
    </div>
  );
};

export default Divchartitemmargin;
