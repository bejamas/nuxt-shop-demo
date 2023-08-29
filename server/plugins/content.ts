// ./server/plugins/content.ts

import readingTime, { ReadTimeResults } from "reading-time";

// Define a custom interface to include the "file" property in the reading time statistics
interface ReadingTimeStat extends ReadTimeResults {
  file: string;
}

// Array to store the reading time statistics
const readingTimeStats: ReadingTimeStat[] = [];

export default defineNitroPlugin((nitroApp) => {
  // Hook that runs before parsing a file
  nitroApp.hooks.hook(
    "content:file:beforeParse",
    async (file: {
      readingTime: ReadTimeResults; // Property to store the reading time
      _id: string; // File ID
      body: string; // File content
    }) => {
      if (file._id.endsWith(".md")) {
        // Calculate the reading time using the "reading-time" library
        file.readingTime = readingTime(file.body);

        // Add the reading time statistics to the array
        readingTimeStats.push({
          file: file._id,
          ...file.readingTime,
        });
      }
    }
  );

  // Hook that runs after parsing a file
  nitroApp.hooks.hook(
    "content:file:afterParse",
    async (file: {
      readingTime: ReadingTimeStat | undefined; // Property to store the reading time statistics
      _id: any; // File ID
    }) => {
      // Find the reading time statistics for the current file
      const readingTime = readingTimeStats.find(
        (item) => item.file === file._id
      );

      // Assign the reading time statistics to the file
      file.readingTime = readingTime;
    }
  );
});
