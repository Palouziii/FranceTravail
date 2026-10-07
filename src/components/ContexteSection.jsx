const enjeux = [
  {
    title: 'Rôle central de France Travail',
    text:
      'France Travail gère des données très sensibles concernant des millions de personnes. Ici, le vrai problème n’est pas seulement la fuite elle-même, mais le fait que des comptes de conseillers Cap emploi aient été compromis pour accéder à des informations bien plus larges que ce qui est normalement attendu dans un réseau local.',
    source: 'France Travail',
  },
  {
    title: 'Historique de l’attaque',
    text:
      'La détection a eu lieu au début du mois de mars 2024, après une exfiltration massive qui a duré plusieurs semaines. Les accès frauduleux semblent avoir commencé dès février, ce qui montre que l’attaque a été préparée et menée en plusieurs étapes avant d’être remarquée.',
    source: 'France Travail',
  },
  {
    title: 'Impact humain et réglementaire',
    text: (
      <>
        L’attaque concerne potentiellement les demandeurs d’emploi actuels, les personnes ayant utilisé le service au cours des 20 dernières années ainsi que celles qui disposent d’un espace candidat. En droit européen, la notification à la CNIL doit intervenir sous 72 heures après la prise de connaissance de la fuite (<a className="lien-article" href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4#Article33" target="_blank" rel="noreferrer">Article 33</a>), et les victimes doivent être informées dans les meilleurs délais (<a className="lien-article" href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4#Article34" target="_blank" rel="noreferrer">Article 34</a>).
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
               Tout commence par du social engineering au téléphone. Les attaquants appellent des conseillers Cap emploi en se faisant passer pour un collègue ou un interlocuteur interne. Le but : récupérer des identifiants et des mots de passe.
            </p>
          </li>
          <li>
            <span className="date-chronologie">6 février 2024</span>
            <p>
Première connexion suspecte. À partir de là, les pirates entrent avec des comptes valides. Pas de faille technique exploitée, pas d'exploit : juste des identifiants volés.            </p>
          </li>
          <li>
            <span className="date-chronologie">6 février – 5 mars 2024</span>
            <p>
              Pendant un mois, ils lancent des requêtes en masse et récupèrent des blocs entiers de données d'état civil. Ils en profitent parce que les droits d'accès étaient beaucoup trop larges par rapport à ce dont un conseiller a réellement besoin. Et surtout : aucune alerte ne s'est déclenchée, malgré le volume de téléchargements.
            </p>
          </li>
          <li>
            <span className="date-chronologie">8 mars 2024</span>
            <p>
Les équipes techniques repèrent enfin l'activité, bloquent les comptes compromis et notifient la CNIL. L'ANSSI est également alertée.            </p>
          </li>
          <li>
            <span className="date-chronologie">13 mars 2024</span>
            <p>
L'affaire sort publiquement. France Travail et Cap emploi annoncent la fuite et déposent plainte auprès de la section cyber du parquet de Paris.            </p>
          </li>
          <li>
            <span className="date-chronologie">17–19 mars 2024</span>
            <p>
Trois Français de 21 à 23 ans sont interpellés à Valence et à Lyon. Ils sont mis en examen et placés en détention, dans un dossier lié à la revente de données et à des escroqueries financières.            </p>
          </li>
        </ol>
        <small className="source-label d-block mt-3">Sources : France Travail / CNIL / ANSSI / Le Monde</small>
      </div>

      <div className="chronologie-bloc mt-4">
        <h4 className="h5 fw-bold text-dark mb-3">Suite réglementaire de l’incident</h4>
        <p className="mb-2 text-secondary">
          Le 22 janvier 2026, la <a className="lien-article" href="https://www.cnil.fr/fr/violation-de-donnees-sanction-5millions-france-travail" target="_blank" rel="noreferrer">CNIL a infligé une amende de 5 millions d’euros</a> à France Travail, en se fondant sur l’<a className="lien-article" href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4#Article32" target="_blank" rel="noreferrer">article 32</a> du RGPD. L’autorité a constaté plusieurs failles de sécurité, notamment :
        </p>
        <ul className="liste-sans-puce text-secondary">
          <li><strong>Absence de double authentification (MFA) :</strong> les partenaires externes pouvaient se connecter à la base nationale avec un simple identifiant et un mot de passe, sans validation supplémentaire.</li>
          <li><strong>Filtrage des requêtes insuffisant :</strong> un conseiller pouvait interroger la base au-delà de ses besoins géographiques ou professionnels, sans limite claire.</li>
          <li><strong>Détection insuffisante :</strong> l’absence d’alertes automatiques face à des téléchargements massifs et inhabituels a permis à l’attaque de passer inaperçue pendant près d’un mois.</li>
        </ul>
        <small className="source-label d-block mt-2">Source : CNIL / France Travail</small>
      </div>

    </section>
  )
}

export default ContexteSection
