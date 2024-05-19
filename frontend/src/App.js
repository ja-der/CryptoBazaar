import ProviderContent from "./components/ProviderContent";

function App() {
  return (
    <div className="bg-amber-100 h-full flex flex-col items-center">
      <h1 className="text-3xl my-8">Blockchain Marketplace</h1>
      <ProviderContent />
      <div className="flex mt-auto mb-5">
        <button className="bg-green-300 hover:bg-green-500 text-black py-1 px-2 rounded">
          Add service
        </button>
      </div>
    </div>
  );
}

export default App;
