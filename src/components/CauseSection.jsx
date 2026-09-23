const faille = [
  {
    icon: '🔑',
    title: 'Compromission des identifiants',
    text:
      'Les identifiants de deux conseillers Cap emploi ont été obtenus par ingénierie sociale téléphonique, puis utilisés pour se faire passer pour des agents habilités.',
    source: 'Zataz / CNIL',
  },
  {
    icon: '🎯',
    title: 'Accès partenaire compromis',
    text:
      'Les conseillers Cap emploi disposaient d’un accès légitime à une partie de la base de données, surtout au système de recherche usagers. L’attaque a exploité des identifiants compromis, faute de restriction suffisante.',
    source: 'Zataz',
  },
  {
    icon: '📞',
    title: 'Vishing',
    text:
      'Le vecteur central est un appel téléphonique d’ingénierie sociale visant des conseillers. Les attaquants ont volé leurs identifiants, puis usurpé leur identité pour accéder à la base centrale au-delà de la limite.',
    source: 'Zataz / CNIL',
  },
]

const vuln = [
  {
    icon: '🔐',
    title: 'MFA absent ou insuffisant',
    text:
      'L’absence de double facteur d’authentification obligatoire sur l’ensemble des accès distants des partenaires externes a facilité la compromission des comptes.',
    source: 'Bonne pratique recommandée par l’ANSSI',
  },
  {
    icon: '🧱',
    title: 'Gestion des droits trop laxiste ',
    text:
      'Les droits d’accès accordés au réseau partenaire ont été élargis sans contrôle suffisant, exposant indirectement davantage de données sensibles.',
    source: 'France Travail',
  },
  {
    icon: '🚨',
    title: 'Absence de détection en temps réel',
    text:
      'Il manquait des alertes sur les requêtes volumineuses anormales générées à partir d’un compte de conseiller unique. Le “scraping” massif n’a pas été détecté à temps.',
    source: 'Bonne pratique recommandée par l’ANSSI',
  },
]

function CauseSection() {
  return (
    <section className="section-contenu fond-alternatif">
      <div className="mb-4">
        <span className="surtitre">II. Causes & vulnérabilités</span>
        <h3 className="h2 fw-bold text-dark">Comment les failles ont-elles été exploitées ?</h3>
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
              </div>
            </article>
          </div>
        ))}
      </div>

      <div className="boit-sous-section">
        <h4 className="h5 fw-bold text-dark mb-3">Chaîne d’attaque</h4>
        <div className="chaine-attaque" aria-label="Chaîne d’attaque">
          <span className="chaine-etape">Vishing visant des conseillers Cap emploi</span>
          <span className="fleche-attaque">→</span>
          <span className="chaine-etape">Vol d’identifiants</span>
          <span className="fleche-attaque">→</span>
          <span className="chaine-etape">Accès à la Base de données</span>
          <span className="fleche-attaque">→</span>
          <span className="chaine-etape">Exfiltration massive des données</span>
        </div>
      </div>

      <div className="boit-sous-section">
        <h4 className="h5 fw-bold text-dark mb-3 mt-4">Vulnérabilités du système</h4>
        <div className="row g-4">
          {vuln.map((item) => (
            <div className="col-lg-4" key={item.title}>
              <article className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <div className="icone-carte">{item.icon}</div>
                  <h4 className="h5 fw-bold text-dark mb-3">{item.title}</h4>
                  <p className="mb-0 text-secondary">{item.text}</p>
                  <small className="source-label d-block mt-3">Source : {item.source}</small>
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
