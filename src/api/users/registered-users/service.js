import HttpStatus from 'http-status';
import { SLACK_ERRORS } from '../../errors/slack-erros'

export function validateRegisteredUsersCount (data) {
  return data.ok ? usersCountSuccess(data) : usersCountError(data.error)
}

function usersCountSuccess (data) {
  /*
    Slack's API also returns the 'slackbot', which is not a user,
    the 'slackbot' comes with the flag 'is_bot' setted as false
  */
  const count = data.members.filter(user => !user.deleted && !user.is_bot).length - 1;
  const body = { count };
  const status = HttpStatus.OK;

  return { body, status }
}

function usersCountError (slackError) {
  const { errorMessage, status } = SLACK_ERRORS[slackError];
  const body = { errorMessage };

  return { body, status }
}
