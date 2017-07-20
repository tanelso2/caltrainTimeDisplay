import * as React from "react";
import { TrainTime } from "../TrainTime";
import { TrainRoute } from "../../constants/trainTimes";

export namespace TrainTimesList {
    export interface Props {
        timesList: TrainRoute[];
        time: Date;
    }
    
    export interface State {
    }
}

export class TrainTimesList extends React.Component<TrainTimesList.Props, TrainTimesList.State> {

    getUpcomingTimes(): TrainRoute[] {
        const time = this.props.time;
        const routeList = this.props.timesList;
        const hour = time.getHours();
        const minute = time.getMinutes();
        const maxSize = 6;
        const upcomingTimes: TrainRoute[] = [];
        const idx = routeList.findIndex(route => {
            const startHour = route.startTime.hour;
            const startMinute = route.startTime.minute;
            return hour < startHour || hour == startHour && minute <= startMinute;
        });
        const length = routeList.length;
        for (let i = 0; i < maxSize; i++) {
            upcomingTimes.push(routeList[(idx + i) % length]);
        }
        return upcomingTimes;
    }

    render() {
        const upcomingTimes = this.getUpcomingTimes();
        return (
            <div>
                {upcomingTimes.map((trainTime, idx) =>
                <TrainTime
                    key={idx}
                    routeInfo={trainTime}
                />
                )}
            </div>
        );
    }
}