import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <AppBar></AppBar>
      </Layout>
    </div>
  );
}

export default App;
