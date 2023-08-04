
import { connectDatabase, insertDocument } from "../../../components/helpers/mongo";
import { hashPassword } from "../../../lib/auth";
async function handler(req, res) {
  
    

    if (!req.method === 'POST') {
        return;
    }

    const data = req.body;
    const {email, password} = data;

     

    //console.log('loginInfo',loginInfo);

    if(!email || !email.includes('@') || !password) {
        res.status(422).json({message: 'password should be 7 characters or more'});
        return;
    }

    const client = await connectDatabase();
        
    const db = client.db();

    console.log('db',db);

    console.log('email here',email);

    const user = await db.collection('users').findOne({
        email: email,
    });

    console.log('user in try',user);

    if(user) {
        

        console.log('user in if',user);
        res.status(422).json({message: 'user already exists - not the best response for security'});
        client.close();
        return;
    }

    const hashedPassword = await hashPassword(password);

    //console.log('hashedPassword',hashedPassword);

    try {
        await insertDocument(client, 'users', { email:email, password: hashedPassword});
        client.close();
    } catch(error) {
        res.status(500).json({message: 'Something when trying to insert data', status: 'error'});
    }  
    res.status(201).json({ message: 'Created user!' });
       
    
}

export default handler;