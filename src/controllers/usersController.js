import { Prisma } from '@prisma/client'
import prisma from '../../prisma/prismaClient.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const createUser = async (req, res) => {
  console.log('Funcionando rota de criar usuarios')
  const { email, senha } = req.body

  if (!email || !senha) {
    return res
      .status(400)
      .json({ message: 'Digite um email e uma senha válida' })
  }

  try {
    const hashedPassword = await bcrypt.hash(senha, 10)

    const user = await prisma.user.create({
      data: {
        email,
        senha: hashedPassword,
      },
    })
    return res.status(201).json(user)
  } catch (error) {
    return res.status(500).json({ error: 'Falha ao criar usuario' })
  }
}

export const updateUser = async (req, res) => {
  console.log('Funcionando rota de atualizar usuarios')
  const { id } = req.params
  const userId = Number(id)
  const { email, senha } = req.body

  if (email || senha) {
    try {
      const user = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          email,
          senha,
        },
      })
      return res.status(200).json(user)
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
      }
      return res.status(500).json({ error: 'Falha ao atualizar usuario' })
    }
  } else {
    return res
      .status(400)
      .json({ error: 'Dados insuficientes para atualização' })
  }
}

export const getUser = async (req, res) => {
  console.log('Funcionando rota de listar usuarios')

  try {
    const users = await prisma.user.findMany()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).json({ error: 'Falha ao listar usuarios' })
  }
}

export const deleteUser = async (req, res) => {
  console.log('Funcionando rota de deletar usuarios')
  const { id } = req.params
  const userId = Number(id)
  const { email, senha } = req.body

  try {
    const user = await prisma.user.delete({
      where: {
        id: userId,
      },
    })
    return res.status(200).json({ message: 'Usuario deletado com sucesso!' })
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2025'
    ) {
      return res.status(404).json({ error: 'Usuário não encontrado' })
    }
    return res.status(500).json({ error: 'Falha ao deletar usuario' })
  }
}

export const loginUser = async (req, res) => {
  console.log('Funcionando rota de login de usuario')
  const { email, senha } = req.body

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (user && (await bcrypt.compare(senha, user.senha))) {
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' },
      )
      const { senha: _, ...userSemSenha } = user
      return res.status(200).json({ user: userSemSenha, token })
    } else {
      return res.status(401).json({ error: 'Credenciais Invalidas' })
    }
  } catch (error) {
    return res.status(500).json({ error: 'Erro no login' })
  }
}
