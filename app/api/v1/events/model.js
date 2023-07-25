const mongoose = require('mongoose');
const { model, Schema, Types } = mongoose;

let ticketCategorySchema = Schema({
  type: {
    type: String,
    required: [true, 'Tipe tiket harus diisi'],
  },
  price: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    default: 0,
  },
  statusTicketCategories: {
    type: Boolean,
    enum: [true, false],
    default: true,
  },
  expired: {
    type: Date,
  },
});

let eventSchema = Schema(
  {
    title: {
      type: String,
      required: [true, 'Judul event harus diisi'],
      minlength: 3,
      maxlength: 50,
    },
    date: {
      type: Date,
      required: [true, 'Tanggal dan waktu harus diisi'],
    },
    about: {
      type: String,
    },
    tagline: {
      type: String,
      required: [true, 'Tagline harus diisi'],
    },
    keyPoint: {
      type: [String],
    },
    venueName: {
      type: String,
      required: [true, 'Tempat acara harus diisi'],
    },
    statusEvent: {
      type: String,
      enum: ['Draft', 'Published'],
      default: 'Draft',
    },
    tickets: {
      type: [ticketCategorySchema],
      required: true,
    },
    image: {
      type: Types.ObjectId,
      ref: 'Image',
      required: true,
    },
    category: {
      type: Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    talent: {
      type: Types.ObjectId,
      ref: 'Talent',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model('Event', eventSchema);