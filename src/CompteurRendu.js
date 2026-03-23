import { useEffect, useRef } from 'react';

function CompteurAffichages() {
  const compteurVisites = useRef(0);

  useEffect(() => {
    compteurVisites.current = compteurVisites.current + 1;
    console.log(`📊 Ikram - rendu numéro : ${compteurVisites.current}`);
  });

  const afficherStatistiques = () => {
    console.log(`✨ Le composant a été rendu ${compteurVisites.current} fois.`);
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #4CAF50', 
      borderRadius: '10px',
      backgroundColor: '#f9f9f9'
    }}>
      <p>🔍 Ouvrez la console (F12) pour suivre les affichages du composant.</p>
      <button 
        onClick={afficherStatistiques}
        style={{
          padding: '8px 16px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        📈 Afficher le nombre de rendus
      </button>
    </div>
  );
}

export default CompteurAffichages;