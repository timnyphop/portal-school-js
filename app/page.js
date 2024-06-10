import Styles from './page.module.css';
import { Banner } from "./components/Banner/Banner";
import { CardsList } from "./components/CardsListSection/CardsList";
import data from './components/data/data.json';
export default function Home(props) {

  return (
    <main className={Styles['page__main']}>
    <Banner/>
    <CardsList data={data}/>
    </main>
  );
}
