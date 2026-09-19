import { getAnalyticsConfig, hasAnalytics } from "@/lib/analytics";

/**
 * Loads Plausible and/or GA only when env IDs are set at build time.
 * See lib/analytics.ts and README.
 */
export function Analytics() {
  const cfg = getAnalyticsConfig();
  if (!hasAnalytics(cfg)) return null;

  return (
    <>
      {cfg.plausibleDomain ? (
        <script
          defer
          data-domain={cfg.plausibleDomain}
          src="https://plausible.io/js/script.js"
        />
      ) : null}
      {cfg.gaMeasurementId ? (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${cfg.gaMeasurementId}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${cfg.gaMeasurementId}');`,
            }}
          />
        </>
      ) : null}
    </>
  );
}
