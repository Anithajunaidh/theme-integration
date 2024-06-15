import Hero from "@/components/Hero";
const Home=()=>{
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-2 bg-sharedButtonBackground`}>
      <div>
        <Hero/>
      </div>
    </main>
  );
}
export default Home;