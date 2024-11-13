import db, { genId } from '../../src/modules/db';

const run = async () => {
  await db.post.createMany({
    data: [
      {
        id: genId(),
        slug: 'node-stack',
        title: 'Ultimate Node Stack',
        publishedAt: new Date(),
      },
      {
        id: genId(),
        slug: 'draft-post',
        title: 'Draft Post',
      },
    ],
  });
};
