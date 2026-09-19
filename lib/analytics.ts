/**
 * Optional analytics hook.
 *
 * Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN (e.g. "thenaturelover343-jpg.github.io")
 * and/or NEXT_PUBLIC_GA_MEASUREMENT_ID (e.g. "G-XXXXXXXX") in the environment
 * at build time. If unset, no tracking scripts are loaded.
 *
 * Do not invent tracking IDs.
 */

export type AnalyticsConfig = {
  plausibleDomain?: string;
  gaMeasurementId?: string;
};

export function getAnalyticsConfig(): AnalyticsConfig {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim() || undefined;
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || undefined;
  return { plausibleDomain, gaMeasurementId };
}

export function hasAnalytics(cfg: AnalyticsConfig = getAnalyticsConfig()): boolean {
  return Boolean(cfg.plausibleDomain || cfg.gaMeasurementId);
}
