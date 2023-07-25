const mongoose = require('mongoose');
const { model, Schema, Types } = mongoose;

const talentSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Nama harus diisi'],
    },
    role: {
      type: String,
      default: '-',
    },
    // relasi dengan Image
    image: {
      type: Types.ObjectId,
      ref: 'Image',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model('Talent', talentSchema);
