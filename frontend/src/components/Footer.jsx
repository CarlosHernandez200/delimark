export const Footer = () => {
  return (
    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 border-top my-5 py-5">
        <div className="col mb-3">
          <a
            href="/"
            className="d-flex align-items-center link-body-emphasis text-decoration-none mb-3"
          >
            <svg className="" width="40" height="32">
              <use xlinkHref="" />
            </svg>
          </a>
          <p className="text-body-secondary">© 2023</p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h5>Redes Sociales</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-body-secondary p-0">
                Facebook
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-body-secondary p-0">
                Instagram
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-body-secondary p-0">
                Twitter
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-body-secondary p-0">
                Whatsapp
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Más Información</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-body-secondary p-0">
                Servicio al Cliente
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-body-secondary p-0">
                Quejas y Sugerencias
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-body-secondary p-0">
                Sucursales
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-body-secondary p-0">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-body-secondary p-0">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-body-secondary p-0">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-body-secondary p-0">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-body-secondary p-0">
                About
              </a>
            </li>
          </ul>
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Suscríbete y estate pendiente de nuestras novedades...</h5>
              <p>Obtén avisos sobre nuestras promociones.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Suscribirse
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};
