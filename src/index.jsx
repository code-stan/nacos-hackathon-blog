import ReactDom from 'react-dom/client';
import App from './Components/App';
import '../styles/style.scss'

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App/>)
