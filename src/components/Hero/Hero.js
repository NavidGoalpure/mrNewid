// css inimations get from :
// https://codepen.io/riktar/pen/dPRgOq
// https://codepen.io/nodws/pen/bdjwn
import React from "react";
import PropTypes from "prop-types";

import { FaArrowDown, FaAndroid } from "react-icons/fa/";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
      <div className="lasvegas">
        <h1  className="languageEn">
          <span className="blink2">Web3</span> is comming... <br/>
        </h1>
        <h1 className="languageFa">
        <span> خوش </span>
        به   <span>حال </span>روزگار
        </h1>
      </div>
        <h1 className="arrow" onClick={scrollToContent} aria-label="scroll">
        &dArr;
        </h1>
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
        .arrow {
          border: none;
          color: rgba(255,255,255,0.6);
          text-align: center;
          text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;

        }
        .lasvegas {
            display: contents;
            font-size:1em;
            border: none;
            color: rgba(255,255,255,0.6);
            text-align: center;
           
          }
          .languageEn {
            font-family: 'Pacifico', cursive;
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
          .languageFa {
            font-family: 'Lalezar', 'vazir';
            color: #fee;
            text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
          }
          .blink2{
            
            animation: blink2 linear infinite 2s;
          }
          .lasvegas_span_delay{
            text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;

            animation-duration:6s;
            animation-delay: 2s;
            animation-direction: alternate;
            transition-timing-function: cubic-bezier(0.5, 0.2, 0.3, 1.0);
          }

          @keyframes blink2 {
            78% {
              color: inherit;
              text-shadow: inherit;
            }
            79%{
               color: #333;
            }
            80% {
              
              text-shadow: none;
            }
            81% {
              color: inherit;
              text-shadow: inherit;
            }
            82% {
              color: #333;
              text-shadow: none;
            }
            83% {
              color: inherit;
              text-shadow: inherit;
            }
            92% {
              color: #333;
              text-shadow: none;
            }
            92.5% {
              color: inherit;
              text-shadow: inherit;
            }
          }
          @keyframes blink1 {
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

        @from-width tablet {
          .hero {
            background-image: url(${backgrounds.tablet});
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
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
