import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import { useElements } from "@stripe/react-stripe-js";

const RevolutionSlider = () => {
  useEffect(() => {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }
    loadScript(
      `${process.env.PUBLIC_URL}/js/libs/revolution/extensions/revolution-1.js`
    );
    loadScript(
      `${process.env.PUBLIC_URL}/js/libs/jquery.countdown.min.js`
    );
  }, []);

  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 570px)'
  })

  const isTabletOrLaptopOrDesktop = useMediaQuery({
    query: '(min-device-width: 570px)'
  })

  return (
    <React.Fragment>
      <div
        id="rev_slider_4_1_wrapper"
        className="rev_slider_wrapper fullwidthbanner-container"
        data-alias="home-1"
        data-source="gallery"
        style={{
          padding: "0px",
          backgroundImage: "url('images/slides/h1-slider1.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div
          id="rev_slider_4_1"
          className="rev_slider fullwidthabanner"
          style={{ display: "none" }}
          data-version="5.4.7.4"
        >
          <ul>
            <li
              data-index="rs-10"
              data-transition="fade"
              data-slotamount="default"
              data-hideafterloop="0"
              data-hideslideonmobile="off"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="300"
              data-thumb="images/slides/h1-slider1-100x50.jpg"
              data-rotate="0"
              data-saveperformance="off"
              data-title="Slide"
              data-param1=""
              data-param2=""
              data-param3=""
              data-param4=""
              data-param5=""
              data-param6=""
              data-param7=""
              data-param8=""
              data-param9=""
              data-param10=""
              data-description=""
            >
              <img
                src="images/slides/h1-slider1.jpg"
                alt=""
                title="hotel-wp-demo3-slider.jpg"
                width="1422"
                height="800"
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                className="rev-slidebg"
                data-no-retina
              />

              <h1
                className="tp-caption tp-resizeme"
                id="slide-10-layer-1"
                data-x="['center','center','center','center']"
                data-hoffset="['8','8','8','7']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-109','-109','-109','-62']"
                data-fontsize="['66','66','40','30']"
                data-lineheight="['78','78','50','36']"
                data-fontweight="['700','700','700','700']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":900,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":100,"frame":"999","to":"y:-50px;opacity:0;","ease":"nothing"}]'
                data-textalign="['center','center','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 5,
                  whiteSpace: "nowrap",
                  fontSize: "66px",
                  lineHeight: "78px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,1)",
                }}
              >
                Bienvenue à Songon Park <br />
                Village
              </h1>
              
              {isTabletOrLaptopOrDesktop &&
                <>
                  <p
                    className="tp-caption tp-resizeme"
                    id="slide-10-layer-2"
                    data-x="['center','center','center','center']"
                    data-hoffset="['0','0','1','1']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['5','5','-24','12']"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-frames='[{"delay":900,"speed":1500,"frame":"0","from":"y:bottom;rX:-20deg;rY:-20deg;rZ:0deg;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"nothing"}]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 6,
                      whiteSpace: "nowrap",
                      fontSize: "18px",
                      lineHeight: "22px",
                      fontWeight: 400,
                      color: "rgba(255,255,255,1)",
                    }}
                  >
                    Votre complexe hôtelier en bordure de lagune
                  </p>

                  <div
                    className="tp-caption tp-resizeme thim-link-slider2"
                    id="slide-10-layer-3"
                    data-x="['center','center','center','center']"
                    data-hoffset="['10','10','0','2']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['105','105','89','114']"
                    data-lineheight="['1','1','','']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-actions='[{"event":"click","action":"simplelink","target":"_blank","url":"rooms.html","delay":""}]'
                    data-responsive_offset="on"
                    data-frames='[{"delay":900,"speed":1500,"frame":"0","from":"y:bottom;rX:-10deg;rY:-20deg;rZ:0deg;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":100,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[17,17,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[16,16,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 7,
                      whiteSpace: "nowrap",
                      fontSize: "15px",
                      lineHeight: "1px",
                      fontWeight: 400,
                      color: "rgba(255,255,255,1)",
                      textTransform: "uppercase"
                    }}
                  >
                    <Link to="/rooms">Découvrir</Link>
                  </div>
                </>
              }

              {isMobileDevice &&
                <>
                  <p
                    className="tp-caption tp-resizeme"
                    id="slide-10-layer-2"
                    data-x="['center','center','center','center']"
                    data-hoffset="['0','0','1','1']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['5','5','-24','12']"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-frames='[{"delay":900,"speed":1500,"frame":"0","from":"y:bottom;rX:-20deg;rY:-20deg;rZ:0deg;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"nothing"}]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 6,
                      whiteSpace: "nowrap",
                      fontSize: "18px",
                      lineHeight: "22px",
                      fontWeight: 400,
                      color: "rgba(255,255,255,1)",
                    }}
                  >
                    Rêver éveillé
                  </p>

                  <div
                    className="tp-caption tp-resizeme"
                    id="slide-10-layer-2"
                    data-x="['center','center','center','center']"
                    data-hoffset="['10','10','0','2']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['105','105','89','114']"
                    data-lineheight="['1','1','','']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[{"delay":900,"speed":1500,"frame":"0","from":"y:bottom;rX:-10deg;rY:-20deg;rZ:0deg;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":100,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[17,17,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[16,16,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 6,
                      whiteSpace: "nowrap",
                      lineHeight: "22px",
                      fontWeight: 400,
                      color: "rgba(255,255,255,1)",
                      border: "1px solid dodgerblue",
                      backgroundColor: "dodgerblue",
                      padding: "10px"
                    }}
                  >
                    <Link className="btn btn-lg-primary" to="/rooms">Découvrir</Link>
                  </div>
                </>
              }
            </li>
            <li
              data-index="rs-11"
              data-transition="fade"
              data-slotamount="default"
              data-hideafterloop="0"
              data-hideslideonmobile="off"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="300"
              data-thumb="images/slides/h1-slider1-100x50.jpg"
              data-rotate="0"
              data-saveperformance="off"
              data-title="Slide"
              data-param1=""
              data-param2=""
              data-param3=""
              data-param4=""
              data-param5=""
              data-param6=""
              data-param7=""
              data-param8=""
              data-param9=""
              data-param10=""
              data-description=""
            >
              <img
                src={"images/slides/h1-slider2.jpg"}
                alt=""
                title="hotel-wp-slider-2"
                width="1461"
                height="800"
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                className="rev-slidebg"
                data-no-retina
              />

              <h1
                className="tp-caption tp-resizeme"
                id="slide-11-layer-1"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','1','9']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-60','-60','-75','-48']"
                data-fontsize="['64','64','40','30']"
                data-lineheight="['','','50','36']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":300,"speed":1500,"frame":"0","from":"x:{-250,250};y:{-150,150};rX:{-90,90};rY:{-90,90};rZ:{-360,360};sX:0;sY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":100,"frame":"999","to":"opacity:0;","ease":"Power2.easeIn"}]'
                data-textalign="['center','center','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 5,
                  whiteSpace: "nowrap",
                  fontSize: "64px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,1)",
                }}
              >
                Votre havre de paix
              </h1>
              
              {isTabletOrLaptopOrDesktop &&
                <>
                  <p
                    className="tp-caption tp-resizeme"
                    id="slide-11-layer-2"
                    data-x="['center','center','center','center']"
                    data-hoffset="['0','0','5','3']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['15','15','-14','6']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[{"delay":900,"speed":1500,"frame":"0","from":"y:bottom;rX:-20deg;rY:-20deg;rZ:0deg;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"nothing"}]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 6,
                      whiteSpace: "nowrap",
                      fontSize: "18px",
                      lineHeight: "22px",
                      fontWeight: 400,
                      color: "rgba(255,255,255,1)",
                    }}
                  >
                    Chez nous, l’hospitalité et le service sont inégalés
                  </p>
                  <div
                    className="tp-caption   tp-resizeme  thim-link-slider2"
                    id="slide-11-layer-3"
                    data-x="['center','center','center','center']"
                    data-hoffset="['3','3','0','-1']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['105','105','88','108']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-actions='[{"event":"click","action":"simplelink","target":"_blank","url":"contact.html","delay":""}]'
                    data-responsive_offset="on"
                    data-frames='[{"delay":900,"speed":1500,"frame":"0","from":"y:bottom;rX:-20deg;rY:-20deg;rZ:0deg;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":100,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 7,
                      whiteSpace: "nowrap",
                      fontSize: "15px",
                      fontWeight: 400,
                      color: "rgba(255,255,255,1)",
                      textTransform: "uppercase",
                    }}
                  >
                    <Link style={{ backgroundColor: "dodgerblue" }} to="/contact">
                      Contactez Nous
                    </Link>
                  </div>
                </>
              }

              {isMobileDevice && 
                <>
                  <p
                    className="tp-caption   tp-resizeme"
                    id="slide-11-layer-2"
                    data-x="['center','center','center','center']"
                    data-hoffset="['0','0','5','3']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['15','15','-14','6']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[{"delay":900,"speed":1500,"frame":"0","from":"y:bottom;rX:-20deg;rY:-20deg;rZ:0deg;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"nothing"}]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 6,
                      whiteSpace: "nowrap",
                      fontSize: "18px",
                      lineHeight: "22px",
                      fontWeight: 400,
                      color: "rgba(255,255,255,1)",
                    }}
                  >
                    Calme et tranquilité
                  </p>

                  <div
                      className="tp-caption tp-resizeme"
                      id="slide-10-layer-2"
                      data-x="['center','center','center','center']"
                      data-hoffset="['10','10','0','2']"
                      data-y="['middle','middle','middle','middle']"
                      data-voffset="['105','105','89','114']"
                      data-lineheight="['1','1','','']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="nowrap"
                      data-type="text"
                      data-responsive_offset="on"
                      data-frames='[{"delay":900,"speed":1500,"frame":"0","from":"y:bottom;rX:-10deg;rY:-20deg;rZ:0deg;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":100,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[17,17,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[16,16,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 6,
                        whiteSpace: "nowrap",
                        lineHeight: "22px",
                        fontWeight: 400,
                        color: "rgba(255,255,255,1)",
                        border: "1px solid dodgerblue",
                        backgroundColor: "dodgerblue",
                        padding: "10px"
                      }}
                    >
                      <Link className="btn btn-lg-primary" to="/contact">CONTACT</Link>
                  </div>
                </>
              }

            </li>

            <li
              data-index="rs-12"
              data-transition="fade"
              data-slotamount="default"
              data-hideafterloop="0"
              data-hideslideonmobile="off"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="300"
              data-thumb="images/slides/h1-slider1-100x50.jpg"
              data-rotate="0"
              data-saveperformance="off"
              data-title="Slide"
              data-param1=""
              data-param2=""
              data-param3=""
              data-param4=""
              data-param5=""
              data-param6=""
              data-param7=""
              data-param8=""
              data-param9=""
              data-param10=""
              data-description=""
            >
              <img
                src={"images/slides/h1-slider3.jpg"}
                alt=""
                title="hotel-wp-slider-3"
                width="1461"
                height="800"
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                className="rev-slidebg"
                data-no-retina
              />

              <h1
                className="tp-caption   tp-resizeme"
                id="slide-12-layer-1"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','10']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-60','-60','-80','-60']"
                data-fontsize="['64','64','40','30']"
                data-lineheight="['','','50','36']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":300,"speed":1500,"frame":"0","from":"x:{-250,250};y:{-150,150};rX:{-90,90};rY:{-90,90};rZ:{-360,360};sX:0;sY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":100,"frame":"999","to":"opacity:0;","ease":"Power2.easeIn"}]'
                data-textalign="['center','center','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 5,
                  whiteSpace: "nowrap",
                  fontSize: "64px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,1)",
                }}
              >
                Cadre naturel et agréable
              </h1>
              
              {isTabletOrLaptopOrDesktop &&
                <>
                  <p
                    className="tp-caption   tp-resizeme"
                    id="slide-12-layer-2"
                    data-x="['center','center','center','center']"
                    data-hoffset="['0','0','4','7']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['15','15','-21','-3']"
                    data-fontsize="['18','18','18','20']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[{"delay":900,"speed":1500,"frame":"0","from":"y:bottom;rX:-20deg;rY:-20deg;rZ:0deg;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"nothing"}]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 6,
                      whiteSpace: "nowrap",
                      fontSize: "18px",
                      lineHeight: "22px",
                      fontWeight: 400,
                      color: "rgba(255,255,255,1)",
                    }}
                  >
                    Redécouvrez et contemplez la nature
                  </p>

                  <div
                    className="tp-caption   tp-resizeme  thim-link-slider2"
                    id="slide-12-layer-3"
                    data-x="['center','center','center','center']"
                    data-hoffset="['3','3','0','1']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['105','105','68','97']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[{"delay":900,"speed":1500,"frame":"0","from":"y:bottom;rX:-20deg;rY:-20deg;rZ:0deg;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":100,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 7,
                      whiteSpace: "nowrap",
                      fontSize: "15px",
                      fontWeight: 400,
                      color: "rgba(255,255,255,1)",
                      textTransform: "uppercase",
                    }}
                  >
                    <Link to="/rooms">Explorer</Link>
                  </div>
                </>
              }

              {isMobileDevice &&
                <>
                  <p
                    className="tp-caption tp-resizeme"
                    id="slide-12-layer-2"
                    data-x="['center','center','center','center']"
                    data-hoffset="['0','0','4','7']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['15','15','-21','-3']"
                    data-fontsize="['18','18','18','20']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[{"delay":900,"speed":1500,"frame":"0","from":"y:bottom;rX:-20deg;rY:-20deg;rZ:0deg;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"nothing"}]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 6,
                      whiteSpace: "nowrap",
                      fontSize: "18px",
                      lineHeight: "22px",
                      fontWeight: 400,
                      color: "rgba(255,255,255,1)",
                    }}
                  >
                    Beauté et admiration
                  </p>

                  <div
                    className="tp-caption tp-resizeme"
                    id="slide-10-layer-2"
                    data-x="['center','center','center','center']"
                    data-hoffset="['10','10','0','2']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['105','105','89','114']"
                    data-lineheight="['1','1','','']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[{"delay":900,"speed":1500,"frame":"0","from":"y:bottom;rX:-10deg;rY:-20deg;rZ:0deg;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":100,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[17,17,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[16,16,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 6,
                      whiteSpace: "nowrap",
                      lineHeight: "22px",
                      fontWeight: 400,
                      color: "rgba(255,255,255,1)",
                      border: "1px solid dodgerblue",
                      backgroundColor: "dodgerblue",
                      padding: "10px"
                    }}
                  >
                    <Link className="btn btn-lg-primary" to="/rooms">EXPLORER</Link>
                  </div>
                </>
              }
            </li>
          </ul>
          <div
            className="tp-bannertimer tp-bottom"
            style={{ visibility: "hidden !important" }}
          ></div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default RevolutionSlider;