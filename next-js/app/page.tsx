import Navbar from "@/components/ui/navbar/navbar";

export default async function Home() {

  return (
    <div className="flex items-center flex-col pt-20 gap-4 bg-neutral-950 text-white">
      <Navbar />
    </div>
  );
}
