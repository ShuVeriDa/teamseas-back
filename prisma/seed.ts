import { PrismaClient } from 'prisma/prisma-client';

const prisma = new PrismaClient();

async function main() {
  await prisma.donation.deleteMany();
  const alice = await prisma.donation.create({
    data: {
      email: 'alisce@prisma.io',
      displayName: 'Alice',
      count: 5,
    },
  });

  console.log({ alice });
}

main().catch((e) => {
  console.error(e);
});
