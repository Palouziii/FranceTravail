const faille = [
  {
    icon: '🎯',
    title: 'Accès partenaire compromis',
    text:
      'Les conseillers Cap emploi disposaient d’un accès légitime à une partie de la base de données, notamment au système de recherche d’usagers. L’attaque a exploité ce droit pour aller plus loin que ce qu’un simple accès local aurait normalement permis.',
    source: 'Zataz',
  },
  {
    icon: '📞',
    title: 'Vishing et vol d’identifiants',
    text:
      'Selon Zataz, l’attaque aurait démarré par de l’ingénierie sociale par téléphone : les pirates appellent des conseillers Cap emploi en se faisant passer pour un interlocuteur interne, et récupèrent leurs identifiants. Ils s’en servent ensuite pour se connecter à la base centrale en passant pour des agents légitimes.',
    source: 'Zataz / CNIL',
  },
]

const vuln = [
  {
    icon: '🔐',
    title: 'MFA absent ou insuffisant',
    text:
      'Aucune authentification forte sur les accès distants des partenaires externes. Un identifiant et un mot de passe suffisaient : un mot de passe volé donnait donc un accès complet, sans second facteur pour bloquer l’usurpation.',
    source: 'Bonne pratique recommandée par l’ANSSI',
  },
  {
    icon: '🧱',
    title: 'Gestion des droits trop laxistes',
    text:
      'Les droits accordés aux comptes partenaires dépassaient largement le besoin réel. Un compte légitime pouvait interroger la base bien au-delà de son périmètre géographique et métier.',
    source: 'France Travail',
  },
  {
    icon: '🚨',
    title: 'Absence de détection en temps réel',
    text:
      'Aucun mécanisme d’alerte sur des requêtes massives ou inhabituelles depuis un compte professionnel. L’exfiltration a tourné un mois sans déclencher la moindre alerte.',
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
          <span className="chaine-etape">Vishing sur des conseillers Cap emploi</span>
          <span className="fleche-attaque">→</span>
          <span className="chaine-etape">Vol d’identifiants</span>
          <span className="fleche-attaque">→</span>
          <span className="chaine-etape">Connexion à la base nationale</span>
          <span className="fleche-attaque">→</span>
          <span className="chaine-etape">Exfiltration massive de données</span>
        </div>
      </div>

      <div className="boit-so us-section">
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
