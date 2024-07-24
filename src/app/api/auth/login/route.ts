import { login } from "../../../(login)/actions"



export async function POST(request: Request) {
  const { email, password } = await request.json();

  const result = await login({ email, password });

  if (result?.error) {
    return new Response(JSON.stringify({ error: result.error }), { status: 400 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}

