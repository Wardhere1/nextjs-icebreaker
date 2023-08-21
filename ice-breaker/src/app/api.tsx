export default function handler(req: any, res: any) {
  const { arg1, arg2 } = req.query;
  const sum = parseFloat(arg1) + parseFloat(arg2);
  res.status(200).json({ sum });
}
