import React,{Fragment} from 'react';
import StickyHeader from '../Header/StickyHeader'
import Sidebar from '../Sidebar/Sidebar'
import faker from 'faker'
import './dashboard.scss'

export default () => {
  const [sideBarExpanded, setSideBarExpanded] = React.useState(true);
  const width = sideBarExpanded ? '15%':'3.5%'
  const mainContentStyle = {
    marginLeft: sideBarExpanded ? "15%" : "3.5%", 
    transition: "margin 0.2s ease"
  };

  return ( <Fragment>
    <StickyHeader/>
    <div className="main-content">
      
        <Sidebar width={width} setSideBarExpanded={setSideBarExpanded} sideBarExpanded={sideBarExpanded} />
        
       <div className="container-fluid"> 
            
            <div className="dashboard body" style={mainContentStyle}>
            <p>{faker.lorem.paragraphs()}</p>
            <p>{faker.lorem.paragraphs()}</p>
            <p>{faker.lorem.paragraphs()}</p>
            <p>{faker.lorem.paragraphs()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            <p>{faker.lorem.paragraph()}</p>
            </div>

        </div>

     </div>
   
   
  
    </Fragment>

  ) 
}