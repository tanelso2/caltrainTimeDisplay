import * as React from "react";

export namespace SwitchButton {
    export interface Props {
        onClick: () => void;
    }
    
    export interface State {
    }
}

export class SwitchButton extends React.Component<SwitchButton.Props, SwitchButton.State> {
    render() {
        return (
            <div>
                <input type="checkbox"
                    onChange={this.props.onClick}>
                </input>
            </div>
        );
    }
}
