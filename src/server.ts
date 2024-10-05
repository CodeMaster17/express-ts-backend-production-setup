import config from './config/config';

import app from './app';
import logger from './utils/logger';

const server = app.listen(config.PORT);

(() => {
    try {
        // Database connection

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

