import { RouteComponentProps } from "react-router";
import * as React from "react";
import { SwitchButton } from "../../components/SwitchButton";
import { NORTH_BOUND_TIMES, SOUTH_BOUND_TIMES } from "../../constants/trainTimes";
import { TimeDisplay } from "../../components/TimeDisplay";
import { TrainTimesList } from "../../components/TrainTimesList";

export namespace TimeApp {
    export interface Props extends RouteComponentProps<void> {
    }

    export interface State {
        time: Date;
        northBound: boolean;
    }
}

export class TimeApp extends React.Component<TimeApp.Props, TimeApp.State> {
    constructor() {
        super();
        this.state = {
            time: new Date(Date.now()),
            northBound: true
        };
    }

    componentDidMount() {
        this.updateTime();
        setInterval(this.updateTime.bind(this), 1000);
    }

    onDirectionChange() {
        console.log('Changing direction');
        const oppositeDirection = !this.state.northBound;
        this.setState({northBound: oppositeDirection})
    }

    updateTime() {
        this.setState({time: new Date(Date.now())});
    }

    render() {
       const time = this.state.time;
       const timesList = this.state.northBound ? NORTH_BOUND_TIMES : SOUTH_BOUND_TIMES;
       const direction = this.state.northBound ? "NORTH BOUND" : "SOUTH BOUND"
       return (
           <div className='app'>
               <TimeDisplay
                time={time}/>
               <h1>{direction}</h1>
               <SwitchButton
                    onClick={this.onDirectionChange.bind(this)} />
                <TrainTimesList
                    time={time}
                    timesList={timesList}/>
           </div>
       )
   }
}

