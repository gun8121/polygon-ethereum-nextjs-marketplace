const ipfsClient = require(‘ipfs-http-client’);
require('dotenv').config();

const projectId = ‘(process.env.INFURA_PROJECTID)’;
const projectSecret = ‘(process.env.INFURA_IPFS_KEY)’;
const auth =
    ‘Basic ’ + Buffer.from(projectId + ‘:’ + projectSecret).toString(‘base64’);
const client = ipfsClient.create({
    host: ‘ipfs.infura.io’,
    port: 5001,
    protocol: ‘https’,
    headers: {
        authorization: auth,
    },
});
client.add(‘Hello World’).then((res) => {
    console.log(res);
});