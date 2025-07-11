import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.email || !body.firstname || !body.lastname || !body.subject) {
  return createError({ statusCode: 400, statusMessage: 'Champs manquants' })
}

  const transporter = nodemailer.createTransport({
    service: 'gmail', // ou smtp personnalisé
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: body.email,
    to: 'r.nigondpro@gmail.com',
    subject: `Nouveau message de ${body.firstname} ${body.lastname} : ${body.subject}`,
    text: `Email de contact :  ${body.email} / Message : ${body.text}`,
  })

  return { success: true }
})
