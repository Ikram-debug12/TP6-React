import { useReducer } from 'react';

// État de départ du compteur
const etatDepart = {
  nombre: 0
};

// Fonction qui gère les modifications du compteur (renommée pour éviter conflit)
function reducerCompteur(etatCourant, actionRecue) {
  // Vérification du type d'action demandée
  if (actionRecue.type === 'INCREMENTER') {
    return { nombre: etatCourant.nombre + 1 };
  }

  if (actionRecue.type === 'DECREMENTER') {
    return { nombre: etatCourant.nombre - 1 };
  }

  // Si action non reconnue, on retourne l'état inchangé
  return etatCourant;
}

function Compteur() {
  // Initialisation du hook useReducer - Utilisation du reducer renommé
  const [etatCourant, declencherAction] = useReducer(reducerCompteur, etatDepart);

  return (
    <div>
      <p>Compteur : {etatCourant.nombre}</p>
      <button onClick={() => declencherAction({ type: 'INCREMENTER' })}>
        +1
      </button>
      <button onClick={() => declencherAction({ type: 'DECREMENTER' })} style={{ marginLeft: '10px' }}>
        -1
      </button>
    </div>
  );
}

export default Compteur;