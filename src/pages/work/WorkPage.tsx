import { useState } from 'react';
import { Nav, Tab, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import ProjectsTab from '../../components/work-tabs/ProjectsTab';
import ExperienceTab from '../../components/work-tabs/ExperienceTab';
import SkillsTab from '../../components/work-tabs/SkillsTab';
import './WorkPage.scss';

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="work-page fade-in-page">
      <div className="container-fluid py-5">
        <h1 className="text-center mb-5">My Work</h1>
        
        <TabContainer id="work-tabs" activeKey={activeTab} onSelect={(key) => setActiveTab(key || 'projects')}>
          <div className="work-layout">
            <Nav variant="pills" className="work-nav">
              <Nav.Item>
                <Nav.Link eventKey="projects">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="experience">Experience</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="skills">Skills</Nav.Link>
              </Nav.Item>
            </Nav>

            <TabContent className="work-content">
              <TabPane eventKey="projects">
                <ProjectsTab />
              </TabPane>
              <TabPane eventKey="experience">
                <ExperienceTab />
              </TabPane>
              <TabPane eventKey="skills">
                <SkillsTab />
              </TabPane>
            </TabContent>
          </div>
        </TabContainer>
      </div>
    </div>
  );
}
