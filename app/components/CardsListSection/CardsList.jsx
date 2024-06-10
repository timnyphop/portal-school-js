import Styles from './CardsList.module.css';
import Link from "next/link";
export const CardsList=(props)=>{
  const colleges=props.data.filter(item => item.classes === 'College');
  const university=props.data.filter(item=>item.classes==='vuz');
    return(
      
      <div className={Styles['container']}>
        <h1 className={Styles['card-title']}>Колледжи: </h1>
        <div className={Styles['cards_container']}>
        
        <div className={Styles['CardsList']} id='recommendations'>
            {colleges.map((item, index) => (
              <Link href={`/school/${item.id}`} key={item.id} className={Styles['card__link']}>
                
       <div className={Styles['Cards']}>
        
         <h1 className={Styles['Card-title__text']}key={index}>{item.name}</h1>
         <p className={Styles['Card-description__text']} key={index}>{item.description}</p>
         
       </div>
       </Link>
      ))}
        
        </div>
        </div>
        <h1 className={Styles['card-title']}>Университеты</h1>
        <div className={Styles['cards_container']}>
        
        <div className={Styles['CardsList']} id='recommendations'>
            {university.map((item, index) => (
       <div className={Styles['Cards']}>
         <h1 className={Styles['Card-title__text']}key={index}>{item.name}</h1>
         <p className={Styles['Card-description__text']} key={index}>{item.description}</p>
       </div>
      ))}
        </div>
        </div>
        </div>

    )

}