import { stringify } from 'querystring';
import { API_TOKEN, API_URL, USER_LIST_SUFIX } from '../../../utils/constants';
import axios from 'axios';
import { validateRegisteredUsersCount } from './service';

export async function getRegisteredUsersCount ({ response }) {
  const requestParams = stringify({token: API_TOKEN});
  const url = `${API_URL}/${USER_LIST_SUFIX}?${requestParams}`;
  const { data } = await axios.get(url);
  const { body, status } = validateRegisteredUsersCount(data);

  response.status = status;
  response.body = body;
}
