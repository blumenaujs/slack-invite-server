import { stringify } from 'querystring';
import axios from 'axios';
import { API_TOKEN, API_URL, USER_LIST_SUFIX } from '../../../utils/constants';
import { validatePresentUsersResponse } from './service';

export async function getOnlineUserCount ({response}) {
  const requestParams = stringify({ token: API_TOKEN, presence: true });
  const url = `${API_URL}/${USER_LIST_SUFIX}?${requestParams}`;
  const { data } = await axios.get(url);

  const { status, body } = validatePresentUsersResponse(data);

  response.status = status;
  response.body = body;
}
