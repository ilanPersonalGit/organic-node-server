const { QueueClient, QueueServiceClient } = require("@azure/storage-queue");

const connectionString ="DefaultEndpointsProtocol=https;AccountName=messageqstorage23;AccountKey=6Xs+nmXSfNjvG51DIp78SrAk6VNVU5/RR+e8zJFQMsh/U39Rvo/D26QKA0oMtNpGPb86qbFg5lnTp7OSvrxvyw==;EndpointSuffix=core.windows.net";

async function sendMessage(queueName,message) {
// Create a unique name for the queue
try{

console.log("Creating queue: ", queueName);

// Instantiate a QueueServiceClient which will be used
// to create a QueueClient and to list all the queues
console.log(connectionString)
const queueServiceClient = QueueServiceClient.fromConnectionString(connectionString);

// Get a QueueClient which will be used
// to create and manipulate a queue
const queueClient = queueServiceClient.getQueueClient(queueName);

console.log(queueClient);
// Create the queue


await queueClient.sendMessage(JSON.stringify(message));

console.log("Message Sent")
}
catch(e){
    console.log("exception occured")
    console.log(e)
}
}

module.exports = {sendMessage:sendMessage}