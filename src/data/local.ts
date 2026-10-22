export const localCity = 'Pasadena, CA'; // TODO: confirm with client
export const localAreas: string[] = [];
export function localFor(topic: string, _type: 'service' | 'condition' | 'group') {
  return { city: localCity, areas: localAreas, sectionTitle: `${topic} treatment in ${localCity}`, text: [] as string[] };
}
