import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
    const projects = (await getCollection('projects')).filter(({ data }) => data.pubDate);

    if (projects.length === 0) {
        return new Response(null, { status: 204 });
    }

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: projects
            .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
            .map((project) => ({
                title: project.data.title,
                description: project.data.shortDescription ?? project.data.description,
                pubDate: project.data.pubDate,
                link: `/projects/${project.id}/`,
            })),
    });
}
