import _ from 'lodash';
import queryString from 'query-string';
import config from './../config/config.json';

const {
    api: { baseUrl, user },
  } = config;


/**
 *
 * @param {object} [queryParams]
 * @param {string} [queryParams.seed]
 * @param {number} [queryParams.page]
 * @param {number} [queryParams.results]
 * @param {Array<string>} [queryParams.inc]
 */
export const getUsers = queryParams => {
    const { allowedQueryParams, defaultQueryParams } = user;
  
    const finalParamsObject = _.pick(
      {
        ...defaultQueryParams,
        ...queryParams,
      },
      allowedQueryParams
    );
  
    const fetchParamsString = queryString.stringify(finalParamsObject, {
      arrayFormat: 'comma',
    });
  
    return fetch(`${baseUrl}?${fetchParamsString}`).then(res => res.json());
  };
  