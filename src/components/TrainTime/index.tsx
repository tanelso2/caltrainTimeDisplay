import * as React from "react";
import { TrainRoute } from "../../constants/trainTimes";

export namespace TrainTime {
    export interface Props {
        routeInfo: TrainRoute;
    }
    
    export interface State {
    }
}

export class TrainTime extends React.Component<TrainTime.Props, TrainTime.State> {
    render() {
        const routeInfo = this.props.routeInfo;
        return (
            <div>
                <h1>{routeInfo.startTime.str}</h1>
                <h3>{routeInfo.endTime.str}</h3>
            </div>
        );
    }
}