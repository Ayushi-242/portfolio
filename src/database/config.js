const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
const username = encodeURIComponent('amodi21');
const dbName = encodeURIComponent('portfolio');
const password = encodeURIComponent('harekrishna');


mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.agnrs5z.mongodb.net/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
