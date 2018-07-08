import { stringify } from 'qs';
import axios from 'axios';

import { API_URL, INVITE_SUFIX, API_TOKEN } from '../../utils/constants';
import { validateSlackResponse } from './service';

export async function inviteUserByEmail ({ response, query }) {
  const { email } = query;
  const requestParams = stringify({ token: API_TOKEN, email });
  const url = `${API_URL}/${INVITE_SUFIX}?${requestParams}`;
  const { data } = await axios.get(url);
  const { status, body } = validateSlackResponse(data);

  response.status = status;
  response.body = body;
}
