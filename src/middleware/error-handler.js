import logger from '../utils/logger';

async function errorHandler (ctx, next) {
  try {
    await next()
  } catch (err) {
    ctx.status = err.statusCode || 500
    ctx.body = err.toJSON ? err.toJSON() : { message: err.message, ...err }
    logger.error(`Request error => ${JSON.stringify(err)}`)
  }
}

export default errorHandler;
