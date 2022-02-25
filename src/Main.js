
const Main = () => {
  return (
    <main>
      <div>
        <div className="main_barra  ">
          <p>
            Juegos populares
          </p>
          <button type="button" class="btn btn-outline-primary">Ver Todos</button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <img src="https://s3.gaming-cdn.com/images/products/2075/271x377/ready-or-not-early-access-early-access-pc-juego-steam-cover.jpg" alt="" />
            </div>
            <div className="col">
              <img src="https://s1.gaming-cdn.com/images/products/4524/271x377/gtfo-pc-juego-steam-cover.jpg" alt="" />
            </div>
            <div className="col">
              <img src="https://s3.gaming-cdn.com/images/products/10220/271x377/martha-is-dead-pc-juego-steam-cover.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Main;