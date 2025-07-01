const imageLookup = {
  "roadkill": {
    src: "TestExportRK.png",
    width: 600,
    height: 800
  }
}

export async function GET(request)  {
  const searchParams = request.nextUrl.searchParams;
  const guess = searchParams.get('guess');
  if (imageLookup[guess]) {
    return new Response(imageLookup[guess]);
  }
  return new Response("Not Found!");
}