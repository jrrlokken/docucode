import { Command } from "commander";
import { serve } from "@docucode/local-api";
import path from "path";

const isProduction = process.env.NODE_ENV === "production";

export const serveCommand = new Command()
  .command("serve [filename]")
  .description("Open a file for editing")
  .option("-p, --port <number>", "port number for listener", "4000")
  .action(async (filename = "notebook.yaml", options: { port: string }) => {
    try {
      const dir = path.join(process.cwd(), path.dirname(filename));
      await serve(
        parseInt(options.port),
        path.basename(filename),
        dir,
        !isProduction
      );
      console.log(
        `Opened ${filename}. Navigate to http://localhost:${options.port} to edit.`
      );
    } catch (error: any) {
      if (error.code === "EDDADRINUSE") {
        console.error("Port is in use. Try running jbook on another port.");
      } else {
        console.log("Here's the problem", error.message);
      }
      process.exit(1);
    }
  });
