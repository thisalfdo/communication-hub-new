import "./App.css";
import { Route, BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={ChatPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
