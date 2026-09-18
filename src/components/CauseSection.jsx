const faille = [
  {
    icon: '🎣',
    title: 'Phishing classique',
    text:
      'Le phishing classique consiste à envoyer massivement des courriels d’hameçonnage aux destinataires afin d’obtenir des identifiants ou d’inciter à divulguer des informations sensibles.',
    source: 'France Travail',
  },
  {
    icon: '🎯',
    title: 'Spear-phishing ciblé',
    text:
      'Le spear-phishing est un hameçonnage ciblé et de précision visant des agents d’organismes partenaires de France Travail, notamment le réseau des Cap emploi, qui avait accès à une partie de la base de données.',
    source: 'Zataz',
  },
  {
    icon: '📞',
    title: 'Vishing',
    text:
      'Cette manière d’hameçonnage a visé les conseillers via un appel téléphonique et a usurpé leur identité pour pénétrer le réseau sans passer par une attaque technique classique comme une attaque directe d’un serveur ou d’un équipement liée à Internet.',
    source: 'France Travail',
  },
]

const vuln = [
  {
    icon: '🔐',
    title: 'MFA absent ou insuffisant',
    text:
      'L’absence de double facteur d’authentification obligatoire sur l’ensemble des accès distants des partenaires externes a facilité la compromission des comptes.',
    source: 'CERT-FR / ANSSI',
  },
  {
    icon: '🧱',
    title: 'Gestion des droits trop permissive',
    text:
      'Les droits d’accès accordés au réseau partenaire ont été élargis sans contrôle d’intégrité suffisant, exposant indirectement davantage de données sensibles.',
    source: 'France Travail',
  },
  {
    icon: '🚨',
    title: 'Absence de détection en temps réel',
    text:
      'Il manquait des alertes sur les requêtes volumineuses anormales générées à partir d’un compte de conseiller unique. Le “scraping” massif n’a pas été détecté à temps.',
    source: 'CERT-FR / ANSSI',
  },
]

function CauseSection() {
  return (
    <section className="section-contenu fond-alternatif">
      <div className="mb-4">
        <span className="surtitre">II. La faille et ses causes</span>
        <h3 className="h2 fw-bold text-dark">Pourquoi cette intrusion a-t-elle été possible ?</h3>
      </div>

      <div className="row g-4 mb-4">
        {faille.map((item) => (
          <div className="col-lg-4" key={item.title}>
            <article className="card h-100 border-0 shadow-sm rounded-4">
              <div className="card-body">
                <div className="icone-carte">{item.icon}</div>
                <h4 className="h5 fw-bold text-dark mb-3">{item.title}</h4>
                <p className="mb-0 text-secondary">{item.text}</p>
                <small className="source-label d-block mt-3">Source : {item.source}</small>
                <small className="source-label d-block mt-3">Source : {item.source}</small>
              </div>
            </article>
          </div>
        ))}
      </div>

      <div className="boit-sous-section">
        <h4 className="h5 fw-bold text-dark mb-3">Vulnérabilités du système</h4>
        <div className="row g-4">
          {vuln.map((item) => (
            <div className="col-lg-4" key={item.title}>
              <article className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <div className="icone-carte">{item.icon}</div>
                  <h4 className="h5 fw-bold text-dark mb-3">{item.title}</h4>
                  <p className="mb-0 text-secondary">{item.text}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default CauseSection
