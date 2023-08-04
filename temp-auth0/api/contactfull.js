 
import { connectDatabase, insertDocument } from "../../components/helpers/mongo";
  
async function handlerFull(req, res) {

    if(req.method === 'POST') {
      
        const { firstname,lastname, phone, email, message, dateSend } = req.body;

        //More Robust Validation needed for real project
         
        //store in db
        const newMessage = {
            name: firstname,
            lastname:lastname,
            phone:phone,
            email:email,
            message:message,
            date:dateSend
        };

        
        let client;
        
        try {
            client = await connectDatabase();
        } catch(error) { 
            res.status(500).json({message: 'Connecting to database failed'});
            return;
        }
        
        try {
            await insertDocument(client, 'nextjs', newMessage);
            client.close();
        } catch(error) { 
            res.status(500).json({message: 'Inserting data failed'});
            return;
        }

        //client.close();

        res.status(201).json({message: 'Signed Up'});
    }
    
  

}

export default handlerFull;