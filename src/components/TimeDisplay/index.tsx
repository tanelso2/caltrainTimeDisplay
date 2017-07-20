import * as React from "react";
import * as dateformat from "dateformat";

export namespace TimeDisplay {
    export interface Props {
        time: Date;
    }
    export interface State {
    }
}

export class TimeDisplay extends React.Component<TimeDisplay.Props, TimeDisplay.State> {
    render() {
        const timeString = dateformat(this.props.time, "H:MM:ss");
        return (
            <div>
                <h1>{timeString}</h1>
            </div>
        );
    }
}
