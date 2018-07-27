import HttpStatus from 'http-status';
import { SLACK_ERRORS } from '../../errors/slack-erros'

export function validateRegisteredUsersCount (data) {
  return data.ok ? registerUsersCountSucess(data) : registerUsersCountError(data.error)
}

function registerUsersCountSucess (data) {
  // Slack's API also returns the 'slackbot', which is not a user
  const count = data.members.filter(user => !user.deleted).length - 1;
  const body = { count };
  const status = HttpStatus.OK;

  return { body, status }
}

function registerUsersCountError (slackError) {
  const { errorMessage, status } = SLACK_ERRORS[slackError];
  const body = { errorMessage };

  return { body, status }
}
