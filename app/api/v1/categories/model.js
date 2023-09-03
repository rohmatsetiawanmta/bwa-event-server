const mongoose = require('mongoose');
const { model, Schema, Types } = mongoose;

const categorySchema = Schema(
  {
    name: {
      type: String,
      minlength: [3, 'Kategori minimal terdiri dari 3 karakter'],
      maxlength: [20, 'Kategori maksimal terdiri dari 20 karakter'],
      required: [true, 'Kategori harus diisi'],
    },
    organizer: {
      type: Types.ObjectId,
      ref: 'Organizer',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model('Category', categorySchema);
