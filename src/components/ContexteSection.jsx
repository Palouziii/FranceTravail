const enjeux = [
  {
    title: 'Rôle central de France Travail',
    text:
      'France Travail (ex-Pôle Emploi) gère des données sensibles de millions de citoyens français. Ce sont des informations directement liées à la vie administrative, professionnelle et personnelle des usagers.',
    source: 'France Travail',
  },
  {
    title: 'Historique de l’attaque',
    text:
      'La détection a eu lieu au début du mois de mars 2024, après une exfiltration massive qui s’est déroulée sur plusieurs semaines. Des accès frauduleux avaient déjà été identifiés dès février 2024.',
    source: 'France Travail',
  },
  {
    title: 'Impact humain et réglementaire',
    text:
      'L’attaque concerne potentiellement les demandeurs d’emploi actuels et des 20 dernières années, ainsi que les personnes disposant d’un espace candidat. Le respect du RGPD impose d’alerter la CNIL et les victimes dans des délais stricts.',
    source: 'CNIL / Légifrance',
  },
]

function ContexteSection() {
  return (
    <section className="section-contenu">
      <div className="mb-4">
        <span className="surtitre">I. Contexte & enjeux</span>
        <h3 className="h2 fw-bold text-dark">Rôle, historique et impact de l’incident</h3>
      </div>

      <div className="row g-4">
        {enjeux.map((item) => (
          <div className="col-lg-4" key={item.title}>
            <article className="card h-100 border-0 rounded-4">
              <div className="card-body">
                <h4 className="h5 fw-bold text-dark mb-3">{item.title}</h4>
                <p className="mb-0 text-secondary">{item.text}</p>
                <small className="source-label d-block mt-3">Source : {item.source}</small>
              </div>
            </article>
          </div>
        ))}
      </div>

    </section>
  )
}

export default ContexteSection
