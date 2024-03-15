import data from './../data.json';
import { useState } from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);
    let projects = data.projects;
    let selectedProject = projects[index];
    function handleClick() {
        if (index < data.projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }

    return (
        <div>
            <button onClick={handleClick}>
            Next
            </button>
            <h2>One of my favorite hobbies is {selectedProject.medium}. I am inspired by {selectedProject.artistInspo}</h2>
            <h4>{selectedProject.expressionOutput}</h4>
            <img src={selectedProject.artistPhoto} />
            <img src={selectedProject.photoURL} />
        </div>
    )
}