import Header from './component/1-header/Header';
import Hero from './component/2-hero/Hero';
import Main from './component/3-main/Main';
import Contact from './component/4-contact/Contact';
import Footer from './component/5-footer/Footer';
import { useEffect ,useState  } from 'react';


function App() {
  useEffect(() => {
    window.addEventListener("scroll" , () => { 
      if (scrollY > 300) {
        setshowScrollBtn(true);
      }else{
        setshowScrollBtn(false);
      }
     })
  
    
  });
  const [showScrollBtn, setshowScrollBtn] = useState(false)
  
  return <div id='up' className="container">
  <Header/>
  
  <Hero/>
  <div className="divider"/>
  <Main/>
  <div className="divider"/>
  <Contact/>
  <div className="divider"/>
  <Footer/>
  <a style={{opacity: showScrollBtn ? 1:0 , transition: 0.1}} href='#up'>
  <button className="icon-keyboard_arrow_up scroll2Top"></button>
  </a>
   </div>;
}

export default App;
