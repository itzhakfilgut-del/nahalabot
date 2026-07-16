export async function sendWhatsApp(
  phone,
  message,
  env
) {


  await fetch(
    `https://graph.facebook.com/v20.0/${env.PHONE_NUMBER_ID}/messages`,
    {

      method:"POST",

      headers:{
        "Authorization":
          `Bearer ${env.WHATSAPP_TOKEN}`,

        "Content-Type":
          "application/json"
      },


      body:JSON.stringify({

        messaging_product:"whatsapp",

        to:phone,

        type:"text",

        text:{
          body:message
        }

      })

    }
  );

}
