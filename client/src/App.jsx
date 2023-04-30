import './App.css'
import Header from "./components/Header.jsx";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {Clients} from "./components/Clients.jsx";

const client = new ApolloClient({
    uri:"http://localhost:4000/graphql",
    cache:new InMemoryCache()
})

function App() {

    return (
        <ApolloProvider client={client}>
            <Header/>
            <div className="container">
                <Clients/>
            </div>
        </ApolloProvider>
    )
}

export default App


