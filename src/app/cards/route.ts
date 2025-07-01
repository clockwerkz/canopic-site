export async function GET(): Promise<Response> {
  const card = {
    name: "Card Test",
    imageId: "1234"
  }
  return new Response(JSON.stringify(card), {
    status: 200,
    headers: { 'Content-Type': 'application/json'}
  })
}