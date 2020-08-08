import { useRouter } from "next/router";

const Product = () => {

  let add = 0

  const router = useRouter();

  const query = router.query;  

  if(query.id != undefined){
    console.log(query.id);
  }

  const addFunc = () => {
    add++;
    console.log(add);
  }  

  return(
    <div>
      <button onClick={addFunc}>Tambah</button>
    </div>
  )

}

export default Product;