import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';
 



const ai = new GoogleGenAI({
  apiKey: "AIzaSyA1_kEwUk75lMTV5maAf-smIS83H_oEDu0", 
});
const history=[]
async function chat(userProblem) {
    history.push({
        role:'user',
        parts:[{text:userProblem}],
    })
  const response = await ai.models.generateContent({
    model: "models/gemini-1.5-flash", // 
    contents: history ,
  });
history.push({
        role:'model',
        parts:[{text:response.text}]
    })
    console.log("\n")
  console.log(response.text)
}
async function main() {
   const userProblem =readlineSync.question("Ask me anything-->")
   await chat(userProblem),
   main();

    
}

await main();
