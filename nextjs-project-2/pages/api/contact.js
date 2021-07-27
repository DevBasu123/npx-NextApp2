function handler(req, res) {
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
        console.log(newMessage);
        res.status(201).json({message: 'Stored Successfully!', message: newMessage});
    }
}

export default handler;