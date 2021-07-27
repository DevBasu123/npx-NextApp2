module.exports = {
  reactStrictMode: true,
}

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  const fs = require('fs');
  const path = require('path');

  if( phase === PHASE_DEVELOPMENT_SERVER ) {
    const fPath = path.join( __dirname , '../', '../', '../', 'Secrets', 'NextJS-App2-Secrets.json');
    const fContents = fs.readFileSync(fPath, 'utf-8');
    // console.log( 'FileConetents:\n' + fContents);
    const mySecrets = JSON.parse(fContents);
    // console.log( 'Secrets:\n' + mySecrets);
    return {
      env: {
        MONGODB_DRIVER: mySecrets.MONGODB_DRIVER,
        MONGODB_USERNAME: mySecrets.MONGODB_USERNAME,
        MONGODB_PASSWORD: mySecrets.MONGODB_PASSWORD,
        MONGODB_CLUSTER: mySecrets.MONGODB_CLUSTER,
        MONGODB_DATABASE: mySecrets.MONGODB_DATABASE,
        MONGODB_OTHER_PARAMS: mySecrets.MONGODB_OTHER_PARAMS,
      },
    };
  }
};
