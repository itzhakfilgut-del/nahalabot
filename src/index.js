import { handleMessage } from "./conversation.js";


export default {

  async fetch(request, env) {

    const url = new URL(request.url);


    // אימות webhook מול Meta
    if (request.method === "GET") {

      const mode = url.searchParams.get("hub.mode");
      const token = url.searchParams.get("hub.verify_token");
      const challenge = url.searchParams.get("hub.challenge");


      if (
        mode === "subscribe" &&
        token === env.VERIFY_TOKEN
      ) {
        return new Response(challenge);
      }


      return new Response(
        "Verification failed",
        { status: 403 }
      );
    }



    // קבלת הודעות
    if (request.method === "POST") {

      const body = await request.json();


      const message =
        body?.entry?.[0]
          ?.changes?.[0]
          ?.value
          ?.messages?.[0];


      if (message) {

        const phone =
          message.from;


        const text =
          message.text?.body ||
          message.interactive?.button_reply?.id ||
          "";


        await handleMessage(
          phone,
          text,
          env
        );
      }


      return new Response("OK");
    }


    return new Response("Not found", {
      status:404
    });

  }

};
