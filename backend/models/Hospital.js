const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  hospitalName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  state: { type: String, required: true },
  city: { type: String, required: true },
  doctors: [{ 
    name: String, 
    specialization: String 
  }],
  adminName: {
    type: String,
    required: true,
    trim: true,
  },
  accepted: {
    type: Boolean,
    default: false
  },
  totalPatients: {
    type: Number,
    default: 0
  },
  appointmentsToday: {
    type: Number,
    default: 0
  },
  availableBeds: {
    type: Number,
    default: 0
  },
  doctorsOnDuty: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Hospital', hospitalSchema);