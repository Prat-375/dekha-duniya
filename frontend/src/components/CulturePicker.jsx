const cultures = ['Russian', 'Japanese', 'Latin American', 'French', 'German', 'Ukrainian'];

export default function CulturePicker({ selectedCulture, onChange }) {
  return (
    <div className="culture-row">
      {cultures.map((culture) => (
        <button
          key={culture}
          type="button"
          className={`culture-chip ${selectedCulture === culture ? 'culture-chip-active' : ''}`}
          onClick={() => onChange(culture)}
        >
          {culture}
        </button>
      ))}
    </div>
  );
}
