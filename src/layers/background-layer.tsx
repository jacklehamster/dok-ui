import React from "react";
import { Auxiliary } from "../core/auxiliary";

export interface BackgroundImageAuxiliary extends Auxiliary {
    image: string;
    width?: string | number;
    height?: string | number;
}

export function BackgroundImageLayer({ image, width, height }: BackgroundImageAuxiliary) {
    return <div style={{
            backgroundImage: `url("${image}")`,
            width,
            height,
        }} />;
}

export interface BackgroundImageEntity {
    backgroundImage?: BackgroundImageAuxiliary;
}
