import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import { RecipesResponse } from "@/types/types";

const GET_RANDOM_RECIPE = gql`
  query GetRandomRecipe {
    recipes @rest(type: "Recipe", path: "/recipes/random?number=1") {
      recipes @type(name: "Recipe") {
        id
        title
        image
        readyInMinutes
        servings
        extendedIngredients {
          id
          name
          amount
          unit
        }
        instructions
      }
    }
  }
`;

export default function Home() {
  const { loading, data } = useQuery<RecipesResponse>(GET_RANDOM_RECIPE, {
    fetchPolicy: "no-cache",
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        <p className="ml-4 text-xl">Loading...</p>
      </div>
    );
  }

  const recipe = data?.recipes?.recipes[0];

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">{recipe?.title}</h1>

      {recipe?.image && (
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={556}
          height={370}
          layout="responsive"
          className="rounded-lg shadow-md"
        />
      )}

      <div className="mt-4">
        <p>
          <strong>Ready in:</strong> {recipe?.readyInMinutes} minutes
        </p>
        <p>
          <strong>Servings:</strong> {recipe?.servings}
        </p>

        <h2 className="text-2xl font-semibold mt-4">Ingredients:</h2>
        <ul className="list-disc list-inside">
          {recipe?.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.amount} {ingredient.unit} {ingredient.name}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-4">Instructions:</h2>
        <p>{recipe?.instructions || "No instructions available."}</p>
      </div>
    </div>
  );
}
