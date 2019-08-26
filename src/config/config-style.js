// Screen Sizes
export const xsEdgeMin = 360;
export const xsPlusMin = 768;
export const smMin = 992;
export const mdMin = 1440;
export const lgMin = 1920;
export const xsMax = xsEdgeMin - 1;
export const xsEdgeMax = xsPlusMin - 1;
export const xsPlusMax = smMin - 1;
export const smMax = mdMin - 1;
export const mdMax = lgMin - 1;

// Media Query Ranges
export const mediaxs = `screen and (max-width: ${xsMax}px)`;
export const mediaxsEdge = `screen and (min-width: ${xsEdgeMin}px) and (max-width: ${xsEdgeMax}px)`;
export const mediaxsPlus = `screen and (min-width: ${xsPlusMin}px) and (max-width: ${xsPlusMax}px)`;
export const mediasm = `screen and (min-width: ${smMin}px) and (max-width: ${smMax}px)`;
export const mediamd = `screen and (min-width: ${mdMin}px) and (max-width: ${mdMax}px)`;
export const medialg = `screen and (min-width: ${lgMin}px)`;
export const mediaxsEdgeAndUp = `screen and (min-width: ${xsEdgeMin}px)`;
export const mediaxsPlusAndUp = `screen and (min-width: ${xsPlusMin}px)`;
export const mediasmAndUp = `screen and (min-width: ${smMin}px)`;
export const mediamdAndUp = `screen and (min-width: ${mdMin}px)`;
export const mediaxsEdgeAndDown = `screen and (max-width: ${xsEdgeMax}px)`;
export const mediaxsPlusAndDown = `screen and (max-width: ${xsPlusMax}px)`;
export const mediasmAndDown = `screen and (max-width: ${smMax}px)`;
export const mediamdAndDown = `screen and (max-width: ${mdMax}px)`;
