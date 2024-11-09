import "./App.css";
import { router } from "./constants/router/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <main className="app">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
