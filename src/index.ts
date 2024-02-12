import { getPort } from '@common/utils/envConfig';
import { app, logger } from '@src/server';
// import { Sequelize } from "sequelize-typescript";

const port = getPort();

const server = app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
// const sequelize = new Sequelize({
//   database: 'med_db',
//   dialect: 'postgres',
//   username: 'root',
//   password: '',
//   storage: ':memory:',
//   models: [__dirname + '/models'], // or [Player, Team],
// });

const onCloseSignal = () => {
  logger.info('sigint received, shutting down');
  server.close(() => {
    logger.info('server closed');
    process.exit();
  });
  setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
};

process.on('SIGINT', onCloseSignal);
process.on('SIGTERM', onCloseSignal);
