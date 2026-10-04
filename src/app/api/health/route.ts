export async function GET() {
  return Response.json({
    status: "healthy",
    service: "RMC Backend API",
    timestamp: new Date().toISOString(),
  });
}
