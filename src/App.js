import Artical from './Articals/articals';
import './App.css';

export default function App() {
    return (
        <div className='container'>
            <Artical name="Yousof" email="yousof@gmail.com" job="frontend" />
            <Artical name="Mostafa" email="mostafa@gmail.com" job="backend" />
            <Artical name="Khaled" email="khaled@gmail.com" job="software tester" />
            <Artical name="Med7at" email="med7at@gmail.com" job="flutter" />
        </div>
    );
}