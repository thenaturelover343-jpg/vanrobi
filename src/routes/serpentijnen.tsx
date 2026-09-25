import { createFileRoute } from "@tanstack/react-router";
import { HubPage, hubSeo } from "@/components/hub-page";
import { hubs } from "@/lib/hubs";

const hub = hubs["serpentijnen"];

export const Route = createFileRoute("/serpentijnen")({
  head: () => hubSeo(hub, "nl"),
  component: () => <HubPage hubKey="serpentijnen" lang="nl" />,
});
