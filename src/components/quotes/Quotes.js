import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './Quotes.module.css'
import Quote from './quote/Quote'

import Particles from 'react-tsparticles'

const ParticlesParams = {
    "autoPlay": true,
    "background": {
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover",
        "opacity": 1
    },
    "backgroundMask": {
        "composite": "destination-out",
        "cover": {
            "color": {
                "value": "#fff"
            },
            "opacity": .2
        },
        "enable": false
    },
    "fullScreen": {
        "enable": true,
        "zIndex": -1
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
    "manualParticles": [],
    "motion": {
        "disable": false,
        "reduce": {
            "factor": 4,
            "value": true
        }
    },
    "particles": {
        "collisions": {
            "bounce": {
                "horizontal": {
                    "random": {
                        "enable": true,
                        "minimumValue": 0.5
                    },
                    "value": 1
                },
                "vertical": {
                    "random": {
                        "enable": true,
                        "minimumValue": 0.5
                    },
                    "value": 2
                }
            },
            "enable": true,
            "mode": "bounce",
            "overlap": {
                "enable": true,
                "retries": 5
            }
        },
        "color": {
            "value": "random",
          },
        "destroy": {
            "mode": "none",
            "split": {
                "count": 1,
                "factor": {
                    "random": {
                        "enable": true,
                        "minimumValue": 0
                    },
                    "value": 3
                },
                "rate": {
                    "random": {
                        "enable": true,
                        "minimumValue": 0
                    },
                    "value": {
                        "min": 4,
                        "max": 15
                    }
                }
            }
        },
        "life": {
            "count": 0,
            "delay": {
                "random": {
                    "enable": true,
                    "minimumValue": 0
                },
                "value": 0,
                "sync": false
            },
        },
        "links": {
            "blink": true,
            "color": {
                // "value": "#E76F51"
                "value": "#bbbbbb"
            },
            "consent": false,
            "distance": 375,
            "enable": false,
            "frequency": .25,
            "opacity": 1,
            "triangles": {
                "enable": true,
                "frequency": .33,
                "color": {
                    "value": "#F4A261",
                },
            },
            "width": 2,
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
            "direction": "none",
            "drift": 0,
            "enable": true,
            "outModes": {
                "default": "bounce",
                // "bottom": "out",
                // "left": "out",
                // "right": "out",
                // "top": "out"
            },
            "random": true,
            "size": true,
            "speed": 1,
            "straight": true,
            "vibrate": false,
            "warp": true
        },
        "number": {
            "density": {
                "enable": false,
                "area": 1000,
                "factor": 2000
            },
            "limit": 50,
            "value": 3
        },
        "opacity": {
            "random": {
                "enable": true,
                "minimumValue": 0.2,
                "maximumValue": 0.75
            },
            "animation": {
                "count": 1,
                "enable": false,
                "speed": 0.2,
                "sync": true,
                "destroy": "none",
                "minimumValue": 0.6,
                "startValue": "random"
            }
        },
        "reduceDuplicates": true,
        "shape": {
            "options": {},
            "type": "circle"
        },
        "size": {
            "random": {
                "enable": true,
                "minimumValue": 1
            },
            "value": {
                "min": 1,
                "max": 95
            },
            "animation": {
                "count": 0,
                "enable": true,
                "speed": 2,
                "sync": true,
                "destroy": "none",
                "minimumValue": 0,
                "startValue": "random"
            }
        },
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "responsive": [],
    "themes": []
}



export default function Quotes() {
    const SITE_ID = "d0798c62-bf24-49c9-a7ee-6fe52d403f7c"
    const FORM_ID = "600d5835182c38000865997c"

    const [quotes, setQuotes] = useState([
        {
            data: {
                name: "",
                email: "",
                quote: ""
            }
        }])
    const NetlifyAPI = require('netlify')

    useEffect(() => {
        fetchSubmissions().then(data => {
            setQuotes(data)
        })
    }, [])

    async function fetchSubmissions() {
        const client = new NetlifyAPI('npBCRPCE6SDwLqTh_ijnAw_byN7UnSX4nINPHeM5tN4')
        const submissions = await client.listFormSubmissions({
            form_id: FORM_ID
        })
        return submissions
    }

    let history = useHistory()

    const pushQuotes = e => {
        history.push('/submit/quote')
    }

    return (
        <div className={styles.page}>
            <Particles classname={styles.particles} width="100%" height="90vh" id="tsparticles" options={ParticlesParams} />
            <div className={styles.quotes}>
                <button className={styles.add} onClick={pushQuotes}>+</button>
                {quotes.map(q => (
                    <Quote key={q.data.quote} publisher={q.name} quote={q.data.quote} />
                ))}
            </div>
        </div>
    )
}