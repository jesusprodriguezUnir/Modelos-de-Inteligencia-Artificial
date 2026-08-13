export function NewsletterCta() {
  return (
    <section className="rounded-3xl border border-line bg-[linear-gradient(180deg,var(--elev),var(--bg))] px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-warn">Alertas</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-head">
          Avísame cuando salga un modelo nuevo
        </h2>
        <p className="mt-2 text-sm text-mute">
          Una nota breve cuando cambie el precio, el contexto o el ranking. Sin hilos diarios.
        </p>
        <form
          className="mx-auto mt-6 flex max-w-md overflow-hidden rounded-2xl border border-line bg-elev"
          action="/blog"
          method="get"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Correo electrónico
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            required
            placeholder="tu@email.com"
            className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-head outline-none placeholder:text-faint"
          />
          <button type="submit" className="m-1 rounded-xl bg-head px-4 text-sm font-semibold text-bg">
            Apuntarme
          </button>
        </form>
        <p className="mt-3 text-[11px] text-faint">
          De momento recogemos interés. El envío se activará con el dominio modelosia.org.
        </p>
      </div>
    </section>
  );
}
