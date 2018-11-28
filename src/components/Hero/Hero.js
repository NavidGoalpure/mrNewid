import React from "react";
import PropTypes from "prop-types";

import { FaArrowDown } from "react-icons/fa/";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
      <div className="lasvegas">
        <h1  className="languageEn">
        <span className="lasvegas_span">Web3</span> is comming...<br/>
        </h1>
        <h1 className="languageFa">
          خوش  <span className="lasvegas_span lasvegas_span_delay">به </span>حال روزگار
        </h1>
      </div>
        <button onClick={scrollToContent} aria-label="scroll">
          <FaArrowDown />
        </button>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
      @import url(//fonts.googleapis.com/css?family=Pacifico);
      @import url('https://fonts.googleapis.com/css?family=Lalezar');
        .hero {
          direction: ltr;
          align-items: center;
          background: ${theme.hero.background};
          background-image: url(${backgrounds.mobile});
          background-size: cover;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 100vh;
          height: 100px;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }
        .lasvegas {
            display: contents;
            font-size:1em;
            border: none;
            color: rgba(255,255,255,0.6);
            text-align: center;
            text-shadow: 
              1px 5px 4px rgba(0,0,0,.3), 
              0 0 2px rgba(255,255,255,1), 
              0 0 10px rgba(255,255,255,1), 
              0 0 20px rgba(255,255,255,1), 
              0 0 30px rgba(255,255,255,1), 
              0 0 40px #096dd9, 
              0 0 70px #096dd9, 
              0 0 80px #096dd9,
              0 0 100px #096dd9;
          }
          .languageEn {
            font-family: 'Pacifico', cursive;
          }
          .languageFa {
            font-family: 'Lalezar', 'vazir';
          }
          .lasvegas_span{
            animation: blink .3s infinite alternate;
          }

          .lasvegas_span_delay{
            animation-duration:6s;
            animation-delay: 2s;
            animation-direction: alternate;
            transition-timing-function: cubic-bezier(0.5, 0.2, 0.3, 1.0);
          }


          @keyframes blink {
            0%   {}
            50%  {}
            60%{
              text-shadow: 
                0 0 2px rgba(255, 255, 255, .1), 
                0 0 10px rgba(255, 255, 255, .4);
              
              text-stroke: 2px rgba(255,255,255,0.05);
            }
            70%{
              text-shadow: 
                0 0 2px rgba(255,255,255,1), 
                0 0 10px rgba(255,255,255,1), 
                0 0 20px rgba(255,255,255,1), 
                0 0 30px rgba(255,255,255,1), 
                0 0 40px #096dd9, 
                0 0 70px #096dd9, 
                0 0 80px #096dd9,
                0 0 100px #096dd9;
            }
            80%{
              text-shadow: 
                0 0 2px rgba(255, 255, 255, .1), 
                0 0 10px rgba(255, 255, 255, .4);
              
              text-stroke: 2px rgba(255,255,255,0.05);
            }
            100% { 
              text-shadow: 
                0 0 2px rgba(255,255,255,1), 
                0 0 10px rgba(255,255,255,1), 
                0 0 20px rgba(255,255,255,1), 
                0 0 30px rgba(255,255,255,1), 
                0 0 40px #096dd9, 
                0 0 70px #096dd9, 
                0 0 80px #096dd9,
                0 0 100px #096dd9;
            }
          }

        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Vazir";

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        button {
          background: ${theme.background.color.brand};
          border: 0;
          border-radius: 50%;
          font-size: ${theme.font.size.m};
          padding: ${theme.space.s} ${theme.space.m};
          cursor: pointer;
          width: ${theme.space.xl};
          height: ${theme.space.xl};

          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :global(svg) {
            position: relative;
            top: 5px;
            fill: ${theme.color.neutral.white};
            stroke-width: 40;
            stroke: ${theme.color.neutral.white};
            animation-duration: ${theme.time.duration.long};
            animation-name: buttonIconMove;
            animation-iteration-count: infinite;
          }
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          .hero {
            background-image: url(${backgrounds.tablet});
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          .hero {
            background-image: url(${backgrounds.desktop});
          }

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }

          button {
            font-size: ${theme.font.size.xl};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
