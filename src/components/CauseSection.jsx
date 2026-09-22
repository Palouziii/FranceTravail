const faille = [
  {
    icon: '🎣',
    title: 'Phishing classique',
    text:
      'Le phishing classique consiste à envoyer massivement des courriels d’hameçonnage afin d’obtenir des identifiants ou d’inciter à divulguer des informations sensibles.',
    source: 'France Travail',
  },
  {
    icon: '🎯',
    title: 'Spear-phishing ciblé',
    text:
      'Le spear-phishing est un hameçonnage ciblé et de précision visant des agents d’organismes partenaires de France Travail, notamment le réseau des Cap emploi, qui avait accès à toute les bases de données de France Travail',
    source: 'Zataz',
  },
  {
    icon: '📞',
    title: 'Vishing',
    text:
      'Cette méthode d’hameçonnage a visé des conseillers via un appel téléphonique qui a permis de voler leurs identifiants et d’usurper leur identité. Ce point est essentiel : les attaquants n’ont pas obtenu un accès limité à une base locale. Ils ont utilisé ces identifiants pour accéder à la base de données centrale de France Travail, à une échelle bien plus large que celle d’un simple service ou d’un département. Deux conseillers distincts ont été compromis, ce qui leur a permis de se faire passer pour des agents habilités à l’échelle nationale.',
    source: 'France Travail',
  },
]

const vuln = [
  {
    icon: '🔐',
    title: 'MFA absent ou insuffisant',
    text:
      'L’absence de double facteur d’authentification obligatoire sur l’ensemble des accès distants des partenaires externes a facilité la compromission des comptes.',
    source: 'CERT-FR / ANSSI',
  },
  {
    icon: '🧱',
    title: 'Gestion des droits trop permissive',
    text:
      'Les droits d’accès accordés au réseau partenaire ont été élargis sans contrôle d’intégrité suffisant, exposant indirectement davantage de données sensibles.',
    source: 'France Travail',
  },
  {
    icon: '🚨',
    title: 'Absence de détection en temps réel',
    text:
      'Il manquait des alertes sur les requêtes volumineuses anormales générées à partir d’un compte de conseiller unique. Le “scraping” massif n’a pas été détecté à temps.',
    source: 'CERT-FR / ANSSI',
  },
]

function CauseSection() {
  return (
    <section className="section-contenu fond-alternatif">
      <div className="mb-4">
        <span className="surtitre">II. La faille et ses causes</span>
        <h3 className="h2 fw-bold text-dark">Pourquoi cette intrusion a-t-elle été possible ?</h3>
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
          <span className="chaine-etape">Spear-phising sur des Conseillers Cap Emploi</span>
          <span className="fleche-attaque">→</span>
          <span className="chaine-etape">Vol d’identifiants</span>
          <span className="fleche-attaque">→</span>
          <span className="chaine-etape">Accès à la Base de données</span>
          <span className="fleche-attaque">→</span>
          <span className="chaine-etape">Exfiltration massive des données</span>
        </div>

        <div className="chronologie-bloc mt-4">
          <h4 className="h5 fw-bold text-dark mb-3">Chronologie détaillée de l’attaque</h4>
          <ol className="chronologie-liste">
            <li>
              <span className="date-chronologie">Janvier – début février 2024</span>
              <p>
                Les attaquants commencent par une préparation discrète : ils ciblent des conseillers du réseau Cap emploi via des techniques de phishing et de vishing.
                L’objectif est de subtiliser des identifiants et mots de passe au sein d’un environnement professionnel jugé crédible et peu surveillé.
              </p>
            </li>
            <li>
              <span className="date-chronologie">6 février 2024</span>
              <p>
                Première connexion frauduleuse enregistrée dans le système d’information central. À partir de ce moment, les pirates utilisent des comptes légitimes pour pénétrer le système sans passer par une faille technique classique.
              </p>
            </li>
            <li>
              <span className="date-chronologie">6 février – 5 mars 2024</span>
              <p>
                L’extraction se déroule sur plusieurs semaines. Les pirates se font passer pour les conseillers compromis et lancent des requêtes massives afin d’extraire des blocs entiers de données civiles, en profitant du fait que ces comptes avaient des autorisations nationales.
                Le point critique est que le système interne ne déclenche aucune alerte face à ce volume anormal de consultations et de téléchargements.
              </p>
            </li>
            <li>
              <span className="date-chronologie">8 mars 2024</span>
              <p>
                Les équipes techniques de France Travail détectent enfin l’activité suspecte, bloquent les comptes compromis et notifient officiellement la violation de données à la CNIL. Elles alertent aussi l’ANSSI.
              </p>
            </li>
            <li>
              <span className="date-chronologie">13 mars 2024</span>
              <p>
                L’incident est révélé publiquement. France Travail et Cap emploi annoncent officiellement la fuite de données et déposent une plainte pénale auprès de la section cyber du parquet de Paris.
              </p>
            </li>
            <li>
              <span className="date-chronologie">Fin mars 2024</span>
              <p>
                Moins de deux semaines après la révélation des faits, la police judiciaire identifie les auteurs, trois jeunes Français âgés de 21 à 23 ans, interpellés à Valence et à Lyon. Ils sont mis en examen et placés en détention dans le cadre d’une affaire de cybercriminalité liée à la revente de données et à des escroqueries financières.
              </p>
            </li>
          </ol>
          <small className="source-label d-block mt-3">Source : France Travail / CNIL / ANSSI / Le Monde</small>
        </div>

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
