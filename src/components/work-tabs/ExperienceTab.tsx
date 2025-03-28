import { experienceList } from '../../constants/AboutMePageConstants';

export default function ExperienceTab() {
  return (
    <div className="experience-list">
      {experienceList.map((experience, index) => (
        <div key={index} className="experience-item">
          <h3>{experience.company}</h3>
          <h4>{experience.role}</h4>
          <p>{experience.time}</p>
        </div>
      ))}
    </div>
  );
} 