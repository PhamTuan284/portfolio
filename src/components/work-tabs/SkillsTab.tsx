import { FEStacksList, BEStacksList } from '../../constants/AboutMePageConstants';

export default function SkillsTab() {
  return (
    <div className="skills-container">
      <div className="skills-section">
        <h2>Frontend Skills</h2>
        <div className="skills-grid">
          {FEStacksList.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.imgUrl} alt={skill.text} />
              <span>{skill.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="skills-section">
        <h2>Backend Skills</h2>
        <div className="skills-grid">
          {BEStacksList.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.imgUrl} alt={skill.text} />
              <span>{skill.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 