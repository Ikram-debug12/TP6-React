import useFetch from './useFetch';

function ArticlesListe() {
  const { donnees, chargement, erreur } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  console.log('Données:', donnees);  // Pour debug
  console.log('Chargement:', chargement);
  console.log('Erreur:', erreur);

  // Gestion du chargement
  if (chargement) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>⏳ Récupération des données en cours...</p>
      </div>
    );
  }

  // Gestion des erreurs
  if (erreur) {
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <p>❌ Problème de connexion : {erreur.message}</p>
      </div>
    );
  }

  // Vérification des données
  if (!donnees || donnees.length === 0) {
    return (
      <div style={{ padding: '20px' }}>
        <p>📭 Aucun contenu disponible pour le moment.</p>
        <button onClick={() => window.location.reload()}>🔄 Réessayer</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '16px' }}>
      <h3 style={{ color: '#333', borderBottom: '2px solid #4CAF50', paddingBottom: '8px' }}>
        📰 {donnees.length} articles disponibles
      </h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {donnees.slice(0, 10).map((article) => (
          <li 
            key={article.id} 
            style={{
              padding: '12px',
              marginBottom: '8px',
              backgroundColor: '#f9f9f9',
              borderRadius: '6px',
              borderLeft: '3px solid #4CAF50'
            }}
          >
            <strong style={{ color: '#2196F3' }}>{article.id}.</strong> {article.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticlesListe;