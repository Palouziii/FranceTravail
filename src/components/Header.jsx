import PropTypes from 'prop-types'

function Header({ navItems, activeSection, setActiveSection }) {
  return (
    <header className="entete">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark px-0 py-3">
          <div className="container-fluid px-0">
            <div className="logo-marque">
              <span>FranceTravail</span>
            </div>

            <div className="d-flex flex-wrap gap-2 ms-auto align-items-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`nav-onglet btn btn-sm ${activeSection === item.id ? 'btn-light text-dark' : 'btn-outline-light text-white-50'}`}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {activeSection === 'accueil' && (
          <div className="row align-items-center g-4 py-4">
            <div className="col-lg-8">
              <span className="surtitre">Analyse de sécurité</span>
              <h1 className="display-5 fw-bold lh-sm text-white mb-3">
                Cyberattaque et fuite de données sensibles chez France Travail
              </h1>
              <p className="lead text-white-50 mb-4">
                Une exfiltration massive de données a touché des millions de personnes. Ce cas met en avant
                des des failles, des erreurs de gouvernance et un risque
                majeur lié à l’ingénierie social. Il est question d’une simple compromission
                d’identifiants qui c’est étendu à l’echelle natio nal.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 rounded-pill fw-bold"
                  onClick={() => setActiveSection('contexte')}
                >
                  Découvrir l’incident
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg px-4 rounded-pill fw-bold"
                  onClick={() => setActiveSection('solutions')}
                >
                  Voir les protections
                </button>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="carte-impact">
                <p className="libelle-impact">Impact estimé</p>
                <h2 className="display-4 fw-bold text-white mb-3">43 millions</h2>
                <p className="text-white-50 mb-0">
                  de personnes potentiellement concernées, selon les estimations autour de l’incident.
                </p>
                <div className="grille-mini">
                  <div>
                    <strong className="d-block fs-5">36,8M</strong>
                    <span>estimation transmise à la CNIL</span>
                  </div>
                  <div>
                    <strong className="d-block fs-5">CNIL</strong>
                    <span>notification obligatoire</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
