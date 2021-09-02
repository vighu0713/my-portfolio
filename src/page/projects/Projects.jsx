import React from 'react'
import '../projects/projects.css'
import project1 from '../../Images/project1.jpg'
import project2 from '../../Images/todo.png'
import project3 from '../../Images/weather1.jpg'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import leaf1 from '../../Images/illustrations/leaf-cyan-2.png'
import leaf2 from '../../Images/illustrations/leaf-cyan-lg.png'
import leaf3 from '../../Images/illustrations/leaf-yellow.png'
import leaf4 from '../../Images/illustrations/leaf-pink.png'
import leaf5 from '../../Images/illustrations/dots-group-v.png'
import leaf6 from '../../Images/illustrations/dots-group-sm.png'

function Projects() {
    return (
        <>
            <div className="projects">
                <div className="leaves">
                    <img src={leaf1} alt="leaf" className="pleaf1" />
                    <img src={leaf2} alt="leaf" className="pleaf2" />
                    <img src={leaf3} alt="leaf" className="pleaf3" />
                    <img src={leaf4} alt="leaf" className="pleaf4" />
                    <img src={leaf5} alt="leaf" className="pleaf5" />
                    <img src={leaf6} alt="leaf" className="pleaf6" />
                </div>
                <div className="projectWrapper max-width1 m-auto">
                    <div className="ProjectTitle">
                        <h2 className="title">My Projects</h2>
                    </div>
                    <div className="projectCarousel">
                        <div className="projectCard">
                            <img src={project1} alt="project1" className="projectImg" />
                            <div className="Projectdesc">
                                <h3 className="Projectname">Snake Game</h3>
                                <p className="projectInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique, voluptate consequatur et dignissimos nulla quos sit, provident dolor natus iste ratione ex nobis eligendi quibusdam ipsa quia aliquid! Nobis?</p>
                                <hr className="projectHr"/>
                                <button className="projectBtn">View Project</button>
                            </div>
                        </div>
                        <div className="projectCard">
                            <img src={project2} alt="project1" className="projectImg" />
                            <div className="Projectdesc">
                                <h3 className="Projectname">To-Do List</h3>
                                <p className="projectInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique, voluptate consequatur et dignissimos nulla quos sit, provident dolor natus iste ratione ex nobis eligendi quibusdam ipsa quia aliquid! Nobis?</p>
                                <hr className="projectHr"/>
                                <button className="projectBtn">View Project</button>
                            </div>
                        </div>
            
                        <div className="projectCard">
                            <img src={project3} alt="project1" className="projectImg" />
                            <div className="Projectdesc">
                                <h3 className="Projectname">Snake Game</h3>
                                <p className="projectInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique, voluptate consequatur et dignissimos nulla quos sit, provident dolor natus iste ratione ex nobis eligendi quibusdam ipsa quia aliquid! Nobis?</p>
                                <hr className="projectHr"/>
                                <button className="projectBtn">View Project</button>
                            </div>
                            
                        </div>
                
                    </div>
                 
                        

                </div>
            </div>
        </>
    )
}

export default Projects
