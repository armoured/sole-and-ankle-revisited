export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

const BREAKPOINTS = {
  laptopMax: 1300/16,
  tabletMax: 950/16,
  phoneMax: 600/16
};

export const QUERIES = {
  'laptopAndDown': `(max-width: ${BREAKPOINTS.laptopMax}rem)`,
  'tabletAndDown': `(max-width: ${BREAKPOINTS.tabletMax}rem)`,
  'phoneAndDown': `(max-width: ${BREAKPOINTS.phoneMax}rem)`
}