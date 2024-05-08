import bcrypt from 'bcrypt'
const { hash, compare } = bcrypt

const hashPassword = async (password) => await hash(password, 13)
const comparePassword = async (password, hashed) =>
  await compare(password, hashed)

export default { hashPassword, comparePassword }
