import HttpStatus from 'http-status';

export const SLACK_ERRORS = {
  'already_invited': {
    errorMessage: 'Seu convite já foi enviado, por favor verifique seu e-mail.',
    status: HttpStatus.BAD_REQUEST
  },
  'not_authed': {
    errorMessage: 'Algum dev do BlumenauJS cometeu um errinho rs.Lamentamos, tente novamente em outro momento.',
    status: HttpStatus.INTERNAL_SERVER_ERROR
  },
  'account_inactive': {
    errorMessage: 'Esse token de autenticação pertence a um usuário excluído',
    status: HttpStatus.NON_AUTHORITATIVE_INFORMATION
  }
};
