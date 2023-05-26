import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI!).then((database) => {
    // eslint-disable-next-line no-console
    console.log(`DATABASE CONNECTED!`, database.connection.db.databaseName);
});

export default mongoose;