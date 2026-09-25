import { createFileRoute } from "@tanstack/react-router";
import { HubPage, hubSeo } from "@/components/hub-page";
import { hubs } from "@/lib/hubs";

const hub = hubs["glycolkoelers"];

export const Route = createFileRoute("/fr/refroidisseurs-glycol")({
  head: () => hubSeo(hub, "fr"),
  component: () => <HubPage hubKey="glycolkoelers" lang="fr" />,
});
