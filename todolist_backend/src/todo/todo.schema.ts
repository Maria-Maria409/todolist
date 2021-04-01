import * as mongoose from 'mongoose'

export const todoschema = new mongoose.Schema({
date_todo:String,
favorite_todo:String,
show:Boolean,
title_todo:String,
state_todo:String,
})