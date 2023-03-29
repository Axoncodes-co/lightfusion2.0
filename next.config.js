/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {"source":"/wp-content/uploads/2021/10/rc-airplane-icon.svg","destination":"/data/media/rc-airplane-icon.svg","statusCode":301},{"source":"/wp-content/uploads/2021/10/Paper-airplane-icon.svg","destination":"/data/media/Paper-airplane-icon.svg","statusCode":301},{"source":"/wp-content/uploads/2021/10/Radio-Navigation.svg","destination":"/data/media/Radio-Navigation.svg","statusCode":301},{"source":"/wp-content/uploads/2021/10/Principles-of-Flight4.svg","destination":"/data/media/Principles-of-Flight4.svg","statusCode":301},{"source":"/wp-content/uploads/2021/10/Powerplant-icon.svg","destination":"/data/media/Powerplant-icon.svg","statusCode":301},{"source":"/wp-content/uploads/2021/10/Meteorology.svg","destination":"/data/media/Meteorology.svg","statusCode":301},{"source":"/wp-content/uploads/2021/10/Mass-and-balance.svg","destination":"/data/media/Mass-and-balance.svg","statusCode":301},{"source":"/wp-content/uploads/2021/10/instrument-icon.svg","destination":"/data/media/instrument-icon.svg","statusCode":301},{"source":"/wp-content/uploads/2021/10/Human-performance.svg","destination":"/data/media/Human-performance.svg","statusCode":301},{"source":"/wp-content/uploads/2021/10/General-Navigation.svg","destination":"/data/media/General-Navigation.svg","statusCode":301},{"source":"/wp-content/uploads/2021/10/Flight-Computer.svg","destination":"/data/media/Flight-Computer.svg","statusCode":301},{"source":"/wp-content/uploads/2021/10/electrics-icon.svg","destination":"/data/media/electrics-icon.svg","statusCode":301},{"source":"/wp-content/uploads/2021/10/communication-icon.svg","destination":"/data/media/communication-icon.svg","statusCode":301},{"source":"/wp-content/uploads/2021/10/Airframes-and-Systems.svg","destination":"/data/media/Airframes-and-Systems.svg","statusCode":301},{"source":"/wp-content/uploads/2021/10/Blog-Icon.svg","destination":"/data/media/Blog-Icon.svg","statusCode":301},{"source":"/wp-content/uploads/2021/10/airframes-and-systemes1.svg","destination":"/data/media/airframes-and-systemes1.svg","statusCode":301},{"source":"/wp-content/uploads/2021/10/ATPL.jpg","destination":"/data/media/ATPL.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/10/atpl-icon.svg","destination":"/data/media/atpl-icon.svg","statusCode":301},{"source":"/wp-content/uploads/2021/10/general.jpg","destination":"/data/media/general.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/10/General-Icon.svg","destination":"/data/media/General-Icon.svg","statusCode":301},{"source":"/wp-content/uploads/2021/09/critical-angle-of-attack-stall.png","destination":"/data/media/critical-angle-of-attack-stall.png","statusCode":301},{"source":"/wp-content/uploads/2021/09/angle-of-attack.png","destination":"/data/media/angle-of-attack.png","statusCode":301},{"source":"/wp-content/uploads/2021/09/AOA.jpg","destination":"/data/media/AOA.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/09/Advection.png","destination":"/data/media/Advection.png","statusCode":301},{"source":"/wp-content/uploads/2021/09/Temperature.jpg","destination":"/data/media/Temperature.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/09/Radiation-Convection-conduction.png","destination":"/data/media/Radiation-Convection-conduction.png","statusCode":301},{"source":"/wp-content/uploads/2021/09/Wavelengths-of-visible-and-non-visible-light.png","destination":"/data/media/Wavelengths-of-visible-and-non-visible-light.png","statusCode":301},{"source":"/wp-content/uploads/2021/09/flight-attitude-and-relative-wind.png","destination":"/data/media/flight-attitude-and-relative-wind.png","statusCode":301},{"source":"/wp-content/uploads/2021/09/Relative-wind-and-flight-path.png","destination":"/data/media/Relative-wind-and-flight-path.png","statusCode":301},{"source":"/wp-content/uploads/2021/09/Relative-Wind.png","destination":"/data/media/Relative-Wind.png","statusCode":301},{"source":"/wp-content/uploads/2021/09/What-is-relative-wind.png","destination":"/data/media/What-is-relative-wind.png","statusCode":301},{"source":"/wp-content/uploads/2021/09/Relative-wind-aeronautics.jpg","destination":"/data/media/Relative-wind-aeronautics.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/09/Relative-wind-definition.png","destination":"/data/media/Relative-wind-definition.png","statusCode":301},{"source":"/wp-content/uploads/2021/04/wing.png","destination":"/data/media/wing.png","statusCode":301},{"source":"/wp-content/uploads/2021/04/Four-forces-of-flight-1.png","destination":"/data/media/Four-forces-of-flight-1.png","statusCode":301},{"source":"/wp-content/uploads/2021/04/4-forces-of-flight.jpg","destination":"/data/media/4-forces-of-flight.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/04/Venturi-tube.png","destination":"/data/media/Venturi-tube.png","statusCode":301},{"source":"/wp-content/uploads/2021/02/CamScanner-04-14-2021-17.35.pdf","destination":"/data/media/CamScanner-04-14-2021-17.35.pdf","statusCode":301},{"source":"/wp-content/uploads/2021/04/Four-forces-of-flight.png","destination":"/data/media/Four-forces-of-flight.png","statusCode":301},{"source":"/wp-content/uploads/2021/02/wersm-paper-airplane-design-feat.jpg","destination":"/data/media/wersm-paper-airplane-design-feat.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/04/Why-does-the-ionosphere-reflect-radio-waves.png","destination":"/data/media/Why-does-the-ionosphere-reflect-radio-waves.png","statusCode":301},{"source":"/wp-content/uploads/2021/04/ionosphere-layer.png","destination":"/data/media/ionosphere-layer.png","statusCode":301},{"source":"/wp-content/uploads/2021/03/The-Ionosphere.jpg","destination":"/data/media/The-Ionosphere.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/03/Noctilucent-Clouds-1.jpg","destination":"/data/media/Noctilucent-Clouds-1.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/03/Noctilucent-clouds.jpg","destination":"/data/media/Noctilucent-clouds.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/02/Earth-Atmosphere-Composition-and-Structure.jpg","destination":"/data/media/Earth-Atmosphere-Composition-and-Structure.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/02/Summer-and-Winter-Tropopause.png","destination":"/data/media/Summer-and-Winter-Tropopause.png","statusCode":301},{"source":"/wp-content/uploads/2021/02/Tropical-and-Polar-Tropopause.png","destination":"/data/media/Tropical-and-Polar-Tropopause.png","statusCode":301},{"source":"/wp-content/uploads/2021/02/Structure-of-the-Atmosphere.png","destination":"/data/media/Structure-of-the-Atmosphere.png","statusCode":301},{"source":"/wp-content/uploads/2021/02/Composition-of-atmosphere.png","destination":"/data/media/Composition-of-atmosphere.png","statusCode":301},{"source":"/wp-content/uploads/2021/01/The-main-Structure-of-airplanes.jpg","destination":"/data/media/The-main-Structure-of-airplanes.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/01/Horizontal-Stabilizer.jpg","destination":"/data/media/Horizontal-Stabilizer.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/01/Vertical-Stabilizer.jpg","destination":"/data/media/Vertical-Stabilizer.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/01/Rudder.jpg","destination":"/data/media/Rudder.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/01/Elevator.jpg","destination":"/data/media/Elevator.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/01/Flap.jpg","destination":"/data/media/Flap.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/01/airplane-engine.jpg","destination":"/data/media/airplane-engine.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/01/Shock-Strut-and-Brake.jpg","destination":"/data/media/Shock-Strut-and-Brake.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/01/Landing-Gear.jpg","destination":"/data/media/Landing-Gear.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/01/Empennage.jpg","destination":"/data/media/Empennage.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/01/Aileron.jpg","destination":"/data/media/Aileron.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/01/Wing.jpg","destination":"/data/media/Wing.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/01/Fuselage.jpg","destination":"/data/media/Fuselage.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/01/ATPL.jpg","destination":"/data/media/ATPL.jpg","statusCode":301},{"source":"/wp-content/uploads/2021/01/cropped-favicon-Homa-Pilot.png","destination":"/data/media/cropped-favicon-Homa-Pilot.png","statusCode":301},{"source":"/wp-content/uploads/2021/01/favicon-Homa-Pilot.png","destination":"/data/media/favicon-Homa-Pilot.png","statusCode":301},{"source":"/wp-content/uploads/2021/01/General.webp","destination":"/data/media/General.webp","statusCode":301},
      {"source":"/wp-content/uploads/2021/10/Large-size-red.png","destination":"/data/media/Large-size-red.png","statusCode":301},
      {"source": "/general/stall", "destination": "/general/principles-of-flight/stall","statusCode":301},
      {"source": "/general/angle-of-attack", "destination": "/general/principles-of-flight/angle-of-attack","statusCode":301},
      {"source": "/general/relative-wind", "destination": "/general/principles-of-flight/relative-wind","statusCode":301},
      {"source": "/general/four-forces-of-flight", "destination": "/general/principles-of-flight/four-forces-of-flight","statusCode":301},
      {"source": "/general/main-structure-of-airplanes", "destination": "/general/principles-of-flight/main-structure-of-airplanes","statusCode":301},
      {"source": "/general/temperature-inversion", "destination": "/general/meteorology/temperature-inversion","statusCode":301},
      {"source": "/general/lapse-rate", "destination": "/general/meteorology/lapse-rate","statusCode":301},
      {"source": "/general/temperature", "destination": "/general/meteorology/temperature","statusCode":301},
      {"source": "/general/earth-atmosphere-composition-and-structure", "destination": "/general/meteorology/earth-atmosphere-composition-and-structure","statusCode":301},
    ]
  }
}

module.exports = nextConfig
