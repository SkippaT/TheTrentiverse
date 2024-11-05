import { Fragment } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { EXPERIENCE } from "../data.js";

export default function Timeline() {

    return (
        <VerticalTimeline lineColor='#FFF'>
            {EXPERIENCE.map((experienceItem) => (
                <Fragment key={experienceItem.id}>
                    <VerticalTimelineElement
                        contentStyle={{
                            background: "#f5f5f5",
                            boxShadow: "5px 5px 10px #00000080",
                            borderRadius: 10,
                        }}
                        contentArrowStyle={{
                            borderRight: "0.4rem solid #19015b",
                        }}
                        date={experienceItem.date}
                        icon={
                            <span
                                className="material-icons"
                                style={{
                                    fontSize: "48px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >{experienceItem.icon}</span>
                        }
                        iconStyle={{
                            background: "#f3f3f3",
                        }}
                    >
                        <h3>{experienceItem.role}</h3>
                        <p>{experienceItem.company}</p>
                        <p>{experienceItem.description}</p>
                    </VerticalTimelineElement>
                </Fragment>
            ))}
        </VerticalTimeline>
    );
}