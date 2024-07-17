import React from 'react'
import {projects} from "@/data";
import {PinContainer} from "@/components/ui/3d-pin";
// import {PinPerspective} from "@/components/ui/3d-pin";

const Projects = () =>{
    return(
      <div className = "py-24" id = "projects">
          <h1 className = "heading">
              My {' '}<span className = "text-blue-800"> Projects</span>
          </h1>
          <div className = "flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
              {projects.map(({id,title,des,img,iconLists,link}) => (
                  <div key = {id} className="lg:min-h-[32.5rem] -h[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                      <PinContainer title={link} href={link}>
                          <div
                              className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] ">
                              <img src={img} alt={title} className="absolute bottom-0"/>

                          </div>
                          <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                              {title}
                          </h1>
                          <p className="lg:text-xl lg:font-normal font-light font-sm line-clamp-2">
                              {des}
                          </p>
                          <div className="flex items-center justify-between mt-7 mb-3 ">
                              <div className="flex items-center">
                                  {iconLists.map((icon, index) => (
                                      <div key={index}
                                           className="border border-white[.2] rounded-full lg:h-14 lg:w-12 w-10 h-10 flex justify-center items-center">
                                          <img src={icon} alt={icon} className="p-1.5"/>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </PinContainer>
                  </div>
              ))}
          </div>
      </div>
    );
}

export default Projects