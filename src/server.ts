import config from './config/config';

import app from './app';

const server = app.listen(config.PORT);

(() => {
    try {
        // Database connection

        console.info(`APPLICATION_STARTED`, {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL
            }
        });
    } catch (error) {
        console.info(`APPLICATION_ERROR`, {
            meta: error
        });

        server.close((error) => {
            if (error) {
                console.error(`APPLICATION_ERROR`, {
                    meta: error
                });
            }

            process.exit(1);
        });
    }
})();

