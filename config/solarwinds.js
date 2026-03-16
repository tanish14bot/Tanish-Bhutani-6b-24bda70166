import axios from "axios";

export async function sendToSolarWinds(logEntry) {
  const token = process.env.SOLARWINDS_TOKEN;
  if (!token) return;
  try {
    await axios.post(
      "https://logs.collector.solarwinds.com/v1/log",
      logEntry,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.error("SolarWinds log error:", err.message);
  }
}
