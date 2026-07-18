import { Layout } from "@/components";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgressBar />
      <Layout>{children}</Layout>
    </>
  );
}
