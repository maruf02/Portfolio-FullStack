import React from "react";
import "./ProPicAnime.css";

const ProPicAnime = () => {
  const cstm1 = { "--i": 1 };
  const cstm2 = { "--i": 2 };
  const cstm3 = { "--i": 3 };
  const cstm4 = { "--i": 4 };
  const cstm5 = { "--i": 5 };
  const cstm6 = { "--i": 6 };
  const cstm7 = { "--i": 7 };
  const cstm8 = { "--i": 8 };

  return (
    <div>
      <section className="order-first  md:order-none">
        <section className=" flex justify-center align-middle min-h-[60vh] lg:min-h-[60vh] xl:min-h-[60vh] ">
          <div className="relative top-14 w-[330px] h-[340px] md:w-[330px] md:h-[340px] lg:w-[340px] lg:h-[340px] xl:w-[445px] xl:h-[450px] border-2 border-solid border-white rounded-full">
            <div className="relative top-[46%] right-[53.6%] w-full h-full flex justify-center cursor-pointer">
              <div className="imgBx --i:1" style={cstm1}>
                <img
                  src="https://maruf02.github.io/Asset-Json-Img-dont-delete/PortfolioImage/react.png"
                  alt=""
                />
              </div>
              <div className="imgBx --i:2" style={cstm2}>
                <img
                  src="https://maruf02.github.io/Asset-Json-Img-dont-delete/PortfolioImage/js.png"
                  alt=""
                />
              </div>
              <div className="imgBx --i:3" style={cstm3}>
                <img
                  src="https://maruf02.github.io/Asset-Json-Img-dont-delete/PortfolioImage/tailwind.jpg"
                  alt=""
                />
              </div>
              <div className="imgBx --i:4" style={cstm4}>
                <img
                  src="https://maruf02.github.io/Asset-Json-Img-dont-delete/PortfolioImage/node.png"
                  alt=""
                />
              </div>
              <div className="imgBx --i:5" style={cstm5}>
                <img
                  src="https://maruf02.github.io/Asset-Json-Img-dont-delete/PortfolioImage/wp.jpg"
                  alt=""
                />
              </div>
              <div className="imgBx --i:6" style={cstm6}>
                <img
                  src="https://maruf02.github.io/Asset-Json-Img-dont-delete/PortfolioImage/next.jpg"
                  alt=""
                />
              </div>
              <div className="imgBx --i:7" style={cstm7}>
                <img
                  src="https://maruf02.github.io/Asset-Json-Img-dont-delete/PortfolioImage/express.png"
                  alt=""
                />
              </div>
              <div className="imgBx --i:8" style={cstm8}>
                <img
                  src="https://maruf02.github.io/Asset-Json-Img-dont-delete/PortfolioImage/mongo.png"
                  alt=""
                />
              </div>
            </div>
            <div className="contentt flex justify-center align-middle absolute inset-0 overflow-hidden">
              <div className="imgBxx imgSD relative top-12 md:top-14 w-56 h-56 lg:top-10 lg:w-64 lg:h-64 xl:top-[72px] xl:w-8/12 xl:h-2/3 rounded-full overflow-hidden ">
                <img
                  src="https://maruf02.github.io/Asset-Json-Img-dont-delete/PortfolioImage/pp.jpg"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover "
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProPicAnime;
