import ItemCount from "./ItemCount"

const miOnAdd = () => { console.log("gracias") };


function ItemListContainer(props) {
  return (
    <>
      <div className="saludo border border-info">{props.greeting}</div>
      <div className="container">
        <div className="row">
          <div className=" col">
            <ItemCount
              onAdd={miOnAdd} />
            <ItemCount />
            <ItemCount />
          </div>
        </div>
      </div>

    </>


  )
};

export default ItemListContainer;
