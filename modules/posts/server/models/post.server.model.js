'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Post Schema
 */
var PostSchema = new Schema({
  title: {
    type: String,
    default: '',
    required: 'Por favor, ingrese un titulo para la publicación',
    trim: true
  },
  body: {
    type: String,
    default: '',
    required: 'Por favor, ingrese un texto para la publicación',
    trim: true
  },
  tags: {
    type: String,
    default: '',
    trim: true
  },
  category: {
    type: String,
    default: '',
    required: 'Por favor, ingrese una categoría',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Post', PostSchema);
