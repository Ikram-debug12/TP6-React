
import { useRef } from 'react';

function FocusInput() {
  const referenceChamp = useRef(null);

  const appliquerFocus = () => {
    if (referenceChamp.current) {
      referenceChamp.current.focus();
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f0f4f8',
      borderRadius: '8px',
      margin: '10px 0'
    }}>
      <label htmlFor="input-utilisateur" style={{ fontWeight: 'bold' }}>
        ✏️ Votre texte : 
      </label>
      <input
        id="input-utilisateur"
        type="text"
        ref={referenceChamp}
        placeholder="Saisissez quelque chose..."
        style={{
          padding: '8px',
          marginLeft: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '200px'
        }}
      />
      <button 
        onClick={appliquerFocus} 
        style={{ 
          marginLeft: '12px',
          padding: '8px 16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        🔍 Focus ici
      </button>
    </div>
  );
}

export default FocusInput;