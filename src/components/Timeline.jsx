import React from "react";
import timeline from '../data/Timeline';
import TimelineItem from './TimelineItems'
import Title from "./Title";
import { forwardRef } from "react";
const Timeline = forwardRef((props,ref) =>{
    return (
        <div className="flex flex-col md:flex-row justify-center my-20" ref={ref}>
            <div className="w-full md:w-7/12">
                <Title>Timeline</Title>
                {timeline.map(item=>(
                <TimelineItem
                year = {item.year}
                title = {item.title}
                duration = {item.duration}
                details = {item.details}
                />
            ))}
            </div>
        </div>
    )
});
export default Timeline;