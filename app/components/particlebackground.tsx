"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  Engine,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadFull } from 'tsparticles';
import React from 'react'


function Particlebackground() {

    const [init, setInit] = useState(false); 
    useEffect(() => {
        initParticlesEngine(async (engine:Engine) => {
        
          await loadFull(engine);
          
        }).then(() => {
          setInit(true);
        });
      }, []);
    

    
      const options: ISourceOptions = useMemo(
        () => ({
     
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
           
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: MoveDirection.none,
              enable: true,
              outModes: {
                default: OutMode.out,
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }),
        [],
      );
    
      if (init) {
        return (
          <Particles
            id="tsparticles"
        
            options={options}
           
          />
        );
      }
    
      return <></>;
}

export default Particlebackground;

