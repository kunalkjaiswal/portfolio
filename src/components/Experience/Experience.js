import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';

export default class Experience extends Component {

    render() {
        let experience = [{ work: [], tech: [] }]
        if (this.props.data) {
            experience = this.props.data;
        }
        return (
            <div className="row experience container" id="experience">
                <div className="line-text">
                    <h4>Experience</h4>
                </div>
                <div className="eperience-timeline">
                    <VerticalTimeline>
                        {experience.map((exp, index) => {
                            return (
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#fff', color: '#000' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                                    date={exp.date}
                                    icon={<img src={exp.image} className={exp.imgClass} />}
                                    key={index}
                                >
                                    <h3 className="vertical-timeline-element-title">{exp.title}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
                                    <ul className="work-list">
                                        {
                                            exp.work.map((work, i) => {
                                                return (
                                                    <li key={i}>
                                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                        <span className="list-item">{work}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div className="technologies row">
                                        {
                                            exp.tech.map((tech, j) => {
                                                return (
                                                    <div key={j} className="tech-item">
                                                        <span>{tech}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </VerticalTimelineElement>
                            )
                        })
                        }
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work work-last-node"
                            contentStyle={{ background: '#fff', color: '#000' }}
                            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                            icon={<i className="fa fa-briefcase" aria-hidden="true"></i>}
                        ></VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div >
        );
    }
}