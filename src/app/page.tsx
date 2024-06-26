import Hero from "@/components/Hero";
const Home = () => {
  return (
    <main>
      <div className={`flex min-h-screen flex-col items-center justify-between `}>
        <Hero />
      </div>
    </main>
  );
}
export default Home;