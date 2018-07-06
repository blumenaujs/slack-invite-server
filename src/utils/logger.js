import { createLogger, transports, format } from 'winston';
const { timestamp, combine, prettyPrint } = format;

const logger = createLogger({
  transports: [new transports.Console()],
  format: combine(
    timestamp(),
    prettyPrint()
  )
});

export default logger;
