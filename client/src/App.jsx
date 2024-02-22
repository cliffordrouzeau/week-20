import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



const client = new ApolloClient({
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <div>
          <Navbar />        
          <main className="">
            <Outlet />
          </main>
          <Footer />
        </div>
    </ApolloProvider>
  );
}

export default App;
