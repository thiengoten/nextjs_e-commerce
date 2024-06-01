/**
 * ! Executing this script will delete all data in your database and seed it with 10 users_table.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from "@snaplet/seed"
import { min } from "drizzle-orm"

const main = async () => {
  const seed = await createSeedClient()
  await seed.$resetDatabase(["!public.__drizzle_migrations"])

  // await seed.posts_table((x) => x(10))
  // await seed.users_table((x) => x(10))
  await seed.products((x) =>
    x(8, {
      image_url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      updated_at: new Date(),
      quantity: 1,
    }),
  )

  // Type completion not working? You might want to reload your TypeScript Server to pick up the changes

  console.log("Database seeded successfully!")

  process.exit()
}

main()
