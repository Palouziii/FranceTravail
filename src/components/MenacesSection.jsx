const risks = [
  {
    icon: '📞',
    title: 'Fraude téléphonique et usurpation',
    text:
      'Les informations exposées peuvent être utilisées pour appeler les victimes en se faisant passer pour France Travail, une banque ou une administration, afin d’obtenir de nouvelles informations.',
    source: 'Risque associé à la fuite — CNIL',
  },
  {
    icon: '📧',
    title: 'Autres risques : phishing et smishing',
    text:
      'Après une fuite de données, les messages frauduleux peuvent sembler légitimes. C’est un risque classique dans ce type d’incident, surtout si les données sont exploitées rapidement.',
    source: 'Risque général — bonnes pratiques ANSSI',
  },
  {
    icon: '🧑‍💼',
    title: 'Usurpation d’identité administrative',
    text:
      'Des tentatives d’ouverture de dossiers ou d’accès frauduleux restent possibles. Cela peut perturber des procédures administratives et porter atteinte aux droits des victimes.',
    source: 'France Travail',
  },
]

function MenacesSection() {
  return (
    <section className="section-contenu fond-alternatif">
      <div className="mb-4">
        <span className="surtitre">IV. Menaces & conséquences</span>
        <h3 className="h2 fw-bold text-dark">Quels risques pour les victimes et l’organisation ?</h3>
      </div>

      <div className="row g-4">
        {risks.map((item) => (
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

    </section>
  )
}

export default MenacesSection
