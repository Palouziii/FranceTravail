const remediations = [
  {
    icon: '🛡️',
    title: 'MFA obligatoire pour tous les accès',
    text:
      'Le déploiement systématique d’une authentification multi-facteurs est essentiel, en privilégiant des méthodes solides comme les clés TOTP par exemple, tant pour les agents internes que pour les partenaires. Cela réduit fortement les risques d’usurpation d’identité.',
    source: 'Bonne pratique recommandée par l’ANSSI',
  },
  {
    icon: '🚧',
    title: 'Segmentation et moindre privilège',
    text:
      'Il faut compartimenter les réseaux partenaires et les bases de données centrales, en appliquant le principe du moindre privilège qui consiste à n’accorder à un utilisateur que les droits et les accès strictement nécessaires à sa tâche. Cette mesure limite l’impact d’un compte compromis.',
    source: 'Bonne pratique recommandée par l’ANSSI',
  },
  {
    icon: '📡',
    title: 'Surveillance comportementale et blocage du scraping',
    text:
      'L’implémentation d’outils de surveillance crucial permettant de détecter et bloquer automatiquement les requêtes volumineuses ou anormales, ce qui limite le scraping.',
    source: 'Bonne pratique recommandée par l’ANSSI',
  },
  {
    icon: '🎓',
    title: 'Sensibilisation et formation régulière',
    text:
      'Les agents et partenaires doivent être formés aux pièges du spear-phishing, de l’ingénierie sociale et aux pratiques de sécurité pour identifier une tentative d’usurpation.',
    source: 'Bonne pratique recommandée par l’ANSSI',
  },
]

const organization = [
  {
    title: 'Politique de sécurité pour les partenaires',
    text:
      'Tout organisme externe ayant accès aux serveurs doit respecter des règles de sécurité strictes, avec une supervision solide des accès.',
    source: 'France Travail',
  },
  {
    title: 'Accompagnement des utilisateurs',
    text:
      'Les victimes doivent être informées de manière transparente, avec des campagnes d’information précisant qu’il ne faut jamais communiquer de mots de passe, de RIB ou de code par téléphone ou par email. La notification à la CNIL doit être faite sous 72 heures, puis les personnes concernées doivent être averties au plus tôt.',
    source: 'CNIL',
  },
]

function SolutionsSection() {
  return (
    <section className="section-contenu">
      <div className="mb-4">
        <span className="surtitre">V. Protections</span>
        <h3 className="h2 fw-bold text-dark">Quelles mesures pour réduire le risque ?</h3>
      </div>

      <div className="row g-4">
        {remediations.map((item) => (
          <div className="col-lg-3 col-md-6" key={item.title}>
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

      <div className="boit-sous-section mt-4">
        <h4 className="h5 fw-bold text-dark mb-3">Mesures organisationnelles et humaines</h4>
        <div className="row g-4">
          {organization.map((item) => (
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
      </div>
    </section>
  )
}

export default SolutionsSection
