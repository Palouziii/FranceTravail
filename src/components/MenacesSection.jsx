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

      <div className="chronologie-bloc mt-4">
        <h4 className="h5 fw-bold text-dark mb-3">Sanctions et dysfonctionnements pointés par la CNIL</h4>
        <p className="mb-2 text-secondary">
          La <a className="lien-article" href="https://www.cnil.fr/fr/violation-de-donnees-sanction-5millions-france-travail" target="_blank" rel="noreferrer">CNIL a prononcé une amende historique de 5 millions d’euros</a> à l’encontre de France Travail après avoir constaté plusieurs manquements majeurs de sécurité, notamment :
        </p>
        <ul className="liste-sans-puce text-secondary">
          <li><strong>Défaut de double authentification (MFA) :</strong> les partenaires externes pouvaient se connecter à la base nationale avec un simple identifiant et mot de passe, sans validation supplémentaire.</li>
          <li><strong>Absence de filtrage des requêtes :</strong> un conseiller pouvait interroger la base au-delà de ses besoins géographiques ou professionnels, sans limitation adaptée.</li>
          <li><strong>Manque de détection :</strong> l’absence de mécanismes d’alerte automatisés face à des téléchargements massifs et inhabituels a permis à l’attaque d’échapper aux contrôles pendant près d’un mois.</li>
        </ul>
        <small className="source-label d-block mt-2">Source : CNIL / ANSSI / France Travail</small>
      </div>

    </section>
  )
}

export default MenacesSection
