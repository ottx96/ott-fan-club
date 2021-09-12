import React from 'react'
import Particles from 'react-tsparticles'
import styles from './Landing.module.css'

const particlesConfig =
{
    "fpsLimit": 60,
    "fullScreen": {
        "enable": false,
        "zIndex": -10
    },
    "particles": {
      "number": {
        "value": 0,
        "density": {
          "enable": true,
          "area": 200
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": .45
      },
      "size": {
        "value": 3,
        "random": {
          "enable": true,
          "minimumValue": 1
        },
        "animation": {
          "enable": true,
          "speed": 2,
          "minimumValue": 1
        }
      },
      "move": {
        "enable": true,
        "speed": 0,
        "direction": "none",
        "random": false,
        "straight": false,
        "outMode": "out"
      }
    },
    "interactivity": {
      "detectsOn": "window",
      "events": {
        "onHover": {
          "enable": true,
          "mode": "trail"
        },
        "resize": true
      },
      "modes": {
        "trail": {
          "delay": 0.025,
          "quantity": 3,
          "particles": {
            "size": {
              "value": 50,
              "random": {
                "enable": true,
                "minimumValue": 15
              },
              "animation": {
                "enable": true,
                "speed": 1,
                "minimumValue": 15,
                "sync": true,
                "startValue": "min",
                "destroy": "max"
              }
            },
            "move": {
              "enable": true,
              "speed": 8,
              "direction": "none",
              "random": true,
              "straight": false,
              "outMode": "destroy"
            }
          }
        }
      }
    },
    "detectRetina": true,
    "background": {
      "color": "#000000",
      "image": "url(https://avante.biz/wp-content/uploads/Blue-Wallpapers/Blue-Wallpapers-002.jpg)",
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "cover"
    },
    "backgroundMask": {
      "enable": true,
      "cover": {
        "color": "#000000"
      }
    }
  }

export default function LandingSection() {
    return (
        <div className={styles.landing}>
            <Particles style={{minHeight: "100vh"}} id="tsparticles" options={particlesConfig} />
        </div>
    )
}
