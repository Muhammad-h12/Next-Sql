// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mysql = require("mysql2/promise");
import { getData } from "@/utils/db";

export default async function handler(req, res) {
  try {
    const data = await getData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error });
  }
}
