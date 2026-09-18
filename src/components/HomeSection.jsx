function HomeSection() {
  return (
    <>
      <section className="section-contenu text-center">
        <div className="mb-4">
          <span className="surtitre">Présentation</span>
          <h3 className="h2 fw-bold text-dark">Cyberattaque et fuite de données sensibles chez France Travail</h3>
        </div>

        <p className="lead text-secondary mx-auto mb-0" style={{ maxWidth: '900px' }}>
          Une exfiltration massive de données a touché des millions de personnes. Ce cas met en lumière
          des vulnérabilités techniques, des erreurs de gouvernance et un risque majeur lié à la manipulation humaine.
        </p>
      </section>
    </>
  )
}

export default HomeSection
