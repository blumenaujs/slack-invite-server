import HttpStatus from 'http-status';
import { SLACK_ERRORS } from '../errors/slack-erros';

export function validateSlackResponse (response) {
  return response.ok ? inviteSuccess() : inviteError(response.error);
}

function inviteError (slackError) {
  const { errorMessage, status } = SLACK_ERRORS[slackError];
  const body = { errorMessage };
  return { body, status };
}

function inviteSuccess () {
  const body = { message: 'Seu convite foi enviado! Por favor verifique seu e-mail.' };
  const status = HttpStatus.OK;
  return { body, status };
}
