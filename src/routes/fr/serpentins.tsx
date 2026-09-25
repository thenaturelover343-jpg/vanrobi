import { createFileRoute } from "@tanstack/react-router";
import { HubPage, hubSeo } from "@/components/hub-page";
import { hubs } from "@/lib/hubs";

const hub = hubs["serpentijnen"];

export const Route = createFileRoute("/fr/serpentins")({
  head: () => hubSeo(hub, "fr"),
  component: () => <HubPage hubKey="serpentijnen" lang="fr" />,
});
