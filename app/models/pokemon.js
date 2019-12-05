const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  typeOne: {
    type: String,
    required: true
  },
  typeTwo: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

// // Virtual property that generate the file URL location
// uploadSchema.virtual('fileUrl').get(function () {
//   // Generatiing
//   const url = 'https://' + process.env.BUCKET_NAME + '.s3.amazonaws.com/' + this.fileName
//   // Return the value
//   return url
// })

module.exports = mongoose.model('Pokemon', pokemonSchema)
