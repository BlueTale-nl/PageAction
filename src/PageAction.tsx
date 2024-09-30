import { Component, ReactNode } from "react";

import { PageActionContainerProps } from "../typings/PageActionProps";

export class PageAction extends Component<PageActionContainerProps> {
    componentDidMount() {
        this.props.onLoad?.canExecute && this.props.onLoad.execute();
    }
    render(): ReactNode {
        return null;
    }
}
