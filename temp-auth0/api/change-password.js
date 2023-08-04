import { getSession } from "next-auth/client";
import { connectDatabase } from "../../components/helpers/mongo";
import { verifyPassword, hashPassword } from "../../lib/auth";

async function handler(req, res) {
    if(req.method !== 'PATCH') {
        return;
    }

    const session = await getSession({req: req});

    if(!session) {
        //protect the route 
        res.status(401).json({message: 'Not authenicated'});
        return;
    }

    const userEmail = session.user.email;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    const client = await connectDatabase();

    const userCollection = client.db().collection('users');

    const user  = await userCollection.findOne({ email: userEmail});

    if (!user) {
        res.status(404).json({message: 'User not found'});
        client.close();
        return;
    }

    const currentPassword = user.password;

    const passwordsAreEqual = await verifyPassword(oldPassword, currentPassword);

    if(!passwordsAreEqual) {
        //422 user credentials issues
        res.status(403).json({message: 'Invalid Password'});
        client.close();
        return;
    }

    const hashedPassword = await hashPassword(newPassword);

    const result = await userCollection.updateOne(
        {email: userEmail}, 
        {$set: {password: hashedPassword}}
    );

    console.log('result',result);

    client.close();
    res.status(200).json({message: 'Password Updated'});
}

export default handler;