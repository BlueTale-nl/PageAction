/**
 * This file was generated from PageAction.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue } from "mendix";

export interface PageActionContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    onLoad?: ActionValue;
}

export interface PageActionPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    onLoad: {} | null;
}
