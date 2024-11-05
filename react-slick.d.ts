// react-slick.d.ts

declare module 'react-slick' {
  import * as React from 'react';

  export interface SliderSettings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    arrows?: boolean;
    prevArrow?: React.ReactNode;
    nextArrow?: React.ReactNode;
    responsive?: Array<{
      breakpoint: number;
      settings: Partial<SliderSettings>;
    }>;
    // Add other settings as per the react-slick documentation
  }

  export default class Slider extends React.Component<SliderSettings> {}
}
