import { useState, useEffect } from "react";
import { Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import PerformanceCase from "../../components/work-tabs/performance-case/PerformanceCase";
import VirtualizationCase from "../../components/work-tabs/virtualization-case/VirtualizationCase";
import TableCase from "../../components/work-tabs/table-case/TableCase";
import "./WorkPage.scss";

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState("performance");
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
                <Nav.Link eventKey="performance">Performance Case</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="virtualization">Virtualization Case</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tables">Table Case</Nav.Link>
              </Nav.Item>
            </Nav>

            <TabContent className={`work-content ${isAnimating ? "animating" : ""}`}>
              <TabPane eventKey="performance">
                <PerformanceCase />
              </TabPane>
              <TabPane eventKey="virtualization">
                <VirtualizationCase />
              </TabPane>
              <TabPane eventKey="tables">
                <TableCase />
              </TabPane>
            </TabContent>
          </div>
        </TabContainer>
      </div>
    </div>
  );
}
