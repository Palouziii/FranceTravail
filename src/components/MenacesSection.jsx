const risks = [
  {
    icon: '📞',
    title: 'Hameçonnage personnalisé : Vishing',
    text:
      'Les attaquants peuvent utiliser les vrais noms, identifiants et numéros de sécurité sociale pour simuler des appels officiels et extorquer des codes de validation.',
    source: 'Zataz',
  },
  {
    icon: '📧',
    title: 'Smishing / phishing ultra ciblé',
    text:
      'Des emails ou SMS peuvent sembler authentiques, en imitant notamment les banques, les administrations ou les conseillers, afin de pousser les victimes à cliquer ou à divulguer des éléments sensibles.',
    source: 'CERT-FR / ANSSI',
  },
  {
    icon: '🧑‍💼',
    title: 'Usurpation d’identité administrative',
    text:
      'Des tentatives d’ouverture de dossiers frauduleux sont possibles, ce qui détourne les procédures administratives et peut porter atteinte aux droits des victimes.',
    source: 'France Travail',
  },
]

function MenacesSection() {
  return (
    <section className="section-contenu fond-alternatif">
      <div className="mb-4">
        <span className="surtitre">IV. Menaces directes</span>
        <h3 className="h2 fw-bold text-dark">Effet rebond sur les usagers</h3>
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
