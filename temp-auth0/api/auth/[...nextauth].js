import NextAuth from "next-auth";
//import Providers from "next-auth/providers";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDatabase } from "../../../components/helpers/mongo";
 
import { verifyPassword } from "../../../lib/auth";

//C:\Program Files\Git\usr\bin
//openssl

//summer13@bt.com
//Summer123

export default NextAuth({
  
    session:{
        jwt:true
    }, 
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            
          },
          async authorize(credentials, req) {
            //console.log('credentials', credentials);
            //console.log('req', req);
            // Add logic here to look up the user from the credentials supplied
            const client = await connectDatabase();
            const db = client.db();
            const usersCollection = db.collection('users');
            //console.log('usersCollection',usersCollection);
            const user = await usersCollection.findOne({
                email:credentials.email
            });
      
            if(!user) {
                client.close();
                throw new Error('No such user exists');
            }

            const isValid = await verifyPassword(credentials.password, user.password);
            console.log('credentials.email', credentials.email);
            console.log('credentials.password', credentials.password);
            console.log('user.password', user.password);

            if(!isValid) {
                client.close();
                throw new Error('No user found');
            }
            client.close();
            return { email: user.email };
          }
        })
      ]
});