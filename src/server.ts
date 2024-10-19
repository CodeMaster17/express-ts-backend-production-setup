import config from './config/config';

import app from './app';
import logger from './utils/logger';
import databaseService from './service/databaseService';

const server = app.listen(config.PORT);

(async () => {
    try {
        // Database connection
        const connection = await databaseService.connect();
        logger.info(`DATABASE_CONNECTED`, {
            meta: {
                CONNECTION_NAME: connection.name
            }
        });

        logger.info(`APPLICATION_STARTED`, {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL
            }
        });
    } catch (error) {
        logger.info(`APPLICATION_ERROR`, {
            meta: error
        });

        server.close((error) => {
            if (error) {
                logger.error(`APPLICATION_ERROR`, {
                    meta: error
                });
            }

            process.exit(1);
        });
    }
})();

