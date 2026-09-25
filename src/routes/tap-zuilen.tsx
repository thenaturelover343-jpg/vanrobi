import { createFileRoute } from "@tanstack/react-router";
import { HubPage, hubSeo } from "@/components/hub-page";
import { hubs } from "@/lib/hubs";

const hub = hubs["tap-zuilen"];

export const Route = createFileRoute("/tap-zuilen")({
  head: () => hubSeo(hub, "nl"),
  component: () => <HubPage hubKey="tap-zuilen" lang="nl" />,
});
