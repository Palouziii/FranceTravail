const enjeux = [
  {
    title: 'Rôle central de France Travail',
    text:
      'France Travail manipule des données très sensibles de millions de citoyens. Dans ce cas, le point important n’est pas seulement la fuite elle-même, mais le fait que des comptes de conseillers Cap Emploi ont été compromis puis utilisés pour accéder à des informations bien au-delà d’un simple périmètre local.',
    source: 'France Travail',
  },
  {
    title: 'Historique de l’attaque',
    text:
      'La détection a eu lieu au début du mois de mars 2024, après une exfiltration massive qui a duré plusieurs semaines. Les accès frauduleux semblent avoir commencé dès février, ce qui montre que l’attaque a été préparée et menée en plusieurs phases avant d’être repérée.',
    source: 'France Travail',
  },
  {
    title: 'Impact humain et réglementaire',
    text: (
      <>
        L’attaque concerne potentiellement les demandeurs d’emploi actuels, les personnes ayant utilisé le service au cours des 20 dernières années et celles qui disposent d’un espace candidat. En droit européen, la notification à la CNIL doit intervenir sous 72 heures après la prise de connaissance de la fuite (<a className="lien-article" href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4#Article33" target="_blank" rel="noreferrer">Article 33</a>), et les victimes doivent être informées dans les meilleurs délais (<a className="lien-article" href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4#Article34" target="_blank" rel="noreferrer">Article 34</a>).
      </>
    ),
    source: 'CNIL / Légifrance',
  },
]

function ContexteSection() {
  return (
    <section className="section-contenu">
      <div className="mb-4">
        <span className="surtitre">I. Contexte & chronologie</span>
        <h3 className="h2 fw-bold text-dark">Comprendre l’incident, son déroulement et son impact</h3>
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

      <div className="chronologie-bloc mt-4">      
        <h4 className="h5 fw-bold text-dark mb-3">Déroulement de l’incident</h4>
        <ol className="chronologie-liste">
          <li>
            <span className="date-chronologie">Janvier – début février 2024</span>
            <p>
              Les attaquants ciblent des conseillers du réseau Cap emploi par une tentative d’ingénierie sociale téléphonique.
              L’idée est de récupérer des identifiants et des mots de passe dans un environnement professionnel qui paraît crédible et peu surveillé.
            </p>
          </li>
          <li>
            <span className="date-chronologie">6 février 2024</span>
            <p>
              Première connexion enregistrée dans le système d’information central. À partir de ce moment, les pirates utilisent des comptes légitimes pour pénétrer le système sans passer par une faille classique.
            </p>
          </li>
          <li>
            <span className="date-chronologie">6 février – 5 mars 2024</span>
            <p>
              L’extraction se déroule sur plusieurs semaines. Les pirates se font passer pour des conseillers et lancent des requêtes massives pour récupérer des blocs entiers de données civiles, en profitant de droits trop larges par rapport à leur besoin réel.
              Le point critique est qu’aucune alerte ne semble être déclenchée face à ce volume anormal de consultations et de téléchargements.
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
            <span className="date-chronologie">17–19 mars 2024</span>
            <p>
              Autour du 17 au 19 mars, trois jeunes Français âgés de 21 à 23 ans sont interpellés à Valence et à Lyon. Ils sont mis en examen et placés en détention dans le cadre d’une affaire de cybercriminalité liée à la revente de données et à des escroqueries financières.
            </p>
          </li>
        </ol>
        <small className="source-label d-block mt-3">Sources : France Travail / CNIL / ANSSI / Le Monde</small>
      </div>

      <div className="chronologie-bloc mt-4">
        <h4 className="h5 fw-bold text-dark mb-3">Suite réglementaire de l’incident</h4>
        <p className="mb-2 text-secondary">
          Le 22 janvier 2026, la <a className="lien-article" href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4#Article32" target="_blank" rel="noreferrer">CNIL a prononcé une amende de 5 millions d’euros</a> à l’encontre de France Travail, en se reposant sur l’<a className="lien-article" href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4#Article32" target="_blank" rel="noreferrer">article 32</a> du RGPD, après avoir constaté plusieurs problèmes de sécurité, notamment :
        </p>
        <ul className="liste-sans-puce text-secondary">
          <li><strong>Défaut de double authentification (MFA) :</strong> les partenaires externes pouvaient se connecter à la base nationale avec un simple identifiant et mot de passe, sans validation supplémentaire.</li>
          <li><strong>Absence de filtrage des requêtes :</strong> un conseiller pouvait interroger la base au-delà de ses besoins géographiques ou professionnels, sans limitation stricte.</li>
          <li><strong>Manque de détection :</strong> l’absence de mécanismes d’alerte automatisés face à des téléchargements massifs et inhabituels a permis à l’attaque d’échapper aux contrôles pendant près d’un mois.</li>
        </ul>
        <small className="source-label d-block mt-2">Source : CNIL / France Travail</small>
      </div>

    </section>
  )
}

export default ContexteSection
