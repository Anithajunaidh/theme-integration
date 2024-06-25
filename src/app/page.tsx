import Hero from "@/components/Hero";
const Home=()=>{
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between bg-th-background`}>
      <div>
        <Hero/>
      </div>
    </main>
  );
}
export default Home;