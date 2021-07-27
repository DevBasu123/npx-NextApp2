import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if(req.method === 'POST') {
        const { email, name, message } = req.body;
        console.log('email:' + email);
        console.log('name:' + name);
        console.log('message:' + message);

        if(         // INVALID INPUT
            !email || 
            !email.includes('@') || 
            !name || 
            name.trim() === '' || 
            !message || 
            message.trim() === '' 
        ) {
            res.status(422).json({message: 'Invalid inputs'});
            return;
        }

        const newMessage = {
            email,
            name,
            message
        };

        let client;
        try{
            const URI = `${process.env.MONGODB_DRIVER}://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/${process.env.MONGODB_DATABASE}${process.env.MONGODB_OTHER_PARAMS}`;
            client = await MongoClient.connect(URI);
        }
        catch(e) {
            console.log(`Error connecting to DB:>>> ${e.message}`);
            res.status(500).json({message: 'Error connecting to Database'});
            return;
        }

        const db = client.db();
        try{
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage._id = result.insertedId;
        }
        catch(e) {
            console.log(`Error saving your message:>>> ${e.message}`);
            client.close();
            res.status(500).json({message: 'Failed to save message!'});
            return;
        }

        client.close();

        res.status(201).json({message: 'Message Stored Successfully!', message: newMessage});
    }
}

export default handler;