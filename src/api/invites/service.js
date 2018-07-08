import HttpStatus from 'http-status';

export const SLACK_ERRORS = {
  'already_invited': {
    errorMessage: 'Seu convite já foi enviado, por favor verifique seu e-mail.',
    status: HttpStatus.BAD_REQUEST
  },
  'not_authed': {
    errorMessage: 'Algum dev do BlumenauJS cometeu um errinho rs.Lamentamos, tente novamente em outro momento.',
    status: HttpStatus.INTERNAL_SERVER_ERROR
  }
};

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
