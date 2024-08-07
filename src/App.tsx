import gradient from "./assets/gradient.avif";

function App() {
  return (
    <div
      className="flex w-screen h-screen items-center justify-center"
      style={{ background: `url(${gradient})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <h3 className="bg-gray-100 bg-opacity-70 p-4 rounded shadow-lg">Under Development...</h3>
    </div>
  );
}

export default App;
