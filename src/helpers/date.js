/**
 *
 * @param {Date} date
 * @returns
 */
export function dateToString(date){
  return new Intl.DateTimeFormat('es-AR',{
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date).replace(',', '');
}
