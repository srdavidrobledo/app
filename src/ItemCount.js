import { useState } from "react"


function ItemCount(props) {

    let stock = 10;
    let inicial = 0;

    let [contador, setContador] = useState(0)


    let sumar = () => {

        if (contador < stock) {

            setContador(contador + 1)

        }

    }



    let restar = () => {

        if (inicial !== contador) {

            setContador(contador - 1)

        }

    }


    let confirmar = () => {
        // { props.onAdd }

    }

    return (
        <div className="container">
            <div className="row">
                <div className=" col">

                    <button type="button" className="CompraB btn btn-outline-primary" onClick={sumar}> + </button>

                    <div className="botones">
                        <p className="CompraP">
                            disponibles : {stock}
                        </p>

                        <p className="CompraP">
                            juegos a comprar : {contador}
                        </p>
                    </div>

                    <button type="button" className="CompraB btn btn-outline-primary" onClick={restar}> - </button>

                    <div>
                        <button type="button" className="CompraB btn btn-outline-primary" onClick={confirmar}> confirmar </button>
                    </div>


                </div>
            </div>
        </div>
    )
};

export default ItemCount;