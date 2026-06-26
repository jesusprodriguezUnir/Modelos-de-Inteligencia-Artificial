/**
 * Utilidades de formato compartidas entre páginas
 */

/**
 * Formatea un número de tokens de contexto en formato legible (M/K)
 * @param n - Número de tokens o null
 * @returns Texto formateado ("128K", "2M", "—")
 */
export function fmtCtx(n: number | null | undefined): string {
  if (n == null) return '—';
  if (n >= 1_000_000) return `${n / 1_000_000}M`;
  return `${Math.round(n / 1000)}K`;
}

/**
 * Formatea un precio en dólares
 * @param p - Precio o null
 * @returns Texto formateado ("$5", "—")
 */
export function fmtPrice(p: number | null | undefined): string {
  return p == null ? '—' : `$${p}`;
}

/**
 * Convierte una fecha YYYY-MM en formato "mes año" en español
 * @param s - Fecha en formato YYYY-MM o null
 * @returns Texto formateado ("jun 2026", "—")
 */
export function fmtDate(s: string | null | undefined): string {
  if (!s) return '—';
  const [y, m] = s.split('-');
  const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const mes = meses[parseInt(m, 10) - 1];
  return mes ? `${mes} ${y}` : y;
}

/**
 * Escapa caracteres HTML especiales
 * @param s - Texto a escapar
 * @returns Texto con caracteres HTML escapados
 */
export function esc(s: string | number | null | undefined): string {
  return String(s ?? '').replace(/[&<>"]/g, (c) => {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
    };
    return map[c] || c;
  });
}
