import { app } from "./app";
import { connectDB } from "./utils/connect";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})