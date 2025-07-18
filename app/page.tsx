import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";


export default function Home() {
  return (
    <main className="realtive bg-black flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip" suppressHydrationWarning={true}>
      <div className="max-w-[85rem] w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  );
}
