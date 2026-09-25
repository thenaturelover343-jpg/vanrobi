import { createFileRoute } from "@tanstack/react-router";
import { HubPage, hubSeo } from "@/components/hub-page";
import { hubs } from "@/lib/hubs";

const hub = hubs["kegkoelers"];

export const Route = createFileRoute("/fr/refroidisseurs-fut")({
  head: () => hubSeo(hub, "fr"),
  component: () => <HubPage hubKey="kegkoelers" lang="fr" />,
});
