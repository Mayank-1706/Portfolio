import React from 'react'
import './projects.css'

const project = () => {
  return (
    <div className='projects' id='projects'>
      <div className='project_info_parent'>
        <div className='project_info_child'>
          <p>MESHMRIZE | PECfest </p>
          <p>November 2022 </p>
          <p>Built an autonomous robot that can follow a white line and keep track of directions while going through the maze, and complete the path in the least possible time </p>
          </div>
        <div className='project_info_child'>
          <p>EdNite | Business Research Intern </p>
          <p>August 2022 - September 2022</p>
          <p>Key responsibilities:
          Evaluated market potential & customer demands in a city, benchmarking competition to identify areas of opportunity & mitigate risk.
          Communicated with the business decision-makers and gathered more information regarding the opportunities and their competition. </p>
        </div>
      </div>
      
      <h1 className='project_heading'>Projects</h1>
      </div>


  )
}

export default project
