import "./App.css";
import ReactKitSelect from "./components/kitSelect/KitSelect";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <div
        className="mt-10 mx-auto bg-white shadow-lg rounded-lg  w-full md:w-4/5 "
        style={{ borderRadius: "30px" }}
      >
        <ReactKitSelect />
      </div>
    </div>
  );
}

export default App;
