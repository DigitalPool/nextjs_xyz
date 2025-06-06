export default async function Docs(props: { params: Promise<{ slug: string[] }> }) {
    const params = await props.params;
    if (params.slug?.length === 2) {
        return (
            <h1>Viewing docs of feature {params.slug[0]} and concept {params.slug[1]} </h1>
        );
    }
    else if (params.slug?.length === 1) {
        return (
            <h1>Viewing docs of feature {params.slug[0]} </h1>
        );
    }
    else
        return (
            <h1>Docs homepage</h1>
        );
}