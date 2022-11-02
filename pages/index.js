
import styles from '../styles/Home.module.css'
export default function Home({singlepage}) {
  return (
    
    <div className={styles.container}>     
      <main className={styles.main}>  
      {singlepage.map((item) => <h1 key={item.id}>{item.slug}</h1>)}       
      </main>
    </div>
  )
}
export const getServerSideProps = async (context) => {
  const res = await fetch('https://www.adaptstoday.co.uk/wp-json/wp/v2/pages/');
  const singlepage = await res.json();
  return {
      props: {
          singlepage
      }
  }
}