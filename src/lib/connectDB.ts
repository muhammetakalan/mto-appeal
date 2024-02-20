import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

export default async function connectDB() {
  try {
    console.log('Connected to MongoDB')
    await mongoose.connect(MONGODB_URI, {})
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
}
