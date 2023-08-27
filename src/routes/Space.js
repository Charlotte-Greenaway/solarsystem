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
  const [zoomed,setZoomed] = useState(false);
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
            let updatedVisibility;
            switch (this.data) {
              case "sun":
                if(!visibility.Sun){
                  break;
                }
                setZoomed(true)
                updatedVisibility= Object.fromEntries(
                  Object.entries(visibility).map(([planet, _]) => [planet, planet === "Sun"])
                );
                setVisibility(updatedVisibility);
                x = -8.25;
                y = 2;
                z = -2;
                break;
              case "mercury":
                if(!visibility.Mercury){
                  break;
                }
                setZoomed(true)
                updatedVisibility= Object.fromEntries(
                  Object.entries(visibility).map(([planet, _]) => [planet, planet === "Mercury"])
                );
                setVisibility(updatedVisibility);
                x = -5;
                y = 2;
                z = -8;
                break;
              case "venus":
                if(!visibility.Venus){
                  break;
                }
                setZoomed(true)
                updatedVisibility= Object.fromEntries(
                  Object.entries(visibility).map(([planet, _]) => [planet, planet === "Venus"])
                );
                setVisibility(updatedVisibility);
                x = -4;
                y = 2;
                z = -8.25;
                break;
              case "earth":
                if(!visibility.Earth){
                  break;
                }
                setZoomed(true)
                updatedVisibility= Object.fromEntries(
                  Object.entries(visibility).map(([planet, _]) => [planet, planet === "Earth"])
                );
                setVisibility(updatedVisibility);
                x = -2;
                y = 2;
                z = -8;
                break;
              case "mars":
                if(!visibility.Mars){
                  break;
                }
                setZoomed(true)
                updatedVisibility= Object.fromEntries(
                  Object.entries(visibility).map(([planet, _]) => [planet, planet === "Mars"])
                );
                setVisibility(updatedVisibility);
                x = 0;
                y = 2;
                z = -8.25;
                break;
              case "jupiter":
                if(!visibility.Jupiter){
                  break;
                }
                setZoomed(true)
                updatedVisibility= Object.fromEntries(
                  Object.entries(visibility).map(([planet, _]) => [planet, planet === "Jupiter"])
                );
                setVisibility(updatedVisibility);
                x = 2;
                y = 2;
                z = -8;
                break;
              case "saturn":
                if(!visibility.Saturn){
                  break;
                }
                setZoomed(true)
                updatedVisibility= Object.fromEntries(
                  Object.entries(visibility).map(([planet, _]) => [planet, planet === "Saturn"])
                );
                setVisibility(updatedVisibility);
                x = 5;
                y = 2;
                z = -7.5;
                break;
              case "uranus":
                if(!visibility.Uranus){
                  break;
                }
                setZoomed(true)
                updatedVisibility= Object.fromEntries(
                  Object.entries(visibility).map(([planet, _]) => [planet, planet === "Uranus"])
                );
                setVisibility(updatedVisibility);
                x = 8;
                y = 2;
                z = -7.5;
                break;
              case "neptune":
                if(!visibility.Neptune){
                  break;
                }
                setZoomed(true)
                updatedVisibility= Object.fromEntries(
                  Object.entries(visibility).map(([planet, _]) => [planet, planet === "Neptune"])
                );
                setVisibility(updatedVisibility);
                x = 11;
                y = 2;
                z = -7.5;
                break;
              default:
                setZoomed(false)
                updatedVisibility = Object.fromEntries(
                  Object.entries(visibility).map(([planet, _]) => [planet, true])
                );
                setVisibility(updatedVisibility);
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
  }, [visibility]);

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
          <Entity primitive="a-sky" src="#spacebg" marker/>
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
            visible = {visibility.Sun}
            marker="sun"
          />
          <Entity
            primitive="a-text"
            color="white"
            position={{ x: -8.5, y: 2.5, z: -6 }}
            scale="1.5"
            visible = {visibility.Sun && zoomed}
            value={`Name: The Sun\n
            Type: G-type main-sequence star\n
            Age: ~4.6 billion years\n
            Mass: ~1.989 x 10^30 kg\n
            Diameter: ~1.39 million km\n
            Temperature: ~15 million°C core\n
            Composition: 74% hydrogen, 24% helium\n
            Distance: ~149.6 million km from Earth\n
            Energy: Nuclear fusion in core\n
            Importance: Provides light, heat, and energy; influences space weather\n`}
          />
          {/* <!-- Mercury --> */}
          <Entity
            primitive="a-sphere"
            src="#mercury"
            position={{ x: -7, y: 2, z: -10 }}
            radius=".25"
            rotation={`0 ${rotation.Mercury} 0`}
            marker="mercury"
            visible = {visibility.Mercury}
          />
          <Entity
            primitive="a-text"
            color="white"
            position={{ x: -7, y: 2.5, z: -13 }}
            scale="1.5"
            visible = {visibility.Mercury && zoomed}
            value={`Name: Mercury\n
            Type: Terrestrial planet\n
            Distance from Sun: ~57.9 million km\n
            Orbital Period: ~88 Earth days\n
            Diameter: ~4,880 km\n
            Surface Temperature: Ranging from ~430°C (800°F) to ~-180°C (-290°F)\n
            Surface Features: Heavily cratered surface, with large temperature variations\n
            Atmosphere: Virtually nonexistent, very thin exosphere\n
            Composition: Primarily rocky and metallic\n
            Moons: None or possibly captured small asteroids\n
            Notable Feature: Smallest and innermost planet in the Solar System\n`}
          />
          
          {/* <!-- Venus --> */}
          <Entity
            primitive="a-sphere"
            src="#venus"
            position={{ x: -5, y: 2, z: -10 }}
            radius=".5"
            rotation={`0 ${rotation.Venus} 0`}
            marker="venus"
            visible = {visibility.Venus}
          />
          <Entity
            primitive="a-text"
            color="white"
            position={{ x: -4, y: 2.5, z: -13 }}
            scale="1.5"
            visible = {visibility.Venus && zoomed}
            value={`Name: Venus\n
            Type: Terrestrial planet\n
            Distance from Sun: ~108.2 million km\n
            Orbital Period: ~225 Earth days\n
            Diameter: ~12,104 km\n
            Surface Temperature: Extremely hot, around 475°C (887°F) due to greenhouse effect\n
            Atmosphere: Thick and mostly carbon dioxide\n
            Surface Features: Volcanoes, impact craters, vast plains\n
            Composition: Rocky with a metallic core\n
            Moons: None\n
            Notable Feature: Often called Earth's "sister planet," similar in size but with a harsh environment including a runaway greenhouse effect\n`}
          />

          {/* <!-- Earth --> */}
          <Entity
            primitive="a-sphere"
            src="#earth"
            position={{ x: -3, y: 2, z: -10 }}
            radius=".55"
            rotation={`0 ${rotation.Earth} 0`}
            marker="earth"
            visible = {visibility.Earth}
          />
          <Entity
            primitive="a-text"
            color="white"
            position={{ x: -2, y: 2.5, z: -13 }}
            scale="1.5"
            visible = {visibility.Earth && zoomed}
            value={`Name: Earth\n
            Type: Terrestrial planet\n
            Distance from Sun: ~149.6 million km\n
            Orbital Period: ~365.25 days\n
            Diameter: ~12,742 km\n
            Surface Features: Oceans, continents, mountains, valleys\n
            Atmosphere: Nitrogen (78%), oxygen (21%), trace gases\n
            Climate: Varied climates due to axial tilt and geography\n
            Composition: Solid rocky surface, iron-nickel core\n
            Moons: 1 (The Moon)\n
            Notable Feature: Supports diverse life forms, including humans; unique with its liquid water and life-supporting conditions\n`}
          />

          {/* <!-- Mars --> */}
          <Entity
            primitive="a-sphere"
            src="#mars"
            position={{ x: -1, y: 2, z: -10 }}
            radius=".25"
            rotation={`0 ${rotation.Mars} 0`}
            marker="mars"
            visible = {visibility.Mars}
          />
           <Entity
            primitive="a-text"
            color="white"
            position={{ x: 0, y: 2.5, z: -13 }}
            scale="1.5"
            visible = {visibility.Mars && zoomed}
            value={`Name: Mars\n
            Type: Terrestrial planet\n
            Distance from Sun: ~227.9 million km\n
            Orbital Period: ~687 Earth days\n
            Diameter: ~6,779 km\n
            Surface Features: Reddish appearance, polar ice caps, valleys, and volcanoes\n
            Atmosphere: Thin, mostly carbon dioxide\n
            Climate: Cold with temperature variations, polar ice\n
            Composition: Rocky with iron-rich soil\n
            Moons: 2 (Phobos and Deimos)\n
            Notable Feature: Often called the "Red Planet," potential past liquid water, target for robotic exploration and future human missions\n`}
          />

          {/* <!-- Jupiter --> */}
          <Entity
            primitive="a-sphere"
            src="#jupiter"
            position={{ x: 1, y: 2, z: -10 }}
            radius="1"
            rotation={`0 ${rotation.Jupiter} 0`}
            marker="jupiter"
            visible = {visibility.Jupiter}
          />
           <Entity
            primitive="a-text"
            color="white"
            position={{ x: 2.25, y: 2.5, z: -13 }}
            scale="1.5"
            visible = {visibility.Jupiter && zoomed}
            value={`Name: Jupiter\n
            Type: Gas giant planet\n
            Distance from Sun: ~778.5 million km\n
            Orbital Period: ~11.9 Earth years\n
            Diameter: ~139,822 km\n
            Appearance: Distinctive bands, the Great Red Spot (a giant storm)\n
            Atmosphere: Thick with hydrogen and helium\n
            Moons: 79 known moons, including the four Galilean moons\n
            Composition: No solid surface, likely a core of heavy elements\n
            Notable Feature: Largest planet in the Solar System, powerful magnetic field, key to understanding gas giants\n`}
          />

          {/* <!-- Saturn --> */}
          <Entity
            primitive="a-sphere"
            src="#saturn"
            position={{ x: 4, y: 2, z: -10 }}
            radius=".8"
            rotation={`0 ${rotation.Saturn} 0`}
            marker="saturn"
            visible = {visibility.Saturn}
          />
           <Entity
            primitive="a-text"
            color="white"
            position={{ x: 5.5, y: 2.5, z: -13 }}
            scale="1.5"
            visible = {visibility.Saturn && zoomed}
            value={`Name: Saturn\n
            Type: Gas giant planet\n
            Distance from Sun: ~1.4 billion km\n
            Orbital Period: ~29.5 Earth years\n
            Diameter: ~116,464 km\n
            Appearance: Prominent ring system made of ice and rock particles\n
            Atmosphere: Thick with hydrogen and helium\n
            Moons: 83 known moons, including Titan with its substantial atmosphere\n
            Composition: No solid surface, likely a core of heavy elements\n
            Notable Feature: Recognizable rings, second-largest planet, stunning example of ring dynamics\n`}
          />

          {/* <!-- Uranus --> */}
          <Entity
            primitive="a-sphere"
            src="#uranus"
            position={{ x: 7, y: 2, z: -10 }}
            radius=".75"
            rotation={`0 ${rotation.Uranus} 0`}
            marker="uranus"
            visible = {visibility.Uranus}
          />
           <Entity
            primitive="a-text"
            color="white"
            position={{ x: 8, y: 2.5, z: -13 }}
            scale="1.5"
            visible = {visibility.Uranus && zoomed}
            value={`Name: Uranus\n
            Type: Ice giant planet\n
            Distance from Sun: ~2.9 billion km\n
            Orbital Period: ~84 Earth years\n
            Diameter: ~50,724 km\n
            Appearance: Rotates on its side, faint ring system\n
            Atmosphere: Mostly hydrogen, helium, and methane\n
            Moons: 27 known moons, including Titania and Oberon\n
            Composition: No solid surface, likely a core of heavy elements\n
            Notable Feature: Tilted axis, unique rotational behavior, relatively unexplored\n`}
          />

          {/* <!-- Neptune --> */}
          <Entity
            primitive="a-sphere"
            src="#neptune"
            position={{ x: 10, y: 2, z: -10 }}
            radius=".75"
            rotation={`0 ${rotation.Neptune} 0`}
            marker="neptune"
            visible = {visibility.Neptune}
          />
           <Entity
            primitive="a-text"
            color="white"
            position={{ x: 11, y: 2.5, z: -13 }}
            scale="1.5"
            visible = {visibility.Neptune && zoomed}
            value={`Name: Neptune\n
            Type: Ice giant planet\n
            Distance from Sun: ~4.5 billion km\n
            Orbital Period: ~165 Earth years\n
            Diameter: ~49,244 km\n
            Appearance: Deep blue due to methane in its atmosphere\n
            Atmosphere: Hydrogen, helium, methane; dynamic storm systems\n
            Moons: 14 known moons, including Triton with unique retrograde orbit\n
            Composition: No solid surface, likely a core of heavy elements\n
            Notable Feature: Farthest known planet in the Solar System, windy atmosphere, remarkable dark storm called the "Great Dark Spot"\n`}
          />

          <Entity
            primitive="a-entity"
            id="saturn-container"
            position={{ x: 4, y: 2, z: -10 }}
            marker="saturn"
            visible = {visibility.Saturn}
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
            visible = {visibility.Uranus}
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
