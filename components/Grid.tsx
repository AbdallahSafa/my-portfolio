import React from 'react'
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";
import {gridItems} from "@/data";

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid className="mb-20">
                {gridItems
                     .map(({id,title,description,className,img,imgClassName,titleClassName,spareImg,spareImgClassName}) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img = {img}
                        imgClassName = {imgClassName}
                        titleClassName = {titleClassName}
                        spareImg = {spareImg}
                        spareImgClassName={spareImgClassName}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid