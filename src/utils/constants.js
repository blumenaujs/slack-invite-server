import dotenv from 'dotenv';

dotenv.config();

export const API_URL = 'https://slack.com/api';
export const API_TOKEN = process.env.SLACK_TOKEN;
export const INVITE_SUFIX = 'users.admin.invite';
