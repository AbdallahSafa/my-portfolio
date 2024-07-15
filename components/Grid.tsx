import React from 'react'
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid>
                {[{ title: "About Me", description: "I am a software engineer", id: 1 }]
                     .map(item => (
                    <BentoGridItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid