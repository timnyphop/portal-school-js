import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
export const App=()=>{
    return(
        <main>
        <Header/>
        {children}
        <Footer/>
        </main>
        
    )
}