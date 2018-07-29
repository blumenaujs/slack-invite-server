import HttpStatus from 'http-status'
import { SLACK_ERRORS } from '../../errors/slack-erros';

export function validatePresentUsersResponse (response) {
  return response.ok ? listSuccess(response) : listError(response.error);
}

function listSuccess (data) {
  /*
    Slack's API also returns the 'slackbot', which is not a user,
    the 'slackbot' comes with the flag 'is_bot' setted as false
  */
  const validUsers = data.members.filter(user => !user.deleted && !user.is_bot && user.name !== 'slackbot');
  const onlineUsers = validUsers.filter(m => m.presence === 'active');
  const body = { onlineUsers: onlineUsers.length, registeredUsers: validUsers.length };
  const status = HttpStatus.OK;

  return { body, status };
}

function listError (error) {
  const { errorMessage, status } = SLACK_ERRORS[error];
  const body = { errorMessage };

  return { body, status };
}
