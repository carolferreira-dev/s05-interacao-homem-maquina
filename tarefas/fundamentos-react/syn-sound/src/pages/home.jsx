const Home = () => {
  return (
    <main className="pt-24 max-w-6xl mx-auto px-4">
      <form className="flex gap-2">
        <input
          type="text"
          placeholder="Buscar músicas ou artistas"
          className="w-full bg-slate-800 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-300 placeholder:text-slate-400"
        />
        <button
          type="submit"
          className="bg-orange-400 hover:bg-orange-300 text-slate-950 font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
        >
          Buscar
        </button>
      </form>

      <p className="text-slate-400 text-center y-20">
        As músicas vão aparecer aqui ...
      </p>
    </main>
  );
};

export default Home