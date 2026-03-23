import { useEffect, useState } from 'react';

function useFetch(urlSource) {
  const [resultats, setResultats] = useState(null);
  const [enCours, setEnCours] = useState(true);
  const [probleme, setProbleme] = useState(null);

  useEffect(() => {
    let estMonte = true;

    const obtenirDonnees = async () => {
      try {
        setEnCours(true);
        setProbleme(null);

        const reponseServeur = await fetch(urlSource);

        if (!reponseServeur.ok) {
          throw new Error(`Erreur ${reponseServeur.status}: Échec de chargement`);
        }

        const donneesBrutes = await reponseServeur.json();

        if (estMonte) {
          setResultats(donneesBrutes);
        }
      } catch (erreurCaptee) {
        if (estMonte) {
          setProbleme(erreurCaptee);
        }
      } finally {
        if (estMonte) {
          setEnCours(false);
        }
      }
    };

    obtenirDonnees();

    return () => {
      estMonte = false;
    };
  }, [urlSource]);

  return { 
    donnees: resultats, 
    chargement: enCours, 
    erreur: probleme 
  };
}

export default useFetch;