const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const slugCheck = {
    slug: {
        in: ["params"],
        isString: {
            errorMessage: "Il parametro dev'essere una stringa",
            bail: true
        },
        custom: {
            options: async (slugToCheck) => {
                const slug = await prisma.post.findUnique({
                    where: { slug: slugToCheck }
                });
                if (!slug) {
                    throw new Error(`Non esiste nessun post con slug ${slugToCheck}`);
                }
                return true;
            }
        }

    }
}

module.exports = {
    slugCheck
}