const mongoose = require('mongoose')

const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

//Create
// Post.create({
//     title: "Ikinci Post basligim.",
//     content:"Ikinci Post icerigi,Lorem ipsum text"
// },(error,post)=>{
//     console.log(error,post)
// })

//Read
// Post.find({},(error,post) =>{
//     console.log(error,post)
// })
// Post.findById("60505f1516981a2a8411ef7a",(error,post)=>{
//     console.log(error,post)
// })


//Update
// Post.findByIdAndUpdate("60505f1516981a2a8411ef7a",
// {title:"Benim ikinci Post basligim"},(error,post)=>{console.log(error,post)});

//Delete
Post.findByIdAndDelete("60505ef1bfc31b06dc300f89",(error,post) =>{console.log(error,post)})

