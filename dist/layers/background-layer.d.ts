import React from "react";
import { Auxiliary } from "../core/auxiliary";
export interface BackgroundImageAuxiliary extends Auxiliary {
    image: string;
    width?: string | number;
    height?: string | number;
}
export declare function BackgroundImageLayer({ image, width, height }: BackgroundImageAuxiliary): React.JSX.Element;
export interface BackgroundImageEntity {
    backgroundImage?: BackgroundImageAuxiliary;
}
