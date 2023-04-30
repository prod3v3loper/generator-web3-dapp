// FRAMEWORKS
import { h, render, Component } from "preact"; // DEPENDENCIES
import { useState, useEffect } from 'preact/hooks';
import { Provider } from "redux-zero/preact"; // STORAGE

// HTML
// import './index.html';

// GLOBALS
// import GLOBALS from '../global.config.json'; 

// STYLE SCSS
import "./scss/style.scss";

// COMPONENTS
// import store from "../components/counter/store";
// import Counter from "../components/counter/counter";

// import TodoList from "../components/todolist/todolist";

// import Clock from "../components/clock/clock";

// METAMASK 
import detectEthereumProvider from '@metamask/detect-provider';

// MAKE THIS TO A COMPONENT //////////////////////////////////

let provider = await detectEthereumProvider();

// Check if MetaMask is installed on user's browser
if ( provider ) {

    console.log('Ethereum successfully detected!');

    // From now on, this should always be true:
    // provider === window.ethereum

    // Access the decentralized web!

    // Legacy providers may only have ethereum.sendAsync
    const chainId = await provider.request({
        method: 'eth_chainId'
    });

    console.log(chainId);

} else {
    alert("Please install MetaMask");
}

////////////////////////////////////////////////////////////////

// APP

const App = () => {

    // WE TRIGGER HERE  ALL HANDLING FOR METAMASK

    const [hasProvider, setHasProvider] = useState(0)
    const initialState = { accounts: [] }  
    const [wallet, setWallet] = useState(initialState)

    useEffect(() => {
        const getProvider = async () => {
        const provider = await detectEthereumProvider({ silent: true })
            setHasProvider(Boolean(provider))
        }
        getProvider()
    }, []);

    const updateWallet = async (accounts) => {     
        setWallet({ accounts });
    }                                                 

    const handleConnect = async () => {                
        let accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        updateWallet(accounts);
    }    

    return (
    <div id="st-wrapper">
        <div class="st-welcome">

            <h1>Injected Provider {hasProvider ? 'DOES Exist' : 'DOES NOT Exist. Install MetaMask'}</h1>

            { hasProvider &&  
            <div><button onClick={handleConnect}>Connect with MetaMask</button></div>
            }

            { wallet.accounts.length > 0 &&  
            <div>Wallet Accounts: { wallet.accounts[0] }</div>
            }

        </div>
        {/* <div class="st-counter">
            <Provider store={store}>
                <Counter />
            </Provider>
        </div> */}
        {/* <div class="st-todolist">
            <TodoList />
        </div> */}
        {/* <div class="st-clock">
            <Clock />
        </div> */}
    </div>
    );
};

// Render all in document body
let ref = render( <App />, document.body );

// HMR for developing local
if ( module.hot ) {
    module.hot.accept();
    module.hot.dispose( function () {
        // Clean document for refresh
        render( null, document.body, ref );
    } );
}