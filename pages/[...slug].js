
import DOMPurify from 'isomorphic-dompurify';


function Slug({ pageitem }) {  

   
        return (
            <>
             <div className="product-des" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(pageitem[0].content.rendered) }}></div> 
            {console.log(pageitem[0].slug)} 
            </>
        );
     
    
}


export const getServerSideProps = async (context) => {
    const res = await fetch('https://www.adaptstoday.co.uk/wp-json/wp/v2/pages?slug='+ context.params.slug);
    const pageitem = await res.json();
   // const match = pageitem[0].slug
   
        return {
            props: {
                pageitem,
                fallback: false,  
            }
         
        }

    

}

export default Slug;
