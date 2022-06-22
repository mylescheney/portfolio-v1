import React from 'react';
import descriptions from '../resources/projectDescriptions';

const ProjectCard = ({title}) => {

    const description = descriptions[title];

    return (
        <div className='projectCard'>
            <div className='periImage'>
                <p>Picture goes here</p>
            </div>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}

export default ProjectCard;