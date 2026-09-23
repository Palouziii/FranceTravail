const risks = [
  {
    icon: '📞',
    title: 'Fraude téléphonique et usurpation',
    text:
      'Les données exposées peuvent être réutilisées pour appeler les victimes en se faisant passer pour France Travail, une banque ou une administration, afin de leur soutirer de nouvelles informations.',
    source: 'Risque associé à la fuite — CNIL',
  },
  {
    icon: '📧',
    title: 'Autres risques : phishing et smishing',
    text:
      'Après une fuite de données, des emails ou SMS frauduleux peuvent sembler authentiques. Ce risque est souvent général.',
    source: 'Risque général — bonnes pratiques ANSSI',
  },
  {
    icon: '🧑‍💼',
    title: 'Usurpation d’identité administrative',
    text:
      'Des tentatives d’ouverture de dossiers frauduleux sont possibles, ce qui détourne les procédures administratives et peut donc porter atteinte aux droits des victimes.',
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
