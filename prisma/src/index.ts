import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.post.deleteMany();
    await prisma.user.deleteMany();
    const user = await prisma.user.create({
        data: {
            name: 'Kyle',
            posts: {
                create: {
                    title: 'PostTitle1',
                    desc: 'PostDesc1'
                }
            }
        },
        include: {
            posts: true
        }
    });
    console.log(user);
}

main()
    .catch((e: Error) => {
        console.error(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })