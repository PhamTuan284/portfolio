import React, { useState } from 'react';
import { TabContainer, Nav, TabContent, TabPane } from 'react-bootstrap';
import PerformanceCase from '../../components/work-tabs/performance-case/PerformanceCase';
import VirtualizationCase from '../../components/work-tabs/virtualization-case/VirtualizationCase';
import TableCase from '../../components/work-tabs/table-case/TableCase';
import ImageOptimizationCase from '../../components/work-tabs/image-optimization-case/ImageOptimizationCase';
import './WorkPage.scss';

const WorkPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('performance');

  const handleTabSelect = (tab: string | null) => {
    if (tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className="work-page">
      <TabContainer activeKey={activeTab} onSelect={handleTabSelect}>
        <Nav variant="tabs" className="work-tabs">
          <Nav.Item>
            <Nav.Link eventKey="performance">Performance Case</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="virtualization">Virtualization Case</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="table">Table Case</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="image-optimization">Image Optimization Case</Nav.Link>
          </Nav.Item>
        </Nav>

        <TabContent className="work-content">
          <TabPane eventKey="performance">
            <PerformanceCase />
          </TabPane>
          <TabPane eventKey="virtualization">
            <VirtualizationCase />
          </TabPane>
          <TabPane eventKey="table">
            <TableCase />
          </TabPane>
          <TabPane eventKey="image-optimization">
            <ImageOptimizationCase />
          </TabPane>
        </TabContent>
      </TabContainer>
    </div>
  );
};

export default WorkPage;
