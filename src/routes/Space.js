import { Entity, Scene } from "aframe-react";
import sun from "../images/sun.jpg";
import mercury from "../images/mercury.jpg";
import venus from "../images/venus.jpg";
import earth from "../images/earth.jpg";
import mars from "../images/mars.jpg";
import jupiter from "../images/Jupiter.jpg";
import saturn from "../images/saturn.jpg";
import uranus from "../images/uranus.jpg";
import neptune from "../images/neptune.jpg";
import spacebg from "../images/spacebg.jpg";
import { useState, useEffect } from "react";
require("aframe");

const Space = ({ username }) => {
  const [visibility, setVisibility] = useState({
    Sun: true,
    Mercury: true,
    Venus: true,
    Earth: true,
    Mars: true,
    Jupiter: true,
    Saturn: true,
    Uranus: true,
    Neptune: true,
  });
  const [camerapos, setPos] = useState({ x: 0, y: 1.6, z: 0 });
  const correctOrientation = window.matchMedia(
    "(orientation: landscape)"
  ).matches;

  useEffect(() => {
    console.log("rendered");
    const AFRAME = window.AFRAME;
    if (AFRAME.components.marker) {
      console.log("marker defined");
    } else {
      AFRAME.registerComponent("marker", {
        schema: { default: "" },
        init() {
          this.el.addEventListener("click", () => {
            //sky.setAttribute('src', this.data);
            let x;
            let y;
            let z;

            switch (this.data) {
              case "sun":
                console.log("sun");
                x = -10;
                y = 2;
                z = -2;
                break;
              case "mercury":
                x = -7;
                y = 2;
                z = -8;
                break;
              case "venus":
                x = -5;
                y = 2;
                z = -8.25;
                break;
              case "earth":
                x = -3;
                y = 2;
                z = -8;
                break;
              case "mars":
                x = -1;
                y = 2;
                z = -9;
                break;
              case "jupiter":
                x = 1;
                y = 2;
                z = -8;
                break;
              case "saturn":
                x = 4;
                y = 2;
                z = -7.5;
                break;
              case "uranus":
                x = 7;
                y = 2;
                z = -7.5;
                break;
              case "neptune":
                x = 10;
                y = 2;
                z = -7.5;
                break;
              default:
                x = 0;
                y = 1.6;
                z = 0;
            }
            setPos({ x: x, y: y, z: z });
            console.log("clicked" + this.data);
          });
        },
      });
    }
  }, []);

  const rotationStates = {
    Sun: 0.1 * 1.5,
    Mercury: 0.2185 * 1.5,
    Venus: 0.9 * 1.5,
    Earth: 0.0889 * 1.5,
    Mars: 0.0889 * 1.5,
    Jupiter: 0.03704 * 1.5,
    Saturn: 0.03704 * 1.5,
    Uranus: 0.06296 * 1.5,
    Neptune: 0.05926 * 1.5,
  };
  const [rotation, setRotation] = useState({
    Sun: 0,
    Mercury: 0,
    Venus: 0,
    Earth: 0,
    Mars: 0,
    Jupiter: 0,
    Saturn: 0,
    Uranus: 0,
    Neptune: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation({
        Sun: rotation.Sun + rotationStates.Sun,
        Mercury: rotation.Mercury + rotationStates.Mercury,
        Venus: rotation.Venus + rotationStates.Venus,
        Earth: rotation.Earth + rotationStates.Earth,
        Mars: rotation.Mars + rotationStates.Mars,
        Jupiter: rotation.Jupiter + rotationStates.Jupiter,
        Saturn: rotation.Saturn + rotationStates.Saturn,
        Uranus: rotation.Uranus + rotationStates.Uranus,
        Neptune: rotation.Neptune + rotationStates.Neptune,
      });
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [
    rotation.Sun,
    rotation.Mercury,
    rotation.Venus,
    rotation.Earth,
    rotation.Mars,
    rotation.Jupiter,
    rotation.Saturn,
    rotation.Uranus,
    rotation.Neptune,
    rotationStates.Sun,
    rotationStates.Mercury,
    rotationStates.Venus,
    rotationStates.Earth,
    rotationStates.Mars,
    rotationStates.Jupiter,
    rotationStates.Saturn,
    rotationStates.Uranus,
    rotationStates.Neptune,
  ]);

  return (
    <>
      {correctOrientation ? (
        <Scene background="color: midnightblue" cursor="rayOrigin:mouse">
          <a-assets>
            <img alt="suntexture" id="sun" src={sun} />
            <img alt="mercurytexture" id="mercury" src={mercury} />
            <img alt="venustexture" id="venus" src={venus} />
            <img alt="earthtexture" id="earth" src={earth} />
            <img alt="marstexture" id="mars" src={mars} />
            <img alt="jupitertexture" id="jupiter" src={jupiter} />
            <img alt="saturntexture" id="saturn" src={saturn} />
            <img alt="uranustexture" id="uranus" src={uranus} />
            <img alt="neptunetexture" id="neptune" src={neptune} />
            <img alt="spacebackground" id="spacebg" src={spacebg} />
          </a-assets>
          <Entity
            primitive="a-camera"
            position={camerapos}
            wasd-controls-enabled="false"
            camera="active: true"
          />
          <Entity
            primitive="a-light"
            type="point"
            intensity="2"
            position={{ x: -8, y: 1, z: -6 }}
          />
          <Entity
            primitive="a-light"
            type="point"
            intensity="0.5"
            position={{ x: 2, y: 4, z: 4 }}
          />
          <Entity
            primitive="a-text"
            color="white"
            position={{ x: -2, y: 2.5, z: -3 }}
            value={`Hey ${username}, click on a planet to explore!`}
          />
          <Entity primitive="a-sky" src="#spacebg" />
          {/* <!-- Sun --> */}
          <Entity
            primitive="a-sphere"
            id="sun"
            src="#sun"
            position={{ x: -13, y: 2, z: -10 }}
            radius="4"
            emissive="#760404"
            emissiveIntensity="0"
            rotation={`0 ${rotation.Sun} 0`}
            marker="sun"
          />
          {/* <!-- Mercury --> */}
          <Entity
            primitive="a-sphere"
            src="#mercury"
            position={{ x: -7, y: 2, z: -10 }}
            radius=".25"
            rotation={`0 ${rotation.Mercury} 0`}
            marker="mercury"
          />

          {/* <!-- Venus --> */}
          <Entity
            primitive="a-sphere"
            src="#venus"
            position={{ x: -5, y: 2, z: -10 }}
            radius=".5"
            rotation={`0 ${rotation.Venus} 0`}
            marker="venus"
          />

          {/* <!-- Earth --> */}
          <Entity
            primitive="a-sphere"
            src="#earth"
            position={{ x: -3, y: 2, z: -10 }}
            radius=".55"
            rotation={`0 ${rotation.Earth} 0`}
            marker="earth"
          />

          {/* <!-- Mars --> */}
          <Entity
            primitive="a-sphere"
            src="#mars"
            position={{ x: -1, y: 2, z: -10 }}
            radius=".25"
            rotation={`0 ${rotation.Mars} 0`}
            marker="mars"
          />

          {/* <!-- Jupiter --> */}
          <Entity
            primitive="a-sphere"
            src="#jupiter"
            position={{ x: 1, y: 2, z: -10 }}
            radius="1"
            rotation={`0 ${rotation.Jupiter} 0`}
            marker="jupiter"
          />

          {/* <!-- Saturn --> */}
          <Entity
            primitive="a-sphere"
            src="#saturn"
            position={{ x: 4, y: 2, z: -10 }}
            radius=".8"
            rotation={`0 ${rotation.Saturn} 0`}
            marker="saturn"
          />

          {/* <!-- Uranus --> */}
          <Entity
            primitive="a-sphere"
            src="#uranus"
            position={{ x: 7, y: 2, z: -10 }}
            radius=".75"
            rotation={`0 ${rotation.Uranus} 0`}
            marker="uranus"
          />

          {/* <!-- Neptune --> */}
          <Entity
            primitive="a-sphere"
            src="#neptune"
            position={{ x: 10, y: 2, z: -10 }}
            radius=".75"
            rotation={`0 ${rotation.Neptune} 0`}
            marker="neptune"
          />

          <Entity
            primitive="a-entity"
            id="saturn-container"
            position={{ x: 4, y: 2, z: -10 }}
            marker="saturn"
          >
            <Entity
              primitive="a-sphere"
              position="0 0 0 "
              radius=".8"
              src="#saturn"
              id="saturn"
            />
            <Entity
              primitive="a-torus"
              id="saturn-ring-1"
              color="#57524A"
              segments-tubular="50"
              radius="3.2"
              radius-tubular="0.1"
              rotation="90 0 0"
              scale=".44 .44 0.04"
            />
            <Entity
              primitive="a-torus"
              id="saturn-ring-2"
              color="#A29A87"
              segments-tubular="50"
              radius="2.4"
              radius-tubular="0.2"
              rotation="90 0 0"
              scale=".44 .44 0.04"
            />
          </Entity>

          <Entity
            primitive="a-entity"
            id="uranus-container"
            position={{ x: 7, y: 2, z: -10 }}
            marker="uranus"
          >
            <Entity
              primitive="a-sphere"
              id="uranus"
              radius=".75"
              src="#uranus"
            />
            <Entity
              primitive="a-torus"
              id="uranus-ring"
              color="#FFFFFF"
              segments-tubular="50"
              radius="1.5"
              radius-tubular="0.01"
              rotation="-10 90 0"
              scale=".75 .75 0.075"
            />
          </Entity>
        </Scene>
      ) : (
        <p id="tilttext"> Tilt landscape to travel!</p>
      )}
    </>
  );
};
export default Space;
