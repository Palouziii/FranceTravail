const compromised = [
  'Nom, prénom',
  'Date et lieu de naissance',
  'Numéro de Sécurité Sociale (NIR)',
  'Identifiant France Travail',
  'Adresse email',
  'Adresse postale',
  'Numéro de téléphone',
]

const preserved = [
  'Mots de passe',
  'Coordonnées bancaires (RIB)',
  'Données d’indemnisation',
  'Justificatifs personnels',
]

const diffusion = [
  {
    title: 'Vente sur le Dark Web',
    text:
      'Les bases de données ont été vendues et partagées sur des forums clandestins, notamment des places de marché du Dark Web et des réseaux privés comme les canaux Telegram.',
    source: 'Zataz',
  },
  {
    title: 'Recoupement avec d’autres fuites',
    text:
      'Les données ont ensuite été recoupées avec d’autres fuites antérieures afin d’agrandir le phénomène de l’attaque et d’augmenter leur valeur sur le marché noir.',
    source: 'Zataz',
  },
]

function DonneesSection() {
  return (
    <section className="section-contenu">
      <div className="mb-4">
        <span className="surtitre">III. Données compromises</span>
        <h3 className="h2 fw-bold text-dark">Nature des données, diffusion et menace</h3>
      </div>

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="panneau-liste h-100">
            <h4 className="h5 fw-bold text-dark mb-3">Données compromises</h4>
            <ul className="mb-0 ps-3 text-secondary">
              {compromised.map((item) => (
                <li key={item} className="mb-2">{item}</li>
              ))}
            </ul>
            <small className="source-label d-block mt-3">Source : France Travail</small>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="panneau-liste panneau-avertissement h-100">
            <h4 className="h5 fw-bold text-dark mb-3">Données préservées</h4>
            <ul className="mb-0 ps-3 text-secondary">
              {preserved.map((item) => (
                <li key={item} className="mb-2">{item}</li>
              ))}
            </ul>
            <small className="source-label d-block mt-3">Source : France Travail</small>
          </div>
        </div>
      </div>

      <div className="row g-4 mt-1">
        {diffusion.map((item) => (
          <div className="col-lg-6" key={item.title}>
            <article className="card h-100 border-0 shadow-sm rounded-4">
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

export default DonneesSection
