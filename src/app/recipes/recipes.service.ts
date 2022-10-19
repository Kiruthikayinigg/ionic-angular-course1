import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] =[
    {
      id: 'r1',
      title: 'Schnitzel',
      // eslint-disable-next-line max-len
      imageUrl:'https://insanelygoodrecipes.com/wp-content/uploads/2022/03/Pork-Schnitzel-with-Cauliflower-and-Lemon.webp',
      ingredients:['French Fries','Pork Meat','Salad']
    },

    {
      id: 'r2',
      title: 'Spaghetti',
      // eslint-disable-next-line max-len
      imageUrl:'https://vikalinka.com/wp-content/uploads/2013/11/Chicken-Sun-Dried-Tomato-Pasta-1-Edit.jpg',
      ingredients:['Sphaghetti','Meat','Tomatoes']
    }
  ];


  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe=> recipe.id === recipeId)
  };
 }
 deleteRecipe(recipeId: string){
   this.recipes = this.recipes.filter(recipe=>recipe.id !== recipeId);
 }
}

