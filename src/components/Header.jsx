import PropTypes from 'prop-types'
import logoIut from '../LOGO_iut_dan_quadri-1.png'

function Header({ navItems, activeSection, setActiveSection }) {
  return (
    <header className="entete">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark px-0 py-3">
          <div className="container-fluid px-0">
            <img
              className="logo-officiel"
              src={logoIut}
              alt="IUT de Dijon-Auxerre-Nevers, Université de Bourgogne Europe"
            />

            <div className="menu-navigation d-flex flex-nowrap gap-1 ms-auto align-items-center">
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
              <span className="surtitre">Analyse Cyberattaque France Travail</span>
              <h1 className="display-5 fw-bold lh-sm text-white mb-2">
                Cyberattaque et fuite de données chez France Travail : le bilan
              </h1>
              <p className="lead text-white-50 mb-4">
                Une exfiltration massive de données a touché des millions de personnes. Le cas met en avant
                plusieurs failles de sécurité, des erreurs de gouvernance et un risque lié à l’ingénierie sociale.
                L’attaque a permis l’accès à des comptes légitimes puis l’extraction d’une grande quantité de données.
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

Header.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
}

export default Header
