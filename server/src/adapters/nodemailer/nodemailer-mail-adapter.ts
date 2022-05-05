import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "abde8e67de3cf2",
    pass: "3dbea3d8c90ec3"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe NWL <oi@feedget.com>',
      to: 'Marcelo Barcelos <marcelo.ambarc@gmail.com>',
      subject: subject,
      html: body,
    })
  }
}