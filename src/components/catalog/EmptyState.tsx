export function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="mt-8 rounded-2xl border border-dashed border-line2 px-6 py-16 text-center">
      <p className="text-lg font-medium text-head">Ningún modelo encaja con ese filtro</p>
      <p className="mx-auto mt-2 max-w-md text-sm text-mute">
        Prueba a quitar el tope de precio, bajar el contexto mínimo o buscar por empresa.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-5 rounded-full bg-head px-4 py-2 text-sm font-semibold text-bg"
      >
        Limpiar filtros
      </button>
    </div>
  );
}
