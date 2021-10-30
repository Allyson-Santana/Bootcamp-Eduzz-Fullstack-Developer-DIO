import mongoose from 'mongoose';
import { Config } from 'config/constants';

export class MongoConnection
{

    public async connect(): Promise<void>
    {        
        try {           
            await  mongoose.connect(Config.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true } );
			console.log("Database connected");
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    } 

}
