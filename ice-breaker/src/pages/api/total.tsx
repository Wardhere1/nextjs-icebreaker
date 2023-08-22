import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { arg1, arg2 } = req.query;
  console.log(req.query);
  const sum = parseFloat(arg1 as string) + parseFloat(arg2 as string);
  res.status(200).json({ sum });
};

export default handler;
