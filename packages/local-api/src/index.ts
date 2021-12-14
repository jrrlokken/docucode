import express from "express";
import cors from "cors";

export const serve = (port: number, filename: string, dir: string) => {
  const app = express();

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};
