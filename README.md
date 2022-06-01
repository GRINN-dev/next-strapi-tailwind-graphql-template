# next-strapi-tailwind-graphql-template

## Pour lancer ce monorepo:

- Pensez a créer une base de données en local (dans l'idéal sur clever-cloud)
- lancer l'install en faisant `yarn`
- Créer un `.env` dans le workspace strapi suivant le `.env.example`
- lancer strapi en faisant `yarn workspace strapi develop` , cette commande lance http://localhost:1337/admin/auth/register-admin , il faut créer un compte admin.
- `yarn dev` lance strapi et le site next
- executer `yarn workspace site codegen` pour générer le fichier `graphql/index.tsx`

bonus:

- `yarn workspace strapi develop` (pour lancer strapi en indépendant)
- `yarn workspace site dev` (pour lancer le front en indépendant)
