import { sendWhatsApp } 
from "./whatsapp.js";


export async function handleMessage(
  phone,
  text,
  env
){


  if (
    text === "" ||
    text === "התחל"
  ){

    await sendWhatsApp(
      phone,
      "שלום וברוכים הבאים 🚍",
      env
    );


    await sendWhatsApp(
      phone,
`
בחר אפשרות:

1️⃣ אני רוצה להירשם להסעה

2️⃣ אני רוצה לפתוח רישום להסעה

3️⃣ אני רוצה לשמוע עוד פרטים
`,
      env
    );


    return;
  }



  if(text.includes("1")){


    await sendWhatsApp(
      phone,
      "בחר אזור:",
      env
    );


    return;
  }



  if(text.includes("2")){


    await sendWhatsApp(
      phone,
      "לפתיחת רישום להסעה יש לפנות לנציג שלנו.",
      env
    );


    return;
  }



  if(text.includes("3")){


    await sendWhatsApp(
      phone,
      env.MORE_DETAILS_MESSAGE ||
      "פרטים נוספים יישלחו בהמשך.",
      env
    );


    return;
  }


}
