/**
 * Awwwards-pass — 21 sep 2026.
 *
 * Zet een vlag op `false` om dát onderdeel terug te draaien.
 * visualRefresh = licht “koude” design (exp-v2). false = origineel donker.
 */
export const experience = {
  newSlogan: true,
  nativeForm: true,
  visualRefresh: false,
  compare: true,
  socialProof: false,
  sizer: true,
};

export const slogans = {
  original: "Koude die de bar draagt.",
  current: "Stabiele koude. Elke shift.",
} as const;

export function tagline() {
  return experience.newSlogan ? slogans.current : slogans.original;
}
