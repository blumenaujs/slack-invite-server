import HttpStatus from 'http-status'
import { SLACK_ERRORS } from '../../errors/slack-erros';

export function validatePresentUsersResponse (response) {
  return response.ok ? listSuccess(response) : listError(response.error);
}

function listSuccess (response) {
  const body = { count: response.members.filter(m => m.presence === 'active').length };
  const status = HttpStatus.OK;

  return { body, status };
}

function listError (error) {
  const { errorMessage, status } = SLACK_ERRORS[error];
  const body = { errorMessage };

  return { body, status };
}
