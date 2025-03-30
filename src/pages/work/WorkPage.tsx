import { useState, useEffect } from 'react';
import { Nav, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import ProjectsTab from '../../components/work-tabs/ProjectsTab';
import ExperienceTab from '../../components/work-tabs/ExperienceTab';
import SkillsTab from '../../components/work-tabs/SkillsTab';
import PerformanceCase from '../../components/work-tabs/PerformanceCase';
import './WorkPage.scss';

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState('projects');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabSelect = (key: string | null) => {
    if (key && key !== activeTab) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab(key);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="work-page">
      <div className="container-fluid">
        <TabContainer 
          id="work-tabs" 
          activeKey={activeTab} 
          onSelect={handleTabSelect}
          transition={false}
        >
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
              <Nav.Item>
                <Nav.Link eventKey="performance">Performance Case</Nav.Link>
              </Nav.Item>
            </Nav>

            <TabContent className={`work-content ${isAnimating ? 'animating' : ''}`}>
              <TabPane eventKey="projects">
                <ProjectsTab />
              </TabPane>
              <TabPane eventKey="experience">
                <ExperienceTab />
              </TabPane>
              <TabPane eventKey="skills">
                <SkillsTab />
              </TabPane>
              <TabPane eventKey="performance">
                <PerformanceCase />
              </TabPane>
            </TabContent>
          </div>
        </TabContainer>
      </div>
    </div>
  );
}
