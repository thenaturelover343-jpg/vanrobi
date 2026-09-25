import { createFileRoute } from "@tanstack/react-router";
import { HubPage, hubSeo } from "@/components/hub-page";
import { hubs } from "@/lib/hubs";

const hub = hubs["bierkoelers"];

export const Route = createFileRoute("/fr/refroidisseurs-biere")({
  head: () => hubSeo(hub, "fr"),
  component: () => <HubPage hubKey="bierkoelers" lang="fr" />,
});
