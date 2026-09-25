import { createFileRoute } from "@tanstack/react-router";
import { HubPage, hubSeo } from "@/components/hub-page";
import { hubs } from "@/lib/hubs";

const hub = hubs["glycolkoelers"];

export const Route = createFileRoute("/glycolkoelers")({
  head: () => hubSeo(hub, "nl"),
  component: () => <HubPage hubKey="glycolkoelers" lang="nl" />,
});
