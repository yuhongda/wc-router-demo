export const getFileDetails = file =>
  new Promise(async (resolves, rejects) => {
    const { filename, mimetype, createReadStream } = await file;
    let filesize = 0;
    let stream = createReadStream();
    stream.on("data", chunk => {
      filesize += chunk.length;
    });
    stream.once("end", () =>
      resolves({
        filename,
        mimetype,
        filesize
      })
    );
    stream.on("error", rejects);
  });