import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { nome, empresa, cargo, email, telefone, solucao } = data;

    // Validação básica
    if (!nome || !empresa || !cargo || !email || !telefone || !solucao) {
      return NextResponse.json(
        { success: false, message: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Configuração do transportador de email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Senha de App do Google
      },
    });

    // Data formatada
    const dataAtual = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // Email para você (notificação de novo lead)
    const emailParaVoce = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Você receberá os leads
      subject: `🎯 Novo Lead - ${solucao}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #E95009 0%, #EF751F 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #E95009; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #E95009; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #E95009; font-size: 12px; color: #666; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 Novo Lead - The Right Box</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">${dataAtual}</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Nome:</div>
                <div class="value">${nome}</div>
              </div>
              <div class="field">
                <div class="label">🏢 Empresa:</div>
                <div class="value">${empresa}</div>
              </div>
              <div class="field">
                <div class="label">💼 Cargo:</div>
                <div class="value">${cargo}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}" style="color: #E95009;">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">📱 Telefone/WhatsApp:</div>
                <div class="value">
                  <a href="https://wa.me/${telefone.replace(
                    /\D/g,
                    ""
                  )}" style="color: #E95009;">${telefone}</a>
                </div>
              </div>
              <div class="field">
                <div class="label">🎯 Solução Procurada:</div>
                <div class="value">${solucao}</div>
              </div>
            </div>
            <div class="footer">
              <p>The Right Box - Aceleração Comercial</p>
              <p>Este é um email automático gerado pelo formulário de contato do site.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email de confirmação para o cliente (opcional)
    const emailParaCliente = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "✅ Recebemos seu contato - The Right Box",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #E95009 0%, #EF751F 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
            .header h1 { margin: 0; font-size: 28px; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .button { display: inline-block; background: #E95009; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; margin: 20px 0; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #E95009; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Recebemos seu contato!</h1>
            </div>
            <div class="content">
              <p>Olá <strong>${nome}</strong>,</p>
              <p>Recebemos sua solicitação sobre <strong>${solucao}</strong> e agradecemos pelo interesse!</p>
              <p>Nossa equipe irá analisar suas informações e entrar em contato em breve através do email <strong>${email}</strong> ou telefone <strong>${telefone}</strong>.</p>
              <p><strong>Resumo do seu contato:</strong></p>
              <ul>
                <li>Empresa: ${empresa}</li>
                <li>Cargo: ${cargo}</li>
                <li>Solução: ${solucao}</li>
              </ul>
              <p>Enquanto isso, conheça mais sobre nossas soluções:</p>
              <center>
                <a href="https://therightbox.com.br" class="button">Visitar Site</a>
              </center>
              <div class="footer">
                <p><strong>The Right Box - Aceleração Comercial</strong></p>
                <p>Integramos estratégia, tráfego, CRM e vendas em um único sistema.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Enviar ambos os emails
    await transporter.sendMail(emailParaVoce);
    await transporter.sendMail(emailParaCliente);

    return NextResponse.json({
      success: true,
      message: "Email enviado com sucesso!",
    });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao enviar email. Tente novamente.",
      },
      { status: 500 }
    );
  }
}
