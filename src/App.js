import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurAffichages from './CompteurRendu';
import ArticlesListe from './ListeArticles';
import Chronometre from './Timer';

function App() {
  return (
    <div>
      <h1>TP Hooks Avancés – Ikram</h1>
      <h2>Compteur avec useReducer</h2>
      <Compteur />
      <h2>Mettre le focus avec useRef</h2>
      <FocusInput />
      <h2>Compteur de rendus</h2>
      <CompteurAffichages />
      <h2>Liste d'articles avec useFetch</h2>
      <ArticlesListe />
      <h2>Timer avec nettoyage d'effet</h2>
      <Chronometre />
    </div>
  );
}

export default App;