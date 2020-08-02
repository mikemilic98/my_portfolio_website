  
import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class Timeline extends Component {
  render() {
    return (
      <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="May 2020 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Department of National Defense Canada</h3>
              <h4 className="vertical-timeline-element-subtitle">Intern</h4>
              <p>
                 Software Development and DevOps
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="June 2020 - present"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Comboosters</h3>
              <h4 className="vertical-timeline-element-subtitle"> Technology start up </h4>
              <p>
                Web Developer
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="January 2019 - September 2019"
              iconStyle={{ background: 'rgb(255,165,0)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title"> Advanced Intellligent Systems</h3>
              <h4 className="vertical-timeline-element-subtitle">Intern</h4>
              <p>
                Embedded Software Intern
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2016 - present"
              iconStyle={{ background: 'rgb(34,139,34)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Bachelor of Applied Science - UBC</h3>
              <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
              <p>
                Electrical and Computer Engineering
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="20011 - 2016"
              iconStyle={{ background: 'rgb(138,43,226)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Seaquam Secondary School</h3>
              <h4 className="vertical-timeline-element-subtitle">Highschool</h4>
              <p>
                Highschool student, participated in robotics and school cross country / track teams
              </p>
            </VerticalTimelineElement>
      </VerticalTimeline>
    )
  }
}