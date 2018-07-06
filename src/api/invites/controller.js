import { stringify } from 'qs';
import axios from 'axios';

import { API_URL, INVITE_SUFIX, API_TOKEN } from '../../utils/constants';

export async function inviteUserByEmail ({ response, query }) {
  const { email } = query;
  const requestParams = stringify({ token: API_TOKEN, email });
  const url = `${API_URL}/${INVITE_SUFIX}?${requestParams}`;
  const { status, data } = await axios.get(url);

  response.status = status;
  response.body = data;
}
