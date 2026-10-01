const remediations = [
  {
    icon: '🛡️',
    title: 'MFA forte et phishing-resistant',
    text:
      'Le meilleur remède reste une authentification forte, avec des mécanismes résistants au phishing comme FIDO2/WebAuthn. Ce type d’authentification vérifie le bon site ou le bon domaine avant d’accepter la connexion, ce qui rend impossible une simple usurpation de l’identité dans ce type de scénario.',
    source: 'Bonne pratique recommandée par l’ANSSI',
  },
  {
    icon: '🚧',
    title: 'Moindre privilège et cloisonnement applicatif',
    text:
      'Il faut limiter les droits des comptes à ce qu’ils ont strictement besoin d’utiliser. Là où cela compte vraiment, c’est au niveau des accès applicatifs : un compte compromis ne doit pas avoir accès à des données en dehors de son périmètre fonctionnel.',
    source: 'Bonne pratique recommandée par l’ANSSI',
  },
  {
    icon: '📡',
    title: 'Surveillance comportementale et blocage du scraping',
    text:
      'Les outils de surveillance doivent détecter les accès anormaux, les requêtes massives et les téléchargements inhabituels. C’est une bonne manière de couper rapidement une exfiltration avant qu’elle ne devienne trop importante.',
    source: 'Bonne pratique recommandée par l’ANSSI',
  },
  {
    icon: '🎓',
    title: 'Sensibilisation et formation régulière',
    text:
      'Les agents et partenaires doivent être formés aux tentatives d’ingénierie sociale et à la bonne hygiène numérique. En sécurité, la vigilance humaine compte autant que les outils techniques.',
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
