const remediations = [
  {
    icon: '🛡️',
    title: 'MFA forte et résistante au phishing',
    text:
      'La mesure la plus efficace reste une authentification forte, avec des mécanismes résistants au phishing comme FIDO2/WebAuthn. Ce type d’authentification vérifie le bon site ou le bon domaine avant d’accepter la connexion, ce qui rend beaucoup plus difficile l’usurpation d’identité.',
    source: 'ANSSI — Guide d’hygiène informatique',
  },
  {
    icon: '🚧',
    title: 'Moindre privilège',
    text:
      'Les droits d’accès doivent être réduits au strict nécessaire. Au niveau applicatif, un compte compromis ne doit pas pouvoir atteindre des données en dehors de son périmètre fonctionnel.',
    source: 'ANSSI — Guide d’hygiène informatique',
  },
  {
    icon: '📡',
    title: 'Surveillance et blocage du scraping',
    text:
      'Les systèmes de surveillance doivent repérer les connexions anormales, les requêtes massives et les téléchargements inhabituels. Cela permet de stopper une exfiltration avant qu’elle ne s’étende trop largement.',
    source: 'ANSSI — Guide d’hygiène informatique',
  },
  {
    icon: '🎓',
    title: 'Sensibilisation et formation régulière',
    text:
      'Les agents et partenaires doivent être formés aux tentatives d’ingénierie sociale et à la bonne hygiène numérique. C’est le point le plus important ici : l’attaque n’a exploité aucune faille technique, elle est passée par un coup de téléphone. Aucun outil ne compense un identifiant donné volontairement.',
    source: 'ANSSI — Guide d’hygiène informatique',
  },
]

const organization = [
  {
    title: 'Politique de sécurité pour les partenaires',
    text:
      'Tout organisme externe ayant accès aux serveurs doit respecter des règles de sécurité strictes, avec une supervision sérieuse des accès.',
    source: 'France Travail',
  },
  {
    title: 'Accompagnement des utilisateurs',
    text:
      'Les victimes doivent être clairement informées, avec des campagnes précisant qu’il ne faut jamais communiquer de mots de passe, de RIB ou de code par téléphone ou par e-mail.',
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
                <small className="source-label d-block mt-3">{item.source}</small>
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
                  <small className="source-label d-block mt-3">{item.source}</small>
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
