import moment from 'moment';
import startCase from 'lodash/startCase';

export function buildFilters(query) {
  const keyMap = {
    category: 'fields.sectorList[in]',
    country: 'fields.countryList[in]',
    q: 'query',
    date: 'fields.story_date[lte]',
    template: 'fields.template'
  };
  const formatQuery= (type, string) => {
    const formatter = {
      date: s => moment(s, 'YYYY-MM-DD').toISOString(),
      category: startCase,
      template: startCase
    }[type];

    if (!formatter) return string;
    return formatter(string);
  };

  return Object.keys(query).reduce((acc, next) => {
    const value = formatQuery(next, query[next]);
    const key = keyMap[next];
    if (key && value) return { ...acc, [key]: value };
    return acc;
  }, {});
}