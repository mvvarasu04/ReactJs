// // page.tsx
// import MyButton from './mybutton'// Adjust path as needed
// import Message from './message'
// import Greeting from './greeting'
// import AddMessage from './newfile'

import Footer from "./footer";
import Navigation from "./navigation";
import Pagebody from "./pagebody";

export default function MyApp() {
  return (
    <div>
    <Navigation/>
    <Pagebody/>  
    <Footer/>
    </div>
    
  );

}


