import { createFileRoute } from "@tanstack/react-router";
import { HubPage, hubSeo } from "@/components/hub-page";
import { hubs } from "@/lib/hubs";

const hub = hubs["onderdelen"];

export const Route = createFileRoute("/fr/pieces")({
  head: () => hubSeo(hub, "fr"),
  component: () => <HubPage hubKey="onderdelen" lang="fr" />,
});
