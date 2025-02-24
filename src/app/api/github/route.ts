import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const repoName = searchParams.get('repoName');

    if (!repoName || typeof repoName !== 'string') {
        return NextResponse.json({ error: 'Repo name is required' }, { status: 400 });
    }

    try {
        const response = await fetch(`https://api.github.com/repos/felipengr/${repoName}`, {
            headers: {
                'Authorization': `token ${process.env.GITHUB_TOKEN}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Github API error: ${response.status}`);
        }

        const data = await response.json();

        return NextResponse.json({
            name: data.name,
            html_url: data.html_url,
        });

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
            return NextResponse.json({ error: error.message || 'Failed to fetch repo data' }, { status: 500 })
        // biome-ignore lint/style/noUselessElse: <explanation>
        } else {
            console.error("Erro desconhecido:", error);
            return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
        }
    }
}