import { createFileRoute } from "@tanstack/react-router";
import { HubPage, hubSeo } from "@/components/hub-page";
import { hubs } from "@/lib/hubs";

const hub = hubs["kegkoelers"];

export const Route = createFileRoute("/kegkoelers")({
  head: () => hubSeo(hub, "nl"),
  component: () => <HubPage hubKey="kegkoelers" lang="nl" />,
});
