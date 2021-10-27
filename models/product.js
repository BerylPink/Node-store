const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({ //no need to define Id it will be added automatically
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});


module.exports = mongoose.model('Product', productSchema);

// const mongoDb = require('mongodb');
// const getDb = require('../util/database').getDb;

// class Product {
//     constructor(title, price, description, imageUrl, id, userId) {
//         this.title = title;
//         this.price = price;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this._id = id ? new mongoDb.ObjectId(id) : null;
//         this.userId = userId;
//     }

//     save() {
//         const db = getDb();
//         let dbOp;
//         if (this._id) {
//             //Update the product
//             dbOp = db
//                 .collection('products')
//                 .updateOne({_id: this._id }, { $set: this });
//         } else {
//             dbOp = db.collection('products').insertOne(this);
//         }
        
//         return dbOp
//             .then(result => {
//                 console.log(result);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }

//     static fetchAll(){ 
//         const db = getDb();
//         return db
//             .collection('products')
//             .find()
//             .toArray()
//             .then(products => {
//                 console.log(products);
//                 return products;
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }

//     static findByPk(prodId){ 
//         const db = getDb();
//         return db
//             .collection('products')
//             .find({ _id: new mongoDb.ObjectId(prodId) })
//             .next()
//             .then(product => {
//                 console.log(product);
//                 return product;
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }

//     static deleteByPk(prodId){ 
//         const db = getDb();
//         return db
//             .collection('products')
//             .deleteOne({ _id: new mongoDb.ObjectId(prodId) })
//             .then(result => {
//                 console.log('Deleted');
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }

// }

// module.exports = Product;