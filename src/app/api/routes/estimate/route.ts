export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Call the routing service in the cloud
    const routingServiceUrl = "https://rmc-routing-service-production.up.railway.app/api/v1/routes/estimate";
    
    const response = await fetch(routingServiceUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return Response.json(
        { error: "Failed to estimate route" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Route estimation error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
