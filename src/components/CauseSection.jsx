const faille = [
  {
    icon: '🔑',
    title: 'Compromission des identifiants',
    text:
      'Selon les éléments connus, les identifiants de conseillers Cap emploi ont été obtenus par une tentative d’ingénierie sociale téléphonique, puis utilisés pour se faire passer pour des agents dont l’accès était légitime.',
    source: 'Zataz / CNIL',
  },
  {
    icon: '🎯',
    title: 'Accès partenaire compromis',
    text:
      'Les conseillers Cap emploi disposaient d’un accès légitime à une partie de la base de données, notamment au système de recherche d’usagers. L’attaque a profité de ce droit pour aller plus loin que ce qu’un simple accès local aurait permis.',
    source: 'Zataz',
  },
  {
    icon: '📞',
    title: 'Vishing',
    text:
      'Le point central semble être une tentative d’ingénierie sociale par téléphone visant des conseillers. Une fois les identifiants récupérés, les attaquants ont essayé d’usurper leur identité pour accéder à la base centrale.',
    source: 'Zataz / CNIL',
  },
]

const vuln = [
  {
    icon: '🔐',
    title: 'MFA absent ou insuffisant',
    text:
      'L’absence d’une authentification forte sur les accès distants des partenaires externes a facilité la compromission des comptes. Un simple identifiant et un mot de passe ne suffisent pas face à une usurpation ciblée.',
    source: 'Bonne pratique recommandée par l’ANSSI',
  },
  {
    icon: '🧱',
    title: 'Gestion des droits trop laxistes',
    text:
      'Les droits accordés aux comptes partenaires étaient trop larges par rapport au besoin réel. Cela a permis à un accès légitime de devenir beaucoup plus dangereux qu’il ne devait l’être.',
    source: 'France Travail',
  },
  {
    icon: '🚨',
    title: 'Absence de détection en temps réel',
    text:
      'Il manquait des alertes capables de repérer des requêtes massives ou anormales sur un compte professionnel. Le “scraping” n’a pas été détecté à temps.',
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
