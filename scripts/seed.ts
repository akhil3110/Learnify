const {PrismaClient} = require('@prisma/client')

const database = new PrismaClient()

async function main() {
    try {
        await database.category.createMany({
            data: [
                {name : "Electronics"},
                {name : "Web Development"},
                {name : "Mobile Development"},
                {name : "Data Science"},
                {name : "Machine Learning"},
                {name : "Artificial Intelligence"},
                {name : "Business"},
                {name : "Finance & Accounting"},
                {name : "Personal Development"},
                {name : "Design"},
                {name : "Marketing"},
                {name : "Lifestyle"},
                {name : "Photography"},
                {name : "Health & Fitness"},
                {name : "Music"}
            ]
        })
    } catch (error) {
        console.log("Error seeding the  database " ,error)
    }finally{
        await database.$disconnect()
    }
}

main()