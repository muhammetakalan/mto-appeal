import { Schema, model, models } from 'mongoose'

const recordSchema = new Schema({
  name: String,
  surname: String,
  email: String,
  gender: String,
  birthdate: String,
  tckn: String,
  phoneNumber: String,
  interests: String,
  covenant: String
})

export default models.Record || model('Record', recordSchema)
