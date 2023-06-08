import "./Timeline.css";
import { ReactComponent as TimeIcon } from "./date.svg";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";


function Timeline() {
  let timeIconStyles = { background: "#D3D3D3" };

  return (
    <div >
      <h1 className="title">Modern Art Timeline</h1>
      <VerticalTimeline >
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              id={element.key}
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={timeIconStyles}
              icon={<TimeIcon />}
            >
              <div id="imagecontainer" style={{backgroundImage: `url(${element.image})`}}>
                <p>  </p>
              </div>
              <div id="container">
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href={`/movement/${element.title}`}
                >
              
                  {element.buttonText}
                </a>
              )}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;