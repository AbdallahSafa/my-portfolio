import React from 'react';
import { WavyBackground } from './ui/wavy-background';
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import MagicButton from "@/components/ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa";

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <WavyBackground className="max-w-4xl mx-auto pb-40 absolute ">
                <div className="flex justify-center my-20 z-10">
                    <div
                        className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
                        <h2 className="uppercase tracking-widest test-xs text-center text-white max-w-80">
                            Hello I am
                        </h2>
                        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                            Abdallah Safa
                        </p>
                        <TextGenerateEffect className="text-center md:text-5xl lg:text-6xl"
                                            words="Computer Science @ Vanderbilt University"/>
                        <p className="text-center mb-4 mt-4 text-sm md:text-lg lg:text-2xl">
                            Brooklyn NY
                        </p>
                        <a href="#about" >
                            <MagicButton
                                title={"About me"}
                                icon={<FaLocationArrow/>}
                                    position = "right"/>
                        </a>
                    </div>
                </div>
            </WavyBackground>


        </div>
    );
};

export default Hero;