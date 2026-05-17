import { AlumniHero } from "@/modules/alumni/components/alumni-hero";
import { AlumniArchive } from "@/modules/alumni/components/alumni-archive";
import { AlumniNetwork } from "@/modules/alumni/components/alumni-network";

export default function AlumniPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white pt-24 pb-32">
      <AlumniHero />
      <AlumniArchive />
      <AlumniNetwork />
    </main>
  );
}
