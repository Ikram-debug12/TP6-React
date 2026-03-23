import { useEffect, useRef, useState } from 'react';

function Timer() {
  const [tempsEcoule, setTempsEcoule] = useState(0);
  const [actif, setActif] = useState(true);
  const sauvegardeInterval = useRef(null);

  useEffect(() => {
    if (actif) {
      sauvegardeInterval.current = setInterval(() => {
        setTempsEcoule((valeurPrecedente) => valeurPrecedente + 1);
      }, 1000);
    }

    return () => {
      clearInterval(sauvegardeInterval.current);
    };
  }, [actif]);

  const lancer = () => setActif(true);
  const suspendre = () => setActif(false);

  const remettreAZero = () => {
    setActif(false);
    setTempsEcoule(0);
  };

  const afficherTemps = () => {
    const minutesCalc = Math.floor(tempsEcoule / 60);
    const secondesCalc = tempsEcoule % 60;

    return `${String(minutesCalc).padStart(2, '0')}:${String(secondesCalc).padStart(2, '0')}`;
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'monospace' }}>
      <h2 style={{ fontSize: '32px', letterSpacing: '2px' }}>{afficherTemps()}</h2>

      <div style={{ marginTop: '15px' }}>
        <button 
          onClick={lancer} 
          disabled={actif}
          style={{ padding: '8px 16px', margin: '0 5px', cursor: 'pointer' }}
        >
          ▶️ Démarrer
        </button>
        <button 
          onClick={suspendre} 
          disabled={!actif} 
          style={{ padding: '8px 16px', margin: '0 5px', cursor: 'pointer' }}
        >
          ⏸️ Suspendre
        </button>
        <button 
          onClick={remettreAZero}
          style={{ padding: '8px 16px', margin: '0 5px', cursor: 'pointer' }}
        >
          🔄 Remise à zéro
        </button>
      </div>

      <p style={{ marginTop: '15px', fontSize: '14px', color: '#666' }}>
        {actif ? '⏱️ Chronomètre en marche' : '⏹️ Chronomètre à l\'arrêt'}
      </p>
    </div>
  );
}

export default Timer;