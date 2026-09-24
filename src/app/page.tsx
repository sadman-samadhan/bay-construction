import { getServices } from "@/sanity/client";
import { HomeClientWrapper } from "@/components/HomeClientWrapper";

export const dynamic = "force-dynamic";

export default async function Home() {
  const services = await getServices();
  return <HomeClientWrapper services={services} />;
}
