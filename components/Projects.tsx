import React from 'react'
import {projects} from "@/data";

const Projects = () =>{
    return(
      <div className = "py-24" id = "projects">
          <h1 className = "heading">
              My {' '}<span className = "text-blue-800"> Projects</span>
          </h1>
          <div className = "flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
              {projects.map(({id,title,des,img,iconLists,link}) => (
                  <div key = {id} className="lg:min-h-[32.5rem] -h[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                    {title}
                  </div>
              ))}
          </div>
      </div>
    );
}

export default Projects