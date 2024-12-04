import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


	const result = await model.generateContent("who are u?");
	console.log(result.response.text());
