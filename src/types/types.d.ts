declare module '*.svg' {
  import React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

declare module '*.png';

declare module '*.gif';

declare module '*.webp';