import { createFileRoute } from "@tanstack/react-router";
import { HubPage, hubSeo } from "@/components/hub-page";
import { hubs } from "@/lib/hubs";

const hub = hubs["tap-zuilen"];

export const Route = createFileRoute("/fr/colonnes-robinets")({
  head: () => hubSeo(hub, "fr"),
  component: () => <HubPage hubKey="tap-zuilen" lang="fr" />,
});
