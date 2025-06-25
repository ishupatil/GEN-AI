import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';
 



import dotenv from 'dotenv';
dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
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
