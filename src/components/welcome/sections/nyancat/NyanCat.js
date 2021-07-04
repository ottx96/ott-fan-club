import React from 'react'
import Particles from 'react-tsparticles'
import styles from './NyanCat.module.css'
import { Row } from 'react-bootstrap'

const particlesConfig =
{
    "autoPlay": true,
    "background": {
        "color": {
            "value": "#043564"
        },
        "image": "url('http://vincentgarreau.com/particles.js/assets/img/kbLd9vb_new.gif')",
        "position": "0 50%",
        "repeat": "no-repeat",
        "size": "60%",
        "opacity": 1
    },
    "fullScreen": {
        "enable": false,
        "zIndex": 10
    },
    "detectRetina": true,
    "fpsLimit": 60,
    "infection": {
        "cure": false,
        "delay": 0,
        "enable": false,
        "infections": 0,
        "stages": []
    },
    "interactivity": {
        "detectsOn": "canvas",
        "events": {
            "onClick": {
                "enable": true,
                "mode": "repulse"
            },
            "onDiv": {
                "selectors": [],
                "enable": false,
                "mode": [],
                "type": "circle"
            },
            "onHover": {
                "enable": true,
                "mode": "grab",
            },
            "resize": true
        },
        "modes": {
            "attract": {
                "distance": 200,
                "duration": 0.4,
                "easing": "ease-out-quad",
                "factor": 1,
                "maxSpeed": 50,
                "speed": 1
            },
            "bounce": {
                "distance": 200
            },
            "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 8,
                "size": 40
            },
            "connect": {
                "distance": 80,
                "links": {
                    "opacity": 0.5
                },
                "radius": 60
            },
            "grab": {
                "distance": 75,
                "links": {
                    "blink": true,
                    "consent": false,
                    "opacity": 0.5
                }
            },
            "light": {
                "area": {
                    "gradient": {
                        "start": {
                            "value": "#ffffff"
                        },
                        "stop": {
                            "value": "#000000"
                        }
                    },
                    "radius": 1000
                },
                "shadow": {
                    "color": {
                        "value": "#000000"
                    },
                    "length": 2000
                }
            },
            "push": {
                "quantity": 5
            },
            "remove": {
                "quantity": 2
            },
            "repulse": {
                "distance": 60,
                "duration": 0.4,
                "factor": 5,
                "speed": 1,
                "maxSpeed": 10,
                "easing": "ease-out-quad"
            },
            "slow": {
                "factor": 3,
                "radius": 200
            },
            "trail": {
                "delay": 1,
                "pauseOnStop": false,
                "quantity": 1
            }
        }
    },
    "manualParticles": [],
    "motion": {
        "disable": false,
        "reduce": {
            "factor": 4,
            "value": true
        }
    },
    "particles": {
        "bounce": {
            "horizontal": {
                "random": {
                    "enable": false,
                    "minimumValue": 0.1
                },
                "value": 1
            },
            "vertical": {
                "random": {
                    "enable": false,
                    "minimumValue": 0.1
                },
                "value": 1
            }
        },
        "collisions": {
            "bounce": {
                "horizontal": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0.1
                    },
                    "value": 1
                },
                "vertical": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0.1
                    },
                    "value": 1
                }
            },
            "enable": false,
            "mode": "bounce",
            "overlap": {
                "enable": true,
                "retries": 0
            }
        },
        "color": {
            "value": "#ffffff",
            "animation": {
                "h": {
                    "count": 0,
                    "enable": false,
                    "offset": 0,
                    "speed": 1,
                    "sync": true
                },
                "s": {
                    "count": 0,
                    "enable": false,
                    "offset": 0,
                    "speed": 1,
                    "sync": true
                },
                "l": {
                    "count": 0,
                    "enable": false,
                    "offset": 0,
                    "speed": 1,
                    "sync": true
                }
            }
        },
        "destroy": {
            "mode": "none",
            "split": {
                "count": 1,
                "factor": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0
                    },
                    "value": 3
                },
                "rate": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0
                    },
                    "value": {
                        "min": 4,
                        "max": 9
                    }
                }
            }
        },
        "life": {
            "count": 0,
            "delay": {
                "random": {
                    "enable": false,
                    "minimumValue": 0
                },
                "value": 0,
                "sync": false
            },
            "duration": {
                "random": {
                    "enable": false,
                    "minimumValue": 0.0001
                },
                "value": 0,
                "sync": false
            }
        },
        "links": {
            "blink": false,
            "color": {
                "value": "#ffffff"
            },
            "consent": false,
            "distance": 150,
            "enable": false,
            "frequency": 1,
            "opacity": 0.4,
            "shadow": {
                "blur": 5,
                "color": {
                    "value": "#00ff00"
                },
                "enable": false
            },
            "triangles": {
                "enable": false,
                "frequency": 1
            },
            "width": 1,
            "warp": false
        },
        "move": {
            "angle": {
                "offset": 45,
                "value": 90
            },
            "attract": {
                "enable": false,
                "rotate": {
                    "x": 600,
                    "y": 1200
                }
            },
            "decay": 0,
            "distance": 0,
            "direction": "left",
            "drift": 0,
            "enable": true,
            "gravity": {
                "acceleration": 9.81,
                "enable": false,
                "maxSpeed": 50
            },
            "path": {
                "clamp": true,
                "delay": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0
                    },
                    "value": 0
                },
                "enable": false
            },
            "outModes": {
                "default": "out",
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
            },
            "random": false,
            "size": false,
            "speed": 6,
            "straight": true,
            "trail": {
                "enable": false,
                "length": 10,
                "fillColor": {
                    "value": "#000000"
                }
            },
            "vibrate": false,
            "warp": false
        },
        "number": {
            "density": {
                "enable": false,
                "area": 800,
                "factor": 1000
            },
            "limit": 0,
            "value": 100
        },
        "opacity": {
            "random": {
                "enable": true,
                "minimumValue": 0.35
            },
            "value": 0.7,
            "animation": {
                "count": 0,
                "enable": true,
                "speed": 0.2,
                "sync": false,
                "destroy": "none",
                "minimumValue": 0.3,
                "startValue": "random"
            }
        },
        "reduceDuplicates": false,
        "rotate": {
            "random": {
                "enable": false,
                "minimumValue": 0.5,
            },
            "value": 2,
            "animation": {
                "enable": true,
                "speed": 0.2,
                "sync": false
            },
            "direction": "clockwise",
            "path": false
        },
        "shadow": {
            "blur": 0,
            "color": {
                "value": "#000000"
            },
            "enable": false,
            "offset": {
                "x": 0,
                "y": 0
            }
        },
        "shape": {
            "options": {
                "star": {
                    "sides": 5
                }
            },
            "type": "star"
        },
        "size": {
            "random": {
                "enable": true,
                "minimumValue": 1
            },
            "value": {
                "min": 1,
                "max": 4
            },
            "animation": {
                "count": 0,
                "enable": false,
                "speed": 40,
                "sync": false,
                "destroy": "none",
                "minimumValue": 0.1,
                "startValue": "random"
            }
        },
        "stroke": {
            "width": 0
        },
        "twinkle": {
            "lines": {
                "enable": false,
                "frequency": 0.05,
                "opacity": 1
            },
            "particles": {
                "enable": false,
                "frequency": 0.05,
                "opacity": 1
            }
        }
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "responsive": [],
    "themes": []
}

export default function NyanCatSection() {

    return (
        <div className={styles.nyan}>
            <Particles style={{maxHeight: "33vh", minHeight: "33vh"}} id="tsparticles" options={particlesConfig} />
        </div>
    )
}
